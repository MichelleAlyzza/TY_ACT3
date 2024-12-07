(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="171",Pp=0,Wh=1,Ip=2,Pd=1,Lp=2,yi=3,Ti=0,Mn=1,ei=2,Yi=0,ts=1,ha=2,Xh=3,qh=4,Dp=5,gr=100,Np=101,Fp=102,Up=103,Bp=104,Op=200,zp=201,Vp=202,kp=203,Fl=204,Ul=205,Hp=206,Gp=207,Wp=208,Xp=209,qp=210,Yp=211,$p=212,jp=213,Kp=214,Bl=0,Ol=1,zl=2,ls=3,Vl=4,kl=5,Hl=6,Gl=7,Id=0,Zp=1,Jp=2,$i=0,Qp=1,tm=2,em=3,nm=4,im=5,rm=6,sm=7,Yh="attached",om="detached",Ld=300,cs=301,hs=302,Wl=303,Xl=304,ba=306,us=1e3,ki=1001,ua=1002,an=1003,Dd=1004,Vs=1005,Dn=1006,Jo=1007,wi=1008,Ri=1009,Nd=1010,Fd=1011,Ks=1012,qc=1013,Er=1014,jn=1015,mo=1016,Yc=1017,$c=1018,ds=1020,Ud=35902,Bd=1021,Od=1022,Vn=1023,zd=1024,Vd=1025,es=1026,fs=1027,jc=1028,Kc=1029,kd=1030,Zc=1031,Jc=1033,Qo=33776,ta=33777,ea=33778,na=33779,ql=35840,Yl=35841,$l=35842,jl=35843,Kl=36196,Zl=37492,Jl=37496,Ql=37808,tc=37809,ec=37810,nc=37811,ic=37812,rc=37813,sc=37814,oc=37815,ac=37816,lc=37817,cc=37818,hc=37819,uc=37820,dc=37821,ia=36492,fc=36494,pc=36495,Hd=36283,mc=36284,gc=36285,vc=36286,am=2200,lm=2201,cm=2202,Zs=2300,Js=2301,Oa=2302,$r=2400,jr=2401,da=2402,Qc=2500,hm=2501,um=0,Gd=1,_c=2,dm=3200,fm=3201,th=0,pm=1,Vi="",Je="srgb",pn="srgb-linear",fa="linear",De="srgb",Ir=7680,$h=519,mm=512,gm=513,vm=514,Wd=515,_m=516,xm=517,ym=518,Mm=519,xc=35044,jh="300 es",Ai=2e3,pa=2001;class Tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kh=1234567;const Ws=Math.PI/180,ps=180/Math.PI;function Kn(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[o&255]+rn[o>>8&255]+rn[o>>16&255]+rn[o>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function xe(o,t,e){return Math.max(t,Math.min(e,o))}function eh(o,t){return(o%t+t)%t}function Sm(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function Em(o,t,e){return o!==t?(e-o)/(t-o):0}function Xs(o,t,e){return(1-e)*o+e*t}function wm(o,t,e,n){return Xs(o,t,1-Math.exp(-e*n))}function Am(o,t=1){return t-Math.abs(eh(o,t*2)-t)}function bm(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Tm(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function Rm(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Cm(o,t){return o+Math.random()*(t-o)}function Pm(o){return o*(.5-Math.random())}function Im(o){o!==void 0&&(Kh=o);let t=Kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lm(o){return o*Ws}function Dm(o){return o*ps}function Nm(o){return(o&o-1)===0&&o!==0}function Fm(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Um(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Bm(o,t,e,n,i){const r=Math.cos,s=Math.sin,a=r(e/2),l=s(e/2),c=r((t+n)/2),h=s((t+n)/2),u=r((t-n)/2),d=s((t-n)/2),f=r((n-t)/2),m=s((n-t)/2);switch(i){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*m,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*m,a*c);break;case"ZYZ":o.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Le(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Om={DEG2RAD:Ws,RAD2DEG:ps,generateUUID:Kn,clamp:xe,euclideanModulo:eh,mapLinear:Sm,inverseLerp:Em,lerp:Xs,damp:wm,pingpong:Am,smoothstep:bm,smootherstep:Tm,randInt:Rm,randFloat:Cm,randFloatSpread:Pm,seededRandom:Im,degToRad:Lm,radToDeg:Dm,isPowerOfTwo:Nm,ceilPowerOfTwo:Fm,floorPowerOfTwo:Um,setQuaternionFromProperEuler:Bm,normalize:Le,denormalize:Yn};class Me{constructor(t=0,e=0){Me.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,i,r,s,a,l,c){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,l,c)}set(t,e,n,i,r,s,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],x=i[1],y=i[4],_=i[7],E=i[2],A=i[5],R=i[8];return r[0]=s*v+a*x+l*E,r[3]=s*g+a*y+l*A,r[6]=s*p+a*_+l*R,r[1]=c*v+h*x+u*E,r[4]=c*g+h*y+u*A,r[7]=c*p+h*_+u*R,r[2]=d*v+f*x+m*E,r[5]=d*g+f*y+m*A,r[8]=d*p+f*_+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*s*h-e*a*c-n*r*h+n*a*l+i*r*c-i*s*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*s-a*c,d=a*l-h*r,f=c*r-s*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*s)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(s*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-i*c,i*l,-i*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(za.makeScale(t,e)),this}rotate(t){return this.premultiply(za.makeRotation(-t)),this}translate(t,e){return this.premultiply(za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const za=new fe;function Xd(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Qs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function zm(){const o=Qs("canvas");return o.style.display="block",o}const Zh={};function Yr(o){o in Zh||(Zh[o]=!0,console.warn(o))}function Vm(o,t,e){return new Promise(function(n,i){function r(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function km(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hm(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jh=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gm(){const o={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===De&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===De&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vi?fa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[pn]:{primaries:t,whitePoint:n,transfer:fa,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:De,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),o}const Ee=Gm();function bi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ns(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Lr;class Wm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Lr===void 0&&(Lr=Qs("canvas")),Lr.width=t.width,Lr.height=t.height;const n=Lr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Lr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=bi(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xm=0;class qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Va(i[s].image)):r.push(Va(i[s]))}else r=Va(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Va(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Wm.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qm=0;class tn extends Tr{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=ki,i=ki,r=Dn,s=wi,a=Vn,l=Ri,c=tn.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Kn(),this.name="",this.source=new qd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ld)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Ld;tn.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,n=0,i=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(f+1)/2,E=(p+1)/2,A=(h+d)/4,R=(u+v)/4,b=(m+g)/4;return y>_&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=R/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=A/i,r=b/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=R/r,i=b/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ym extends Tr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends Ym{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yd extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $m extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[s+0],f=r[s+1],m=r[s+2],v=r[s+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let g=1-a;const p=l*d+c*f+h*m+u*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),A=Math.atan2(E,p*x);g=Math.sin(g*A)/E,a=Math.sin(a*A)/E}const _=a*x;if(l=l*g+d*_,c=c*g+f*_,h=h*g+m*_,u=u*g+v*_,g===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[s],d=r[s+1],f=r[s+2],m=r[s+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(s){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+s*a+i*c-r*l,this._y=i*h+s*l+r*a-n*c,this._z=r*h+s*c+n*l-i*a,this._w=s*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*s+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*i-a*n),h=2*(a*e-r*i),u=2*(r*n-s*e);return this.x=e+l*c+s*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new $,tu=new Zn;class Ii{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Wn):Wn.fromBufferAttribute(r,s),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),So.subVectors(this.max,Cs),Dr.subVectors(t.a,Cs),Nr.subVectors(t.b,Cs),Fr.subVectors(t.c,Cs),Di.subVectors(Nr,Dr),Ni.subVectors(Fr,Nr),ir.subVectors(Dr,Fr);let e=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-ir.z,ir.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,ir.z,0,-ir.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-ir.y,ir.x,0];return!Ha(e,Dr,Nr,Fr,So)||(e=[1,0,0,0,1,0,0,0,1],!Ha(e,Dr,Nr,Fr,So))?!1:(Eo.crossVectors(Di,Ni),e=[Eo.x,Eo.y,Eo.z],Ha(e,Dr,Nr,Fr,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pi=[new $,new $,new $,new $,new $,new $,new $,new $],Wn=new $,Mo=new Ii,Dr=new $,Nr=new $,Fr=new $,Di=new $,Ni=new $,ir=new $,Cs=new $,So=new $,Eo=new $,rr=new $;function Ha(o,t,e,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){rr.fromArray(o,r);const a=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),l=t.dot(rr),c=e.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const jm=new Ii,Ps=new $,Ga=new $;class hi{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ps,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Ga)),this.expandByPoint(Ps.copy(t.center).sub(Ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new $,Wa=new $,wo=new $,Fi=new $,Xa=new $,Ao=new $,qa=new $;class go{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wa.copy(t).add(e).multiplyScalar(.5),wo.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(Wa);const r=t.distanceTo(e)*.5,s=-this.direction.dot(wo),a=Fi.dot(this.direction),l=-Fi.dot(wo),c=Fi.lengthSq(),h=Math.abs(1-s*s);let u,d,f,m;if(h>0)if(u=s*l-a,d=s*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+s*d+2*a)+d*(s*u+d+2*l)+c}else d=r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-s*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(s*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=s>0?-r:r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Wa).addScaledVector(wo,d),f}intersectSphere(t,e){mi.subVectors(t.center,this.origin);const n=mi.dot(this.direction),i=mi.dot(mi)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,s=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,s=(t.min.y-d.y)*h),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,n,i,r){Xa.subVectors(e,t),Ao.subVectors(n,t),qa.crossVectors(Xa,Ao);let s=this.direction.dot(qa),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Fi.subVectors(this.origin,t);const l=a*this.direction.dot(Ao.crossVectors(Fi,Ao));if(l<0)return null;const c=a*this.direction.dot(Xa.cross(Fi));if(c<0||l+c>s)return null;const h=-a*Fi.dot(qa);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,i,r,s,a,l,c,h,u,d,f,m,v,g){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,l,c,h,u,d,f,m,v,g)}set(t,e,n,i,r,s,a,l,c,h,u,d,f,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ur.setFromMatrixColumn(t,0).length(),r=1/Ur.setFromMatrixColumn(t,1).length(),s=1/Ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=s*h,f=s*u,m=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=m+f*c,e[10]=s*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;e[0]=d+v*a,e[4]=m*a-f,e[8]=s*c,e[1]=s*u,e[5]=s*h,e[9]=-a,e[2]=f*a-m,e[6]=v+d*a,e[10]=s*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;e[0]=d-v*a,e[4]=-s*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=s*h,e[9]=v-d*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){const d=s*h,f=s*u,m=a*h,v=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){const d=s*l,f=s*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=s*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){const d=s*l,f=s*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=s*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Km,t,Zm)}lookAt(t,e,n){const i=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ui.crossVectors(n,Cn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ui.crossVectors(n,Cn)),Ui.normalize(),bo.crossVectors(Cn,Ui),i[0]=Ui.x,i[4]=bo.x,i[8]=Cn.x,i[1]=Ui.y,i[5]=bo.y,i[9]=Cn.y,i[2]=Ui.z,i[6]=bo.z,i[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],y=n[7],_=n[11],E=n[15],A=i[0],R=i[4],b=i[8],S=i[12],M=i[1],w=i[5],F=i[9],N=i[13],V=i[2],H=i[6],Y=i[10],B=i[14],L=i[3],tt=i[7],J=i[11],O=i[15];return r[0]=s*A+a*M+l*V+c*L,r[4]=s*R+a*w+l*H+c*tt,r[8]=s*b+a*F+l*Y+c*J,r[12]=s*S+a*N+l*B+c*O,r[1]=h*A+u*M+d*V+f*L,r[5]=h*R+u*w+d*H+f*tt,r[9]=h*b+u*F+d*Y+f*J,r[13]=h*S+u*N+d*B+f*O,r[2]=m*A+v*M+g*V+p*L,r[6]=m*R+v*w+g*H+p*tt,r[10]=m*b+v*F+g*Y+p*J,r[14]=m*S+v*N+g*B+p*O,r[3]=x*A+y*M+_*V+E*L,r[7]=x*R+y*w+_*H+E*tt,r[11]=x*b+y*F+_*Y+E*J,r[15]=x*S+y*N+_*B+E*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*s*d-i*s*f+i*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*s*u+n*s*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*s*u-n*s*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],x=u*g*c-v*d*c+v*l*f-a*g*f-u*l*p+a*d*p,y=m*d*c-h*g*c-m*l*f+s*g*f+h*l*p-s*d*p,_=h*v*c-m*u*c+m*a*f-s*v*f-h*a*p+s*u*p,E=m*u*l-h*v*l-m*a*d+s*v*d+h*a*g-s*u*g,A=e*x+n*y+i*_+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=x*R,t[1]=(v*d*r-u*g*r-v*i*f+n*g*f+u*i*p-n*d*p)*R,t[2]=(a*g*r-v*l*r+v*i*c-n*g*c-a*i*p+n*l*p)*R,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*R,t[4]=y*R,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*R,t[6]=(m*l*r-s*g*r-m*i*c+e*g*c+s*i*p-e*l*p)*R,t[7]=(s*d*r-h*l*r+h*i*c-e*d*c-s*i*f+e*l*f)*R,t[8]=_*R,t[9]=(m*u*r-h*v*r-m*n*f+e*v*f+h*n*p-e*u*p)*R,t[10]=(s*v*r-m*a*r+m*n*c-e*v*c-s*n*p+e*a*p)*R,t[11]=(h*a*r-s*u*r-h*n*c+e*u*c+s*n*f-e*a*f)*R,t[12]=E*R,t[13]=(h*v*i-m*u*i+m*n*d-e*v*d-h*n*g+e*u*g)*R,t[14]=(m*a*i-s*v*i-m*n*l+e*v*l+s*n*g-e*a*g)*R,t[15]=(s*u*i-h*a*i+h*n*l-e*u*l-s*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,l=t.z,c=r*s,h=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*s,0,c*l-i*a,h*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,a=e._z,l=e._w,c=r+r,h=s+s,u=a+a,d=r*c,f=r*h,m=r*u,v=s*h,g=s*u,p=a*u,x=l*c,y=l*h,_=l*u,E=n.x,A=n.y,R=n.z;return i[0]=(1-(v+p))*E,i[1]=(f+_)*E,i[2]=(m-y)*E,i[3]=0,i[4]=(f-_)*A,i[5]=(1-(d+p))*A,i[6]=(g+x)*A,i[7]=0,i[8]=(m+y)*R,i[9]=(g-x)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ur.set(i[0],i[1],i[2]).length();const s=Ur.set(i[4],i[5],i[6]).length(),a=Ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Xn.copy(this);const c=1/r,h=1/s,u=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,e.setFromRotationMatrix(Xn),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=Ai){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(a===Ai)f=-(s+r)/(s-r),m=-2*s*r/(s-r);else if(a===pa)f=-s/(s-r),m=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=Ai){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(s-r),d=(e+t)*c,f=(n+i)*h;let m,v;if(a===Ai)m=(s+r)*u,v=-2*u;else if(a===pa)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ur=new $,Xn=new de,Km=new $(0,0,0),Zm=new $(1,1,1),Ui=new $,bo=new $,Cn=new $,eu=new de,nu=new Zn;class ai{constructor(t=0,e=0,n=0,i=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nu.setFromEuler(this),this.setFromQuaternion(nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class nh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jm=0;const iu=new $,Br=new Zn,gi=new de,To=new $,Is=new $,Qm=new $,tg=new Zn,ru=new $(1,0,0),su=new $(0,1,0),ou=new $(0,0,1),au={type:"added"},eg={type:"removed"},Or={type:"childadded",child:null},Ya={type:"childremoved",child:null};class Ve extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new $,e=new ai,n=new Zn,i=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new fe}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(su,t)}rotateZ(t){return this.rotateOnAxis(ou,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(su,t)}translateZ(t){return this.translateOnAxis(ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?To.copy(t):To.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Is,To,this.up):gi.lookAt(To,Is,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),Br.setFromRotationMatrix(gi),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(au),Or.child=t,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eg),Ya.child=t,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(au),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Qm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,tg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),d=s(t.skeletons),f=s(t.animations),m=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function s(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ve.DEFAULT_UP=new $(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new $,vi=new $,$a=new $,_i=new $,zr=new $,Vr=new $,lu=new $,ja=new $,Ka=new $,Za=new $,Ja=new Te,Qa=new Te,tl=new Te;class $n{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qn.subVectors(t,e),i.cross(qn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qn.subVectors(i,e),vi.subVectors(n,e),$a.subVectors(t,e);const s=qn.dot(qn),a=qn.dot(vi),l=qn.dot($a),c=vi.dot(vi),h=vi.dot($a),u=s*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(s*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,i,r,s,a,l){return this.getBarycoord(t,e,n,i,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(s,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,n,i,r,s){return Ja.setScalar(0),Qa.setScalar(0),tl.setScalar(0),Ja.fromBufferAttribute(t,e),Qa.fromBufferAttribute(t,n),tl.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(Ja,r.x),s.addScaledVector(Qa,r.y),s.addScaledVector(tl,r.z),s}static isFrontFacing(t,e,n,i){return qn.subVectors(n,e),vi.subVectors(t,e),qn.cross(vi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),qn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return $n.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let s,a;zr.subVectors(i,n),Vr.subVectors(r,n),ja.subVectors(t,n);const l=zr.dot(ja),c=Vr.dot(ja);if(l<=0&&c<=0)return e.copy(n);Ka.subVectors(t,i);const h=zr.dot(Ka),u=Vr.dot(Ka);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),e.copy(n).addScaledVector(zr,s);Za.subVectors(t,r);const f=zr.dot(Za),m=Vr.dot(Za);if(m>=0&&f<=m)return e.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Vr,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return lu.subVectors(r,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(lu,a);const p=1/(g+v+d);return s=v*p,a=d*p,e.copy(n).addScaledVector(zr,s).addScaledVector(Vr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function el(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class ae{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ee.workingColorSpace){if(t=eh(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=el(s,r,t+1/3),this.g=el(s,r,t),this.b=el(s,r,t-1/3)}return Ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=$d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Ee.fromWorkingColorSpace(sn.copy(this),t),Math.round(xe(sn.r*255,0,255))*65536+Math.round(xe(sn.g*255,0,255))*256+Math.round(xe(sn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+s)/2;if(a===s)l=0,c=0;else{const u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Je){Ee.fromWorkingColorSpace(sn.copy(this),t);const e=sn.r,n=sn.g,i=sn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Ro);const n=Xs(Bi.h,Ro.h,e),i=Xs(Bi.s,Ro.s,e),r=Xs(Bi.l,Ro.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new ae;ae.NAMES=$d;let ng=0;class Jn extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=ts,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Ul,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ii extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new $,Co=new Me;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xc&&(t.usage=this.usage),t}}class jd extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kd extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class We extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ig=0;const Bn=new de,nl=new Ve,kr=new $,Pn=new Ii,Ls=new Ii,Ze=new $;class nn extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xd(t)?Kd:jd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return nl.lookAt(t),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new We(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Pn.min,Ls.min),Pn.expandByPoint(Ze),Ze.addVectors(Pn.max,Ls.max),Pn.expandByPoint(Ze)):(Pn.expandByPoint(Ls.min),Pn.expandByPoint(Ls.max))}Pn.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(t,c),Ze.add(kr)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new $,l[b]=new $;const c=new $,h=new $,u=new $,d=new Me,f=new Me,m=new Me,v=new $,g=new $;function p(b,S,M){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,b),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(w),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),a[b].add(v),a[S].add(v),a[M].add(v),l[b].add(g),l[S].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let b=0,S=x.length;b<S;++b){const M=x[b],w=M.start,F=M.count;for(let N=w,V=w+F;N<V;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new $,_=new $,E=new $,A=new $;function R(b){E.fromBufferAttribute(i,b),A.copy(E);const S=a[b];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),_.crossVectors(A,S);const w=_.dot(l[b])<0?-1:1;s.setXYZW(b,y.x,y.y,y.z,w)}for(let b=0,S=x.length;b<S;++b){const M=x[b],w=M.start,F=M.count;for(let N=w,V=w+F;N<V;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new $,r=new $,s=new $,a=new $,l=new $,c=new $,h=new $,u=new $;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),h.subVectors(s,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),h.subVectors(s,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new de,sr=new go,Po=new hi,hu=new $,Io=new $,Lo=new $,Do=new $,il=new $,No=new $,uu=new $,Fo=new $;class Ge extends Ve{constructor(t=new nn,e=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(il.fromBufferAttribute(u,t),s?No.addScaledVector(il,h):No.addScaledVector(il.sub(e),h))}e.add(No)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),sr.copy(t.ray).recast(t.near),!(Po.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Po,hu)===null||sr.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(cu.copy(r).invert(),sr.copy(t.ray).applyMatrix4(cu),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,sr)))}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=s[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,E=y;_<E;_+=3){const A=a.getX(_),R=a.getX(_+1),b=a.getX(_+2);i=Uo(this,p,t,n,c,h,u,A,R,b),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);i=Uo(this,s,t,n,c,h,u,x,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=s[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,E=y;_<E;_+=3){const A=_,R=_+1,b=_+2;i=Uo(this,p,t,n,c,h,u,A,R,b),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=g,y=g+1,_=g+2;i=Uo(this,s,t,n,c,h,u,x,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function rg(o,t,e,n,i,r,s,a){let l;if(t.side===Mn?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,t.side===Ti,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(Fo);return c<e.near||c>e.far?null:{distance:c,point:Fo.clone(),object:o}}function Uo(o,t,e,n,i,r,s,a,l,c){o.getVertexPosition(a,Io),o.getVertexPosition(l,Lo),o.getVertexPosition(c,Do);const h=rg(o,t,e,n,Io,Lo,Do,uu);if(h){const u=new $;$n.getBarycoord(uu,Io,Lo,Do,u),i&&(h.uv=$n.getInterpolatedAttribute(i,a,l,c,u,new Me)),r&&(h.uv1=$n.getInterpolatedAttribute(r,a,l,c,u,new Me)),s&&(h.normal=$n.getInterpolatedAttribute(s,a,l,c,u,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new $,materialIndex:0};$n.getNormal(Io,Lo,Do,d.normal),h.face=d,h.barycoord=u}return h}class ws extends nn{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,s,r,0),m("z","y","x",1,-1,n,e,-t,s,r,1),m("x","z","y",1,1,t,n,e,i,s,2),m("x","z","y",1,-1,t,n,-e,i,s,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function m(v,g,p,x,y,_,E,A,R,b,S){const M=_/R,w=E/b,F=_/2,N=E/2,V=A/2,H=R+1,Y=b+1;let B=0,L=0;const tt=new $;for(let J=0;J<Y;J++){const O=J*w-N;for(let K=0;K<H;K++){const z=K*M-F;tt[v]=z*x,tt[g]=O*y,tt[p]=V,c.push(tt.x,tt.y,tt.z),tt[v]=0,tt[g]=0,tt[p]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(K/R),u.push(1-J/b),B+=1}}for(let J=0;J<b;J++)for(let O=0;O<R;O++){const K=d+O+H*J,z=d+O+H*(J+1),P=d+(O+1)+H*(J+1),I=d+(O+1)+H*J;l.push(K,z,I),l.push(z,P,I),L+=6}a.addGroup(f,L,S),f+=L,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function un(o){const t={};for(let e=0;e<o.length;e++){const n=ms(o[e]);for(const i in n)t[i]=n[i]}return t}function sg(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Zd(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const og={clone:ms,merge:un};var ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ag,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=sg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jd extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new $,du=new Me,fu=new Me;class dn extends Jd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,du,fu),e.subVectors(fu,du)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,e-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hr=-90,Gr=1;class cg extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(Hr,Gr,t,e);i.layers=this.layers,this.add(i);const r=new dn(Hr,Gr,t,e);r.layers=this.layers,this.add(r);const s=new dn(Hr,Gr,t,e);s.layers=this.layers,this.add(s);const a=new dn(Hr,Gr,t,e);a.layers=this.layers,this.add(a);const l=new dn(Hr,Gr,t,e);l.layers=this.layers,this.add(l);const c=new dn(Hr,Gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,l]=e;for(const c of e)this.remove(c);if(t===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ih extends tn{constructor(t,e,n,i,r,s,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,i,r,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hg extends wr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ih(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ws(5,5,5),r=new Ji({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Yi});r.uniforms.tEquirect.value=e;const s=new Ge(i,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=Dn),new cg(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}}class ug extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xc,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new $;class rh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pu=new $,mu=new Te,gu=new Te,fg=new $,vu=new de,Bo=new $,rl=new hi,_u=new de,sl=new go;class pg extends Ge{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yh,this.bindMatrix=new de,this.bindMatrixInverse=new de,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ii),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Bo),this.boundingBox.expandByPoint(Bo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Bo),this.boundingSphere.expandByPoint(Bo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(i),t.ray.intersectsSphere(rl)!==!1&&(_u.copy(i).invert(),sl.copy(t.ray).applyMatrix4(_u),!(this.boundingBox!==null&&sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,sl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Te,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Yh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===om?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;mu.fromBufferAttribute(i.attributes.skinIndex,t),gu.fromBufferAttribute(i.attributes.skinWeight,t),pu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=gu.getComponent(r);if(s!==0){const a=mu.getComponent(r);vu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(fg.copy(pu).applyMatrix4(vu),s)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Qd extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tf extends tn{constructor(t=null,e=1,n=1,i,r,s,a,l,c=an,h=an,u,d){super(null,s,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xu=new de,mg=new de;class sh{constructor(t=[],e=[]){this.uuid=Kn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new de)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new de;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){const a=t[r]?t[r].matrixWorld:mg;xu.multiplyMatrices(a,e[r]),xu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new sh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new tf(e,t,t,Vn,jn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Qd),this.bones.push(s),this.boneInverses.push(new de().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const s=e[i];t.bones.push(s.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class yc extends $e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wr=new de,yu=new de,Oo=[],Mu=new Ii,gg=new de,Ds=new Ge,Ns=new hi;class vg extends Ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wr),Mu.copy(t.boundingBox).applyMatrix4(Wr),this.boundingBox.union(Mu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wr),Ns.copy(t.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),t.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Wr),yu.multiplyMatrices(n,Wr),Ds.matrixWorld=yu,Ds.raycast(t,Oo);for(let s=0,a=Oo.length;s<a;s++){const l=Oo[s];l.instanceId=r,l.object=this,e.push(l)}Oo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new tf(new Float32Array(i*this.count),i,this.count,jc,jn));const r=this.morphTexture.source.data.data;let s=0;for(let c=0;c<n.length;c++)s+=n[c];const a=this.geometry.morphTargetsRelative?1:1-s,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const ol=new $,_g=new $,xg=new fe;class fr{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ol.subVectors(n,e).cross(_g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ol),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xg.getNormalMatrix(t),i=this.coplanarPoint(ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new hi,zo=new $;class oh{constructor(t=new fr,e=new fr,n=new fr,i=new fr,r=new fr,s=new fr){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ai){const n=this.planes,i=t.elements,r=i[0],s=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],x=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,g-f,_-p).normalize(),n[1].setComponents(l+r,d+c,g+f,_+p).normalize(),n[2].setComponents(l+s,d+h,g+m,_+x).normalize(),n[3].setComponents(l-s,d-h,g-m,_-x).normalize(),n[4].setComponents(l-a,d-u,g-v,_-y).normalize(),e===Ai)n[5].setComponents(l+a,d+u,g+v,_+y).normalize();else if(e===pa)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(t){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zo.x=i.normal.x>0?t.max.x:t.min.x,zo.y=i.normal.y>0?t.max.y:t.min.y,zo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ef extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ma=new $,ga=new $,Su=new de,Fs=new go,Vo=new hi,al=new $,Eu=new $;class ah extends Ve{constructor(t=new nn,e=new ef){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ma.fromBufferAttribute(e,i-1),ga.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ma.distanceTo(ga);t.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;Su.copy(i).invert(),Fs.copy(t.ray).applyMatrix4(Su);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let v=f,g=m-1;v<g;v+=c){const p=h.getX(v),x=h.getX(v+1),y=ko(this,t,Fs,l,p,x);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=ko(this,t,Fs,l,v,g);p&&e.push(p)}}else{const f=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let v=f,g=m-1;v<g;v+=c){const p=ko(this,t,Fs,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=ko(this,t,Fs,l,m-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ko(o,t,e,n,i,r){const s=o.geometry.attributes.position;if(ma.fromBufferAttribute(s,i),ga.fromBufferAttribute(s,r),e.distanceSqToSegment(ma,ga,al,Eu)>n)return;al.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(al);if(!(l<t.near||l>t.far))return{distance:l,point:Eu.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}const wu=new $,Au=new $;class yg extends ah{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)wu.fromBufferAttribute(e,i),Au.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wu.distanceTo(Au);t.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mg extends ah{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class vo extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bu=new de,Mc=new go,Ho=new hi,Go=new $;class Ta extends Ve{constructor(t=new nn,e=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(i),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;bu.copy(i).invert(),Mc.copy(t.ray).applyMatrix4(bu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let m=d,v=f;m<v;m++){const g=c.getX(m);Go.fromBufferAttribute(u,g),Tu(Go,g,l,i,t,e,this)}}else{const d=Math.max(0,s.start),f=Math.min(u.count,s.start+s.count);for(let m=d,v=f;m<v;m++)Go.fromBufferAttribute(u,m),Tu(Go,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tu(o,t,e,n,i,r,s){const a=Mc.distanceSqToPoint(o);if(a<e){const l=new $;Mc.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}class Hi extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}class nf extends tn{constructor(t,e,n,i,r,s,a,l,c,h=es){if(h!==es&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=Er),n===void 0&&h===fs&&(n=ds),super(null,i,r,s,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class lh extends nn{constructor(t=1,e=1,n=1,i=32,r=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;x(),s===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function x(){const _=new $,E=new $;let A=0;const R=(e-t)/n;for(let b=0;b<=r;b++){const S=[],M=b/r,w=M*(e-t)+t;for(let F=0;F<=i;F++){const N=F/i,V=N*l+a,H=Math.sin(V),Y=Math.cos(V);E.x=w*H,E.y=-M*n+g,E.z=w*Y,u.push(E.x,E.y,E.z),_.set(H,R,Y).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-M),S.push(m++)}v.push(S)}for(let b=0;b<i;b++)for(let S=0;S<r;S++){const M=v[S][b],w=v[S+1][b],F=v[S+1][b+1],N=v[S][b+1];(t>0||S!==0)&&(h.push(M,w,N),A+=3),(e>0||S!==r-1)&&(h.push(w,F,N),A+=3)}c.addGroup(p,A,0),p+=A}function y(_){const E=m,A=new Me,R=new $;let b=0;const S=_===!0?t:e,M=_===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const w=m;for(let F=0;F<=i;F++){const V=F/i*l+a,H=Math.cos(V),Y=Math.sin(V);R.x=S*Y,R.y=g*M,R.z=S*H,u.push(R.x,R.y,R.z),d.push(0,M,0),A.x=H*.5+.5,A.y=Y*.5*M+.5,f.push(A.x,A.y),m++}for(let F=0;F<i;F++){const N=E+F,V=w+F;_===!0?h.push(V,V+1,N):h.push(V+1,V,N),b+=3}c.addGroup(p,b,_===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ch extends lh{constructor(t=1,e=1,n=32,i=1,r=!1,s=0,a=Math.PI*2){super(0,t,e,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(t){return new ch(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ra extends nn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const x=p*d-s;for(let y=0;y<c;y++){const _=y*u-r;m.push(_,-x,0),v.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,_=x+c*(p+1),E=x+1+c*(p+1),A=x+1+c*p;f.push(y,_,A),f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new We(m,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ca extends nn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(s+a,Math.PI);let c=0;const h=[],u=new $,d=new $,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let _=0;p===0&&s===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){const A=E/e;u.x=-t*Math.cos(i+A*r)*Math.sin(s+y*a),u.y=t*Math.cos(s+y*a),u.z=t*Math.sin(i+A*r)*Math.sin(s+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(A+_,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],_=h[p][x],E=h[p+1][x],A=h[p+1][x+1];(p!==0||s>0)&&f.push(y,_,A),(p!==n-1||l<Math.PI)&&f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new We(m,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hh extends nn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const s=[],a=[],l=[],c=[],h=new $,u=new $,d=new $;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const v=m/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;s.push(v,g,x),s.push(g,p,x)}this.setIndex(s),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class uh extends nn{constructor(t=1,e=.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],u=new $,d=new $,f=new $,m=new $,v=new $,g=new $,p=new $;for(let y=0;y<=n;++y){const _=y/n*r*Math.PI*2;x(_,r,s,t,f),x(_+.01,r,s,t,m),g.subVectors(m,f),p.addVectors(m,f),v.crossVectors(g,p),p.crossVectors(v,g),v.normalize(),p.normalize();for(let E=0;E<=i;++E){const A=E/i*Math.PI*2,R=-e*Math.cos(A),b=e*Math.sin(A);u.x=f.x+(R*p.x+b*v.x),u.y=f.y+(R*p.y+b*v.y),u.z=f.z+(R*p.z+b*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(E/i)}}for(let y=1;y<=n;y++)for(let _=1;_<=i;_++){const E=(i+1)*(y-1)+(_-1),A=(i+1)*y+(_-1),R=(i+1)*y+_,b=(i+1)*(y-1)+_;a.push(E,A,b),a.push(A,R,b)}this.setIndex(a),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(h,2));function x(y,_,E,A,R){const b=Math.cos(y),S=Math.sin(y),M=E/_*y,w=Math.cos(M);R.x=A*(2+w)*.5*b,R.y=A*(2+w)*S*.5,R.z=A*Math.sin(M)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uh(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class _o extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ui extends _o{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Sg extends Jn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Eg extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wg extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Wo(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function Ag(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function bg(o){function t(i,r){return o[i]-o[r]}const e=o.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Ru(o,t,e){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[s++]=o[a+l]}return i}function rf(o,t,e,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(t.push(r.time),e.push.apply(e,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(t.push(r.time),s.toArray(e,e.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(t.push(r.time),e.push(s)),r=o[i++];while(r!==void 0)}class xo{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break n}break t}for(;n<s;){const a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Tg extends xo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$r,endingEnd:$r}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case jr:r=t,a=2*e-n;break;case da:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jr:s=t,l=2*n-e;break;case da:s=1,l=n+i[1]-i[0];break;default:s=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,x=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*v+.5*m,_=f*g-f*v;for(let E=0;E!==a;++E)r[E]=p*s[h+E]+x*s[c+E]+y*s[l+E]+_*s[u+E];return r}}class sf extends xo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=s[c+d]*u+s[l+d]*h;return r}}class Rg extends xo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class di{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wo(e,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wo(t.times,Array),values:Wo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case Js:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(i!==void 0&&Ag(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oa,r=t.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const v=e[u+m];if(v!==e[d+m]||v!==e[f+m]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];const u=a*n,d=s*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Js;class As extends di{constructor(t,e,n){super(t,e,n)}}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Zs;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class of extends di{}of.prototype.ValueTypeName="color";class gs extends di{}gs.prototype.ValueTypeName="number";class Cg extends xo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Zn.slerpFlat(r,0,s,c-a,s,c,l);return r}}class vs extends di{InterpolantFactoryMethodLinear(t){return new Cg(this.times,this.values,this.getValueSize(),t)}}vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends di{constructor(t,e,n){super(t,e,n)}}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Zs;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends di{}_s.prototype.ValueTypeName="vector";class Sc{constructor(t="",e=-1,n=[],i=Qc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,a=n.length;s!==a;++s)e.push(Ig(n[s]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(di.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=bg(l);l=Ru(l,1,h),c=Ru(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new gs(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return s}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,v){if(f.length!==0){const g=[],p=[];rf(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const y=d[m];g.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new gs(".morphTargetInfluence["+v+"]",g,p))}l=f.length*s}else{const f=".bones["+e[u].name+"]";n(_s,f+".position",d,"pos",i),n(vs,f+".quaternion",d,"rot",i),n(_s,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Pg(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return of;case"quaternion":return vs;case"bool":case"boolean":return As;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Ig(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Pg(o.type);if(o.times===void 0){const e=[],n=[];rf(o.keys,e,n,"value"),o.times=e,o.values=n}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const Gi={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Lg{constructor(t,e,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,s,a),r=!0},this.itemEnd=function(h){s++,i.onProgress!==void 0&&i.onProgress(h,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Dg=new Lg;class Rr{constructor(t){this.manager=t!==void 0?t:Dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class Ng extends Error{constructor(t,e){super(t),this.response=e}}class af extends Rr{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Gi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(xi[t]!==void 0){xi[t].push({onLoad:e,onProgress:n,onError:i});return}xi[t]=[],xi[t].push({onLoad:e,onProgress:n,onError:i});const s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=xi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const g=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{v+=_.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let A=0,R=h.length;A<R;A++){const b=h[A];b.onProgress&&b.onProgress(E)}p.enqueue(_),x()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Ng(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Gi.add(t,c);const h=xi[t];delete xi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=xi[t];if(h===void 0)throw this.manager.itemError(t),c;delete xi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class lf extends Rr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Gi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const a=Qs("img");function l(){h(),Gi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Fg extends Rr{constructor(t){super(t)}load(t,e,n,i){const r=new ih;r.colorSpace=Je;const s=new lf(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function l(c){s.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class cf extends Rr{constructor(t){super(t)}load(t,e,n,i){const r=new tn,s=new lf(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class dh extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ll=new de,Cu=new $,Pu=new $;class fh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pu),e.updateMatrixWorld(),ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ug extends fh{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ps*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Bg extends dh{constructor(t,e,n=0,i=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Ug}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Iu=new de,Us=new $,cl=new $;class Og extends fh{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Us.setFromMatrixPosition(t.matrixWorld),n.position.copy(Us),cl.copy(n.position),cl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(cl),n.updateMatrixWorld(),i.makeTranslation(-Us.x,-Us.y,-Us.z),Iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu)}}class zg extends dh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Og}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ph extends Jd{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Vg extends fh{constructor(){super(new ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mh extends dh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Vg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qs{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class kg extends Rr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Gi.get(t);if(s!==void 0){if(r.manager.itemStart(t),s.then){s.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gi.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Gi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Gi.add(t,l),r.manager.itemStart(t)}}class Hg extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Lu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Lu(){return performance.now()}class Wg{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(s===0){for(let a=0;a!==i;++a)n[r+a]=n[a];s=e}else{s+=e;const a=e/s;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=s}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]}_slerp(t,e,n,i){Zn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const s=this._workIndex*r;Zn.multiplyQuaternionsFlat(t,s,t,e,t,n),Zn.slerpFlat(t,e,t,e,t,s,i)}_lerp(t,e,n,i,r){const s=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*s+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let s=0;s!==r;++s){const a=e+s;t[a]=t[a]+t[n+s]*i}}}const gh="\\[\\]\\.:\\/",Xg=new RegExp("["+gh+"]","g"),vh="[^"+gh+"]",qg="[^"+gh.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",vh),$g=/(WCOD+)?/.source.replace("WCOD",qg),jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),Zg=new RegExp("^"+Yg+$g+jg+Kg+"$"),Jg=["material","materials","bones","map"];class Qg{constructor(t,e,n){const i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Pe{constructor(t,e,n){this.path=e,this.parsedPath=n||Pe.parseTrackName(e),this.node=Pe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Pe.Composite(t,e,n):new Pe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(t){const e=Zg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Jg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Pe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const s=t[i];if(s===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pe.Composite=Qg;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tv{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,s=r.length,a=new Array(s),l={endingStart:$r,endingEnd:$r};for(let c=0;c!==s;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,s=r/i,a=i/r;t.warp(1,s,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,s=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/s,c[1]=e/s,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const s=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case hm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulateAdditive(a);break;case Qc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const s=n===cm;if(t===0)return r===-1?i:s&&(r&1)===1?e-i:i;if(n===am){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(s&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=jr,i.endingEnd=jr):(t?i.endingStart=this.zeroSlopeAtStart?jr:$r:i.endingStart=da,e?i.endingEnd=this.zeroSlopeAtEnd?jr:$r:i.endingEnd=da)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,l=s.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const ev=new Float32Array(1);class nv extends Tr{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,s[u]=m;else{if(m=s[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const v=e&&e._propertyBindings[u].binding.parsedPath;m=new Wg(Pe.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),s[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{const a=s.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,a=s[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete s[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new sf(new Float32Array(2),new Float32Array(2),1,ev),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let s=typeof t=="string"?Sc.findByName(i,t):t;const a=s!==null?s.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=Qc),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const h=new tv(this,s,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Sc.findByName(n,t):t,s=r?r.uuid:t,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,s);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(s);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let a=0,l=s.length;a!==l;++a){const c=s[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const s in n){const a=n[s].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const s in r){const a=r[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Du=new de;class iv{constructor(t,e,n=0,i=1/0){this.ray=new go(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new nh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(t,e=!0,n=[]){return Ec(t,this,n,e),n.sort(Nu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ec(t[i],this,n,e);return n.sort(Nu),n}}function Nu(o,t){return o.distance-t.distance}function Ec(o,t,e,n){let i=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=o.children;for(let s=0,a=r.length;s<a;s++)Ec(r[s],t,e,!0)}}function Fu(o,t,e,n){const i=rv(n);switch(e){case Bd:return o*t;case zd:return o*t;case Vd:return o*t*2;case jc:return o*t/i.components*i.byteLength;case Kc:return o*t/i.components*i.byteLength;case kd:return o*t*2/i.components*i.byteLength;case Zc:return o*t*2/i.components*i.byteLength;case Od:return o*t*3/i.components*i.byteLength;case Vn:return o*t*4/i.components*i.byteLength;case Jc:return o*t*4/i.components*i.byteLength;case Qo:case ta:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yl:case jl:return Math.max(o,16)*Math.max(t,8)/4;case ql:case $l:return Math.max(o,8)*Math.max(t,8)/2;case Kl:case Zl:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Jl:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case ec:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ic:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case sc:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ac:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case dc:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case ia:case fc:case pc:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Hd:case mc:return Math.ceil(o/4)*Math.ceil(t/4)*8;case gc:case vc:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rv(o){switch(o){case Ri:case Nd:return{byteLength:1,components:1};case Ks:case Fd:case mo:return{byteLength:2,components:1};case Yc:case $c:return{byteLength:2,components:4};case Er:case qc:case jn:return{byteLength:4,components:1};case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hf(){let o=null,t=!1,e=null,n=null;function i(r,s){e(r,s),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function sv(o){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(o.bindBuffer(c,a),u.length===0)o.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];o.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:s}}var ov=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,av=`#ifdef USE_ALPHAHASH
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
#endif`,lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dv=`#ifdef USE_AOMAP
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
#endif`,fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pv=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_v=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xv=`#ifdef USE_IRIDESCENCE
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
#endif`,yv=`#ifdef USE_BUMPMAP
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
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cv=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Pv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iv=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ov=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yv=`#ifdef USE_GRADIENTMAP
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
}`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Jv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,r_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m_=`#if defined( USE_POINTS_UV )
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
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,__=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
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
#endif`,S_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
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
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,W_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
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
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,f0=`#define DISTANCE
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
}`,p0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#define LAMBERT
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
}`,S0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,E0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,b0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T0=`#define PHONG
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
}`,R0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,C0=`#define STANDARD
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
}`,P0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,I0=`#define TOON
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
}`,L0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,D0=`uniform float size;
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
}`,N0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,U0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,O0=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:ov,alphahash_pars_fragment:av,alphamap_fragment:lv,alphamap_pars_fragment:cv,alphatest_fragment:hv,alphatest_pars_fragment:uv,aomap_fragment:dv,aomap_pars_fragment:fv,batching_pars_vertex:pv,batching_vertex:mv,begin_vertex:gv,beginnormal_vertex:vv,bsdfs:_v,iridescence_fragment:xv,bumpmap_pars_fragment:yv,clipping_planes_fragment:Mv,clipping_planes_pars_fragment:Sv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:wv,color_fragment:Av,color_pars_fragment:bv,color_pars_vertex:Tv,color_vertex:Rv,common:Cv,cube_uv_reflection_fragment:Pv,defaultnormal_vertex:Iv,displacementmap_pars_vertex:Lv,displacementmap_vertex:Dv,emissivemap_fragment:Nv,emissivemap_pars_fragment:Fv,colorspace_fragment:Uv,colorspace_pars_fragment:Bv,envmap_fragment:Ov,envmap_common_pars_fragment:zv,envmap_pars_fragment:Vv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:Jv,envmap_vertex:Hv,fog_vertex:Gv,fog_pars_vertex:Wv,fog_fragment:Xv,fog_pars_fragment:qv,gradientmap_pars_fragment:Yv,lightmap_pars_fragment:$v,lights_lambert_fragment:jv,lights_lambert_pars_fragment:Kv,lights_pars_begin:Zv,lights_toon_fragment:Qv,lights_toon_pars_fragment:t_,lights_phong_fragment:e_,lights_phong_pars_fragment:n_,lights_physical_fragment:i_,lights_physical_pars_fragment:r_,lights_fragment_begin:s_,lights_fragment_maps:o_,lights_fragment_end:a_,logdepthbuf_fragment:l_,logdepthbuf_pars_fragment:c_,logdepthbuf_pars_vertex:h_,logdepthbuf_vertex:u_,map_fragment:d_,map_pars_fragment:f_,map_particle_fragment:p_,map_particle_pars_fragment:m_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:v_,morphinstance_vertex:__,morphcolor_vertex:x_,morphnormal_vertex:y_,morphtarget_pars_vertex:M_,morphtarget_vertex:S_,normal_fragment_begin:E_,normal_fragment_maps:w_,normal_pars_fragment:A_,normal_pars_vertex:b_,normal_vertex:T_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:L_,opaque_fragment:D_,packing:N_,premultiplied_alpha_fragment:F_,project_vertex:U_,dithering_fragment:B_,dithering_pars_fragment:O_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:H_,shadowmap_vertex:G_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:$_,specularmap_fragment:j_,specularmap_pars_fragment:K_,tonemapping_fragment:Z_,tonemapping_pars_fragment:J_,transmission_fragment:Q_,transmission_pars_fragment:t0,uv_pars_fragment:e0,uv_pars_vertex:n0,uv_vertex:i0,worldpos_vertex:r0,background_vert:s0,background_frag:o0,backgroundCube_vert:a0,backgroundCube_frag:l0,cube_vert:c0,cube_frag:h0,depth_vert:u0,depth_frag:d0,distanceRGBA_vert:f0,distanceRGBA_frag:p0,equirect_vert:m0,equirect_frag:g0,linedashed_vert:v0,linedashed_frag:_0,meshbasic_vert:x0,meshbasic_frag:y0,meshlambert_vert:M0,meshlambert_frag:S0,meshmatcap_vert:E0,meshmatcap_frag:w0,meshnormal_vert:A0,meshnormal_frag:b0,meshphong_vert:T0,meshphong_frag:R0,meshphysical_vert:C0,meshphysical_frag:P0,meshtoon_vert:I0,meshtoon_frag:L0,points_vert:D0,points_frag:N0,shadow_vert:F0,shadow_frag:U0,sprite_vert:B0,sprite_frag:O0},Ht={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},ti={basic:{uniforms:un([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:un([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ae(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:un([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:un([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:un([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ae(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:un([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:un([Ht.points,Ht.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:un([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:un([Ht.common,Ht.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:un([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:un([Ht.sprite,Ht.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:un([Ht.common,Ht.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:un([Ht.lights,Ht.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};ti.physical={uniforms:un([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Xo={r:0,b:0,g:0},ar=new ai,z0=new de;function V0(o,t,e,n,i,r,s){const a=new ae(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const E=m(y);E===null?p(a,l):E&&E.isColor&&(p(E,1),_=!0);const A=o.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(o.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(y,_){const E=m(_);E&&(E.isCubeTexture||E.mapping===ba)?(h===void 0&&(h=new Ge(new ws(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:ms(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ar.copy(_.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(ar)),h.material.toneMapped=Ee.getTransfer(E.colorSpace)!==De,(u!==E||d!==E.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=o.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ge(new Ra(2,2),new Ji({name:"BackgroundMaterial",uniforms:ms(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ee.getTransfer(E.colorSpace)!==De,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=o.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Xo,Zd(o)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,_,s)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:v,addToRenderList:g,dispose:x}}function k0(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,s=!1;function a(M,w,F,N,V){let H=!1;const Y=u(N,F,w);r!==Y&&(r=Y,c(r.object)),H=f(M,N,F,V),H&&m(M,N,F,V),V!==null&&t.update(V,o.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,_(M,w,F,N),V!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return o.createVertexArray()}function c(M){return o.bindVertexArray(M)}function h(M){return o.deleteVertexArray(M)}function u(M,w,F){const N=F.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let H=V[w.id];H===void 0&&(H={},V[w.id]=H);let Y=H[N];return Y===void 0&&(Y=d(l()),H[N]=Y),Y}function d(M){const w=[],F=[],N=[];for(let V=0;V<e;V++)w[V]=0,F[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,w,F,N){const V=r.attributes,H=w.attributes;let Y=0;const B=F.getAttributes();for(const L in B)if(B[L].location>=0){const J=V[L];let O=H[L];if(O===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(O=M.instanceColor)),J===void 0||J.attribute!==O||O&&J.data!==O.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function m(M,w,F,N){const V={},H=w.attributes;let Y=0;const B=F.getAttributes();for(const L in B)if(B[L].location>=0){let J=H[L];J===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const O={};O.attribute=J,J&&J.data&&(O.data=J.data),V[L]=O,Y++}r.attributes=V,r.attributesNum=Y,r.index=N}function v(){const M=r.newAttributes;for(let w=0,F=M.length;w<F;w++)M[w]=0}function g(M){p(M,0)}function p(M,w){const F=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;F[M]=1,N[M]===0&&(o.enableVertexAttribArray(M),N[M]=1),V[M]!==w&&(o.vertexAttribDivisor(M,w),V[M]=w)}function x(){const M=r.newAttributes,w=r.enabledAttributes;for(let F=0,N=w.length;F<N;F++)w[F]!==M[F]&&(o.disableVertexAttribArray(F),w[F]=0)}function y(M,w,F,N,V,H,Y){Y===!0?o.vertexAttribIPointer(M,w,F,V,H):o.vertexAttribPointer(M,w,F,N,V,H)}function _(M,w,F,N){v();const V=N.attributes,H=F.getAttributes(),Y=w.defaultAttributeValues;for(const B in H){const L=H[B];if(L.location>=0){let tt=V[B];if(tt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const J=tt.normalized,O=tt.itemSize,K=t.get(tt);if(K===void 0)continue;const z=K.buffer,P=K.type,I=K.bytesPerElement,G=P===o.INT||P===o.UNSIGNED_INT||tt.gpuType===qc;if(tt.isInterleavedBufferAttribute){const Q=tt.data,nt=Q.stride,X=tt.offset;if(Q.isInstancedInterleavedBuffer){for(let rt=0;rt<L.locationSize;rt++)p(L.location+rt,Q.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let rt=0;rt<L.locationSize;rt++)g(L.location+rt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let rt=0;rt<L.locationSize;rt++)y(L.location+rt,O/L.locationSize,P,J,nt*I,(X+O/L.locationSize*rt)*I,G)}else{if(tt.isInstancedBufferAttribute){for(let Q=0;Q<L.locationSize;Q++)p(L.location+Q,tt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Q=0;Q<L.locationSize;Q++)g(L.location+Q);o.bindBuffer(o.ARRAY_BUFFER,z);for(let Q=0;Q<L.locationSize;Q++)y(L.location+Q,O/L.locationSize,P,J,O*I,O/L.locationSize*Q*I,G)}}else if(Y!==void 0){const J=Y[B];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(L.location,J);break;case 3:o.vertexAttrib3fv(L.location,J);break;case 4:o.vertexAttrib4fv(L.location,J);break;default:o.vertexAttrib1fv(L.location,J)}}}}x()}function E(){b();for(const M in n){const w=n[M];for(const F in w){const N=w[F];for(const V in N)h(N[V].object),delete N[V];delete w[F]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const F in w){const N=w[F];for(const V in N)h(N[V].object),delete N[V];delete w[F]}delete n[M.id]}function R(M){for(const w in n){const F=n[w];if(F[M.id]===void 0)continue;const N=F[M.id];for(const V in N)h(N[V].object),delete N[V];delete F[M.id]}}function b(){S(),s=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function H0(o,t,e){let n;function i(c){n=c}function r(c,h){o.drawArrays(n,c,h),e.update(h,n,1)}function s(c,h,u){u!==0&&(o.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)s(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G0(o,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){return!(R!==Vn&&n.convert(R)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const b=R===mo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ri&&n.convert(R)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==jn&&!b)}function l(R){if(R==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),y=o.getParameter(o.MAX_VARYING_VECTORS),_=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,A=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:E,maxSamples:A}}function W0(o){const t=this;let e=null,n=0,i=!1,r=!1;const s=new fr,a=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=o.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,y=x*4;let _=p.clippingState||null;l.value=_,_=h(m,d,y,f);for(let E=0;E!==y;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)s.copy(u[y]).applyMatrix4(x,a),s.normal.toArray(g,_),g[_+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function X0(o){let t=new WeakMap;function e(s,a){return a===Wl?s.mapping=cs:a===Xl&&(s.mapping=hs),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===Wl||a===Xl)if(t.has(s)){const l=t.get(s).texture;return e(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new hg(l.height);return c.fromEquirectangularTexture(o,s),t.set(s,c),s.addEventListener("dispose",i),e(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Kr=4,Uu=[.125,.215,.35,.446,.526,.582],vr=20,hl=new ph,Bu=new ae;let ul=null,dl=0,fl=0,pl=!1;const pr=(1+Math.sqrt(5))/2,Xr=1/pr,Ou=[new $(-pr,Xr,0),new $(pr,Xr,0),new $(-Xr,0,pr),new $(Xr,0,pr),new $(0,pr,-Xr),new $(0,pr,Xr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class zu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ul,dl,fl),this._renderer.xr.enabled=pl,t.scissorTest=!1,qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:mo,format:Vn,colorSpace:pn,depthBuffer:!1},i=Vu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(r)),this._blurMaterial=Y0(r,t,e)}return i}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,hl)}_sceneToCubeUV(t,e,n,i){const a=new dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bu),h.toneMapping=$i,h.autoClear=!1;const f=new ii({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),m=new Ge(new ws,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Bu),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;qo(i,x*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===cs||t.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;qo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,hl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ou[(i-r-1)%Ou.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ge(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vr-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):vr;g>vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vr}`);const p=[];let x=0;for(let R=0;R<vr;++R){const b=R/v,S=Math.exp(-b*b/2);p.push(S),R===0?x+=S:R<g&&(x+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const _=this._sizeLods[i],E=3*_*(i>y-Kr?i-y+Kr:0),A=4*(this._cubeSize-_);qo(e,E,A,3*_,2*_),l.setRenderTarget(e),l.render(u,hl)}}function q0(o){const t=[],e=[],n=[];let i=o;const r=o-Kr+1+Uu.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let l=1/a;s>o-Kr?l=Uu[s-o+Kr-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,b=A>2?0:-1,S=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];x.set(S,v*m*A),y.set(d,g*m*A);const M=[A,A,A,A,A,A];_.set(M,p*m*A)}const E=new nn;E.setAttribute("position",new $e(x,v)),E.setAttribute("uv",new $e(y,g)),E.setAttribute("faceIndex",new $e(_,p)),t.push(E),i>Kr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vu(o,t,e){const n=new wr(o,t,e);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Y0(o,t,e){const n=new Float32Array(vr),i=new $(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ku(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Hu(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $0(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wl||l===Xl,h=l===cs||l===hs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new zu(o)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new zu(o)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function j0(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Yr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function K0(o,t,e,n){const i={},r=new WeakMap;function s(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],o.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let y=0,_=x.length;y<_;y+=3){const E=x[y+0],A=x[y+1],R=x[y+2];d.push(E,A,A,R,R,E)}}else if(m!==void 0){const x=m.array;v=m.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const E=y+0,A=y+1,R=y+2;d.push(E,A,A,R,R,E)}}else return;const g=new(Xd(d)?Kd:jd)(d,1);g.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Z0(o,t,e){let n;function i(d){n=d}let r,s;function a(d){r=d.type,s=d.bytesPerElement}function l(d,f){o.drawElements(n,f,r,d*s),e.update(f,n,1)}function c(d,f,m){m!==0&&(o.drawElementsInstanced(n,f,r,d*s,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/s,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*v[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function J0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(e.calls++,s){case o.TRIANGLES:e.triangles+=a*(r/3);break;case o.LINES:e.lines+=a*(r/2);break;case o.LINE_STRIP:e.lines+=a*(r-1);break;case o.LINE_LOOP:e.lines+=a*r;break;case o.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Q0(o,t,e){const n=new WeakMap,i=new Te;function r(s,a,l){const c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let E=a.attributes.position.count*_,A=1;E>t.maxTextureSize&&(A=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*A*4*u),b=new Yd(R,E,A,u);b.type=jn,b.needsUpdate=!0;const S=_*4;for(let w=0;w<u;w++){const F=p[w],N=x[w],V=y[w],H=E*A*4*w;for(let Y=0;Y<F.count;Y++){const B=Y*S;m===!0&&(i.fromBufferAttribute(F,Y),R[H+B+0]=i.x,R[H+B+1]=i.y,R[H+B+2]=i.z,R[H+B+3]=0),v===!0&&(i.fromBufferAttribute(N,Y),R[H+B+4]=i.x,R[H+B+5]=i.y,R[H+B+6]=i.z,R[H+B+7]=0),g===!0&&(i.fromBufferAttribute(V,Y),R[H+B+8]=i.x,R[H+B+9]=i.y,R[H+B+10]=i.z,R[H+B+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:b,size:new Me(E,A)},n.set(a,d),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",s.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(o,"morphTargetBaseInfluence",v),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:r}}function tx(o,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:s}}const uf=new tn,Gu=new nf(1,1),df=new Yd,ff=new $m,pf=new ih,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),$u=new Float32Array(4);function Ts(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=Wu[i];if(r===void 0&&(r=new Float32Array(i),Wu[i]=r),t!==0){n.toArray(r,0);for(let s=1,a=0;s!==t;++s)a+=e,o[s].toArray(r,a)}return r}function je(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Ke(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Pa(o,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function ex(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function nx(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2fv(this.addr,t),Ke(e,t)}}function ix(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;o.uniform3fv(this.addr,t),Ke(e,t)}}function rx(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4fv(this.addr,t),Ke(e,t)}}function sx(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;$u.set(n),o.uniformMatrix2fv(this.addr,!1,$u),Ke(e,n)}}function ox(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;Yu.set(n),o.uniformMatrix3fv(this.addr,!1,Yu),Ke(e,n)}}function ax(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;qu.set(n),o.uniformMatrix4fv(this.addr,!1,qu),Ke(e,n)}}function lx(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function cx(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2iv(this.addr,t),Ke(e,t)}}function hx(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;o.uniform3iv(this.addr,t),Ke(e,t)}}function ux(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4iv(this.addr,t),Ke(e,t)}}function dx(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function fx(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;o.uniform2uiv(this.addr,t),Ke(e,t)}}function px(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;o.uniform3uiv(this.addr,t),Ke(e,t)}}function mx(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;o.uniform4uiv(this.addr,t),Ke(e,t)}}function gx(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let r;this.type===o.SAMPLER_2D_SHADOW?(Gu.compareFunction=Wd,r=Gu):r=uf,e.setTexture2D(t||r,i)}function vx(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ff,i)}function _x(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pf,i)}function xx(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||df,i)}function yx(o){switch(o){case 5126:return ex;case 35664:return nx;case 35665:return ix;case 35666:return rx;case 35674:return sx;case 35675:return ox;case 35676:return ax;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return hx;case 35669:case 35673:return ux;case 5125:return dx;case 36294:return fx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return xx}}function Mx(o,t){o.uniform1fv(this.addr,t)}function Sx(o,t){const e=Ts(t,this.size,2);o.uniform2fv(this.addr,e)}function Ex(o,t){const e=Ts(t,this.size,3);o.uniform3fv(this.addr,e)}function wx(o,t){const e=Ts(t,this.size,4);o.uniform4fv(this.addr,e)}function Ax(o,t){const e=Ts(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function bx(o,t){const e=Ts(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Tx(o,t){const e=Ts(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Rx(o,t){o.uniform1iv(this.addr,t)}function Cx(o,t){o.uniform2iv(this.addr,t)}function Px(o,t){o.uniform3iv(this.addr,t)}function Ix(o,t){o.uniform4iv(this.addr,t)}function Lx(o,t){o.uniform1uiv(this.addr,t)}function Dx(o,t){o.uniform2uiv(this.addr,t)}function Nx(o,t){o.uniform3uiv(this.addr,t)}function Fx(o,t){o.uniform4uiv(this.addr,t)}function Ux(o,t,e){const n=this.cache,i=t.length,r=Pa(e,i);je(n,r)||(o.uniform1iv(this.addr,r),Ke(n,r));for(let s=0;s!==i;++s)e.setTexture2D(t[s]||uf,r[s])}function Bx(o,t,e){const n=this.cache,i=t.length,r=Pa(e,i);je(n,r)||(o.uniform1iv(this.addr,r),Ke(n,r));for(let s=0;s!==i;++s)e.setTexture3D(t[s]||ff,r[s])}function Ox(o,t,e){const n=this.cache,i=t.length,r=Pa(e,i);je(n,r)||(o.uniform1iv(this.addr,r),Ke(n,r));for(let s=0;s!==i;++s)e.setTextureCube(t[s]||pf,r[s])}function zx(o,t,e){const n=this.cache,i=t.length,r=Pa(e,i);je(n,r)||(o.uniform1iv(this.addr,r),Ke(n,r));for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||df,r[s])}function Vx(o){switch(o){case 5126:return Mx;case 35664:return Sx;case 35665:return Ex;case 35666:return wx;case 35674:return Ax;case 35675:return bx;case 35676:return Tx;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Ix;case 5125:return Lx;case 36294:return Dx;case 36295:return Nx;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return zx}}class kx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yx(e.type)}}class Hx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vx(e.type)}}class Gx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function ju(o,t){o.seq.push(t),o.map[t.id]=t}function Wx(o,t,e){const n=o.name,i=n.length;for(ml.lastIndex=0;;){const r=ml.exec(n),s=ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){ju(e,c===void 0?new kx(a,o,t):new Hx(a,o,t));break}else{let u=e.map[a];u===void 0&&(u=new Gx(a),ju(e,u)),e=u}}}class ra{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);Wx(r,s,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}}function Ku(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const Xx=37297;let qx=0;function Yx(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}const Zu=new fe;function $x(o){Ee._getMatrix(Zu,Ee.workingColorSpace,o);const t=`mat3( ${Zu.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(o)){case fa:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Ju(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Yx(o.getShaderSource(t),s)}else return i}function jx(o,t){const e=$x(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kx(o,t){let e;switch(t){case Qp:e="Linear";break;case tm:e="Reinhard";break;case em:e="Cineon";break;case nm:e="ACESFilmic";break;case rm:e="AgX";break;case sm:e="Neutral";break;case im:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yo=new $;function Zx(){Ee.getLuminanceCoefficients(Yo);const o=Yo.x.toFixed(4),t=Yo.y.toFixed(4),e=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jx(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function Qx(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ty(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),s=r.name;let a=1;r.type===o.FLOAT_MAT2&&(a=2),r.type===o.FLOAT_MAT3&&(a=3),r.type===o.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:o.getAttribLocation(t,s),locationSize:a}}return e}function ks(o){return o!==""}function Qu(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function td(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(o){return o.replace(ey,iy)}const ny=new Map;function iy(o,t){let e=ge[t];if(e===void 0){const n=ny.get(t);if(n!==void 0)e=ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(o){return o.replace(ry,sy)}function sy(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nd(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function oy(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Pd?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Lp?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function ay(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ly(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function cy(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Id:t="ENVMAP_BLENDING_MULTIPLY";break;case Zp:t="ENVMAP_BLENDING_MIX";break;case Jp:t="ENVMAP_BLENDING_ADD";break}return t}function hy(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function uy(o,t,e,n){const i=o.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const l=oy(e),c=ay(e),h=ly(e),u=cy(e),d=hy(e),f=Jx(e),m=Qx(r),v=i.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(g=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?ge.tonemapping_pars_fragment:"",e.toneMapping!==$i?Kx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,jx("linearToOutputTexel",e.outputColorSpace),Zx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),s=wc(s),s=Qu(s,e),s=td(s,e),a=wc(a),a=Qu(a,e),a=td(a,e),s=ed(s),a=ed(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+s,_=x+p+a,E=Ku(i,i.VERTEX_SHADER,y),A=Ku(i,i.FRAGMENT_SHADER,_);i.attachShader(v,E),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(w){if(o.debug.checkShaderErrors){const F=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(E).trim(),V=i.getShaderInfoLog(A).trim();let H=!0,Y=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,v,E,A);else{const B=Ju(i,E,"vertex"),L=Ju(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+B+`
`+L)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||V==="")&&(Y=!1);Y&&(w.diagnostics={runnable:H,programLog:F,vertexShader:{log:N,prefix:g},fragmentShader:{log:V,prefix:p}})}i.deleteShader(E),i.deleteShader(A),b=new ra(i,v),S=ty(i,v)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,Xx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=A,this}let dy=0;class fy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new py(t),e.set(t,n)),n}}class py{constructor(t){this.id=dy++,this.code=t,this.usedTimes=0}}function my(o,t,e,n,i,r,s){const a=new nh,l=new fy,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,w,F,N){const V=F.fog,H=N.geometry,Y=S.isMeshStandardMaterial?F.environment:null,B=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),L=B&&B.mapping===ba?B.image.height:null,tt=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,O=J!==void 0?J.length:0;let K=0;H.morphAttributes.position!==void 0&&(K=1),H.morphAttributes.normal!==void 0&&(K=2),H.morphAttributes.color!==void 0&&(K=3);let z,P,I,G;if(tt){const oe=ti[tt];z=oe.vertexShader,P=oe.fragmentShader}else z=S.vertexShader,P=S.fragmentShader,l.update(S),I=l.getVertexShaderID(S),G=l.getFragmentShaderID(S);const Q=o.getRenderTarget(),nt=o.state.buffers.depth.getReversed(),X=N.isInstancedMesh===!0,rt=N.isBatchedMesh===!0,mt=!!S.map,St=!!S.matcap,Et=!!B,U=!!S.aoMap,ft=!!S.lightMap,ut=!!S.bumpMap,Xt=!!S.normalMap,xt=!!S.displacementMap,ne=!!S.emissiveMap,gt=!!S.metalnessMap,D=!!S.roughnessMap,T=S.anisotropy>0,j=S.clearcoat>0,ct=S.dispersion>0,ht=S.iridescence>0,at=S.sheen>0,wt=S.transmission>0,At=T&&!!S.anisotropyMap,Ut=j&&!!S.clearcoatMap,ce=j&&!!S.clearcoatNormalMap,Mt=j&&!!S.clearcoatRoughnessMap,Gt=ht&&!!S.iridescenceMap,$t=ht&&!!S.iridescenceThicknessMap,Kt=at&&!!S.sheenColorMap,Wt=at&&!!S.sheenRoughnessMap,he=!!S.specularMap,ie=!!S.specularColorMap,ve=!!S.specularIntensityMap,q=wt&&!!S.transmissionMap,It=wt&&!!S.thicknessMap,lt=!!S.gradientMap,pt=!!S.alphaMap,Vt=S.alphaTest>0,Ot=!!S.alphaHash,re=!!S.extensions;let Ie=$i;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ie=o.toneMapping);const Be={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:P,defines:S.defines,customVertexShaderID:I,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:rt,batchingColor:rt&&N._colorsTexture!==null,instancing:X,instancingColor:X&&N.instanceColor!==null,instancingMorph:X&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?o.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:pn,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:St,envMap:Et,envMapMode:Et&&B.mapping,envMapCubeUVHeight:L,aoMap:U,lightMap:ft,bumpMap:ut,normalMap:Xt,displacementMap:d&&xt,emissiveMap:ne,normalMapObjectSpace:Xt&&S.normalMapType===pm,normalMapTangentSpace:Xt&&S.normalMapType===th,metalnessMap:gt,roughnessMap:D,anisotropy:T,anisotropyMap:At,clearcoat:j,clearcoatMap:Ut,clearcoatNormalMap:ce,clearcoatRoughnessMap:Mt,dispersion:ct,iridescence:ht,iridescenceMap:Gt,iridescenceThicknessMap:$t,sheen:at,sheenColorMap:Kt,sheenRoughnessMap:Wt,specularMap:he,specularColorMap:ie,specularIntensityMap:ve,transmission:wt,transmissionMap:q,thicknessMap:It,gradientMap:lt,opaque:S.transparent===!1&&S.blending===ts&&S.alphaToCoverage===!1,alphaMap:pt,alphaTest:Vt,alphaHash:Ot,combine:S.combine,mapUv:mt&&v(S.map.channel),aoMapUv:U&&v(S.aoMap.channel),lightMapUv:ft&&v(S.lightMap.channel),bumpMapUv:ut&&v(S.bumpMap.channel),normalMapUv:Xt&&v(S.normalMap.channel),displacementMapUv:xt&&v(S.displacementMap.channel),emissiveMapUv:ne&&v(S.emissiveMap.channel),metalnessMapUv:gt&&v(S.metalnessMap.channel),roughnessMapUv:D&&v(S.roughnessMap.channel),anisotropyMapUv:At&&v(S.anisotropyMap.channel),clearcoatMapUv:Ut&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&v(S.sheenRoughnessMap.channel),specularMapUv:he&&v(S.specularMap.channel),specularColorMapUv:ie&&v(S.specularColorMap.channel),specularIntensityMapUv:ve&&v(S.specularIntensityMap.channel),transmissionMapUv:q&&v(S.transmissionMap.channel),thicknessMapUv:It&&v(S.thicknessMap.channel),alphaMapUv:pt&&v(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Xt||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(mt||pt),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:nt,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:K,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&w.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ie,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&Ee.getTransfer(S.map.colorSpace)===De,decodeVideoTextureEmissive:ne&&S.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(S.emissiveMap.colorSpace)===De,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:re&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&S.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)M.push(w),M.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(o.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=m[S.type];let w;if(M){const F=ti[M];w=og.clone(F.uniforms)}else w=S.uniforms;return w}function E(S,M){let w;for(let F=0,N=h.length;F<N;F++){const V=h[F];if(V.cacheKey===M){w=V,++w.usedTimes;break}}return w===void 0&&(w=new uy(o,M,S,r),h.push(w)),w}function A(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function b(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:b}}function gy(){let o=new WeakMap;function t(s){return o.has(s)}function e(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function n(s){o.delete(s)}function i(s,a,l){o.get(s)[a]=l}function r(){o=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function vy(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function id(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function rd(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function s(u,d,f,m,v,g){let p=o[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},o[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function a(u,d,f,m,v,g){const p=s(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,v,g){const p=s(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||vy),n.length>1&&n.sort(d||id),i.length>1&&i.sort(d||id)}function h(){for(let u=t,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function _y(){let o=new WeakMap;function t(n,i){const r=o.get(n);let s;return r===void 0?(s=new rd,o.set(n,[s])):i>=r.length?(s=new rd,r.push(s)):s=r[i],s}function e(){o=new WeakMap}return{get:t,dispose:e}}function xy(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new ae};break;case"SpotLight":e={position:new $,direction:new $,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=e,e}}}function yy(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let My=0;function Sy(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Ey(o){const t=new xy,e=yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const i=new $,r=new de,s=new de;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,x=0,y=0,_=0,E=0,A=0,R=0;c.sort(Sy);for(let S=0,M=c.length;S<M;S++){const w=c[S],F=w.color,N=w.intensity,V=w.distance,H=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=F.r*N,u+=F.g*N,d+=F.b*N;else if(w.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(w.sh.coefficients[Y],N);R++}else if(w.isDirectionalLight){const Y=t.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const B=w.shadow,L=e.get(w);L.shadowIntensity=B.intensity,L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=w.shadow.matrix,x++}n.directional[f]=Y,f++}else if(w.isSpotLight){const Y=t.get(w);Y.position.setFromMatrixPosition(w.matrixWorld),Y.color.copy(F).multiplyScalar(N),Y.distance=V,Y.coneCos=Math.cos(w.angle),Y.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Y.decay=w.decay,n.spot[v]=Y;const B=w.shadow;if(w.map&&(n.spotLightMap[E]=w.map,E++,B.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[v]=B.matrix,w.castShadow){const L=e.get(w);L.shadowIntensity=B.intensity,L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,n.spotShadow[v]=L,n.spotShadowMap[v]=H,_++}v++}else if(w.isRectAreaLight){const Y=t.get(w);Y.color.copy(F).multiplyScalar(N),Y.halfWidth.set(w.width*.5,0,0),Y.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=Y,g++}else if(w.isPointLight){const Y=t.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity),Y.distance=w.distance,Y.decay=w.decay,w.castShadow){const B=w.shadow,L=e.get(w);L.shadowIntensity=B.intensity,L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,L.shadowCameraNear=B.camera.near,L.shadowCameraFar=B.camera.far,n.pointShadow[m]=L,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=w.shadow.matrix,y++}n.point[m]=Y,m++}else if(w.isHemisphereLight){const Y=t.get(w);Y.skyColor.copy(w.color).multiplyScalar(N),Y.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[p]=Y,p++}}g>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==f||b.pointLength!==m||b.spotLength!==v||b.rectAreaLength!==g||b.hemiLength!==p||b.numDirectionalShadows!==x||b.numPointShadows!==y||b.numSpotShadows!==_||b.numSpotMaps!==E||b.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,b.directionalLength=f,b.pointLength=m,b.spotLength=v,b.rectAreaLength=g,b.hemiLength=p,b.numDirectionalShadows=x,b.numPointShadows=y,b.numSpotShadows=_,b.numSpotMaps=E,b.numLightProbes=R,n.version=My++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),s.identity(),r.copy(y.matrixWorld),r.premultiply(g),s.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),m++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function sd(o){const t=new Ey(o),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function s(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:s}}function wy(o){let t=new WeakMap;function e(i,r=0){const s=t.get(i);let a;return s===void 0?(a=new sd(o),t.set(i,[a])):r>=s.length?(a=new sd(o),s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,by=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ty(o,t,e){let n=new oh;const i=new Me,r=new Me,s=new Te,a=new Eg({depthPacking:fm}),l=new wg,c={},h=e.maxTextureSize,u={[Ti]:Mn,[Mn]:Ti,[ei]:ei},d=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Ay,fragmentShader:by}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new nn;m.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ge(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let p=this.type;this.render=function(A,R,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const S=o.getRenderTarget(),M=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),F=o.state;F.setBlending(Yi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==yi&&this.type===yi,V=p===yi&&this.type!==yi;for(let H=0,Y=A.length;H<Y;H++){const B=A[H],L=B.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const tt=L.getFrameExtents();if(i.multiply(tt),r.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,L.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,L.mapSize.y=r.y)),L.map===null||N===!0||V===!0){const O=this.type!==yi?{minFilter:an,magFilter:an}:{};L.map!==null&&L.map.dispose(),L.map=new wr(i.x,i.y,O),L.map.texture.name=B.name+".shadowMap",L.camera.updateProjectionMatrix()}o.setRenderTarget(L.map),o.clear();const J=L.getViewportCount();for(let O=0;O<J;O++){const K=L.getViewport(O);s.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),F.viewport(s),L.updateMatrices(B,O),n=L.getFrustum(),_(R,b,L.camera,B,this.type)}L.isPointLightShadow!==!0&&this.type===yi&&x(L,b),L.needsUpdate=!1}p=this.type,g.needsUpdate=!1,o.setRenderTarget(S,M,w)};function x(A,R){const b=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wr(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,o.setRenderTarget(A.mapPass),o.clear(),o.renderBufferDirect(R,null,b,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,o.setRenderTarget(A.map),o.clear(),o.renderBufferDirect(R,null,b,f,v,null)}function y(A,R,b,S){let M=null;const w=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)M=w;else if(M=b.isPointLight===!0?l:a,o.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=M.uuid,N=R.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let H=V[N];H===void 0&&(H=M.clone(),V[N]=H,R.addEventListener("dispose",E)),M=H}if(M.visible=R.visible,M.wireframe=R.wireframe,S===yi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=o.properties.get(M);F.light=b}return M}function _(A,R,b,S,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===yi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const N=t.update(A),V=A.material;if(Array.isArray(V)){const H=N.groups;for(let Y=0,B=H.length;Y<B;Y++){const L=H[Y],tt=V[L.materialIndex];if(tt&&tt.visible){const J=y(A,tt,S,M);A.onBeforeShadow(o,A,R,b,N,J,L),o.renderBufferDirect(b,null,N,J,A,L),A.onAfterShadow(o,A,R,b,N,J,L)}}}else if(V.visible){const H=y(A,V,S,M);A.onBeforeShadow(o,A,R,b,N,H,null),o.renderBufferDirect(b,null,N,H,A,null),A.onAfterShadow(o,A,R,b,N,H,null)}}const F=A.children;for(let N=0,V=F.length;N<V;N++)_(F[N],R,b,S,M)}function E(A){A.target.removeEventListener("dispose",E);for(const b in c){const S=c[b],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Ry={[Bl]:Ol,[zl]:Hl,[Vl]:Gl,[ls]:kl,[Ol]:Bl,[Hl]:zl,[Gl]:Vl,[kl]:ls};function Cy(o,t){function e(){let q=!1;const It=new Te;let lt=null;const pt=new Te(0,0,0,0);return{setMask:function(Vt){lt!==Vt&&!q&&(o.colorMask(Vt,Vt,Vt,Vt),lt=Vt)},setLocked:function(Vt){q=Vt},setClear:function(Vt,Ot,re,Ie,Be){Be===!0&&(Vt*=Ie,Ot*=Ie,re*=Ie),It.set(Vt,Ot,re,Ie),pt.equals(It)===!1&&(o.clearColor(Vt,Ot,re,Ie),pt.copy(It))},reset:function(){q=!1,lt=null,pt.set(-1,0,0,0)}}}function n(){let q=!1,It=!1,lt=null,pt=null,Vt=null;return{setReversed:function(Ot){if(It!==Ot){const re=t.get("EXT_clip_control");It?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const Ie=Vt;Vt=null,this.setClear(Ie)}It=Ot},getReversed:function(){return It},setTest:function(Ot){Ot?Q(o.DEPTH_TEST):nt(o.DEPTH_TEST)},setMask:function(Ot){lt!==Ot&&!q&&(o.depthMask(Ot),lt=Ot)},setFunc:function(Ot){if(It&&(Ot=Ry[Ot]),pt!==Ot){switch(Ot){case Bl:o.depthFunc(o.NEVER);break;case Ol:o.depthFunc(o.ALWAYS);break;case zl:o.depthFunc(o.LESS);break;case ls:o.depthFunc(o.LEQUAL);break;case Vl:o.depthFunc(o.EQUAL);break;case kl:o.depthFunc(o.GEQUAL);break;case Hl:o.depthFunc(o.GREATER);break;case Gl:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pt=Ot}},setLocked:function(Ot){q=Ot},setClear:function(Ot){Vt!==Ot&&(It&&(Ot=1-Ot),o.clearDepth(Ot),Vt=Ot)},reset:function(){q=!1,lt=null,pt=null,Vt=null,It=!1}}}function i(){let q=!1,It=null,lt=null,pt=null,Vt=null,Ot=null,re=null,Ie=null,Be=null;return{setTest:function(oe){q||(oe?Q(o.STENCIL_TEST):nt(o.STENCIL_TEST))},setMask:function(oe){It!==oe&&!q&&(o.stencilMask(oe),It=oe)},setFunc:function(oe,ot,dt){(lt!==oe||pt!==ot||Vt!==dt)&&(o.stencilFunc(oe,ot,dt),lt=oe,pt=ot,Vt=dt)},setOp:function(oe,ot,dt){(Ot!==oe||re!==ot||Ie!==dt)&&(o.stencilOp(oe,ot,dt),Ot=oe,re=ot,Ie=dt)},setLocked:function(oe){q=oe},setClear:function(oe){Be!==oe&&(o.clearStencil(oe),Be=oe)},reset:function(){q=!1,It=null,lt=null,pt=null,Vt=null,Ot=null,re=null,Ie=null,Be=null}}}const r=new e,s=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,x=null,y=null,_=null,E=null,A=null,R=new ae(0,0,0),b=0,S=!1,M=null,w=null,F=null,N=null,V=null;const H=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,B=0;const L=o.getParameter(o.VERSION);L.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(L)[1]),Y=B>=1):L.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),Y=B>=2);let tt=null,J={};const O=o.getParameter(o.SCISSOR_BOX),K=o.getParameter(o.VIEWPORT),z=new Te().fromArray(O),P=new Te().fromArray(K);function I(q,It,lt,pt){const Vt=new Uint8Array(4),Ot=o.createTexture();o.bindTexture(q,Ot),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let re=0;re<lt;re++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(It,0,o.RGBA,1,1,pt,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(It+re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return Ot}const G={};G[o.TEXTURE_2D]=I(o.TEXTURE_2D,o.TEXTURE_2D,1),G[o.TEXTURE_CUBE_MAP]=I(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[o.TEXTURE_2D_ARRAY]=I(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),G[o.TEXTURE_3D]=I(o.TEXTURE_3D,o.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Q(o.DEPTH_TEST),s.setFunc(ls),ut(!1),Xt(Wh),Q(o.CULL_FACE),U(Yi);function Q(q){h[q]!==!0&&(o.enable(q),h[q]=!0)}function nt(q){h[q]!==!1&&(o.disable(q),h[q]=!1)}function X(q,It){return u[q]!==It?(o.bindFramebuffer(q,It),u[q]=It,q===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=It),q===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=It),!0):!1}function rt(q,It){let lt=f,pt=!1;if(q){lt=d.get(It),lt===void 0&&(lt=[],d.set(It,lt));const Vt=q.textures;if(lt.length!==Vt.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Ot=0,re=Vt.length;Ot<re;Ot++)lt[Ot]=o.COLOR_ATTACHMENT0+Ot;lt.length=Vt.length,pt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,pt=!0);pt&&o.drawBuffers(lt)}function mt(q){return m!==q?(o.useProgram(q),m=q,!0):!1}const St={[gr]:o.FUNC_ADD,[Np]:o.FUNC_SUBTRACT,[Fp]:o.FUNC_REVERSE_SUBTRACT};St[Up]=o.MIN,St[Bp]=o.MAX;const Et={[Op]:o.ZERO,[zp]:o.ONE,[Vp]:o.SRC_COLOR,[Fl]:o.SRC_ALPHA,[qp]:o.SRC_ALPHA_SATURATE,[Wp]:o.DST_COLOR,[Hp]:o.DST_ALPHA,[kp]:o.ONE_MINUS_SRC_COLOR,[Ul]:o.ONE_MINUS_SRC_ALPHA,[Xp]:o.ONE_MINUS_DST_COLOR,[Gp]:o.ONE_MINUS_DST_ALPHA,[Yp]:o.CONSTANT_COLOR,[$p]:o.ONE_MINUS_CONSTANT_COLOR,[jp]:o.CONSTANT_ALPHA,[Kp]:o.ONE_MINUS_CONSTANT_ALPHA};function U(q,It,lt,pt,Vt,Ot,re,Ie,Be,oe){if(q===Yi){v===!0&&(nt(o.BLEND),v=!1);return}if(v===!1&&(Q(o.BLEND),v=!0),q!==Dp){if(q!==g||oe!==S){if((p!==gr||_!==gr)&&(o.blendEquation(o.FUNC_ADD),p=gr,_=gr),oe)switch(q){case ts:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ha:o.blendFunc(o.ONE,o.ONE);break;case Xh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qh:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case ts:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ha:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Xh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qh:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}x=null,y=null,E=null,A=null,R.set(0,0,0),b=0,g=q,S=oe}return}Vt=Vt||It,Ot=Ot||lt,re=re||pt,(It!==p||Vt!==_)&&(o.blendEquationSeparate(St[It],St[Vt]),p=It,_=Vt),(lt!==x||pt!==y||Ot!==E||re!==A)&&(o.blendFuncSeparate(Et[lt],Et[pt],Et[Ot],Et[re]),x=lt,y=pt,E=Ot,A=re),(Ie.equals(R)===!1||Be!==b)&&(o.blendColor(Ie.r,Ie.g,Ie.b,Be),R.copy(Ie),b=Be),g=q,S=!1}function ft(q,It){q.side===ei?nt(o.CULL_FACE):Q(o.CULL_FACE);let lt=q.side===Mn;It&&(lt=!lt),ut(lt),q.blending===ts&&q.transparent===!1?U(Yi):U(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),s.setFunc(q.depthFunc),s.setTest(q.depthTest),s.setMask(q.depthWrite),r.setMask(q.colorWrite);const pt=q.stencilWrite;a.setTest(pt),pt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ne(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Q(o.SAMPLE_ALPHA_TO_COVERAGE):nt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ut(q){M!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),M=q)}function Xt(q){q!==Pp?(Q(o.CULL_FACE),q!==w&&(q===Wh?o.cullFace(o.BACK):q===Ip?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):nt(o.CULL_FACE),w=q}function xt(q){q!==F&&(Y&&o.lineWidth(q),F=q)}function ne(q,It,lt){q?(Q(o.POLYGON_OFFSET_FILL),(N!==It||V!==lt)&&(o.polygonOffset(It,lt),N=It,V=lt)):nt(o.POLYGON_OFFSET_FILL)}function gt(q){q?Q(o.SCISSOR_TEST):nt(o.SCISSOR_TEST)}function D(q){q===void 0&&(q=o.TEXTURE0+H-1),tt!==q&&(o.activeTexture(q),tt=q)}function T(q,It,lt){lt===void 0&&(tt===null?lt=o.TEXTURE0+H-1:lt=tt);let pt=J[lt];pt===void 0&&(pt={type:void 0,texture:void 0},J[lt]=pt),(pt.type!==q||pt.texture!==It)&&(tt!==lt&&(o.activeTexture(lt),tt=lt),o.bindTexture(q,It||G[q]),pt.type=q,pt.texture=It)}function j(){const q=J[tt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ct(){try{o.compressedTexImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{o.compressedTexImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function at(){try{o.texSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{o.texSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ce(){try{o.texStorage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{o.texStorage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(){try{o.texImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $t(){try{o.texImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(q){z.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),z.copy(q))}function Wt(q){P.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),P.copy(q))}function he(q,It){let lt=c.get(It);lt===void 0&&(lt=new WeakMap,c.set(It,lt));let pt=lt.get(q);pt===void 0&&(pt=o.getUniformBlockIndex(It,q.name),lt.set(q,pt))}function ie(q,It){const pt=c.get(It).get(q);l.get(It)!==pt&&(o.uniformBlockBinding(It,pt,q.__bindingPointIndex),l.set(It,pt))}function ve(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),s.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},tt=null,J={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,x=null,y=null,_=null,E=null,A=null,R=new ae(0,0,0),b=0,S=!1,M=null,w=null,F=null,N=null,V=null,z.set(0,0,o.canvas.width,o.canvas.height),P.set(0,0,o.canvas.width,o.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Q,disable:nt,bindFramebuffer:X,drawBuffers:rt,useProgram:mt,setBlending:U,setMaterial:ft,setFlipSided:ut,setCullFace:Xt,setLineWidth:xt,setPolygonOffset:ne,setScissorTest:gt,activeTexture:D,bindTexture:T,unbindTexture:j,compressedTexImage2D:ct,compressedTexImage3D:ht,texImage2D:Gt,texImage3D:$t,updateUBOMapping:he,uniformBlockBinding:ie,texStorage2D:ce,texStorage3D:Mt,texSubImage2D:at,texSubImage3D:wt,compressedTexSubImage2D:At,compressedTexSubImage3D:Ut,scissor:Kt,viewport:Wt,reset:ve}}function Py(o,t,e,n,i,r,s){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,T){return f?new OffscreenCanvas(D,T):Qs("canvas")}function v(D,T,j){let ct=1;const ht=gt(D);if((ht.width>j||ht.height>j)&&(ct=j/Math.max(ht.width,ht.height)),ct<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const at=Math.floor(ct*ht.width),wt=Math.floor(ct*ht.height);u===void 0&&(u=m(at,wt));const At=T?m(at,wt):u;return At.width=at,At.height=wt,At.getContext("2d").drawImage(D,0,0,at,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+at+"x"+wt+")."),At}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){o.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function y(D,T,j,ct,ht=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let at=T;if(T===o.RED&&(j===o.FLOAT&&(at=o.R32F),j===o.HALF_FLOAT&&(at=o.R16F),j===o.UNSIGNED_BYTE&&(at=o.R8)),T===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(at=o.R8UI),j===o.UNSIGNED_SHORT&&(at=o.R16UI),j===o.UNSIGNED_INT&&(at=o.R32UI),j===o.BYTE&&(at=o.R8I),j===o.SHORT&&(at=o.R16I),j===o.INT&&(at=o.R32I)),T===o.RG&&(j===o.FLOAT&&(at=o.RG32F),j===o.HALF_FLOAT&&(at=o.RG16F),j===o.UNSIGNED_BYTE&&(at=o.RG8)),T===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(at=o.RG8UI),j===o.UNSIGNED_SHORT&&(at=o.RG16UI),j===o.UNSIGNED_INT&&(at=o.RG32UI),j===o.BYTE&&(at=o.RG8I),j===o.SHORT&&(at=o.RG16I),j===o.INT&&(at=o.RG32I)),T===o.RGB_INTEGER&&(j===o.UNSIGNED_BYTE&&(at=o.RGB8UI),j===o.UNSIGNED_SHORT&&(at=o.RGB16UI),j===o.UNSIGNED_INT&&(at=o.RGB32UI),j===o.BYTE&&(at=o.RGB8I),j===o.SHORT&&(at=o.RGB16I),j===o.INT&&(at=o.RGB32I)),T===o.RGBA_INTEGER&&(j===o.UNSIGNED_BYTE&&(at=o.RGBA8UI),j===o.UNSIGNED_SHORT&&(at=o.RGBA16UI),j===o.UNSIGNED_INT&&(at=o.RGBA32UI),j===o.BYTE&&(at=o.RGBA8I),j===o.SHORT&&(at=o.RGBA16I),j===o.INT&&(at=o.RGBA32I)),T===o.RGB&&j===o.UNSIGNED_INT_5_9_9_9_REV&&(at=o.RGB9_E5),T===o.RGBA){const wt=ht?fa:Ee.getTransfer(ct);j===o.FLOAT&&(at=o.RGBA32F),j===o.HALF_FLOAT&&(at=o.RGBA16F),j===o.UNSIGNED_BYTE&&(at=wt===De?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(at=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(at=o.RGB5_A1)}return(at===o.R16F||at===o.R32F||at===o.RG16F||at===o.RG32F||at===o.RGBA16F||at===o.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function _(D,T){let j;return D?T===null||T===Er||T===ds?j=o.DEPTH24_STENCIL8:T===jn?j=o.DEPTH32F_STENCIL8:T===Ks&&(j=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Er||T===ds?j=o.DEPTH_COMPONENT24:T===jn?j=o.DEPTH_COMPONENT32F:T===Ks&&(j=o.DEPTH_COMPONENT16),j}function E(D,T){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==an&&D.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function A(D){const T=D.target;T.removeEventListener("dispose",A),b(T),T.isVideoTexture&&h.delete(T)}function R(D){const T=D.target;T.removeEventListener("dispose",R),M(T)}function b(D){const T=n.get(D);if(T.__webglInit===void 0)return;const j=D.source,ct=d.get(j);if(ct){const ht=ct[T.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&S(D),Object.keys(ct).length===0&&d.delete(j)}n.remove(D)}function S(D){const T=n.get(D);o.deleteTexture(T.__webglTexture);const j=D.source,ct=d.get(j);delete ct[T.__cacheKey],s.memory.textures--}function M(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(T.__webglFramebuffer[ct]))for(let ht=0;ht<T.__webglFramebuffer[ct].length;ht++)o.deleteFramebuffer(T.__webglFramebuffer[ct][ht]);else o.deleteFramebuffer(T.__webglFramebuffer[ct]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ct])}else{if(Array.isArray(T.__webglFramebuffer))for(let ct=0;ct<T.__webglFramebuffer.length;ct++)o.deleteFramebuffer(T.__webglFramebuffer[ct]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ct=0;ct<T.__webglColorRenderbuffer.length;ct++)T.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ct]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=D.textures;for(let ct=0,ht=j.length;ct<ht;ct++){const at=n.get(j[ct]);at.__webglTexture&&(o.deleteTexture(at.__webglTexture),s.memory.textures--),n.remove(j[ct])}n.remove(D)}let w=0;function F(){w=0}function N(){const D=w;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),w+=1,D}function V(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function H(D,T){const j=n.get(D);if(D.isVideoTexture&&xt(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){const ct=D.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{P(j,D,T);return}}e.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+T)}function Y(D,T){const j=n.get(D);if(D.version>0&&j.__version!==D.version){P(j,D,T);return}e.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+T)}function B(D,T){const j=n.get(D);if(D.version>0&&j.__version!==D.version){P(j,D,T);return}e.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+T)}function L(D,T){const j=n.get(D);if(D.version>0&&j.__version!==D.version){I(j,D,T);return}e.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+T)}const tt={[us]:o.REPEAT,[ki]:o.CLAMP_TO_EDGE,[ua]:o.MIRRORED_REPEAT},J={[an]:o.NEAREST,[Dd]:o.NEAREST_MIPMAP_NEAREST,[Vs]:o.NEAREST_MIPMAP_LINEAR,[Dn]:o.LINEAR,[Jo]:o.LINEAR_MIPMAP_NEAREST,[wi]:o.LINEAR_MIPMAP_LINEAR},O={[mm]:o.NEVER,[Mm]:o.ALWAYS,[gm]:o.LESS,[Wd]:o.LEQUAL,[vm]:o.EQUAL,[ym]:o.GEQUAL,[_m]:o.GREATER,[xm]:o.NOTEQUAL};function K(D,T){if(T.type===jn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Dn||T.magFilter===Jo||T.magFilter===Vs||T.magFilter===wi||T.minFilter===Dn||T.minFilter===Jo||T.minFilter===Vs||T.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,tt[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,tt[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,tt[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,J[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,J[T.minFilter]),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===an||T.minFilter!==Vs&&T.minFilter!==wi||T.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function z(D,T){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",A));const ct=T.source;let ht=d.get(ct);ht===void 0&&(ht={},d.set(ct,ht));const at=V(T);if(at!==D.__cacheKey){ht[at]===void 0&&(ht[at]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,j=!0),ht[at].usedTimes++;const wt=ht[D.__cacheKey];wt!==void 0&&(ht[D.__cacheKey].usedTimes--,wt.usedTimes===0&&S(T)),D.__cacheKey=at,D.__webglTexture=ht[at].texture}return j}function P(D,T,j){let ct=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ct=o.TEXTURE_3D);const ht=z(D,T),at=T.source;e.bindTexture(ct,D.__webglTexture,o.TEXTURE0+j);const wt=n.get(at);if(at.version!==wt.__version||ht===!0){e.activeTexture(o.TEXTURE0+j);const At=Ee.getPrimaries(Ee.workingColorSpace),Ut=T.colorSpace===Vi?null:Ee.getPrimaries(T.colorSpace),ce=T.colorSpace===Vi||At===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Mt=v(T.image,!1,i.maxTextureSize);Mt=ne(T,Mt);const Gt=r.convert(T.format,T.colorSpace),$t=r.convert(T.type);let Kt=y(T.internalFormat,Gt,$t,T.colorSpace,T.isVideoTexture);K(ct,T);let Wt;const he=T.mipmaps,ie=T.isVideoTexture!==!0,ve=wt.__version===void 0||ht===!0,q=at.dataReady,It=E(T,Mt);if(T.isDepthTexture)Kt=_(T.format===fs,T.type),ve&&(ie?e.texStorage2D(o.TEXTURE_2D,1,Kt,Mt.width,Mt.height):e.texImage2D(o.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,Gt,$t,null));else if(T.isDataTexture)if(he.length>0){ie&&ve&&e.texStorage2D(o.TEXTURE_2D,It,Kt,he[0].width,he[0].height);for(let lt=0,pt=he.length;lt<pt;lt++)Wt=he[lt],ie?q&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,Gt,$t,Wt.data):e.texImage2D(o.TEXTURE_2D,lt,Kt,Wt.width,Wt.height,0,Gt,$t,Wt.data);T.generateMipmaps=!1}else ie?(ve&&e.texStorage2D(o.TEXTURE_2D,It,Kt,Mt.width,Mt.height),q&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Gt,$t,Mt.data)):e.texImage2D(o.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,Gt,$t,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ie&&ve&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,Kt,he[0].width,he[0].height,Mt.depth);for(let lt=0,pt=he.length;lt<pt;lt++)if(Wt=he[lt],T.format!==Vn)if(Gt!==null)if(ie){if(q)if(T.layerUpdates.size>0){const Vt=Fu(Wt.width,Wt.height,T.format,T.type);for(const Ot of T.layerUpdates){const re=Wt.data.subarray(Ot*Vt/Wt.data.BYTES_PER_ELEMENT,(Ot+1)*Vt/Wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Ot,Wt.width,Wt.height,1,Gt,re)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,Mt.depth,Gt,Wt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,Kt,Wt.width,Wt.height,Mt.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?q&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,Mt.depth,Gt,$t,Wt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,lt,Kt,Wt.width,Wt.height,Mt.depth,0,Gt,$t,Wt.data)}else{ie&&ve&&e.texStorage2D(o.TEXTURE_2D,It,Kt,he[0].width,he[0].height);for(let lt=0,pt=he.length;lt<pt;lt++)Wt=he[lt],T.format!==Vn?Gt!==null?ie?q&&e.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,Gt,Wt.data):e.compressedTexImage2D(o.TEXTURE_2D,lt,Kt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?q&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,Gt,$t,Wt.data):e.texImage2D(o.TEXTURE_2D,lt,Kt,Wt.width,Wt.height,0,Gt,$t,Wt.data)}else if(T.isDataArrayTexture)if(ie){if(ve&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,Kt,Mt.width,Mt.height,Mt.depth),q)if(T.layerUpdates.size>0){const lt=Fu(Mt.width,Mt.height,T.format,T.type);for(const pt of T.layerUpdates){const Vt=Mt.data.subarray(pt*lt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*lt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,Mt.width,Mt.height,1,Gt,$t,Vt)}T.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Gt,$t,Mt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,Mt.width,Mt.height,Mt.depth,0,Gt,$t,Mt.data);else if(T.isData3DTexture)ie?(ve&&e.texStorage3D(o.TEXTURE_3D,It,Kt,Mt.width,Mt.height,Mt.depth),q&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Gt,$t,Mt.data)):e.texImage3D(o.TEXTURE_3D,0,Kt,Mt.width,Mt.height,Mt.depth,0,Gt,$t,Mt.data);else if(T.isFramebufferTexture){if(ve)if(ie)e.texStorage2D(o.TEXTURE_2D,It,Kt,Mt.width,Mt.height);else{let lt=Mt.width,pt=Mt.height;for(let Vt=0;Vt<It;Vt++)e.texImage2D(o.TEXTURE_2D,Vt,Kt,lt,pt,0,Gt,$t,null),lt>>=1,pt>>=1}}else if(he.length>0){if(ie&&ve){const lt=gt(he[0]);e.texStorage2D(o.TEXTURE_2D,It,Kt,lt.width,lt.height)}for(let lt=0,pt=he.length;lt<pt;lt++)Wt=he[lt],ie?q&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Gt,$t,Wt):e.texImage2D(o.TEXTURE_2D,lt,Kt,Gt,$t,Wt);T.generateMipmaps=!1}else if(ie){if(ve){const lt=gt(Mt);e.texStorage2D(o.TEXTURE_2D,It,Kt,lt.width,lt.height)}q&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,$t,Mt)}else e.texImage2D(o.TEXTURE_2D,0,Kt,Gt,$t,Mt);g(T)&&p(ct),wt.__version=at.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function I(D,T,j){if(T.image.length!==6)return;const ct=z(D,T),ht=T.source;e.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+j);const at=n.get(ht);if(ht.version!==at.__version||ct===!0){e.activeTexture(o.TEXTURE0+j);const wt=Ee.getPrimaries(Ee.workingColorSpace),At=T.colorSpace===Vi?null:Ee.getPrimaries(T.colorSpace),Ut=T.colorSpace===Vi||wt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const ce=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Gt=[];for(let pt=0;pt<6;pt++)!ce&&!Mt?Gt[pt]=v(T.image[pt],!0,i.maxCubemapSize):Gt[pt]=Mt?T.image[pt].image:T.image[pt],Gt[pt]=ne(T,Gt[pt]);const $t=Gt[0],Kt=r.convert(T.format,T.colorSpace),Wt=r.convert(T.type),he=y(T.internalFormat,Kt,Wt,T.colorSpace),ie=T.isVideoTexture!==!0,ve=at.__version===void 0||ct===!0,q=ht.dataReady;let It=E(T,$t);K(o.TEXTURE_CUBE_MAP,T);let lt;if(ce){ie&&ve&&e.texStorage2D(o.TEXTURE_CUBE_MAP,It,he,$t.width,$t.height);for(let pt=0;pt<6;pt++){lt=Gt[pt].mipmaps;for(let Vt=0;Vt<lt.length;Vt++){const Ot=lt[Vt];T.format!==Vn?Kt!==null?ie?q&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,0,0,Ot.width,Ot.height,Kt,Ot.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,he,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?q&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,0,0,Ot.width,Ot.height,Kt,Wt,Ot.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,he,Ot.width,Ot.height,0,Kt,Wt,Ot.data)}}}else{if(lt=T.mipmaps,ie&&ve){lt.length>0&&It++;const pt=gt(Gt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,It,he,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Mt){ie?q&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Gt[pt].width,Gt[pt].height,Kt,Wt,Gt[pt].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,he,Gt[pt].width,Gt[pt].height,0,Kt,Wt,Gt[pt].data);for(let Vt=0;Vt<lt.length;Vt++){const re=lt[Vt].image[pt].image;ie?q&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,0,0,re.width,re.height,Kt,Wt,re.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,he,re.width,re.height,0,Kt,Wt,re.data)}}else{ie?q&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Kt,Wt,Gt[pt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,he,Kt,Wt,Gt[pt]);for(let Vt=0;Vt<lt.length;Vt++){const Ot=lt[Vt];ie?q&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,0,0,Kt,Wt,Ot.image[pt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,he,Kt,Wt,Ot.image[pt])}}}g(T)&&p(o.TEXTURE_CUBE_MAP),at.__version=ht.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function G(D,T,j,ct,ht,at){const wt=r.convert(j.format,j.colorSpace),At=r.convert(j.type),Ut=y(j.internalFormat,wt,At,j.colorSpace),ce=n.get(T),Mt=n.get(j);if(Mt.__renderTarget=T,!ce.__hasExternalTextures){const Gt=Math.max(1,T.width>>at),$t=Math.max(1,T.height>>at);ht===o.TEXTURE_3D||ht===o.TEXTURE_2D_ARRAY?e.texImage3D(ht,at,Ut,Gt,$t,T.depth,0,wt,At,null):e.texImage2D(ht,at,Ut,Gt,$t,0,wt,At,null)}e.bindFramebuffer(o.FRAMEBUFFER,D),Xt(T)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,ht,Mt.__webglTexture,0,ut(T)):(ht===o.TEXTURE_2D||ht>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,ht,Mt.__webglTexture,at),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Q(D,T,j){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer){const ct=T.depthTexture,ht=ct&&ct.isDepthTexture?ct.type:null,at=_(T.stencilBuffer,ht),wt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=ut(T);Xt(T)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,at,T.width,T.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,at,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,at,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,wt,o.RENDERBUFFER,D)}else{const ct=T.textures;for(let ht=0;ht<ct.length;ht++){const at=ct[ht],wt=r.convert(at.format,at.colorSpace),At=r.convert(at.type),Ut=y(at.internalFormat,wt,At,at.colorSpace),ce=ut(T);j&&Xt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ce,Ut,T.width,T.height):Xt(T)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ce,Ut,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ut,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function nt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(T.depthTexture);ct.__renderTarget=T,(!ct.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const ht=ct.__webglTexture,at=ut(T);if(T.depthTexture.format===es)Xt(T)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0,at):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0);else if(T.depthTexture.format===fs)Xt(T)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0,at):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function X(D){const T=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ct=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ct){const ht=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ct.removeEventListener("dispose",ht)};ct.addEventListener("dispose",ht),T.__depthDisposeCallback=ht}T.__boundDepthTexture=ct}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");nt(T.__webglFramebuffer,D)}else if(j){T.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ct]),T.__webglDepthbuffer[ct]===void 0)T.__webglDepthbuffer[ct]=o.createRenderbuffer(),Q(T.__webglDepthbuffer[ct],D,!1);else{const ht=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,at=T.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,at),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,at)}}else if(e.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Q(T.__webglDepthbuffer,D,!1);else{const ct=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,ct,o.RENDERBUFFER,ht)}e.bindFramebuffer(o.FRAMEBUFFER,null)}function rt(D,T,j){const ct=n.get(D);T!==void 0&&G(ct.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&X(D)}function mt(D){const T=D.texture,j=n.get(D),ct=n.get(T);D.addEventListener("dispose",R);const ht=D.textures,at=D.isWebGLCubeRenderTarget===!0,wt=ht.length>1;if(wt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=T.version,s.memory.textures++),at){j.__webglFramebuffer=[];for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[At]=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)j.__webglFramebuffer[At][Ut]=o.createFramebuffer()}else j.__webglFramebuffer[At]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let At=0;At<T.mipmaps.length;At++)j.__webglFramebuffer[At]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(wt)for(let At=0,Ut=ht.length;At<Ut;At++){const ce=n.get(ht[At]);ce.__webglTexture===void 0&&(ce.__webglTexture=o.createTexture(),s.memory.textures++)}if(D.samples>0&&Xt(D)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let At=0;At<ht.length;At++){const Ut=ht[At];j.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[At]);const ce=r.convert(Ut.format,Ut.colorSpace),Mt=r.convert(Ut.type),Gt=y(Ut.internalFormat,ce,Mt,Ut.colorSpace,D.isXRRenderTarget===!0),$t=ut(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,Gt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,j.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),Q(j.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(at){e.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),K(o.TEXTURE_CUBE_MAP,T);for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ut=0;Ut<T.mipmaps.length;Ut++)G(j.__webglFramebuffer[At][Ut],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ut);else G(j.__webglFramebuffer[At],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);g(T)&&p(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let At=0,Ut=ht.length;At<Ut;At++){const ce=ht[At],Mt=n.get(ce);e.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),K(o.TEXTURE_2D,ce),G(j.__webglFramebuffer,D,ce,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,0),g(ce)&&p(o.TEXTURE_2D)}e.unbindTexture()}else{let At=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(At=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(At,ct.__webglTexture),K(At,T),T.mipmaps&&T.mipmaps.length>0)for(let Ut=0;Ut<T.mipmaps.length;Ut++)G(j.__webglFramebuffer[Ut],D,T,o.COLOR_ATTACHMENT0,At,Ut);else G(j.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,At,0);g(T)&&p(At),e.unbindTexture()}D.depthBuffer&&X(D)}function St(D){const T=D.textures;for(let j=0,ct=T.length;j<ct;j++){const ht=T[j];if(g(ht)){const at=x(D),wt=n.get(ht).__webglTexture;e.bindTexture(at,wt),p(at),e.unbindTexture()}}}const Et=[],U=[];function ft(D){if(D.samples>0){if(Xt(D)===!1){const T=D.textures,j=D.width,ct=D.height;let ht=o.COLOR_BUFFER_BIT;const at=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=n.get(D),At=T.length>1;if(At)for(let Ut=0;Ut<T.length;Ut++)e.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ut=0;Ut<T.length;Ut++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ht|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ht|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,wt.__webglColorRenderbuffer[Ut]);const ce=n.get(T[Ut]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ce,0)}o.blitFramebuffer(0,0,j,ct,0,0,j,ct,ht,o.NEAREST),l===!0&&(Et.length=0,U.length=0,Et.push(o.COLOR_ATTACHMENT0+Ut),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Et.push(at),U.push(at),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,U)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Ut=0;Ut<T.length;Ut++){e.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,wt.__webglColorRenderbuffer[Ut]);const ce=n.get(T[Ut]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,ce,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ut(D){return Math.min(i.maxSamples,D.samples)}function Xt(D){const T=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xt(D){const T=s.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function ne(D,T){const j=D.colorSpace,ct=D.format,ht=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==pn&&j!==Vi&&(Ee.getTransfer(j)===De?(ct!==Vn||ht!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function gt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=B,this.setTextureCube=L,this.rebindTextures=rt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=G,this.useMultisampledRTT=Xt}function Iy(o,t){function e(n,i=Vi){let r;const s=Ee.getTransfer(i);if(n===Ri)return o.UNSIGNED_BYTE;if(n===Yc)return o.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return o.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return o.BYTE;if(n===Fd)return o.SHORT;if(n===Ks)return o.UNSIGNED_SHORT;if(n===qc)return o.INT;if(n===Er)return o.UNSIGNED_INT;if(n===jn)return o.FLOAT;if(n===mo)return o.HALF_FLOAT;if(n===Bd)return o.ALPHA;if(n===Od)return o.RGB;if(n===Vn)return o.RGBA;if(n===zd)return o.LUMINANCE;if(n===Vd)return o.LUMINANCE_ALPHA;if(n===es)return o.DEPTH_COMPONENT;if(n===fs)return o.DEPTH_STENCIL;if(n===jc)return o.RED;if(n===Kc)return o.RED_INTEGER;if(n===kd)return o.RG;if(n===Zc)return o.RG_INTEGER;if(n===Jc)return o.RGBA_INTEGER;if(n===Qo||n===ta||n===ea||n===na)if(s===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Yl||n===$l||n===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===Zl||n===Jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===Zl)return s===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jl)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ql||n===tc||n===ec||n===nc||n===ic||n===rc||n===sc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return s===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===fc||n===pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return s===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hd||n===mc||n===gc||n===vc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}const Ly={type:"move"};class gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ny=`
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

}`;class Fy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new tn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ji({vertexShader:Dy,fragmentShader:Ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new Ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uy extends Tr{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const v=new Fy,g=e.getContextAttributes();let p=null,x=null;const y=[],_=[],E=new Me;let A=null;const R=new dn;R.viewport=new Te;const b=new dn;b.viewport=new Te;const S=[R,b],M=new Hg;let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let I=y[P];return I===void 0&&(I=new gl,y[P]=I),I.getTargetRaySpace()},this.getControllerGrip=function(P){let I=y[P];return I===void 0&&(I=new gl,y[P]=I),I.getGripSpace()},this.getHand=function(P){let I=y[P];return I===void 0&&(I=new gl,y[P]=I),I.getHandSpace()};function N(P){const I=_.indexOf(P.inputSource);if(I===-1)return;const G=y[I];G!==void 0&&(G.update(P.inputSource,P.frame,c||s),G.dispatchEvent({type:P.type,data:P.inputSource}))}function V(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",H);for(let P=0;P<y.length;P++){const I=_[P];I!==null&&(_[P]=null,y[P].disconnect(I))}w=null,F=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,x=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",V),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){const I={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,I),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new wr(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let I=null,G=null,Q=null;g.depth&&(Q=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=g.stencil?fs:es,G=g.stencil?ds:Er);const nt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(nt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new wr(d.textureWidth,d.textureHeight,{format:Vn,type:Ri,depthTexture:new nf(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(P){for(let I=0;I<P.removed.length;I++){const G=P.removed[I],Q=_.indexOf(G);Q>=0&&(_[Q]=null,y[Q].disconnect(G))}for(let I=0;I<P.added.length;I++){const G=P.added[I];let Q=_.indexOf(G);if(Q===-1){for(let X=0;X<y.length;X++)if(X>=_.length){_.push(G),Q=X;break}else if(_[X]===null){_[X]=G,Q=X;break}if(Q===-1)break}const nt=y[Q];nt&&nt.connect(G)}}const Y=new $,B=new $;function L(P,I,G){Y.setFromMatrixPosition(I.matrixWorld),B.setFromMatrixPosition(G.matrixWorld);const Q=Y.distanceTo(B),nt=I.projectionMatrix.elements,X=G.projectionMatrix.elements,rt=nt[14]/(nt[10]-1),mt=nt[14]/(nt[10]+1),St=(nt[9]+1)/nt[5],Et=(nt[9]-1)/nt[5],U=(nt[8]-1)/nt[0],ft=(X[8]+1)/X[0],ut=rt*U,Xt=rt*ft,xt=Q/(-U+ft),ne=xt*-U;if(I.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(ne),P.translateZ(xt),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),nt[10]===-1)P.projectionMatrix.copy(I.projectionMatrix),P.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{const gt=rt+xt,D=mt+xt,T=ut-ne,j=Xt+(Q-ne),ct=St*mt/D*gt,ht=Et*mt/D*gt;P.projectionMatrix.makePerspective(T,j,ct,ht,gt,D),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function tt(P,I){I===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(I.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;let I=P.near,G=P.far;v.texture!==null&&(v.depthNear>0&&(I=v.depthNear),v.depthFar>0&&(G=v.depthFar)),M.near=b.near=R.near=I,M.far=b.far=R.far=G,(w!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far),R.layers.mask=P.layers.mask|2,b.layers.mask=P.layers.mask|4,M.layers.mask=R.layers.mask|b.layers.mask;const Q=P.parent,nt=M.cameras;tt(M,Q);for(let X=0;X<nt.length;X++)tt(nt[X],Q);nt.length===2?L(M,R,b):M.projectionMatrix.copy(R.projectionMatrix),J(P,M,Q)};function J(P,I,G){G===null?P.matrix.copy(I.matrixWorld):(P.matrix.copy(G.matrixWorld),P.matrix.invert(),P.matrix.multiply(I.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(I.projectionMatrix),P.projectionMatrixInverse.copy(I.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=ps*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(P){l=P,d!==null&&(d.fixedFoveation=P),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=P)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let O=null;function K(P,I){if(h=I.getViewerPose(c||s),m=I,h!==null){const G=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Q=!1;G.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let X=0;X<G.length;X++){const rt=G[X];let mt=null;if(f!==null)mt=f.getViewport(rt);else{const Et=u.getViewSubImage(d,rt);mt=Et.viewport,X===0&&(t.setRenderTargetTextures(x,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(x))}let St=S[X];St===void 0&&(St=new dn,St.layers.enable(X),St.viewport=new Te,S[X]=St),St.matrix.fromArray(rt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(rt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(mt.x,mt.y,mt.width,mt.height),X===0&&(M.matrix.copy(St.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push(St)}const nt=i.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const X=u.getDepthInformation(G[0]);X&&X.isValid&&X.texture&&v.init(t,X,i.renderState)}}for(let G=0;G<y.length;G++){const Q=_[G],nt=y[G];Q!==null&&nt!==void 0&&nt.update(Q,I,c||s)}O&&O(P,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),m=null}const z=new hf;z.setAnimationLoop(K),this.setAnimationLoop=function(P){O=P},this.dispose=function(){}}}const lr=new ai,By=new de;function Oy(o,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Zd(o)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,_=x.envMapRotation;y&&(g.envMap.value=y,lr.copy(_),lr.x*=-1,lr.y*=-1,lr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),g.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(lr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zy(o,t,e,n){let i={},r={},s=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function c(x,y){let _=i[x.id];_===void 0&&(m(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",g));const E=y.program;n.updateUBOMapping(x,E);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const y=u();x.__bindingPointIndex=y;const _=o.createBuffer(),E=x.__size,A=x.usage;return o.bindBuffer(o.UNIFORM_BUFFER,_),o.bufferData(o.UNIFORM_BUFFER,E,A),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,_),_}function u(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],_=x.uniforms,E=x.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let A=0,R=_.length;A<R;A++){const b=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,M=b.length;S<M;S++){const w=b[S];if(f(w,A,S,E)===!0){const F=w.__offset,N=Array.isArray(w.value)?w.value:[w.value];let V=0;for(let H=0;H<N.length;H++){const Y=N[H],B=v(Y);typeof Y=="number"||typeof Y=="boolean"?(w.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,F+V,w.__data)):Y.isMatrix3?(w.__data[0]=Y.elements[0],w.__data[1]=Y.elements[1],w.__data[2]=Y.elements[2],w.__data[3]=0,w.__data[4]=Y.elements[3],w.__data[5]=Y.elements[4],w.__data[6]=Y.elements[5],w.__data[7]=0,w.__data[8]=Y.elements[6],w.__data[9]=Y.elements[7],w.__data[10]=Y.elements[8],w.__data[11]=0):(Y.toArray(w.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,F,w.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(x,y,_,E){const A=x.value,R=y+"_"+_;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:E[R]=A.clone(),!0;{const b=E[R];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return E[R]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function m(x){const y=x.uniforms;let _=0;const E=16;for(let R=0,b=y.length;R<b;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,w=S.length;M<w;M++){const F=S[M],N=Array.isArray(F.value)?F.value:[F.value];for(let V=0,H=N.length;V<H;V++){const Y=N[V],B=v(Y),L=_%E,tt=L%B.boundary,J=L+tt;_+=tt,J!==0&&E-J<B.storage&&(_+=E-J),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=B.storage}}}const A=_%E;return A>0&&(_+=E-A),x.__size=_,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const _=s.indexOf(y.__bindingPointIndex);s.splice(_,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const x in i)o.deleteBuffer(i[x]);s=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Vy{constructor(t={}){const{canvas:e=zm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=$i,this.toneMappingExposure=1;const _=this;let E=!1,A=0,R=0,b=null,S=-1,M=null;const w=new Te,F=new Te;let N=null;const V=new ae(0);let H=0,Y=e.width,B=e.height,L=1,tt=null,J=null;const O=new Te(0,0,Y,B),K=new Te(0,0,Y,B);let z=!1;const P=new oh;let I=!1,G=!1;const Q=new de,nt=new de,X=new $,rt=new Te,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Et(){return b===null?L:1}let U=n;function ft(C,k){return e.getContext(C,k)}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xc}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),U===null){const k="webgl2";if(U=ft(k,C),U===null)throw ft(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ut,Xt,xt,ne,gt,D,T,j,ct,ht,at,wt,At,Ut,ce,Mt,Gt,$t,Kt,Wt,he,ie,ve,q;function It(){ut=new j0(U),ut.init(),ie=new Iy(U,ut),Xt=new G0(U,ut,t,ie),xt=new Cy(U,ut),Xt.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),ne=new J0(U),gt=new gy,D=new Py(U,ut,xt,gt,Xt,ie,ne),T=new X0(_),j=new $0(_),ct=new sv(U),ve=new k0(U,ct),ht=new K0(U,ct,ne,ve),at=new tx(U,ht,ct,ne),Kt=new Q0(U,Xt,D),Mt=new W0(gt),wt=new my(_,T,j,ut,Xt,ve,Mt),At=new Oy(_,gt),Ut=new _y,ce=new wy(ut),$t=new V0(_,T,j,xt,at,f,l),Gt=new Ty(_,at,Xt),q=new zy(U,ne,Xt,xt),Wt=new H0(U,ut,ne),he=new Z0(U,ut,ne),ne.programs=wt.programs,_.capabilities=Xt,_.extensions=ut,_.properties=gt,_.renderLists=Ut,_.shadowMap=Gt,_.state=xt,_.info=ne}It();const lt=new Uy(_,U);this.xr=lt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(C){C!==void 0&&(L=C,this.setSize(Y,B,!1))},this.getSize=function(C){return C.set(Y,B)},this.setSize=function(C,k,et=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=C,B=k,e.width=Math.floor(C*L),e.height=Math.floor(k*L),et===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(Y*L,B*L).floor()},this.setDrawingBufferSize=function(C,k,et){Y=C,B=k,L=et,e.width=Math.floor(C*et),e.height=Math.floor(k*et),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,k,et,Z){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,k,et,Z),xt.viewport(w.copy(O).multiplyScalar(L).round())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,k,et,Z){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,k,et,Z),xt.scissor(F.copy(K).multiplyScalar(L).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(C){xt.setScissorTest(z=C)},this.setOpaqueSort=function(C){tt=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(C=!0,k=!0,et=!0){let Z=0;if(C){let W=!1;if(b!==null){const st=b.texture.format;W=st===Jc||st===Zc||st===Kc}if(W){const st=b.texture.type,Ct=st===Ri||st===Er||st===Ks||st===ds||st===Yc||st===$c,zt=$t.getClearColor(),kt=$t.getClearAlpha(),te=zt.r,jt=zt.g,Ft=zt.b;Ct?(m[0]=te,m[1]=jt,m[2]=Ft,m[3]=kt,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=te,v[1]=jt,v[2]=Ft,v[3]=kt,U.clearBufferiv(U.COLOR,0,v))}else Z|=U.COLOR_BUFFER_BIT}k&&(Z|=U.DEPTH_BUFFER_BIT),et&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),$t.dispose(),Ut.dispose(),ce.dispose(),gt.dispose(),T.dispose(),j.dispose(),at.dispose(),ve.dispose(),q.dispose(),wt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",vt),lt.removeEventListener("sessionend",_t),Qt.stop()};function pt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=ne.autoReset,k=Gt.enabled,et=Gt.autoUpdate,Z=Gt.needsUpdate,W=Gt.type;It(),ne.autoReset=C,Gt.enabled=k,Gt.autoUpdate=et,Gt.needsUpdate=Z,Gt.type=W}function Ot(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function re(C){const k=C.target;k.removeEventListener("dispose",re),Ie(k)}function Ie(C){Be(C),gt.remove(C)}function Be(C){const k=gt.get(C).programs;k!==void 0&&(k.forEach(function(et){wt.releaseProgram(et)}),C.isShaderMaterial&&wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,et,Z,W,st){k===null&&(k=mt);const Ct=W.isMesh&&W.matrixWorld.determinant()<0,zt=bt(C,k,et,Z,W);xt.setMaterial(Z,Ct);let kt=et.index,te=1;if(Z.wireframe===!0){if(kt=ht.getWireframeAttribute(et),kt===void 0)return;te=2}const jt=et.drawRange,Ft=et.attributes.position;let ue=jt.start*te,ee=(jt.start+jt.count)*te;st!==null&&(ue=Math.max(ue,st.start*te),ee=Math.min(ee,(st.start+st.count)*te)),kt!==null?(ue=Math.max(ue,0),ee=Math.min(ee,kt.count)):Ft!=null&&(ue=Math.max(ue,0),ee=Math.min(ee,Ft.count));const Re=ee-ue;if(Re<0||Re===1/0)return;ve.setup(W,Z,zt,et,kt);let _e,se=Wt;if(kt!==null&&(_e=ct.get(kt),se=he,se.setIndex(_e)),W.isMesh)Z.wireframe===!0?(xt.setLineWidth(Z.wireframeLinewidth*Et()),se.setMode(U.LINES)):se.setMode(U.TRIANGLES);else if(W.isLine){let Yt=Z.linewidth;Yt===void 0&&(Yt=1),xt.setLineWidth(Yt*Et()),W.isLineSegments?se.setMode(U.LINES):W.isLineLoop?se.setMode(U.LINE_LOOP):se.setMode(U.LINE_STRIP)}else W.isPoints?se.setMode(U.POINTS):W.isSprite&&se.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)se.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Yt=W._multiDrawStarts,Ce=W._multiDrawCounts,pe=W._multiDrawCount,Jt=kt?ct.get(kt).bytesPerElement:1,Xe=gt.get(Z).currentProgram.getUniforms();for(let we=0;we<pe;we++)Xe.setValue(U,"_gl_DrawID",we),se.render(Yt[we]/Jt,Ce[we])}else if(W.isInstancedMesh)se.renderInstances(ue,Re,W.count);else if(et.isInstancedBufferGeometry){const Yt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ce=Math.min(et.instanceCount,Yt);se.renderInstances(ue,Re,Ce)}else se.render(ue,Re)};function oe(C,k,et){C.transparent===!0&&C.side===ei&&C.forceSinglePass===!1?(C.side=Mn,C.needsUpdate=!0,Lt(C,k,et),C.side=Ti,C.needsUpdate=!0,Lt(C,k,et),C.side=ei):Lt(C,k,et)}this.compile=function(C,k,et=null){et===null&&(et=C),p=ce.get(et),p.init(k),y.push(p),et.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),C!==et&&C.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const Z=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const st=W.material;if(st)if(Array.isArray(st))for(let Ct=0;Ct<st.length;Ct++){const zt=st[Ct];oe(zt,et,W),Z.add(zt)}else oe(st,et,W),Z.add(st)}),y.pop(),p=null,Z},this.compileAsync=function(C,k,et=null){const Z=this.compile(C,k,et);return new Promise(W=>{function st(){if(Z.forEach(function(Ct){gt.get(Ct).currentProgram.isReady()&&Z.delete(Ct)}),Z.size===0){W(C);return}setTimeout(st,10)}ut.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ot=null;function dt(C){ot&&ot(C)}function vt(){Qt.stop()}function _t(){Qt.start()}const Qt=new hf;Qt.setAnimationLoop(dt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(C){ot=C,lt.setAnimationLoop(C),C===null?Qt.stop():Qt.start()},lt.addEventListener("sessionstart",vt),lt.addEventListener("sessionend",_t),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,k,b),p=ce.get(C,y.length),p.init(k),y.push(p),nt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),P.setFromProjectionMatrix(nt),G=this.localClippingEnabled,I=Mt.init(this.clippingPlanes,G),g=Ut.get(C,x.length),g.init(),x.push(g),lt.enabled===!0&&lt.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&Bt(st,k,-1/0,_.sortObjects)}Bt(C,k,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(tt,J),St=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,St&&$t.addToRenderList(g,C),this.info.render.frame++,I===!0&&Mt.beginShadows();const et=p.state.shadowsArray;Gt.render(et,C,k),I===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,W=g.transmissive;if(p.setupLights(),k.isArrayCamera){const st=k.cameras;if(W.length>0)for(let Ct=0,zt=st.length;Ct<zt;Ct++){const kt=st[Ct];Nt(Z,W,C,kt)}St&&$t.render(C);for(let Ct=0,zt=st.length;Ct<zt;Ct++){const kt=st[Ct];Tt(g,C,kt,kt.viewport)}}else W.length>0&&Nt(Z,W,C,k),St&&$t.render(C),Tt(g,C,k);b!==null&&(D.updateMultisampleRenderTarget(b),D.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(_,C,k),ve.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],I===!0&&Mt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Bt(C,k,et,Z){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)et=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||P.intersectsSprite(C)){Z&&rt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(nt);const Ct=at.update(C),zt=C.material;zt.visible&&g.push(C,Ct,zt,et,rt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||P.intersectsObject(C))){const Ct=at.update(C),zt=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),rt.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),rt.copy(Ct.boundingSphere.center)),rt.applyMatrix4(C.matrixWorld).applyMatrix4(nt)),Array.isArray(zt)){const kt=Ct.groups;for(let te=0,jt=kt.length;te<jt;te++){const Ft=kt[te],ue=zt[Ft.materialIndex];ue&&ue.visible&&g.push(C,Ct,ue,et,rt.z,Ft)}}else zt.visible&&g.push(C,Ct,zt,et,rt.z,null)}}const st=C.children;for(let Ct=0,zt=st.length;Ct<zt;Ct++)Bt(st[Ct],k,et,Z)}function Tt(C,k,et,Z){const W=C.opaque,st=C.transmissive,Ct=C.transparent;p.setupLightsView(et),I===!0&&Mt.setGlobalState(_.clippingPlanes,et),Z&&xt.viewport(w.copy(Z)),W.length>0&&it(W,k,et),st.length>0&&it(st,k,et),Ct.length>0&&it(Ct,k,et),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Nt(C,k,et,Z){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new wr(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?mo:Ri,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const st=p.state.transmissionRenderTarget[Z.id],Ct=Z.viewport||w;st.setSize(Ct.z,Ct.w);const zt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(V),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),St&&$t.render(et);const kt=_.toneMapping;_.toneMapping=$i;const te=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),I===!0&&Mt.setGlobalState(_.clippingPlanes,Z),it(C,et,Z),D.updateMultisampleRenderTarget(st),D.updateRenderTargetMipmap(st),ut.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ft=0,ue=k.length;Ft<ue;Ft++){const ee=k[Ft],Re=ee.object,_e=ee.geometry,se=ee.material,Yt=ee.group;if(se.side===ei&&Re.layers.test(Z.layers)){const Ce=se.side;se.side=Mn,se.needsUpdate=!0,Rt(Re,et,Z,_e,se,Yt),se.side=Ce,se.needsUpdate=!0,jt=!0}}jt===!0&&(D.updateMultisampleRenderTarget(st),D.updateRenderTargetMipmap(st))}_.setRenderTarget(zt),_.setClearColor(V,H),te!==void 0&&(Z.viewport=te),_.toneMapping=kt}function it(C,k,et){const Z=k.isScene===!0?k.overrideMaterial:null;for(let W=0,st=C.length;W<st;W++){const Ct=C[W],zt=Ct.object,kt=Ct.geometry,te=Z===null?Ct.material:Z,jt=Ct.group;zt.layers.test(et.layers)&&Rt(zt,k,et,kt,te,jt)}}function Rt(C,k,et,Z,W,st){C.onBeforeRender(_,k,et,Z,W,st),C.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(_,k,et,Z,C,st),W.transparent===!0&&W.side===ei&&W.forceSinglePass===!1?(W.side=Mn,W.needsUpdate=!0,_.renderBufferDirect(et,k,Z,W,C,st),W.side=Ti,W.needsUpdate=!0,_.renderBufferDirect(et,k,Z,W,C,st),W.side=ei):_.renderBufferDirect(et,k,Z,W,C,st),C.onAfterRender(_,k,et,Z,W,st)}function Lt(C,k,et){k.isScene!==!0&&(k=mt);const Z=gt.get(C),W=p.state.lights,st=p.state.shadowsArray,Ct=W.state.version,zt=wt.getParameters(C,W.state,st,k,et),kt=wt.getProgramCacheKey(zt);let te=Z.programs;Z.environment=C.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(C.isMeshStandardMaterial?j:T).get(C.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,te===void 0&&(C.addEventListener("dispose",re),te=new Map,Z.programs=te);let jt=te.get(kt);if(jt!==void 0){if(Z.currentProgram===jt&&Z.lightsStateVersion===Ct)return Pt(C,zt),jt}else zt.uniforms=wt.getUniforms(C),C.onBeforeCompile(zt,_),jt=wt.acquireProgram(zt,kt),te.set(kt,jt),Z.uniforms=zt.uniforms;const Ft=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=Mt.uniform),Pt(C,zt),Z.needsLights=Zt(C),Z.lightsStateVersion=Ct,Z.needsLights&&(Ft.ambientLightColor.value=W.state.ambient,Ft.lightProbe.value=W.state.probe,Ft.directionalLights.value=W.state.directional,Ft.directionalLightShadows.value=W.state.directionalShadow,Ft.spotLights.value=W.state.spot,Ft.spotLightShadows.value=W.state.spotShadow,Ft.rectAreaLights.value=W.state.rectArea,Ft.ltc_1.value=W.state.rectAreaLTC1,Ft.ltc_2.value=W.state.rectAreaLTC2,Ft.pointLights.value=W.state.point,Ft.pointLightShadows.value=W.state.pointShadow,Ft.hemisphereLights.value=W.state.hemi,Ft.directionalShadowMap.value=W.state.directionalShadowMap,Ft.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ft.spotShadowMap.value=W.state.spotShadowMap,Ft.spotLightMatrix.value=W.state.spotLightMatrix,Ft.spotLightMap.value=W.state.spotLightMap,Ft.pointShadowMap.value=W.state.pointShadowMap,Ft.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=jt,Z.uniformsList=null,jt}function qt(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=ra.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Pt(C,k){const et=gt.get(C);et.outputColorSpace=k.outputColorSpace,et.batching=k.batching,et.batchingColor=k.batchingColor,et.instancing=k.instancing,et.instancingColor=k.instancingColor,et.instancingMorph=k.instancingMorph,et.skinning=k.skinning,et.morphTargets=k.morphTargets,et.morphNormals=k.morphNormals,et.morphColors=k.morphColors,et.morphTargetsCount=k.morphTargetsCount,et.numClippingPlanes=k.numClippingPlanes,et.numIntersection=k.numClipIntersection,et.vertexAlphas=k.vertexAlphas,et.vertexTangents=k.vertexTangents,et.toneMapping=k.toneMapping}function bt(C,k,et,Z,W){k.isScene!==!0&&(k=mt),D.resetTextureUnits();const st=k.fog,Ct=Z.isMeshStandardMaterial?k.environment:null,zt=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pn,kt=(Z.isMeshStandardMaterial?j:T).get(Z.envMap||Ct),te=Z.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,jt=!!et.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ft=!!et.morphAttributes.position,ue=!!et.morphAttributes.normal,ee=!!et.morphAttributes.color;let Re=$i;Z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Re=_.toneMapping);const _e=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,se=_e!==void 0?_e.length:0,Yt=gt.get(Z),Ce=p.state.lights;if(I===!0&&(G===!0||C!==M)){const me=C===M&&Z.id===S;Mt.setState(Z,C,me)}let pe=!1;Z.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ce.state.version||Yt.outputColorSpace!==zt||W.isBatchedMesh&&Yt.batching===!1||!W.isBatchedMesh&&Yt.batching===!0||W.isBatchedMesh&&Yt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Yt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Yt.instancing===!1||!W.isInstancedMesh&&Yt.instancing===!0||W.isSkinnedMesh&&Yt.skinning===!1||!W.isSkinnedMesh&&Yt.skinning===!0||W.isInstancedMesh&&Yt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Yt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Yt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Yt.instancingMorph===!1&&W.morphTexture!==null||Yt.envMap!==kt||Z.fog===!0&&Yt.fog!==st||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Mt.numPlanes||Yt.numIntersection!==Mt.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==jt||Yt.morphTargets!==Ft||Yt.morphNormals!==ue||Yt.morphColors!==ee||Yt.toneMapping!==Re||Yt.morphTargetsCount!==se)&&(pe=!0):(pe=!0,Yt.__version=Z.version);let Jt=Yt.currentProgram;pe===!0&&(Jt=Lt(Z,k,W));let Xe=!1,we=!1,Rn=!1;const Ae=Jt.getUniforms(),gn=Yt.uniforms;if(xt.useProgram(Jt.program)&&(Xe=!0,we=!0,Rn=!0),Z.id!==S&&(S=Z.id,we=!0),Xe||M!==C){xt.buffers.depth.getReversed()?(Q.copy(C.projectionMatrix),km(Q),Hm(Q),Ae.setValue(U,"projectionMatrix",Q)):Ae.setValue(U,"projectionMatrix",C.projectionMatrix),Ae.setValue(U,"viewMatrix",C.matrixWorldInverse);const _n=Ae.map.cameraPosition;_n!==void 0&&_n.setValue(U,X.setFromMatrixPosition(C.matrixWorld)),Xt.logarithmicDepthBuffer&&Ae.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ae.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,we=!0,Rn=!0)}if(W.isSkinnedMesh){Ae.setOptional(U,W,"bindMatrix"),Ae.setOptional(U,W,"bindMatrixInverse");const me=W.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),Ae.setValue(U,"boneTexture",me.boneTexture,D))}W.isBatchedMesh&&(Ae.setOptional(U,W,"batchingTexture"),Ae.setValue(U,"batchingTexture",W._matricesTexture,D),Ae.setOptional(U,W,"batchingIdTexture"),Ae.setValue(U,"batchingIdTexture",W._indirectTexture,D),Ae.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Ae.setValue(U,"batchingColorTexture",W._colorsTexture,D));const vn=et.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Kt.update(W,et,Jt),(we||Yt.receiveShadow!==W.receiveShadow)&&(Yt.receiveShadow=W.receiveShadow,Ae.setValue(U,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(gn.envMap.value=kt,gn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(gn.envMapIntensity.value=k.environmentIntensity),we&&(Ae.setValue(U,"toneMappingExposure",_.toneMappingExposure),Yt.needsLights&&Dt(gn,Rn),st&&Z.fog===!0&&At.refreshFogUniforms(gn,st),At.refreshMaterialUniforms(gn,Z,L,B,p.state.transmissionRenderTarget[C.id]),ra.upload(U,qt(Yt),gn,D)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ra.upload(U,qt(Yt),gn,D),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ae.setValue(U,"center",W.center),Ae.setValue(U,"modelViewMatrix",W.modelViewMatrix),Ae.setValue(U,"normalMatrix",W.normalMatrix),Ae.setValue(U,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const me=Z.uniformsGroups;for(let _n=0,Ba=me.length;_n<Ba;_n++){const nr=me[_n];q.update(nr,Jt),q.bind(nr,Jt)}}return Jt}function Dt(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Zt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,k,et){gt.get(C.texture).__webglTexture=k,gt.get(C.depthTexture).__webglTexture=et;const Z=gt.get(C);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=et===void 0,Z.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const et=gt.get(C);et.__webglFramebuffer=k,et.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,et=0){b=C,A=k,R=et;let Z=!0,W=null,st=!1,Ct=!1;if(C){const kt=gt.get(C);if(kt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1;else if(kt.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(kt.__hasExternalTextures)D.rebindTextures(C,gt.get(C.texture).__webglTexture,gt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ft=C.depthTexture;if(kt.__boundDepthTexture!==Ft){if(Ft!==null&&gt.has(Ft)&&(C.width!==Ft.image.width||C.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const te=C.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ct=!0);const jt=gt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[k])?W=jt[k][et]:W=jt[k],st=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?W=gt.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?W=jt[et]:W=jt,w.copy(C.viewport),F.copy(C.scissor),N=C.scissorTest}else w.copy(O).multiplyScalar(L).floor(),F.copy(K).multiplyScalar(L).floor(),N=z;if(xt.bindFramebuffer(U.FRAMEBUFFER,W)&&Z&&xt.drawBuffers(C,W),xt.viewport(w),xt.scissor(F),xt.setScissorTest(N),st){const kt=gt.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,kt.__webglTexture,et)}else if(Ct){const kt=gt.get(C.texture),te=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,et||0,te)}S=-1},this.readRenderTargetPixels=function(C,k,et,Z,W,st,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){xt.bindFramebuffer(U.FRAMEBUFFER,zt);try{const kt=C.texture,te=kt.format,jt=kt.type;if(!Xt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Z&&et>=0&&et<=C.height-W&&U.readPixels(k,et,Z,W,ie.convert(te),ie.convert(jt),st)}finally{const kt=b!==null?gt.get(b).__webglFramebuffer:null;xt.bindFramebuffer(U.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(C,k,et,Z,W,st,Ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){const kt=C.texture,te=kt.format,jt=kt.type;if(!Xt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-Z&&et>=0&&et<=C.height-W){xt.bindFramebuffer(U.FRAMEBUFFER,zt);const Ft=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ft),U.bufferData(U.PIXEL_PACK_BUFFER,st.byteLength,U.STREAM_READ),U.readPixels(k,et,Z,W,ie.convert(te),ie.convert(jt),0);const ue=b!==null?gt.get(b).__webglFramebuffer:null;xt.bindFramebuffer(U.FRAMEBUFFER,ue);const ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Vm(U,ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ft),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,st),U.deleteBuffer(Ft),U.deleteSync(ee),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,et=0){C.isTexture!==!0&&(Yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const Z=Math.pow(2,-et),W=Math.floor(C.image.width*Z),st=Math.floor(C.image.height*Z),Ct=k!==null?k.x:0,zt=k!==null?k.y:0;D.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,et,0,0,Ct,zt,W,st),xt.unbindTexture()};const le=U.createFramebuffer(),yt=U.createFramebuffer();this.copyTextureToTexture=function(C,k,et=null,Z=null,W=0,st=null){C.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,C=arguments[1],k=arguments[2],st=arguments[3]||0,et=null),st===null&&(W!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=W,W=0):st=0);let Ct,zt,kt,te,jt,Ft,ue,ee,Re;const _e=C.isCompressedTexture?C.mipmaps[st]:C.image;if(et!==null)Ct=et.max.x-et.min.x,zt=et.max.y-et.min.y,kt=et.isBox3?et.max.z-et.min.z:1,te=et.min.x,jt=et.min.y,Ft=et.isBox3?et.min.z:0;else{const vn=Math.pow(2,-W);Ct=Math.floor(_e.width*vn),zt=Math.floor(_e.height*vn),C.isDataArrayTexture?kt=_e.depth:C.isData3DTexture?kt=Math.floor(_e.depth*vn):kt=1,te=0,jt=0,Ft=0}Z!==null?(ue=Z.x,ee=Z.y,Re=Z.z):(ue=0,ee=0,Re=0);const se=ie.convert(k.format),Yt=ie.convert(k.type);let Ce;k.isData3DTexture?(D.setTexture3D(k,0),Ce=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),Ce=U.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),Ce=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const pe=U.getParameter(U.UNPACK_ROW_LENGTH),Jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xe=U.getParameter(U.UNPACK_SKIP_PIXELS),we=U.getParameter(U.UNPACK_SKIP_ROWS),Rn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,te),U.pixelStorei(U.UNPACK_SKIP_ROWS,jt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);const Ae=C.isDataArrayTexture||C.isData3DTexture,gn=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const vn=gt.get(C),me=gt.get(k),_n=gt.get(vn.__renderTarget),Ba=gt.get(me.__renderTarget);xt.bindFramebuffer(U.READ_FRAMEBUFFER,_n.__webglFramebuffer),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ba.__webglFramebuffer);for(let nr=0;nr<kt;nr++)Ae&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gt.get(C).__webglTexture,W,Ft+nr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gt.get(k).__webglTexture,st,Re+nr)),U.blitFramebuffer(te,jt,Ct,zt,ue,ee,Ct,zt,U.DEPTH_BUFFER_BIT,U.NEAREST);xt.bindFramebuffer(U.READ_FRAMEBUFFER,null),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||C.isRenderTargetTexture||gt.has(C)){const vn=gt.get(C),me=gt.get(k);xt.bindFramebuffer(U.READ_FRAMEBUFFER,le),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,yt);for(let _n=0;_n<kt;_n++)Ae?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vn.__webglTexture,W,Ft+_n):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vn.__webglTexture,W),gn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.__webglTexture,st,Re+_n):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,st),W!==0?U.blitFramebuffer(te,jt,Ct,zt,ue,ee,Ct,zt,U.COLOR_BUFFER_BIT,U.NEAREST):gn?U.copyTexSubImage3D(Ce,st,ue,ee,Re+_n,te,jt,Ct,zt):U.copyTexSubImage2D(Ce,st,ue,ee,te,jt,Ct,zt);xt.bindFramebuffer(U.READ_FRAMEBUFFER,null),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else gn?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Ce,st,ue,ee,Re,Ct,zt,kt,se,Yt,_e.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,st,ue,ee,Re,Ct,zt,kt,se,_e.data):U.texSubImage3D(Ce,st,ue,ee,Re,Ct,zt,kt,se,Yt,_e):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,st,ue,ee,Ct,zt,se,Yt,_e.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,st,ue,ee,_e.width,_e.height,se,_e.data):U.texSubImage2D(U.TEXTURE_2D,st,ue,ee,Ct,zt,se,Yt,_e);U.pixelStorei(U.UNPACK_ROW_LENGTH,pe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xe),U.pixelStorei(U.UNPACK_SKIP_ROWS,we),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Rn),st===0&&k.generateMipmaps&&U.generateMipmap(Ce),xt.unbindTexture()},this.copyTextureToTexture3D=function(C,k,et=null,Z=null,W=0){return C.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,Z=arguments[1]||null,C=arguments[2],k=arguments[3],W=arguments[4]||0),Yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,et,Z,W)},this.initRenderTarget=function(C){gt.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),xt.unbindTexture()},this.resetState=function(){A=0,R=0,b=null,xt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}}function od(o,t){if(t===um)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===_c||t===Gd){let e=o.getIndex();if(e===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=e.count-2,i=[];if(t===_c)for(let s=1;s<=n;s++)i.push(e.getX(0)),i.push(e.getX(s)),i.push(e.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(e.getX(s)),i.push(e.getX(s+1)),i.push(e.getX(s+2))):(i.push(e.getX(s+2)),i.push(e.getX(s+1)),i.push(e.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class ky extends Rr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new qy(e)}),this.register(function(e){return new Yy(e)}),this.register(function(e){return new nM(e)}),this.register(function(e){return new iM(e)}),this.register(function(e){return new rM(e)}),this.register(function(e){return new jy(e)}),this.register(function(e){return new Ky(e)}),this.register(function(e){return new Zy(e)}),this.register(function(e){return new Jy(e)}),this.register(function(e){return new Xy(e)}),this.register(function(e){return new Qy(e)}),this.register(function(e){return new $y(e)}),this.register(function(e){return new eM(e)}),this.register(function(e){return new tM(e)}),this.register(function(e){return new Gy(e)}),this.register(function(e){return new sM(e)}),this.register(function(e){return new oM(e)})}load(t,e,n,i){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const c=qs.extractUrlBase(t);s=qs.resolveURL(c,this.path)}else s=qs.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new af(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,s,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const s={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===mf){try{s[ye.KHR_BINARY_GLTF]=new aM(t)}catch(u){i&&i(u);return}r=JSON.parse(s[ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yM(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,s[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ye.KHR_MATERIALS_UNLIT:s[u]=new Wy;break;case ye.KHR_DRACO_MESH_COMPRESSION:s[u]=new lM(r,this.dracoLoader);break;case ye.KHR_TEXTURE_TRANSFORM:s[u]=new cM;break;case ye.KHR_MESH_QUANTIZATION:s[u]=new hM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function Hy(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Gy{constructor(t){this.parser=t,this.name=ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],pn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new mh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zg(h),c.distance=u;break;case"spot":c=new Bg(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class Wy{constructor(){this.name=ye.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(t,e,n){const i=[];t.color=new ae(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],pn),t.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Je))}return Promise.all(i)}}class Xy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class qy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(e.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}}class Yy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class $y{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(e.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(e.iridescenceIOR=s.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class jy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ae(0,0,0),e.sheenRoughness=0,e.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],pn)}return s.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",s.sheenColorTexture,Je)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Ky{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(e.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Zy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];e.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",s.thicknessTexture)),e.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return e.attenuationColor=new ae().setRGB(a[0],a[1],a[2],pn),Promise.all(r)}}class Jy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Qy{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];e.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return e.specularColor=new ae().setRGB(a[0],a[1],a[2],pn),s.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",s.specularColorTexture,Je)),Promise.all(r)}}class tM{constructor(t){this.parser=t,this.name=ye.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return e.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",s.bumpTexture)),Promise.all(r)}}class eM{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(e.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(e.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class nM{constructor(t){this.parser=t,this.name=ye.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=e.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,s)}}class iM{constructor(t){this.parser=t,this.name=ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const s=r.extensions[e],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class rM{constructor(t){this.parser=t,this.name=ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const s=r.extensions[e],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class sM{constructor(t){this.name=ye.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class oM{constructor(t){this.name=ye.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==zn.TRIANGLES&&c.mode!==zn.TRIANGLE_STRIP&&c.mode!==zn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,a=[],l={};for(const c in s)a.push(this.parser.getDependency("accessor",s[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const v=new de,g=new $,p=new Zn,x=new $(1,1,1),y=new vg(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&x.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,v.compose(g,p,x));for(const _ in l)if(_==="_COLOR_0"){const E=l[_];y.instanceColor=new yc(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);Ve.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const mf="glTF",Bs=12,ad={JSON:1313821514,BIN:5130562};class aM{constructor(t){this.name=ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Bs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==mf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Bs,r=new DataView(t,Bs);let s=0;for(;s<i;){const a=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===ad.JSON){const c=new Uint8Array(t,Bs+s,a);this.content=n.decode(c)}else if(l===ad.BIN){const c=Bs+s;this.body=t.slice(c,c+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ye.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,a={},l={},c={};for(const h in s){const u=Ac[h]||h.toLowerCase();a[u]=s[h]}for(const h in t.attributes){const u=Ac[h]||h.toLowerCase();if(s[h]!==void 0){const d=n.accessors[t.attributes[h]],f=is[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],g=l[m];g!==void 0&&(v.normalized=g)}u(f)},a,c,pn,d)})})}}class cM{constructor(){this.name=ye.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class hM{constructor(){this.name=ye.KHR_MESH_QUANTIZATION}}class gf extends xo{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let s=0;s!==i;s++)e[s]=n[r+s];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*c,v=m-c,g=-2*f+3*d,p=f-d,x=1-g,y=p-d+u;for(let _=0;_!==a;_++){const E=s[v+_+a],A=s[v+_+l]*h,R=s[m+_+a],b=s[m+_]*h;r[_]=x*E+y*A+g*R+p*b}return r}}const uM=new Zn;class dM extends gf{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return uM.fromArray(r).normalize().toArray(r),r}}const zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ld={9728:an,9729:Dn,9984:Dd,9985:Jo,9986:Vs,9987:wi},cd={33071:ki,33648:ua,10497:us},vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ac={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fM={CUBICSPLINE:void 0,LINEAR:Js,STEP:Zs},_l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pM(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new _o({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),o.DefaultMaterial}function cr(o,t,e){for(const n in e.extensions)o[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Mi(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function mM(o,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):o.attributes.position;s.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),r&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function gM(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)o.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vM(o){let t;const e=o.extensions&&o.extensions[ye.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+xl(e.attributes):t=o.indices+":"+xl(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)t+=":"+xl(o.targets[n]);return t}function xl(o){let t="";const e=Object.keys(o).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+o[e[n]]+";";return t}function bc(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _M(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xM=new de;class yM{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Hy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,s=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,s=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&s<98?this.textureLoader=new cf(this.options.manager):this.textureLoader=new kg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new af(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return cr(r,a,i),Mi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const s=e[i].joints;for(let a=0,l=s.length;a<l;a++)t[s[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const s=t[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,h]of s.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,s){return n.getDependency(t,s)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(qs.resolveURL(e.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const s=vl[i.type],a=is[i.componentType],l=i.normalized===!0,c=new a(i.count*s);return Promise.resolve(new $e(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=vl[i.type],c=is[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(x);y||(v=new c(a,p*f,i.count*f/h),y=new dg(v,f/h),e.cache.add(x,y)),g=new rh(y,l,d%f/h,m)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),g=new $e(v,l,m);if(i.sparse!==void 0){const p=vl.SCALAR,x=is[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,E=new x(s[1],y,i.sparse.count*p),A=new c(s[2],_,i.sparse.count*l);a!==null&&(g=new $e(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,b=E.length;R<b;R++){const S=E[R];if(g.setX(S,A[R*l]),l>=2&&g.setY(S,A[R*l+1]),l>=3&&g.setZ(S,A[R*l+2]),l>=4&&g.setW(S,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,s=e.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,s=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=s.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[s.sampler]||{};return h.magFilter=ld[d.magFilter]||Dn,h.minFilter=ld[d.minFilter]||wi,h.wrapS=cd[d.wrapS]||us,h.wrapT=cd[d.wrapT]||us,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==an&&h.minFilter!==Dn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const s=i.images[t],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:s.mimeType});return l=a.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(v){const g=new tn(v);g.needsUpdate=!0,d(g)}),e.load(qs.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Mi(u,s),u.userData.mimeType=s.mimeType||_M(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[ye.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(s.colorSpace=i),t[e]=s,s})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,s=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new vo,Jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ef,Jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return _o}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let s;const a={},l=r.extensions||{},c=[];if(l[ye.KHR_MATERIALS_UNLIT]){const u=i[ye.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ae(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],pn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Je)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=ei);const h=r.alphaMode||_l.OPAQUE;if(h===_l.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_l.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==ii&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&s!==ii&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==ii){const u=r.emissiveFactor;a.emissive=new ae().setRGB(u[0],u[1],u[2],pn)}return r.emissiveTexture!==void 0&&s!==ii&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Je)),Promise.all(c).then(function(){const u=new s(a);return r.name&&(u.name=r.name),Mi(u,r),e.associations.set(u,{materials:t}),r.extensions&&cr(i,u,r),u})}createUniqueName(t){const e=Pe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return hd(l,a,e)})}const s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=vM(c),u=i[h];if(u)s.push(u.promise);else{let d;c.extensions&&c.extensions[ye.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=hd(new nn,c,e),i[h]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],s=r.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const h=s[l].material===void 0?pM(this.cache):this.getDependency("material",s[l].material);a.push(h)}return a.push(e.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],g=s[f];let p;const x=c[f];if(g.mode===zn.TRIANGLES||g.mode===zn.TRIANGLE_STRIP||g.mode===zn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new pg(v,x):new Ge(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===zn.TRIANGLE_STRIP?p.geometry=od(p.geometry,Gd):g.mode===zn.TRIANGLE_FAN&&(p.geometry=od(p.geometry,_c));else if(g.mode===zn.LINES)p=new yg(v,x);else if(g.mode===zn.LINE_STRIP)p=new ah(v,x);else if(g.mode===zn.LINE_LOOP)p=new Mg(v,x);else if(g.mode===zn.POINTS)p=new Ta(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&gM(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Mi(p,r),g.extensions&&cr(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&cr(i,u[0],r),u[0];const d=new Hi;r.extensions&&cr(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new dn(Om.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ph(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Mi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,a=[],l=[];for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u){a.push(u);const d=new de;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new sh(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,s=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],v=f.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(s.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),h.push(v))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let x=0,y=d.length;x<y;x++){const _=d[x],E=f[x],A=m[x],R=v[x],b=g[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const S=n._createAnimationTracks(_,E,A,R,b);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new Sc(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),s=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)s.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,xM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],s=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Qd:c.length>1?h=new Hi:c.length===1?h=c[0]:h=new Ve,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=s),Mi(h,r),r.extensions&&cr(n,h,r),r.matrix!==void 0){const u=new de;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Hi;n.name&&(r.name=i.createUniqueName(n.name)),Mi(r,n),n.extensions&&cr(e,r,n);const s=n.nodes||[],a=[];for(let l=0,c=s.length;l<c;l++)a.push(i.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Jn||d instanceof tn)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const s=[],a=t.name?t.name:t.uuid,l=[];zi[r.path]===zi.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(zi[r.path]){case zi.weights:c=gs;break;case zi.rotation:c=vs;break;case zi.position:case zi.scale:c=_s;break;default:switch(n.itemSize){case 1:c=gs;break;case 2:case 3:default:c=_s;break}break}const h=i.interpolation!==void 0?fM[i.interpolation]:Js,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+zi[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),s.push(m)}return s}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=bc(e.constructor),i=new Float32Array(e.length);for(let r=0,s=e.length;r<s;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof vs?dM:gf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MM(o,t,e){const n=t.attributes,i=new Ii;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new $(l[0],l[1],l[2]),new $(c[0],c[1],c[2])),a.normalized){const h=bc(is[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new $,l=new $;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=bc(is[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new hi;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function hd(o,t,e){const n=t.attributes,i=[];function r(s,a){return e.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=Ac[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(t.indices!==void 0&&!o.index){const s=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});i.push(s)}return Ee.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ee.workingColorSpace}" not supported.`),Mi(o,t),MM(o,t,e),Promise.all(i).then(function(){return t.targets!==void 0?mM(o,t.targets,e):o})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class si{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),si.nextNameID=si.nextNameID||0,this.$name.id=`lil-gui-name-${++si.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class SM extends si{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Tc(o){let t,e;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const EM={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Tc,toHexString:Tc},to={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},wM={isPrimitive:!1,match:Array.isArray,fromHexString(o,t,e=1){const n=to.fromHexString(o);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([o,t,e],n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return to.toHexString(i)}},AM={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,e=1){const n=to.fromHexString(o);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:o,g:t,b:e},n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return to.toHexString(i)}},bM=[EM,to,wM,AM];function TM(o){return bM.find(t=>t.match(o))}class RM extends si{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=TM(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Tc(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class yl extends si{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class CM extends si{constructor(t,e,n,i,r,s){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let p=parseFloat(this.$input.value);isNaN(p)||(this._stepExplicit&&(p=this._snap(p)),this.setValue(this._clamp(p)))},e=p=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+p),this.$input.value=this.getValue())},n=p=>{p.code==="Enter"&&this.$input.blur(),p.code==="ArrowUp"&&(p.preventDefault(),e(this._step*this._arrowKeyMultiplier(p))),p.code==="ArrowDown"&&(p.preventDefault(),e(this._step*this._arrowKeyMultiplier(p)*-1))},i=p=>{this._inputFocused&&(p.preventDefault(),e(this._step*this._normalizeMouseWheel(p)))};let r=!1,s,a,l,c,h;const u=5,d=p=>{s=p.clientX,a=l=p.clientY,r=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",m)},f=p=>{if(r){const x=p.clientX-s,y=p.clientY-a;Math.abs(y)>u?(p.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>u&&m()}if(!r){const x=p.clientY-l;h-=x*this._step*this._arrowKeyMultiplier(p),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)}l=p.clientY},m=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m)},v=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",v),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,x,y,_,E)=>(p-x)/(y-x)*(E-_)+_,e=p=>{const x=this.$slider.getBoundingClientRect();let y=t(p,x.left,x.right,this._min,this._max);this._snapClampSetValue(y)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{e(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let s=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),s=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,s=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(s){const x=p.touches[0].clientX-a,y=p.touches[0].clientY-l;Math.abs(x)>Math.abs(y)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),e(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),m=400;let v;const g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const y=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(f,m)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class PM extends si{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class IM extends si{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const LM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function DM(o){const t=document.createElement("style");t.innerHTML=o;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let ud=!1;class xh{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",injectStyles:s=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!ud&&s&&(DM(LM),ud=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,i,r){if(Object(n)===n)return new PM(this,t,e,n);const s=t[e];switch(typeof s){case"number":return new CM(this,t,e,n,i,r);case"boolean":return new SM(this,t,e);case"string":return new IM(this,t,e);case"function":return new yl(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,s)}addColor(t,e,n=1){return new RM(this,t,e,n)}addFolder(t){return new xh({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof yl||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof yl)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function Si(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function vf(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xs={duration:.5,overwrite:!1,delay:0},yh,ln,Ue,kn=1e8,Fe=1/kn,Rc=Math.PI*2,NM=Rc/4,FM=0,_f=Math.sqrt,UM=Math.cos,BM=Math.sin,en=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},Ci=function(t){return typeof t=="number"},Mh=function(t){return typeof t>"u"},li=function(t){return typeof t=="object"},Sn=function(t){return t!==!1},Sh=function(){return typeof window<"u"},$o=function(t){return ke(t)||en(t)},xf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,Cc=/(?:-?\.?\d|\.)+/gi,yf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ml=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mf=/[+-]=-?[.\d]+/,Sf=/[^,'"\[\]\s]+/gi,OM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oe,Qn,Pc,Eh,Un={},va={},Ef,wf=function(t){return(va=Ar(t,Un))&&bn},wh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},eo=function(t,e){return!e&&console.warn(t)},Af=function(t,e){return t&&(Un[t]=e)&&va&&(va[t]=e)||Un},no=function(){return 0},zM={suppressEvents:!0,isStart:!0,kill:!1},sa={suppressEvents:!0,kill:!1},VM={suppressEvents:!0},Ah={},ji=[],Ic={},bf,In={},Sl={},dd=30,oa=[],bh="",Th=function(t){var e=t[0],n,i;if(li(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=oa.length;i--&&!oa[i].targetTest(e););n=oa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Kf(t[i],n)))||t.splice(i,1);return t},xr=function(t){return t._gsap||Th(Hn(t))[0]._gsap},Tf=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():Mh(n)&&t.getAttribute&&t.getAttribute(e)||n},En=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Qe=function(t){return Math.round(t*1e7)/1e7||0},rs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},kM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},_a=function(){var t=ji.length,e=ji.slice(0),n,i;for(Ic={},ji.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Rf=function(t,e,n,i){ji.length&&!ln&&_a(),t.render(e,n,i||ln&&e<0&&(t._initted||t._startAt)),ji.length&&!ln&&_a()},Cf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Sf).length<2?e:en(t)?t.trim():t},Pf=function(t){return t},Gn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},HM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ar=function(t,e){for(var n in e)t[n]=e[n];return t},fd=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=li(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},xa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ys=function(t){var e=t.parent||Oe,n=t.keyframes?HM(cn(t.keyframes)):Gn;if(Sn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},GM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},If=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t[i],a;if(r)for(a=e[r];s&&s[r]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e},Ia=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,s=e._next;r?r._next=s:t[n]===e&&(t[n]=s),s?s._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Qi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},WM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Lc=function(t,e,n,i){return t._startAt&&(ln?t._startAt.revert(sa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},XM=function o(t){return!t||t._ts&&o(t.parent)},pd=function(t){return t._repeat?ys(t._tTime,t=t.duration()+t._rDelay)*t:0},ys=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ya=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},La=function(t){return t._end=Qe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Fe)||0))},Da=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Qe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),La(t),n._dirty||yr(n,t)),t},Lf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ya(t.rawTime(),e),(!e._dur||yo(0,e.totalDuration(),n)-e._tTime>Fe)&&e.render(n,!0)),yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Fe}},ni=function(t,e,n,i){return e.parent&&Qi(e),e._start=Qe((Ci(n)?n:n||t!==Oe?On(t,n,e):t._time)+e._delay),e._end=Qe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),If(t,e,"_first","_last",t._sort?"_start":0),Dc(e)||(t._recent=e),i||Lf(t,e),t._ts<0&&Da(t,t._tTime),t},Df=function(t,e){return(Un.ScrollTrigger||wh("scrollTrigger",e))&&Un.ScrollTrigger.create(e,t)},Nf=function(t,e,n,i,r){if(Ch(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ln&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&bf!==Ln.frame)return ji.push(t),t._lazy=[r,i],1},qM=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Dc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},YM=function(t,e,n,i){var r=t.ratio,s=e<0||!e&&(!t._start&&qM(t)&&!(!t._initted&&Dc(t))||(t._ts<0||t._dp._ts<0)&&!Dc(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=yo(0,t._tDur,e),h=ys(l,a),t._yoyo&&h&1&&(s=1-s),h!==ys(t._tTime,a)&&(r=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==r||ln||i||t._zTime===Fe||!e&&t._zTime){if(!t._initted&&Nf(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Fe:0),n||(n=e&&!u),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=l,c=t._pt;c;)c.r(s,c.d),c=c._next;e<0&&Lc(t,e,n,!0),t._onUpdate&&!n&&Nn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Nn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(s&&Qi(t,1),!n&&!ln&&(Nn(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},$M=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ms=function(t,e,n,i){var r=t._repeat,s=Qe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=s/t._dur),t._dur=s,t._tDur=r?r<0?1e10:Qe(s*(r+1)+t._rDelay*r):s,a>0&&!i&&Da(t,t._tTime=t._tDur*a),t.parent&&La(t),n||yr(t.parent,t),t},md=function(t){return t instanceof fn?yr(t):Ms(t,t._dur)},jM={_start:0,endTime:no,totalDuration:no},On=function o(t,e,n){var i=t.labels,r=t._recent||jM,s=t.duration()>=kn?r.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=s),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?o(t,e.substr(0,a-1),n)+l:s+l)):e==null?s:+e},$s=function(t,e,n){var i=Ci(e[1]),r=(i?2:1)+(t<2?0:1),s=e[r],a,l;if(i&&(s.duration=e[1]),s.parent=n,t){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;s.immediateRender=Sn(a.immediateRender),t<2?s.runBackwards=1:s.startAt=e[r-1]}return new Ye(e[0],s,e[r+1])},er=function(t,e){return t||t===0?e(t):e},yo=function(t,e,n){return n<t?t:n>e?e:n},on=function(t,e){return!en(t)||!(e=OM.exec(t))?"":e[1]},KM=function(t,e,n){return er(n,function(i){return yo(t,e,i)})},Nc=[].slice,Ff=function(t,e){return t&&li(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&li(t[0]))&&!t.nodeType&&t!==Qn},ZM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return en(i)&&!e||Ff(i,1)?(r=n).push.apply(r,Hn(i)):n.push(i)})||n},Hn=function(t,e,n){return Ue&&!e&&Ue.selector?Ue.selector(t):en(t)&&!n&&(Pc||!Ss())?Nc.call((e||Eh).querySelectorAll(t),0):cn(t)?ZM(t,n):Ff(t)?Nc.call(t,0):t?[t]:[]},Fc=function(t){return t=Hn(t)[0]||eo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Hn(e,n.querySelectorAll?n:n===t?eo("Invalid scope")||Eh.createElement("div"):t)}},Uf=function(t){return t.sort(function(){return .5-Math.random()})},Bf=function(t){if(ke(t))return t;var e=li(t)?t:{each:t},n=Mr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return en(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,m){var v=(m||e).length,g=s[v],p,x,y,_,E,A,R,b,S;if(!g){if(S=e.grid==="auto"?0:(e.grid||[1,kn])[1],!S){for(R=-kn;R<(R=m[S++].getBoundingClientRect().left)&&S<v;);S<v&&S--}for(g=s[v]=[],p=l?Math.min(S,v)*h-.5:i%S,x=S===kn?0:l?v*u/S-.5:i/S|0,R=0,b=kn,A=0;A<v;A++)y=A%S-p,_=x-(A/S|0),g[A]=E=c?Math.abs(c==="y"?_:y):_f(y*y+_*_),E>R&&(R=E),E<b&&(b=E);i==="random"&&Uf(g),g.max=R-b,g.min=b,g.v=v=(parseFloat(e.amount)||parseFloat(e.each)*(S>v?v-1:c?c==="y"?v/S:S:Math.max(S,v/S))||0)*(i==="edges"?-1:1),g.b=v<0?r-v:r,g.u=on(e.amount||e.each)||0,n=n&&v<0?Yf(n):n}return v=(g[d]-g.min)/g.max||0,Qe(g.b+(n?n(v):v)*g.v)+g.u}},Uc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Qe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ci(n)?0:on(n))}},Of=function(t,e){var n=cn(t),i,r;return!n&&li(t)&&(i=n=t.radius||kn,t.values?(t=Hn(t.values),(r=!Ci(t[0]))&&(i*=i)):t=Uc(t.increment)),er(e,n?ke(t)?function(s){return r=t(s),Math.abs(r-s)<=i?r:s}:function(s){for(var a=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=kn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:s,r||h===s||Ci(s)?h:h+on(s)}:Uc(t))},zf=function(t,e,n,i){return er(cn(t)?!e:n===!0?!!(n=0):!i,function(){return cn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},JM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,s){return s(r)},i)}},QM=function(t,e){return function(n){return t(parseFloat(n))+(e||on(n))}},tS=function(t,e,n){return kf(t,e,0,1,n)},Vf=function(t,e,n){return er(n,function(i){return t[~~e(i)]})},eS=function o(t,e,n){var i=e-t;return cn(t)?Vf(t,o(0,t.length),e):er(n,function(r){return(i+(r-t)%i)%i+t})},nS=function o(t,e,n){var i=e-t,r=i*2;return cn(t)?Vf(t,o(0,t.length-1),e):er(n,function(s){return s=(r+(s-t)%r)%r||0,t+(s>i?r-s:s)})},io=function(t){for(var e=0,n="",i,r,s,a;~(i=t.indexOf("random(",e));)s=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,s-i-7).match(a?Sf:Cc),n+=t.substr(e,i-e)+zf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=s+1;return n+t.substr(e,t.length-e)},kf=function(t,e,n,i,r){var s=e-t,a=i-n;return er(r,function(l){return n+((l-t)/s*a||0)})},iS=function o(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var s=en(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),s)t={p:t},e={p:e};else if(cn(t)&&!cn(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(o(t[c-1],t[c]));u--,r=function(m){m*=u;var v=Math.min(d,~~m);return h[v](m-v)},n=e}else i||(t=Ar(cn(t)?[]:{},t));if(!h){for(l in e)Rh.call(a,t,l,"get",e[l]);r=function(m){return Lh(m,a)||(s?t.p:t)}}}return er(n,r)},gd=function(t,e,n){var i=t.labels,r=kn,s,a,l;for(s in i)a=i[s]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=s,r=a);return l},Nn=function(t,e,n){var i=t.vars,r=i[e],s=Ue,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ji.length&&_a(),a&&(Ue=a),h=l?r.apply(c,l):r.call(c),Ue=s,h},Hs=function(t){return Qi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ln),t.progress()<1&&Nn(t,"onInterrupt"),t},Jr,Hf=[],Gf=function(t){if(t)if(t=!t.name&&t.default||t,Sh()||t.headless){var e=t.name,n=ke(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:no,render:Lh,add:Rh,kill:xS,modifier:_S,rawVars:0},s={targetTest:0,get:0,getSetter:Ih,aliases:{},register:0};if(Ss(),t!==i){if(In[e])return;Gn(i,Gn(xa(t,r),s)),Ar(i.prototype,Ar(r,xa(t,s))),In[i.prop=e]=i,t.targetTest&&(oa.push(i),Ah[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Af(e,i),t.register&&t.register(bn,i,wn)}else Hf.push(t)},Ne=255,Gs={aqua:[0,Ne,Ne],lime:[0,Ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ne],navy:[0,0,128],white:[Ne,Ne,Ne],olive:[128,128,0],yellow:[Ne,Ne,0],orange:[Ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ne,0,0],pink:[Ne,192,203],cyan:[0,Ne,Ne],transparent:[Ne,Ne,Ne,0]},El=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ne+.5|0},Wf=function(t,e,n){var i=t?Ci(t)?[t>>16,t>>8&Ne,t&Ne]:0:Gs.black,r,s,a,l,c,h,u,d,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Gs[t])i=Gs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),s=t.charAt(2),a=t.charAt(3),t="#"+r+r+s+s+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ne,i&Ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ne,t&Ne]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Cc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,s=h<=.5?h*(c+1):h+c-h*c,r=h*2-s,i.length>3&&(i[3]*=1),i[0]=El(l+1/3,r,s),i[1]=El(l,r,s),i[2]=El(l-1/3,r,s);else if(~t.indexOf("="))return i=t.match(yf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Cc)||Gs.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/Ne,s=i[1]/Ne,a=i[2]/Ne,u=Math.max(r,s,a),d=Math.min(r,s,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(s-a)/f+(s<a?6:0):u===s?(a-r)/f+2:(r-s)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Xf=function(t){var e=[],n=[],i=-1;return t.split(Ki).forEach(function(r){var s=r.match(Zr)||[];e.push.apply(e,s),n.push(i+=s.length+1)}),e.c=n,e},vd=function(t,e,n){var i="",r=(t+i).match(Ki),s=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Wf(d,e,1))&&s+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Xf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ki,"1").split(Zr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||s+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Ki),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Ki=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Gs)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),rS=/hsl[a]?\(/,qf=function(t){var e=t.join(" "),n;if(Ki.lastIndex=0,Ki.test(e))return n=rS.test(e),t[1]=vd(t[1],n),t[0]=vd(t[0],n,Xf(t[1])),!0},ro,Ln=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,s=r,a=[],l,c,h,u,d,f,m=function v(g){var p=o()-i,x=g===!0,y,_,E,A;if((p>t||p<0)&&(n+=p-e),i+=p,E=i-n,y=E-s,(y>0||x)&&(A=++u.frame,d=E-u.time*1e3,u.time=E=E/1e3,s+=y+(y>=r?4:r-y),_=1),x||(l=c(v)),_)for(f=0;f<a.length;f++)a[f](E,d,A,g)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){Ef&&(!Pc&&Sh()&&(Qn=Pc=window,Eh=Qn.document||{},Un.gsap=bn,(Qn.gsapVersions||(Qn.gsapVersions=[])).push(bn.version),wf(va||Qn.GreenSockGlobals||!Qn.gsap&&Qn||{}),Hf.forEach(Gf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(g){return setTimeout(g,s-u.time*1e3+1|0)},ro=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ro=0,c=no},lagSmoothing:function(g,p){t=g||1/0,e=Math.min(p||33,t)},fps:function(g){r=1e3/(g||240),s=u.time*1e3+r},add:function(g,p,x){var y=p?function(_,E,A,R){g(_,E,A,R),u.remove(y)}:g;return u.remove(g),a[x?"unshift":"push"](y),Ss(),y},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),Ss=function(){return!ro&&Ln.wake()},Se={},sS=/^[\d.\-M][\d.\-,\s]/,oS=/["']/g,aS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,s=n.length,a,l,c;r<s;r++)l=n[r],a=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(oS,"").trim():+c,i=l.substr(a+1).trim();return e},lS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},cS=function(t){var e=(t+"").split("("),n=Se[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[aS(e[1])]:lS(t).split(",").map(Cf)):Se._CE&&sS.test(t)?Se._CE("",t):n},Yf=function(t){return function(e){return 1-t(1-e)}},$f=function o(t,e){for(var n=t._first,i;n;)n instanceof fn?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Mr=function(t,e){return t&&(ke(t)?t:Se[t]||cS(t))||e},Cr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},s;return En(t,function(a){Se[a]=Un[a]=r,Se[s=a.toLowerCase()]=n;for(var l in r)Se[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Se[a+"."+l]=r[l]}),r},jf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},wl=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),s=r/Rc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*BM((h-s)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:jf(a);return r=Rc/r,l.config=function(c,h){return o(t,c,h)},l},Al=function o(t,e){e===void 0&&(e=1.70158);var n=function(s){return s?--s*s*((e+1)*s+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:jf(n);return i.config=function(r){return o(t,r)},i};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Cr(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Se.Linear.easeNone=Se.none=Se.Linear.easeIn;Cr("Elastic",wl("in"),wl("out"),wl());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?o*a*a:a<n?o*Math.pow(a-1.5/t,2)+.75:a<i?o*(a-=2.25/t)*a+.9375:o*Math.pow(a-2.625/t,2)+.984375};Cr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Cr("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Cr("Circ",function(o){return-(_f(1-o*o)-1)});Cr("Sine",function(o){return o===1?1:-UM(o*NM)+1});Cr("Back",Al("in"),Al("out"),Al());Se.SteppedEase=Se.steps=Un.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,s=1-Fe;return function(a){return((i*yo(0,s,a)|0)+r)*n}}};xs.ease=Se["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return bh+=o+","+o+"Params,"});var Kf=function(t,e){this.id=FM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Tf,this.set=e?e.getSetter:Ih},so=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ms(this,+e.duration,1,1),this.data=e.data,Ue&&(this._ctx=Ue,Ue.data.push(this)),ro||Ln.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ss(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Da(this,n),!r._dp||r.parent||Lf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Fe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ys(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Fe?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Fe?0:this._rts,this.totalTime(yo(-Math.abs(this._delay),this._tDur,r),i!==!1),La(this),WM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ss(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Fe&&(this._tTime-=Fe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ni(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=VM);var i=ln;return ln=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,md(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,md(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(On(this,n),Sn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Sn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Fe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Fe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Fe)},t.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},t.then=function(n){var i=this;return new Promise(function(r){var s=ke(n)?n:Pf,a=function(){var c=i.then;i.then=null,ke(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Hs(this)},o}();Gn(so.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Fe,_prom:0,_ps:!1,_rts:1});var fn=function(o){vf(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Sn(n.sortChildren),Oe&&ni(n.parent||Oe,Si(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Df(Si(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,s){return $s(0,arguments,this),this},e.from=function(i,r,s){return $s(1,arguments,this),this},e.fromTo=function(i,r,s,a){return $s(2,arguments,this),this},e.set=function(i,r,s){return r.duration=0,r.parent=this,Ys(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ye(i,r,On(this,s),1),this},e.call=function(i,r,s){return ni(this,Ye.delayedCall(0,i,r),s)},e.staggerTo=function(i,r,s,a,l,c,h){return s.duration=r,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=h,s.parent=this,new Ye(i,s,On(this,l)),this},e.staggerFrom=function(i,r,s,a,l,c,h){return s.runBackwards=1,Ys(s).immediateRender=Sn(s.immediateRender),this.staggerTo(i,r,s,a,l,c,h)},e.staggerFromTo=function(i,r,s,a,l,c,h,u){return a.startAt=s,Ys(a).immediateRender=Sn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},e.render=function(i,r,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Qe(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,v,g,p,x,y,_,E,A,R;if(this!==Oe&&h>l&&i>=0&&(h=l),h!==this._tTime||s||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,_=this._start,y=this._ts,p=!y,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,s);if(d=Qe(h%g),h===l?(v=this._repeat,d=c):(v=~~(h/g),v&&v===h/g&&(d=c,v--),d>c&&(d=c)),E=ys(this._tTime,g),!a&&this._tTime&&E!==v&&this._tTime-E*g-this._dur<=0&&(E=v),A&&v&1&&(d=c-d,R=1),v!==E&&!this._lock){var b=A&&E&1,S=b===(A&&v&1);if(v<E&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(R?0:Qe(v*g)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;$f(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=$M(this,Qe(a),Qe(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!v&&(Nn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,s);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,s),d!==this._time||!this._ts&&!p){x=0,m&&(h+=this._zTime=-Fe);break}}f=m}else{f=this._last;for(var M=i<0?i:d;f;){if(m=f._prev,(f._act||M<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,s);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,r,s||ln&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){x=0,m&&(h+=this._zTime=M?-Fe:Fe);break}}f=m}}if(x&&!r&&(this.pause(),x.render(d>=a?0:-Fe)._zTime=d>=a?1:-1,this._ts))return this._start=_,La(this),this.render(i,r,s);this._onUpdate&&!r&&Nn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(_===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Qi(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Nn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var s=this;if(Ci(r)||(r=On(this,r,i)),!(i instanceof so)){if(cn(i))return i.forEach(function(a){return s.add(a,r)}),this;if(en(i))return this.addLabel(i,r);if(ke(i))i=Ye.delayedCall(0,i);else return this}return this!==i?ni(this,i,r):this},e.getChildren=function(i,r,s,a){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=-kn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},e.remove=function(i){return en(i)?this.removeLabel(i):ke(i)?this.killTweensOf(i):(Ia(this,i),i===this._recent&&(this._recent=this._last),yr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Qe(Ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=On(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,s){var a=Ye.delayedCall(0,r||no,s);return a.data="isPause",this._hasPause=1,ni(this,a,On(this,i))},e.removePause=function(i){var r=this._first;for(i=On(this,i);r;)r._start===i&&r.data==="isPause"&&Qi(r),r=r._next},e.killTweensOf=function(i,r,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)Wi!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var s=[],a=Hn(i),l=this._first,c=Ci(r),h;l;)l instanceof Ye?kM(l._targets,a)&&(c?(!Wi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(h=l.getTweensOf(a,r)).length&&s.push.apply(s,h),l=l._next;return s},e.tweenTo=function(i,r){r=r||{};var s=this,a=On(s,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,m=Ye.to(s,Gn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Fe,onStart:function(){if(s.pause(),!f){var g=r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());m._dur!==g&&Ms(m,g,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,u||[])}},r));return d?m.render(0):m},e.tweenFromTo=function(i,r,s){return this.tweenTo(r,Gn({startAt:{time:On(this,i)}},s))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),gd(this,On(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),gd(this,On(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Fe)},e.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return yr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),yr(this)},e.totalDuration=function(i){var r=0,s=this,a=s._last,l=kn,c,h,u;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(u=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,ni(s,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!s._dp||u&&u.smoothChildTiming)&&(s._start+=h/s._ts,s._time-=h,s._tTime-=h),s.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ms(s,s===Oe&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(i){if(Oe._ts&&(Rf(Oe,ya(i,Oe)),bf=Ln.frame),Ln.frame>=dd){dd+=Fn.autoSleep||120;var r=Oe._first;if((!r||!r._ts)&&Fn.autoSleep&&Ln._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ln.sleep()}}},t}(so);Gn(fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var hS=function(t,e,n,i,r,s,a){var l=new wn(this._pt,t,e,0,1,np,null,r),c=0,h=0,u,d,f,m,v,g,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=io(i)),s&&(x=[n,i],s(x,t,e),n=x[0],i=x[1]),d=n.match(Ml)||[];u=Ml.exec(i);)m=u[0],v=i.substring(c,u.index),f?f=(f+1)%5:v.substr(-5)==="rgba("&&(f=1),m!==d[h++]&&(g=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:g,c:m.charAt(1)==="="?rs(g,m)-g:parseFloat(m)-g,m:f&&f<4?Math.round:0},c=Ml.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Mf.test(i)||p)&&(l.e=0),this._pt=l,l},Rh=function(t,e,n,i,r,s,a,l,c,h){ke(i)&&(i=i(r||0,t,s));var u=t[e],d=n!=="get"?n:ke(u)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=ke(u)?c?mS:tp:Ph,m;if(en(i)&&(~i.indexOf("random(")&&(i=io(i)),i.charAt(1)==="="&&(m=rs(d,i)+(on(d)||0),(m||m===0)&&(i=m))),!h||d!==i||Bc)return!isNaN(d*i)&&i!==""?(m=new wn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?vS:ep,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!u&&!(e in t)&&wh(e,i),hS.call(this,t,e,d,i,f,l||Fn.stringFilter,c))},uS=function(t,e,n,i,r){if(ke(t)&&(t=js(t,r,e,n,i)),!li(t)||t.style&&t.nodeType||cn(t)||xf(t))return en(t)?js(t,r,e,n,i):t;var s={},a;for(a in t)s[a]=js(t[a],r,e,n,i);return s},Zf=function(t,e,n,i,r,s){var a,l,c,h;if(In[t]&&(a=new In[t]).init(r,a.rawVars?e[t]:uS(e[t],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new wn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Jr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Wi,Bc,Ch=function o(t,e,n){var i=t.vars,r=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=t._dur,v=t._startAt,g=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:g,y=t._overwrite==="auto"&&!yh,_=t.timeline,E,A,R,b,S,M,w,F,N,V,H,Y,B;if(_&&(!d||!r)&&(r="none"),t._ease=Mr(r,xs.ease),t._yEase=u?Yf(Mr(u===!0?r:u,xs.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!_&&!!i.runBackwards,!_||d&&!i.stagger){if(F=g[0]?xr(g[0]).harness:0,Y=F&&i[F.prop],E=xa(i,Ah),v&&(v._zTime<0&&v.progress(1),e<0&&h&&a&&!f?v.render(-1,!0):v.revert(h&&m?sa:zM),v._lazy=0),s){if(Qi(t._startAt=Ye.set(g,Gn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!v&&Sn(l),startAt:null,delay:0,onUpdate:c&&function(){return Nn(t,"onUpdate")},stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ln||!a&&!f)&&t._startAt.revert(sa),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!v){if(e&&(a=!1),R=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!v&&Sn(l),immediateRender:a,stagger:0,parent:p},E),Y&&(R[F.prop]=Y),Qi(t._startAt=Ye.set(g,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ln?t._startAt.revert(sa):t._startAt.render(-1,!0)),t._zTime=e,!a)o(t._startAt,Fe,Fe);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Sn(l)||l&&!m,A=0;A<g.length;A++){if(S=g[A],w=S._gsap||Th(g)[A]._gsap,t._ptLookup[A]=V={},Ic[w.id]&&ji.length&&_a(),H=x===g?A:x.indexOf(S),F&&(N=new F).init(S,Y||E,t,H,x)!==!1&&(t._pt=b=new wn(t._pt,S,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(L){V[L]=b}),N.priority&&(M=1)),!F||Y)for(R in E)In[R]&&(N=Zf(R,E,t,H,S,x))?N.priority&&(M=1):V[R]=b=Rh.call(t,S,R,"get",E[R],H,x,0,i.stringFilter);t._op&&t._op[A]&&t.kill(S,t._op[A]),y&&t._pt&&(Wi=t,Oe.killTweensOf(S,V,t.globalTime(e)),B=!t.parent,Wi=0),t._pt&&l&&(Ic[w.id]=1)}M&&ip(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,d&&e<=0&&_.render(kn,!0,!0)},dS=function(t,e,n,i,r,s,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Bc=1,t.vars[e]="+=0",Ch(t,a),Bc=0,l?eo(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+s*h.c,h.c=n-h.s,u.e&&(u.e=He(n)+on(u.e)),u.b&&(u.b=h.s+on(u.b))},fS=function(t,e){var n=t[0]?xr(t[0]).harness:0,i=n&&n.aliases,r,s,a,l;if(!i)return e;r=Ar({},e);for(s in i)if(s in r)for(l=i[s].split(","),a=l.length;a--;)r[l[a]]=r[s];return r},pS=function(t,e,n,i){var r=e.ease||i||"power1.inOut",s,a;if(cn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(s in e)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(t),v:e[s],e:r})},js=function(t,e,n,i,r){return ke(t)?t.call(e,n,i,r):en(t)&&~t.indexOf("random(")?io(t):t},Jf=bh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qf={};En(Jf+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Qf[o]=1});var Ye=function(o){vf(t,o);function t(n,i,r,s){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=o.call(this,s?i:Ys(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,v=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,x=i.parent||Oe,y=(cn(n)||xf(n)?Ci(n[0]):"length"in i)?[n]:Hn(n),_,E,A,R,b,S,M,w;if(a._targets=y.length?Th(y):eo("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||$o(c)||$o(h)){if(i=a.vars,_=a.timeline=new fn({data:"nested",defaults:v||{},targets:x&&x.data==="nested"?x.vars.targets:y}),_.kill(),_.parent=_._dp=Si(a),_._start=0,d||$o(c)||$o(h)){if(R=y.length,M=d&&Bf(d),li(d))for(b in d)~Jf.indexOf(b)&&(w||(w={}),w[b]=d[b]);for(E=0;E<R;E++)A=xa(i,Qf),A.stagger=0,p&&(A.yoyoEase=p),w&&Ar(A,w),S=y[E],A.duration=+js(c,Si(a),E,S,y),A.delay=(+js(h,Si(a),E,S,y)||0)-a._delay,!d&&R===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),_.to(S,A,M?M(E,S,y):0),_._ease=Se.none;_.duration()?c=h=0:a.timeline=0}else if(m){Ys(Gn(_.vars.defaults,{ease:"none"})),_._ease=Mr(m.ease||i.ease||"none");var F=0,N,V,H;if(cn(m))m.forEach(function(Y){return _.to(y,Y,">")}),_.duration();else{A={};for(b in m)b==="ease"||b==="easeEach"||pS(b,m[b],A,m.easeEach);for(b in A)for(N=A[b].sort(function(Y,B){return Y.t-B.t}),F=0,E=0;E<N.length;E++)V=N[E],H={ease:V.e,duration:(V.t-(E?N[E-1].t:0))/100*c},H[b]=V.v,_.to(y,H,F),F+=H.duration;_.duration()<c&&_.to({},{duration:c-_.duration()})}}c||a.duration(c=_.duration())}else a.timeline=0;return f===!0&&!yh&&(Wi=Si(a),Oe.killTweensOf(y),Wi=0),ni(x,Si(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!m&&a._start===Qe(x._time)&&Sn(u)&&XM(Si(a))&&x.data!=="nested")&&(a._tTime=-Fe,a.render(Math.max(0,-h)||0)),g&&Df(Si(a),g),a}var e=t.prototype;return e.render=function(i,r,s){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Fe&&!h?l:i<Fe?0:i,d,f,m,v,g,p,x,y,_;if(!c)YM(this,i,r,s);else if(u!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,y=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+i,r,s);if(d=Qe(u%v),u===l?(m=this._repeat,d=c):(m=~~(u/v),m&&m===Qe(u/v)&&(d=c,m--),d>c&&(d=c)),p=this._yoyo&&m&1,p&&(_=this._yEase,d=c-d),g=ys(this._tTime,v),d===a&&!s&&this._initted&&m===g)return this._tTime=u,this;m!==g&&(y&&this._yEase&&$f(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==v&&this._initted&&(this._lock=s=1,this.render(Qe(v*m),!0).invalidate()._lock=0))}if(!this._initted){if(Nf(this,h?i:d,s,r,u))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(_||this._ease)(d/c),this._from&&(this.ratio=x=1-x),d&&!a&&!r&&!m&&(Nn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Lc(this,i,r,s),Nn(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!r&&this.parent&&Nn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Lc(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Qi(this,1),!r&&!(h&&!a)&&(u||a||p)&&(Nn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,s,a,l){ro||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ch(this,c),h=this._ease(c/this._dur),dS(this,i,r,s,a,h,c,l)?this.resetTo(i,r,s,a,1):(Da(this,0),this.parent||If(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Hs(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Wi&&Wi.vars.overwrite!==!0)._first||Hs(this),this.parent&&s!==this.timeline.totalDuration()&&Ms(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Hn(i):a,c=this._ptLookup,h=this._pt,u,d,f,m,v,g,p;if((!r||r==="all")&&GM(a,l))return r==="all"&&(this._pt=0),Hs(this);for(u=this._op=this._op||[],r!=="all"&&(en(r)&&(v={},En(r,function(x){return v[x]=1}),r=v),r=fS(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],r==="all"?(u[p]=r,m=d,f={}):(f=u[p]=u[p]||{},m=r);for(v in m)g=d&&d[v],g&&((!("kill"in g.d)||g.d.kill(v)===!0)&&Ia(this,g,"_pt"),delete d[v]),f!=="all"&&(f[v]=1)}return this._initted&&!this._pt&&h&&Hs(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return $s(1,arguments)},t.delayedCall=function(i,r,s,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},t.fromTo=function(i,r,s){return $s(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,s){return Oe.killTweensOf(i,r,s)},t}(so);Gn(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(o){Ye[o]=function(){var t=new fn,e=Nc.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var Ph=function(t,e,n){return t[e]=n},tp=function(t,e,n){return t[e](n)},mS=function(t,e,n,i){return t[e](i.fp,n)},gS=function(t,e,n){return t.setAttribute(e,n)},Ih=function(t,e){return ke(t[e])?tp:Mh(t[e])&&t.setAttribute?gS:Ph},ep=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},vS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},np=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Lh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},_S=function(t,e,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(t,e,n),r=s},xS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ia(this,e,"_pt"):e.dep||(n=1),e=i;return!n},yS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ip=function(t){for(var e=t._pt,n,i,r,s;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:s)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:s=e,e=n}t._pt=r},wn=function(){function o(e,n,i,r,s,a,l,c,h){this.t=n,this.s=r,this.c=s,this.p=i,this.r=a||ep,this.d=l||this,this.set=c||Ph,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=yS,this.m=n,this.mt=r,this.tween=i},o}();En(bh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Ah[o]=1});Un.TweenMax=Un.TweenLite=Ye;Un.TimelineLite=Un.TimelineMax=fn;Oe=new fn({sortChildren:!1,defaults:xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=qf;var Sr=[],aa={},MS=[],_d=0,SS=0,bl=function(t){return(aa[t]||MS).map(function(e){return e()})},Oc=function(){var t=Date.now(),e=[];t-_d>2&&(bl("matchMediaInit"),Sr.forEach(function(n){var i=n.queries,r=n.conditions,s,a,l,c;for(a in i)s=Qn.matchMedia(i[a]).matches,s&&(l=1),s!==r[a]&&(r[a]=s,c=1);c&&(n.revert(),l&&e.push(n))}),bl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),_d=t,bl("matchMedia"))},rp=function(){function o(e,n){this.selector=n&&Fc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=SS++,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){ke(n)&&(r=i,i=n,n=ke);var s=this,a=function(){var c=Ue,h=s.selector,u;return c&&c!==s&&c.data.push(s),r&&(s.selector=Fc(r)),Ue=s,u=i.apply(s,arguments),ke(u)&&s._r.push(u),Ue=c,s.selector=h,s.isReverted=!1,u};return s.last=a,n===ke?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},t.ignore=function(n){var i=Ue;Ue=null,n(this),Ue=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var s=Sr.length;s--;)Sr[s].id===this.id&&Sr.splice(s,1)},t.revert=function(n){this.kill(n||{})},o}(),ES=function(){function o(e){this.contexts=[],this.scope=e,Ue&&Ue.data.push(this)}var t=o.prototype;return t.add=function(n,i,r){li(n)||(n={matches:n});var s=new rp(0,r||this.scope),a=s.conditions={},l,c,h;Ue&&!s.selector&&(s.selector=Ue.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?h=1:(l=Qn.matchMedia(n[c]),l&&(Sr.indexOf(s)<0&&Sr.push(s),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Oc):l.addEventListener("change",Oc)));return h&&i(s,function(u){return s.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Ma={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Gf(i)})},timeline:function(t){return new fn(t)},getTweensOf:function(t,e){return Oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=Hn(t)[0]);var r=xr(t||{}).get,s=n?Pf:Cf;return n==="native"&&(n=""),t&&(e?s((In[e]&&In[e].get||r)(t,e,n,i)):function(a,l,c){return s((In[a]&&In[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Hn(t),t.length>1){var i=t.map(function(h){return bn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var s=In[e],a=xr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=s?function(h){var u=new s;Jr._pt=0,u.init(t,n?h+n:h,Jr,0,[t]),u.render(1,u),Jr._pt&&Lh(1,Jr)}:a.set(t,l);return s?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=bn.to(t,Ar((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,h){return r.resetTo(e,l,c,h)};return s.tween=r,s},isTweening:function(t){return Oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Mr(t.ease,xs.ease)),fd(xs,t||{})},config:function(t){return fd(Fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,s=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!In[a]&&!Un[a]&&eo(e+" effect requires "+a+" plugin.")}),Sl[e]=function(a,l,c){return n(Hn(a),Gn(l||{},r),c)},s&&(fn.prototype[e]=function(a,l,c){return this.add(Sl[e](a,li(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Se[t]=Mr(e)},parseEase:function(t,e){return arguments.length?Mr(t,e):Se},getById:function(t){return Oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new fn(t),i,r;for(n.smoothChildTiming=Sn(t.smoothChildTiming),Oe.remove(n),n._dp=0,n._time=n._tTime=Oe._time,i=Oe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&ni(n,i,i._start-i._delay),i=r;return ni(Oe,n,0),n},context:function(t,e){return t?new rp(t,e):Ue},matchMedia:function(t){return new ES(t)},matchMediaRefresh:function(){return Sr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Oc()},addEventListener:function(t,e){var n=aa[t]||(aa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=aa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:eS,wrapYoyo:nS,distribute:Bf,random:zf,snap:Of,normalize:tS,getUnit:on,clamp:KM,splitColor:Wf,toArray:Hn,selector:Fc,mapRange:kf,pipe:JM,unitize:QM,interpolate:iS,shuffle:Uf},install:wf,effects:Sl,ticker:Ln,updateRoot:fn.updateRoot,plugins:In,globalTimeline:Oe,core:{PropTween:wn,globals:Af,Tween:Ye,Timeline:fn,Animation:so,getCache:xr,_removeLinkedListItem:Ia,reverting:function(){return ln},context:function(t){return t&&Ue&&(Ue.data.push(t),t._ctx=Ue),Ue},suppressOverwrites:function(t){return yh=t}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ma[o]=Ye[o]});Ln.add(fn.updateRoot);Jr=Ma.to({},{duration:0});var wS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},AS=function(t,e){var n=t._targets,i,r,s;for(i in e)for(r=n.length;r--;)s=t._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=wS(s,i)),s&&s.modifier&&s.modifier(e[i],t,n[r],i))},Tl=function(t,e){return{name:t,rawVars:1,init:function(i,r,s){s._onInit=function(a){var l,c;if(en(r)&&(l={},En(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}AS(a,r)}}}},bn=Ma.registerPlugin({name:"attr",init:function(t,e,n,i,r){var s,a,l;this.tween=n;for(s in e)l=t.getAttribute(s)||"",a=this.add(t,"setAttribute",(l||0)+"",e[s],i,r,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(t,e){for(var n=e._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Tl("roundProps",Uc),Tl("modifiers"),Tl("snap",Of))||Ma;Ye.version=fn.version=bn.version="3.12.5";Ef=1;Sh()&&Ss();Se.Power0;Se.Power1;Se.Power2;Se.Power3;Se.Power4;Se.Linear;Se.Quad;Se.Cubic;Se.Quart;Se.Quint;Se.Strong;Se.Elastic;Se.Back;Se.SteppedEase;Se.Bounce;Se.Sine;Se.Expo;Se.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xd,Xi,ss,Dh,_r,yd,Nh,bS=function(){return typeof window<"u"},Pi={},mr=180/Math.PI,os=Math.PI/180,qr=Math.atan2,Md=1e8,Fh=/([A-Z])/g,TS=/(left|right|width|margin|padding|x)/i,RS=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},CS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},PS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},IS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},sp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},op=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},LS=function(t,e,n){return t.style[e]=n},DS=function(t,e,n){return t.style.setProperty(e,n)},NS=function(t,e,n){return t._gsap[e]=n},FS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},US=function(t,e,n,i,r){var s=t._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},BS=function(t,e,n,i,r){var s=t._gsap;s[e]=n,s.renderTransform(r,s)},ze="transform",An=ze+"Origin",OS=function o(t,e){var n=this,i=this.target,r=i.style,s=i._gsap;if(t in Pi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ri[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ei(i,a)}):this.tfm[t]=s.x?s[t]:Ei(i,t),t===An&&(this.tfm.zOrigin=s.zOrigin);else return ri.transform.split(",").forEach(function(a){return o.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(An,e,"")),t=ze}(r||e)&&this.props.push(t,e,r[t])},ap=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zS=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,s;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Fh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Nh(),(!r||!r.isStart)&&!n[ze]&&(ap(n),i.zOrigin&&n[An]&&(n[An]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},lp=function(t,e){var n={target:t,props:[],revert:zS,save:OS};return t._gsap||bn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},cp,Vc=function(t,e){var n=Xi.createElementNS?Xi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xi.createElement(t);return n&&n.style?n:Xi.createElement(t)},oi=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Fh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,Es(e)||e,1)||""},Sd="O,Moz,ms,Ms,Webkit".split(","),Es=function(t,e,n){var i=e||_r,r=i.style,s=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(Sd[s]+t in r););return s<0?null:(s===3?"ms":s>=0?Sd[s]:"")+t},kc=function(){bS()&&window.document&&(xd=window,Xi=xd.document,ss=Xi.documentElement,_r=Vc("div")||{style:{}},Vc("div"),ze=Es(ze),An=ze+"Origin",_r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cp=!!Es("perspective"),Nh=bn.core.reverting,Dh=1)},Rl=function o(t){var e=Vc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(ss.appendChild(e),e.appendChild(this),this.style.display="block",t)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ss.removeChild(e),this.style.cssText=r,s},Ed=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},hp=function(t){var e;try{e=t.getBBox()}catch{e=Rl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Rl||(e=Rl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Ed(t,["x","cx","x1"])||0,y:+Ed(t,["y","cy","y1"])||0,width:0,height:0}:e},up=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&hp(t))},br=function(t,e){if(e){var n=t.style,i;e in Pi&&e!==An&&(e=ze),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Fh,"-$1").toLowerCase())):n.removeAttribute(e)}},qi=function(t,e,n,i,r,s){var a=new wn(t._pt,e,n,0,1,s?op:sp);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},wd={deg:1,rad:1,turn:1},VS={grid:1,flex:1},tr=function o(t,e,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",a=_r.style,l=TS.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",m,v,g,p;if(i===s||!r||wd[i]||wd[s])return r;if(s!=="px"&&!d&&(r=o(t,e,n,"px")),p=t.getCTM&&up(t),(f||s==="%")&&(Pi[e]||~e.indexOf("adius")))return m=p?t.getBBox()[l?"width":"height"]:t[h],He(f?r/m*u:r/100*m);if(a[l?"width":"height"]=u+(d?s:i),v=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(v=(t.ownerSVGElement||{}).parentNode),(!v||v===Xi||!v.appendChild)&&(v=Xi.body),g=v._gsap,g&&f&&g.width&&l&&g.time===Ln.time&&!g.uncache)return He(r/g.width*u);if(f&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,m=t[h],x?t.style[e]=x:br(t,e)}else(f||s==="%")&&!VS[oi(v,"display")]&&(a.position=oi(t,"position")),v===t&&(a.position="static"),v.appendChild(_r),m=_r[h],v.removeChild(_r),a.position="absolute";return l&&f&&(g=xr(v),g.time=Ln.time,g.width=v[h]),He(d?m*r/u:m&&r?u/m*r:0)},Ei=function(t,e,n,i){var r;return Dh||kc(),e in ri&&e!=="transform"&&(e=ri[e],~e.indexOf(",")&&(e=e.split(",")[0])),Pi[e]&&e!=="transform"?(r=ao(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ea(oi(t,An))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Sa[e]&&Sa[e](t,e,n)||oi(t,e)||Tf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?tr(t,e,r,n)+n:r},kS=function(t,e,n,i){if(!n||n==="none"){var r=Es(e,t,1),s=r&&oi(t,r,1);s&&s!==n?(e=r,n=s):e==="borderColor"&&(n=oi(t,"borderTopColor"))}var a=new wn(this._pt,t.style,e,0,1,np),l=0,c=0,h,u,d,f,m,v,g,p,x,y,_,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(v=t.style[e],t.style[e]=i,i=oi(t,e)||i,v?t.style[e]=v:br(t,e)),h=[n,i],qf(h),n=h[0],i=h[1],d=n.match(Zr)||[],E=i.match(Zr)||[],E.length){for(;u=Zr.exec(i);)g=u[0],x=i.substring(l,u.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),g!==(v=d[c++]||"")&&(f=parseFloat(v)||0,_=v.substr((f+"").length),g.charAt(1)==="="&&(g=rs(f,g)+_),p=parseFloat(g),y=g.substr((p+"").length),l=Zr.lastIndex-y.length,y||(y=y||Fn.units[e]||_,l===i.length&&(i+=y,a.e+=y)),_!==y&&(f=tr(t,e,v,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:p-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?op:sp;return Mf.test(i)&&(a.e=0),this._pt=a,a},Ad={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},HS=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ad[n]||n,e[1]=Ad[i]||i,e.join(" ")},GS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,s=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Pi[a]&&(l=1,a=a==="transformOrigin"?An:ze),br(n,a);l&&(br(n,ze),s&&(s.svg&&n.removeAttribute("transform"),ao(n,1),s.uncache=1,ap(i)))}},Sa={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var s=t._pt=new wn(t._pt,e,n,0,0,GS);return s.u=i,s.pr=-10,s.tween=r,t._props.push(n),1}}},oo=[1,0,0,1,0,0],dp={},fp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},bd=function(t){var e=oi(t,ze);return fp(e)?oo:e.substr(7).match(yf).map(He)},Uh=function(t,e){var n=t._gsap||xr(t),i=t.style,r=bd(t),s,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?oo:r):(r===oo&&!t.offsetParent&&t!==ss&&!n.svg&&(l=i.display,i.display="block",s=t.parentNode,(!s||!t.offsetParent)&&(c=1,a=t.nextElementSibling,ss.appendChild(t)),r=bd(t),l?i.display=l:br(t,"display"),c&&(a?s.insertBefore(t,a):s?s.appendChild(t):ss.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Hc=function(t,e,n,i,r,s){var a=t._gsap,l=r||Uh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],m=l[1],v=l[2],g=l[3],p=l[4],x=l[5],y=e.split(" "),_=parseFloat(y[0])||0,E=parseFloat(y[1])||0,A,R,b,S;n?l!==oo&&(R=f*g-m*v)&&(b=_*(g/R)+E*(-v/R)+(v*x-g*p)/R,S=_*(-m/R)+E*(f/R)-(f*x-m*p)/R,_=b,E=S):(A=hp(t),_=A.x+(~y[0].indexOf("%")?_/100*A.width:_),E=A.y+(~(y[1]||y[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&a.smooth?(p=_-c,x=E-h,a.xOffset=u+(p*f+x*v)-p,a.yOffset=d+(p*m+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=_,a.yOrigin=E,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[An]="0px 0px",s&&(qi(s,a,"xOrigin",c,_),qi(s,a,"yOrigin",h,E),qi(s,a,"xOffset",u,a.xOffset),qi(s,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",_+" "+E)},ao=function(t,e){var n=t._gsap||new Kf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,s="px",a="deg",l=getComputedStyle(t),c=oi(t,An)||"0",h,u,d,f,m,v,g,p,x,y,_,E,A,R,b,S,M,w,F,N,V,H,Y,B,L,tt,J,O,K,z,P,I;return h=u=d=v=g=p=x=y=_=0,f=m=1,n.svg=!!(t.getCTM&&up(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),R=Uh(t,n.svg),n.svg&&(n.uncache?(L=t.getBBox(),c=n.xOrigin-L.x+"px "+(n.yOrigin-L.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Hc(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,R)),E=n.xOrigin||0,A=n.yOrigin||0,R!==oo&&(w=R[0],F=R[1],N=R[2],V=R[3],h=H=R[4],u=Y=R[5],R.length===6?(f=Math.sqrt(w*w+F*F),m=Math.sqrt(V*V+N*N),v=w||F?qr(F,w)*mr:0,x=N||V?qr(N,V)*mr+v:0,x&&(m*=Math.abs(Math.cos(x*os))),n.svg&&(h-=E-(E*w+A*N),u-=A-(E*F+A*V))):(I=R[6],z=R[7],J=R[8],O=R[9],K=R[10],P=R[11],h=R[12],u=R[13],d=R[14],b=qr(I,K),g=b*mr,b&&(S=Math.cos(-b),M=Math.sin(-b),B=H*S+J*M,L=Y*S+O*M,tt=I*S+K*M,J=H*-M+J*S,O=Y*-M+O*S,K=I*-M+K*S,P=z*-M+P*S,H=B,Y=L,I=tt),b=qr(-N,K),p=b*mr,b&&(S=Math.cos(-b),M=Math.sin(-b),B=w*S-J*M,L=F*S-O*M,tt=N*S-K*M,P=V*M+P*S,w=B,F=L,N=tt),b=qr(F,w),v=b*mr,b&&(S=Math.cos(b),M=Math.sin(b),B=w*S+F*M,L=H*S+Y*M,F=F*S-w*M,Y=Y*S-H*M,w=B,H=L),g&&Math.abs(g)+Math.abs(v)>359.9&&(g=v=0,p=180-p),f=He(Math.sqrt(w*w+F*F+N*N)),m=He(Math.sqrt(Y*Y+I*I)),b=qr(H,Y),x=Math.abs(b)>2e-4?b*mr:0,_=P?1/(P<0?-P:P):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!fp(oi(t,ze)),B&&t.setAttribute("transform",B))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(f*=-1,x+=v<=0?180:-180,v+=v<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+s,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+s,n.z=d+s,n.scaleX=He(f),n.scaleY=He(m),n.rotation=He(v)+a,n.rotationX=He(g)+a,n.rotationY=He(p)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=_+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[An]=Ea(c)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?XS:cp?pp:WS,n.uncache=0,n},Ea=function(t){return(t=t.split(" "))[0]+" "+t[1]},Cl=function(t,e,n){var i=on(e);return He(parseFloat(e)+parseFloat(tr(t,"x",n+"px",i)))+i},WS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,pp(t,e)},hr="0deg",Os="0px",ur=") ",pp=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,v=n.scaleY,g=n.transformPerspective,p=n.force3D,x=n.target,y=n.zOrigin,_="",E=p==="auto"&&t&&t!==1||p===!0;if(y&&(u!==hr||h!==hr)){var A=parseFloat(h)*os,R=Math.sin(A),b=Math.cos(A),S;A=parseFloat(u)*os,S=Math.cos(A),s=Cl(x,s,R*S*-y),a=Cl(x,a,-Math.sin(A)*-y),l=Cl(x,l,b*S*-y+y)}g!==Os&&(_+="perspective("+g+ur),(i||r)&&(_+="translate("+i+"%, "+r+"%) "),(E||s!==Os||a!==Os||l!==Os)&&(_+=l!==Os||E?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+ur),c!==hr&&(_+="rotate("+c+ur),h!==hr&&(_+="rotateY("+h+ur),u!==hr&&(_+="rotateX("+u+ur),(d!==hr||f!==hr)&&(_+="skew("+d+", "+f+ur),(m!==1||v!==1)&&(_+="scale("+m+", "+v+ur),x.style[ze]=_||"translate(0, 0)"},XS=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,v=n.yOrigin,g=n.xOffset,p=n.yOffset,x=n.forceCSS,y=parseFloat(s),_=parseFloat(a),E,A,R,b,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=os,c*=os,E=Math.cos(l)*u,A=Math.sin(l)*u,R=Math.sin(l-c)*-d,b=Math.cos(l-c)*d,c&&(h*=os,S=Math.tan(c-h),S=Math.sqrt(1+S*S),R*=S,b*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),E*=S,A*=S)),E=He(E),A=He(A),R=He(R),b=He(b)):(E=u,b=d,A=R=0),(y&&!~(s+"").indexOf("px")||_&&!~(a+"").indexOf("px"))&&(y=tr(f,"x",s,"px"),_=tr(f,"y",a,"px")),(m||v||g||p)&&(y=He(y+m-(m*E+v*R)+g),_=He(_+v-(m*A+v*b)+p)),(i||r)&&(S=f.getBBox(),y=He(y+i/100*S.width),_=He(_+r/100*S.height)),S="matrix("+E+","+A+","+R+","+b+","+y+","+_+")",f.setAttribute("transform",S),x&&(f.style[ze]=S)},qS=function(t,e,n,i,r){var s=360,a=en(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?mr:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),u==="cw"&&c<0?c=(c+s*Md)%s-~~(c/s)*s:u==="ccw"&&c>0&&(c=(c-s*Md)%s-~~(c/s)*s)),t._pt=d=new wn(t._pt,e,n,i,c,CS),d.e=h,d.u="deg",t._props.push(n),d},Td=function(t,e){for(var n in e)t[n]=e[n];return t},YS=function(t,e,n){var i=Td({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,h,u,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[ze]=e,a=ao(n,1),br(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],s[ze]=e,a=ao(n,1),s[ze]=c);for(l in Pi)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=on(c),m=on(h),u=f!==m?tr(n,l,c,m):parseFloat(c),d=parseFloat(h),t._pt=new wn(t._pt,a,l,u,d-u,zc),t._pt.u=m||0,t._props.push(l));Td(a,i)};En("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",s=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?o+a:"border"+a+o});Sa[t>1?"border"+o:o]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=s.map(function(m){return Ei(a,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},s.forEach(function(m,v){return f[m]=d[v]=d[v]||d[(v-1)/2|0]}),a.init(l,f,u)}});var mp={name:"css",register:kc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var s=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,m,v,g,p,x,y,_,E,A,R,b;Dh||kc(),this.styles=this.styles||lp(t),b=this.styles.props,this.tween=n;for(v in e)if(v!=="autoRound"&&(h=e[v],!(In[v]&&Zf(v,e,n,i,t,r)))){if(f=typeof h,m=Sa[v],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=io(h)),m)m(this,t,v,h,n)&&(R=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(v)+"").trim(),h+="",Ki.lastIndex=0,Ki.test(c)||(g=on(c),p=on(h)),p?g!==p&&(c=tr(t,v,c,p)+p):g&&(h+=g),this.add(a,"setProperty",c,h,i,r,0,0,v),s.push(v),b.push(v,0,a[v]);else if(f!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,t,r):l[v],en(c)&&~c.indexOf("random(")&&(c=io(c)),on(c+"")||c==="auto"||(c+=Fn.units[v]||on(Ei(t,v))||""),(c+"").charAt(1)==="="&&(c=Ei(t,v))):c=Ei(t,v),d=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),v in ri&&(v==="autoAlpha"&&(d===1&&Ei(t,"visibility")==="hidden"&&u&&(d=0),b.push("visibility",0,a.visibility),qi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),v!=="scale"&&v!=="transform"&&(v=ri[v],~v.indexOf(",")&&(v=v.split(",")[0]))),y=v in Pi,y){if(this.styles.save(v),_||(E=t._gsap,E.renderTransform&&!e.parseTransform||ao(t,e.parseTransform),A=e.smoothOrigin!==!1&&E.smooth,_=this._pt=new wn(this._pt,a,ze,0,1,E.renderTransform,E,0,-1),_.dep=1),v==="scale")this._pt=new wn(this._pt,E,"scaleY",E.scaleY,(x?rs(E.scaleY,x+u):u)-E.scaleY||0,zc),this._pt.u=0,s.push("scaleY",v),v+="X";else if(v==="transformOrigin"){b.push(An,0,a[An]),h=HS(h),E.svg?Hc(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==E.zOrigin&&qi(this,E,"zOrigin",E.zOrigin,p),qi(this,a,v,Ea(c),Ea(h)));continue}else if(v==="svgOrigin"){Hc(t,h,1,A,0,this);continue}else if(v in dp){qS(this,E,v,d,x?rs(d,x+h):h);continue}else if(v==="smoothOrigin"){qi(this,E,"smooth",E.smooth,h);continue}else if(v==="force3D"){E[v]=h;continue}else if(v==="transform"){YS(this,h,t);continue}}else v in a||(v=Es(v)||v);if(y||(u||u===0)&&(d||d===0)&&!RS.test(h)&&v in a)g=(c+"").substr((d+"").length),u||(u=0),p=on(h)||(v in Fn.units?Fn.units[v]:g),g!==p&&(d=tr(t,v,c,p)),this._pt=new wn(this._pt,y?E:a,v,d,(x?rs(d,x+u):u)-d,!y&&(p==="px"||v==="zIndex")&&e.autoRound!==!1?IS:zc),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=PS);else if(v in a)kS.call(this,t,v,c,x?x+h:h);else if(v in t)this.add(t,v,c||t[v],x?x+h:h,i,r);else if(v!=="parseTransform"){wh(v,h);continue}y||(v in a?b.push(v,0,a[v]):b.push(v,1,c||t[v])),s.push(v)}}R&&ip(this)},render:function(t,e){if(e.tween._time||!Nh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ei,aliases:ri,getSetter:function(t,e,n){var i=ri[e];return i&&i.indexOf(",")<0&&(e=i),e in Pi&&e!==An&&(t._gsap.x||Ei(t,"x"))?n&&yd===n?e==="scale"?FS:NS:(yd=n||{})&&(e==="scale"?US:BS):t.style&&!Mh(t.style[e])?LS:~e.indexOf("-")?DS:Ih(t,e)},core:{_removeProperty:br,_getMatrix:Uh}};bn.utils.checkPrefix=Es;bn.core.getStyleSaver=lp;(function(o,t,e,n){var i=En(o+","+t+","+e,function(r){Pi[r]=1});En(t,function(r){Fn.units[r]="deg",dp[r]=1}),ri[i[13]]=o+","+t,En(n,function(r){var s=r.split(":");ri[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Fn.units[o]="px"});bn.registerPlugin(mp);var gp=bn.registerPlugin(mp)||bn;gp.core.Tween;function $S(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function jo(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var vp={exports:{}};(function(o,t){(function(e){o.exports=e()})(function(){return function e(n,i,r){function s(c,h){if(!i[c]){if(!n[c]){var u=typeof jo=="function"&&jo;if(!h&&u)return u(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}var d=i[c]={exports:{}};n[c][0].call(d.exports,function(f){var m=n[c][1][f];return s(m||f)},d,d.exports,e,n,i,r)}return i[c].exports}for(var a=typeof jo=="function"&&jo,l=0;l<r.length;l++)s(r[l]);return s}({1:[function(e,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,i){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,i){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(c){c=c||{},this.lowerBound=new r,c.lowerBound&&this.lowerBound.copy(c.lowerBound),this.upperBound=new r,c.upperBound&&this.upperBound.copy(c.upperBound)}var a=new r;s.prototype.setFromPoints=function(c,h,u,d){var f=this.lowerBound,m=this.upperBound,v=u;f.copy(c[0]),v&&v.vmult(f,f),m.copy(f);for(var g=1;g<c.length;g++){var p=c[g];v&&(v.vmult(p,a),p=a),p.x>m.x&&(m.x=p.x),p.x<f.x&&(f.x=p.x),p.y>m.y&&(m.y=p.y),p.y<f.y&&(f.y=p.y),p.z>m.z&&(m.z=p.z),p.z<f.z&&(f.z=p.z)}return h&&(h.vadd(f,f),h.vadd(m,m)),d&&(f.x-=d,f.y-=d,f.z-=d,m.x+=d,m.y+=d,m.z+=d),this},s.prototype.copy=function(c){return this.lowerBound.copy(c.lowerBound),this.upperBound.copy(c.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(c){var h=c.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var u=c.upperBound.x;this.upperBound.x<u&&(this.upperBound.x=u);var h=c.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var u=c.upperBound.y;this.upperBound.y<u&&(this.upperBound.y=u);var h=c.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var u=c.upperBound.z;this.upperBound.z<u&&(this.upperBound.z=u)},s.prototype.overlaps=function(c){var h=this.lowerBound,u=this.upperBound,d=c.lowerBound,f=c.upperBound;return(d.x<=u.x&&u.x<=f.x||h.x<=f.x&&f.x<=u.x)&&(d.y<=u.y&&u.y<=f.y||h.y<=f.y&&f.y<=u.y)&&(d.z<=u.z&&u.z<=f.z||h.z<=f.z&&f.z<=u.z)},s.prototype.contains=function(c){var h=this.lowerBound,u=this.upperBound,d=c.lowerBound,f=c.upperBound;return h.x<=d.x&&u.x>=f.x&&h.y<=d.y&&u.y>=f.y&&h.z<=d.z&&u.z>=f.z},s.prototype.getCorners=function(c,h,u,d,f,m,v,g){var p=this.lowerBound,x=this.upperBound;c.copy(p),h.set(x.x,p.y,p.z),u.set(x.x,x.y,p.z),d.set(p.x,x.y,x.z),f.set(x.x,p.y,p.z),m.set(p.x,x.y,p.z),v.set(p.x,p.y,x.z),g.copy(x)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(c,h){var u=l,d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=u[5],x=u[6],y=u[7];this.getCorners(d,f,m,v,g,p,x,y);for(var _=0;_!==8;_++){var E=u[_];c.pointToLocal(E,E)}return h.setFromPoints(u)},s.prototype.toWorldFrame=function(c,h){var u=l,d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=u[5],x=u[6],y=u[7];this.getCorners(d,f,m,v,g,p,x,y);for(var _=0;_!==8;_++){var E=u[_];c.pointToWorld(E,E)}return h.setFromPoints(u)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,a){if(s=s.index,a=a.index,a>s){var l=a;a=s,s=l}return this.matrix[(s*(s+1)>>1)+a-1]},r.prototype.set=function(s,a,l){if(s=s.index,a=a.index,a>s){var c=a;a=s,s=c}this.matrix[(s*(s+1)>>1)+a-1]=l?1:0},r.prototype.reset=function(){for(var s=0,a=this.matrix.length;s!==a;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,i){var r=e("../objects/Body"),s=e("../math/Vec3"),a=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(v,g,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var c=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(v,g){return!(!(v.collisionFilterGroup&g.collisionFilterMask)||!(g.collisionFilterGroup&v.collisionFilterMask)||(v.type&c||v.sleepState===r.SLEEPING)&&(g.type&c||g.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(v,g,p,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(v,g,p,x):this.doBoundingSphereBroadphase(v,g,p,x)};var h=new s;new s,new a,new s,l.prototype.doBoundingSphereBroadphase=function(v,g,p,x){var y=h;g.position.vsub(v.position,y);var _=Math.pow(v.boundingRadius+g.boundingRadius,2),E=y.norm2();E<_&&(p.push(v),x.push(g))},l.prototype.doBoundingBoxBroadphase=function(v,g,p,x){v.aabbNeedsUpdate&&v.computeAABB(),g.aabbNeedsUpdate&&g.computeAABB(),v.aabb.overlaps(g.aabb)&&(p.push(v),x.push(g))};var u={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(v,g){for(var p=u,x=d,y=f,_=v.length,E=0;E!==_;E++)x[E]=v[E],y[E]=g[E];v.length=0,g.length=0;for(var E=0;E!==_;E++){var A=x[E].id,R=y[E].id,b=A<R?A+","+R:R+","+A;p[b]=E,p.keys.push(b)}for(var E=0;E!==p.keys.length;E++){var b=p.keys.pop(),S=p[b];v.push(x[S]),g.push(y[S]),delete p[b]}},l.prototype.setWorld=function(v){};var m=new s;l.boundingSphereCheck=function(v,g){var p=m;return v.position.vsub(g.position,p),Math.pow(v.shape.boundingSphereRadius+g.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(v,g,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,i){n.exports=l;var r=e("./Broadphase"),s=e("../math/Vec3"),a=e("../shapes/Shape");function l(h,u,d,f,m){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=m||10,this.aabbMin=h||new s(100,100,100),this.aabbMax=u||new s(-100,-100,-100);var v=this.nx*this.ny*this.nz;if(v<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=v,this.binLengths.length=v;for(var g=0;g<v;g++)this.bins[g]=[],this.binLengths[g]=0}l.prototype=new r,l.prototype.constructor=l;var c=new s;new s,l.prototype.collisionPairs=function(h,u,d){var f=h.numObjects(),m=h.bodies,Q=this.aabbMax,G=this.aabbMin,v=this.nx,g=this.ny,p=this.nz,x=g*p,y=p,_=1,E=Q.x,A=Q.y,R=Q.z,b=G.x,S=G.y,M=G.z,w=v/(E-b),F=g/(A-S),N=p/(R-M),V=(E-b)/v,H=(A-S)/g,Y=(R-M)/p,B=Math.sqrt(V*V+H*H+Y*Y)*.5,L=a.types,tt=L.SPHERE,J=L.PLANE;L.BOX,L.COMPOUND,L.CONVEXPOLYHEDRON;for(var O=this.bins,K=this.binLengths,z=this.bins.length,P=0;P!==z;P++)K[P]=0;var I=Math.ceil,G=Math.min,Q=Math.max;function nt(ce,Mt,Gt,$t,Kt,Wt,he){var ie=(ce-b)*w|0,ve=(Mt-S)*F|0,q=(Gt-M)*N|0,It=I(($t-b)*w),lt=I((Kt-S)*F),pt=I((Wt-M)*N);ie<0?ie=0:ie>=v&&(ie=v-1),ve<0?ve=0:ve>=g&&(ve=g-1),q<0?q=0:q>=p&&(q=p-1),It<0?It=0:It>=v&&(It=v-1),lt<0?lt=0:lt>=g&&(lt=g-1),pt<0?pt=0:pt>=p&&(pt=p-1),ie*=x,ve*=y,q*=_,It*=x,lt*=y,pt*=_;for(var Vt=ie;Vt<=It;Vt+=x)for(var Ot=ve;Ot<=lt;Ot+=y)for(var re=q;re<=pt;re+=_){var Ie=Vt+Ot+re;O[Ie][K[Ie]++]=he}}for(var P=0;P!==f;P++){var X=m[P],rt=X.shape;switch(rt.type){case tt:var mt=X.position.x,St=X.position.y,Et=X.position.z,U=rt.radius;nt(mt-U,St-U,Et-U,mt+U,St+U,Et+U,X);break;case J:rt.worldNormalNeedsUpdate&&rt.computeWorldNormal(X.quaternion);var ft=rt.worldNormal,ut=b+V*.5-X.position.x,Xt=S+H*.5-X.position.y,xt=M+Y*.5-X.position.z,ne=c;ne.set(ut,Xt,xt);for(var gt=0,D=0;gt!==v;gt++,D+=x,ne.y=Xt,ne.x+=V)for(var T=0,j=0;T!==g;T++,j+=y,ne.z=xt,ne.y+=H)for(var ct=0,ht=0;ct!==p;ct++,ht+=_,ne.z+=Y)if(ne.dot(ft)<B){var at=D+j+ht;O[at][K[at]++]=X}break;default:X.aabbNeedsUpdate&&X.computeAABB(),nt(X.aabb.lowerBound.x,X.aabb.lowerBound.y,X.aabb.lowerBound.z,X.aabb.upperBound.x,X.aabb.upperBound.y,X.aabb.upperBound.z,X);break}}for(var P=0;P!==z;P++){var wt=K[P];if(wt>1)for(var At=O[P],gt=0;gt!==wt;gt++)for(var X=At[gt],T=0;T!==gt;T++){var Ut=At[T];this.needBroadphaseCollision(X,Ut)&&this.intersectionTest(X,Ut,u,d)}}this.makePairsUnique(u,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,i){n.exports=a;var r=e("./Broadphase"),s=e("./AABB");function a(){r.apply(this)}a.prototype=new r,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,c,h){var u=l.bodies,d=u.length,f,m,v,g;for(f=0;f!==d;f++)for(m=0;m!==f;m++)v=u[f],g=u[m],this.needBroadphaseCollision(v,g)&&this.intersectionTest(v,g,c,h)},new s,a.prototype.aabbQuery=function(l,c,h){h=h||[];for(var u=0;u<l.bodies.length;u++){var d=l.bodies[u];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(c)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,a){if(s=s.id,a=a.id,a>s){var l=a;a=s,s=l}return s+"-"+a in this.matrix},r.prototype.set=function(s,a,l){if(s=s.id,a=a.id,a>s){var c=a;a=s,s=c}l?this.matrix[s+"-"+a]=!0:delete this.matrix[s+"-"+a]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,i){n.exports=u;var r=e("../math/Vec3"),s=e("../math/Quaternion"),a=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),c=e("../shapes/Shape"),h=e("../collision/AABB");function u(z,P){this.from=z?z.clone():new r,this.to=P?P.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=u.ANY,this.result=new l,this.hasHit=!1,this.callback=function(I){}}u.prototype.constructor=u,u.CLOSEST=1,u.ANY=2,u.ALL=4;var d=new h,f=[];u.prototype.intersectWorld=function(z,P){return this.mode=P.mode||u.ANY,this.result=P.result||new l,this.skipBackfaces=!!P.skipBackfaces,this.collisionFilterMask=typeof P.collisionFilterMask<"u"?P.collisionFilterMask:-1,this.collisionFilterGroup=typeof P.collisionFilterGroup<"u"?P.collisionFilterGroup:-1,P.from&&this.from.copy(P.from),P.to&&this.to.copy(P.to),this.callback=P.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,z.broadphase.aabbQuery(z,d,f),this.intersectBodies(f),this.hasHit};var m=new r,v=new r;u.pointInTriangle=g;function g(z,P,I,G){G.vsub(P,J),I.vsub(P,m),z.vsub(P,v);var Q=J.dot(J),nt=J.dot(m),X=J.dot(v),rt=m.dot(m),mt=m.dot(v),St,Et;return(St=rt*X-nt*mt)>=0&&(Et=Q*mt-nt*X)>=0&&St+Et<Q*rt-nt*nt}var p=new r,x=new s;u.prototype.intersectBody=function(z,P){P&&(this.result=P,this._updateDirection());var I=this.checkCollisionResponse;if(!(I&&!z.collisionResponse)&&!(!(this.collisionFilterGroup&z.collisionFilterMask)||!(z.collisionFilterGroup&this.collisionFilterMask)))for(var G=p,Q=x,nt=0,X=z.shapes.length;nt<X;nt++){var rt=z.shapes[nt];if(!(I&&!rt.collisionResponse)&&(z.quaternion.mult(z.shapeOrientations[nt],Q),z.quaternion.vmult(z.shapeOffsets[nt],G),G.vadd(z.position,G),this.intersectShape(rt,Q,G,z),this.result._shouldStop))break}},u.prototype.intersectBodies=function(z,P){P&&(this.result=P,this._updateDirection());for(var I=0,G=z.length;!this.result._shouldStop&&I<G;I++)this.intersectBody(z[I])},u.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},u.prototype.intersectShape=function(z,P,I,G){var Q=this.from,nt=K(Q,this._direction,I);if(!(nt>z.boundingSphereRadius)){var X=this[z.type];X&&X.call(this,z,P,I,G)}},new r,new r;var y=new r,_=new r,E=new r,A=new r;new r,new l,u.prototype.intersectBox=function(z,P,I,G){return this.intersectConvex(z.convexPolyhedronRepresentation,P,I,G)},u.prototype[c.types.BOX]=u.prototype.intersectBox,u.prototype.intersectPlane=function(z,P,I,G){var Q=this.from,nt=this.to,X=this._direction,rt=new r(0,0,1);P.vmult(rt,rt);var mt=new r;Q.vsub(I,mt);var St=mt.dot(rt);nt.vsub(I,mt);var Et=mt.dot(rt);if(!(St*Et>0)&&!(Q.distanceTo(nt)<St)){var U=rt.dot(X);if(!(Math.abs(U)<this.precision)){var ft=new r,ut=new r,Xt=new r;Q.vsub(I,ft);var xt=-rt.dot(ft)/U;X.scale(xt,ut),Q.vadd(ut,Xt),this.reportIntersection(rt,Xt,z,G,-1)}}},u.prototype[c.types.PLANE]=u.prototype.intersectPlane,u.prototype.getAABB=function(z){var P=this.to,I=this.from;z.lowerBound.x=Math.min(P.x,I.x),z.lowerBound.y=Math.min(P.y,I.y),z.lowerBound.z=Math.min(P.z,I.z),z.upperBound.x=Math.max(P.x,I.x),z.upperBound.y=Math.max(P.y,I.y),z.upperBound.z=Math.max(P.z,I.z)};var R={faceList:[0]};u.prototype.intersectHeightfield=function(z,P,I,G){z.data,z.elementSize;var Q=new r,nt=new u(this.from,this.to);a.pointToLocalFrame(I,P,nt.from,nt.from),a.pointToLocalFrame(I,P,nt.to,nt.to);var X=[],rt=null,mt=null,St=null,Et=null,U=z.getIndexOfPosition(nt.from.x,nt.from.y,X,!1);if(U&&(rt=X[0],mt=X[1],St=X[0],Et=X[1]),U=z.getIndexOfPosition(nt.to.x,nt.to.y,X,!1),U&&((rt===null||X[0]<rt)&&(rt=X[0]),(St===null||X[0]>St)&&(St=X[0]),(mt===null||X[1]<mt)&&(mt=X[1]),(Et===null||X[1]>Et)&&(Et=X[1])),rt!==null){var ft=[];z.getRectMinMax(rt,mt,St,Et,ft),ft[0],ft[1];for(var ut=rt;ut<=St;ut++)for(var Xt=mt;Xt<=Et;Xt++){if(this.result._shouldStop||(z.getConvexTrianglePillar(ut,Xt,!1),a.pointToWorldFrame(I,P,z.pillarOffset,Q),this.intersectConvex(z.pillarConvex,P,Q,G,R),this.result._shouldStop))return;z.getConvexTrianglePillar(ut,Xt,!0),a.pointToWorldFrame(I,P,z.pillarOffset,Q),this.intersectConvex(z.pillarConvex,P,Q,G,R)}}},u.prototype[c.types.HEIGHTFIELD]=u.prototype.intersectHeightfield;var b=new r,S=new r;u.prototype.intersectSphere=function(z,P,I,G){var Q=this.from,nt=this.to,X=z.radius,rt=Math.pow(nt.x-Q.x,2)+Math.pow(nt.y-Q.y,2)+Math.pow(nt.z-Q.z,2),mt=2*((nt.x-Q.x)*(Q.x-I.x)+(nt.y-Q.y)*(Q.y-I.y)+(nt.z-Q.z)*(Q.z-I.z)),St=Math.pow(Q.x-I.x,2)+Math.pow(Q.y-I.y,2)+Math.pow(Q.z-I.z,2)-Math.pow(X,2),Et=Math.pow(mt,2)-4*rt*St,U=b,ft=S;if(!(Et<0))if(Et===0)Q.lerp(nt,Et,U),U.vsub(I,ft),ft.normalize(),this.reportIntersection(ft,U,z,G,-1);else{var ut=(-mt-Math.sqrt(Et))/(2*rt),Xt=(-mt+Math.sqrt(Et))/(2*rt);if(ut>=0&&ut<=1&&(Q.lerp(nt,ut,U),U.vsub(I,ft),ft.normalize(),this.reportIntersection(ft,U,z,G,-1)),this.result._shouldStop)return;Xt>=0&&Xt<=1&&(Q.lerp(nt,Xt,U),U.vsub(I,ft),ft.normalize(),this.reportIntersection(ft,U,z,G,-1))}},u.prototype[c.types.SPHERE]=u.prototype.intersectSphere;var M=new r;new r,new r;var w=new r;u.prototype.intersectConvex=function(P,I,G,Q,nt){for(var X=M,rt=w,mt=nt&&nt.faceList||null,St=P.faces,Et=P.vertices,U=P.faceNormals,ft=this._direction,ut=this.from,Xt=this.to,xt=ut.distanceTo(Xt),ne=mt?mt.length:St.length,gt=this.result,D=0;!gt._shouldStop&&D<ne;D++){var T=mt?mt[D]:D,j=St[T],ct=U[T],ht=I,at=G;rt.copy(Et[j[0]]),ht.vmult(rt,rt),rt.vadd(at,rt),rt.vsub(ut,rt),ht.vmult(ct,X);var wt=ft.dot(X);if(!(Math.abs(wt)<this.precision)){var At=X.dot(rt)/wt;if(!(At<0)){ft.mult(At,y),y.vadd(ut,y),_.copy(Et[j[0]]),ht.vmult(_,_),at.vadd(_,_);for(var Ut=1;!gt._shouldStop&&Ut<j.length-1;Ut++){E.copy(Et[j[Ut]]),A.copy(Et[j[Ut+1]]),ht.vmult(E,E),ht.vmult(A,A),at.vadd(E,E),at.vadd(A,A);var ce=y.distanceTo(ut);!(g(y,_,E,A)||g(y,E,_,A))||ce>xt||this.reportIntersection(X,y,P,Q,T)}}}}},u.prototype[c.types.CONVEXPOLYHEDRON]=u.prototype.intersectConvex;var F=new r,N=new r,V=new r,H=new r,Y=new r,B=new r;new h;var L=[],tt=new a;u.prototype.intersectTrimesh=function(P,I,G,Q,nt){var X=F,rt=L,mt=tt,St=w,Et=N,U=V,ft=H,ut=B,Xt=Y;nt&&nt.faceList;var xt=P.indices;P.vertices,P.faceNormals;var ne=this.from,gt=this.to,D=this._direction;mt.position.copy(G),mt.quaternion.copy(I),a.vectorToLocalFrame(G,I,D,Et),a.pointToLocalFrame(G,I,ne,U),a.pointToLocalFrame(G,I,gt,ft);var T=U.distanceSquared(ft);P.tree.rayQuery(this,mt,rt);for(var j=0,ct=rt.length;!this.result._shouldStop&&j!==ct;j++){var ht=rt[j];P.getNormal(ht,X),P.getVertex(xt[ht*3],_),_.vsub(U,St);var at=Et.dot(X),wt=X.dot(St)/at;if(!(wt<0)){Et.scale(wt,y),y.vadd(U,y),P.getVertex(xt[ht*3+1],E),P.getVertex(xt[ht*3+2],A);var At=y.distanceSquared(U);!(g(y,E,_,A)||g(y,_,E,A))||At>T||(a.vectorToWorldFrame(I,X,Xt),a.pointToWorldFrame(G,I,y,ut),this.reportIntersection(Xt,ut,P,Q,ht))}}rt.length=0},u.prototype[c.types.TRIMESH]=u.prototype.intersectTrimesh,u.prototype.reportIntersection=function(z,P,I,G,Q){var nt=this.from,X=this.to,rt=nt.distanceTo(P),mt=this.result;if(!(this.skipBackfaces&&z.dot(this._direction)>0))switch(mt.hitFaceIndex=typeof Q<"u"?Q:-1,this.mode){case u.ALL:this.hasHit=!0,mt.set(nt,X,z,P,I,G,rt),mt.hasHit=!0,this.callback(mt);break;case u.CLOSEST:(rt<mt.distance||!mt.hasHit)&&(this.hasHit=!0,mt.hasHit=!0,mt.set(nt,X,z,P,I,G,rt));break;case u.ANY:this.hasHit=!0,mt.hasHit=!0,mt.set(nt,X,z,P,I,G,rt),mt._shouldStop=!0;break}};var J=new r,O=new r;function K(z,P,I){I.vsub(z,J);var G=J.dot(P);P.mult(G,O),O.vadd(z,O);var Q=I.distanceTo(O);return Q}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,i){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(a,l,c,h,u,d,f){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(c),this.hitPointWorld.copy(h),this.shape=u,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,i){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(a){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(c){l.push(c.body)},this._removeBodyHandler=function(c){var h=l.indexOf(c.body);h!==-1&&l.splice(h,1)},a&&this.setWorld(a)}s.prototype=new r,s.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},s.insertionSortX=function(a){for(var l=1,c=a.length;l<c;l++){for(var h=a[l],u=l-1;u>=0&&!(a[u].aabb.lowerBound.x<=h.aabb.lowerBound.x);u--)a[u+1]=a[u];a[u+1]=h}return a},s.insertionSortY=function(a){for(var l=1,c=a.length;l<c;l++){for(var h=a[l],u=l-1;u>=0&&!(a[u].aabb.lowerBound.y<=h.aabb.lowerBound.y);u--)a[u+1]=a[u];a[u+1]=h}return a},s.insertionSortZ=function(a){for(var l=1,c=a.length;l<c;l++){for(var h=a[l],u=l-1;u>=0&&!(a[u].aabb.lowerBound.z<=h.aabb.lowerBound.z);u--)a[u+1]=a[u];a[u+1]=h}return a},s.prototype.collisionPairs=function(a,l,c){var h=this.axisList,u=h.length,d=this.axisIndex,f,m;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==u;f++){var v=h[f];for(m=f+1;m<u;m++){var g=h[m];if(this.needBroadphaseCollision(v,g)){if(!s.checkBounds(v,g,d))break;this.intersectionTest(v,g,l,c)}}}},s.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,c=a.length,h=0;h!==c;h++){var u=a[h];u.aabbNeedsUpdate&&u.computeAABB()}l===0?s.insertionSortX(a):l===1?s.insertionSortY(a):l===2&&s.insertionSortZ(a)},s.checkBounds=function(a,l,c){var h,u;c===0?(h=a.position.x,u=l.position.x):c===1?(h=a.position.y,u=l.position.y):c===2&&(h=a.position.z,u=l.position.z);var d=a.boundingRadius,f=l.boundingRadius,m=h+d,v=u-f;return v<m},s.prototype.autoDetectAxis=function(){for(var a=0,l=0,c=0,h=0,u=0,d=0,f=this.axisList,m=f.length,v=1/m,g=0;g!==m;g++){var p=f[g],x=p.position.x;a+=x,l+=x*x;var y=p.position.y;c+=y,h+=y*y;var _=p.position.z;u+=_,d+=_*_}var E=l-a*a*v,A=h-c*c*v,R=d-u*u*v;E>A?E>R?this.axisIndex=0:this.axisIndex=2:A>R?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(a,l,c){c=c||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,u="x";h===1&&(u="y"),h===2&&(u="z");var d=this.axisList;l.lowerBound[u],l.upperBound[u];for(var f=0;f<d.length;f++){var m=d[f];m.aabbNeedsUpdate&&m.computeAABB(),m.aabb.overlaps(l)&&c.push(m)}return c}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,i){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),a=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function c(h,u,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,m=d.pivotA?d.pivotA.clone():new l,v=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,h,m,u,v,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var g=this.coneEquation=new s(h,u,d),p=this.twistEquation=new a(h,u,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,g.maxForce=0,g.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(g,p)}c.prototype=new r,c.constructor=c,new l,new l,c.prototype.update=function(){var h=this.bodyA,u=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),u.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),h.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),u.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,i){n.exports=s;var r=e("../utils/Utils");function s(a,l,c){c=r.defaults(c,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=s.idCounter++,this.collideConnected=c.collideConnected,c.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},s.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,i){n.exports=a;var r=e("./Constraint"),s=e("../equations/ContactEquation");function a(l,c,h,u){r.call(this,l,c),typeof h>"u"&&(h=l.position.distanceTo(c.position)),typeof u>"u"&&(u=1e6),this.distance=h;var d=this.distanceEquation=new s(l,c);this.equations.push(d),d.minForce=-u,d.maxForce=u}a.prototype=new r,a.prototype.update=function(){var l=this.bodyA,c=this.bodyB,h=this.distanceEquation,u=this.distance*.5,d=h.ni;c.position.vsub(l.position,d),d.normalize(),d.mult(u,h.ri),d.mult(-u,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,i){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),a=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function c(d,f,m){m=m||{};var v=typeof m.maxForce<"u"?m.maxForce:1e6,g=m.pivotA?m.pivotA.clone():new l,p=m.pivotB?m.pivotB.clone():new l;r.call(this,d,g,f,p,v);var x=this.axisA=m.axisA?m.axisA.clone():new l(1,0,0);x.normalize();var y=this.axisB=m.axisB?m.axisB.clone():new l(1,0,0);y.normalize();var _=this.rotationalEquation1=new s(d,f,m),E=this.rotationalEquation2=new s(d,f,m),A=this.motorEquation=new a(d,f,v);A.enabled=!1,this.equations.push(_,E,A)}c.prototype=new r,c.constructor=c,c.prototype.enableMotor=function(){this.motorEquation.enabled=!0},c.prototype.disableMotor=function(){this.motorEquation.enabled=!1},c.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},c.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new l,u=new l;c.prototype.update=function(){var d=this.bodyA,f=this.bodyB,m=this.motorEquation,v=this.rotationalEquation1,g=this.rotationalEquation2,p=h,x=u,y=this.axisA,_=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(y,p),f.quaternion.vmult(_,x),p.tangents(v.axisA,g.axisA),v.axisB.copy(x),g.axisB.copy(x),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,m.axisA),f.quaternion.vmult(this.axisB,m.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,i){n.exports=l,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var a=e("../math/Vec3");function l(c,h,u){u=u||{};var d=typeof u.maxForce<"u"?u.maxForce:1e6,f=new a,m=new a,v=new a;c.position.vadd(h.position,v),v.scale(.5,v),h.pointToLocalFrame(v,m),c.pointToLocalFrame(v,f),r.call(this,c,f,h,m,d);var g=this.rotationalEquation1=new s(c,h,u),p=this.rotationalEquation2=new s(c,h,u),x=this.rotationalEquation3=new s(c,h,u);this.equations.push(g,p,x)}l.prototype=new r,l.constructor=l,new a,new a,l.prototype.update=function(){var c=this.bodyA,h=this.bodyB;this.motorEquation;var u=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),c.vectorToWorldFrame(a.UNIT_X,u.axisA),h.vectorToWorldFrame(a.UNIT_Y,u.axisB),c.vectorToWorldFrame(a.UNIT_Y,d.axisA),h.vectorToWorldFrame(a.UNIT_Z,d.axisB),c.vectorToWorldFrame(a.UNIT_Z,f.axisA),h.vectorToWorldFrame(a.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,i){n.exports=l;var r=e("./Constraint"),s=e("../equations/ContactEquation"),a=e("../math/Vec3");function l(c,h,u,d,f){r.call(this,c,u),f=typeof f<"u"?f:1e6,this.pivotA=h?h.clone():new a,this.pivotB=d?d.clone():new a;var m=this.equationX=new s(c,u),v=this.equationY=new s(c,u),g=this.equationZ=new s(c,u);this.equations.push(m,v,g),m.minForce=v.minForce=g.minForce=-f,m.maxForce=v.maxForce=g.maxForce=f,m.ni.set(1,0,0),v.ni.set(0,1,0),g.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var c=this.bodyA,h=this.bodyB,u=this.equationX,d=this.equationY,f=this.equationZ;c.quaternion.vmult(this.pivotA,u.ri),h.quaternion.vmult(this.pivotB,u.rj),d.ri.copy(u.ri),d.rj.copy(u.rj),f.ri.copy(u.ri),f.rj.copy(u.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function a(h,u,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,h,u,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}a.prototype=new s,a.prototype.constructor=a;var l=new r,c=new r;a.prototype.computeB=function(h){var u=this.a,d=this.b,f=this.axisA,m=this.axisB,v=l,g=c,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(m,v),m.cross(f,g),p.rotational.copy(g),x.rotational.copy(v);var y=Math.cos(this.angle)-f.dot(m),_=this.computeGW(),E=this.computeGiMf(),A=-y*u-_*d-h*E;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,i){n.exports=a;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function a(g,p,x){x=typeof x<"u"?x:1e6,r.call(this,g,p,0,x),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}a.prototype=new r,a.prototype.constructor=a;var l=new s,c=new s,h=new s;a.prototype.computeB=function(g){var p=this.a,x=this.b,y=this.bi,_=this.bj,E=this.ri,A=this.rj,R=l,b=c,S=y.velocity,M=y.angularVelocity;y.force,y.torque;var w=_.velocity,F=_.angularVelocity;_.force,_.torque;var N=h,V=this.jacobianElementA,H=this.jacobianElementB,Y=this.ni;E.cross(Y,R),A.cross(Y,b),Y.negate(V.spatial),R.negate(V.rotational),H.spatial.copy(Y),H.rotational.copy(b),N.copy(_.position),N.vadd(A,N),N.vsub(y.position,N),N.vsub(E,N);var B=Y.dot(N),L=this.restitution+1,tt=L*w.dot(Y)-L*S.dot(Y)+F.dot(b)-M.dot(R),J=this.computeGiMf(),O=-B*p-tt*x-g*J;return O};var u=new s,d=new s,f=new s,m=new s,v=new s;a.prototype.getImpactVelocityAlongNormal=function(){var g=u,p=d,x=f,y=m,_=v;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(x,g),this.bj.getVelocityAtWorldPoint(y,p),g.vsub(p,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,i){n.exports=a;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function a(v,g,p,x){this.id=a.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof x>"u"?1e6:x,this.bi=v,this.bj=g,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(v,g,p){var x=g,y=v,_=p;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*y*(1+4*x))},a.prototype.computeB=function(v,g,p){var x=this.computeGW(),y=this.computeGq(),_=this.computeGiMf();return-y*v-x*g-_*p},a.prototype.computeGq=function(){var v=this.jacobianElementA,g=this.jacobianElementB,p=this.bi,x=this.bj,y=p.position,_=x.position;return v.spatial.dot(y)+g.spatial.dot(_)};var l=new s;a.prototype.computeGW=function(){var v=this.jacobianElementA,g=this.jacobianElementB,p=this.bi,x=this.bj,y=p.velocity,_=x.velocity,E=p.angularVelocity||l,A=x.angularVelocity||l;return v.multiplyVectors(y,E)+g.multiplyVectors(_,A)},a.prototype.computeGWlambda=function(){var v=this.jacobianElementA,g=this.jacobianElementB,p=this.bi,x=this.bj,y=p.vlambda,_=x.vlambda,E=p.wlambda||l,A=x.wlambda||l;return v.multiplyVectors(y,E)+g.multiplyVectors(_,A)};var c=new s,h=new s,u=new s,d=new s;a.prototype.computeGiMf=function(){var v=this.jacobianElementA,g=this.jacobianElementB,p=this.bi,x=this.bj,y=p.force,_=p.torque,E=x.force,A=x.torque,R=p.invMassSolve,b=x.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(_,u):u.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(A,d):d.set(0,0,0),y.mult(R,c),E.mult(b,h),v.multiplyVectors(c,u)+g.multiplyVectors(h,d)};var f=new s;a.prototype.computeGiMGt=function(){var v=this.jacobianElementA,g=this.jacobianElementB,p=this.bi,x=this.bj,y=p.invMassSolve,_=x.invMassSolve,E=p.invInertiaWorldSolve,A=x.invInertiaWorldSolve,R=y+_;return E&&(E.vmult(v.rotational,f),R+=f.dot(v.rotational)),A&&(A.vmult(g.rotational,f),R+=f.dot(g.rotational)),R};var m=new s;new s,new s,new s,new s,new s,a.prototype.addToWlambda=function(v){var g=this.jacobianElementA,p=this.jacobianElementB,x=this.bi,y=this.bj,_=m;g.spatial.mult(x.invMassSolve*v,_),x.vlambda.vadd(_,x.vlambda),p.spatial.mult(y.invMassSolve*v,_),y.vlambda.vadd(_,y.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(g.rotational,_),_.mult(v,_),x.wlambda.vadd(_,x.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(v,_),y.wlambda.vadd(_,y.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,i){n.exports=a;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function a(h,u,d){r.call(this,h,u,-d,d),this.ri=new s,this.rj=new s,this.t=new s}a.prototype=new r,a.prototype.constructor=a;var l=new s,c=new s;a.prototype.computeB=function(h){this.a;var u=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,m=l,v=c,g=this.t;d.cross(g,m),f.cross(g,v);var p=this.jacobianElementA,x=this.jacobianElementB;g.negate(p.spatial),m.negate(p.rotational),x.spatial.copy(g),x.rotational.copy(v);var y=this.computeGW(),_=this.computeGiMf(),E=-y*u-h*_;return E}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function a(h,u,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,h,u,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new s,a.prototype.constructor=a;var l=new r,c=new r;a.prototype.computeB=function(h){var u=this.a,d=this.b,f=this.axisA,m=this.axisB,v=l,g=c,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(m,v),m.cross(f,g),p.rotational.copy(g),x.rotational.copy(v);var y=Math.cos(this.maxAngle)-f.dot(m),_=this.computeGW(),E=this.computeGiMf(),A=-y*u-_*d-h*E;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function a(l,c,h){h=typeof h<"u"?h:1e6,s.call(this,l,c,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}a.prototype=new s,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var c=this.b;this.bi,this.bj;var h=this.axisA,u=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(h),u.negate(f.rotational);var m=this.computeGW()-this.targetVelocity,v=this.computeGiMf(),g=-m*c-l*v;return g}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,i){var r=e("../utils/Utils");n.exports=s;function s(a,l,c){c=r.defaults(c,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[a,l],this.friction=c.friction,this.restitution=c.restitution,this.contactEquationStiffness=c.contactEquationStiffness,this.contactEquationRelaxation=c.contactEquationRelaxation,this.frictionEquationStiffness=c.frictionEquationStiffness,this.frictionEquationRelaxation=c.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,i){n.exports=r;function r(s){var a="";s=s||{},typeof s=="string"?(a=s,s={}):typeof s=="object"&&(a=""),this.name=a,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},s.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},s.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},s.prototype.getTrace=function(l){var l=l||new r,c=this.elements;l.x=c[0],l.y=c[4],l.z=c[8]},s.prototype.vmult=function(a,l){l=l||new r;var c=this.elements,h=a.x,u=a.y,d=a.z;return l.x=c[0]*h+c[1]*u+c[2]*d,l.y=c[3]*h+c[4]*u+c[5]*d,l.z=c[6]*h+c[7]*u+c[8]*d,l},s.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},s.prototype.mmult=function(a,l){for(var c=l||new s,h=0;h<3;h++)for(var u=0;u<3;u++){for(var d=0,f=0;f<3;f++)d+=a.elements[h+f*3]*this.elements[f+u*3];c.elements[h+u*3]=d}return c},s.prototype.scale=function(a,l){l=l||new s;for(var c=this.elements,h=l.elements,u=0;u!==3;u++)h[3*u+0]=a.x*c[3*u+0],h[3*u+1]=a.y*c[3*u+1],h[3*u+2]=a.z*c[3*u+2];return l},s.prototype.solve=function(a,l){l=l||new r;for(var c=3,h=4,u=[],d=0;d<c*h;d++)u.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)u[d+h*f]=this.elements[d+3*f];u[3+4*0]=a.x,u[3+4*1]=a.y,u[3+4*2]=a.z;var m=3,v=m,g,p=4,x;do{if(d=v-m,u[d+h*d]===0){for(f=d+1;f<v;f++)if(u[d+h*f]!==0){g=p;do x=p-g,u[x+h*d]+=u[x+h*f];while(--g);break}}if(u[d+h*d]!==0)for(f=d+1;f<v;f++){var y=u[d+h*f]/u[d+h*d];g=p;do x=p-g,u[x+h*f]=x<=d?0:u[x+h*f]-u[x+h*d]*y;while(--g)}}while(--m);if(l.z=u[2*h+3]/u[2*h+2],l.y=(u[1*h+3]-u[1*h+2]*l.z)/u[1*h+1],l.x=(u[0*h+3]-u[0*h+2]*l.z-u[0*h+1]*l.y)/u[0*h+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},s.prototype.e=function(a,l,c){if(c===void 0)return this.elements[l+3*a];this.elements[l+3*a]=c},s.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},s.prototype.toString=function(){for(var a="",l=",",c=0;c<9;c++)a+=this.elements[c]+l;return a},s.prototype.reverse=function(a){a=a||new s;for(var l=3,c=6,h=[],u=0;u<l*c;u++)h.push(0);var u,d;for(u=0;u<3;u++)for(d=0;d<3;d++)h[u+c*d]=this.elements[u+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var f=3,m=f,v,g=c,p;do{if(u=m-f,h[u+c*u]===0){for(d=u+1;d<m;d++)if(h[u+c*d]!==0){v=g;do p=g-v,h[p+c*u]+=h[p+c*d];while(--v);break}}if(h[u+c*u]!==0)for(d=u+1;d<m;d++){var x=h[u+c*d]/h[u+c*u];v=g;do p=g-v,h[p+c*d]=p<=u?0:h[p+c*d]-h[p+c*u]*x;while(--v)}}while(--f);u=2;do{d=u-1;do{var x=h[u+c*d]/h[u+c*u];v=c;do p=c-v,h[p+c*d]=h[p+c*d]-h[p+c*u]*x;while(--v)}while(d--)}while(--u);u=2;do{var x=1/h[u+c*u];v=c;do p=c-v,h[p+c*u]=h[p+c*u]*x;while(--v)}while(u--);u=2;do{d=2;do{if(p=h[l+d+c*u],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(u,d,p)}while(d--)}while(u--);return a},s.prototype.setRotationFromQuaternion=function(a){var l=a.x,c=a.y,h=a.z,u=a.w,d=l+l,f=c+c,m=h+h,v=l*d,g=l*f,p=l*m,x=c*f,y=c*m,_=h*m,E=u*d,A=u*f,R=u*m,b=this.elements;return b[3*0+0]=1-(x+_),b[3*0+1]=g-R,b[3*0+2]=p+A,b[3*1+0]=g+R,b[3*1+1]=1-(v+_),b[3*1+2]=y-E,b[3*2+0]=p-A,b[3*2+1]=y+E,b[3*2+2]=1-(v+x),this},s.prototype.transpose=function(a){a=a||new s;for(var l=a.elements,c=this.elements,h=0;h!==3;h++)for(var u=0;u!==3;u++)l[3*h+u]=c[3*u+h];return a}},{"./Vec3":30}],28:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(d,f,m,v){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=m!==void 0?m:0,this.w=v!==void 0?v:1}s.prototype.set=function(d,f,m,v){this.x=d,this.y=f,this.z=m,this.w=v},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(d,f){var m=Math.sin(f*.5);this.x=d.x*m,this.y=d.y*m,this.z=d.z*m,this.w=Math.cos(f*.5)},s.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),m=Math.sqrt(1-this.w*this.w);return m<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/m,d.y=this.y/m,d.z=this.z/m),[d,f]};var a=new r,l=new r;s.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var m=a,v=l;d.tangents(m,v),this.setFromAxisAngle(m,Math.PI)}else{var g=d.cross(f);this.x=g.x,this.y=g.y,this.z=g.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var c=new r,h=new r,u=new r;s.prototype.mult=function(d,f){f=f||new s;var m=this.w,v=c,g=h,p=u;return v.set(this.x,this.y,this.z),g.set(d.x,d.y,d.z),f.w=m*d.w-v.dot(g),v.cross(g,p),f.x=m*g.x+d.w*v.x+p.x,f.y=m*g.y+d.w*v.y+p.y,f.z=m*g.z+d.w*v.z+p.z,f},s.prototype.inverse=function(d){var f=this.x,m=this.y,v=this.z,g=this.w;d=d||new s,this.conjugate(d);var p=1/(f*f+m*m+v*v+g*g);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},s.prototype.conjugate=function(d){return d=d||new s,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},s.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.vmult=function(d,f){f=f||new r;var m=d.x,v=d.y,g=d.z,p=this.x,x=this.y,y=this.z,_=this.w,E=_*m+x*g-y*v,A=_*v+y*m-p*g,R=_*g+p*v-x*m,b=-p*m-x*v-y*g;return f.x=E*_+b*-p+A*-y-R*-x,f.y=A*_+b*-x+R*-p-E*-y,f.z=R*_+b*-y+E*-x-A*-p,f},s.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},s.prototype.toEuler=function(d,f){f=f||"YZX";var m,v,g,p=this.x,x=this.y,y=this.z,_=this.w;switch(f){case"YZX":var E=p*x+y*_;if(E>.499&&(m=2*Math.atan2(p,_),v=Math.PI/2,g=0),E<-.499&&(m=-2*Math.atan2(p,_),v=-Math.PI/2,g=0),isNaN(m)){var A=p*p,R=x*x,b=y*y;m=Math.atan2(2*x*_-2*p*y,1-2*R-2*b),v=Math.asin(2*E),g=Math.atan2(2*p*_-2*x*y,1-2*A-2*b)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=m,d.z=v,d.x=g},s.prototype.setFromEuler=function(d,f,m,v){v=v||"XYZ";var g=Math.cos(d/2),p=Math.cos(f/2),x=Math.cos(m/2),y=Math.sin(d/2),_=Math.sin(f/2),E=Math.sin(m/2);return v==="XYZ"?(this.x=y*p*x+g*_*E,this.y=g*_*x-y*p*E,this.z=g*p*E+y*_*x,this.w=g*p*x-y*_*E):v==="YXZ"?(this.x=y*p*x+g*_*E,this.y=g*_*x-y*p*E,this.z=g*p*E-y*_*x,this.w=g*p*x+y*_*E):v==="ZXY"?(this.x=y*p*x-g*_*E,this.y=g*_*x+y*p*E,this.z=g*p*E+y*_*x,this.w=g*p*x-y*_*E):v==="ZYX"?(this.x=y*p*x-g*_*E,this.y=g*_*x+y*p*E,this.z=g*p*E-y*_*x,this.w=g*p*x+y*_*E):v==="YZX"?(this.x=y*p*x+g*_*E,this.y=g*_*x+y*p*E,this.z=g*p*E-y*_*x,this.w=g*p*x-y*_*E):v==="XZY"&&(this.x=y*p*x-g*_*E,this.y=g*_*x-y*p*E,this.z=g*p*E+y*_*x,this.w=g*p*x+y*_*E),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,i){var r=e("./Vec3"),s=e("./Quaternion");n.exports=a;function a(c){c=c||{},this.position=new r,c.position&&this.position.copy(c.position),this.quaternion=new s,c.quaternion&&this.quaternion.copy(c.quaternion)}var l=new s;a.pointToLocalFrame=function(c,h,u,f){var f=f||new r;return u.vsub(c,f),h.conjugate(l),l.vmult(f,f),f},a.prototype.pointToLocal=function(c,h){return a.pointToLocalFrame(this.position,this.quaternion,c,h)},a.pointToWorldFrame=function(c,h,u,f){var f=f||new r;return h.vmult(u,f),f.vadd(c,f),f},a.prototype.pointToWorld=function(c,h){return a.pointToWorldFrame(this.position,this.quaternion,c,h)},a.prototype.vectorToWorldFrame=function(c,u){var u=u||new r;return this.quaternion.vmult(c,u),u},a.vectorToWorldFrame=function(c,h,u){return c.vmult(h,u),u},a.vectorToLocalFrame=function(c,h,u,f){var f=f||new r;return h.w*=-1,h.vmult(u,f),h.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,i){n.exports=s;var r=e("./Mat3");function s(h,u,d){this.x=h||0,this.y=u||0,this.z=d||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(h,u){var d=h.x,f=h.y,m=h.z,v=this.x,g=this.y,p=this.z;return u=u||new s,u.x=g*m-p*f,u.y=p*d-v*m,u.z=v*f-g*d,u},s.prototype.set=function(h,u,d){return this.x=h,this.y=u,this.z=d,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(h,u){if(u)u.x=h.x+this.x,u.y=h.y+this.y,u.z=h.z+this.z;else return new s(this.x+h.x,this.y+h.y,this.z+h.z)},s.prototype.vsub=function(h,u){if(u)u.x=this.x-h.x,u.y=this.y-h.y,u.z=this.z-h.z;else return new s(this.x-h.x,this.y-h.y,this.z-h.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var h=this.x,u=this.y,d=this.z,f=Math.sqrt(h*h+u*u+d*d);if(f>0){var m=1/f;this.x*=m,this.y*=m,this.z*=m}else this.x=0,this.y=0,this.z=0;return f},s.prototype.unit=function(h){h=h||new s;var u=this.x,d=this.y,f=this.z,m=Math.sqrt(u*u+d*d+f*f);return m>0?(m=1/m,h.x=u*m,h.y=d*m,h.z=f*m):(h.x=1,h.y=0,h.z=0),h},s.prototype.norm=function(){var h=this.x,u=this.y,d=this.z;return Math.sqrt(h*h+u*u+d*d)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(h){var u=this.x,d=this.y,f=this.z,m=h.x,v=h.y,g=h.z;return Math.sqrt((m-u)*(m-u)+(v-d)*(v-d)+(g-f)*(g-f))},s.prototype.distanceSquared=function(h){var u=this.x,d=this.y,f=this.z,m=h.x,v=h.y,g=h.z;return(m-u)*(m-u)+(v-d)*(v-d)+(g-f)*(g-f)},s.prototype.mult=function(h,u){u=u||new s;var d=this.x,f=this.y,m=this.z;return u.x=h*d,u.y=h*f,u.z=h*m,u},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(h){return h=h||new s,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var a=new s,l=new s;s.prototype.tangents=function(h,u){var d=this.norm();if(d>0){var f=a,m=1/d;f.set(this.x*m,this.y*m,this.z*m);var v=l;Math.abs(f.x)<.9?(v.set(1,0,0),f.cross(v,h)):(v.set(0,1,0),f.cross(v,h)),f.cross(h,u)}else h.set(1,0,0),u.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},s.prototype.lerp=function(h,u,d){var f=this.x,m=this.y,v=this.z;d.x=f+(h.x-f)*u,d.y=m+(h.y-m)*u,d.z=v+(h.z-v)*u},s.prototype.almostEquals=function(h,u){return u===void 0&&(u=1e-6),!(Math.abs(this.x-h.x)>u||Math.abs(this.y-h.y)>u||Math.abs(this.z-h.z)>u)},s.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var c=new s;s.prototype.isAntiparallelTo=function(h,u){return this.negate(c),c.almostEquals(h,u)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,i){n.exports=u;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),a=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var c=e("../collision/AABB"),h=e("../shapes/Box");function u(w){w=w||{},r.apply(this),this.id=u.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof w.collisionFilterGroup=="number"?w.collisionFilterGroup:1,this.collisionFilterMask=typeof w.collisionFilterMask=="number"?w.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,w.position&&this.position.copy(w.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,w.velocity&&this.velocity.copy(w.velocity),this.initVelocity=new s,this.force=new s;var F=typeof w.mass=="number"?w.mass:0;this.mass=F,this.invMass=F>0?1/F:0,this.material=w.material||null,this.linearDamping=typeof w.linearDamping=="number"?w.linearDamping:.01,this.type=F<=0?u.STATIC:u.DYNAMIC,typeof w.type==typeof u.STATIC&&(this.type=w.type),this.allowSleep=typeof w.allowSleep<"u"?w.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof w.sleepSpeedLimit<"u"?w.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof w.sleepTimeLimit<"u"?w.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new l,w.quaternion&&this.quaternion.copy(w.quaternion),this.initQuaternion=new l,this.angularVelocity=new s,w.angularVelocity&&this.angularVelocity.copy(w.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof w.fixedRotation<"u"?w.fixedRotation:!1,this.angularDamping=typeof w.angularDamping<"u"?w.angularDamping:.01,this.aabb=new c,this.aabbNeedsUpdate=!0,this.wlambda=new s,w.shape&&this.addShape(w.shape),this.updateMassProperties()}u.prototype=new r,u.prototype.constructor=u,u.DYNAMIC=1,u.STATIC=2,u.KINEMATIC=4,u.AWAKE=0,u.SLEEPY=1,u.SLEEPING=2,u.idCounter=0,u.prototype.wakeUp=function(){var w=this.sleepState;this.sleepState=0,w===u.SLEEPING&&this.dispatchEvent({type:"wakeup"})},u.prototype.sleep=function(){this.sleepState=u.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},u.sleepyEvent={type:"sleepy"},u.sleepEvent={type:"sleep"},u.prototype.sleepTick=function(w){if(this.allowSleep){var F=this.sleepState,N=this.velocity.norm2()+this.angularVelocity.norm2(),V=Math.pow(this.sleepSpeedLimit,2);F===u.AWAKE&&N<V?(this.sleepState=u.SLEEPY,this.timeLastSleepy=w,this.dispatchEvent(u.sleepyEvent)):F===u.SLEEPY&&N>V?this.wakeUp():F===u.SLEEPY&&w-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(u.sleepEvent))}},u.prototype.updateSolveMassProperties=function(){this.sleepState===u.SLEEPING||this.type===u.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},u.prototype.pointToLocalFrame=function(w,N){var N=N||new s;return w.vsub(this.position,N),this.quaternion.conjugate().vmult(N,N),N},u.prototype.vectorToLocalFrame=function(w,N){var N=N||new s;return this.quaternion.conjugate().vmult(w,N),N},u.prototype.pointToWorldFrame=function(w,N){var N=N||new s;return this.quaternion.vmult(w,N),N.vadd(this.position,N),N},u.prototype.vectorToWorldFrame=function(w,N){var N=N||new s;return this.quaternion.vmult(w,N),N};var d=new s,f=new l;u.prototype.addShape=function(w,F,N){var V=new s,H=new l;return F&&V.copy(F),N&&H.copy(N),this.shapes.push(w),this.shapeOffsets.push(V),this.shapeOrientations.push(H),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},u.prototype.updateBoundingRadius=function(){for(var w=this.shapes,F=this.shapeOffsets,N=w.length,V=0,H=0;H!==N;H++){var Y=w[H];Y.updateBoundingSphereRadius();var B=F[H].norm(),L=Y.boundingSphereRadius;B+L>V&&(V=B+L)}this.boundingRadius=V};var m=new c;u.prototype.computeAABB=function(){for(var w=this.shapes,F=this.shapeOffsets,N=this.shapeOrientations,V=w.length,H=d,Y=f,B=this.quaternion,L=this.aabb,tt=m,J=0;J!==V;J++){var O=w[J];N[J].mult(B,Y),Y.vmult(F[J],H),H.vadd(this.position,H),O.calculateWorldAABB(H,Y,tt.lowerBound,tt.upperBound),J===0?L.copy(tt):L.extend(tt)}this.aabbNeedsUpdate=!1};var v=new a,g=new a;new a,u.prototype.updateInertiaWorld=function(w){var F=this.invInertia;if(!(F.x===F.y&&F.y===F.z&&!w)){var N=v,V=g;N.setRotationFromQuaternion(this.quaternion),N.transpose(V),N.scale(F,N),N.mmult(V,this.invInertiaWorld)}};var p=new s,x=new s;u.prototype.applyForce=function(w,F){if(this.type===u.DYNAMIC){var N=p;F.vsub(this.position,N);var V=x;N.cross(w,V),this.force.vadd(w,this.force),this.torque.vadd(V,this.torque)}};var y=new s,_=new s;u.prototype.applyLocalForce=function(w,F){if(this.type===u.DYNAMIC){var N=y,V=_;this.vectorToWorldFrame(w,N),this.pointToWorldFrame(F,V),this.applyForce(N,V)}};var E=new s,A=new s,R=new s;u.prototype.applyImpulse=function(w,F){if(this.type===u.DYNAMIC){var N=E;F.vsub(this.position,N);var V=A;V.copy(w),V.mult(this.invMass,V),this.velocity.vadd(V,this.velocity);var H=R;N.cross(w,H),this.invInertiaWorld.vmult(H,H),this.angularVelocity.vadd(H,this.angularVelocity)}};var b=new s,S=new s;u.prototype.applyLocalImpulse=function(w,F){if(this.type===u.DYNAMIC){var N=b,V=S;this.vectorToWorldFrame(w,N),this.pointToWorldFrame(F,V),this.applyImpulse(N,V)}};var M=new s;u.prototype.updateMassProperties=function(){var w=M;this.invMass=this.mass>0?1/this.mass:0;var F=this.inertia,N=this.fixedRotation;this.computeAABB(),w.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(w,this.mass,F),this.invInertia.set(F.x>0&&!N?1/F.x:0,F.y>0&&!N?1/F.y:0,F.z>0&&!N?1/F.z:0),this.updateInertiaWorld(!0)},u.prototype.getVelocityAtWorldPoint=function(w,F){var N=new s;return w.vsub(this.position,N),this.angularVelocity.cross(N,F),this.velocity.vadd(F,F),F}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,i){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var a=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=c;function c(B){this.chassisBody=B.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof B.indexRightAxis<"u"?B.indexRightAxis:1,this.indexForwardAxis=typeof B.indexForwardAxis<"u"?B.indexForwardAxis:0,this.indexUpAxis=typeof B.indexUpAxis<"u"?B.indexUpAxis:2}new r,new r,new r;var h=new r,u=new r,d=new r;new a,c.prototype.addWheel=function(B){B=B||{};var L=new l(B),tt=this.wheelInfos.length;return this.wheelInfos.push(L),tt},c.prototype.setSteeringValue=function(B,L){var tt=this.wheelInfos[L];tt.steering=B},new r,c.prototype.applyEngineForce=function(B,L){this.wheelInfos[L].engineForce=B},c.prototype.setBrake=function(B,L){this.wheelInfos[L].brake=B},c.prototype.addToWorld=function(B){this.constraints,B.add(this.chassisBody);var L=this;this.preStepCallback=function(){L.updateVehicle(B.dt)},B.addEventListener("preStep",this.preStepCallback),this.world=B},c.prototype.getVehicleAxisWorld=function(B,L){L.set(B===0?1:0,B===1?1:0,B===2?1:0),this.chassisBody.vectorToWorldFrame(L,L)},c.prototype.updateVehicle=function(B){for(var L=this.wheelInfos,tt=L.length,J=this.chassisBody,O=0;O<tt;O++)this.updateWheelTransform(O);this.currentVehicleSpeedKmHour=3.6*J.velocity.norm();var K=new r;this.getVehicleAxisWorld(this.indexForwardAxis,K),K.dot(J.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var O=0;O<tt;O++)this.castRay(L[O]);this.updateSuspension(B);for(var z=new r,P=new r,O=0;O<tt;O++){var I=L[O],G=I.suspensionForce;G>I.maxSuspensionForce&&(G=I.maxSuspensionForce),I.raycastResult.hitNormalWorld.scale(G*B,z),I.raycastResult.hitPointWorld.vsub(J.position,P),J.applyImpulse(z,I.raycastResult.hitPointWorld)}this.updateFriction(B);var Q=new r,nt=new r,X=new r;for(O=0;O<tt;O++){var I=L[O];J.getVelocityAtWorldPoint(I.chassisConnectionPointWorld,X);var rt=1;switch(this.indexUpAxis){case 1:rt=-1;break}if(I.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,nt);var mt=nt.dot(I.raycastResult.hitNormalWorld);I.raycastResult.hitNormalWorld.scale(mt,Q),nt.vsub(Q,nt);var St=nt.dot(X);I.deltaRotation=rt*St*B/I.radius}(I.sliding||!I.isInContact)&&I.engineForce!==0&&I.useCustomSlidingRotationalSpeed&&(I.deltaRotation=(I.engineForce>0?1:-1)*I.customSlidingRotationalSpeed*B),Math.abs(I.brake)>Math.abs(I.engineForce)&&(I.deltaRotation=0),I.rotation+=I.deltaRotation,I.deltaRotation*=.99}},c.prototype.updateSuspension=function(B){for(var L=this.chassisBody,tt=L.mass,J=this.wheelInfos,O=J.length,K=0;K<O;K++){var z=J[K];if(z.isInContact){var P,I=z.suspensionRestLength,G=z.suspensionLength,Q=I-G;P=z.suspensionStiffness*Q*z.clippedInvContactDotSuspension;var nt=z.suspensionRelativeVelocity,X;nt<0?X=z.dampingCompression:X=z.dampingRelaxation,P-=X*nt,z.suspensionForce=P*tt,z.suspensionForce<0&&(z.suspensionForce=0)}else z.suspensionForce=0}},c.prototype.removeFromWorld=function(B){this.constraints,B.remove(this.chassisBody),B.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,m=new r;c.prototype.castRay=function(B){var L=f,tt=m;this.updateWheelTransformWorld(B);var J=this.chassisBody,O=-1,K=B.suspensionRestLength+B.radius;B.directionWorld.scale(K,L);var z=B.chassisConnectionPointWorld;z.vadd(L,tt);var P=B.raycastResult;P.reset();var I=J.collisionResponse;J.collisionResponse=!1,this.world.rayTest(z,tt,P),J.collisionResponse=I;var G=P.body;if(B.raycastResult.groundObject=0,G){O=P.distance,B.raycastResult.hitNormalWorld=P.hitNormalWorld,B.isInContact=!0;var Q=P.distance;B.suspensionLength=Q-B.radius;var nt=B.suspensionRestLength-B.maxSuspensionTravel,X=B.suspensionRestLength+B.maxSuspensionTravel;B.suspensionLength<nt&&(B.suspensionLength=nt),B.suspensionLength>X&&(B.suspensionLength=X,B.raycastResult.reset());var rt=B.raycastResult.hitNormalWorld.dot(B.directionWorld),mt=new r;J.getVelocityAtWorldPoint(B.raycastResult.hitPointWorld,mt);var St=B.raycastResult.hitNormalWorld.dot(mt);if(rt>=-.1)B.suspensionRelativeVelocity=0,B.clippedInvContactDotSuspension=1/.1;else{var Et=-1/rt;B.suspensionRelativeVelocity=St*Et,B.clippedInvContactDotSuspension=Et}}else B.suspensionLength=B.suspensionRestLength+0*B.maxSuspensionTravel,B.suspensionRelativeVelocity=0,B.directionWorld.scale(-1,B.raycastResult.hitNormalWorld),B.clippedInvContactDotSuspension=1;return O},c.prototype.updateWheelTransformWorld=function(B){B.isInContact=!1;var L=this.chassisBody;L.pointToWorldFrame(B.chassisConnectionPointLocal,B.chassisConnectionPointWorld),L.vectorToWorldFrame(B.directionLocal,B.directionWorld),L.vectorToWorldFrame(B.axleLocal,B.axleWorld)},c.prototype.updateWheelTransform=function(B){var L=h,tt=u,J=d,O=this.wheelInfos[B];this.updateWheelTransformWorld(O),O.directionLocal.scale(-1,L),tt.copy(O.axleLocal),L.cross(tt,J),J.normalize(),tt.normalize();var K=O.steering,z=new s;z.setFromAxisAngle(L,K);var P=new s;P.setFromAxisAngle(tt,O.rotation);var I=O.worldTransform.quaternion;this.chassisBody.quaternion.mult(z,I),I.mult(P,I),I.normalize();var G=O.worldTransform.position;G.copy(O.directionWorld),G.scale(O.suspensionLength,G),G.vadd(O.chassisConnectionPointWorld,G)};var v=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];c.prototype.getWheelTransformWorld=function(B){return this.wheelInfos[B].worldTransform};var g=new r,p=[],x=[],y=1;c.prototype.updateFriction=function(B){for(var L=g,tt=this.wheelInfos,J=tt.length,O=this.chassisBody,K=x,z=p,P=0;P<J;P++){var I=tt[P],G=I.raycastResult.body;I.sideImpulse=0,I.forwardImpulse=0,K[P]||(K[P]=new r),z[P]||(z[P]=new r)}for(var P=0;P<J;P++){var I=tt[P],G=I.raycastResult.body;if(G){var Q=z[P],nt=this.getWheelTransformWorld(P);nt.vectorToWorldFrame(v[this.indexRightAxis],Q);var X=I.raycastResult.hitNormalWorld,rt=Q.dot(X);X.scale(rt,L),Q.vsub(L,Q),Q.normalize(),X.cross(Q,K[P]),K[P].normalize(),I.sideImpulse=Y(O,I.raycastResult.hitPointWorld,G,I.raycastResult.hitPointWorld,Q),I.sideImpulse*=y}}var mt=1,St=.5;this.sliding=!1;for(var P=0;P<J;P++){var I=tt[P],G=I.raycastResult.body,Et=0;if(I.slipInfo=1,G){var U=0,ft=I.brake?I.brake:U;Et=R(O,G,I.raycastResult.hitPointWorld,K[P],ft),Et+=I.engineForce*B;var ut=ft/Et;I.slipInfo*=ut}if(I.forwardImpulse=0,I.skidInfo=1,G){I.skidInfo=1;var Xt=I.suspensionForce*B*I.frictionSlip,xt=Xt,ne=Xt*xt;I.forwardImpulse=Et;var gt=I.forwardImpulse*St,D=I.sideImpulse*mt,T=gt*gt+D*D;if(I.sliding=!1,T>ne){this.sliding=!0,I.sliding=!0;var ut=Xt/Math.sqrt(T);I.skidInfo*=ut}}}if(this.sliding)for(var P=0;P<J;P++){var I=tt[P];I.sideImpulse!==0&&I.skidInfo<1&&(I.forwardImpulse*=I.skidInfo,I.sideImpulse*=I.skidInfo)}for(var P=0;P<J;P++){var I=tt[P],j=new r;if(j.copy(I.raycastResult.hitPointWorld),I.forwardImpulse!==0){var ct=new r;K[P].scale(I.forwardImpulse,ct),O.applyImpulse(ct,j)}if(I.sideImpulse!==0){var G=I.raycastResult.body,ht=new r;ht.copy(I.raycastResult.hitPointWorld);var at=new r;z[P].scale(I.sideImpulse,at),O.pointToLocalFrame(j,j),j["xyz"[this.indexUpAxis]]*=I.rollInfluence,O.pointToWorldFrame(j,j),O.applyImpulse(at,j),at.scale(-1,at),G.applyImpulse(at,ht)}}};var _=new r,E=new r,A=new r;function R(B,L,tt,J,O){var K=0,z=tt,P=_,I=E,G=A;B.getVelocityAtWorldPoint(z,P),L.getVelocityAtWorldPoint(z,I),P.vsub(I,G);var Q=J.dot(G),nt=F(B,tt,J),X=F(L,tt,J),rt=1,mt=rt/(nt+X);return K=-Q*mt,O<K&&(K=O),K<-O&&(K=-O),K}var b=new r,S=new r,M=new r,w=new r;function F(B,L,tt){var J=b,O=S,K=M,z=w;return L.vsub(B.position,J),J.cross(tt,O),B.invInertiaWorld.vmult(O,z),z.cross(J,K),B.invMass+tt.dot(K)}var N=new r,V=new r,H=new r;function Y(B,L,tt,J,O,rt){var z=O.norm2();if(z>1.1)return 0;var P=N,I=V,G=H;B.getVelocityAtWorldPoint(L,P),tt.getVelocityAtWorldPoint(J,I),P.vsub(I,G);var Q=O.dot(G),nt=.2,X=1/(B.invMass+tt.invMass),rt=-nt*Q*X;return rt}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,i){var r=e("./Body"),s=e("../shapes/Sphere"),a=e("../shapes/Box"),l=e("../math/Vec3"),c=e("../constraints/HingeConstraint");n.exports=h;function h(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var m=new a(new l(5,2,.5));this.chassisBody=new r(1,m)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(f){f=f||{};var m=f.body;m||(m=new r(1,new s(1.2))),this.wheelBodies.push(m),this.wheelForces.push(0),new l;var v=typeof f.position<"u"?f.position.clone():new l,g=new l;this.chassisBody.pointToWorldFrame(v,g),m.position.set(g.x,g.y,g.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var x=new c(this.chassisBody,m,{pivotA:v,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(f,m){var v=this.wheelAxes[m],g=Math.cos(f),p=Math.sin(f),x=v.x,y=v.y;this.constraints[m].axisA.set(g*x-p*y,p*x+g*y,0)},h.prototype.setMotorSpeed=function(f,m){var v=this.constraints[m];v.enableMotor(),v.motorTargetVelocity=f},h.prototype.disableMotor=function(f){var m=this.constraints[f];m.disableMotor()};var u=new l;h.prototype.setWheelForce=function(f,m){this.wheelForces[m]=f},h.prototype.applyWheelForce=function(f,m){var v=this.wheelAxes[m],g=this.wheelBodies[m],p=g.torque;v.scale(f,u),g.vectorToWorldFrame(u,u),p.vadd(u,p)},h.prototype.addToWorld=function(f){for(var m=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),g=0;g<v.length;g++)f.add(v[g]);for(var g=0;g<m.length;g++)f.addConstraint(m[g]);f.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var f=this.wheelForces,m=0;m<f.length;m++)this.applyWheelForce(f[m],m)},h.prototype.removeFromWorld=function(f){for(var m=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),g=0;g<v.length;g++)f.remove(v[g]);for(var g=0;g<m.length;g++)f.removeConstraint(m[g])};var d=new l;h.prototype.getWheelSpeed=function(f){var m=this.wheelAxes[f],v=this.wheelBodies[f],g=v.angularVelocity;return this.chassisBody.vectorToWorldFrame(m,d),g.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,i){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(m){this.particles.push(m),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(m){var v=this.particles.indexOf(m);v!==-1&&(this.particles.splice(v,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new r;s.prototype.getNeighbors=function(m,v){for(var g=this.particles.length,p=m.id,x=this.smoothingRadius*this.smoothingRadius,y=a,_=0;_!==g;_++){var E=this.particles[_];E.position.vsub(m.position,y),p!==E.id&&y.norm2()<x&&v.push(E)}};var l=new r,c=new r,h=new r,u=new r,d=new r,f=new r;s.prototype.update=function(){for(var m=this.particles.length,v=l,g=this.speedOfSound,p=this.eps,x=0;x!==m;x++){var y=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(y,_),_.push(this.particles[x]);for(var E=_.length,A=0,R=0;R!==E;R++){y.position.vsub(_[R].position,v);var b=v.norm(),S=this.w(b);A+=_[R].mass*S}this.densities[x]=A,this.pressures[x]=g*g*(this.densities[x]-this.density)}for(var M=c,w=h,F=u,N=d,V=f,x=0;x!==m;x++){var H=this.particles[x];M.set(0,0,0),w.set(0,0,0);for(var Y,B,_=this.neighbors[x],E=_.length,R=0;R!==E;R++){var L=_[R];H.position.vsub(L.position,N);var tt=N.norm();Y=-L.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+p)+this.pressures[R]/(this.densities[R]*this.densities[R]+p)),this.gradw(N,F),F.mult(Y,F),M.vadd(F,M),L.velocity.vsub(H.velocity,V),V.mult(1/(1e-4+this.densities[x]*this.densities[R])*this.viscosity*L.mass,V),B=this.nablaw(tt),V.mult(B,V),w.vadd(V,w)}w.mult(H.mass,w),M.mult(H.mass,M),H.force.vadd(w,H.force),H.force.vadd(M,H.force)}},s.prototype.w=function(m){var v=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(v,9))*Math.pow(v*v-m*m,3)},s.prototype.gradw=function(m,v){var g=m.norm(),p=this.smoothingRadius;m.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-g*g,2),v)},s.prototype.nablaw=function(m){var v=this.smoothingRadius,g=945/(32*Math.PI*Math.pow(v,9))*(v*v-m*m)*(7*m*m-3*v*v);return g}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,i){var r=e("../math/Vec3");n.exports=s;function s(x,y,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}s.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},s.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},s.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},s.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var a=new r,l=new r,c=new r,h=new r,u=new r,d=new r,f=new r,m=new r,v=new r,g=new r,p=new r;s.prototype.applyForce=function(){var x=this.stiffness,y=this.damping,_=this.restLength,E=this.bodyA,A=this.bodyB,R=a,b=l,S=c,M=h,w=p,F=u,N=d,V=f,H=m,Y=v,B=g;this.getWorldAnchorA(F),this.getWorldAnchorB(N),F.vsub(E.position,V),N.vsub(A.position,H),N.vsub(F,R);var L=R.norm();b.copy(R),b.normalize(),A.velocity.vsub(E.velocity,S),A.angularVelocity.cross(H,w),S.vadd(w,S),E.angularVelocity.cross(V,w),S.vsub(w,S),b.mult(-x*(L-_)-y*S.dot(b),M),E.force.vsub(M,E.force),A.force.vadd(M,A.force),V.cross(M,Y),H.cross(M,B),E.torque.vsub(Y,E.torque),A.torque.vadd(B,A.torque)}},{"../math/Vec3":30}],36:[function(e,n,i){var r=e("../math/Vec3"),s=e("../math/Transform"),a=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=c;function c(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new s,this.isInContact=!1}var u=new r,h=new r,u=new r;c.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var m=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,u);var v=f.hitNormalWorld.dot(u);if(m>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var g=-1/m;this.suspensionRelativeVelocity=v*g,this.clippedInvContactDotSuspension=g}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3"),a=e("./ConvexPolyhedron");function l(u){r.call(this),this.type=r.types.BOX,this.halfExtents=u,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var u=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,m=s,v=[new m(-u,-d,-f),new m(u,-d,-f),new m(u,d,-f),new m(-u,d,-f),new m(-u,-d,f),new m(u,-d,f),new m(u,d,f),new m(-u,d,f)],g=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new m(0,0,1),new m(0,1,0),new m(1,0,0);var p=new a(v,g);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(u,d){return d=d||new s,l.calculateInertia(this.halfExtents,u,d),d},l.calculateInertia=function(u,d,f){var m=u;f.x=1/12*d*(2*m.y*2*m.y+2*m.z*2*m.z),f.y=1/12*d*(2*m.x*2*m.x+2*m.z*2*m.z),f.z=1/12*d*(2*m.y*2*m.y+2*m.x*2*m.x)},l.prototype.getSideNormals=function(u,d){var f=u,m=this.halfExtents;if(f[0].set(m.x,0,0),f[1].set(0,m.y,0),f[2].set(0,0,m.z),f[3].set(-m.x,0,0),f[4].set(0,-m.y,0),f[5].set(0,0,-m.z),d!==void 0)for(var v=0;v!==f.length;v++)d.vmult(f[v],f[v]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var c=new s;new s,l.prototype.forEachWorldCorner=function(u,d,f){for(var m=this.halfExtents,v=[[m.x,m.y,m.z],[-m.x,m.y,m.z],[-m.x,-m.y,m.z],[-m.x,-m.y,-m.z],[m.x,-m.y,-m.z],[m.x,m.y,-m.z],[-m.x,m.y,-m.z],[m.x,-m.y,m.z]],g=0;g<v.length;g++)c.set(v[g][0],v[g][1],v[g][2]),d.vmult(c,c),u.vadd(c,c),f(c.x,c.y,c.z)};var h=[new s,new s,new s,new s,new s,new s,new s,new s];l.prototype.calculateWorldAABB=function(u,d,f,m){var v=this.halfExtents;h[0].set(v.x,v.y,v.z),h[1].set(-v.x,v.y,v.z),h[2].set(-v.x,-v.y,v.z),h[3].set(-v.x,-v.y,-v.z),h[4].set(v.x,-v.y,-v.z),h[5].set(v.x,v.y,-v.z),h[6].set(-v.x,v.y,-v.z),h[7].set(v.x,-v.y,v.z);var g=h[0];d.vmult(g,g),u.vadd(g,g),m.copy(g),f.copy(g);for(var p=1;p<8;p++){var g=h[p];d.vmult(g,g),u.vadd(g,g);var x=g.x,y=g.y,_=g.z;x>m.x&&(m.x=x),y>m.y&&(m.y=y),_>m.z&&(m.z=_),x<f.x&&(f.x=x),y<f.y&&(f.y=y),_<f.z&&(f.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform");function l(O,K,z){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=O||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=K||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=z?z.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var c=new s;l.prototype.computeEdges=function(){var O=this.faces,K=this.vertices;K.length;var z=this.uniqueEdges;z.length=0;for(var P=c,I=0;I!==O.length;I++)for(var G=O[I],Q=G.length,nt=0;nt!==Q;nt++){var X=(nt+1)%Q;K[G[nt]].vsub(K[G[X]],P),P.normalize();for(var rt=!1,mt=0;mt!==z.length;mt++)if(z[mt].almostEquals(P)||z[mt].almostEquals(P)){rt=!0;break}rt||z.push(P.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var O=0;O<this.faces.length;O++){for(var K=0;K<this.faces[O].length;K++)if(!this.vertices[this.faces[O][K]])throw new Error("Vertex "+this.faces[O][K]+" not found!");var z=this.faceNormals[O]||new s;this.getFaceNormal(O,z),z.negate(z),this.faceNormals[O]=z;var P=this.vertices[this.faces[O][0]];if(z.dot(P)<0){console.error(".faceNormals["+O+"] = Vec3("+z.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var K=0;K<this.faces[O].length;K++)console.warn(".vertices["+this.faces[O][K]+"] = Vec3("+this.vertices[this.faces[O][K]].toString()+")")}}};var h=new s,u=new s;l.computeNormal=function(O,K,z,P){K.vsub(O,u),z.vsub(K,h),h.cross(u,P),P.isZero()||P.normalize()},l.prototype.getFaceNormal=function(O,K){var z=this.faces[O],P=this.vertices[z[0]],I=this.vertices[z[1]],G=this.vertices[z[2]];return l.computeNormal(P,I,G,K)};var d=new s;l.prototype.clipAgainstHull=function(O,K,z,P,I,G,Q,nt,X){for(var rt=d,mt=-1,St=-Number.MAX_VALUE,Et=0;Et<z.faces.length;Et++){rt.copy(z.faceNormals[Et]),I.vmult(rt,rt);var U=rt.dot(G);U>St&&(St=U,mt=Et)}for(var ft=[],ut=z.faces[mt],Xt=ut.length,xt=0;xt<Xt;xt++){var ne=z.vertices[ut[xt]],gt=new s;gt.copy(ne),I.vmult(gt,gt),P.vadd(gt,gt),ft.push(gt)}mt>=0&&this.clipFaceAgainstHull(G,O,K,ft,Q,nt,X)};var f=new s,m=new s,v=new s,g=new s,p=new s,x=new s;l.prototype.findSeparatingAxis=function(O,K,z,P,I,G,Q,nt){var X=f,rt=m,mt=v,St=g,Et=p,U=x,ft=Number.MAX_VALUE,ut=this;if(ut.uniqueAxes)for(var xt=0;xt!==ut.uniqueAxes.length;xt++){z.vmult(ut.uniqueAxes[xt],X);var gt=ut.testSepAxis(X,O,K,z,P,I);if(gt===!1)return!1;gt<ft&&(ft=gt,G.copy(X))}else for(var Xt=Q?Q.length:ut.faces.length,xt=0;xt<Xt;xt++){var ne=Q?Q[xt]:xt;X.copy(ut.faceNormals[ne]),z.vmult(X,X);var gt=ut.testSepAxis(X,O,K,z,P,I);if(gt===!1)return!1;gt<ft&&(ft=gt,G.copy(X))}if(O.uniqueAxes)for(var xt=0;xt!==O.uniqueAxes.length;xt++){I.vmult(O.uniqueAxes[xt],rt);var gt=ut.testSepAxis(rt,O,K,z,P,I);if(gt===!1)return!1;gt<ft&&(ft=gt,G.copy(rt))}else for(var D=nt?nt.length:O.faces.length,xt=0;xt<D;xt++){var ne=nt?nt[xt]:xt;rt.copy(O.faceNormals[ne]),I.vmult(rt,rt);var gt=ut.testSepAxis(rt,O,K,z,P,I);if(gt===!1)return!1;gt<ft&&(ft=gt,G.copy(rt))}for(var T=0;T!==ut.uniqueEdges.length;T++){z.vmult(ut.uniqueEdges[T],St);for(var j=0;j!==O.uniqueEdges.length;j++)if(I.vmult(O.uniqueEdges[j],Et),St.cross(Et,U),!U.almostZero()){U.normalize();var ct=ut.testSepAxis(U,O,K,z,P,I);if(ct===!1)return!1;ct<ft&&(ft=ct,G.copy(U))}}return P.vsub(K,mt),mt.dot(G)>0&&G.negate(G),!0};var y=[],_=[];l.prototype.testSepAxis=function(O,K,z,P,I,G){var Q=this;l.project(Q,O,z,P,y),l.project(K,O,I,G,_);var nt=y[0],X=y[1],rt=_[0],mt=_[1],St=nt-mt,Et=rt-X,U=St<Et?St:Et;return U};var E=new s,A=new s;l.prototype.calculateLocalInertia=function(O,K){this.computeLocalAABB(E,A);var z=A.x-E.x,P=A.y-E.y,I=A.z-E.z;K.x=1/12*O*(2*P*2*P+2*I*2*I),K.y=1/12*O*(2*z*2*z+2*I*2*I),K.z=1/12*O*(2*P*2*P+2*z*2*z)},l.prototype.getPlaneConstantOfFace=function(O){var K=this.faces[O],z=this.faceNormals[O],P=this.vertices[K[0]],I=-z.dot(P);return I};var R=new s,b=new s,S=new s,M=new s,w=new s,F=new s,N=new s,V=new s;l.prototype.clipFaceAgainstHull=function(O,K,z,P,I,G,Q){for(var nt=R,X=b,rt=S,mt=M,St=w,Et=F,U=N,ft=V,ut=this,Xt=[],xt=P,ne=Xt,gt=-1,D=Number.MAX_VALUE,T=0;T<ut.faces.length;T++){nt.copy(ut.faceNormals[T]),z.vmult(nt,nt);var j=nt.dot(O);j<D&&(D=j,gt=T)}if(!(gt<0)){var ct=ut.faces[gt];ct.connectedFaces=[];for(var ht=0;ht<ut.faces.length;ht++)for(var at=0;at<ut.faces[ht].length;at++)ct.indexOf(ut.faces[ht][at])!==-1&&ht!==gt&&ct.connectedFaces.indexOf(ht)===-1&&ct.connectedFaces.push(ht);xt.length;for(var wt=ct.length,At=0;At<wt;At++){var Ut=ut.vertices[ct[At]],ce=ut.vertices[ct[(At+1)%wt]];Ut.vsub(ce,X),rt.copy(X),z.vmult(rt,rt),K.vadd(rt,rt),mt.copy(this.faceNormals[gt]),z.vmult(mt,mt),K.vadd(mt,mt),rt.cross(mt,St),St.negate(St),Et.copy(Ut),z.vmult(Et,Et),K.vadd(Et,Et),-Et.dot(St);var $t;{var Mt=ct.connectedFaces[At];U.copy(this.faceNormals[Mt]);var Gt=this.getPlaneConstantOfFace(Mt);ft.copy(U),z.vmult(ft,ft);var $t=Gt-ft.dot(K)}for(this.clipFaceAgainstPlane(xt,ne,ft,$t);xt.length;)xt.shift();for(;ne.length;)xt.push(ne.shift())}U.copy(this.faceNormals[gt]);var Gt=this.getPlaneConstantOfFace(gt);ft.copy(U),z.vmult(ft,ft);for(var $t=Gt-ft.dot(K),ht=0;ht<xt.length;ht++){var Kt=ft.dot(xt[ht])+$t;if(Kt<=I&&(console.log("clamped: depth="+Kt+" to minDist="+(I+"")),Kt=I),Kt<=G){var Wt=xt[ht];if(Kt<=0){var he={point:Wt,normal:ft,depth:Kt};Q.push(he)}}}}},l.prototype.clipFaceAgainstPlane=function(O,K,z,P){var I,G,Q=O.length;if(Q<2)return K;var nt=O[O.length-1],X=O[0];I=z.dot(nt)+P;for(var rt=0;rt<Q;rt++){if(X=O[rt],G=z.dot(X)+P,I<0)if(G<0){var mt=new s;mt.copy(X),K.push(mt)}else{var mt=new s;nt.lerp(X,I/(I-G),mt),K.push(mt)}else if(G<0){var mt=new s;nt.lerp(X,I/(I-G),mt),K.push(mt),K.push(X)}nt=X,I=G}return K},l.prototype.computeWorldVertices=function(O,K){for(var z=this.vertices.length;this.worldVertices.length<z;)this.worldVertices.push(new s);for(var P=this.vertices,I=this.worldVertices,G=0;G!==z;G++)K.vmult(P[G],I[G]),O.vadd(I[G],I[G]);this.worldVerticesNeedsUpdate=!1},new s,l.prototype.computeLocalAABB=function(O,K){var z=this.vertices.length,P=this.vertices;O.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),K.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var I=0;I<z;I++){var G=P[I];G.x<O.x?O.x=G.x:G.x>K.x&&(K.x=G.x),G.y<O.y?O.y=G.y:G.y>K.y&&(K.y=G.y),G.z<O.z?O.z=G.z:G.z>K.z&&(K.z=G.z)}},l.prototype.computeWorldFaceNormals=function(O){for(var K=this.faceNormals.length;this.worldFaceNormals.length<K;)this.worldFaceNormals.push(new s);for(var z=this.faceNormals,P=this.worldFaceNormals,I=0;I!==K;I++)O.vmult(z[I],P[I]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var O=0,K=this.vertices,z=0,P=K.length;z!==P;z++){var I=K[z].norm2();I>O&&(O=I)}this.boundingSphereRadius=Math.sqrt(O)};var H=new s;l.prototype.calculateWorldAABB=function(O,K,z,P){for(var I=this.vertices.length,G=this.vertices,Q,nt,X,rt,mt,St,Et=0;Et<I;Et++){H.copy(G[Et]),K.vmult(H,H),O.vadd(H,H);var U=H;U.x<Q||Q===void 0?Q=U.x:(U.x>rt||rt===void 0)&&(rt=U.x),U.y<nt||nt===void 0?nt=U.y:(U.y>mt||mt===void 0)&&(mt=U.y),U.z<X||X===void 0?X=U.z:(U.z>St||St===void 0)&&(St=U.z)}z.set(Q,nt,X),P.set(rt,mt,St)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(O){O=O||new s;for(var K=this.vertices.length,z=this.vertices,P=0;P<K;P++)O.vadd(z[P],O);return O.mult(1/K,O),O},l.prototype.transformAllPoints=function(O,K){var z=this.vertices.length,P=this.vertices;if(K){for(var I=0;I<z;I++){var G=P[I];K.vmult(G,G)}for(var I=0;I<this.faceNormals.length;I++){var G=this.faceNormals[I];K.vmult(G,G)}}if(O)for(var I=0;I<z;I++){var G=P[I];G.vadd(O,G)}};var Y=new s,B=new s,L=new s;l.prototype.pointIsInside=function(O){var K=this.vertices.length,z=this.vertices,P=this.faces,I=this.faceNormals,G=null,Q=this.faces.length,nt=Y;this.getAveragePointLocal(nt);for(var X=0;X<Q;X++){this.faces[X].length;var K=I[X],rt=z[P[X][0]],mt=B;O.vsub(rt,mt);var St=K.dot(mt),Et=L;nt.vsub(rt,Et);var U=K.dot(Et);if(St<0&&U>0||St>0&&U<0)return!1}return G?1:-1},new s;var tt=new s,J=new s;l.project=function(O,K,z,P,I){var G=O.vertices.length,Q=tt,nt=0,X=0,rt=J,mt=O.vertices;rt.setZero(),a.vectorToLocalFrame(z,P,K,Q),a.pointToLocalFrame(z,P,rt,rt);var St=rt.dot(Q);X=nt=mt[0].dot(Q);for(var Et=1;Et<G;Et++){var U=mt[Et].dot(Q);U>nt&&(nt=U),U<X&&(X=U)}if(X-=St,nt-=St,X>nt){var ft=X;X=nt,nt=ft}I[0]=nt,I[1]=X}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var a=e("./ConvexPolyhedron");function l(c,h,u,d){var f=d,m=[],v=[],g=[],p=[],x=[],y=Math.cos,_=Math.sin;m.push(new s(h*y(0),h*_(0),-u*.5)),p.push(0),m.push(new s(c*y(0),c*_(0),u*.5)),x.push(1);for(var E=0;E<f;E++){var A=2*Math.PI/f*(E+1),R=2*Math.PI/f*(E+.5);E<f-1?(m.push(new s(h*y(A),h*_(A),-u*.5)),p.push(2*E+2),m.push(new s(c*y(A),c*_(A),u*.5)),x.push(2*E+3),g.push([2*E+2,2*E+3,2*E+1,2*E])):g.push([0,1,2*E+1,2*E]),(f%2===1||E<f/2)&&v.push(new s(y(R),_(R),0))}g.push(x),v.push(new s(0,0,1));for(var b=[],E=0;E<p.length;E++)b.push(p[p.length-E-1]);g.push(b),this.type=r.types.CONVEXPOLYHEDRON,a.call(this,m,g,v)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,i){var r=e("./Shape"),s=e("./ConvexPolyhedron"),a=e("../math/Vec3"),l=e("../utils/Utils");n.exports=c;function c(h,u){u=l.defaults(u,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=u.maxValue,this.minValue=u.minValue,this.elementSize=u.elementSize,u.minValue===null&&this.updateMinValue(),u.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new a,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}c.prototype=new r,c.prototype.update=function(){this._cachedPillars={}},c.prototype.updateMinValue=function(){for(var h=this.data,u=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var m=h[d][f];m<u&&(u=m)}this.minValue=u},c.prototype.updateMaxValue=function(){for(var h=this.data,u=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var m=h[d][f];m>u&&(u=m)}this.maxValue=u},c.prototype.setHeightValueAtIndex=function(h,u,d){var f=this.data;f[h][u]=d,this.clearCachedConvexTrianglePillar(h,u,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,u,!0),this.clearCachedConvexTrianglePillar(h-1,u,!1)),u>0&&(this.clearCachedConvexTrianglePillar(h,u-1,!0),this.clearCachedConvexTrianglePillar(h,u-1,!1)),u>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,u-1,!0)},c.prototype.getRectMinMax=function(h,u,d,f,m){m=m||[];for(var v=this.data,g=this.minValue,p=h;p<=d;p++)for(var x=u;x<=f;x++){var y=v[p][x];y>g&&(g=y)}m[0]=this.minValue,m[1]=g},c.prototype.getIndexOfPosition=function(h,u,d,f){var m=this.elementSize,v=this.data,g=Math.floor(h/m),p=Math.floor(u/m);return d[0]=g,d[1]=p,f&&(g<0&&(g=0),p<0&&(p=0),g>=v.length-1&&(g=v.length-1),p>=v[0].length-1&&(p=v[0].length-1)),!(g<0||p<0||g>=v.length-1||p>=v[0].length-1)},c.prototype.getHeightAt=function(h,u,d){var f=[];this.getIndexOfPosition(h,u,f,d);var m=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,m),(m[0]+m[1])/2},c.prototype.getCacheConvexTrianglePillarKey=function(h,u,d){return h+"_"+u+"_"+(d?1:0)},c.prototype.getCachedConvexTrianglePillar=function(h,u,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,u,d)]},c.prototype.setCachedConvexTrianglePillar=function(h,u,d,f,m){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,u,d)]={convex:f,offset:m}},c.prototype.clearCachedConvexTrianglePillar=function(h,u,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,u,d)]},c.prototype.getConvexTrianglePillar=function(h,u,d){var f=this.pillarConvex,m=this.pillarOffset;if(this.cacheEnabled){var v=this.getCachedConvexTrianglePillar(h,u,d);if(v){this.pillarConvex=v.convex,this.pillarOffset=v.offset;return}f=new s,m=new a,this.pillarConvex=f,this.pillarOffset=m}var v=this.data,g=this.elementSize,p=f.faces;f.vertices.length=6;for(var x=0;x<6;x++)f.vertices[x]||(f.vertices[x]=new a);p.length=5;for(var x=0;x<5;x++)p[x]||(p[x]=[]);var y=f.vertices,_=(Math.min(v[h][u],v[h+1][u],v[h][u+1],v[h+1][u+1])-this.minValue)/2+this.minValue;d?(m.set((h+.75)*g,(u+.75)*g,_),y[0].set(.25*g,.25*g,v[h+1][u+1]-_),y[1].set(-.75*g,.25*g,v[h][u+1]-_),y[2].set(.25*g,-.75*g,v[h+1][u]-_),y[3].set(.25*g,.25*g,-_-1),y[4].set(-.75*g,.25*g,-_-1),y[5].set(.25*g,-.75*g,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(m.set((h+.25)*g,(u+.25)*g,_),y[0].set(-.25*g,-.25*g,v[h][u]-_),y[1].set(.75*g,-.25*g,v[h+1][u]-_),y[2].set(-.25*g,.75*g,v[h][u+1]-_),y[3].set(-.25*g,-.25*g,-_-1),y[4].set(.75*g,-.25*g,-_-1),y[5].set(-.25*g,.75*g,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,u,d,f,m)},c.prototype.calculateLocalInertia=function(h,u){return u=u||new a,u.set(0,0,0),u},c.prototype.volume=function(){return Number.MAX_VALUE},c.prototype.calculateWorldAABB=function(h,u,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},c.prototype.updateBoundingSphereRadius=function(){var h=this.data,u=this.elementSize;this.boundingSphereRadius=new a(h.length*u,h[0].length*u,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,i){n.exports=a;var r=e("./Shape"),s=e("../math/Vec3");function a(){r.call(this),this.type=r.types.PARTICLE}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,c){return c=c||new s,c.set(0,0,0),c},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,c,h,u){h.copy(l),u.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,i){n.exports=a;var r=e("./Shape"),s=e("../math/Vec3");function a(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new r,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(c){var h=this.worldNormal;h.set(0,0,1),c.vmult(h,h),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(c,h){return h=h||new s,h},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new s;a.prototype.calculateWorldAABB=function(c,h,u,d){l.set(0,0,1),h.vmult(l,l);var f=Number.MAX_VALUE;u.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=c.x),l.y===1&&(d.y=c.y),l.z===1&&(d.z=c.z),l.x===-1&&(u.x=c.x),l.y===-1&&(u.y=c.y),l.z===-1&&(u.z=c.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,i){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,i){n.exports=a;var r=e("./Shape"),s=e("../math/Vec3");function a(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,c){c=c||new s;var h=2*l*this.radius*this.radius/5;return c.x=h,c.y=h,c.z=h,c},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,c,h,u){for(var d=this.radius,f=["x","y","z"],m=0;m<f.length;m++){var v=f[m];h[v]=l[v]-d,u[v]=l[v]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,i){n.exports=h;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform"),l=e("../collision/AABB"),c=e("../utils/Octree");function h(b,S){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(b),this.indices=new Int16Array(S),this.normals=new Float32Array(S.length),this.aabb=new l,this.edges=null,this.scale=new s(1,1,1),this.tree=new c,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var u=new s;h.prototype.updateTree=function(){var b=this.tree;b.reset(),b.aabb.copy(this.aabb);var S=this.scale;b.aabb.lowerBound.x*=1/S.x,b.aabb.lowerBound.y*=1/S.y,b.aabb.lowerBound.z*=1/S.z,b.aabb.upperBound.x*=1/S.x,b.aabb.upperBound.y*=1/S.y,b.aabb.upperBound.z*=1/S.z;for(var M=new l,w=new s,F=new s,N=new s,V=[w,F,N],H=0;H<this.indices.length/3;H++){var Y=H*3;this._getUnscaledVertex(this.indices[Y],w),this._getUnscaledVertex(this.indices[Y+1],F),this._getUnscaledVertex(this.indices[Y+2],N),M.setFromPoints(V),b.insert(M,H)}b.removeEmptyNodes()};var d=new l;h.prototype.getTrianglesInAABB=function(b,S){d.copy(b);var M=this.scale,w=M.x,F=M.y,N=M.z,V=d.lowerBound,H=d.upperBound;return V.x/=w,V.y/=F,V.z/=N,H.x/=w,H.y/=F,H.z/=N,this.tree.aabbQuery(d,S)},h.prototype.setScale=function(b){var S=this.scale.x===this.scale.y===this.scale.z,M=b.x===b.y===b.z;S&&M||this.updateNormals(),this.scale.copy(b),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var b=u,S=this.normals,M=0;M<this.indices.length/3;M++){var w=M*3,F=this.indices[w],N=this.indices[w+1],V=this.indices[w+2];this.getVertex(F,p),this.getVertex(N,x),this.getVertex(V,y),h.computeNormal(x,p,y,b),S[w]=b.x,S[w+1]=b.y,S[w+2]=b.z}},h.prototype.updateEdges=function(){for(var b={},S=function(Y,B){var L=F<N?F+"_"+N:N+"_"+F;b[L]=!0},M=0;M<this.indices.length/3;M++){var w=M*3,F=this.indices[w],N=this.indices[w+1];this.indices[w+2],S(),S(),S()}var V=Object.keys(b);this.edges=new Int16Array(V.length*2);for(var M=0;M<V.length;M++){var H=V[M].split("_");this.edges[2*M]=parseInt(H[0],10),this.edges[2*M+1]=parseInt(H[1],10)}},h.prototype.getEdgeVertex=function(b,S,M){var w=this.edges[b*2+(S?1:0)];this.getVertex(w,M)};var f=new s,m=new s;h.prototype.getEdgeVector=function(b,S){var M=f,w=m;this.getEdgeVertex(b,0,M),this.getEdgeVertex(b,1,w),w.vsub(M,S)};var v=new s,g=new s;h.computeNormal=function(b,S,M,w){S.vsub(b,g),M.vsub(S,v),v.cross(g,w),w.isZero()||w.normalize()};var p=new s,x=new s,y=new s;h.prototype.getVertex=function(b,S){var M=this.scale;return this._getUnscaledVertex(b,S),S.x*=M.x,S.y*=M.y,S.z*=M.z,S},h.prototype._getUnscaledVertex=function(b,S){var M=b*3,w=this.vertices;return S.set(w[M],w[M+1],w[M+2])},h.prototype.getWorldVertex=function(b,S,M,w){return this.getVertex(b,w),a.pointToWorldFrame(S,M,w,w),w},h.prototype.getTriangleVertices=function(b,S,M,w){var F=b*3;this.getVertex(this.indices[F],S),this.getVertex(this.indices[F+1],M),this.getVertex(this.indices[F+2],w)},h.prototype.getNormal=function(b,S){var M=b*3;return S.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var _=new l;h.prototype.calculateLocalInertia=function(b,S){this.computeLocalAABB(_);var M=_.upperBound.x-_.lowerBound.x,w=_.upperBound.y-_.lowerBound.y,F=_.upperBound.z-_.lowerBound.z;return S.set(1/12*b*(2*w*2*w+2*F*2*F),1/12*b*(2*M*2*M+2*F*2*F),1/12*b*(2*w*2*w+2*M*2*M))};var E=new s;h.prototype.computeLocalAABB=function(b){var S=b.lowerBound,M=b.upperBound,w=this.vertices.length;this.vertices;var F=E;this.getVertex(0,F),S.copy(F),M.copy(F);for(var N=0;N!==w;N++)this.getVertex(N,F),F.x<S.x?S.x=F.x:F.x>M.x&&(M.x=F.x),F.y<S.y?S.y=F.y:F.y>M.y&&(M.y=F.y),F.z<S.z?S.z=F.z:F.z>M.z&&(M.z=F.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var b=0,S=this.vertices,M=new s,w=0,F=S.length/3;w!==F;w++){this.getVertex(w,M);var N=M.norm2();N>b&&(b=N)}this.boundingSphereRadius=Math.sqrt(b)},new s;var A=new a,R=new l;h.prototype.calculateWorldAABB=function(b,S,M,w){var F=A,N=R;F.position=b,F.quaternion=S,this.aabb.toWorldFrame(F,N),M.copy(N.lowerBound),w.copy(N.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(b,S,M,w,F){b=b||1,S=S||.5,M=M||8,w=w||6,F=F||Math.PI*2;for(var N=[],V=[],H=0;H<=M;H++)for(var Y=0;Y<=w;Y++){var B=Y/w*F,L=H/M*Math.PI*2,tt=(b+S*Math.cos(L))*Math.cos(B),J=(b+S*Math.cos(L))*Math.sin(B),O=S*Math.sin(L);N.push(tt,J,O)}for(var H=1;H<=M;H++)for(var Y=1;Y<=w;Y++){var K=(w+1)*H+Y-1,z=(w+1)*(H-1)+Y-1,P=(w+1)*(H-1)+Y,I=(w+1)*H+Y;V.push(K,z,I),V.push(z,P,I)}return new h(N,V)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,i){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var a=[],l=[],c=[];s.prototype.solve=function(h,u){var d=0,f=this.iterations,m=this.tolerance*this.tolerance,v=this.equations,g=v.length,p=u.bodies,x=p.length,y=h,_,E,A,R,b,S;if(g!==0)for(var M=0;M!==x;M++)p[M].updateSolveMassProperties();var w=l,F=c,N=a;w.length=g,F.length=g,N.length=g;for(var M=0;M!==g;M++){var V=v[M];N[M]=0,F[M]=V.computeB(y),w[M]=1/V.computeC()}if(g!==0){for(var M=0;M!==x;M++){var H=p[M],Y=H.vlambda,B=H.wlambda;Y.set(0,0,0),B&&B.set(0,0,0)}for(d=0;d!==f;d++){R=0;for(var L=0;L!==g;L++){var V=v[L];_=F[L],E=w[L],S=N[L],b=V.computeGWlambda(),A=E*(_-b-V.eps*S),S+A<V.minForce?A=V.minForce-S:S+A>V.maxForce&&(A=V.maxForce-S),N[L]+=A,R+=A>0?A:-A,V.addToWlambda(A)}if(R*R<m)break}for(var M=0;M!==x;M++){var H=p[M],tt=H.velocity,J=H.angularVelocity;tt.vadd(H.vlambda,tt),J&&J.vadd(H.wlambda,J)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,a){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var a=this.equations,l=a.indexOf(s);l!==-1&&a.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,i){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function a(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new r;var l=[],c=[],h={bodies:[]},u=s.STATIC;function d(p){for(var x=p.length,y=0;y!==x;y++){var _=p[y];if(!_.visited&&!(_.body.type&u))return _}return!1}var f=[];function m(p,x,y,_){for(f.push(p),p.visited=!0,x(p,y,_);f.length;)for(var E=f.pop(),A;A=d(E.children);)A.visited=!0,x(A,y,_),f.push(A)}function v(p,x,y){x.push(p.body);for(var _=p.eqs.length,E=0;E!==_;E++){var A=p.eqs[E];y.indexOf(A)===-1&&y.push(A)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(p,x){for(var y=l,_=this.nodePool,E=x.bodies,A=this.equations,R=A.length,b=E.length,S=this.subsolver;_.length<b;)_.push(this.createNode());y.length=b;for(var M=0;M<b;M++)y[M]=_[M];for(var M=0;M!==b;M++){var w=y[M];w.body=E[M],w.children.length=0,w.eqs.length=0,w.visited=!1}for(var F=0;F!==R;F++){var N=A[F],M=E.indexOf(N.bi),V=E.indexOf(N.bj),H=y[M],Y=y[V];H.children.push(Y),H.eqs.push(N),Y.children.push(H),Y.eqs.push(N)}var B,L=0,tt=c;S.tolerance=this.tolerance,S.iterations=this.iterations;for(var J=h;B=d(y);){tt.length=0,J.bodies.length=0,m(B,v,J.bodies,tt);var O=tt.length;tt=tt.sort(g);for(var M=0;M!==O;M++)S.addEquation(tt[M]);S.solve(p,J),S.removeAllEquations(),L++}return L};function g(p,x){return x.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[s]===void 0&&(l[s]=[]),l[s].indexOf(a)===-1&&l[s].push(a),this},hasEventListener:function(s,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[s]!==void 0&&l[s].indexOf(a)!==-1},removeEventListener:function(s,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[s]===void 0)return this;var c=l[s].indexOf(a);return c!==-1&&l[s].splice(c,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var a=this._listeners,l=a[s.type];if(l!==void 0){s.target=this;for(var c=0,h=l.length;c<h;c++)l[c].call(this,s)}return this}}},{}],50:[function(e,n,i){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=l;function a(u){u=u||{},this.root=u.root||null,this.aabb=u.aabb?u.aabb.clone():new r,this.data=[],this.children=[]}function l(u,d){d=d||{},d.root=null,d.aabb=u,a.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new a,a.prototype.reset=function(u,d){this.children.length=this.data.length=0},a.prototype.insert=function(u,d,f){var m=this.data;if(f=f||0,!this.aabb.contains(u))return!1;var v=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var g=!1;v.length||(this.subdivide(),g=!0);for(var p=0;p!==8;p++)if(v[p].insert(u,d,f+1))return!0;g&&(v.length=0)}return m.push(d),!0};var c=new s;a.prototype.subdivide=function(){var u=this.aabb,d=u.lowerBound,f=u.upperBound,m=this.children;m.push(new a({aabb:new r({lowerBound:new s(0,0,0)})}),new a({aabb:new r({lowerBound:new s(1,0,0)})}),new a({aabb:new r({lowerBound:new s(1,1,0)})}),new a({aabb:new r({lowerBound:new s(1,1,1)})}),new a({aabb:new r({lowerBound:new s(0,1,1)})}),new a({aabb:new r({lowerBound:new s(0,0,1)})}),new a({aabb:new r({lowerBound:new s(1,0,1)})}),new a({aabb:new r({lowerBound:new s(0,1,0)})})),f.vsub(d,c),c.scale(.5,c);for(var v=this.root||this,g=0;g!==8;g++){var p=m[g];p.root=v;var x=p.aabb.lowerBound;x.x*=c.x,x.y*=c.y,x.z*=c.z,x.vadd(d,x),x.vadd(c,p.aabb.upperBound)}},a.prototype.aabbQuery=function(u,d){this.data,this.children;for(var f=[this];f.length;){var m=f.pop();m.aabb.overlaps(u)&&Array.prototype.push.apply(d,m.data),Array.prototype.push.apply(f,m.children)}return d};var h=new r;a.prototype.rayQuery=function(u,d,f){return u.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,f),f},a.prototype.removeEmptyNodes=function(){for(var u=[this];u.length;){for(var d=u.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(u,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,a=0;a!==s;a++)this.objects.push(arguments[a])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,a){if(s>a){var l=a;a=s,s=l}return this.data[s+"-"+a]},r.prototype.set=function(s,a,l){if(s>a){var c=a;a=s,s=c}var h=s+"-"+a;this.get(s,a)||this.data.keys.push(h),this.data[h]=l},r.prototype.reset=function(){for(var s=this.data,a=s.keys;a.length>0;){var l=a.pop();delete s[l]}}},{}],53:[function(e,n,i){function r(){}n.exports=r,r.defaults=function(s,a){s=s||{};for(var l in a)l in s||(s[l]=a[l]);return s}},{}],54:[function(e,n,i){n.exports=a;var r=e("../math/Vec3"),s=e("./Pool");function a(){s.call(this),this.type=r}a.prototype=new s,a.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,i){n.exports=m;var r=e("../collision/AABB"),s=e("../shapes/Shape"),a=e("../collision/Ray"),l=e("../math/Vec3"),c=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var u=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function m(ot){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new u,this.world=ot,this.currentContactMaterial=null,this.enableFrictionReduction=!1}m.prototype.createContactEquation=function(ot,dt,vt,_t,Qt,Bt){var Tt;this.contactPointPool.length?(Tt=this.contactPointPool.pop(),Tt.bi=ot,Tt.bj=dt):Tt=new d(ot,dt),Tt.enabled=ot.collisionResponse&&dt.collisionResponse&&vt.collisionResponse&&_t.collisionResponse;var Nt=this.currentContactMaterial;Tt.restitution=Nt.restitution,Tt.setSpookParams(Nt.contactEquationStiffness,Nt.contactEquationRelaxation,this.world.dt);var it=vt.material||ot.material,Rt=_t.material||dt.material;return it&&Rt&&it.restitution>=0&&Rt.restitution>=0&&(Tt.restitution=it.restitution*Rt.restitution),Tt.si=Qt||vt,Tt.sj=Bt||_t,Tt},m.prototype.createFrictionEquationsFromContact=function(ot,dt){var vt=ot.bi,_t=ot.bj,Qt=ot.si,Bt=ot.sj,Tt=this.world,Nt=this.currentContactMaterial,it=Nt.friction,Rt=Qt.material||vt.material,Lt=Bt.material||_t.material;if(Rt&&Lt&&Rt.friction>=0&&Lt.friction>=0&&(it=Rt.friction*Lt.friction),it>0){var qt=it*Tt.gravity.length(),Pt=vt.invMass+_t.invMass;Pt>0&&(Pt=1/Pt);var bt=this.frictionEquationPool,Dt=bt.length?bt.pop():new f(vt,_t,qt*Pt),Zt=bt.length?bt.pop():new f(vt,_t,qt*Pt);return Dt.bi=Zt.bi=vt,Dt.bj=Zt.bj=_t,Dt.minForce=Zt.minForce=-qt*Pt,Dt.maxForce=Zt.maxForce=qt*Pt,Dt.ri.copy(ot.ri),Dt.rj.copy(ot.rj),Zt.ri.copy(ot.ri),Zt.rj.copy(ot.rj),ot.ni.tangents(Dt.t,Zt.t),Dt.setSpookParams(Nt.frictionEquationStiffness,Nt.frictionEquationRelaxation,Tt.dt),Zt.setSpookParams(Nt.frictionEquationStiffness,Nt.frictionEquationRelaxation,Tt.dt),Dt.enabled=Zt.enabled=ot.enabled,dt.push(Dt,Zt),!0}return!1};var v=new l,g=new l,p=new l;m.prototype.createFrictionFromAverage=function(ot){var dt=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(dt,this.frictionResult)||ot===1)){var vt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];v.setZero(),g.setZero(),p.setZero();var Qt=dt.bi;dt.bj;for(var Bt=0;Bt!==ot;Bt++)dt=this.result[this.result.length-1-Bt],dt.bodyA!==Qt?(v.vadd(dt.ni,v),g.vadd(dt.ri,g),p.vadd(dt.rj,p)):(v.vsub(dt.ni,v),g.vadd(dt.rj,g),p.vadd(dt.ri,p));var Tt=1/ot;g.scale(Tt,vt.ri),p.scale(Tt,vt.rj),_t.ri.copy(vt.ri),_t.rj.copy(vt.rj),v.normalize(),v.tangents(vt.t,_t.t)}};var x=new l,y=new l,_=new h,E=new h;m.prototype.getContacts=function(ot,dt,vt,_t,Qt,Bt,Tt){this.contactPointPool=Qt,this.frictionEquationPool=Tt,this.result=_t,this.frictionResult=Bt;for(var Nt=_,it=E,Rt=x,Lt=y,qt=0,Pt=ot.length;qt!==Pt;qt++){var bt=ot[qt],Dt=dt[qt],Zt=null;bt.material&&Dt.material&&(Zt=vt.getContactMaterial(bt.material,Dt.material)||null);for(var le=0;le<bt.shapes.length;le++){bt.quaternion.mult(bt.shapeOrientations[le],Nt),bt.quaternion.vmult(bt.shapeOffsets[le],Rt),Rt.vadd(bt.position,Rt);for(var yt=bt.shapes[le],C=0;C<Dt.shapes.length;C++){Dt.quaternion.mult(Dt.shapeOrientations[C],it),Dt.quaternion.vmult(Dt.shapeOffsets[C],Lt),Lt.vadd(Dt.position,Lt);var k=Dt.shapes[C];if(!(Rt.distanceTo(Lt)>yt.boundingSphereRadius+k.boundingSphereRadius)){var et=null;yt.material&&k.material&&(et=vt.getContactMaterial(yt.material,k.material)||null),this.currentContactMaterial=et||Zt||vt.defaultContactMaterial;var Z=this[yt.type|k.type];Z&&(yt.type<k.type?Z.call(this,yt,k,Rt,Lt,Nt,it,bt,Dt,yt,k):Z.call(this,k,yt,Lt,Rt,it,Nt,Dt,bt,yt,k))}}}}},m.prototype[s.types.BOX|s.types.BOX]=m.prototype.boxBox=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){ot.convexPolyhedronRepresentation.material=ot.material,dt.convexPolyhedronRepresentation.material=dt.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.convexConvex(ot.convexPolyhedronRepresentation,dt.convexPolyhedronRepresentation,vt,_t,Qt,Bt,Tt,Nt,ot,dt)},m.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=m.prototype.boxConvex=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexConvex(ot.convexPolyhedronRepresentation,dt,vt,_t,Qt,Bt,Tt,Nt,ot,dt)},m.prototype[s.types.BOX|s.types.PARTICLE]=m.prototype.boxParticle=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexParticle(ot.convexPolyhedronRepresentation,dt,vt,_t,Qt,Bt,Tt,Nt,ot,dt)},m.prototype[s.types.SPHERE]=m.prototype.sphereSphere=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=this.createContactEquation(Tt,Nt,ot,dt);_t.vsub(vt,it.ni),it.ni.normalize(),it.ri.copy(it.ni),it.rj.copy(it.ni),it.ri.mult(ot.radius,it.ri),it.rj.mult(-dt.radius,it.rj),it.ri.vadd(vt,it.ri),it.ri.vsub(Tt.position,it.ri),it.rj.vadd(_t,it.rj),it.rj.vsub(Nt.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)};var A=new l,R=new l,b=new l;m.prototype[s.types.PLANE|s.types.TRIMESH]=m.prototype.planeTrimesh=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=new l,Rt=A;Rt.set(0,0,1),Qt.vmult(Rt,Rt);for(var Lt=0;Lt<dt.vertices.length/3;Lt++){dt.getVertex(Lt,it);var qt=new l;qt.copy(it),c.pointToWorldFrame(_t,Bt,qt,it);var Pt=R;it.vsub(vt,Pt);var bt=Rt.dot(Pt);if(bt<=0){var Dt=this.createContactEquation(Tt,Nt,ot,dt);Dt.ni.copy(Rt);var Zt=b;Rt.scale(Pt.dot(Rt),Zt),it.vsub(Zt,Zt),Dt.ri.copy(Zt),Dt.ri.vsub(Tt.position,Dt.ri),Dt.rj.copy(it),Dt.rj.vsub(Nt.position,Dt.rj),this.result.push(Dt),this.createFrictionEquationsFromContact(Dt,this.frictionResult)}}};var S=new l,M=new l;new l;var w=new l,F=new l,N=new l,V=new l,H=new l,Y=new l,B=new l,L=new l,tt=new l,J=new l,O=new l,K=new r,z=[];m.prototype[s.types.SPHERE|s.types.TRIMESH]=m.prototype.sphereTrimesh=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=N,Rt=V,Lt=H,qt=Y,Pt=B,bt=L,Dt=K,Zt=F,le=M,yt=z;c.pointToLocalFrame(_t,Bt,vt,Pt);var C=ot.radius;Dt.lowerBound.set(Pt.x-C,Pt.y-C,Pt.z-C),Dt.upperBound.set(Pt.x+C,Pt.y+C,Pt.z+C),dt.getTrianglesInAABB(Dt,yt);for(var k=w,et=ot.radius*ot.radius,Z=0;Z<yt.length;Z++)for(var W=0;W<3;W++)if(dt.getVertex(dt.indices[yt[Z]*3+W],k),k.vsub(Pt,le),le.norm2()<=et){Zt.copy(k),c.pointToWorldFrame(_t,Bt,Zt,k),k.vsub(vt,le);var st=this.createContactEquation(Tt,Nt,ot,dt);st.ni.copy(le),st.ni.normalize(),st.ri.copy(st.ni),st.ri.scale(ot.radius,st.ri),st.ri.vadd(vt,st.ri),st.ri.vsub(Tt.position,st.ri),st.rj.copy(k),st.rj.vsub(Nt.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}for(var Z=0;Z<yt.length;Z++)for(var W=0;W<3;W++){dt.getVertex(dt.indices[yt[Z]*3+W],it),dt.getVertex(dt.indices[yt[Z]*3+(W+1)%3],Rt),Rt.vsub(it,Lt),Pt.vsub(Rt,bt);var Ct=bt.dot(Lt);Pt.vsub(it,bt);var zt=bt.dot(Lt);if(zt>0&&Ct<0){Pt.vsub(it,bt),qt.copy(Lt),qt.normalize(),zt=bt.dot(qt),qt.scale(zt,bt),bt.vadd(it,bt);var kt=bt.distanceTo(Pt);if(kt<ot.radius){var st=this.createContactEquation(Tt,Nt,ot,dt);bt.vsub(Pt,st.ni),st.ni.normalize(),st.ni.scale(ot.radius,st.ri),c.pointToWorldFrame(_t,Bt,bt,bt),bt.vsub(Nt.position,st.rj),c.vectorToWorldFrame(Bt,st.ni,st.ni),c.vectorToWorldFrame(Bt,st.ri,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}}for(var te=tt,jt=J,Ft=O,ue=S,Z=0,ee=yt.length;Z!==ee;Z++){dt.getTriangleVertices(yt[Z],te,jt,Ft),dt.getNormal(yt[Z],ue),Pt.vsub(te,bt);var kt=bt.dot(ue);if(ue.scale(kt,bt),Pt.vsub(bt,bt),kt=bt.distanceTo(Pt),a.pointInTriangle(bt,te,jt,Ft)&&kt<ot.radius){var st=this.createContactEquation(Tt,Nt,ot,dt);bt.vsub(Pt,st.ni),st.ni.normalize(),st.ni.scale(ot.radius,st.ri),c.pointToWorldFrame(_t,Bt,bt,bt),bt.vsub(Nt.position,st.rj),c.vectorToWorldFrame(Bt,st.ni,st.ni),c.vectorToWorldFrame(Bt,st.ri,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}yt.length=0};var P=new l,I=new l;m.prototype[s.types.SPHERE|s.types.PLANE]=m.prototype.spherePlane=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=this.createContactEquation(Tt,Nt,ot,dt);if(it.ni.set(0,0,1),Bt.vmult(it.ni,it.ni),it.ni.negate(it.ni),it.ni.normalize(),it.ni.mult(ot.radius,it.ri),vt.vsub(_t,P),it.ni.mult(it.ni.dot(P),I),P.vsub(I,it.rj),-P.dot(it.ni)<=ot.radius){var Rt=it.ri,Lt=it.rj;Rt.vadd(vt,Rt),Rt.vsub(Tt.position,Rt),Lt.vadd(_t,Lt),Lt.vsub(Nt.position,Lt),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}};var G=new l,Q=new l,nt=new l;function X(ot,dt,vt){for(var _t=null,Qt=ot.length,Bt=0;Bt!==Qt;Bt++){var Tt=ot[Bt],Nt=G;ot[(Bt+1)%Qt].vsub(Tt,Nt);var it=Q;Nt.cross(dt,it);var Rt=nt;vt.vsub(Tt,Rt);var Lt=it.dot(Rt);if(_t===null||Lt>0&&_t===!0||Lt<=0&&_t===!1){_t===null&&(_t=Lt>0);continue}else return!1}return!0}var rt=new l,mt=new l,St=new l,Et=new l,U=[new l,new l,new l,new l,new l,new l],ft=new l,ut=new l,Xt=new l,xt=new l;m.prototype[s.types.SPHERE|s.types.BOX]=m.prototype.sphereBox=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=this.v3pool,Rt=U;vt.vsub(_t,rt),dt.getSideNormals(Rt,Bt);for(var Lt=ot.radius,qt=!1,Pt=ut,bt=Xt,Dt=xt,Zt=null,le=0,yt=0,C=0,k=null,et=0,Z=Rt.length;et!==Z&&qt===!1;et++){var W=mt;W.copy(Rt[et]);var st=W.norm();W.normalize();var Ct=rt.dot(W);if(Ct<st+Lt&&Ct>0){var zt=St,kt=Et;zt.copy(Rt[(et+1)%3]),kt.copy(Rt[(et+2)%3]);var te=zt.norm(),jt=kt.norm();zt.normalize(),kt.normalize();var Ft=rt.dot(zt),ue=rt.dot(kt);if(Ft<te&&Ft>-te&&ue<jt&&ue>-jt){var we=Math.abs(Ct-st-Lt);(k===null||we<k)&&(k=we,yt=Ft,C=ue,Zt=st,Pt.copy(W),bt.copy(zt),Dt.copy(kt),le++)}}}if(le){qt=!0;var Jt=this.createContactEquation(Tt,Nt,ot,dt);Pt.mult(-Lt,Jt.ri),Jt.ni.copy(Pt),Jt.ni.negate(Jt.ni),Pt.mult(Zt,Pt),bt.mult(yt,bt),Pt.vadd(bt,Pt),Dt.mult(C,Dt),Pt.vadd(Dt,Jt.rj),Jt.ri.vadd(vt,Jt.ri),Jt.ri.vsub(Tt.position,Jt.ri),Jt.rj.vadd(_t,Jt.rj),Jt.rj.vsub(Nt.position,Jt.rj),this.result.push(Jt),this.createFrictionEquationsFromContact(Jt,this.frictionResult)}for(var ee=it.get(),Re=ft,_e=0;_e!==2&&!qt;_e++)for(var se=0;se!==2&&!qt;se++)for(var Yt=0;Yt!==2&&!qt;Yt++)if(ee.set(0,0,0),_e?ee.vadd(Rt[0],ee):ee.vsub(Rt[0],ee),se?ee.vadd(Rt[1],ee):ee.vsub(Rt[1],ee),Yt?ee.vadd(Rt[2],ee):ee.vsub(Rt[2],ee),_t.vadd(ee,Re),Re.vsub(vt,Re),Re.norm2()<Lt*Lt){qt=!0;var Jt=this.createContactEquation(Tt,Nt,ot,dt);Jt.ri.copy(Re),Jt.ri.normalize(),Jt.ni.copy(Jt.ri),Jt.ri.mult(Lt,Jt.ri),Jt.rj.copy(ee),Jt.ri.vadd(vt,Jt.ri),Jt.ri.vsub(Tt.position,Jt.ri),Jt.rj.vadd(_t,Jt.rj),Jt.rj.vsub(Nt.position,Jt.rj),this.result.push(Jt),this.createFrictionEquationsFromContact(Jt,this.frictionResult)}it.release(ee),ee=null;for(var Ce=it.get(),pe=it.get(),Jt=it.get(),Xe=it.get(),we=it.get(),Rn=Rt.length,_e=0;_e!==Rn&&!qt;_e++)for(var se=0;se!==Rn&&!qt;se++)if(_e%3!==se%3){Rt[se].cross(Rt[_e],Ce),Ce.normalize(),Rt[_e].vadd(Rt[se],pe),Jt.copy(vt),Jt.vsub(pe,Jt),Jt.vsub(_t,Jt);var Ae=Jt.dot(Ce);Ce.mult(Ae,Xe);for(var Yt=0;Yt===_e%3||Yt===se%3;)Yt++;we.copy(vt),we.vsub(Xe,we),we.vsub(pe,we),we.vsub(_t,we);var gn=Math.abs(Ae),vn=we.norm();if(gn<Rt[Yt].norm()&&vn<Lt){qt=!0;var me=this.createContactEquation(Tt,Nt,ot,dt);pe.vadd(Xe,me.rj),me.rj.copy(me.rj),we.negate(me.ni),me.ni.normalize(),me.ri.copy(me.rj),me.ri.vadd(_t,me.ri),me.ri.vsub(vt,me.ri),me.ri.normalize(),me.ri.mult(Lt,me.ri),me.ri.vadd(vt,me.ri),me.ri.vsub(Tt.position,me.ri),me.rj.vadd(_t,me.rj),me.rj.vsub(Nt.position,me.rj),this.result.push(me),this.createFrictionEquationsFromContact(me,this.frictionResult)}}it.release(Ce,pe,Jt,Xe,we)};var ne=new l,gt=new l,D=new l,T=new l,j=new l,ct=new l,ht=new l,at=new l,wt=new l,At=new l;m.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=m.prototype.sphereConvex=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=this.v3pool;vt.vsub(_t,ne);for(var Rt=dt.faceNormals,Lt=dt.faces,qt=dt.vertices,Pt=ot.radius,bt=0;bt!==qt.length;bt++){var Dt=qt[bt],Zt=j;Bt.vmult(Dt,Zt),_t.vadd(Zt,Zt);var le=T;if(Zt.vsub(vt,le),le.norm2()<Pt*Pt){C=!0;var yt=this.createContactEquation(Tt,Nt,ot,dt);yt.ri.copy(le),yt.ri.normalize(),yt.ni.copy(yt.ri),yt.ri.mult(Pt,yt.ri),Zt.vsub(_t,yt.rj),yt.ri.vadd(vt,yt.ri),yt.ri.vsub(Tt.position,yt.ri),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Nt.position,yt.rj),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);return}}for(var C=!1,bt=0,k=Lt.length;bt!==k&&C===!1;bt++){var et=Rt[bt],Z=Lt[bt],W=ct;Bt.vmult(et,W);var st=ht;Bt.vmult(qt[Z[0]],st),st.vadd(_t,st);var Ct=at;W.mult(-Pt,Ct),vt.vadd(Ct,Ct);var zt=wt;Ct.vsub(st,zt);var kt=zt.dot(W),te=At;if(vt.vsub(st,te),kt<0&&te.dot(W)>0){for(var jt=[],Ft=0,ue=Z.length;Ft!==ue;Ft++){var ee=it.get();Bt.vmult(qt[Z[Ft]],ee),_t.vadd(ee,ee),jt.push(ee)}if(X(jt,W,vt)){C=!0;var yt=this.createContactEquation(Tt,Nt,ot,dt);W.mult(-Pt,yt.ri),W.negate(yt.ni);var Re=it.get();W.mult(-kt,Re);var _e=it.get();W.mult(-Pt,_e),vt.vsub(_t,yt.rj),yt.rj.vadd(_e,yt.rj),yt.rj.vadd(Re,yt.rj),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Nt.position,yt.rj),yt.ri.vadd(vt,yt.ri),yt.ri.vsub(Tt.position,yt.ri),it.release(Re),it.release(_e),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);for(var Ft=0,se=jt.length;Ft!==se;Ft++)it.release(jt[Ft]);return}else for(var Ft=0;Ft!==Z.length;Ft++){var Yt=it.get(),Ce=it.get();Bt.vmult(qt[Z[(Ft+1)%Z.length]],Yt),Bt.vmult(qt[Z[(Ft+2)%Z.length]],Ce),_t.vadd(Yt,Yt),_t.vadd(Ce,Ce);var pe=gt;Ce.vsub(Yt,pe);var Jt=D;pe.unit(Jt);var Xe=it.get(),we=it.get();vt.vsub(Yt,we);var Rn=we.dot(Jt);Jt.mult(Rn,Xe),Xe.vadd(Yt,Xe);var Ae=it.get();if(Xe.vsub(vt,Ae),Rn>0&&Rn*Rn<pe.norm2()&&Ae.norm2()<Pt*Pt){var yt=this.createContactEquation(Tt,Nt,ot,dt);Xe.vsub(_t,yt.rj),Xe.vsub(vt,yt.ni),yt.ni.normalize(),yt.ni.mult(Pt,yt.ri),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Nt.position,yt.rj),yt.ri.vadd(vt,yt.ri),yt.ri.vsub(Tt.position,yt.ri),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);for(var Ft=0,se=jt.length;Ft!==se;Ft++)it.release(jt[Ft]);it.release(Yt),it.release(Ce),it.release(Xe),it.release(Ae),it.release(we);return}it.release(Yt),it.release(Ce),it.release(Xe),it.release(Ae),it.release(we)}for(var Ft=0,se=jt.length;Ft!==se;Ft++)it.release(jt[Ft])}}},new l,new l,m.prototype[s.types.PLANE|s.types.BOX]=m.prototype.planeBox=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){dt.convexPolyhedronRepresentation.material=dt.material,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.planeConvex(ot,dt.convexPolyhedronRepresentation,vt,_t,Qt,Bt,Tt,Nt)};var Ut=new l,ce=new l,Mt=new l,Gt=new l;m.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=m.prototype.planeConvex=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=Ut,Rt=ce;Rt.set(0,0,1),Qt.vmult(Rt,Rt);for(var Lt=0,qt=Mt,Pt=0;Pt!==dt.vertices.length;Pt++){it.copy(dt.vertices[Pt]),Bt.vmult(it,it),_t.vadd(it,it),it.vsub(vt,qt);var bt=Rt.dot(qt);if(bt<=0){var Dt=this.createContactEquation(Tt,Nt,ot,dt),Zt=Gt;Rt.mult(Rt.dot(qt),Zt),it.vsub(Zt,Zt),Zt.vsub(vt,Dt.ri),Dt.ni.copy(Rt),it.vsub(_t,Dt.rj),Dt.ri.vadd(vt,Dt.ri),Dt.ri.vsub(Tt.position,Dt.ri),Dt.rj.vadd(_t,Dt.rj),Dt.rj.vsub(Nt.position,Dt.rj),this.result.push(Dt),Lt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Dt,this.frictionResult)}}this.enableFrictionReduction&&Lt&&this.createFrictionFromAverage(Lt)};var $t=new l,Kt=new l;m.prototype[s.types.CONVEXPOLYHEDRON]=m.prototype.convexConvex=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt,it,Rt,Lt,qt){var Pt=$t;if(!(vt.distanceTo(_t)>ot.boundingSphereRadius+dt.boundingSphereRadius)&&ot.findSeparatingAxis(dt,vt,Qt,_t,Bt,Pt,Lt,qt)){var bt=[],Dt=Kt;ot.clipAgainstHull(vt,Qt,dt,_t,Bt,Pt,-100,100,bt);for(var Zt=0,le=0;le!==bt.length;le++){var yt=this.createContactEquation(Tt,Nt,ot,dt,it,Rt),C=yt.ri,k=yt.rj;Pt.negate(yt.ni),bt[le].normal.negate(Dt),Dt.mult(bt[le].depth,Dt),bt[le].point.vadd(Dt,C),k.copy(bt[le].point),C.vsub(vt,C),k.vsub(_t,k),C.vadd(vt,C),C.vsub(Tt.position,C),k.vadd(_t,k),k.vsub(Nt.position,k),this.result.push(yt),Zt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(yt,this.frictionResult)}this.enableFrictionReduction&&Zt&&this.createFrictionFromAverage(Zt)}};var Wt=new l,he=new l,ie=new l;m.prototype[s.types.PLANE|s.types.PARTICLE]=m.prototype.planeParticle=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=Wt;it.set(0,0,1),Tt.quaternion.vmult(it,it);var Rt=he;_t.vsub(Tt.position,Rt);var Lt=it.dot(Rt);if(Lt<=0){var qt=this.createContactEquation(Nt,Tt,dt,ot);qt.ni.copy(it),qt.ni.negate(qt.ni),qt.ri.set(0,0,0);var Pt=ie;it.mult(it.dot(_t),Pt),_t.vsub(Pt,Pt),qt.rj.copy(Pt),this.result.push(qt),this.createFrictionEquationsFromContact(qt,this.frictionResult)}};var ve=new l;m.prototype[s.types.PARTICLE|s.types.SPHERE]=m.prototype.sphereParticle=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=ve;it.set(0,0,1),_t.vsub(vt,it);var Rt=it.norm2();if(Rt<=ot.radius*ot.radius){var Lt=this.createContactEquation(Nt,Tt,dt,ot);it.normalize(),Lt.rj.copy(it),Lt.rj.mult(ot.radius,Lt.rj),Lt.ni.copy(it),Lt.ni.negate(Lt.ni),Lt.ri.set(0,0,0),this.result.push(Lt),this.createFrictionEquationsFromContact(Lt,this.frictionResult)}};var q=new h,It=new l;new l;var lt=new l,pt=new l,Vt=new l;m.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=m.prototype.convexParticle=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=-1,Rt=lt,Lt=Vt,qt=null,Pt=It;if(Pt.copy(_t),Pt.vsub(vt,Pt),Qt.conjugate(q),q.vmult(Pt,Pt),ot.pointIsInside(Pt)){ot.worldVerticesNeedsUpdate&&ot.computeWorldVertices(vt,Qt),ot.worldFaceNormalsNeedsUpdate&&ot.computeWorldFaceNormals(Qt);for(var bt=0,Dt=ot.faces.length;bt!==Dt;bt++){var Zt=[ot.worldVertices[ot.faces[bt][0]]],le=ot.worldFaceNormals[bt];_t.vsub(Zt[0],pt);var yt=-le.dot(pt);(qt===null||Math.abs(yt)<Math.abs(qt))&&(qt=yt,it=bt,Rt.copy(le))}if(it!==-1){var C=this.createContactEquation(Nt,Tt,dt,ot);Rt.mult(qt,Lt),Lt.vadd(_t,Lt),Lt.vsub(vt,Lt),C.rj.copy(Lt),Rt.negate(C.ni),C.ri.set(0,0,0);var k=C.ri,et=C.rj;k.vadd(_t,k),k.vsub(Nt.position,k),et.vadd(vt,et),et.vsub(Tt.position,et),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},m.prototype[s.types.BOX|s.types.HEIGHTFIELD]=m.prototype.boxHeightfield=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexHeightfield(ot.convexPolyhedronRepresentation,dt,vt,_t,Qt,Bt,Tt,Nt)};var Ot=new l,re=new l,Ie=[0];m.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=m.prototype.convexHeightfield=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=dt.data,Rt=dt.elementSize,Lt=ot.boundingSphereRadius,qt=re,Pt=Ie,bt=Ot;c.pointToLocalFrame(_t,Bt,vt,bt);var Dt=Math.floor((bt.x-Lt)/Rt)-1,Zt=Math.ceil((bt.x+Lt)/Rt)+1,le=Math.floor((bt.y-Lt)/Rt)-1,yt=Math.ceil((bt.y+Lt)/Rt)+1;if(!(Zt<0||yt<0||Dt>it.length||le>it[0].length)){Dt<0&&(Dt=0),Zt<0&&(Zt=0),le<0&&(le=0),yt<0&&(yt=0),Dt>=it.length&&(Dt=it.length-1),Zt>=it.length&&(Zt=it.length-1),yt>=it[0].length&&(yt=it[0].length-1),le>=it[0].length&&(le=it[0].length-1);var C=[];dt.getRectMinMax(Dt,le,Zt,yt,C);var k=C[0],et=C[1];if(!(bt.z-Lt>et||bt.z+Lt<k))for(var Z=Dt;Z<Zt;Z++)for(var W=le;W<yt;W++)dt.getConvexTrianglePillar(Z,W,!1),c.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),vt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.convexConvex(ot,dt.pillarConvex,vt,qt,Qt,Bt,Tt,Nt,null,null,Pt,null),dt.getConvexTrianglePillar(Z,W,!0),c.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),vt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.convexConvex(ot,dt.pillarConvex,vt,qt,Qt,Bt,Tt,Nt,null,null,Pt,null)}};var Be=new l,oe=new l;m.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=m.prototype.sphereHeightfield=function(ot,dt,vt,_t,Qt,Bt,Tt,Nt){var it=dt.data,Rt=ot.radius,Lt=dt.elementSize,qt=oe,Pt=Be;c.pointToLocalFrame(_t,Bt,vt,Pt);var bt=Math.floor((Pt.x-Rt)/Lt)-1,Dt=Math.ceil((Pt.x+Rt)/Lt)+1,Zt=Math.floor((Pt.y-Rt)/Lt)-1,le=Math.ceil((Pt.y+Rt)/Lt)+1;if(!(Dt<0||le<0||bt>it.length||le>it[0].length)){bt<0&&(bt=0),Dt<0&&(Dt=0),Zt<0&&(Zt=0),le<0&&(le=0),bt>=it.length&&(bt=it.length-1),Dt>=it.length&&(Dt=it.length-1),le>=it[0].length&&(le=it[0].length-1),Zt>=it[0].length&&(Zt=it[0].length-1);var yt=[];dt.getRectMinMax(bt,Zt,Dt,le,yt);var C=yt[0],k=yt[1];if(!(Pt.z-Rt>k||Pt.z+Rt<C))for(var et=this.result,Z=bt;Z<Dt;Z++)for(var W=Zt;W<le;W++){var st=et.length;dt.getConvexTrianglePillar(Z,W,!1),c.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),vt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.sphereConvex(ot,dt.pillarConvex,vt,qt,Qt,Bt,Tt,Nt),dt.getConvexTrianglePillar(Z,W,!0),c.pointToWorldFrame(_t,Bt,dt.pillarOffset,qt),vt.distanceTo(qt)<dt.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.sphereConvex(ot,dt.pillarConvex,vt,qt,Qt,Bt,Tt,Nt);var Ct=et.length-st;if(Ct>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,i){n.exports=_;var r=e("../shapes/Shape"),s=e("../math/Vec3"),a=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var c=e("./Narrowphase"),h=e("../utils/EventTarget"),u=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),m=e("../objects/Body"),v=e("../utils/TupleDictionary"),g=e("../collision/RaycastResult"),p=e("../collision/AABB"),x=e("../collision/Ray"),y=e("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new c(this),this.collisionMatrix=new u,this.collisionMatrixPrevious=new u,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new v,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new p;var E=new x;if(_.prototype.getContactMaterial=function(L,tt){return this.contactMaterialTable.get(L.id,tt.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var L=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=L,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(L){this.bodies.indexOf(L)===-1&&(L.index=this.bodies.length,this.bodies.push(L),L.world=this,L.initPosition.copy(L.position),L.initVelocity.copy(L.velocity),L.timeLastSleepy=this.time,L instanceof m&&(L.initAngularVelocity.copy(L.angularVelocity),L.initQuaternion.copy(L.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=L,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(L){this.constraints.push(L)},_.prototype.removeConstraint=function(L){var tt=this.constraints.indexOf(L);tt!==-1&&this.constraints.splice(tt,1)},_.prototype.rayTest=function(L,tt,J){J instanceof g?this.raycastClosest(L,tt,{skipBackfaces:!0},J):this.raycastAll(L,tt,{skipBackfaces:!0},J)},_.prototype.raycastAll=function(L,tt,J,O){return J.mode=x.ALL,J.from=L,J.to=tt,J.callback=O,E.intersectWorld(this,J)},_.prototype.raycastAny=function(L,tt,J,O){return J.mode=x.ANY,J.from=L,J.to=tt,J.result=O,E.intersectWorld(this,J)},_.prototype.raycastClosest=function(L,tt,J,O){return J.mode=x.CLOSEST,J.from=L,J.to=tt,J.result=O,E.intersectWorld(this,J)},_.prototype.remove=function(L){L.world=null;var tt=this.bodies.length-1,J=this.bodies,O=J.indexOf(L);if(O!==-1){J.splice(O,1);for(var K=0;K!==J.length;K++)J[K].index=K;this.collisionMatrix.setNumObjects(tt),this.removeBodyEvent.body=L,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(L){this.materials.push(L)},_.prototype.addContactMaterial=function(L){this.contactmaterials.push(L),this.contactMaterialTable.set(L.materials[0].id,L.materials[1].id,L)},typeof performance>"u"&&(performance={}),!performance.now){var A=Date.now();performance.timing&&performance.timing.navigationStart&&(A=performance.timing.navigationStart),performance.now=function(){return Date.now()-A}}var R=new s;_.prototype.step=function(L,tt,J){if(J=J||10,tt=tt||0,tt===0)this.internalStep(L),this.time+=L;else{var O=Math.floor((this.time+tt)/L)-Math.floor(this.time/L);O=Math.min(O,J);for(var K=performance.now(),z=0;z!==O&&(this.internalStep(L),!(performance.now()-K>L*1e3));z++);this.time+=tt;for(var P=this.time%L,I=P/L,G=R,Q=this.bodies,nt=0;nt!==Q.length;nt++){var X=Q[nt];X.type!==m.STATIC&&X.sleepState!==m.SLEEPING?(X.position.vsub(X.previousPosition,G),G.scale(I,G),X.position.vadd(G,X.interpolatedPosition)):(X.interpolatedPosition.copy(X.position),X.interpolatedQuaternion.copy(X.quaternion))}}};var b={type:"postStep"},S={type:"preStep"},M={type:"collide",body:null,contact:null},w=[],F=[],N=[],V=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new a;var H=new a,Y=new a,B=new s;_.prototype.internalStep=function(L){this.dt=L;var tt=this.contacts,J=N,O=V,K=this.numObjects(),z=this.bodies,P=this.solver,I=this.gravity,G=this.doProfiling,Q=this.profile,nt=m.DYNAMIC,X,rt=this.constraints,mt=F;I.norm();var St=I.x,Et=I.y,U=I.z,ft=0;for(G&&(X=performance.now()),ft=0;ft!==K;ft++){var ut=z[ft];if(ut.type&nt){var Xt=ut.force,xt=ut.mass;Xt.x+=xt*St,Xt.y+=xt*Et,Xt.z+=xt*U}}for(var ft=0,ne=this.subsystems.length;ft!==ne;ft++)this.subsystems[ft].update();G&&(X=performance.now()),J.length=0,O.length=0,this.broadphase.collisionPairs(this,J,O),G&&(Q.broadphase=performance.now()-X);var $t=rt.length;for(ft=0;ft!==$t;ft++){var gt=rt[ft];if(!gt.collideConnected)for(var D=J.length-1;D>=0;D-=1)(gt.bodyA===J[D]&&gt.bodyB===O[D]||gt.bodyB===J[D]&&gt.bodyA===O[D])&&(J.splice(D,1),O.splice(D,1))}this.collisionMatrixTick(),G&&(X=performance.now());var T=w,j=tt.length;for(ft=0;ft!==j;ft++)T.push(tt[ft]);tt.length=0;var ct=this.frictionEquations.length;for(ft=0;ft!==ct;ft++)mt.push(this.frictionEquations[ft]);this.frictionEquations.length=0,this.narrowphase.getContacts(J,O,this,tt,T,this.frictionEquations,mt),G&&(Q.narrowphase=performance.now()-X),G&&(X=performance.now());for(var ft=0;ft<this.frictionEquations.length;ft++)P.addEquation(this.frictionEquations[ft]);for(var ht=tt.length,at=0;at!==ht;at++){var gt=tt[at],ut=gt.bi,wt=gt.bj;gt.si,gt.sj;var At;if(ut.material&&wt.material?At=this.getContactMaterial(ut.material,wt.material)||this.defaultContactMaterial:At=this.defaultContactMaterial,At.friction,ut.material&&wt.material&&(ut.material.friction>=0&&wt.material.friction>=0&&ut.material.friction*wt.material.friction,ut.material.restitution>=0&&wt.material.restitution>=0&&(gt.restitution=ut.material.restitution*wt.material.restitution)),P.addEquation(gt),ut.allowSleep&&ut.type===m.DYNAMIC&&ut.sleepState===m.SLEEPING&&wt.sleepState===m.AWAKE&&wt.type!==m.STATIC){var Ut=wt.velocity.norm2()+wt.angularVelocity.norm2(),ce=Math.pow(wt.sleepSpeedLimit,2);Ut>=ce*2&&(ut._wakeUpAfterNarrowphase=!0)}if(wt.allowSleep&&wt.type===m.DYNAMIC&&wt.sleepState===m.SLEEPING&&ut.sleepState===m.AWAKE&&ut.type!==m.STATIC){var Mt=ut.velocity.norm2()+ut.angularVelocity.norm2(),Gt=Math.pow(ut.sleepSpeedLimit,2);Mt>=Gt*2&&(wt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ut,wt,!0),this.collisionMatrixPrevious.get(ut,wt)||(M.body=wt,M.contact=gt,ut.dispatchEvent(M),M.body=ut,wt.dispatchEvent(M))}for(G&&(Q.makeContactConstraints=performance.now()-X,X=performance.now()),ft=0;ft!==K;ft++){var ut=z[ft];ut._wakeUpAfterNarrowphase&&(ut.wakeUp(),ut._wakeUpAfterNarrowphase=!1)}var $t=rt.length;for(ft=0;ft!==$t;ft++){var gt=rt[ft];gt.update();for(var D=0,Kt=gt.equations.length;D!==Kt;D++){var Wt=gt.equations[D];P.addEquation(Wt)}}P.solve(L,this),G&&(Q.solve=performance.now()-X),P.removeAllEquations();var he=Math.pow;for(ft=0;ft!==K;ft++){var ut=z[ft];if(ut.type&nt){var ie=he(1-ut.linearDamping,L),ve=ut.velocity;ve.mult(ie,ve);var q=ut.angularVelocity;if(q){var It=he(1-ut.angularDamping,L);q.mult(It,q)}}}for(this.dispatchEvent(S),ft=0;ft!==K;ft++){var ut=z[ft];ut.preStep&&ut.preStep.call(ut)}G&&(X=performance.now());var lt=H,pt=Y,Vt=this.stepnumber,Ot=m.DYNAMIC|m.KINEMATIC,re=Vt%(this.quatNormalizeSkip+1)===0,Ie=this.quatNormalizeFast,Be=L*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,ft=0;ft!==K;ft++){var oe=z[ft],ot=oe.force,dt=oe.torque;if(oe.type&Ot&&oe.sleepState!==m.SLEEPING){var vt=oe.velocity,_t=oe.angularVelocity,Qt=oe.position,Bt=oe.quaternion,Tt=oe.invMass,Nt=oe.invInertiaWorld;vt.x+=ot.x*Tt*L,vt.y+=ot.y*Tt*L,vt.z+=ot.z*Tt*L,oe.angularVelocity&&(Nt.vmult(dt,B),B.mult(L,B),B.vadd(_t,_t)),Qt.x+=vt.x*L,Qt.y+=vt.y*L,Qt.z+=vt.z*L,oe.angularVelocity&&(lt.set(_t.x,_t.y,_t.z,0),lt.mult(Bt,pt),Bt.x+=Be*pt.x,Bt.y+=Be*pt.y,Bt.z+=Be*pt.z,Bt.w+=Be*pt.w,re&&(Ie?Bt.normalizeFast():Bt.normalize())),oe.aabb&&(oe.aabbNeedsUpdate=!0),oe.updateInertiaWorld&&oe.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(Q.integrate=performance.now()-X),this.time+=L,this.stepnumber+=1,this.dispatchEvent(b),ft=0;ft!==K;ft++){var ut=z[ft],it=ut.postStep;it&&it.call(ut)}if(this.allowSleep)for(ft=0;ft!==K;ft++)z[ft].sleepTick(this.time)},_.prototype.clearForces=function(){for(var L=this.bodies,tt=L.length,J=0;J!==tt;J++){var O=L[J];O.force,O.torque,O.force.set(0,0,0),O.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(vp);var jS=vp.exports;const yn=$S(jS),Tn=new xh,be={materialColor:"#ffeded",galaxy:{count:1e5,size:.01,radius:6,branches:7,spin:1,randomness:.2,randomnessPower:3,insideColor:"#ff6030",outsideColor:"#97c8bf"}};Tn.addColor(be,"materialColor");const KS=document.querySelector("canvas.webgl"),mn=new ug,_p=new cf,ZS=_p.load("/textures/particles/2.png"),xp=_p.load("textures/gradients/3.jpg");xp.magFilter=an;const Na=new Sg({color:be.materialColor,gradientMap:xp}),Bh=new Ge(new hh(1,.4,16,60),Na),Oh=new Ge(new ch(1,2,32),Na),zh=new Ge(new uh(.8,.35,100,16),Na);mn.add(Bh,Oh,zh);const Vh=4;Bh.position.set(2,0,0);Oh.position.set(-2,-Vh,0);zh.position.set(2,-Vh*2,0);const yp=[Bh,Oh,zh],as=new nn,Fa=5e3,Mp=new Float32Array(Fa*3),Sp=new Float32Array(Fa*3);for(let o=0;o<Fa*3;o++)Mp[o]=(Math.random()-.5)*10,Sp[o]=Math.random();as.setAttribute("position",new $e(Mp,3));as.setAttribute("color",new $e(Sp,3));const Pr=new vo({size:.2,sizeAttenuation:!0});Pr.size=.3;Pr.transparent=!0;Pr.alphaMap=ZS;Pr.depthWrite=!1;Pr.blending=ha;Pr.vertexColors=!0;const kh=new Ta(as,Pr);kh.position.y=-10;kh.position.z=-10;mn.add(kh);const Ep=200,la=new Float32Array(Ep*3);for(let o=0;o<Ep;o++)la[o*3+0]=(Math.random()-.5)*10,la[o*3+1]=Math.random(),la[o*3+2]=(Math.random()-.5)*10;const wp=new nn;wp.setAttribute("position",new $e(la,3));const Ap=new vo({color:be.materialColor,sizeAttenuation:!0,size:.03});Tn.addColor(be,"materialColor").onChange(()=>{Na.color.set(be.materialColor),Ap.color.set(be.materialColor)});const JS=new Ta(wp,Ap);mn.add(JS);let zs=null,Pl=null,dr=null;const fi=()=>{dr!==null&&(zs.dispose(),Pl.dispose(),mn.remove(dr)),zs=new nn;const o=new Float32Array(be.galaxy.count*3),t=new Float32Array(be.galaxy.count*3),e=new ae(be.galaxy.insideColor),n=new ae(be.galaxy.outsideColor);for(let i=0;i<be.galaxy.count;i++){const r=i*3,s=Math.random()*be.galaxy.radius,a=s*be.galaxy.spin,l=i%be.galaxy.branches/be.galaxy.branches*Math.PI*2,c=Math.pow(Math.random(),be.galaxy.randomnessPower)*(Math.random()<.5?1:-1)*be.galaxy.randomness*s,h=Math.pow(Math.random(),be.galaxy.randomnessPower)*(Math.random()<.5?1:-1)*be.galaxy.randomness*s,u=Math.pow(Math.random(),be.galaxy.randomnessPower)*(Math.random()<.5?1:-1)*be.galaxy.randomness*s;o[r]=Math.cos(l+a)*s+c,o[r+1]=h,o[r+2]=Math.sin(l+a)*s+u;const d=e.clone();d.lerp(n,s/be.galaxy.radius),t[r]=d.r,t[r+1]=d.g,t[r+2]=d.b}zs.setAttribute("position",new $e(o,3)),zs.setAttribute("color",new $e(t,3)),Pl=new vo({size:be.galaxy.size,sizeAttenuation:!0,depthWrite:!1,blending:ha,vertexColors:!0}),dr=new Ta(zs,Pl),dr.rotation.x=Math.PI/10,dr.position.y=-4,dr.position.z=-10,mn.add(dr)};fi();Tn.add(be.galaxy,"count").min(100).max(1e6).step(100).onFinishChange(fi);Tn.add(be.galaxy,"size").min(.001).max(.1).step(.001).onFinishChange(fi);Tn.add(be.galaxy,"radius").min(.01).max(20).step(.01).onFinishChange(fi);Tn.add(be.galaxy,"branches").min(2).max(20).step(1).onFinishChange(fi);Tn.add(be.galaxy,"spin").min(-5).max(5).step(.001).onFinishChange(fi);Tn.add(be.galaxy,"randomness").min(0).max(2).step(.001).onFinishChange(fi);Tn.add(be.galaxy,"randomnessPower").min(1).max(10).step(.001).onFinishChange(fi);Tn.addColor(be.galaxy,"insideColor").onFinishChange(fi);Tn.addColor(be.galaxy,"outsideColor").onFinishChange(fi);const Rs={};Rs.physicsCreateSphere=()=>{console.log("Creating Sphere"),rE(Math.random()*.5,{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})};Tn.add(Rs,"physicsCreateSphere");Rs.physicsCreateBox=()=>{aE(Math.random(),Math.random(),Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})};Tn.add(Rs,"physicsCreateBox");Rs.reset=()=>{for(;co.length>0;){const o=co.pop();o.body&&(o.body.removeEventListener("collide",Hh),ci.removeBody(o.body)),o.physicsMesh&&mn.remove(o.physicsMesh)}};Tn.add(Rs,"reset");const Il=new Audio("/sounds/hit.mp3"),Hh=o=>{o.contact.getImpactVelocityAlongNormal()>1.5&&(Il.volume=Math.random(),Il.currentTime=0,Il.play())},QS=new Fg,bp=QS.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),ci=new yn.World;ci.broadphase=new yn.SAPBroadphase(ci);ci.allowSleep=!0;ci.gravity.set(0,-9.82,0);const lo=new yn.Material("default"),tE=new yn.ContactMaterial(lo,lo,{friction:.1,restitution:.5});ci.defaultContactMaterial=tE;const eE=new yn.Plane,Ua=new yn.Body({mass:0,material:lo});Ua.addShape(eE);Ua.quaternion.setFromAxisAngle(new yn.Vec3(-1,0,0),Math.PI*.5);Ua.position.set(0,-3,0);ci.addBody(Ua);const co=[],nE=new Ca(1,20,20),iE=new _o({metalness:.3,roughness:.4,envMap:bp,envMapIntensity:.5}),rE=(o,t)=>{t.z=-13;const e=new Ge(nE,iE);e.castShadow=!0,e.scale.set(o,o,o),e.position.copy(t),mn.add(e);const n=new yn.Sphere(o),i=new yn.Body({mass:1,position:new yn.Vec3(t.x,t.y,t.z),shape:n,material:lo});i.addEventListener("collide",Hh),ci.addBody(i),co.push({physicsMesh:e,physicsBody:i})},sE=new ws(1,1,1),oE=new _o({roughness:.4,envMap:bp,envMapIntensity:.5}),aE=(o,t,e,n)=>{n.z=-13;const i=new Ge(sE,oE);i.scale.set(o,t,e),i.castShadow=!0,i.position.copy(n),mn.add(i);const r=new yn.Box(new yn.Vec3(o*.5,t*.5,e*.5)),s=new yn.Body({mass:1,position:new yn.Vec3(n.x,n.y,n.z),shape:r,material:lo});s.addEventListener("collide",Hh),ci.addBody(s),co.push({physicsMesh:i,physicsBody:s})},Tp=new ky;let wa=null;Tp.load("/models/Fox/glTF/Fox.gltf",o=>{const t=o.scene;t.scale.set(.025,.035,.025),t.position.set(0,-15.5,-4),t.rotation.y=Math.PI/-2,mn.add(t),wa=new nv(t),wa.clipAction(o.animations[2]).play()});const Li=new mh(16777215,2);Li.castShadow=!0;Li.shadow.mapSize.set(1024,1024);Li.shadow.camera.far=15;Li.shadow.camera.left=-7;Li.shadow.camera.top=7;Li.shadow.camera.right=7;Li.shadow.camera.bottom=-7;Li.position.set(5,-15,5);mn.add(Li);const Gc=new iv,ca=new Me,Gh=new Ca,lE=new ii({color:"#956565"}),cE=new ii({color:"#956565"}),hE=new ii({color:"#956565"}),ho=new Ge(Gh,lE),uo=new Ge(Gh,cE),fo=new Ge(Gh,hE);ho.position.set(-4,-18,-5);uo.position.set(0,-18,-5);fo.position.set(4,-18,-5);mn.add(ho,uo,fo);const Ko=(o,t)=>{o.material.color.set(t)};window.addEventListener("mousemove",o=>{ca.x=o.clientX/window.innerWidth*2-1,ca.y=-(o.clientY/window.innerHeight)*2+1,Gc.setFromCamera(ca,Zi);const t=Gc.intersectObjects([ho,uo,fo]);Ko(ho,"#956565"),Ko(uo,"#956565"),Ko(fo,"#956565");for(const e of t)Ko(e.object,"#a26934")});let Zo=null;Tp.load("./models/Duck/glTF-Binary/Duck.glb",o=>{Zo=o.scene,Zo.position.set(0,-19,-5),Zo.scale.set(1.5,1.5,1.5),mn.add(Zo)});const Rp=new mh("#ffffff",1);Rp.position.set(1,1,0);mn.add(Rp);const xn={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{xn.width=window.innerWidth,xn.height=window.innerHeight,Zi.aspect=xn.width/xn.height,Zi.updateProjectionMatrix(),po.setSize(xn.width,xn.height),po.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Qr=new Hi;mn.add(Qr);const Zi=new dn(35,xn.width/xn.height,.1,100);Zi.position.z=6;Qr.add(Zi);const po=new Vy({canvas:KS,alpha:!0});po.setSize(xn.width,xn.height);po.setPixelRatio(Math.min(window.devicePixelRatio,2));let Wc=window.scrollY,Ll=0;window.addEventListener("scroll",()=>{Wc=window.scrollY;const o=Math.round(Wc/xn.height);o!==Ll&&(Ll=o,gp.to(yp[Ll].rotation,{duration:1.5,ease:"power2.inOut",x:"+=6",y:"+=3",z:"+=1.5"}))});const Aa={x:0,y:0};window.addEventListener("mousemove",o=>{Aa.x=o.clientX/xn.width-.5,Aa.y=o.clientY/xn.height-.5});const Rd=new Gg;let Cd=0;const uE=1/60,Dl=1.5,Nl=2,dE=0,fE=Math.PI/3,pE=Math.PI*2/3,Cp=()=>{const o=Rd.getElapsedTime(),t=Rd.getDelta();ci.step(uE,t,3),co.forEach(({physicsMesh:s,physicsBody:a})=>{s.position.copy(a.position),s.quaternion.copy(a.quaternion)});for(let s=0;s<Fa;s++){let a=s*3;const l=as.attributes.position.array[a];as.attributes.position.array[a+1]=Math.sin(o+l),as.attributes.position.needsUpdate=!0}const e=o-Cd;Cd=o;for(const s of yp)s.rotation.x+=e*.1,s.rotation.y+=e*.12;wa&&wa.update(e),Gc.setFromCamera(ca,Zi);const n=Date.now()*.001;ho.position.y=Math.sin(n*Nl+dE)*Dl-19,uo.position.y=Math.sin(n*Nl+fE)*Dl-19,fo.position.y=Math.sin(n*Nl+pE)*Dl-19,Zi.position.y=-Wc/xn.height*Vh;const i=Aa.x*.5,r=-Aa.y*.5;Qr.position.x+=(i-Qr.position.x)*5*e,Qr.position.y+=(r-Qr.position.y)*5*e,po.render(mn,Zi),window.requestAnimationFrame(Cp)};Cp();
//# sourceMappingURL=index-b8c2d78e.js.map
