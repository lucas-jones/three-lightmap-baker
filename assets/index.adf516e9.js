const k_=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}};k_();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hc="161",ys={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},V_=0,ph=1,z_=2,Vp=1,H_=2,li=3,Bn=0,pn=1,un=2,Fi=0,nr=1,fh=2,mh=3,gh=4,G_=5,es=100,W_=101,X_=102,_h=103,vh=104,j_=200,q_=201,Y_=202,K_=203,pc=204,fc=205,$_=206,Z_=207,Q_=208,J_=209,tv=210,ev=211,nv=212,iv=213,sv=214,rv=0,ov=1,av=2,Ma=3,lv=4,cv=5,uv=6,hv=7,zp=0,dv=1,pv=2,Bi=0,fv=1,mv=2,gv=3,_v=4,vv=5,xv=6,xh="attached",bv="detached",Hp=300,rr=301,or=302,mc=303,gc=304,Da=306,ar=1e3,An=1001,Sa=1002,_e=1003,_c=1004,Zs=1005,je=1006,xa=1007,ui=1008,yv=1008,qn=1009,vc=1010,Gp=1011,Na=1012,eo=1013,xn=1014,Qe=1015,oo=1016,Wp=1017,Xp=1018,os=1020,wv=1021,on=1023,Ev=1024,Mv=1025,as=1026,lr=1027,jp=1028,Gc=1029,qp=1030,Ua=1031,ao=1033,ml=33776,gl=33777,_l=33778,vl=33779,bh=35840,yh=35841,wh=35842,Eh=35843,Yp=36196,Mh=37492,Sh=37496,Th=37808,Ah=37809,Ch=37810,Ph=37811,Rh=37812,Lh=37813,Ih=37814,Dh=37815,Nh=37816,Uh=37817,Oh=37818,Fh=37819,Bh=37820,kh=37821,xl=36492,Vh=36494,zh=36495,Sv=36283,Hh=36284,Gh=36285,Wh=36286,lo=2300,cr=2301,bl=2302,Xh=2400,jh=2401,qh=2402,Tv=2500,Av=0,Kp=1,xc=2,$p=3e3,ls=3001,Cv=3200,Pv=3201,Zp=0,Rv=1,Cn="",Pe="srgb",Ke="srgb-linear",Wc="display-p3",Oa="display-p3-linear",Ta="linear",ye="srgb",Aa="rec709",Ca="p3",Es=7680,Yh=519,Lv=512,Iv=513,Dv=514,Qp=515,Nv=516,Uv=517,Ov=518,Fv=519,bc=35044,Kh="300 es",yc=1035,hi=2e3,Pa=2001;class hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $h=1234567;const no=Math.PI/180,ur=180/Math.PI;function Fn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function qe(s,t,e){return Math.max(t,Math.min(e,s))}function Xc(s,t){return(s%t+t)%t}function Bv(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function kv(s,t,e){return s!==t?(e-s)/(t-s):0}function io(s,t,e){return(1-e)*s+e*t}function Vv(s,t,e,n){return io(s,t,1-Math.exp(-e*n))}function zv(s,t=1){return t-Math.abs(Xc(s,t*2)-t)}function Hv(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Gv(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Wv(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Xv(s,t){return s+Math.random()*(t-s)}function jv(s){return s*(.5-Math.random())}function qv(s){s!==void 0&&($h=s);let t=$h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yv(s){return s*no}function Kv(s){return s*ur}function wc(s){return(s&s-1)===0&&s!==0}function $v(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ra(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zv(s,t,e,n,i){const o=Math.cos,a=Math.sin,l=o(e/2),u=a(e/2),d=o((t+n)/2),p=a((t+n)/2),f=o((t-n)/2),m=a((t-n)/2),v=o((n-t)/2),b=a((n-t)/2);switch(i){case"XYX":s.set(l*p,u*f,u*m,l*d);break;case"YZY":s.set(u*m,l*p,u*f,l*d);break;case"ZXZ":s.set(u*f,u*m,l*p,l*d);break;case"XZX":s.set(l*p,u*b,u*v,l*d);break;case"YXY":s.set(u*v,l*p,u*b,l*d);break;case"ZYZ":s.set(u*b,u*v,l*p,l*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function de(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Jp={DEG2RAD:no,RAD2DEG:ur,generateUUID:Fn,clamp:qe,euclideanModulo:Xc,mapLinear:Bv,inverseLerp:kv,lerp:io,damp:Vv,pingpong:zv,smoothstep:Hv,smootherstep:Gv,randInt:Wv,randFloat:Xv,randFloatSpread:jv,seededRandom:qv,degToRad:Yv,radToDeg:Kv,isPowerOfTwo:wc,ceilPowerOfTwo:$v,floorPowerOfTwo:Ra,setQuaternionFromProperEuler:Zv,normalize:de,denormalize:On};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*i+t.x,this.y=o*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,i,o,a,l,u,d){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,l,u,d)}set(t,e,n,i,o,a,l,u,d){const p=this.elements;return p[0]=t,p[1]=i,p[2]=l,p[3]=e,p[4]=o,p[5]=u,p[6]=n,p[7]=a,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],l=n[3],u=n[6],d=n[1],p=n[4],f=n[7],m=n[2],v=n[5],b=n[8],w=i[0],x=i[3],_=i[6],E=i[1],y=i[4],S=i[7],C=i[2],P=i[5],A=i[8];return o[0]=a*w+l*E+u*C,o[3]=a*x+l*y+u*P,o[6]=a*_+l*S+u*A,o[1]=d*w+p*E+f*C,o[4]=d*x+p*y+f*P,o[7]=d*_+p*S+f*A,o[2]=m*w+v*E+b*C,o[5]=m*x+v*y+b*P,o[8]=m*_+v*S+b*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],l=t[5],u=t[6],d=t[7],p=t[8];return e*a*p-e*l*d-n*o*p+n*l*u+i*o*d-i*a*u}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],l=t[5],u=t[6],d=t[7],p=t[8],f=p*a-l*d,m=l*u-p*o,v=d*o-a*u,b=e*f+n*m+i*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=f*w,t[1]=(i*d-p*n)*w,t[2]=(l*n-i*a)*w,t[3]=m*w,t[4]=(p*e-i*u)*w,t[5]=(i*o-l*e)*w,t[6]=v*w,t[7]=(n*u-d*e)*w,t[8]=(a*e-n*o)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,a,l){const u=Math.cos(o),d=Math.sin(o);return this.set(n*u,n*d,-n*(u*a+d*l)+a+t,-i*d,i*u,-i*(-d*a+u*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(yl.makeScale(t,e)),this}rotate(t){return this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yl=new ie;function tf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qv(){const s=co("canvas");return s.style.display="block",s}const Zh={};function cs(s){s in Zh||(Zh[s]=!0,console.warn(s))}const Qh=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jh=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[Ke]:{transfer:Ta,primaries:Aa,toReference:s=>s,fromReference:s=>s},[Pe]:{transfer:ye,primaries:Aa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Oa]:{transfer:Ta,primaries:Ca,toReference:s=>s.applyMatrix3(Jh),fromReference:s=>s.applyMatrix3(Qh)},[Wc]:{transfer:ye,primaries:Ca,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Jh),fromReference:s=>s.applyMatrix3(Qh).convertLinearToSRGB()}},Jv=new Set([Ke,Oa]),he={enabled:!0,_workingColorSpace:Ke,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Jv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=To[t].toReference,i=To[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return To[s].primaries},getTransfer:function(s){return s===Cn?Ta:To[s].transfer}};function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class ef{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=co("canvas")),Ms.width=t.width,Ms.height=t.height;const n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=co("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=ir(o[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ir(e[n]/255)*255):e[n]=ir(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let t0=0;class nf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,l=i.length;a<l;a++)i[a].isDataTexture?o.push(El(i[a].image)):o.push(El(i[a]))}else o=El(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function El(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ef.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0;class Ye extends hs{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=An,i=An,o=je,a=ui,l=on,u=qn,d=Ye.DEFAULT_ANISOTROPY,p=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Fn(),this.name="",this.source=new nf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===ls?Pe:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pe?ls:$p}set encoding(t){cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ls?Pe:Cn}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Hp;Ye.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const u=t.elements,d=u[0],p=u[4],f=u[8],m=u[1],v=u[5],b=u[9],w=u[2],x=u[6],_=u[10];if(Math.abs(p-m)<.01&&Math.abs(f-w)<.01&&Math.abs(b-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(f+w)<.1&&Math.abs(b+x)<.1&&Math.abs(d+v+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(d+1)/2,S=(v+1)/2,C=(_+1)/2,P=(p+m)/4,A=(f+w)/4,F=(b+x)/4;return y>S&&y>C?y<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(y),i=P/n,o=A/n):S>C?S<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(S),n=P/i,o=F/i):C<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(C),n=A/o,i=F/o),this.set(n,i,o,e),this}let E=Math.sqrt((x-b)*(x-b)+(f-w)*(f-w)+(m-p)*(m-p));return Math.abs(E)<.001&&(E=1),this.x=(x-b)/E,this.y=(f-w)/E,this.z=(m-p)/E,this.w=Math.acos((d+v+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n0 extends hs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ls?Pe:Cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends n0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class sf extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_e,this.minFilter=_e,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i0 extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_e,this.minFilter=_e,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,a,l){let u=n[i+0],d=n[i+1],p=n[i+2],f=n[i+3];const m=o[a+0],v=o[a+1],b=o[a+2],w=o[a+3];if(l===0){t[e+0]=u,t[e+1]=d,t[e+2]=p,t[e+3]=f;return}if(l===1){t[e+0]=m,t[e+1]=v,t[e+2]=b,t[e+3]=w;return}if(f!==w||u!==m||d!==v||p!==b){let x=1-l;const _=u*m+d*v+p*b+f*w,E=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const C=Math.sqrt(y),P=Math.atan2(C,_*E);x=Math.sin(x*P)/C,l=Math.sin(l*P)/C}const S=l*E;if(u=u*x+m*S,d=d*x+v*S,p=p*x+b*S,f=f*x+w*S,x===1-l){const C=1/Math.sqrt(u*u+d*d+p*p+f*f);u*=C,d*=C,p*=C,f*=C}}t[e]=u,t[e+1]=d,t[e+2]=p,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,a){const l=n[i],u=n[i+1],d=n[i+2],p=n[i+3],f=o[a],m=o[a+1],v=o[a+2],b=o[a+3];return t[e]=l*b+p*f+u*v-d*m,t[e+1]=u*b+p*m+d*f-l*v,t[e+2]=d*b+p*v+l*m-u*f,t[e+3]=p*b-l*f-u*m-d*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,a=t._order,l=Math.cos,u=Math.sin,d=l(n/2),p=l(i/2),f=l(o/2),m=u(n/2),v=u(i/2),b=u(o/2);switch(a){case"XYZ":this._x=m*p*f+d*v*b,this._y=d*v*f-m*p*b,this._z=d*p*b+m*v*f,this._w=d*p*f-m*v*b;break;case"YXZ":this._x=m*p*f+d*v*b,this._y=d*v*f-m*p*b,this._z=d*p*b-m*v*f,this._w=d*p*f+m*v*b;break;case"ZXY":this._x=m*p*f-d*v*b,this._y=d*v*f+m*p*b,this._z=d*p*b+m*v*f,this._w=d*p*f-m*v*b;break;case"ZYX":this._x=m*p*f-d*v*b,this._y=d*v*f+m*p*b,this._z=d*p*b-m*v*f,this._w=d*p*f+m*v*b;break;case"YZX":this._x=m*p*f+d*v*b,this._y=d*v*f+m*p*b,this._z=d*p*b-m*v*f,this._w=d*p*f-m*v*b;break;case"XZY":this._x=m*p*f-d*v*b,this._y=d*v*f-m*p*b,this._z=d*p*b+m*v*f,this._w=d*p*f+m*v*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],a=e[1],l=e[5],u=e[9],d=e[2],p=e[6],f=e[10],m=n+l+f;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(p-u)*v,this._y=(o-d)*v,this._z=(a-i)*v}else if(n>l&&n>f){const v=2*Math.sqrt(1+n-l-f);this._w=(p-u)/v,this._x=.25*v,this._y=(i+a)/v,this._z=(o+d)/v}else if(l>f){const v=2*Math.sqrt(1+l-n-f);this._w=(o-d)/v,this._x=(i+a)/v,this._y=.25*v,this._z=(u+p)/v}else{const v=2*Math.sqrt(1+f-n-l);this._w=(a-i)/v,this._x=(o+d)/v,this._y=(u+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,a=t._w,l=e._x,u=e._y,d=e._z,p=e._w;return this._x=n*p+a*l+i*d-o*u,this._y=i*p+a*u+o*l-n*d,this._z=o*p+a*d+n*u-i*l,this._w=a*p-n*l-i*u-o*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,a=this._w;let l=a*t._w+n*t._x+i*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const u=1-l*l;if(u<=Number.EPSILON){const v=1-e;return this._w=v*a+e*this._w,this._x=v*n+e*this._x,this._y=v*i+e*this._y,this._z=v*o+e*this._z,this.normalize(),this}const d=Math.sqrt(u),p=Math.atan2(d,l),f=Math.sin((1-e)*p)/d,m=Math.sin(e*p)/d;return this._w=a*f+this._w*m,this._x=n*f+this._x*m,this._y=i*f+this._y*m,this._z=o*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(o),n*Math.cos(o),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,a=t.y,l=t.z,u=t.w,d=2*(a*i-l*n),p=2*(l*e-o*i),f=2*(o*n-a*e);return this.x=e+u*d+a*f-l*p,this.y=n+u*p+l*d-o*f,this.z=i+u*f+o*p-a*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,a=e.x,l=e.y,u=e.z;return this.x=i*u-o*l,this.y=o*a-n*u,this.z=n*l-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ml.copy(this).projectOnVector(t),this.sub(Ml)}reflect(t){return this.sub(Ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ml=new D,td=new Oe;class ke{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(o,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(t.matrixWorld),this.union(Ao)}const i=t.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),Co.subVectors(this.max,Or),Ss.subVectors(t.a,Or),Ts.subVectors(t.b,Or),As.subVectors(t.c,Or),Mi.subVectors(Ts,Ss),Si.subVectors(As,Ts),qi.subVectors(Ss,As);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-qi.z,qi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,qi.z,0,-qi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-qi.y,qi.x,0];return!Sl(e,Ss,Ts,As,Co)||(e=[1,0,0,0,1,0,0,0,1],!Sl(e,Ss,Ts,As,Co))?!1:(Po.crossVectors(Mi,Si),e=[Po.x,Po.y,Po.z],Sl(e,Ss,Ts,As,Co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new D,new D,new D,new D,new D,new D,new D,new D],Ln=new D,Ao=new ke,Ss=new D,Ts=new D,As=new D,Mi=new D,Si=new D,qi=new D,Or=new D,Co=new D,Po=new D,Yi=new D;function Sl(s,t,e,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){Yi.fromArray(s,o);const l=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),u=t.dot(Yi),d=e.dot(Yi),p=n.dot(Yi);if(Math.max(-Math.max(u,d,p),Math.min(u,d,p))>l)return!1}return!0}const s0=new ke,Fr=new D,Tl=new D;class zn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):s0.setFromPoints(t).getCenter(n);let i=0;for(let o=0,a=t.length;o<a;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);const e=Fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(Tl)),this.expandByPoint(Fr.copy(t.center).sub(Tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new D,Al=new D,Ro=new D,Ti=new D,Cl=new D,Lo=new D,Pl=new D;class fr{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Al.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(Al);const o=t.distanceTo(e)*.5,a=-this.direction.dot(Ro),l=Ti.dot(this.direction),u=-Ti.dot(Ro),d=Ti.lengthSq(),p=Math.abs(1-a*a);let f,m,v,b;if(p>0)if(f=a*u-l,m=a*l-u,b=o*p,f>=0)if(m>=-b)if(m<=b){const w=1/p;f*=w,m*=w,v=f*(f+a*m+2*l)+m*(a*f+m+2*u)+d}else m=o,f=Math.max(0,-(a*m+l)),v=-f*f+m*(m+2*u)+d;else m=-o,f=Math.max(0,-(a*m+l)),v=-f*f+m*(m+2*u)+d;else m<=-b?(f=Math.max(0,-(-a*o+l)),m=f>0?-o:Math.min(Math.max(-o,-u),o),v=-f*f+m*(m+2*u)+d):m<=b?(f=0,m=Math.min(Math.max(-o,-u),o),v=m*(m+2*u)+d):(f=Math.max(0,-(a*o+l)),m=f>0?o:Math.min(Math.max(-o,-u),o),v=-f*f+m*(m+2*u)+d);else m=a>0?-o:o,f=Math.max(0,-(a*m+l)),v=-f*f+m*(m+2*u)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Al).addScaledVector(Ro,m),v}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,o=t.radius*t.radius;if(i>o)return null;const a=Math.sqrt(o-i),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,a,l,u;const d=1/this.direction.x,p=1/this.direction.y,f=1/this.direction.z,m=this.origin;return d>=0?(n=(t.min.x-m.x)*d,i=(t.max.x-m.x)*d):(n=(t.max.x-m.x)*d,i=(t.min.x-m.x)*d),p>=0?(o=(t.min.y-m.y)*p,a=(t.max.y-m.y)*p):(o=(t.max.y-m.y)*p,a=(t.min.y-m.y)*p),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),f>=0?(l=(t.min.z-m.z)*f,u=(t.max.z-m.z)*f):(l=(t.max.z-m.z)*f,u=(t.min.z-m.z)*f),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,o){Cl.subVectors(e,t),Lo.subVectors(n,t),Pl.crossVectors(Cl,Lo);let a=this.direction.dot(Pl),l;if(a>0){if(i)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Ti.subVectors(this.origin,t);const u=l*this.direction.dot(Lo.crossVectors(Ti,Lo));if(u<0)return null;const d=l*this.direction.dot(Cl.cross(Ti));if(d<0||u+d>a)return null;const p=-l*Ti.dot(Pl);return p<0?null:this.at(p/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(t,e,n,i,o,a,l,u,d,p,f,m,v,b,w,x){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,l,u,d,p,f,m,v,b,w,x)}set(t,e,n,i,o,a,l,u,d,p,f,m,v,b,w,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=o,_[5]=a,_[9]=l,_[13]=u,_[2]=d,_[6]=p,_[10]=f,_[14]=m,_[3]=v,_[7]=b,_[11]=w,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Cs.setFromMatrixColumn(t,0).length(),o=1/Cs.setFromMatrixColumn(t,1).length(),a=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(i),d=Math.sin(i),p=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const m=a*p,v=a*f,b=l*p,w=l*f;e[0]=u*p,e[4]=-u*f,e[8]=d,e[1]=v+b*d,e[5]=m-w*d,e[9]=-l*u,e[2]=w-m*d,e[6]=b+v*d,e[10]=a*u}else if(t.order==="YXZ"){const m=u*p,v=u*f,b=d*p,w=d*f;e[0]=m+w*l,e[4]=b*l-v,e[8]=a*d,e[1]=a*f,e[5]=a*p,e[9]=-l,e[2]=v*l-b,e[6]=w+m*l,e[10]=a*u}else if(t.order==="ZXY"){const m=u*p,v=u*f,b=d*p,w=d*f;e[0]=m-w*l,e[4]=-a*f,e[8]=b+v*l,e[1]=v+b*l,e[5]=a*p,e[9]=w-m*l,e[2]=-a*d,e[6]=l,e[10]=a*u}else if(t.order==="ZYX"){const m=a*p,v=a*f,b=l*p,w=l*f;e[0]=u*p,e[4]=b*d-v,e[8]=m*d+w,e[1]=u*f,e[5]=w*d+m,e[9]=v*d-b,e[2]=-d,e[6]=l*u,e[10]=a*u}else if(t.order==="YZX"){const m=a*u,v=a*d,b=l*u,w=l*d;e[0]=u*p,e[4]=w-m*f,e[8]=b*f+v,e[1]=f,e[5]=a*p,e[9]=-l*p,e[2]=-d*p,e[6]=v*f+b,e[10]=m-w*f}else if(t.order==="XZY"){const m=a*u,v=a*d,b=l*u,w=l*d;e[0]=u*p,e[4]=-f,e[8]=d*p,e[1]=m*f+w,e[5]=a*p,e[9]=v*f-b,e[2]=b*f-v,e[6]=l*p,e[10]=w*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(r0,t,o0)}lookAt(t,e,n){const i=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ai.crossVectors(n,_n),Ai.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ai.crossVectors(n,_n)),Ai.normalize(),Io.crossVectors(_n,Ai),i[0]=Ai.x,i[4]=Io.x,i[8]=_n.x,i[1]=Ai.y,i[5]=Io.y,i[9]=_n.y,i[2]=Ai.z,i[6]=Io.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],l=n[4],u=n[8],d=n[12],p=n[1],f=n[5],m=n[9],v=n[13],b=n[2],w=n[6],x=n[10],_=n[14],E=n[3],y=n[7],S=n[11],C=n[15],P=i[0],A=i[4],F=i[8],V=i[12],M=i[1],L=i[5],z=i[9],j=i[13],O=i[2],G=i[6],H=i[10],X=i[14],et=i[3],tt=i[7],nt=i[11],st=i[15];return o[0]=a*P+l*M+u*O+d*et,o[4]=a*A+l*L+u*G+d*tt,o[8]=a*F+l*z+u*H+d*nt,o[12]=a*V+l*j+u*X+d*st,o[1]=p*P+f*M+m*O+v*et,o[5]=p*A+f*L+m*G+v*tt,o[9]=p*F+f*z+m*H+v*nt,o[13]=p*V+f*j+m*X+v*st,o[2]=b*P+w*M+x*O+_*et,o[6]=b*A+w*L+x*G+_*tt,o[10]=b*F+w*z+x*H+_*nt,o[14]=b*V+w*j+x*X+_*st,o[3]=E*P+y*M+S*O+C*et,o[7]=E*A+y*L+S*G+C*tt,o[11]=E*F+y*z+S*H+C*nt,o[15]=E*V+y*j+S*X+C*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],a=t[1],l=t[5],u=t[9],d=t[13],p=t[2],f=t[6],m=t[10],v=t[14],b=t[3],w=t[7],x=t[11],_=t[15];return b*(+o*u*f-i*d*f-o*l*m+n*d*m+i*l*v-n*u*v)+w*(+e*u*v-e*d*m+o*a*m-i*a*v+i*d*p-o*u*p)+x*(+e*d*f-e*l*v-o*a*f+n*a*v+o*l*p-n*d*p)+_*(-i*l*p-e*u*f+e*l*m+i*a*f-n*a*m+n*u*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],l=t[5],u=t[6],d=t[7],p=t[8],f=t[9],m=t[10],v=t[11],b=t[12],w=t[13],x=t[14],_=t[15],E=f*x*d-w*m*d+w*u*v-l*x*v-f*u*_+l*m*_,y=b*m*d-p*x*d-b*u*v+a*x*v+p*u*_-a*m*_,S=p*w*d-b*f*d+b*l*v-a*w*v-p*l*_+a*f*_,C=b*f*u-p*w*u-b*l*m+a*w*m+p*l*x-a*f*x,P=e*E+n*y+i*S+o*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return t[0]=E*A,t[1]=(w*m*o-f*x*o-w*i*v+n*x*v+f*i*_-n*m*_)*A,t[2]=(l*x*o-w*u*o+w*i*d-n*x*d-l*i*_+n*u*_)*A,t[3]=(f*u*o-l*m*o-f*i*d+n*m*d+l*i*v-n*u*v)*A,t[4]=y*A,t[5]=(p*x*o-b*m*o+b*i*v-e*x*v-p*i*_+e*m*_)*A,t[6]=(b*u*o-a*x*o-b*i*d+e*x*d+a*i*_-e*u*_)*A,t[7]=(a*m*o-p*u*o+p*i*d-e*m*d-a*i*v+e*u*v)*A,t[8]=S*A,t[9]=(b*f*o-p*w*o-b*n*v+e*w*v+p*n*_-e*f*_)*A,t[10]=(a*w*o-b*l*o+b*n*d-e*w*d-a*n*_+e*l*_)*A,t[11]=(p*l*o-a*f*o-p*n*d+e*f*d+a*n*v-e*l*v)*A,t[12]=C*A,t[13]=(p*w*i-b*f*i+b*n*m-e*w*m-p*n*x+e*f*x)*A,t[14]=(b*l*i-a*w*i-b*n*u+e*w*u+a*n*x-e*l*x)*A,t[15]=(a*f*i-p*l*i+p*n*u-e*f*u-a*n*m+e*l*m)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,a=t.x,l=t.y,u=t.z,d=o*a,p=o*l;return this.set(d*a+n,d*l-i*u,d*u+i*l,0,d*l+i*u,p*l+n,p*u-i*a,0,d*u-i*l,p*u+i*a,o*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,a){return this.set(1,n,o,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,a=e._y,l=e._z,u=e._w,d=o+o,p=a+a,f=l+l,m=o*d,v=o*p,b=o*f,w=a*p,x=a*f,_=l*f,E=u*d,y=u*p,S=u*f,C=n.x,P=n.y,A=n.z;return i[0]=(1-(w+_))*C,i[1]=(v+S)*C,i[2]=(b-y)*C,i[3]=0,i[4]=(v-S)*P,i[5]=(1-(m+_))*P,i[6]=(x+E)*P,i[7]=0,i[8]=(b+y)*A,i[9]=(x-E)*A,i[10]=(1-(m+w))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Cs.set(i[0],i[1],i[2]).length();const a=Cs.set(i[4],i[5],i[6]).length(),l=Cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],In.copy(this);const d=1/o,p=1/a,f=1/l;return In.elements[0]*=d,In.elements[1]*=d,In.elements[2]*=d,In.elements[4]*=p,In.elements[5]*=p,In.elements[6]*=p,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,e.setFromRotationMatrix(In),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,o,a,l=hi){const u=this.elements,d=2*o/(e-t),p=2*o/(n-i),f=(e+t)/(e-t),m=(n+i)/(n-i);let v,b;if(l===hi)v=-(a+o)/(a-o),b=-2*a*o/(a-o);else if(l===Pa)v=-a/(a-o),b=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,i,o,a,l=hi){const u=this.elements,d=1/(e-t),p=1/(n-i),f=1/(a-o),m=(e+t)*d,v=(n+i)*p;let b,w;if(l===hi)b=(a+o)*f,w=-2*f;else if(l===Pa)b=o*f,w=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*d,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-v,u[2]=0,u[6]=0,u[10]=w,u[14]=-b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Cs=new D,In=new Gt,r0=new D(0,0,0),o0=new D(1,1,1),Ai=new D,Io=new D,_n=new D,ed=new Gt,nd=new Oe;class uo{constructor(t=0,e=0,n=0,i=uo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],a=i[4],l=i[8],u=i[1],d=i[5],p=i[9],f=i[2],m=i[6],v=i[10];switch(e){case"XYZ":this._y=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(qe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ed.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ed,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nd.setFromEuler(this),this.setFromQuaternion(nd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uo.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let a0=0;const id=new D,Ps=new Oe,si=new Gt,Do=new D,Br=new D,l0=new D,c0=new Oe,sd=new D(1,0,0),rd=new D(0,1,0),od=new D(0,0,1),u0={type:"added"},h0={type:"removed"};class fe extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new D,e=new uo,n=new Oe,i=new D(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ie}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(sd,t)}rotateY(t){return this.rotateOnAxis(rd,t)}rotateZ(t){return this.rotateOnAxis(od,t)}translateOnAxis(t,e){return id.copy(t).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sd,t)}translateY(t){return this.translateOnAxis(rd,t)}translateZ(t){return this.translateOnAxis(od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Br,Do,this.up):si.lookAt(Do,Br,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Ps.setFromRotationMatrix(si),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(u0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(h0)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,l0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,c0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++){const l=i[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let d=0,p=u.length;d<p;d++){const f=u[d];o(t.shapes,f)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,d=this.material.length;u<d;u++)l.push(o(t.materials,this.material[u]));i.material=l}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(o(t.animations,u))}}if(e){const l=a(t.geometries),u=a(t.materials),d=a(t.textures),p=a(t.images),f=a(t.shapes),m=a(t.skeletons),v=a(t.animations),b=a(t.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=i,n;function a(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new D(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new D,ri=new D,Rl=new D,oi=new D,Rs=new D,Ls=new D,ad=new D,Ll=new D,Il=new D,Dl=new D;class hn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Dn.subVectors(t,e),i.cross(Dn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Dn.subVectors(i,e),ri.subVectors(n,e),Rl.subVectors(t,e);const a=Dn.dot(Dn),l=Dn.dot(ri),u=Dn.dot(Rl),d=ri.dot(ri),p=ri.dot(Rl),f=a*d-l*l;if(f===0)return o.set(0,0,0),null;const m=1/f,v=(d*u-l*p)*m,b=(a*p-l*u)*m;return o.set(1-v-b,b,v)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,o,a,l,u){return this.getBarycoord(t,e,n,i,oi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,oi.x),u.addScaledVector(a,oi.y),u.addScaledVector(l,oi.z),u)}static isFrontFacing(t,e,n,i){return Dn.subVectors(n,e),ri.subVectors(t,e),Dn.cross(ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Dn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let a,l;Rs.subVectors(i,n),Ls.subVectors(o,n),Ll.subVectors(t,n);const u=Rs.dot(Ll),d=Ls.dot(Ll);if(u<=0&&d<=0)return e.copy(n);Il.subVectors(t,i);const p=Rs.dot(Il),f=Ls.dot(Il);if(p>=0&&f<=p)return e.copy(i);const m=u*f-p*d;if(m<=0&&u>=0&&p<=0)return a=u/(u-p),e.copy(n).addScaledVector(Rs,a);Dl.subVectors(t,o);const v=Rs.dot(Dl),b=Ls.dot(Dl);if(b>=0&&v<=b)return e.copy(o);const w=v*d-u*b;if(w<=0&&d>=0&&b<=0)return l=d/(d-b),e.copy(n).addScaledVector(Ls,l);const x=p*b-v*f;if(x<=0&&f-p>=0&&v-b>=0)return ad.subVectors(o,i),l=(f-p)/(f-p+(v-b)),e.copy(i).addScaledVector(ad,l);const _=1/(x+w+m);return a=w*_,l=m*_,e.copy(n).addScaledVector(Rs,a).addScaledVector(Ls,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},No={h:0,s:0,l:0};function Nl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Xc(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Nl(a,o,t+1/3),this.g=Nl(a,o,t),this.b=Nl(a,o,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Pe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=i[1],l=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=rf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}copyLinearToSRGB(t){return this.r=wl(t.r),this.g=wl(t.g),this.b=wl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return he.fromWorkingColorSpace(nn.copy(this),t),Math.round(qe(nn.r*255,0,255))*65536+Math.round(qe(nn.g*255,0,255))*256+Math.round(qe(nn.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,o=nn.b,a=Math.max(n,i,o),l=Math.min(n,i,o);let u,d;const p=(l+a)/2;if(l===a)u=0,d=0;else{const f=a-l;switch(d=p<=.5?f/(a+l):f/(2-a-l),a){case n:u=(i-o)/f+(i<o?6:0);break;case i:u=(o-n)/f+2;break;case o:u=(n-i)/f+4;break}u/=6}return t.h=u,t.s=d,t.l=p,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Pe){he.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,i=nn.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(No);const n=io(Ci.h,No.h,e),i=io(Ci.s,No.s,e),o=io(Ci.l,No.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Kt;Kt.NAMES=rf;let d0=0;class Yn extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=nr,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=fc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ma&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const l in o){const u=o[l];delete u.metadata,a.push(u)}return a}if(e){const o=i(t.textures),a=i(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class jn extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new D,Uo=new Tt;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return cs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),o=de(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}}class of extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class af extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Re extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let p0=0;const Sn=new Gt,Ul=new fe,Is=new D,vn=new ke,kr=new ke,Xe=new D;class Je extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tf(t)?af:of)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ie().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return Ul.lookAt(t),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];vn.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const l=e[o];kr.setFromBufferAttribute(l),this.morphTargetsRelative?(Xe.addVectors(vn.min,kr.min),vn.expandByPoint(Xe),Xe.addVectors(vn.max,kr.max),vn.expandByPoint(Xe)):(vn.expandByPoint(kr.min),vn.expandByPoint(kr.max))}vn.getCenter(n);let i=0;for(let o=0,a=t.count;o<a;o++)Xe.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Xe));if(e)for(let o=0,a=e.length;o<a;o++){const l=e[o],u=this.morphTargetsRelative;for(let d=0,p=l.count;d<p;d++)Xe.fromBufferAttribute(l,d),u&&(Is.fromBufferAttribute(t,d),Xe.add(Is)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,o=e.normal.array,a=e.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*l),4));const u=this.getAttribute("tangent").array,d=[],p=[];for(let M=0;M<l;M++)d[M]=new D,p[M]=new D;const f=new D,m=new D,v=new D,b=new Tt,w=new Tt,x=new Tt,_=new D,E=new D;function y(M,L,z){f.fromArray(i,M*3),m.fromArray(i,L*3),v.fromArray(i,z*3),b.fromArray(a,M*2),w.fromArray(a,L*2),x.fromArray(a,z*2),m.sub(f),v.sub(f),w.sub(b),x.sub(b);const j=1/(w.x*x.y-x.x*w.y);!isFinite(j)||(_.copy(m).multiplyScalar(x.y).addScaledVector(v,-w.y).multiplyScalar(j),E.copy(v).multiplyScalar(w.x).addScaledVector(m,-x.x).multiplyScalar(j),d[M].add(_),d[L].add(_),d[z].add(_),p[M].add(E),p[L].add(E),p[z].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let M=0,L=S.length;M<L;++M){const z=S[M],j=z.start,O=z.count;for(let G=j,H=j+O;G<H;G+=3)y(n[G+0],n[G+1],n[G+2])}const C=new D,P=new D,A=new D,F=new D;function V(M){A.fromArray(o,M*3),F.copy(A);const L=d[M];C.copy(L),C.sub(A.multiplyScalar(A.dot(L))).normalize(),P.crossVectors(F,L);const j=P.dot(p[M])<0?-1:1;u[M*4]=C.x,u[M*4+1]=C.y,u[M*4+2]=C.z,u[M*4+3]=j}for(let M=0,L=S.length;M<L;++M){const z=S[M],j=z.start,O=z.count;for(let G=j,H=j+O;G<H;G+=3)V(n[G+0]),V(n[G+1]),V(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);const i=new D,o=new D,a=new D,l=new D,u=new D,d=new D,p=new D,f=new D;if(t)for(let m=0,v=t.count;m<v;m+=3){const b=t.getX(m+0),w=t.getX(m+1),x=t.getX(m+2);i.fromBufferAttribute(e,b),o.fromBufferAttribute(e,w),a.fromBufferAttribute(e,x),p.subVectors(a,o),f.subVectors(i,o),p.cross(f),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,x),l.add(p),u.add(p),d.add(p),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(w,u.x,u.y,u.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let m=0,v=e.count;m<v;m+=3)i.fromBufferAttribute(e,m+0),o.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),p.subVectors(a,o),f.subVectors(i,o),p.cross(f),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(l,u){const d=l.array,p=l.itemSize,f=l.normalized,m=new d.constructor(u.length*p);let v=0,b=0;for(let w=0,x=u.length;w<x;w++){l.isInterleavedBufferAttribute?v=u[w]*l.data.stride+l.offset:v=u[w]*p;for(let _=0;_<p;_++)m[b++]=d[v++]}return new Be(m,p,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],d=t(u,n);e.setAttribute(l,d)}const o=this.morphAttributes;for(const l in o){const u=[],d=o[l];for(let p=0,f=d.length;p<f;p++){const m=d[p],v=t(m,n);u.push(v)}e.morphAttributes[l]=u}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const d=n[u];t.data.attributes[u]=d.toJSON(t.data)}const i={};let o=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],p=[];for(let f=0,m=d.length;f<m;f++){const v=d[f];p.push(v.toJSON(t.data))}p.length>0&&(i[u]=p,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const d in i){const p=i[d];this.setAttribute(d,p.clone(e))}const o=t.morphAttributes;for(const d in o){const p=[],f=o[d];for(let m=0,v=f.length;m<v;m++)p.push(f[m].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let d=0,p=a.length;d<p;d++){const f=a[d];this.addGroup(f.start,f.count,f.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ld=new Gt,Ki=new fr,Oo=new zn,cd=new D,Ds=new D,Ns=new D,Us=new D,Ol=new D,Fo=new D,Bo=new Tt,ko=new Tt,Vo=new Tt,ud=new D,hd=new D,dd=new D,zo=new D,Ho=new D;class _t extends fe{constructor(t=new Je,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const l=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const l=this.morphTargetInfluences;if(o&&l){Fo.set(0,0,0);for(let u=0,d=o.length;u<d;u++){const p=l[u],f=o[u];p!==0&&(Ol.fromBufferAttribute(f,t),a?Fo.addScaledVector(Ol,p):Fo.addScaledVector(Ol.sub(e),p))}e.add(Fo)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(o),Ki.copy(t.ray).recast(t.near),!(Oo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Oo,cd)===null||Ki.origin.distanceToSquared(cd)>(t.far-t.near)**2))&&(ld.copy(o).invert(),Ki.copy(t.ray).applyMatrix4(ld),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let i;const o=this.geometry,a=this.material,l=o.index,u=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,f=o.attributes.normal,m=o.groups,v=o.drawRange;if(l!==null)if(Array.isArray(a))for(let b=0,w=m.length;b<w;b++){const x=m[b],_=a[x.materialIndex],E=Math.max(x.start,v.start),y=Math.min(l.count,Math.min(x.start+x.count,v.start+v.count));for(let S=E,C=y;S<C;S+=3){const P=l.getX(S),A=l.getX(S+1),F=l.getX(S+2);i=Go(this,_,t,n,d,p,f,P,A,F),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const b=Math.max(0,v.start),w=Math.min(l.count,v.start+v.count);for(let x=b,_=w;x<_;x+=3){const E=l.getX(x),y=l.getX(x+1),S=l.getX(x+2);i=Go(this,a,t,n,d,p,f,E,y,S),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let b=0,w=m.length;b<w;b++){const x=m[b],_=a[x.materialIndex],E=Math.max(x.start,v.start),y=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let S=E,C=y;S<C;S+=3){const P=S,A=S+1,F=S+2;i=Go(this,_,t,n,d,p,f,P,A,F),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const b=Math.max(0,v.start),w=Math.min(u.count,v.start+v.count);for(let x=b,_=w;x<_;x+=3){const E=x,y=x+1,S=x+2;i=Go(this,a,t,n,d,p,f,E,y,S),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}}function f0(s,t,e,n,i,o,a,l){let u;if(t.side===pn?u=n.intersectTriangle(a,o,i,!0,l):u=n.intersectTriangle(i,o,a,t.side===Bn,l),u===null)return null;Ho.copy(l),Ho.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Ho);return d<e.near||d>e.far?null:{distance:d,point:Ho.clone(),object:s}}function Go(s,t,e,n,i,o,a,l,u,d){s.getVertexPosition(l,Ds),s.getVertexPosition(u,Ns),s.getVertexPosition(d,Us);const p=f0(s,t,e,n,Ds,Ns,Us,zo);if(p){i&&(Bo.fromBufferAttribute(i,l),ko.fromBufferAttribute(i,u),Vo.fromBufferAttribute(i,d),p.uv=hn.getInterpolation(zo,Ds,Ns,Us,Bo,ko,Vo,new Tt)),o&&(Bo.fromBufferAttribute(o,l),ko.fromBufferAttribute(o,u),Vo.fromBufferAttribute(o,d),p.uv1=hn.getInterpolation(zo,Ds,Ns,Us,Bo,ko,Vo,new Tt),p.uv2=p.uv1),a&&(ud.fromBufferAttribute(a,l),hd.fromBufferAttribute(a,u),dd.fromBufferAttribute(a,d),p.normal=hn.getInterpolation(zo,Ds,Ns,Us,ud,hd,dd,new D),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const f={a:l,b:u,c:d,normal:new D,materialIndex:0};hn.getNormal(Ds,Ns,Us,f.normal),p.face=f}return p}class Ue extends Je{constructor(t=1,e=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const l=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const u=[],d=[],p=[],f=[];let m=0,v=0;b("z","y","x",-1,-1,n,e,t,a,o,0),b("z","y","x",1,-1,n,e,-t,a,o,1),b("x","z","y",1,1,t,n,e,i,a,2),b("x","z","y",1,-1,t,n,-e,i,a,3),b("x","y","z",1,-1,t,e,n,i,o,4),b("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(u),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(p,3)),this.setAttribute("uv",new Re(f,2));function b(w,x,_,E,y,S,C,P,A,F,V){const M=S/A,L=C/F,z=S/2,j=C/2,O=P/2,G=A+1,H=F+1;let X=0,et=0;const tt=new D;for(let nt=0;nt<H;nt++){const st=nt*L-j;for(let pt=0;pt<G;pt++){const vt=pt*M-z;tt[w]=vt*E,tt[x]=st*y,tt[_]=O,d.push(tt.x,tt.y,tt.z),tt[w]=0,tt[x]=0,tt[_]=P>0?1:-1,p.push(tt.x,tt.y,tt.z),f.push(pt/A),f.push(1-nt/F),X+=1}}for(let nt=0;nt<F;nt++)for(let st=0;st<A;st++){const pt=m+st+G*nt,vt=m+st+G*(nt+1),$=m+(st+1)+G*(nt+1),ct=m+(st+1)+G*nt;u.push(pt,vt,ct),u.push(vt,$,ct),et+=6}l.addGroup(v,et,V),v+=et,m+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ln(s){const t={};for(let e=0;e<s.length;e++){const n=hr(s[e]);for(const i in n)t[i]=n[i]}return t}function m0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function lf(s){return s.getRenderTarget()===null?s.outputColorSpace:he.workingColorSpace}const g0={clone:hr,merge:ln};var _0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=m0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cf extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new D,pd=new Tt,fd=new Tt;class cn extends cf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,pd,fd),e.subVectors(fd,pd)}setViewOffset(t,e,n,i,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(no*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,d=a.fullHeight;o+=a.offsetX*i/u,e-=a.offsetY*n/d,i*=a.width/u,n*=a.height/d}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Os=-90,Fs=1;class x0 extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(Os,Fs,t,e);i.layers=this.layers,this.add(i);const o=new cn(Os,Fs,t,e);o.layers=this.layers,this.add(o);const a=new cn(Os,Fs,t,e);a.layers=this.layers,this.add(a);const l=new cn(Os,Fs,t,e);l.layers=this.layers,this.add(l);const u=new cn(Os,Fs,t,e);u.layers=this.layers,this.add(u);const d=new cn(Os,Fs,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,a,l,u]=e;for(const d of e)this.remove(d);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,u,d,p]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,l),t.setRenderTarget(n,3,i),t.render(e,u),t.setRenderTarget(n,4,i),t.render(e,d),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,i),t.render(e,p),t.setRenderTarget(f,m,v),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class uf extends Ye{constructor(t,e,n,i,o,a,l,u,d,p){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,n,i,o,a,l,u,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class b0 extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ls?Pe:Cn),this.texture=new uf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ue(5,5,5),o=new kn({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Fi});o.uniforms.tEquirect.value=e;const a=new _t(i,o),l=e.minFilter;return e.minFilter===ui&&(e.minFilter=je),new x0(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(o)}}const Fl=new D,y0=new D,w0=new ie;class Wn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Fl.subVectors(n,e).cross(y0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||w0.getNormalMatrix(t),i=this.coplanarPoint(Fl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new zn,Wo=new D;class qc{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,o=new Wn,a=new Wn){this.planes=[t,e,n,i,o,a]}set(t,e,n,i,o,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(i),l[4].copy(o),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi){const n=this.planes,i=t.elements,o=i[0],a=i[1],l=i[2],u=i[3],d=i[4],p=i[5],f=i[6],m=i[7],v=i[8],b=i[9],w=i[10],x=i[11],_=i[12],E=i[13],y=i[14],S=i[15];if(n[0].setComponents(u-o,m-d,x-v,S-_).normalize(),n[1].setComponents(u+o,m+d,x+v,S+_).normalize(),n[2].setComponents(u+a,m+p,x+b,S+E).normalize(),n[3].setComponents(u-a,m-p,x-b,S-E).normalize(),n[4].setComponents(u-l,m-f,x-w,S-y).normalize(),e===hi)n[5].setComponents(u+l,m+f,x+w,S+y).normalize();else if(e===Pa)n[5].setComponents(l,f,w,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Wo.x=i.normal.x>0?t.max.x:t.min.x,Wo.y=i.normal.y>0?t.max.y:t.min.y,Wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hf(){let s=null,t=!1,e=null,n=null;function i(o,a){e(o,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function E0(s,t){const e=t.isWebGL2,n=new WeakMap;function i(d,p){const f=d.array,m=d.usage,v=f.byteLength,b=s.createBuffer();s.bindBuffer(p,b),s.bufferData(p,f,m),d.onUploadCallback();let w;if(f instanceof Float32Array)w=s.FLOAT;else if(f instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)w=s.SHORT;else if(f instanceof Uint32Array)w=s.UNSIGNED_INT;else if(f instanceof Int32Array)w=s.INT;else if(f instanceof Int8Array)w=s.BYTE;else if(f instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:b,type:w,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:v}}function o(d,p,f){const m=p.array,v=p._updateRange,b=p.updateRanges;if(s.bindBuffer(f,d),v.count===-1&&b.length===0&&s.bufferSubData(f,0,m),b.length!==0){for(let w=0,x=b.length;w<x;w++){const _=b[w];e?s.bufferSubData(f,_.start*m.BYTES_PER_ELEMENT,m,_.start,_.count):s.bufferSubData(f,_.start*m.BYTES_PER_ELEMENT,m.subarray(_.start,_.start+_.count))}p.clearUpdateRanges()}v.count!==-1&&(e?s.bufferSubData(f,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):s.bufferSubData(f,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=n.get(d);p&&(s.deleteBuffer(p.buffer),n.delete(d))}function u(d,p){if(d.isGLBufferAttribute){const m=n.get(d);(!m||m.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const f=n.get(d);if(f===void 0)n.set(d,i(d,p));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,d,p),f.version=d.version}}return{get:a,remove:l,update:u}}class ds extends Je{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,a=e/2,l=Math.floor(n),u=Math.floor(i),d=l+1,p=u+1,f=t/l,m=e/u,v=[],b=[],w=[],x=[];for(let _=0;_<p;_++){const E=_*m-a;for(let y=0;y<d;y++){const S=y*f-o;b.push(S,-E,0),w.push(0,0,1),x.push(y/l),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<l;E++){const y=E+d*_,S=E+d*(_+1),C=E+1+d*(_+1),P=E+1+d*_;v.push(y,S,P),v.push(S,C,P)}this.setIndex(v),this.setAttribute("position",new Re(b,3)),this.setAttribute("normal",new Re(w,3)),this.setAttribute("uv",new Re(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,q0=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
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
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
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
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,_x=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
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
#endif`,Ex=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
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
	#endif
#endif`,jx=`#ifdef USE_NORMALMAP
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
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
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
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,db=`#ifdef USE_SKINNING
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
#endif`,pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gb=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mb=`uniform sampler2D t2D;
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
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
}`,Rb=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Lb=`#define DISTANCE
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
}`,Ib=`#define DISTANCE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
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
}`,Fb=`#include <common>
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
}`,Bb=`uniform vec3 diffuse;
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
}`,kb=`#define LAMBERT
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
}`,Vb=`#define LAMBERT
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
}`,zb=`#define MATCAP
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
}`,Hb=`#define MATCAP
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
}`,Gb=`#define NORMAL
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
}`,Wb=`#define NORMAL
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
}`,Xb=`#define PHONG
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
}`,jb=`#define PHONG
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
}`,qb=`#define STANDARD
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
}`,Yb=`#define STANDARD
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
}`,Kb=`#define TOON
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
}`,$b=`#define TOON
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
}`,Zb=`uniform float size;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,Jb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,ty=`uniform vec3 color;
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
}`,ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ny=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:M0,alphahash_pars_fragment:S0,alphamap_fragment:T0,alphamap_pars_fragment:A0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:R0,aomap_pars_fragment:L0,batching_pars_vertex:I0,batching_vertex:D0,begin_vertex:N0,beginnormal_vertex:U0,bsdfs:O0,iridescence_fragment:F0,bumpmap_pars_fragment:B0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:H0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:j0,common:q0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:K0,displacementmap_pars_vertex:$0,displacementmap_vertex:Z0,emissivemap_fragment:Q0,emissivemap_pars_fragment:J0,colorspace_fragment:tx,colorspace_pars_fragment:ex,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:sx,envmap_pars_vertex:rx,envmap_physical_pars_fragment:_x,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:lx,fog_fragment:cx,fog_pars_fragment:ux,gradientmap_pars_fragment:hx,lightmap_fragment:dx,lightmap_pars_fragment:px,lights_lambert_fragment:fx,lights_lambert_pars_fragment:mx,lights_pars_begin:gx,lights_toon_fragment:vx,lights_toon_pars_fragment:xx,lights_phong_fragment:bx,lights_phong_pars_fragment:yx,lights_physical_fragment:wx,lights_physical_pars_fragment:Ex,lights_fragment_begin:Mx,lights_fragment_maps:Sx,lights_fragment_end:Tx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Rx,map_fragment:Lx,map_pars_fragment:Ix,map_particle_fragment:Dx,map_particle_pars_fragment:Nx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Ox,morphcolor_vertex:Fx,morphnormal_vertex:Bx,morphtarget_pars_vertex:kx,morphtarget_vertex:Vx,normal_fragment_begin:zx,normal_fragment_maps:Hx,normal_pars_fragment:Gx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:jx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:$x,opaque_fragment:Zx,packing:Qx,premultiplied_alpha_fragment:Jx,project_vertex:tb,dithering_fragment:eb,dithering_pars_fragment:nb,roughnessmap_fragment:ib,roughnessmap_pars_fragment:sb,shadowmap_pars_fragment:rb,shadowmap_pars_vertex:ob,shadowmap_vertex:ab,shadowmask_pars_fragment:lb,skinbase_vertex:cb,skinning_pars_vertex:ub,skinning_vertex:hb,skinnormal_vertex:db,specularmap_fragment:pb,specularmap_pars_fragment:fb,tonemapping_fragment:mb,tonemapping_pars_fragment:gb,transmission_fragment:_b,transmission_pars_fragment:vb,uv_pars_fragment:xb,uv_pars_vertex:bb,uv_vertex:yb,worldpos_vertex:wb,background_vert:Eb,background_frag:Mb,backgroundCube_vert:Sb,backgroundCube_frag:Tb,cube_vert:Ab,cube_frag:Cb,depth_vert:Pb,depth_frag:Rb,distanceRGBA_vert:Lb,distanceRGBA_frag:Ib,equirect_vert:Db,equirect_frag:Nb,linedashed_vert:Ub,linedashed_frag:Ob,meshbasic_vert:Fb,meshbasic_frag:Bb,meshlambert_vert:kb,meshlambert_frag:Vb,meshmatcap_vert:zb,meshmatcap_frag:Hb,meshnormal_vert:Gb,meshnormal_frag:Wb,meshphong_vert:Xb,meshphong_frag:jb,meshphysical_vert:qb,meshphysical_frag:Yb,meshtoon_vert:Kb,meshtoon_frag:$b,points_vert:Zb,points_frag:Qb,shadow_vert:Jb,shadow_frag:ty,sprite_vert:ey,sprite_frag:ny},ft={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Xn={basic:{uniforms:ln([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:ln([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:ln([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:ln([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:ln([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:ln([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:ln([ft.points,ft.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:ln([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:ln([ft.common,ft.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:ln([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:ln([ft.sprite,ft.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:ln([ft.common,ft.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:ln([ft.lights,ft.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Xn.physical={uniforms:ln([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Xo={r:0,b:0,g:0};function iy(s,t,e,n,i,o,a){const l=new Kt(0);let u=o===!0?0:1,d,p,f=null,m=0,v=null;function b(x,_){let E=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y===null?w(l,u):y&&y.isColor&&(w(y,1),E=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Da)?(p===void 0&&(p=new _t(new Ue(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:hr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(C,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),p.material.uniforms.envMap.value=y,p.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=he.getTransfer(y.colorSpace)!==ye,(f!==y||m!==y.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,f=y,m=y.version,v=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):y&&y.isTexture&&(d===void 0&&(d=new _t(new ds(2,2),new kn({name:"BackgroundMaterial",uniforms:hr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=y,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=he.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),d.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||m!==y.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,f=y,m=y.version,v=s.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null))}function w(x,_){x.getRGB(Xo,lf(s)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,_,a)}return{getClearColor:function(){return l},setClearColor:function(x,_=1){l.set(x),u=_,w(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(x){u=x,w(l,u)},render:b}}function sy(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,l={},u=x(null);let d=u,p=!1;function f(O,G,H,X,et){let tt=!1;if(a){const nt=w(X,H,G);d!==nt&&(d=nt,v(d.object)),tt=_(O,X,H,et),tt&&E(O,X,H,et)}else{const nt=G.wireframe===!0;(d.geometry!==X.id||d.program!==H.id||d.wireframe!==nt)&&(d.geometry=X.id,d.program=H.id,d.wireframe=nt,tt=!0)}et!==null&&e.update(et,s.ELEMENT_ARRAY_BUFFER),(tt||p)&&(p=!1,F(O,G,H,X),et!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(et).buffer))}function m(){return n.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function v(O){return n.isWebGL2?s.bindVertexArray(O):o.bindVertexArrayOES(O)}function b(O){return n.isWebGL2?s.deleteVertexArray(O):o.deleteVertexArrayOES(O)}function w(O,G,H){const X=H.wireframe===!0;let et=l[O.id];et===void 0&&(et={},l[O.id]=et);let tt=et[G.id];tt===void 0&&(tt={},et[G.id]=tt);let nt=tt[X];return nt===void 0&&(nt=x(m()),tt[X]=nt),nt}function x(O){const G=[],H=[],X=[];for(let et=0;et<i;et++)G[et]=0,H[et]=0,X[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:X,object:O,attributes:{},index:null}}function _(O,G,H,X){const et=d.attributes,tt=G.attributes;let nt=0;const st=H.getAttributes();for(const pt in st)if(st[pt].location>=0){const $=et[pt];let ct=tt[pt];if(ct===void 0&&(pt==="instanceMatrix"&&O.instanceMatrix&&(ct=O.instanceMatrix),pt==="instanceColor"&&O.instanceColor&&(ct=O.instanceColor)),$===void 0||$.attribute!==ct||ct&&$.data!==ct.data)return!0;nt++}return d.attributesNum!==nt||d.index!==X}function E(O,G,H,X){const et={},tt=G.attributes;let nt=0;const st=H.getAttributes();for(const pt in st)if(st[pt].location>=0){let $=tt[pt];$===void 0&&(pt==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),pt==="instanceColor"&&O.instanceColor&&($=O.instanceColor));const ct={};ct.attribute=$,$&&$.data&&(ct.data=$.data),et[pt]=ct,nt++}d.attributes=et,d.attributesNum=nt,d.index=X}function y(){const O=d.newAttributes;for(let G=0,H=O.length;G<H;G++)O[G]=0}function S(O){C(O,0)}function C(O,G){const H=d.newAttributes,X=d.enabledAttributes,et=d.attributeDivisors;H[O]=1,X[O]===0&&(s.enableVertexAttribArray(O),X[O]=1),et[O]!==G&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,G),et[O]=G)}function P(){const O=d.newAttributes,G=d.enabledAttributes;for(let H=0,X=G.length;H<X;H++)G[H]!==O[H]&&(s.disableVertexAttribArray(H),G[H]=0)}function A(O,G,H,X,et,tt,nt){nt===!0?s.vertexAttribIPointer(O,G,H,et,tt):s.vertexAttribPointer(O,G,H,X,et,tt)}function F(O,G,H,X){if(n.isWebGL2===!1&&(O.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const et=X.attributes,tt=H.getAttributes(),nt=G.defaultAttributeValues;for(const st in tt){const pt=tt[st];if(pt.location>=0){let vt=et[st];if(vt===void 0&&(st==="instanceMatrix"&&O.instanceMatrix&&(vt=O.instanceMatrix),st==="instanceColor"&&O.instanceColor&&(vt=O.instanceColor)),vt!==void 0){const $=vt.normalized,ct=vt.itemSize,Et=e.get(vt);if(Et===void 0)continue;const Dt=Et.buffer,Ot=Et.type,Mt=Et.bytesPerElement,Xt=n.isWebGL2===!0&&(Ot===s.INT||Ot===s.UNSIGNED_INT||vt.gpuType===eo);if(vt.isInterleavedBufferAttribute){const kt=vt.data,Y=kt.stride,Te=vt.offset;if(kt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<pt.locationSize;Lt++)C(pt.location+Lt,kt.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let Lt=0;Lt<pt.locationSize;Lt++)S(pt.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let Lt=0;Lt<pt.locationSize;Lt++)A(pt.location+Lt,ct/pt.locationSize,Ot,$,Y*Mt,(Te+ct/pt.locationSize*Lt)*Mt,Xt)}else{if(vt.isInstancedBufferAttribute){for(let kt=0;kt<pt.locationSize;kt++)C(pt.location+kt,vt.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let kt=0;kt<pt.locationSize;kt++)S(pt.location+kt);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let kt=0;kt<pt.locationSize;kt++)A(pt.location+kt,ct/pt.locationSize,Ot,$,ct*Mt,ct/pt.locationSize*kt*Mt,Xt)}}else if(nt!==void 0){const $=nt[st];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(pt.location,$);break;case 3:s.vertexAttrib3fv(pt.location,$);break;case 4:s.vertexAttrib4fv(pt.location,$);break;default:s.vertexAttrib1fv(pt.location,$)}}}}P()}function V(){z();for(const O in l){const G=l[O];for(const H in G){const X=G[H];for(const et in X)b(X[et].object),delete X[et];delete G[H]}delete l[O]}}function M(O){if(l[O.id]===void 0)return;const G=l[O.id];for(const H in G){const X=G[H];for(const et in X)b(X[et].object),delete X[et];delete G[H]}delete l[O.id]}function L(O){for(const G in l){const H=l[G];if(H[O.id]===void 0)continue;const X=H[O.id];for(const et in X)b(X[et].object),delete X[et];delete H[O.id]}}function z(){j(),p=!0,d!==u&&(d=u,v(d.object))}function j(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:f,reset:z,resetDefaultState:j,dispose:V,releaseStatesOfGeometry:M,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:S,disableUnusedAttributes:P}}function ry(s,t,e,n){const i=n.isWebGL2;let o;function a(p){o=p}function l(p,f){s.drawArrays(o,p,f),e.update(f,o,1)}function u(p,f,m){if(m===0)return;let v,b;if(i)v=s,b="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[b](o,p,f,m),e.update(f,o,m)}function d(p,f,m){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<m;b++)this.render(p[b],f[b]);else{v.multiDrawArraysWEBGL(o,p,0,f,0,m);let b=0;for(let w=0;w<m;w++)b+=f[w];e.update(b,o,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function oy(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext";let l=e.precision!==void 0?e.precision:"highp";const u=o(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=a||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,S=a||t.has("OES_texture_float"),C=y&&S,P=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:d,getMaxAnisotropy:i,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:p,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:b,maxAttributes:w,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:P}}function ay(s){const t=this;let e=null,n=0,i=!1,o=!1;const a=new Wn,l=new ie,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const v=f.length!==0||m||n!==0||i;return i=m,n=f.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,m){e=p(f,m,0)},this.setState=function(f,m,v){const b=f.clippingPlanes,w=f.clipIntersection,x=f.clipShadows,_=s.get(f);if(!i||b===null||b.length===0||o&&!x)o?p(null):d();else{const E=o?0:n,y=E*4;let S=_.clippingState||null;u.value=S,S=p(b,m,y,v);for(let C=0;C!==y;++C)S[C]=e[C];_.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=E}};function d(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(f,m,v,b){const w=f!==null?f.length:0;let x=null;if(w!==0){if(x=u.value,b!==!0||x===null){const _=v+w*4,E=m.matrixWorldInverse;l.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let y=0,S=v;y!==w;++y,S+=4)a.copy(f[y]).applyMatrix4(E,l),a.normal.toArray(x,S),x[S+3]=a.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,x}}function ly(s){let t=new WeakMap;function e(a,l){return l===mc?a.mapping=rr:l===gc&&(a.mapping=or),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===mc||l===gc)if(t.has(a)){const u=t.get(a).texture;return e(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const d=new b0(u.height);return d.fromEquirectangularTexture(s,a),t.set(a,d),a.addEventListener("dispose",i),e(d.texture,a.mapping)}else return null}}return a}function i(a){const l=a.target;l.removeEventListener("dispose",i);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class ho extends cf{constructor(t=-1,e=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,a=n+t,l=i+e,u=i-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,a=o+d*this.view.width,l-=p*this.view.offsetY,u=l-p*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qs=4,md=[.125,.215,.35,.446,.526,.582],ns=20,Bl=new ho,gd=new Kt;let kl=null,Vl=0,zl=0;const Ji=(1+Math.sqrt(5))/2,Bs=1/Ji,_d=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ji,Bs),new D(0,Ji,-Bs),new D(Bs,0,Ji),new D(-Bs,0,Ji),new D(Ji,Bs,0),new D(-Ji,Bs,0)];class vd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kl,Vl,zl),t.scissorTest=!1,jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:oo,format:on,colorSpace:Ke,depthBuffer:!1},i=xd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cy(o)),this._blurMaterial=uy(o,t,e)}return i}_compileMaterial(t){const e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,Bl)}_sceneToCubeUV(t,e,n,i){const l=new cn(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(gd),p.toneMapping=Bi,p.autoClear=!1;const v=new jn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),b=new _t(new Ue,v);let w=!1;const x=t.background;x?x.isColor&&(v.color.copy(x),t.background=null,w=!0):(v.color.copy(gd),w=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(l.up.set(0,u[_],0),l.lookAt(d[_],0,0)):E===1?(l.up.set(0,0,u[_]),l.lookAt(0,d[_],0)):(l.up.set(0,u[_],0),l.lookAt(0,0,d[_]));const y=this._cubeSize;jo(i,E*y,_>2?y:0,y,y),p.setRenderTarget(i),w&&p.render(b,l),p.render(t,l)}b.geometry.dispose(),b.material.dispose(),p.toneMapping=m,p.autoClear=f,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===rr||t.mapping===or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const u=this._cubeSize;jo(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(a,Bl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=_d[(i-1)%_d.length];this._blur(t,i-1,i,o,a)}e.autoClear=n}_blur(t,e,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",o),this._halfBlur(a,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,a,l){const u=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,f=new _t(this._lodPlanes[i],d),m=d.uniforms,v=this._sizeLods[n]-1,b=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*ns-1),w=o/b,x=isFinite(o)?1+Math.floor(p*w):ns;x>ns&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ns}`);const _=[];let E=0;for(let A=0;A<ns;++A){const F=A/w,V=Math.exp(-F*F/2);_.push(V),A===0?E+=V:A<x&&(E+=2*V)}for(let A=0;A<_.length;A++)_[A]=_[A]/E;m.envMap.value=t.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=a==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:y}=this;m.dTheta.value=b,m.mipInt.value=y-n;const S=this._sizeLods[i],C=3*S*(i>y-Qs?i-y+Qs:0),P=4*(this._cubeSize-S);jo(e,C,P,3*S,2*S),u.setRenderTarget(e),u.render(f,Bl)}}function cy(s){const t=[],e=[],n=[];let i=s;const o=s-Qs+1+md.length;for(let a=0;a<o;a++){const l=Math.pow(2,i);e.push(l);let u=1/l;a>s-Qs?u=md[a-s+Qs-1]:a===0&&(u=0),n.push(u);const d=1/(l-2),p=-d,f=1+d,m=[p,p,f,p,f,f,p,p,f,f,p,f],v=6,b=6,w=3,x=2,_=1,E=new Float32Array(w*b*v),y=new Float32Array(x*b*v),S=new Float32Array(_*b*v);for(let P=0;P<v;P++){const A=P%3*2/3-1,F=P>2?0:-1,V=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];E.set(V,w*b*P),y.set(m,x*b*P);const M=[P,P,P,P,P,P];S.set(M,_*b*P)}const C=new Je;C.setAttribute("position",new Be(E,w)),C.setAttribute("uv",new Be(y,x)),C.setAttribute("faceIndex",new Be(S,_)),t.push(C),i>Qs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xd(s,t,e){const n=new pi(s,t,e);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function uy(s,t,e){const n=new Float32Array(ns),i=new D(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function bd(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function yd(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}function hy(s){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const u=l.mapping,d=u===mc||u===gc,p=u===rr||u===or;if(d||p)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let f=t.get(l);return e===null&&(e=new vd(s)),f=d?e.fromEquirectangular(l,f):e.fromCubemap(l,f),t.set(l,f),f.texture}else{if(t.has(l))return t.get(l).texture;{const f=l.image;if(d&&f&&f.height>0||p&&f&&i(f)){e===null&&(e=new vd(s));const m=d?e.fromEquirectangular(l):e.fromCubemap(l);return t.set(l,m),l.addEventListener("dispose",o),m.texture}else return null}}}return l}function i(l){let u=0;const d=6;for(let p=0;p<d;p++)l[p]!==void 0&&u++;return u===d}function o(l){const u=l.target;u.removeEventListener("dispose",o);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function dy(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function py(s,t,e,n){const i={},o=new WeakMap;function a(f){const m=f.target;m.index!==null&&t.remove(m.index);for(const b in m.attributes)t.remove(m.attributes[b]);for(const b in m.morphAttributes){const w=m.morphAttributes[b];for(let x=0,_=w.length;x<_;x++)t.remove(w[x])}m.removeEventListener("dispose",a),delete i[m.id];const v=o.get(m);v&&(t.remove(v),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function l(f,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,e.memory.geometries++),m}function u(f){const m=f.attributes;for(const b in m)t.update(m[b],s.ARRAY_BUFFER);const v=f.morphAttributes;for(const b in v){const w=v[b];for(let x=0,_=w.length;x<_;x++)t.update(w[x],s.ARRAY_BUFFER)}}function d(f){const m=[],v=f.index,b=f.attributes.position;let w=0;if(v!==null){const E=v.array;w=v.version;for(let y=0,S=E.length;y<S;y+=3){const C=E[y+0],P=E[y+1],A=E[y+2];m.push(C,P,P,A,A,C)}}else if(b!==void 0){const E=b.array;w=b.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const C=y+0,P=y+1,A=y+2;m.push(C,P,P,A,A,C)}}else return;const x=new(tf(m)?af:of)(m,1);x.version=w;const _=o.get(f);_&&t.remove(_),o.set(f,x)}function p(f){const m=o.get(f);if(m){const v=f.index;v!==null&&m.version<v.version&&d(f)}else d(f);return o.get(f)}return{get:l,update:u,getWireframeAttribute:p}}function fy(s,t,e,n){const i=n.isWebGL2;let o;function a(v){o=v}let l,u;function d(v){l=v.type,u=v.bytesPerElement}function p(v,b){s.drawElements(o,b,l,v*u),e.update(b,o,1)}function f(v,b,w){if(w===0)return;let x,_;if(i)x=s,_="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](o,b,l,v*u,w),e.update(b,o,w)}function m(v,b,w){if(w===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<w;_++)this.render(v[_]/u,b[_]);else{x.multiDrawElementsWEBGL(o,b,0,l,v,0,w);let _=0;for(let E=0;E<w;E++)_+=b[E];e.update(_,o,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=f,this.renderMultiDraw=m}function my(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,l){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=l*(o/3);break;case s.LINES:e.lines+=l*(o/2);break;case s.LINE_STRIP:e.lines+=l*(o-1);break;case s.LINE_LOOP:e.lines+=l*o;break;case s.POINTS:e.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function gy(s,t){return s[0]-t[0]}function _y(s,t){return Math.abs(t[1])-Math.abs(s[1])}function vy(s,t,e){const n={},i=new Float32Array(8),o=new WeakMap,a=new ve,l=[];for(let d=0;d<8;d++)l[d]=[d,0];function u(d,p,f){const m=d.morphTargetInfluences;if(t.isWebGL2===!0){const b=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=b!==void 0?b.length:0;let x=o.get(p);if(x===void 0||x.count!==w){let G=function(){j.dispose(),o.delete(p),p.removeEventListener("dispose",G)};var v=G;x!==void 0&&x.texture.dispose();const y=p.morphAttributes.position!==void 0,S=p.morphAttributes.normal!==void 0,C=p.morphAttributes.color!==void 0,P=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let V=0;y===!0&&(V=1),S===!0&&(V=2),C===!0&&(V=3);let M=p.attributes.position.count*V,L=1;M>t.maxTextureSize&&(L=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const z=new Float32Array(M*L*4*w),j=new sf(z,M,L,w);j.type=Qe,j.needsUpdate=!0;const O=V*4;for(let H=0;H<w;H++){const X=P[H],et=A[H],tt=F[H],nt=M*L*4*H;for(let st=0;st<X.count;st++){const pt=st*O;y===!0&&(a.fromBufferAttribute(X,st),z[nt+pt+0]=a.x,z[nt+pt+1]=a.y,z[nt+pt+2]=a.z,z[nt+pt+3]=0),S===!0&&(a.fromBufferAttribute(et,st),z[nt+pt+4]=a.x,z[nt+pt+5]=a.y,z[nt+pt+6]=a.z,z[nt+pt+7]=0),C===!0&&(a.fromBufferAttribute(tt,st),z[nt+pt+8]=a.x,z[nt+pt+9]=a.y,z[nt+pt+10]=a.z,z[nt+pt+11]=tt.itemSize===4?a.w:1)}}x={count:w,texture:j,size:new Tt(M,L)},o.set(p,x),p.addEventListener("dispose",G)}let _=0;for(let y=0;y<m.length;y++)_+=m[y];const E=p.morphTargetsRelative?1:1-_;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const b=m===void 0?0:m.length;let w=n[p.id];if(w===void 0||w.length!==b){w=[];for(let S=0;S<b;S++)w[S]=[S,0];n[p.id]=w}for(let S=0;S<b;S++){const C=w[S];C[0]=S,C[1]=m[S]}w.sort(_y);for(let S=0;S<8;S++)S<b&&w[S][1]?(l[S][0]=w[S][0],l[S][1]=w[S][1]):(l[S][0]=Number.MAX_SAFE_INTEGER,l[S][1]=0);l.sort(gy);const x=p.morphAttributes.position,_=p.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const C=l[S],P=C[0],A=C[1];P!==Number.MAX_SAFE_INTEGER&&A?(x&&p.getAttribute("morphTarget"+S)!==x[P]&&p.setAttribute("morphTarget"+S,x[P]),_&&p.getAttribute("morphNormal"+S)!==_[P]&&p.setAttribute("morphNormal"+S,_[P]),i[S]=A,E+=A):(x&&p.hasAttribute("morphTarget"+S)===!0&&p.deleteAttribute("morphTarget"+S),_&&p.hasAttribute("morphNormal"+S)===!0&&p.deleteAttribute("morphNormal"+S),i[S]=0)}const y=p.morphTargetsRelative?1:1-E;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:u}}function xy(s,t,e,n){let i=new WeakMap;function o(u){const d=n.render.frame,p=u.geometry,f=t.get(u,p);if(i.get(f)!==d&&(t.update(f),i.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),i.get(u)!==d&&(e.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,s.ARRAY_BUFFER),i.set(u,d))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==d&&(m.update(),i.set(m,d))}return f}function a(){i=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}class df extends Ye{constructor(t,e,n,i,o,a,l,u,d,p){if(p=p!==void 0?p:as,p!==as&&p!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===as&&(n=xn),n===void 0&&p===lr&&(n=os),super(null,i,o,a,l,u,p,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:_e,this.minFilter=u!==void 0?u:_e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pf=new Ye,ff=new df(1,1);ff.compareFunction=Qp;const mf=new sf,gf=new i0,_f=new uf,wd=[],Ed=[],Md=new Float32Array(16),Sd=new Float32Array(9),Td=new Float32Array(4);function mr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=wd[i];if(o===void 0&&(o=new Float32Array(i),wd[i]=o),t!==0){n.toArray(o,0);for(let a=1,l=0;a!==t;++a)l+=e,s[a].toArray(o,l)}return o}function He(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Fa(s,t){let e=Ed[t];e===void 0&&(e=new Int32Array(t),Ed[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function by(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function wy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function Ey(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function My(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Td.set(n),s.uniformMatrix2fv(this.addr,!1,Td),Ge(e,n)}}function Sy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Sd.set(n),s.uniformMatrix3fv(this.addr,!1,Sd),Ge(e,n)}}function Ty(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Md.set(n),s.uniformMatrix4fv(this.addr,!1,Md),Ge(e,n)}}function Ay(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Cy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function Py(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function Ry(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function Ly(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Iy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function Dy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function Ny(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function Uy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const o=this.type===s.SAMPLER_2D_SHADOW?ff:pf;e.setTexture2D(t||o,i)}function Oy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gf,i)}function Fy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_f,i)}function By(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mf,i)}function ky(s){switch(s){case 5126:return by;case 35664:return yy;case 35665:return wy;case 35666:return Ey;case 35674:return My;case 35675:return Sy;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Cy;case 35668:case 35672:return Py;case 35669:case 35673:return Ry;case 5125:return Ly;case 36294:return Iy;case 36295:return Dy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return By}}function Vy(s,t){s.uniform1fv(this.addr,t)}function zy(s,t){const e=mr(t,this.size,2);s.uniform2fv(this.addr,e)}function Hy(s,t){const e=mr(t,this.size,3);s.uniform3fv(this.addr,e)}function Gy(s,t){const e=mr(t,this.size,4);s.uniform4fv(this.addr,e)}function Wy(s,t){const e=mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xy(s,t){const e=mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function jy(s,t){const e=mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function qy(s,t){s.uniform1iv(this.addr,t)}function Yy(s,t){s.uniform2iv(this.addr,t)}function Ky(s,t){s.uniform3iv(this.addr,t)}function $y(s,t){s.uniform4iv(this.addr,t)}function Zy(s,t){s.uniform1uiv(this.addr,t)}function Qy(s,t){s.uniform2uiv(this.addr,t)}function Jy(s,t){s.uniform3uiv(this.addr,t)}function tw(s,t){s.uniform4uiv(this.addr,t)}function ew(s,t,e){const n=this.cache,i=t.length,o=Fa(e,i);He(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||pf,o[a])}function nw(s,t,e){const n=this.cache,i=t.length,o=Fa(e,i);He(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||gf,o[a])}function iw(s,t,e){const n=this.cache,i=t.length,o=Fa(e,i);He(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||_f,o[a])}function sw(s,t,e){const n=this.cache,i=t.length,o=Fa(e,i);He(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||mf,o[a])}function rw(s){switch(s){case 5126:return Vy;case 35664:return zy;case 35665:return Hy;case 35666:return Gy;case 35674:return Wy;case 35675:return Xy;case 35676:return jy;case 5124:case 35670:return qy;case 35667:case 35671:return Yy;case 35668:case 35672:return Ky;case 35669:case 35673:return $y;case 5125:return Zy;case 36294:return Qy;case 36295:return Jy;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return sw}}class ow{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ky(e.type)}}class aw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rw(e.type)}}class lw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const l=i[o];l.setValue(t,e[l.id],n)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function Ad(s,t){s.seq.push(t),s.map[t.id]=t}function cw(s,t,e){const n=s.name,i=n.length;for(Hl.lastIndex=0;;){const o=Hl.exec(n),a=Hl.lastIndex;let l=o[1];const u=o[2]==="]",d=o[3];if(u&&(l=l|0),d===void 0||d==="["&&a+2===i){Ad(e,d===void 0?new ow(l,s,t):new aw(l,s,t));break}else{let f=e.map[l];f===void 0&&(f=new lw(l),Ad(e,f)),e=f}}}class ba{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),a=t.getUniformLocation(e,o.name);cw(o,a,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,a=e.length;o!==a;++o){const l=e[o],u=n[l.id];u.needsUpdate!==!1&&l.setValue(t,u.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Cd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const uw=37297;let hw=0;function dw(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=i;a<o;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}function pw(s){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(s);let n;switch(t===e?n="":t===Ca&&e===Aa?n="LinearDisplayP3ToLinearSRGB":t===Aa&&e===Ca&&(n="LinearSRGBToLinearDisplayP3"),s){case Ke:case Oa:return[n,"LinearTransferOETF"];case Pe:case Wc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Pd(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+dw(s.getShaderSource(t),a)}else return i}function fw(s,t){const e=pw(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mw(s,t){let e;switch(t){case fv:e="Linear";break;case mv:e="Reinhard";break;case gv:e="OptimizedCineon";break;case _v:e="ACESFilmic";break;case xv:e="AgX";break;case vv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function gw(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function _w(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function vw(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xw(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),a=o.name;let l=1;o.type===s.FLOAT_MAT2&&(l=2),o.type===s.FLOAT_MAT3&&(l=3),o.type===s.FLOAT_MAT4&&(l=4),e[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:l}}return e}function Js(s){return s!==""}function Rd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ld(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(s){return s.replace(bw,ww)}const yw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ww(s,t){let e=te[t];if(e===void 0){const n=yw.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ec(e)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(s){return s.replace(Ew,Mw)}function Mw(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Dd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(t+=`precision ${s.precision} sampler3D;
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
		`),s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sw(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vp?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===H_?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function Tw(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rr:case or:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Aw(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case or:t="ENVMAP_MODE_REFRACTION";break}return t}function Cw(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zp:t="ENVMAP_BLENDING_MULTIPLY";break;case dv:t="ENVMAP_BLENDING_MIX";break;case pv:t="ENVMAP_BLENDING_ADD";break}return t}function Pw(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rw(s,t,e,n){const i=s.getContext(),o=e.defines;let a=e.vertexShader,l=e.fragmentShader;const u=Sw(e),d=Tw(e),p=Aw(e),f=Cw(e),m=Pw(e),v=e.isWebGL2?"":gw(e),b=_w(e),w=vw(o),x=i.createProgram();let _,E,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Js).join(`
`),_.length>0&&(_+=`
`),E=[v,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Js).join(`
`),E.length>0&&(E+=`
`)):(_=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),E=[v,Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?te.tonemapping_pars_fragment:"",e.toneMapping!==Bi?mw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,fw("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),a=Ec(a),a=Rd(a,e),a=Ld(a,e),l=Ec(l),l=Rd(l,e),l=Ld(l,e),a=Id(a),l=Id(l),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=y+_+a,C=y+E+l,P=Cd(i,i.VERTEX_SHADER,S),A=Cd(i,i.FRAGMENT_SHADER,C);i.attachShader(x,P),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function F(z){if(s.debug.checkShaderErrors){const j=i.getProgramInfoLog(x).trim(),O=i.getShaderInfoLog(P).trim(),G=i.getShaderInfoLog(A).trim();let H=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,A);else{const et=Pd(i,P,"vertex"),tt=Pd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+j+`
`+et+`
`+tt)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(O===""||G==="")&&(X=!1);X&&(z.diagnostics={runnable:H,programLog:j,vertexShader:{log:O,prefix:_},fragmentShader:{log:G,prefix:E}})}i.deleteShader(P),i.deleteShader(A),V=new ba(i,x),M=xw(i,x)}let V;this.getUniforms=function(){return V===void 0&&F(this),V};let M;this.getAttributes=function(){return M===void 0&&F(this),M};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(x,uw)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let Lw=0;class Iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dw(t),e.set(t,n)),n}}class Dw{constructor(t){this.id=Lw++,this.code=t,this.usedTimes=0}}function Nw(s,t,e,n,i,o,a){const l=new jc,u=new Iw,d=new Set,p=[],f=i.isWebGL2,m=i.logarithmicDepthBuffer,v=i.vertexTextures;let b=i.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return d.add(M),M===0?"uv":`uv${M}`}function _(M,L,z,j,O){const G=j.fog,H=O.geometry,X=M.isMeshStandardMaterial?j.environment:null,et=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),tt=!!et&&et.mapping===Da?et.image.height:null,nt=w[M.type];M.precision!==null&&(b=i.getMaxPrecision(M.precision),b!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",b,"instead."));const st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pt=st!==void 0?st.length:0;let vt=0;H.morphAttributes.position!==void 0&&(vt=1),H.morphAttributes.normal!==void 0&&(vt=2),H.morphAttributes.color!==void 0&&(vt=3);let $,ct,Et,Dt;if(nt){const ee=Xn[nt];$=ee.vertexShader,ct=ee.fragmentShader}else $=M.vertexShader,ct=M.fragmentShader,u.update(M),Et=u.getVertexShaderID(M),Dt=u.getFragmentShaderID(M);const Ot=s.getRenderTarget(),Mt=O.isInstancedMesh===!0,Xt=O.isBatchedMesh===!0,kt=!!M.map,Y=!!M.matcap,Te=!!et,Lt=!!M.aoMap,zt=!!M.lightMap,At=!!M.bumpMap,me=!!M.normalMap,Wt=!!M.displacementMap,N=!!M.emissiveMap,R=!!M.metalnessMap,K=!!M.roughnessMap,ht=M.anisotropy>0,ot=M.clearcoat>0,lt=M.iridescence>0,St=M.sheen>0,mt=M.transmission>0,bt=ht&&!!M.anisotropyMap,Ft=ot&&!!M.clearcoatMap,Vt=ot&&!!M.clearcoatNormalMap,rt=ot&&!!M.clearcoatRoughnessMap,se=lt&&!!M.iridescenceMap,Jt=lt&&!!M.iridescenceThicknessMap,Ht=St&&!!M.sheenColorMap,Ct=St&&!!M.sheenRoughnessMap,xt=!!M.specularMap,$t=!!M.specularColorMap,B=!!M.specularIntensityMap,dt=mt&&!!M.transmissionMap,gt=mt&&!!M.thicknessMap,Pt=!!M.gradientMap,U=!!M.alphaMap,it=M.alphaTest>0,at=!!M.alphaHash,wt=!!M.extensions;let Nt=Bi;M.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const ne={isWebGL2:f,shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:ct,defines:M.defines,customVertexShaderID:Et,customFragmentShaderID:Dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:b,batching:Xt,instancing:Mt,instancingColor:Mt&&O.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Ot===null?s.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:Ke,alphaToCoverage:!!M.alphaToCoverage,map:kt,matcap:Y,envMap:Te,envMapMode:Te&&et.mapping,envMapCubeUVHeight:tt,aoMap:Lt,lightMap:zt,bumpMap:At,normalMap:me,displacementMap:v&&Wt,emissiveMap:N,normalMapObjectSpace:me&&M.normalMapType===Rv,normalMapTangentSpace:me&&M.normalMapType===Zp,metalnessMap:R,roughnessMap:K,anisotropy:ht,anisotropyMap:bt,clearcoat:ot,clearcoatMap:Ft,clearcoatNormalMap:Vt,clearcoatRoughnessMap:rt,iridescence:lt,iridescenceMap:se,iridescenceThicknessMap:Jt,sheen:St,sheenColorMap:Ht,sheenRoughnessMap:Ct,specularMap:xt,specularColorMap:$t,specularIntensityMap:B,transmission:mt,transmissionMap:dt,thicknessMap:gt,gradientMap:Pt,opaque:M.transparent===!1&&M.blending===nr&&M.alphaToCoverage===!1,alphaMap:U,alphaTest:it,alphaHash:at,combine:M.combine,mapUv:kt&&x(M.map.channel),aoMapUv:Lt&&x(M.aoMap.channel),lightMapUv:zt&&x(M.lightMap.channel),bumpMapUv:At&&x(M.bumpMap.channel),normalMapUv:me&&x(M.normalMap.channel),displacementMapUv:Wt&&x(M.displacementMap.channel),emissiveMapUv:N&&x(M.emissiveMap.channel),metalnessMapUv:R&&x(M.metalnessMap.channel),roughnessMapUv:K&&x(M.roughnessMap.channel),anisotropyMapUv:bt&&x(M.anisotropyMap.channel),clearcoatMapUv:Ft&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(M.sheenRoughnessMap.channel),specularMapUv:xt&&x(M.specularMap.channel),specularColorMapUv:$t&&x(M.specularColorMap.channel),specularIntensityMapUv:B&&x(M.specularIntensityMap.channel),transmissionMapUv:dt&&x(M.transmissionMap.channel),thicknessMapUv:gt&&x(M.thicknessMap.channel),alphaMapUv:U&&x(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(me||ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(kt||U),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:vt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:kt&&M.map.isVideoTexture===!0&&he.getTransfer(M.map.colorSpace)===ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===un,flipSided:M.side===pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:wt&&M.extensions.derivatives===!0,extensionFragDepth:wt&&M.extensions.fragDepth===!0,extensionDrawBuffers:wt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:wt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:wt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:wt&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ne.vertexUv1s=d.has(1),ne.vertexUv2s=d.has(2),ne.vertexUv3s=d.has(3),d.clear(),ne}function E(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)L.push(z),L.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(y(L,M),S(L,M),L.push(s.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function y(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function S(M,L){l.disableAll(),L.isWebGL2&&l.enable(0),L.supportsVertexTextures&&l.enable(1),L.instancing&&l.enable(2),L.instancingColor&&l.enable(3),L.matcap&&l.enable(4),L.envMap&&l.enable(5),L.normalMapObjectSpace&&l.enable(6),L.normalMapTangentSpace&&l.enable(7),L.clearcoat&&l.enable(8),L.iridescence&&l.enable(9),L.alphaTest&&l.enable(10),L.vertexColors&&l.enable(11),L.vertexAlphas&&l.enable(12),L.vertexUv1s&&l.enable(13),L.vertexUv2s&&l.enable(14),L.vertexUv3s&&l.enable(15),L.vertexTangents&&l.enable(16),L.anisotropy&&l.enable(17),L.alphaHash&&l.enable(18),L.batching&&l.enable(19),M.push(l.mask),l.disableAll(),L.fog&&l.enable(0),L.useFog&&l.enable(1),L.flatShading&&l.enable(2),L.logarithmicDepthBuffer&&l.enable(3),L.skinning&&l.enable(4),L.morphTargets&&l.enable(5),L.morphNormals&&l.enable(6),L.morphColors&&l.enable(7),L.premultipliedAlpha&&l.enable(8),L.shadowMapEnabled&&l.enable(9),L.useLegacyLights&&l.enable(10),L.doubleSided&&l.enable(11),L.flipSided&&l.enable(12),L.useDepthPacking&&l.enable(13),L.dithering&&l.enable(14),L.transmission&&l.enable(15),L.sheen&&l.enable(16),L.opaque&&l.enable(17),L.pointsUvs&&l.enable(18),L.decodeVideoTexture&&l.enable(19),L.alphaToCoverage&&l.enable(20),M.push(l.mask)}function C(M){const L=w[M.type];let z;if(L){const j=Xn[L];z=g0.clone(j.uniforms)}else z=M.uniforms;return z}function P(M,L){let z;for(let j=0,O=p.length;j<O;j++){const G=p[j];if(G.cacheKey===L){z=G,++z.usedTimes;break}}return z===void 0&&(z=new Rw(s,L,M,o),p.push(z)),z}function A(M){if(--M.usedTimes===0){const L=p.indexOf(M);p[L]=p[p.length-1],p.pop(),M.destroy()}}function F(M){u.remove(M)}function V(){u.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:C,acquireProgram:P,releaseProgram:A,releaseShaderCache:F,programs:p,dispose:V}}function Uw(){let s=new WeakMap;function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function e(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Ow(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Nd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ud(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function a(f,m,v,b,w,x){let _=s[t];return _===void 0?(_={id:f.id,object:f,geometry:m,material:v,groupOrder:b,renderOrder:f.renderOrder,z:w,group:x},s[t]=_):(_.id=f.id,_.object=f,_.geometry=m,_.material=v,_.groupOrder=b,_.renderOrder=f.renderOrder,_.z=w,_.group=x),t++,_}function l(f,m,v,b,w,x){const _=a(f,m,v,b,w,x);v.transmission>0?n.push(_):v.transparent===!0?i.push(_):e.push(_)}function u(f,m,v,b,w,x){const _=a(f,m,v,b,w,x);v.transmission>0?n.unshift(_):v.transparent===!0?i.unshift(_):e.unshift(_)}function d(f,m){e.length>1&&e.sort(f||Ow),n.length>1&&n.sort(m||Nd),i.length>1&&i.sort(m||Nd)}function p(){for(let f=t,m=s.length;f<m;f++){const v=s[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:l,unshift:u,finish:p,sort:d}}function Fw(){let s=new WeakMap;function t(n,i){const o=s.get(n);let a;return o===void 0?(a=new Ud,s.set(n,[a])):i>=o.length?(a=new Ud,o.push(a)):a=o[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Bw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Kt};break;case"SpotLight":e={position:new D,direction:new D,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function kw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Vw=0;function zw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Hw(s,t){const e=new Bw,n=kw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new D);const o=new D,a=new Gt,l=new Gt;function u(p,f){let m=0,v=0,b=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let w=0,x=0,_=0,E=0,y=0,S=0,C=0,P=0,A=0,F=0,V=0;p.sort(zw);const M=f===!0?Math.PI:1;for(let z=0,j=p.length;z<j;z++){const O=p[z],G=O.color,H=O.intensity,X=O.distance,et=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)m+=G.r*H*M,v+=G.g*H*M,b+=G.b*H*M;else if(O.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(O.sh.coefficients[tt],H);V++}else if(O.isDirectionalLight){const tt=e.get(O);if(tt.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){const nt=O.shadow,st=n.get(O);st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,i.directionalShadow[w]=st,i.directionalShadowMap[w]=et,i.directionalShadowMatrix[w]=O.shadow.matrix,S++}i.directional[w]=tt,w++}else if(O.isSpotLight){const tt=e.get(O);tt.position.setFromMatrixPosition(O.matrixWorld),tt.color.copy(G).multiplyScalar(H*M),tt.distance=X,tt.coneCos=Math.cos(O.angle),tt.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),tt.decay=O.decay,i.spot[_]=tt;const nt=O.shadow;if(O.map&&(i.spotLightMap[A]=O.map,A++,nt.updateMatrices(O),O.castShadow&&F++),i.spotLightMatrix[_]=nt.matrix,O.castShadow){const st=n.get(O);st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,i.spotShadow[_]=st,i.spotShadowMap[_]=et,P++}_++}else if(O.isRectAreaLight){const tt=e.get(O);tt.color.copy(G).multiplyScalar(H),tt.halfWidth.set(O.width*.5,0,0),tt.halfHeight.set(0,O.height*.5,0),i.rectArea[E]=tt,E++}else if(O.isPointLight){const tt=e.get(O);if(tt.color.copy(O.color).multiplyScalar(O.intensity*M),tt.distance=O.distance,tt.decay=O.decay,O.castShadow){const nt=O.shadow,st=n.get(O);st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,i.pointShadow[x]=st,i.pointShadowMap[x]=et,i.pointShadowMatrix[x]=O.shadow.matrix,C++}i.point[x]=tt,x++}else if(O.isHemisphereLight){const tt=e.get(O);tt.skyColor.copy(O.color).multiplyScalar(H*M),tt.groundColor.copy(O.groundColor).multiplyScalar(H*M),i.hemi[y]=tt,y++}}E>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=v,i.ambient[2]=b;const L=i.hash;(L.directionalLength!==w||L.pointLength!==x||L.spotLength!==_||L.rectAreaLength!==E||L.hemiLength!==y||L.numDirectionalShadows!==S||L.numPointShadows!==C||L.numSpotShadows!==P||L.numSpotMaps!==A||L.numLightProbes!==V)&&(i.directional.length=w,i.spot.length=_,i.rectArea.length=E,i.point.length=x,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=P+A-F,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=V,L.directionalLength=w,L.pointLength=x,L.spotLength=_,L.rectAreaLength=E,L.hemiLength=y,L.numDirectionalShadows=S,L.numPointShadows=C,L.numSpotShadows=P,L.numSpotMaps=A,L.numLightProbes=V,i.version=Vw++)}function d(p,f){let m=0,v=0,b=0,w=0,x=0;const _=f.matrixWorldInverse;for(let E=0,y=p.length;E<y;E++){const S=p[E];if(S.isDirectionalLight){const C=i.directional[m];C.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(_),m++}else if(S.isSpotLight){const C=i.spot[b];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(_),C.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(_),b++}else if(S.isRectAreaLight){const C=i.rectArea[w];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(_),l.identity(),a.copy(S.matrixWorld),a.premultiply(_),l.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),w++}else if(S.isPointLight){const C=i.point[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(_),v++}else if(S.isHemisphereLight){const C=i.hemi[x];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(_),x++}}}return{setup:u,setupView:d,state:i}}function Od(s,t){const e=new Hw(s,t),n=[],i=[];function o(){n.length=0,i.length=0}function a(f){n.push(f)}function l(f){i.push(f)}function u(f){e.setup(n,f)}function d(f){e.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l}}function Gw(s,t){let e=new WeakMap;function n(o,a=0){const l=e.get(o);let u;return l===void 0?(u=new Od(s,t),e.set(o,[u])):a>=l.length?(u=new Od(s,t),l.push(u)):u=l[a],u}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ww extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xw extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qw=`uniform sampler2D shadow_pass;
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
}`;function Yw(s,t,e){let n=new qc;const i=new Tt,o=new Tt,a=new ve,l=new Ww({depthPacking:Pv}),u=new Xw,d={},p=e.maxTextureSize,f={[Bn]:pn,[pn]:Bn,[un]:un},m=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:jw,fragmentShader:qw}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const b=new Je;b.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new _t(b,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vp;let _=this.type;this.render=function(P,A,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const V=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Fi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const j=_!==li&&this.type===li,O=_===li&&this.type!==li;for(let G=0,H=P.length;G<H;G++){const X=P[G],et=X.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;i.copy(et.mapSize);const tt=et.getFrameExtents();if(i.multiply(tt),o.copy(et.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(o.x=Math.floor(p/tt.x),i.x=o.x*tt.x,et.mapSize.x=o.x),i.y>p&&(o.y=Math.floor(p/tt.y),i.y=o.y*tt.y,et.mapSize.y=o.y)),et.map===null||j===!0||O===!0){const st=this.type!==li?{minFilter:_e,magFilter:_e}:{};et.map!==null&&et.map.dispose(),et.map=new pi(i.x,i.y,st),et.map.texture.name=X.name+".shadowMap",et.camera.updateProjectionMatrix()}s.setRenderTarget(et.map),s.clear();const nt=et.getViewportCount();for(let st=0;st<nt;st++){const pt=et.getViewport(st);a.set(o.x*pt.x,o.y*pt.y,o.x*pt.z,o.y*pt.w),z.viewport(a),et.updateMatrices(X,st),n=et.getFrustum(),S(A,F,et.camera,X,this.type)}et.isPointLightShadow!==!0&&this.type===li&&E(et,F),et.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(V,M,L)};function E(P,A){const F=t.update(w);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new pi(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(A,null,F,m,w,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(A,null,F,v,w,null)}function y(P,A,F,V){let M=null;const L=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)M=L;else if(M=F.isPointLight===!0?u:l,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,j=A.uuid;let O=d[z];O===void 0&&(O={},d[z]=O);let G=O[j];G===void 0&&(G=M.clone(),O[j]=G,A.addEventListener("dispose",C)),M=G}if(M.visible=A.visible,M.wireframe=A.wireframe,V===li?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=F}return M}function S(P,A,F,V,M){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===li)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const j=t.update(P),O=P.material;if(Array.isArray(O)){const G=j.groups;for(let H=0,X=G.length;H<X;H++){const et=G[H],tt=O[et.materialIndex];if(tt&&tt.visible){const nt=y(P,tt,V,M);P.onBeforeShadow(s,P,A,F,j,nt,et),s.renderBufferDirect(F,null,j,nt,P,et),P.onAfterShadow(s,P,A,F,j,nt,et)}}}else if(O.visible){const G=y(P,O,V,M);P.onBeforeShadow(s,P,A,F,j,G,null),s.renderBufferDirect(F,null,j,G,P,null),P.onAfterShadow(s,P,A,F,j,G,null)}}const z=P.children;for(let j=0,O=z.length;j<O;j++)S(z[j],A,F,V,M)}function C(P){P.target.removeEventListener("dispose",C);for(const F in d){const V=d[F],M=P.target.uuid;M in V&&(V[M].dispose(),delete V[M])}}}function Kw(s,t,e){const n=e.isWebGL2;function i(){let U=!1;const it=new ve;let at=null;const wt=new ve(0,0,0,0);return{setMask:function(Nt){at!==Nt&&!U&&(s.colorMask(Nt,Nt,Nt,Nt),at=Nt)},setLocked:function(Nt){U=Nt},setClear:function(Nt,ne,ee,le,Ie){Ie===!0&&(Nt*=le,ne*=le,ee*=le),it.set(Nt,ne,ee,le),wt.equals(it)===!1&&(s.clearColor(Nt,ne,ee,le),wt.copy(it))},reset:function(){U=!1,at=null,wt.set(-1,0,0,0)}}}function o(){let U=!1,it=null,at=null,wt=null;return{setTest:function(Nt){Nt?Mt(s.DEPTH_TEST):Xt(s.DEPTH_TEST)},setMask:function(Nt){it!==Nt&&!U&&(s.depthMask(Nt),it=Nt)},setFunc:function(Nt){if(at!==Nt){switch(Nt){case rv:s.depthFunc(s.NEVER);break;case ov:s.depthFunc(s.ALWAYS);break;case av:s.depthFunc(s.LESS);break;case Ma:s.depthFunc(s.LEQUAL);break;case lv:s.depthFunc(s.EQUAL);break;case cv:s.depthFunc(s.GEQUAL);break;case uv:s.depthFunc(s.GREATER);break;case hv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}at=Nt}},setLocked:function(Nt){U=Nt},setClear:function(Nt){wt!==Nt&&(s.clearDepth(Nt),wt=Nt)},reset:function(){U=!1,it=null,at=null,wt=null}}}function a(){let U=!1,it=null,at=null,wt=null,Nt=null,ne=null,ee=null,le=null,Ie=null;return{setTest:function(oe){U||(oe?Mt(s.STENCIL_TEST):Xt(s.STENCIL_TEST))},setMask:function(oe){it!==oe&&!U&&(s.stencilMask(oe),it=oe)},setFunc:function(oe,Ae,$e){(at!==oe||wt!==Ae||Nt!==$e)&&(s.stencilFunc(oe,Ae,$e),at=oe,wt=Ae,Nt=$e)},setOp:function(oe,Ae,$e){(ne!==oe||ee!==Ae||le!==$e)&&(s.stencilOp(oe,Ae,$e),ne=oe,ee=Ae,le=$e)},setLocked:function(oe){U=oe},setClear:function(oe){Ie!==oe&&(s.clearStencil(oe),Ie=oe)},reset:function(){U=!1,it=null,at=null,wt=null,Nt=null,ne=null,ee=null,le=null,Ie=null}}}const l=new i,u=new o,d=new a,p=new WeakMap,f=new WeakMap;let m={},v={},b=new WeakMap,w=[],x=null,_=!1,E=null,y=null,S=null,C=null,P=null,A=null,F=null,V=new Kt(0,0,0),M=0,L=!1,z=null,j=null,O=null,G=null,H=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,tt=0;const nt=s.getParameter(s.VERSION);nt.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),et=tt>=1):nt.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),et=tt>=2);let st=null,pt={};const vt=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ct=new ve().fromArray(vt),Et=new ve().fromArray($);function Dt(U,it,at,wt){const Nt=new Uint8Array(4),ne=s.createTexture();s.bindTexture(U,ne),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<at;ee++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(it,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,Nt):s.texImage2D(it+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Nt);return ne}const Ot={};Ot[s.TEXTURE_2D]=Dt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ot[s.TEXTURE_CUBE_MAP]=Dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ot[s.TEXTURE_2D_ARRAY]=Dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ot[s.TEXTURE_3D]=Dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Mt(s.DEPTH_TEST),u.setFunc(Ma),Wt(!1),N(ph),Mt(s.CULL_FACE),At(Fi);function Mt(U){m[U]!==!0&&(s.enable(U),m[U]=!0)}function Xt(U){m[U]!==!1&&(s.disable(U),m[U]=!1)}function kt(U,it){return v[U]!==it?(s.bindFramebuffer(U,it),v[U]=it,n&&(U===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=it),U===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=it)),!0):!1}function Y(U,it){let at=w,wt=!1;if(U)if(at=b.get(it),at===void 0&&(at=[],b.set(it,at)),U.isWebGLMultipleRenderTargets){const Nt=U.texture;if(at.length!==Nt.length||at[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,ee=Nt.length;ne<ee;ne++)at[ne]=s.COLOR_ATTACHMENT0+ne;at.length=Nt.length,wt=!0}}else at[0]!==s.COLOR_ATTACHMENT0&&(at[0]=s.COLOR_ATTACHMENT0,wt=!0);else at[0]!==s.BACK&&(at[0]=s.BACK,wt=!0);wt&&(e.isWebGL2?s.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Te(U){return x!==U?(s.useProgram(U),x=U,!0):!1}const Lt={[es]:s.FUNC_ADD,[W_]:s.FUNC_SUBTRACT,[X_]:s.FUNC_REVERSE_SUBTRACT};if(n)Lt[_h]=s.MIN,Lt[vh]=s.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(Lt[_h]=U.MIN_EXT,Lt[vh]=U.MAX_EXT)}const zt={[j_]:s.ZERO,[q_]:s.ONE,[Y_]:s.SRC_COLOR,[pc]:s.SRC_ALPHA,[tv]:s.SRC_ALPHA_SATURATE,[Q_]:s.DST_COLOR,[$_]:s.DST_ALPHA,[K_]:s.ONE_MINUS_SRC_COLOR,[fc]:s.ONE_MINUS_SRC_ALPHA,[J_]:s.ONE_MINUS_DST_COLOR,[Z_]:s.ONE_MINUS_DST_ALPHA,[ev]:s.CONSTANT_COLOR,[nv]:s.ONE_MINUS_CONSTANT_COLOR,[iv]:s.CONSTANT_ALPHA,[sv]:s.ONE_MINUS_CONSTANT_ALPHA};function At(U,it,at,wt,Nt,ne,ee,le,Ie,oe){if(U===Fi){_===!0&&(Xt(s.BLEND),_=!1);return}if(_===!1&&(Mt(s.BLEND),_=!0),U!==G_){if(U!==E||oe!==L){if((y!==es||P!==es)&&(s.blendEquation(s.FUNC_ADD),y=es,P=es),oe)switch(U){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fh:s.blendFunc(s.ONE,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,C=null,A=null,F=null,V.set(0,0,0),M=0,E=U,L=oe}return}Nt=Nt||it,ne=ne||at,ee=ee||wt,(it!==y||Nt!==P)&&(s.blendEquationSeparate(Lt[it],Lt[Nt]),y=it,P=Nt),(at!==S||wt!==C||ne!==A||ee!==F)&&(s.blendFuncSeparate(zt[at],zt[wt],zt[ne],zt[ee]),S=at,C=wt,A=ne,F=ee),(le.equals(V)===!1||Ie!==M)&&(s.blendColor(le.r,le.g,le.b,Ie),V.copy(le),M=Ie),E=U,L=!1}function me(U,it){U.side===un?Xt(s.CULL_FACE):Mt(s.CULL_FACE);let at=U.side===pn;it&&(at=!at),Wt(at),U.blending===nr&&U.transparent===!1?At(Fi):At(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),u.setFunc(U.depthFunc),u.setTest(U.depthTest),u.setMask(U.depthWrite),l.setMask(U.colorWrite);const wt=U.stencilWrite;d.setTest(wt),wt&&(d.setMask(U.stencilWriteMask),d.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),d.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),K(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Mt(s.SAMPLE_ALPHA_TO_COVERAGE):Xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(U){z!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),z=U)}function N(U){U!==V_?(Mt(s.CULL_FACE),U!==j&&(U===ph?s.cullFace(s.BACK):U===z_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xt(s.CULL_FACE),j=U}function R(U){U!==O&&(et&&s.lineWidth(U),O=U)}function K(U,it,at){U?(Mt(s.POLYGON_OFFSET_FILL),(G!==it||H!==at)&&(s.polygonOffset(it,at),G=it,H=at)):Xt(s.POLYGON_OFFSET_FILL)}function ht(U){U?Mt(s.SCISSOR_TEST):Xt(s.SCISSOR_TEST)}function ot(U){U===void 0&&(U=s.TEXTURE0+X-1),st!==U&&(s.activeTexture(U),st=U)}function lt(U,it,at){at===void 0&&(st===null?at=s.TEXTURE0+X-1:at=st);let wt=pt[at];wt===void 0&&(wt={type:void 0,texture:void 0},pt[at]=wt),(wt.type!==U||wt.texture!==it)&&(st!==at&&(s.activeTexture(at),st=at),s.bindTexture(U,it||Ot[U]),wt.type=U,wt.texture=it)}function St(){const U=pt[st];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function mt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $t(U){ct.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ct.copy(U))}function B(U){Et.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Et.copy(U))}function dt(U,it){let at=f.get(it);at===void 0&&(at=new WeakMap,f.set(it,at));let wt=at.get(U);wt===void 0&&(wt=s.getUniformBlockIndex(it,U.name),at.set(U,wt))}function gt(U,it){const wt=f.get(it).get(U);p.get(it)!==wt&&(s.uniformBlockBinding(it,wt,U.__bindingPointIndex),p.set(it,wt))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},st=null,pt={},v={},b=new WeakMap,w=[],x=null,_=!1,E=null,y=null,S=null,C=null,P=null,A=null,F=null,V=new Kt(0,0,0),M=0,L=!1,z=null,j=null,O=null,G=null,H=null,ct.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Mt,disable:Xt,bindFramebuffer:kt,drawBuffers:Y,useProgram:Te,setBlending:At,setMaterial:me,setFlipSided:Wt,setCullFace:N,setLineWidth:R,setPolygonOffset:K,setScissorTest:ht,activeTexture:ot,bindTexture:lt,unbindTexture:St,compressedTexImage2D:mt,compressedTexImage3D:bt,texImage2D:Ct,texImage3D:xt,updateUBOMapping:dt,uniformBlockBinding:gt,texStorage2D:Jt,texStorage3D:Ht,texSubImage2D:Ft,texSubImage3D:Vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:se,scissor:$t,viewport:B,reset:Pt}}function $w(s,t,e,n,i,o,a){const l=i.isWebGL2,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,R){return v?new OffscreenCanvas(N,R):co("canvas")}function w(N,R,K,ht){let ot=1;if((N.width>ht||N.height>ht)&&(ot=ht/Math.max(N.width,N.height)),ot<1||R===!0)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap){const lt=R?Ra:Math.floor,St=lt(ot*N.width),mt=lt(ot*N.height);f===void 0&&(f=b(St,mt));const bt=K?b(St,mt):f;return bt.width=St,bt.height=mt,bt.getContext("2d").drawImage(N,0,0,St,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+St+"x"+mt+")."),bt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function x(N){return wc(N.width)&&wc(N.height)}function _(N){return l?!1:N.wrapS!==An||N.wrapT!==An||N.minFilter!==_e&&N.minFilter!==je}function E(N,R){return N.generateMipmaps&&R&&N.minFilter!==_e&&N.minFilter!==je}function y(N){s.generateMipmap(N)}function S(N,R,K,ht,ot=!1){if(l===!1)return R;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=R;if(R===s.RED&&(K===s.FLOAT&&(lt=s.R32F),K===s.HALF_FLOAT&&(lt=s.R16F),K===s.UNSIGNED_BYTE&&(lt=s.R8)),R===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(lt=s.R8UI),K===s.UNSIGNED_SHORT&&(lt=s.R16UI),K===s.UNSIGNED_INT&&(lt=s.R32UI),K===s.BYTE&&(lt=s.R8I),K===s.SHORT&&(lt=s.R16I),K===s.INT&&(lt=s.R32I)),R===s.RG&&(K===s.FLOAT&&(lt=s.RG32F),K===s.HALF_FLOAT&&(lt=s.RG16F),K===s.UNSIGNED_BYTE&&(lt=s.RG8)),R===s.RGBA){const St=ot?Ta:he.getTransfer(ht);K===s.FLOAT&&(lt=s.RGBA32F),K===s.HALF_FLOAT&&(lt=s.RGBA16F),K===s.UNSIGNED_BYTE&&(lt=St===ye?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function C(N,R,K){return E(N,K)===!0||N.isFramebufferTexture&&N.minFilter!==_e&&N.minFilter!==je?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function P(N){return N===_e||N===_c||N===Zs?s.NEAREST:s.LINEAR}function A(N){const R=N.target;R.removeEventListener("dispose",A),V(R),R.isVideoTexture&&p.delete(R)}function F(N){const R=N.target;R.removeEventListener("dispose",F),L(R)}function V(N){const R=n.get(N);if(R.__webglInit===void 0)return;const K=N.source,ht=m.get(K);if(ht){const ot=ht[R.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&M(N),Object.keys(ht).length===0&&m.delete(K)}n.remove(N)}function M(N){const R=n.get(N);s.deleteTexture(R.__webglTexture);const K=N.source,ht=m.get(K);delete ht[R.__cacheKey],a.memory.textures--}function L(N){const R=N.texture,K=n.get(N),ht=n.get(R);if(ht.__webglTexture!==void 0&&(s.deleteTexture(ht.__webglTexture),a.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(K.__webglFramebuffer[ot]))for(let lt=0;lt<K.__webglFramebuffer[ot].length;lt++)s.deleteFramebuffer(K.__webglFramebuffer[ot][lt]);else s.deleteFramebuffer(K.__webglFramebuffer[ot]);K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer[ot])}else{if(Array.isArray(K.__webglFramebuffer))for(let ot=0;ot<K.__webglFramebuffer.length;ot++)s.deleteFramebuffer(K.__webglFramebuffer[ot]);else s.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&s.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ot=0;ot<K.__webglColorRenderbuffer.length;ot++)K.__webglColorRenderbuffer[ot]&&s.deleteRenderbuffer(K.__webglColorRenderbuffer[ot]);K.__webglDepthRenderbuffer&&s.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ot=0,lt=R.length;ot<lt;ot++){const St=n.get(R[ot]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(R[ot])}n.remove(R),n.remove(N)}let z=0;function j(){z=0}function O(){const N=z;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),z+=1,N}function G(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function H(N,R){const K=n.get(N);if(N.isVideoTexture&&me(N),N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(K,N,R);return}}e.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+R)}function X(N,R){const K=n.get(N);if(N.version>0&&K.__version!==N.version){ct(K,N,R);return}e.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+R)}function et(N,R){const K=n.get(N);if(N.version>0&&K.__version!==N.version){ct(K,N,R);return}e.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+R)}function tt(N,R){const K=n.get(N);if(N.version>0&&K.__version!==N.version){Et(K,N,R);return}e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+R)}const nt={[ar]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[Sa]:s.MIRRORED_REPEAT},st={[_e]:s.NEAREST,[_c]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[xa]:s.LINEAR_MIPMAP_NEAREST,[ui]:s.LINEAR_MIPMAP_LINEAR},pt={[Lv]:s.NEVER,[Fv]:s.ALWAYS,[Iv]:s.LESS,[Qp]:s.LEQUAL,[Dv]:s.EQUAL,[Ov]:s.GEQUAL,[Nv]:s.GREATER,[Uv]:s.NOTEQUAL};function vt(N,R,K){if(R.type===Qe&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===je||R.magFilter===xa||R.magFilter===Zs||R.magFilter===ui||R.minFilter===je||R.minFilter===xa||R.minFilter===Zs||R.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(s.texParameteri(N,s.TEXTURE_WRAP_S,nt[R.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,nt[R.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,nt[R.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,st[R.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,st[R.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(R.wrapS!==An||R.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,P(R.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,P(R.minFilter)),R.minFilter!==_e&&R.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,pt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(R.magFilter===_e||R.minFilter!==Zs&&R.minFilter!==ui||R.type===Qe&&t.has("OES_texture_float_linear")===!1||l===!1&&R.type===oo&&t.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(s.texParameterf(N,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function $(N,R){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",A));const ht=R.source;let ot=m.get(ht);ot===void 0&&(ot={},m.set(ht,ot));const lt=G(R);if(lt!==N.__cacheKey){ot[lt]===void 0&&(ot[lt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ot[lt].usedTimes++;const St=ot[N.__cacheKey];St!==void 0&&(ot[N.__cacheKey].usedTimes--,St.usedTimes===0&&M(R)),N.__cacheKey=lt,N.__webglTexture=ot[lt].texture}return K}function ct(N,R,K){let ht=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ht=s.TEXTURE_3D);const ot=$(N,R),lt=R.source;e.bindTexture(ht,N.__webglTexture,s.TEXTURE0+K);const St=n.get(lt);if(lt.version!==St.__version||ot===!0){e.activeTexture(s.TEXTURE0+K);const mt=he.getPrimaries(he.workingColorSpace),bt=R.colorSpace===Cn?null:he.getPrimaries(R.colorSpace),Ft=R.colorSpace===Cn||mt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Vt=_(R)&&x(R.image)===!1;let rt=w(R.image,Vt,!1,i.maxTextureSize);rt=Wt(R,rt);const se=x(rt)||l,Jt=o.convert(R.format,R.colorSpace);let Ht=o.convert(R.type),Ct=S(R.internalFormat,Jt,Ht,R.colorSpace,R.isVideoTexture);vt(ht,R,se);let xt;const $t=R.mipmaps,B=l&&R.isVideoTexture!==!0&&Ct!==Yp,dt=St.__version===void 0||ot===!0,gt=lt.dataReady,Pt=C(R,rt,se);if(R.isDepthTexture)Ct=s.DEPTH_COMPONENT,l?R.type===Qe?Ct=s.DEPTH_COMPONENT32F:R.type===xn?Ct=s.DEPTH_COMPONENT24:R.type===os?Ct=s.DEPTH24_STENCIL8:Ct=s.DEPTH_COMPONENT16:R.type===Qe&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===as&&Ct===s.DEPTH_COMPONENT&&R.type!==Na&&R.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=xn,Ht=o.convert(R.type)),R.format===lr&&Ct===s.DEPTH_COMPONENT&&(Ct=s.DEPTH_STENCIL,R.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=os,Ht=o.convert(R.type))),dt&&(B?e.texStorage2D(s.TEXTURE_2D,1,Ct,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,rt.width,rt.height,0,Jt,Ht,null));else if(R.isDataTexture)if($t.length>0&&se){B&&dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ct,$t[0].width,$t[0].height);for(let U=0,it=$t.length;U<it;U++)xt=$t[U],B?gt&&e.texSubImage2D(s.TEXTURE_2D,U,0,0,xt.width,xt.height,Jt,Ht,xt.data):e.texImage2D(s.TEXTURE_2D,U,Ct,xt.width,xt.height,0,Jt,Ht,xt.data);R.generateMipmaps=!1}else B?(dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ct,rt.width,rt.height),gt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,Jt,Ht,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,rt.width,rt.height,0,Jt,Ht,rt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){B&&dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Ct,$t[0].width,$t[0].height,rt.depth);for(let U=0,it=$t.length;U<it;U++)xt=$t[U],R.format!==on?Jt!==null?B?gt&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,U,0,0,0,xt.width,xt.height,rt.depth,Jt,xt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,U,Ct,xt.width,xt.height,rt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?gt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,U,0,0,0,xt.width,xt.height,rt.depth,Jt,Ht,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,U,Ct,xt.width,xt.height,rt.depth,0,Jt,Ht,xt.data)}else{B&&dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ct,$t[0].width,$t[0].height);for(let U=0,it=$t.length;U<it;U++)xt=$t[U],R.format!==on?Jt!==null?B?gt&&e.compressedTexSubImage2D(s.TEXTURE_2D,U,0,0,xt.width,xt.height,Jt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,U,Ct,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?gt&&e.texSubImage2D(s.TEXTURE_2D,U,0,0,xt.width,xt.height,Jt,Ht,xt.data):e.texImage2D(s.TEXTURE_2D,U,Ct,xt.width,xt.height,0,Jt,Ht,xt.data)}else if(R.isDataArrayTexture)B?(dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Ct,rt.width,rt.height,rt.depth),gt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Jt,Ht,rt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,rt.width,rt.height,rt.depth,0,Jt,Ht,rt.data);else if(R.isData3DTexture)B?(dt&&e.texStorage3D(s.TEXTURE_3D,Pt,Ct,rt.width,rt.height,rt.depth),gt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Jt,Ht,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,rt.width,rt.height,rt.depth,0,Jt,Ht,rt.data);else if(R.isFramebufferTexture){if(dt)if(B)e.texStorage2D(s.TEXTURE_2D,Pt,Ct,rt.width,rt.height);else{let U=rt.width,it=rt.height;for(let at=0;at<Pt;at++)e.texImage2D(s.TEXTURE_2D,at,Ct,U,it,0,Jt,Ht,null),U>>=1,it>>=1}}else if($t.length>0&&se){B&&dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ct,$t[0].width,$t[0].height);for(let U=0,it=$t.length;U<it;U++)xt=$t[U],B?gt&&e.texSubImage2D(s.TEXTURE_2D,U,0,0,Jt,Ht,xt):e.texImage2D(s.TEXTURE_2D,U,Ct,Jt,Ht,xt);R.generateMipmaps=!1}else B?(dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ct,rt.width,rt.height),gt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Jt,Ht,rt)):e.texImage2D(s.TEXTURE_2D,0,Ct,Jt,Ht,rt);E(R,se)&&y(ht),St.__version=lt.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Et(N,R,K){if(R.image.length!==6)return;const ht=$(N,R),ot=R.source;e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+K);const lt=n.get(ot);if(ot.version!==lt.__version||ht===!0){e.activeTexture(s.TEXTURE0+K);const St=he.getPrimaries(he.workingColorSpace),mt=R.colorSpace===Cn?null:he.getPrimaries(R.colorSpace),bt=R.colorSpace===Cn||St===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Ft=R.isCompressedTexture||R.image[0].isCompressedTexture,Vt=R.image[0]&&R.image[0].isDataTexture,rt=[];for(let U=0;U<6;U++)!Ft&&!Vt?rt[U]=w(R.image[U],!1,!0,i.maxCubemapSize):rt[U]=Vt?R.image[U].image:R.image[U],rt[U]=Wt(R,rt[U]);const se=rt[0],Jt=x(se)||l,Ht=o.convert(R.format,R.colorSpace),Ct=o.convert(R.type),xt=S(R.internalFormat,Ht,Ct,R.colorSpace),$t=l&&R.isVideoTexture!==!0,B=lt.__version===void 0||ht===!0,dt=ot.dataReady;let gt=C(R,se,Jt);vt(s.TEXTURE_CUBE_MAP,R,Jt);let Pt;if(Ft){$t&&B&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,xt,se.width,se.height);for(let U=0;U<6;U++){Pt=rt[U].mipmaps;for(let it=0;it<Pt.length;it++){const at=Pt[it];R.format!==on?Ht!==null?$t?dt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,it,0,0,at.width,at.height,Ht,at.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,it,xt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,it,0,0,at.width,at.height,Ht,Ct,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,it,xt,at.width,at.height,0,Ht,Ct,at.data)}}}else{Pt=R.mipmaps,$t&&B&&(Pt.length>0&&gt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,xt,rt[0].width,rt[0].height));for(let U=0;U<6;U++)if(Vt){$t?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,rt[U].width,rt[U].height,Ht,Ct,rt[U].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,xt,rt[U].width,rt[U].height,0,Ht,Ct,rt[U].data);for(let it=0;it<Pt.length;it++){const wt=Pt[it].image[U].image;$t?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,it+1,0,0,wt.width,wt.height,Ht,Ct,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,it+1,xt,wt.width,wt.height,0,Ht,Ct,wt.data)}}else{$t?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Ht,Ct,rt[U]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,xt,Ht,Ct,rt[U]);for(let it=0;it<Pt.length;it++){const at=Pt[it];$t?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,it+1,0,0,Ht,Ct,at.image[U]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,it+1,xt,Ht,Ct,at.image[U])}}}E(R,Jt)&&y(s.TEXTURE_CUBE_MAP),lt.__version=ot.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Dt(N,R,K,ht,ot,lt){const St=o.convert(K.format,K.colorSpace),mt=o.convert(K.type),bt=S(K.internalFormat,St,mt,K.colorSpace);if(!n.get(R).__hasExternalTextures){const Vt=Math.max(1,R.width>>lt),rt=Math.max(1,R.height>>lt);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,lt,bt,Vt,rt,R.depth,0,St,mt,null):e.texImage2D(ot,lt,bt,Vt,rt,0,St,mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,N),At(R)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,ot,n.get(K).__webglTexture,0,zt(R)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,ot,n.get(K).__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(N,R,K){if(s.bindRenderbuffer(s.RENDERBUFFER,N),R.depthBuffer&&!R.stencilBuffer){let ht=l===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(K||At(R)){const ot=R.depthTexture;ot&&ot.isDepthTexture&&(ot.type===Qe?ht=s.DEPTH_COMPONENT32F:ot.type===xn&&(ht=s.DEPTH_COMPONENT24));const lt=zt(R);At(R)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,ht,R.width,R.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,ht,R.width,R.height)}else s.renderbufferStorage(s.RENDERBUFFER,ht,R.width,R.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(R.depthBuffer&&R.stencilBuffer){const ht=zt(R);K&&At(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,R.width,R.height):At(R)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{const ht=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ot=0;ot<ht.length;ot++){const lt=ht[ot],St=o.convert(lt.format,lt.colorSpace),mt=o.convert(lt.type),bt=S(lt.internalFormat,St,mt,lt.colorSpace),Ft=zt(R);K&&At(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,bt,R.width,R.height):At(R)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft,bt,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,bt,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Mt(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const ht=n.get(R.depthTexture).__webglTexture,ot=zt(R);if(R.depthTexture.format===as)At(R)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(R.depthTexture.format===lr)At(R)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Xt(N){const R=n.get(N),K=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Mt(R.__webglFramebuffer,N)}else if(K){R.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[ht]),R.__webglDepthbuffer[ht]=s.createRenderbuffer(),Ot(R.__webglDepthbuffer[ht],N,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=s.createRenderbuffer(),Ot(R.__webglDepthbuffer,N,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(N,R,K){const ht=n.get(N);R!==void 0&&Dt(ht.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Xt(N)}function Y(N){const R=N.texture,K=n.get(N),ht=n.get(R);N.addEventListener("dispose",F),N.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=R.version,a.memory.textures++);const ot=N.isWebGLCubeRenderTarget===!0,lt=N.isWebGLMultipleRenderTargets===!0,St=x(N)||l;if(ot){K.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(l&&R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer[mt]=[];for(let bt=0;bt<R.mipmaps.length;bt++)K.__webglFramebuffer[mt][bt]=s.createFramebuffer()}else K.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(l&&R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer=[];for(let mt=0;mt<R.mipmaps.length;mt++)K.__webglFramebuffer[mt]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(lt)if(i.drawBuffers){const mt=N.texture;for(let bt=0,Ft=mt.length;bt<Ft;bt++){const Vt=n.get(mt[bt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&N.samples>0&&At(N)===!1){const mt=lt?R:[R];K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let bt=0;bt<mt.length;bt++){const Ft=mt[bt];K.__webglColorRenderbuffer[bt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[bt]);const Vt=o.convert(Ft.format,Ft.colorSpace),rt=o.convert(Ft.type),se=S(Ft.internalFormat,Vt,rt,Ft.colorSpace,N.isXRRenderTarget===!0),Jt=zt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,se,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,K.__webglColorRenderbuffer[bt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(K.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),vt(s.TEXTURE_CUBE_MAP,R,St);for(let mt=0;mt<6;mt++)if(l&&R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)Dt(K.__webglFramebuffer[mt][bt],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,bt);else Dt(K.__webglFramebuffer[mt],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);E(R,St)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const mt=N.texture;for(let bt=0,Ft=mt.length;bt<Ft;bt++){const Vt=mt[bt],rt=n.get(Vt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),vt(s.TEXTURE_2D,Vt,St),Dt(K.__webglFramebuffer,N,Vt,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,0),E(Vt,St)&&y(s.TEXTURE_2D)}e.unbindTexture()}else{let mt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(l?mt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,ht.__webglTexture),vt(mt,R,St),l&&R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)Dt(K.__webglFramebuffer[bt],N,R,s.COLOR_ATTACHMENT0,mt,bt);else Dt(K.__webglFramebuffer,N,R,s.COLOR_ATTACHMENT0,mt,0);E(R,St)&&y(mt),e.unbindTexture()}N.depthBuffer&&Xt(N)}function Te(N){const R=x(N)||l,K=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ht=0,ot=K.length;ht<ot;ht++){const lt=K[ht];if(E(lt,R)){const St=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,mt=n.get(lt).__webglTexture;e.bindTexture(St,mt),y(St),e.unbindTexture()}}}function Lt(N){if(l&&N.samples>0&&At(N)===!1){const R=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],K=N.width,ht=N.height;let ot=s.COLOR_BUFFER_BIT;const lt=[],St=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(N),bt=N.isWebGLMultipleRenderTargets===!0;if(bt)for(let Ft=0;Ft<R.length;Ft++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Ft=0;Ft<R.length;Ft++){lt.push(s.COLOR_ATTACHMENT0+Ft),N.depthBuffer&&lt.push(St);const Vt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(Vt===!1&&(N.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),bt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[Ft]),Vt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[St]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[St])),bt){const rt=n.get(R[Ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,K,ht,0,0,K,ht,ot,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),bt)for(let Ft=0;Ft<R.length;Ft++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,mt.__webglColorRenderbuffer[Ft]);const Vt=n.get(R[Ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function zt(N){return Math.min(i.maxSamples,N.samples)}function At(N){const R=n.get(N);return l&&N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function me(N){const R=a.render.frame;p.get(N)!==R&&(p.set(N,R),N.update())}function Wt(N,R){const K=N.colorSpace,ht=N.format,ot=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===yc||K!==Ke&&K!==Cn&&(he.getTransfer(K)===ye?l===!1?t.has("EXT_sRGB")===!0&&ht===on?(N.format=yc,N.minFilter=je,N.generateMipmaps=!1):R=ef.sRGBToLinear(R):(ht!==on||ot!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),R}this.allocateTextureUnit=O,this.resetTextureUnits=j,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=et,this.setTextureCube=tt,this.rebindTextures=kt,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=At}function Zw(s,t,e){const n=e.isWebGL2;function i(o,a=Cn){let l;const u=he.getTransfer(a);if(o===qn)return s.UNSIGNED_BYTE;if(o===Wp)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Xp)return s.UNSIGNED_SHORT_5_5_5_1;if(o===vc)return s.BYTE;if(o===Gp)return s.SHORT;if(o===Na)return s.UNSIGNED_SHORT;if(o===eo)return s.INT;if(o===xn)return s.UNSIGNED_INT;if(o===Qe)return s.FLOAT;if(o===oo)return n?s.HALF_FLOAT:(l=t.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(o===wv)return s.ALPHA;if(o===on)return s.RGBA;if(o===Ev)return s.LUMINANCE;if(o===Mv)return s.LUMINANCE_ALPHA;if(o===as)return s.DEPTH_COMPONENT;if(o===lr)return s.DEPTH_STENCIL;if(o===yc)return l=t.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(o===jp)return s.RED;if(o===Gc)return s.RED_INTEGER;if(o===qp)return s.RG;if(o===Ua)return s.RG_INTEGER;if(o===ao)return s.RGBA_INTEGER;if(o===ml||o===gl||o===_l||o===vl)if(u===ye)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===ml)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===_l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===ml)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===gl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===_l)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===vl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===bh||o===yh||o===wh||o===Eh)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===bh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===yh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===wh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Eh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Yp)return l=t.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Mh||o===Sh)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(o===Mh)return u===ye?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===Sh)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Th||o===Ah||o===Ch||o===Ph||o===Rh||o===Lh||o===Ih||o===Dh||o===Nh||o===Uh||o===Oh||o===Fh||o===Bh||o===kh)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(o===Th)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Ah)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Ch)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ph)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Rh)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Lh)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Ih)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Dh)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Nh)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Uh)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Oh)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Fh)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Bh)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===kh)return u===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===xl||o===Vh||o===zh)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(o===xl)return u===ye?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Vh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===zh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Sv||o===Hh||o===Gh||o===Wh)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(o===xl)return l.COMPRESSED_RED_RGTC1_EXT;if(o===Hh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Gh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Wh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===os?n?s.UNSIGNED_INT_24_8:(l=t.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:i}}class Qw extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rs extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jw={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,a=null;const l=this._targetRay,u=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){a=!0;for(const w of t.hand.values()){const x=e.getJointPose(w,n),_=this._getHandJoint(d,w);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const p=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],m=p.position.distanceTo(f.position),v=.02,b=.005;d.inputState.pinching&&m>v+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&m<=v-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Jw)))}return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ye,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new kn({extensions:{fragDepth:!0},vertexShader:tE,fragmentShader:eE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new ds(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class iE extends hs{constructor(t,e){super();const n=this;let i=null,o=1,a=null,l="local-floor",u=1,d=null,p=null,f=null,m=null,v=null,b=null;const w=new nE,x=e.getContextAttributes();let _=null,E=null;const y=[],S=[],C=new Tt;let P=null;const A=new cn;A.layers.enable(1),A.viewport=new ve;const F=new cn;F.layers.enable(2),F.viewport=new ve;const V=[A,F],M=new Qw;M.layers.enable(1),M.layers.enable(2);let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ct=y[$];return ct===void 0&&(ct=new Gl,y[$]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function($){let ct=y[$];return ct===void 0&&(ct=new Gl,y[$]=ct),ct.getGripSpace()},this.getHand=function($){let ct=y[$];return ct===void 0&&(ct=new Gl,y[$]=ct),ct.getHandSpace()};function j($){const ct=S.indexOf($.inputSource);if(ct===-1)return;const Et=y[ct];Et!==void 0&&(Et.update($.inputSource,$.frame,d||a),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",G);for(let $=0;$<y.length;$++){const ct=S[$];ct!==null&&(S[$]=null,y[$].disconnect(ct))}L=null,z=null,w.reset(),t.setRenderTarget(_),v=null,m=null,f=null,i=null,E=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",O),i.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ct={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(i,e,ct),i.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new pi(v.framebufferWidth,v.framebufferHeight,{format:on,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let ct=null,Et=null,Dt=null;x.depth&&(Dt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=x.stencil?lr:as,Et=x.stencil?os:xn);const Ot={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:o};f=new XRWebGLBinding(i,e),m=f.createProjectionLayer(Ot),i.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),E=new pi(m.textureWidth,m.textureHeight,{format:on,type:qn,depthTexture:new df(m.textureWidth,m.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Mt=t.properties.get(E);Mt.__ignoreDepthValues=m.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(u),d=null,a=await i.requestReferenceSpace(l),vt.setContext(i),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G($){for(let ct=0;ct<$.removed.length;ct++){const Et=$.removed[ct],Dt=S.indexOf(Et);Dt>=0&&(S[Dt]=null,y[Dt].disconnect(Et))}for(let ct=0;ct<$.added.length;ct++){const Et=$.added[ct];let Dt=S.indexOf(Et);if(Dt===-1){for(let Mt=0;Mt<y.length;Mt++)if(Mt>=S.length){S.push(Et),Dt=Mt;break}else if(S[Mt]===null){S[Mt]=Et,Dt=Mt;break}if(Dt===-1)break}const Ot=y[Dt];Ot&&Ot.connect(Et)}}const H=new D,X=new D;function et($,ct,Et){H.setFromMatrixPosition(ct.matrixWorld),X.setFromMatrixPosition(Et.matrixWorld);const Dt=H.distanceTo(X),Ot=ct.projectionMatrix.elements,Mt=Et.projectionMatrix.elements,Xt=Ot[14]/(Ot[10]-1),kt=Ot[14]/(Ot[10]+1),Y=(Ot[9]+1)/Ot[5],Te=(Ot[9]-1)/Ot[5],Lt=(Ot[8]-1)/Ot[0],zt=(Mt[8]+1)/Mt[0],At=Xt*Lt,me=Xt*zt,Wt=Dt/(-Lt+zt),N=Wt*-Lt;ct.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(N),$.translateZ(Wt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=Xt+Wt,K=kt+Wt,ht=At-N,ot=me+(Dt-N),lt=Y*kt/K*R,St=Te*kt/K*R;$.projectionMatrix.makePerspective(ht,ot,lt,St,R,K),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function tt($,ct){ct===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ct.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;w.texture!==null&&($.near=w.depthNear,$.far=w.depthFar),M.near=F.near=A.near=$.near,M.far=F.far=A.far=$.far,(L!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,z=M.far,A.near=L,A.far=z,F.near=L,F.far=z,A.updateProjectionMatrix(),F.updateProjectionMatrix(),$.updateProjectionMatrix());const ct=$.parent,Et=M.cameras;tt(M,ct);for(let Dt=0;Dt<Et.length;Dt++)tt(Et[Dt],ct);Et.length===2?et(M,A,F):M.projectionMatrix.copy(A.projectionMatrix),nt($,M,ct)};function nt($,ct,Et){Et===null?$.matrix.copy(ct.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(ct.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ur*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&v===null))return u},this.setFoveation=function($){u=$,m!==null&&(m.fixedFoveation=$),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=$)},this.hasDepthSensing=function(){return w.texture!==null};let st=null;function pt($,ct){if(p=ct.getViewerPose(d||a),b=ct,p!==null){const Et=p.views;v!==null&&(t.setRenderTargetFramebuffer(E,v.framebuffer),t.setRenderTarget(E));let Dt=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,Dt=!0);for(let Mt=0;Mt<Et.length;Mt++){const Xt=Et[Mt];let kt=null;if(v!==null)kt=v.getViewport(Xt);else{const Te=f.getViewSubImage(m,Xt);kt=Te.viewport,Mt===0&&(t.setRenderTargetTextures(E,Te.colorTexture,m.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(E))}let Y=V[Mt];Y===void 0&&(Y=new cn,Y.layers.enable(Mt),Y.viewport=new ve,V[Mt]=Y),Y.matrix.fromArray(Xt.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Xt.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(kt.x,kt.y,kt.width,kt.height),Mt===0&&(M.matrix.copy(Y.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Dt===!0&&M.cameras.push(Y)}const Ot=i.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Mt=f.getDepthInformation(Et[0]);Mt&&Mt.isValid&&Mt.texture&&w.init(t,Mt,i.renderState)}}for(let Et=0;Et<y.length;Et++){const Dt=S[Et],Ot=y[Et];Dt!==null&&Ot!==void 0&&Ot.update(Dt,ct,d||a)}w.render(t,M),st&&st($,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),b=null}const vt=new hf;vt.setAnimationLoop(pt),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}function sE(s,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,lf(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,E,y,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(x,_):_.isMeshToonMaterial?(o(x,_),f(x,_)):_.isMeshPhongMaterial?(o(x,_),p(x,_)):_.isMeshStandardMaterial?(o(x,_),m(x,_),_.isMeshPhysicalMaterial&&v(x,_,S)):_.isMeshMatcapMaterial?(o(x,_),b(x,_)):_.isMeshDepthMaterial?o(x,_):_.isMeshDistanceMaterial?(o(x,_),w(x,_)):_.isMeshNormalMaterial?o(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&l(x,_)):_.isPointsMaterial?u(x,_,E,y):_.isSpriteMaterial?d(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===pn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===pn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const E=t.get(_).envMap;if(E&&(x.envMap.value=E,x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*y,e(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function l(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,E,y){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=y*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),t.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function v(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===pn&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,_){_.matcap&&(x.matcap.value=_.matcap)}function w(x,_){const E=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rE(s,t,e,n){let i={},o={},a=[];const l=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(E,y){const S=y.program;n.uniformBlockBinding(E,S)}function d(E,y){let S=i[E.id];S===void 0&&(b(E),S=p(E),i[E.id]=S,E.addEventListener("dispose",x));const C=y.program;n.updateUBOMapping(E,C);const P=t.render.frame;o[E.id]!==P&&(m(E),o[E.id]=P)}function p(E){const y=f();E.__bindingPointIndex=y;const S=s.createBuffer(),C=E.__size,P=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,S),S}function f(){for(let E=0;E<l;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const y=i[E.id],S=E.uniforms,C=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let P=0,A=S.length;P<A;P++){const F=Array.isArray(S[P])?S[P]:[S[P]];for(let V=0,M=F.length;V<M;V++){const L=F[V];if(v(L,P,V,C)===!0){const z=L.__offset,j=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let G=0;G<j.length;G++){const H=j[G],X=w(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,z+O,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(E,y,S,C){const P=E.value,A=y+"_"+S;if(C[A]===void 0)return typeof P=="number"||typeof P=="boolean"?C[A]=P:C[A]=P.clone(),!0;{const F=C[A];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return C[A]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function b(E){const y=E.uniforms;let S=0;const C=16;for(let A=0,F=y.length;A<F;A++){const V=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,L=V.length;M<L;M++){const z=V[M],j=Array.isArray(z.value)?z.value:[z.value];for(let O=0,G=j.length;O<G;O++){const H=j[O],X=w(H),et=S%C;et!==0&&C-et<X.boundary&&(S+=C-et),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=X.storage}}}const P=S%C;return P>0&&(S+=C-P),E.__size=S,E.__cache={},this}function w(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function x(E){const y=E.target;y.removeEventListener("dispose",x);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete o[y.id]}function _(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},o={}}return{bind:u,update:d,dispose:_}}class vf{constructor(t={}){const{canvas:e=Qv(),context:n=null,depth:i=!0,stencil:o=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=a;const v=new Uint32Array(4),b=new Int32Array(4);let w=null,x=null;const _=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const y=this;let S=!1,C=0,P=0,A=null,F=-1,V=null;const M=new ve,L=new ve;let z=null;const j=new Kt(0);let O=0,G=e.width,H=e.height,X=1,et=null,tt=null;const nt=new ve(0,0,G,H),st=new ve(0,0,G,H);let pt=!1;const vt=new qc;let $=!1,ct=!1,Et=null;const Dt=new Gt,Ot=new Tt,Mt=new D,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return A===null?X:1}let Y=n;function Te(I,q){for(let Q=0;Q<I.length;Q++){const J=I[Q],Z=e.getContext(J,q);if(Z!==null)return Z}return null}try{const I={alpha:!0,depth:i,stencil:o,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hc}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",it,!1),Y===null){const q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&q.shift(),Y=Te(q,I),Y===null)throw Te(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Lt,zt,At,me,Wt,N,R,K,ht,ot,lt,St,mt,bt,Ft,Vt,rt,se,Jt,Ht,Ct,xt,$t,B;function dt(){Lt=new dy(Y),zt=new oy(Y,Lt,t),Lt.init(zt),xt=new Zw(Y,Lt,zt),At=new Kw(Y,Lt,zt),me=new my(Y),Wt=new Uw,N=new $w(Y,Lt,At,Wt,zt,xt,me),R=new ly(y),K=new hy(y),ht=new E0(Y,zt),$t=new sy(Y,Lt,ht,zt),ot=new py(Y,ht,me,$t),lt=new xy(Y,ot,ht,me),Jt=new vy(Y,zt,N),Vt=new ay(Wt),St=new Nw(y,R,K,Lt,zt,$t,Vt),mt=new sE(y,Wt),bt=new Fw,Ft=new Gw(Lt,zt),se=new iy(y,R,K,At,lt,m,u),rt=new Yw(y,lt,zt),B=new rE(Y,me,zt,At),Ht=new ry(Y,Lt,me,zt),Ct=new fy(Y,Lt,me,zt),me.programs=St.programs,y.capabilities=zt,y.extensions=Lt,y.properties=Wt,y.renderLists=bt,y.shadowMap=rt,y.state=At,y.info=me}dt();const gt=new iE(y,Y);this.xr=gt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const I=Lt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Lt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(I){I!==void 0&&(X=I,this.setSize(G,H,!1))},this.getSize=function(I){return I.set(G,H)},this.setSize=function(I,q,Q=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=I,H=q,e.width=Math.floor(I*X),e.height=Math.floor(q*X),Q===!0&&(e.style.width=I+"px",e.style.height=q+"px"),this.setViewport(0,0,I,q)},this.getDrawingBufferSize=function(I){return I.set(G*X,H*X).floor()},this.setDrawingBufferSize=function(I,q,Q){G=I,H=q,X=Q,e.width=Math.floor(I*Q),e.height=Math.floor(q*Q),this.setViewport(0,0,I,q)},this.getCurrentViewport=function(I){return I.copy(M)},this.getViewport=function(I){return I.copy(nt)},this.setViewport=function(I,q,Q,J){I.isVector4?nt.set(I.x,I.y,I.z,I.w):nt.set(I,q,Q,J),At.viewport(M.copy(nt).multiplyScalar(X).floor())},this.getScissor=function(I){return I.copy(st)},this.setScissor=function(I,q,Q,J){I.isVector4?st.set(I.x,I.y,I.z,I.w):st.set(I,q,Q,J),At.scissor(L.copy(st).multiplyScalar(X).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(I){At.setScissorTest(pt=I)},this.setOpaqueSort=function(I){et=I},this.setTransparentSort=function(I){tt=I},this.getClearColor=function(I){return I.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(I=!0,q=!0,Q=!0){let J=0;if(I){let Z=!1;if(A!==null){const yt=A.texture.format;Z=yt===ao||yt===Ua||yt===Gc}if(Z){const yt=A.texture.type,Rt=yt===qn||yt===xn||yt===Na||yt===os||yt===Wp||yt===Xp,Bt=se.getClearColor(),Ut=se.getClearAlpha(),jt=Bt.r,Yt=Bt.g,Zt=Bt.b;Rt?(v[0]=jt,v[1]=Yt,v[2]=Zt,v[3]=Ut,Y.clearBufferuiv(Y.COLOR,0,v)):(b[0]=jt,b[1]=Yt,b[2]=Zt,b[3]=Ut,Y.clearBufferiv(Y.COLOR,0,b))}else J|=Y.COLOR_BUFFER_BIT}q&&(J|=Y.DEPTH_BUFFER_BIT),Q&&(J|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",it,!1),bt.dispose(),Ft.dispose(),Wt.dispose(),R.dispose(),K.dispose(),lt.dispose(),$t.dispose(),B.dispose(),St.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Ie),gt.removeEventListener("sessionend",oe),Et&&(Et.dispose(),Et=null),Ae.stop()};function Pt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const I=me.autoReset,q=rt.enabled,Q=rt.autoUpdate,J=rt.needsUpdate,Z=rt.type;dt(),me.autoReset=I,rt.enabled=q,rt.autoUpdate=Q,rt.needsUpdate=J,rt.type=Z}function it(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function at(I){const q=I.target;q.removeEventListener("dispose",at),wt(q)}function wt(I){Nt(I),Wt.remove(I)}function Nt(I){const q=Wt.get(I).programs;q!==void 0&&(q.forEach(function(Q){St.releaseProgram(Q)}),I.isShaderMaterial&&St.releaseShaderCache(I))}this.renderBufferDirect=function(I,q,Q,J,Z,yt){q===null&&(q=Xt);const Rt=Z.isMesh&&Z.matrixWorld.determinant()<0,Bt=Ha(I,q,Q,J,Z);At.setMaterial(J,Rt);let Ut=Q.index,jt=1;if(J.wireframe===!0){if(Ut=ot.getWireframeAttribute(Q),Ut===void 0)return;jt=2}const Yt=Q.drawRange,Zt=Q.attributes.position;let Ee=Yt.start*jt,tn=(Yt.start+Yt.count)*jt;yt!==null&&(Ee=Math.max(Ee,yt.start*jt),tn=Math.min(tn,(yt.start+yt.count)*jt)),Ut!==null?(Ee=Math.max(Ee,0),tn=Math.min(tn,Ut.count)):Zt!=null&&(Ee=Math.max(Ee,0),tn=Math.min(tn,Zt.count));const De=tn-Ee;if(De<0||De===1/0)return;$t.setup(Z,J,Bt,Q,Ut);let wn,xe=Ht;if(Ut!==null&&(wn=ht.get(Ut),xe=Ct,xe.setIndex(wn)),Z.isMesh)J.wireframe===!0?(At.setLineWidth(J.wireframeLinewidth*kt()),xe.setMode(Y.LINES)):xe.setMode(Y.TRIANGLES);else if(Z.isLine){let Qt=J.linewidth;Qt===void 0&&(Qt=1),At.setLineWidth(Qt*kt()),Z.isLineSegments?xe.setMode(Y.LINES):Z.isLineLoop?xe.setMode(Y.LINE_LOOP):xe.setMode(Y.LINE_STRIP)}else Z.isPoints?xe.setMode(Y.POINTS):Z.isSprite&&xe.setMode(Y.TRIANGLES);if(Z.isBatchedMesh)xe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)xe.renderInstances(Ee,De,Z.count);else if(Q.isInstancedBufferGeometry){const Qt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,wr=Math.min(Q.instanceCount,Qt);xe.renderInstances(Ee,De,wr)}else xe.render(Ee,De)};function ne(I,q,Q){I.transparent===!0&&I.side===un&&I.forceSinglePass===!1?(I.side=pn,I.needsUpdate=!0,ps(I,q,Q),I.side=Bn,I.needsUpdate=!0,ps(I,q,Q),I.side=un):ps(I,q,Q)}this.compile=function(I,q,Q=null){Q===null&&(Q=I),x=Ft.get(Q),x.init(),E.push(x),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),I!==Q&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights(y._useLegacyLights);const J=new Set;return I.traverse(function(Z){const yt=Z.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){const Bt=yt[Rt];ne(Bt,Q,Z),J.add(Bt)}else ne(yt,Q,Z),J.add(yt)}),E.pop(),x=null,J},this.compileAsync=function(I,q,Q=null){const J=this.compile(I,q,Q);return new Promise(Z=>{function yt(){if(J.forEach(function(Rt){Wt.get(Rt).currentProgram.isReady()&&J.delete(Rt)}),J.size===0){Z(I);return}setTimeout(yt,10)}Lt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ee=null;function le(I){ee&&ee(I)}function Ie(){Ae.stop()}function oe(){Ae.start()}const Ae=new hf;Ae.setAnimationLoop(le),typeof self!="undefined"&&Ae.setContext(self),this.setAnimationLoop=function(I){ee=I,gt.setAnimationLoop(I),I===null?Ae.stop():Ae.start()},gt.addEventListener("sessionstart",Ie),gt.addEventListener("sessionend",oe),this.render=function(I,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(q),q=gt.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,q,A),x=Ft.get(I,E.length),x.init(),E.push(x),Dt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),vt.setFromProjectionMatrix(Dt),ct=this.localClippingEnabled,$=Vt.init(this.clippingPlanes,ct),w=bt.get(I,_.length),w.init(),_.push(w),$e(I,q,0,y.sortObjects),w.finish(),y.sortObjects===!0&&w.sort(et,tt),this.info.render.frame++,$===!0&&Vt.beginShadows();const Q=x.state.shadowsArray;if(rt.render(Q,I,q),$===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1)&&se.render(w,I),x.setupLights(y._useLegacyLights),q.isArrayCamera){const J=q.cameras;for(let Z=0,yt=J.length;Z<yt;Z++){const Rt=J[Z];fo(w,I,Rt,Rt.viewport)}}else fo(w,I,q);A!==null&&(N.updateMultisampleRenderTarget(A),N.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(y,I,q),$t.resetDefaultState(),F=-1,V=null,E.pop(),E.length>0?x=E[E.length-1]:x=null,_.pop(),_.length>0?w=_[_.length-1]:w=null};function $e(I,q,Q,J){if(I.visible===!1)return;if(I.layers.test(q.layers)){if(I.isGroup)Q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(q);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||vt.intersectsSprite(I)){J&&Mt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Dt);const Rt=lt.update(I),Bt=I.material;Bt.visible&&w.push(I,Rt,Bt,Q,Mt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||vt.intersectsObject(I))){const Rt=lt.update(I),Bt=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Mt.copy(I.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Mt.copy(Rt.boundingSphere.center)),Mt.applyMatrix4(I.matrixWorld).applyMatrix4(Dt)),Array.isArray(Bt)){const Ut=Rt.groups;for(let jt=0,Yt=Ut.length;jt<Yt;jt++){const Zt=Ut[jt],Ee=Bt[Zt.materialIndex];Ee&&Ee.visible&&w.push(I,Rt,Ee,Q,Mt.z,Zt)}}else Bt.visible&&w.push(I,Rt,Bt,Q,Mt.z,null)}}const yt=I.children;for(let Rt=0,Bt=yt.length;Rt<Bt;Rt++)$e(yt[Rt],q,Q,J)}function fo(I,q,Q,J){const Z=I.opaque,yt=I.transmissive,Rt=I.transparent;x.setupLightsView(Q),$===!0&&Vt.setGlobalState(y.clippingPlanes,Q),yt.length>0&&za(Z,yt,q,Q),J&&At.viewport(M.copy(J)),Z.length>0&&mi(Z,q,Q),yt.length>0&&mi(yt,q,Q),Rt.length>0&&mi(Rt,q,Q),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function za(I,q,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const yt=zt.isWebGL2;Et===null&&(Et=new pi(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")?oo:qn,minFilter:ui,samples:yt?4:0})),y.getDrawingBufferSize(Ot),yt?Et.setSize(Ot.x,Ot.y):Et.setSize(Ra(Ot.x),Ra(Ot.y));const Rt=y.getRenderTarget();y.setRenderTarget(Et),y.getClearColor(j),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear();const Bt=y.toneMapping;y.toneMapping=Bi,mi(I,Q,J),N.updateMultisampleRenderTarget(Et),N.updateRenderTargetMipmap(Et);let Ut=!1;for(let jt=0,Yt=q.length;jt<Yt;jt++){const Zt=q[jt],Ee=Zt.object,tn=Zt.geometry,De=Zt.material,wn=Zt.group;if(De.side===un&&Ee.layers.test(J.layers)){const xe=De.side;De.side=pn,De.needsUpdate=!0,mo(Ee,Q,J,tn,De,wn),De.side=xe,De.needsUpdate=!0,Ut=!0}}Ut===!0&&(N.updateMultisampleRenderTarget(Et),N.updateRenderTargetMipmap(Et)),y.setRenderTarget(Rt),y.setClearColor(j,O),y.toneMapping=Bt}function mi(I,q,Q){const J=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,yt=I.length;Z<yt;Z++){const Rt=I[Z],Bt=Rt.object,Ut=Rt.geometry,jt=J===null?Rt.material:J,Yt=Rt.group;Bt.layers.test(Q.layers)&&mo(Bt,q,Q,Ut,jt,Yt)}}function mo(I,q,Q,J,Z,yt){I.onBeforeRender(y,q,Q,J,Z,yt),I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(y,q,Q,J,I,yt),Z.transparent===!0&&Z.side===un&&Z.forceSinglePass===!1?(Z.side=pn,Z.needsUpdate=!0,y.renderBufferDirect(Q,q,J,Z,I,yt),Z.side=Bn,Z.needsUpdate=!0,y.renderBufferDirect(Q,q,J,Z,I,yt),Z.side=un):y.renderBufferDirect(Q,q,J,Z,I,yt),I.onAfterRender(y,q,Q,J,Z,yt)}function ps(I,q,Q){q.isScene!==!0&&(q=Xt);const J=Wt.get(I),Z=x.state.lights,yt=x.state.shadowsArray,Rt=Z.state.version,Bt=St.getParameters(I,Z.state,yt,q,Q),Ut=St.getProgramCacheKey(Bt);let jt=J.programs;J.environment=I.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(I.isMeshStandardMaterial?K:R).get(I.envMap||J.environment),jt===void 0&&(I.addEventListener("dispose",at),jt=new Map,J.programs=jt);let Yt=jt.get(Ut);if(Yt!==void 0){if(J.currentProgram===Yt&&J.lightsStateVersion===Rt)return br(I,Bt),Yt}else Bt.uniforms=St.getUniforms(I),I.onBuild(Q,Bt,y),I.onBeforeCompile(Bt,y),Yt=St.acquireProgram(Bt,Ut),jt.set(Ut,Yt),J.uniforms=Bt.uniforms;const Zt=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Zt.clippingPlanes=Vt.uniform),br(I,Bt),J.needsLights=Ga(I),J.lightsStateVersion=Rt,J.needsLights&&(Zt.ambientLightColor.value=Z.state.ambient,Zt.lightProbe.value=Z.state.probe,Zt.directionalLights.value=Z.state.directional,Zt.directionalLightShadows.value=Z.state.directionalShadow,Zt.spotLights.value=Z.state.spot,Zt.spotLightShadows.value=Z.state.spotShadow,Zt.rectAreaLights.value=Z.state.rectArea,Zt.ltc_1.value=Z.state.rectAreaLTC1,Zt.ltc_2.value=Z.state.rectAreaLTC2,Zt.pointLights.value=Z.state.point,Zt.pointLightShadows.value=Z.state.pointShadow,Zt.hemisphereLights.value=Z.state.hemi,Zt.directionalShadowMap.value=Z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Zt.spotShadowMap.value=Z.state.spotShadowMap,Zt.spotLightMatrix.value=Z.state.spotLightMatrix,Zt.spotLightMap.value=Z.state.spotLightMap,Zt.pointShadowMap.value=Z.state.pointShadowMap,Zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=Yt,J.uniformsList=null,Yt}function gi(I){if(I.uniformsList===null){const q=I.currentProgram.getUniforms();I.uniformsList=ba.seqWithValue(q.seq,I.uniforms)}return I.uniformsList}function br(I,q){const Q=Wt.get(I);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function Ha(I,q,Q,J,Z){q.isScene!==!0&&(q=Xt),N.resetTextureUnits();const yt=q.fog,Rt=J.isMeshStandardMaterial?q.environment:null,Bt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ke,Ut=(J.isMeshStandardMaterial?K:R).get(J.envMap||Rt),jt=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Yt=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Zt=!!Q.morphAttributes.position,Ee=!!Q.morphAttributes.normal,tn=!!Q.morphAttributes.color;let De=Bi;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(De=y.toneMapping);const wn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,xe=wn!==void 0?wn.length:0,Qt=Wt.get(J),wr=x.state.lights;if($===!0&&(ct===!0||I!==V)){const Ve=I===V&&J.id===F;Vt.setState(J,I,Ve)}let be=!1;J.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==wr.state.version||Qt.outputColorSpace!==Bt||Z.isBatchedMesh&&Qt.batching===!1||!Z.isBatchedMesh&&Qt.batching===!0||Z.isInstancedMesh&&Qt.instancing===!1||!Z.isInstancedMesh&&Qt.instancing===!0||Z.isSkinnedMesh&&Qt.skinning===!1||!Z.isSkinnedMesh&&Qt.skinning===!0||Z.isInstancedMesh&&Qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qt.instancingColor===!1&&Z.instanceColor!==null||Qt.envMap!==Ut||J.fog===!0&&Qt.fog!==yt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Vt.numPlanes||Qt.numIntersection!==Vt.numIntersection)||Qt.vertexAlphas!==jt||Qt.vertexTangents!==Yt||Qt.morphTargets!==Zt||Qt.morphNormals!==Ee||Qt.morphColors!==tn||Qt.toneMapping!==De||zt.isWebGL2===!0&&Qt.morphTargetsCount!==xe)&&(be=!0):(be=!0,Qt.__version=J.version);let Hn=Qt.currentProgram;be===!0&&(Hn=ps(J,q,Z));let go=!1,zi=!1,Er=!1;const Le=Hn.getUniforms(),We=Qt.uniforms;if(At.useProgram(Hn.program)&&(go=!0,zi=!0,Er=!0),J.id!==F&&(F=J.id,zi=!0),go||V!==I){Le.setValue(Y,"projectionMatrix",I.projectionMatrix),Le.setValue(Y,"viewMatrix",I.matrixWorldInverse);const Ve=Le.map.cameraPosition;Ve!==void 0&&Ve.setValue(Y,Mt.setFromMatrixPosition(I.matrixWorld)),zt.logarithmicDepthBuffer&&Le.setValue(Y,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Le.setValue(Y,"isOrthographic",I.isOrthographicCamera===!0),V!==I&&(V=I,zi=!0,Er=!0)}if(Z.isSkinnedMesh){Le.setOptional(Y,Z,"bindMatrix"),Le.setOptional(Y,Z,"bindMatrixInverse");const Ve=Z.skeleton;Ve&&(zt.floatVertexTextures?(Ve.boneTexture===null&&Ve.computeBoneTexture(),Le.setValue(Y,"boneTexture",Ve.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Le.setOptional(Y,Z,"batchingTexture"),Le.setValue(Y,"batchingTexture",Z._matricesTexture,N));const Zn=Q.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0&&zt.isWebGL2===!0)&&Jt.update(Z,Q,Hn),(zi||Qt.receiveShadow!==Z.receiveShadow)&&(Qt.receiveShadow=Z.receiveShadow,Le.setValue(Y,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(We.envMap.value=Ut,We.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),zi&&(Le.setValue(Y,"toneMappingExposure",y.toneMappingExposure),Qt.needsLights&&yr(We,Er),yt&&J.fog===!0&&mt.refreshFogUniforms(We,yt),mt.refreshMaterialUniforms(We,J,X,H,Et),ba.upload(Y,gi(Qt),We,N)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ba.upload(Y,gi(Qt),We,N),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Le.setValue(Y,"center",Z.center),Le.setValue(Y,"modelViewMatrix",Z.modelViewMatrix),Le.setValue(Y,"normalMatrix",Z.normalMatrix),Le.setValue(Y,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ve=J.uniformsGroups;for(let _i=0,Mr=Ve.length;_i<Mr;_i++)if(zt.isWebGL2){const _o=Ve[_i];B.update(_o,Hn),B.bind(_o,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function yr(I,q){I.ambientLightColor.needsUpdate=q,I.lightProbe.needsUpdate=q,I.directionalLights.needsUpdate=q,I.directionalLightShadows.needsUpdate=q,I.pointLights.needsUpdate=q,I.pointLightShadows.needsUpdate=q,I.spotLights.needsUpdate=q,I.spotLightShadows.needsUpdate=q,I.rectAreaLights.needsUpdate=q,I.hemisphereLights.needsUpdate=q}function Ga(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,q,Q){Wt.get(I.texture).__webglTexture=q,Wt.get(I.depthTexture).__webglTexture=Q;const J=Wt.get(I);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,q){const Q=Wt.get(I);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(I,q=0,Q=0){A=I,C=q,P=Q;let J=!0,Z=null,yt=!1,Rt=!1;if(I){const Ut=Wt.get(I);Ut.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(Y.FRAMEBUFFER,null),J=!1):Ut.__webglFramebuffer===void 0?N.setupRenderTarget(I):Ut.__hasExternalTextures&&N.rebindTextures(I,Wt.get(I.texture).__webglTexture,Wt.get(I.depthTexture).__webglTexture);const jt=I.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Rt=!0);const Yt=Wt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Yt[q])?Z=Yt[q][Q]:Z=Yt[q],yt=!0):zt.isWebGL2&&I.samples>0&&N.useMultisampledRTT(I)===!1?Z=Wt.get(I).__webglMultisampledFramebuffer:Array.isArray(Yt)?Z=Yt[Q]:Z=Yt,M.copy(I.viewport),L.copy(I.scissor),z=I.scissorTest}else M.copy(nt).multiplyScalar(X).floor(),L.copy(st).multiplyScalar(X).floor(),z=pt;if(At.bindFramebuffer(Y.FRAMEBUFFER,Z)&&zt.drawBuffers&&J&&At.drawBuffers(I,Z),At.viewport(M),At.scissor(L),At.setScissorTest(z),yt){const Ut=Wt.get(I.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ut.__webglTexture,Q)}else if(Rt){const Ut=Wt.get(I.texture),jt=q||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ut.__webglTexture,Q||0,jt)}F=-1},this.readRenderTargetPixels=function(I,q,Q,J,Z,yt,Rt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Wt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Rt!==void 0&&(Bt=Bt[Rt]),Bt){At.bindFramebuffer(Y.FRAMEBUFFER,Bt);try{const Ut=I.texture,jt=Ut.format,Yt=Ut.type;if(jt!==on&&xt.convert(jt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Zt=Yt===oo&&(Lt.has("EXT_color_buffer_half_float")||zt.isWebGL2&&Lt.has("EXT_color_buffer_float"));if(Yt!==qn&&xt.convert(Yt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Yt===Qe&&(zt.isWebGL2||Lt.has("OES_texture_float")||Lt.has("WEBGL_color_buffer_float")))&&!Zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=I.width-J&&Q>=0&&Q<=I.height-Z&&Y.readPixels(q,Q,J,Z,xt.convert(jt),xt.convert(Yt),yt)}finally{const Ut=A!==null?Wt.get(A).__webglFramebuffer:null;At.bindFramebuffer(Y.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(I,q,Q=0){const J=Math.pow(2,-Q),Z=Math.floor(q.image.width*J),yt=Math.floor(q.image.height*J);N.setTexture2D(q,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Q,0,0,I.x,I.y,Z,yt),At.unbindTexture()},this.copyTextureToTexture=function(I,q,Q,J=0){const Z=q.image.width,yt=q.image.height,Rt=xt.convert(Q.format),Bt=xt.convert(Q.type);N.setTexture2D(Q,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Q.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Q.unpackAlignment),q.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,J,I.x,I.y,Z,yt,Rt,Bt,q.image.data):q.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,J,I.x,I.y,q.mipmaps[0].width,q.mipmaps[0].height,Rt,q.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,J,I.x,I.y,Rt,Bt,q.image),J===0&&Q.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(I,q,Q,J,Z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=I.max.x-I.min.x+1,Rt=I.max.y-I.min.y+1,Bt=I.max.z-I.min.z+1,Ut=xt.convert(J.format),jt=xt.convert(J.type);let Yt;if(J.isData3DTexture)N.setTexture3D(J,0),Yt=Y.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)N.setTexture2DArray(J,0),Yt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,J.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,J.unpackAlignment);const Zt=Y.getParameter(Y.UNPACK_ROW_LENGTH),Ee=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),tn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),De=Y.getParameter(Y.UNPACK_SKIP_ROWS),wn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),xe=Q.isCompressedTexture?Q.mipmaps[Z]:Q.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,xe.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xe.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,I.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,I.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,I.min.z),Q.isDataTexture||Q.isData3DTexture?Y.texSubImage3D(Yt,Z,q.x,q.y,q.z,yt,Rt,Bt,Ut,jt,xe.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Yt,Z,q.x,q.y,q.z,yt,Rt,Bt,Ut,xe.data)):Y.texSubImage3D(Yt,Z,q.x,q.y,q.z,yt,Rt,Bt,Ut,jt,xe),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Zt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ee),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,tn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,De),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,wn),Z===0&&J.generateMipmaps&&Y.generateMipmap(Yt),At.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),At.unbindTexture()},this.resetState=function(){C=0,P=0,A=null,At.reset(),$t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Wc?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Oa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pe?ls:$p}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ls?Pe:Ke}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class oE extends vf{}oE.prototype.isWebGL1Renderer=!0;class aE extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class lE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return cs("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new D;class Kc{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),o=de(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Kc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fd=new D,Bd=new ve,kd=new ve,cE=new D,Vd=new Gt,qo=new D,Wl=new zn,zd=new Gt,Xl=new fr;class uE extends _t{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xh,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ke),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,qo),this.boundingSphere.expandByPoint(qo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(i),t.ray.intersectsSphere(Wl)!==!1&&(zd.copy(i).invert(),Xl.copy(t.ray).applyMatrix4(zd),!(this.boundingBox!==null&&Xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Xl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Bd.fromBufferAttribute(i.attributes.skinIndex,t),kd.fromBufferAttribute(i.attributes.skinWeight,t),Fd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const a=kd.getComponent(o);if(a!==0){const l=Bd.getComponent(o);Vd.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),e.addScaledVector(cE.copy(Fd).applyMatrix4(Vd),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class xf extends fe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class La extends Ye{constructor(t=null,e=1,n=1,i,o,a,l,u,d=_e,p=_e,f,m){super(null,a,l,u,d,p,i,o,f,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hd=new Gt,hE=new Gt;class $c{constructor(t=[],e=[]){this.uuid=Fn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Gt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const l=t[o]?t[o].matrixWorld:hE;Hd.multiplyMatrices(l,e[o]),Hd.toArray(n,o*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new $c(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new La(e,t,t,on,Qe);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const o=t.bones[n];let a=e[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new xf),this.bones.push(a),this.boneInverses.push(new Gt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,o=e.length;i<o;i++){const a=e[i];t.bones.push(a.uuid);const l=n[i];t.boneInverses.push(l.toArray())}return t}}class Mc extends Be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ks=new Gt,Gd=new Gt,Yo=[],Wd=new ke,dE=new Gt,Vr=new _t,zr=new zn;class pE extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ks),Wd.copy(t.boundingBox).applyMatrix4(ks),this.boundingBox.union(Wd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ks),zr.copy(t.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(zr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),t.ray.intersectsSphere(zr)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,ks),Gd.multiplyMatrices(n,ks),Vr.matrixWorld=Gd,Vr.raycast(t,Yo);for(let a=0,l=Yo.length;a<l;a++){const u=Yo[a];u.instanceId=o,u.object=this,e.push(u)}Yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Zc extends Yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xd=new D,jd=new D,qd=new Gt,jl=new fr,Ko=new zn;class Un extends fe{constructor(t=new Je,e=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)Xd.fromBufferAttribute(e,i-1),jd.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Xd.distanceTo(jd);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(i),Ko.radius+=o,t.ray.intersectsSphere(Ko)===!1)return;qd.copy(i).invert(),jl.copy(t.ray).applyMatrix4(qd);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,d=new D,p=new D,f=new D,m=new D,v=this.isLineSegments?2:1,b=n.index,x=n.attributes.position;if(b!==null){const _=Math.max(0,a.start),E=Math.min(b.count,a.start+a.count);for(let y=_,S=E-1;y<S;y+=v){const C=b.getX(y),P=b.getX(y+1);if(d.fromBufferAttribute(x,C),p.fromBufferAttribute(x,P),jl.distanceSqToSegment(d,p,m,f)>u)continue;m.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(m);F<t.near||F>t.far||e.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),E=Math.min(x.count,a.start+a.count);for(let y=_,S=E-1;y<S;y+=v){if(d.fromBufferAttribute(x,y),p.fromBufferAttribute(x,y+1),jl.distanceSqToSegment(d,p,m,f)>u)continue;m.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(m);P<t.near||P>t.far||e.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const l=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}const Yd=new D,Kd=new D;class fE extends Un{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)Yd.fromBufferAttribute(e,i),Kd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yd.distanceTo(Kd);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mE extends Un{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class bf extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $d=new Gt,Sc=new fr,$o=new zn,Zo=new D;class gE extends fe{constructor(t=new Je,e=new bf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(i),$o.radius+=o,t.ray.intersectsSphere($o)===!1)return;$d.copy(i).invert(),Sc.copy(t.ray).applyMatrix4($d);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let b=m,w=v;b<w;b++){const x=d.getX(b);Zo.fromBufferAttribute(f,x),Zd(Zo,x,u,i,t,e,this)}}else{const m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let b=m,w=v;b<w;b++)Zo.fromBufferAttribute(f,b),Zd(Zo,b,u,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const l=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Zd(s,t,e,n,i,o,a){const l=Sc.distanceSqToPoint(s);if(l<e){const u=new D;Sc.closestPointToPoint(s,u),u.applyMatrix4(n);const d=i.ray.origin.distanceTo(u);if(d<i.near||d>i.far)return;o.push({distance:d,distanceToRay:Math.sqrt(l),point:u,index:t,face:null,object:a})}}class sn extends Je{constructor(t=1,e=1,n=1,i=32,o=1,a=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:u};const d=this;i=Math.floor(i),o=Math.floor(o);const p=[],f=[],m=[],v=[];let b=0;const w=[],x=n/2;let _=0;E(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(m,3)),this.setAttribute("uv",new Re(v,2));function E(){const S=new D,C=new D;let P=0;const A=(e-t)/n;for(let F=0;F<=o;F++){const V=[],M=F/o,L=M*(e-t)+t;for(let z=0;z<=i;z++){const j=z/i,O=j*u+l,G=Math.sin(O),H=Math.cos(O);C.x=L*G,C.y=-M*n+x,C.z=L*H,f.push(C.x,C.y,C.z),S.set(G,A,H).normalize(),m.push(S.x,S.y,S.z),v.push(j,1-M),V.push(b++)}w.push(V)}for(let F=0;F<i;F++)for(let V=0;V<o;V++){const M=w[V][F],L=w[V+1][F],z=w[V+1][F+1],j=w[V][F+1];p.push(M,L,j),p.push(L,z,j),P+=6}d.addGroup(_,P,0),_+=P}function y(S){const C=b,P=new Tt,A=new D;let F=0;const V=S===!0?t:e,M=S===!0?1:-1;for(let z=1;z<=i;z++)f.push(0,x*M,0),m.push(0,M,0),v.push(.5,.5),b++;const L=b;for(let z=0;z<=i;z++){const O=z/i*u+l,G=Math.cos(O),H=Math.sin(O);A.x=V*H,A.y=x*M,A.z=V*G,f.push(A.x,A.y,A.z),m.push(0,M,0),P.x=G*.5+.5,P.y=H*.5*M+.5,v.push(P.x,P.y),b++}for(let z=0;z<i;z++){const j=C+z,O=L+z;S===!0?p.push(O,O+1,j):p.push(O+1,O,j),F+=3}d.addGroup(_,F,S===!0?1:2),_+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qc extends Je{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],a=[];l(i),d(n),p(),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(o.slice(),3)),this.setAttribute("uv",new Re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(E){const y=new D,S=new D,C=new D;for(let P=0;P<e.length;P+=3)v(e[P+0],y),v(e[P+1],S),v(e[P+2],C),u(y,S,C,E)}function u(E,y,S,C){const P=C+1,A=[];for(let F=0;F<=P;F++){A[F]=[];const V=E.clone().lerp(S,F/P),M=y.clone().lerp(S,F/P),L=P-F;for(let z=0;z<=L;z++)z===0&&F===P?A[F][z]=V:A[F][z]=V.clone().lerp(M,z/L)}for(let F=0;F<P;F++)for(let V=0;V<2*(P-F)-1;V++){const M=Math.floor(V/2);V%2===0?(m(A[F][M+1]),m(A[F+1][M]),m(A[F][M])):(m(A[F][M+1]),m(A[F+1][M+1]),m(A[F+1][M]))}}function d(E){const y=new D;for(let S=0;S<o.length;S+=3)y.x=o[S+0],y.y=o[S+1],y.z=o[S+2],y.normalize().multiplyScalar(E),o[S+0]=y.x,o[S+1]=y.y,o[S+2]=y.z}function p(){const E=new D;for(let y=0;y<o.length;y+=3){E.x=o[y+0],E.y=o[y+1],E.z=o[y+2];const S=x(E)/2/Math.PI+.5,C=_(E)/Math.PI+.5;a.push(S,1-C)}b(),f()}function f(){for(let E=0;E<a.length;E+=6){const y=a[E+0],S=a[E+2],C=a[E+4],P=Math.max(y,S,C),A=Math.min(y,S,C);P>.9&&A<.1&&(y<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),C<.2&&(a[E+4]+=1))}}function m(E){o.push(E.x,E.y,E.z)}function v(E,y){const S=E*3;y.x=t[S+0],y.y=t[S+1],y.z=t[S+2]}function b(){const E=new D,y=new D,S=new D,C=new D,P=new Tt,A=new Tt,F=new Tt;for(let V=0,M=0;V<o.length;V+=9,M+=6){E.set(o[V+0],o[V+1],o[V+2]),y.set(o[V+3],o[V+4],o[V+5]),S.set(o[V+6],o[V+7],o[V+8]),P.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),F.set(a[M+4],a[M+5]),C.copy(E).add(y).add(S).divideScalar(3);const L=x(C);w(P,M+0,E,L),w(A,M+2,y,L),w(F,M+4,S,L)}}function w(E,y,S,C){C<0&&E.x===1&&(a[y]=E.x-1),S.x===0&&S.z===0&&(a[y]=C/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.vertices,t.indices,t.radius,t.details)}}class tr extends Qc{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tr(t.radius,t.detail)}}class Jc extends Je{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const u=Math.min(a+l,Math.PI);let d=0;const p=[],f=new D,m=new D,v=[],b=[],w=[],x=[];for(let _=0;_<=n;_++){const E=[],y=_/n;let S=0;_===0&&a===0?S=.5/e:_===n&&u===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){const P=C/e;f.x=-t*Math.cos(i+P*o)*Math.sin(a+y*l),f.y=t*Math.cos(a+y*l),f.z=t*Math.sin(i+P*o)*Math.sin(a+y*l),b.push(f.x,f.y,f.z),m.copy(f).normalize(),w.push(m.x,m.y,m.z),x.push(P+S,1-y),E.push(d++)}p.push(E)}for(let _=0;_<n;_++)for(let E=0;E<e;E++){const y=p[_][E+1],S=p[_][E],C=p[_+1][E],P=p[_+1][E+1];(_!==0||a>0)&&v.push(y,S,P),(_!==n-1||u<Math.PI)&&v.push(S,C,P)}this.setIndex(v),this.setAttribute("position",new Re(b,3)),this.setAttribute("normal",new Re(w,3)),this.setAttribute("uv",new Re(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class is extends Je{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],u=[],d=[],p=new D,f=new D,m=new D;for(let v=0;v<=n;v++)for(let b=0;b<=i;b++){const w=b/i*o,x=v/n*Math.PI*2;f.x=(t+e*Math.cos(x))*Math.cos(w),f.y=(t+e*Math.cos(x))*Math.sin(w),f.z=e*Math.sin(x),l.push(f.x,f.y,f.z),p.x=t*Math.cos(w),p.y=t*Math.sin(w),m.subVectors(f,p).normalize(),u.push(m.x,m.y,m.z),d.push(b/i),d.push(v/n)}for(let v=1;v<=n;v++)for(let b=1;b<=i;b++){const w=(i+1)*v+b-1,x=(i+1)*(v-1)+b-1,_=(i+1)*(v-1)+b,E=(i+1)*v+b;a.push(w,x,E),a.push(x,_,E)}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class tu extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zp,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fi extends tu{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Qo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function _E(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function vE(s){function t(i,o){return s[i]-s[o]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Qd(s,t,e){const n=s.length,i=new s.constructor(n);for(let o=0,a=0;a!==n;++o){const l=e[o]*t;for(let u=0;u!==t;++u)i[a++]=s[l+u]}return i}function yf(s,t,e,n){let i=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[i++];if(o===void 0)return;let a=o[n];if(a!==void 0)if(Array.isArray(a))do a=o[n],a!==void 0&&(t.push(o.time),e.push.apply(e,a)),o=s[i++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[n],a!==void 0&&(t.push(o.time),a.toArray(e,e.length)),o=s[i++];while(o!==void 0);else do a=o[n],a!==void 0&&(t.push(o.time),e.push(a)),o=s[i++];while(o!==void 0)}class po{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],o=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let l=n+2;;){if(i===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(o=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=o)){const l=e[1];t<l&&(n=2,o=l);for(let u=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=o,o=e[--n-1],t>=o)break t}a=n,n=0;break e}break n}for(;n<a;){const l=n+a>>>1;t<e[l]?a=l:n=l+1}if(i=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=t*i;for(let a=0;a!==i;++a)e[a]=n[o+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xE extends po{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(t,e,n){const i=this.parameterPositions;let o=t-2,a=t+1,l=i[o],u=i[a];if(l===void 0)switch(this.getSettings_().endingStart){case jh:o=t,l=2*e-n;break;case qh:o=i.length-2,l=e+i[o]-i[o+1];break;default:o=t,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case jh:a=t,u=2*n-e;break;case qh:a=1,u=n+i[1]-i[0];break;default:a=t-1,u=e}const d=(n-e)*.5,p=this.valueSize;this._weightPrev=d/(e-l),this._weightNext=d/(u-n),this._offsetPrev=o*p,this._offsetNext=a*p}interpolate_(t,e,n,i){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=t*l,d=u-l,p=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,v=this._weightNext,b=(n-e)/(i-e),w=b*b,x=w*b,_=-m*x+2*m*w-m*b,E=(1+m)*x+(-1.5-2*m)*w+(-.5+m)*b+1,y=(-1-v)*x+(1.5+v)*w+.5*b,S=v*x-v*w;for(let C=0;C!==l;++C)o[C]=_*a[p+C]+E*a[d+C]+y*a[u+C]+S*a[f+C];return o}}class bE extends po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=t*l,d=u-l,p=(n-e)/(i-e),f=1-p;for(let m=0;m!==l;++m)o[m]=a[d+m]*f+a[u+m]*p;return o}}class yE extends po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class $n{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qo(e,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qo(t.times,Array),values:Qo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xE(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lo:e=this.InterpolantFactoryMethodDiscrete;break;case cr:e=this.InterpolantFactoryMethodLinear;break;case bl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let o=0,a=i-1;for(;o!==i&&n[o]<t;)++o;for(;a!==-1&&n[a]>e;)--a;if(++a,o!==0||a!==i){o>=a&&(a=Math.max(a,1),o=a-1);const l=this.getValueSize();this.times=n.slice(o,a),this.values=this.values.slice(o*l,a*l)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==o;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),t=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,a),t=!1;break}a=u}if(i!==void 0&&_E(i))for(let l=0,u=i.length;l!==u;++l){const d=i[l];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,d),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bl,o=t.length-1;let a=1;for(let l=1;l<o;++l){let u=!1;const d=t[l],p=t[l+1];if(d!==p&&(l!==1||d!==t[0]))if(i)u=!0;else{const f=l*n,m=f-n,v=f+n;for(let b=0;b!==n;++b){const w=e[f+b];if(w!==e[m+b]||w!==e[v+b]){u=!0;break}}}if(u){if(l!==a){t[a]=t[l];const f=l*n,m=a*n;for(let v=0;v!==n;++v)e[m+v]=e[f+v]}++a}}if(o>0){t[a]=t[o];for(let l=o*n,u=a*n,d=0;d!==n;++d)e[u+d]=e[l+d];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=cr;class gr extends $n{}gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=lo;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class wf extends $n{}wf.prototype.ValueTypeName="color";class dr extends $n{}dr.prototype.ValueTypeName="number";class wE extends po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=(n-e)/(i-e);let d=t*l;for(let p=d+l;d!==p;d+=4)Oe.slerpFlat(o,0,a,d-l,a,d,u);return o}}class us extends $n{InterpolantFactoryMethodLinear(t){return new wE(this.times,this.values,this.getValueSize(),t)}}us.prototype.ValueTypeName="quaternion";us.prototype.DefaultInterpolation=cr;us.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends $n{}_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=lo;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends $n{}pr.prototype.ValueTypeName="vector";class EE{constructor(t,e=-1,n,i=Tv){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,l=n.length;a!==l;++a)e.push(SE(n[a]).scale(i));const o=new this(t.name,t.duration,e,t.blendMode);return o.uuid=t.uuid,o}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let o=0,a=n.length;o!==a;++o)e.push($n.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const o=e.length,a=[];for(let l=0;l<o;l++){let u=[],d=[];u.push((l+o-1)%o,l,(l+1)%o),d.push(0,1,0);const p=vE(u);u=Qd(u,1,p),d=Qd(d,1,p),!i&&u[0]===0&&(u.push(o),d.push(d[0])),a.push(new dr(".morphTargetInfluences["+e[l].name+"]",u,d).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,u=t.length;l<u;l++){const d=t[l],p=d.name.match(o);if(p&&p.length>1){const f=p[1];let m=i[f];m||(i[f]=m=[]),m.push(d)}}const a=[];for(const l in i)a.push(this.CreateFromMorphTargetSequence(l,i[l],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,m,v,b,w){if(v.length!==0){const x=[],_=[];yf(v,x,_,b),x.length!==0&&w.push(new f(m,x,_))}},i=[],o=t.name||"default",a=t.fps||30,l=t.blendMode;let u=t.length||-1;const d=t.hierarchy||[];for(let f=0;f<d.length;f++){const m=d[f].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const v={};let b;for(b=0;b<m.length;b++)if(m[b].morphTargets)for(let w=0;w<m[b].morphTargets.length;w++)v[m[b].morphTargets[w]]=-1;for(const w in v){const x=[],_=[];for(let E=0;E!==m[b].morphTargets.length;++E){const y=m[b];x.push(y.time),_.push(y.morphTarget===w?1:0)}i.push(new dr(".morphTargetInfluence["+w+"]",x,_))}u=v.length*a}else{const v=".bones["+e[f].name+"]";n(pr,v+".position",m,"pos",i),n(us,v+".quaternion",m,"rot",i),n(pr,v+".scale",m,"scl",i)}}return i.length===0?null:new this(o,u,i,l)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const o=this.tracks[n];e=Math.max(e,o.times[o.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ME(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dr;case"vector":case"vector2":case"vector3":case"vector4":return pr;case"color":return wf;case"quaternion":return us;case"bool":case"boolean":return gr;case"string":return _r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function SE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ME(s.type);if(s.times===void 0){const e=[],n=[];yf(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Ui={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class TE{constructor(t,e,n){const i=this;let o=!1,a=0,l=0,u;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(p){l++,o===!1&&i.onStart!==void 0&&i.onStart(p,a,l),o=!0},this.itemEnd=function(p){a++,i.onProgress!==void 0&&i.onProgress(p,a,l),a===l&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,f){return d.push(p,f),this},this.removeHandler=function(p){const f=d.indexOf(p);return f!==-1&&d.splice(f,2),this},this.getHandler=function(p){for(let f=0,m=d.length;f<m;f+=2){const v=d[f],b=d[f+1];if(v.global&&(v.lastIndex=0),v.test(p))return b}return null}}}const AE=new TE;class vr{constructor(t){this.manager=t!==void 0?t:AE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,o){n.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class CE extends Error{constructor(t,e){super(t),this.response=e}}class Ef extends vr{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Ui.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(ai[t]!==void 0){ai[t].push({onLoad:e,onProgress:n,onError:i});return}ai[t]=[],ai[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,u=this.responseType;fetch(a).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||d.body===void 0||d.body.getReader===void 0)return d;const p=ai[t],f=d.body.getReader(),m=d.headers.get("Content-Length")||d.headers.get("X-File-Size"),v=m?parseInt(m):0,b=v!==0;let w=0;const x=new ReadableStream({start(_){E();function E(){f.read().then(({done:y,value:S})=>{if(y)_.close();else{w+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:b,loaded:w,total:v});for(let P=0,A=p.length;P<A;P++){const F=p[P];F.onProgress&&F.onProgress(C)}_.enqueue(S),E()}})}}});return new Response(x)}else throw new CE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(u){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return d.json();default:if(l===void 0)return d.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),m=f&&f[1]?f[1].toLowerCase():void 0,v=new TextDecoder(m);return d.arrayBuffer().then(b=>v.decode(b))}}}).then(d=>{Ui.add(t,d);const p=ai[t];delete ai[t];for(let f=0,m=p.length;f<m;f++){const v=p[f];v.onLoad&&v.onLoad(d)}}).catch(d=>{const p=ai[t];if(p===void 0)throw this.manager.itemError(t),d;delete ai[t];for(let f=0,m=p.length;f<m;f++){const v=p[f];v.onError&&v.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class PE extends vr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,a=Ui.get(t);if(a!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(a),o.manager.itemEnd(t)},0),a;const l=co("img");function u(){p(),Ui.add(t,this),e&&e(this),o.manager.itemEnd(t)}function d(f){p(),i&&i(f),o.manager.itemError(t),o.manager.itemEnd(t)}function p(){l.removeEventListener("load",u,!1),l.removeEventListener("error",d,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(t),l.src=t,l}}class Mf extends vr{constructor(t){super(t)}load(t,e,n,i){const o=new Ye,a=new PE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(l){o.image=l,o.needsUpdate=!0,e!==void 0&&e(o)},n,i),o}}class eu extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ql=new Gt,Jd=new D,tp=new D;class nu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jd),tp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tp),e.updateMatrixWorld(),ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class RE extends nu{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ur*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class LE extends eu{constructor(t,e,n=0,i=Math.PI/3,o=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=i,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new RE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ep=new Gt,Hr=new D,Yl=new D;class IE extends nu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hr),Yl.copy(n.position),Yl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Yl),n.updateMatrixWorld(),i.makeTranslation(-Hr.x,-Hr.y,-Hr.z),ep.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ep)}}class DE extends eu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new IE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class NE extends nu{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sf extends eu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new NE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class so{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class UE extends vr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,a=Ui.get(t);if(a!==void 0){if(o.manager.itemStart(t),a.then){a.then(d=>{e&&e(d),o.manager.itemEnd(t)}).catch(d=>{i&&i(d)});return}return setTimeout(function(){e&&e(a),o.manager.itemEnd(t)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const u=fetch(t,l).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(d){return Ui.add(t,d),e&&e(d),o.manager.itemEnd(t),d}).catch(function(d){i&&i(d),Ui.remove(t),o.manager.itemError(t),o.manager.itemEnd(t)});Ui.add(t,u),o.manager.itemStart(t)}}const iu="\\[\\]\\.:\\/",OE=new RegExp("["+iu+"]","g"),su="[^"+iu+"]",FE="[^"+iu.replace("\\.","")+"]",BE=/((?:WC+[\/:])*)/.source.replace("WC",su),kE=/(WCOD+)?/.source.replace("WCOD",FE),VE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),zE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),HE=new RegExp("^"+BE+kE+VE+zE+"$"),GE=["material","materials","bones","map"];class WE{constructor(t,e,n){const i=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class pe{constructor(t,e,n){this.path=e,this.parsedPath=n||pe.parseTrackName(e),this.node=pe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new pe.Composite(t,e,n):new pe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(OE,"")}static parseTrackName(t){const e=HE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=n.nodeName.substring(i+1);GE.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let a=0;a<o.length;a++){const l=o[a];if(l.name===e||l.uuid===e)return l;const u=n(l.children);if(u)return u}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let o=e.propertyIndex;if(t||(t=pe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===d){d=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(d!==void 0){if(t[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}const a=t[i];if(a===void 0){const d=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+i+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pe.Composite=WE;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ba{constructor(t){this.value=t}clone(){return new Ba(this.value.clone===void 0?this.value:this.value.clone())}}class XE{constructor(t,e,n=0,i=1/0){this.ray=new fr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Tc(t,this,n,e),n.sort(np),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)Tc(t[i],this,n,e);return n.sort(np),n}}function np(s,t){return s.distance-t.distance}function Tc(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let o=0,a=i.length;o<a;o++)Tc(i[o],t,e,!0)}}class ip{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const sp=new D,Jo=new D;class di{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){sp.subVectors(t,this.start),Jo.subVectors(this.end,this.start);const n=Jo.dot(Jo);let o=Jo.dot(sp)/n;return e&&(o=qe(o,0,1)),o}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);function jE(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},a={},l=s[0].morphTargetsRelative,u=new Je;let d=0;for(let p=0;p<s.length;++p){const f=s[p];let m=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in f.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;o[v]===void 0&&(o[v]=[]),o[v].push(f.attributes[v]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in f.morphAttributes){if(!i.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;a[v]===void 0&&(a[v]=[]),a[v].push(f.morphAttributes[v])}if(t){let v;if(e)v=f.index.count;else if(f.attributes.position!==void 0)v=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;u.addGroup(d,v,p),d+=v}}if(e){let p=0;const f=[];for(let m=0;m<s.length;++m){const v=s[m].index;for(let b=0;b<v.count;++b)f.push(v.getX(b)+p);p+=s[m].attributes.position.count}u.setIndex(f)}for(const p in o){const f=rp(o[p]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;u.setAttribute(p,f)}for(const p in a){const f=a[p][0].length;if(f===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[p]=[];for(let m=0;m<f;++m){const v=[];for(let w=0;w<a[p].length;++w)v.push(a[p][w][m]);const b=rp(v);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;u.morphAttributes[p].push(b)}}return u}function rp(s){let t,e,n,i=-1,o=0;for(let d=0;d<s.length;++d){const p=s[d];if(t===void 0&&(t=p.array.constructor),t!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=p.itemSize),e!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=p.normalized),n!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=p.gpuType),i!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=p.count*e}const a=new t(o),l=new Be(a,e,n);let u=0;for(let d=0;d<s.length;++d){const p=s[d];if(p.isInterleavedBufferAttribute){const f=u/e;for(let m=0,v=p.count;m<v;m++)for(let b=0;b<e;b++){const w=p.getComponent(m,b);l.setComponent(m+f,b,w)}}else a.set(p.array,u);u+=p.count*e}return i!==void 0&&(l.gpuType=i),l}function op(s,t){if(t===Av)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===xc||t===Kp){let e=s.getIndex();if(e===null){const a=[],l=s.getAttribute("position");if(l!==void 0){for(let u=0;u<l.count;u++)a.push(u);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===xc)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=s.clone();return o.setIndex(i),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class qE extends vr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new QE(e)}),this.register(function(e){return new aM(e)}),this.register(function(e){return new lM(e)}),this.register(function(e){return new cM(e)}),this.register(function(e){return new tM(e)}),this.register(function(e){return new eM(e)}),this.register(function(e){return new nM(e)}),this.register(function(e){return new iM(e)}),this.register(function(e){return new ZE(e)}),this.register(function(e){return new sM(e)}),this.register(function(e){return new JE(e)}),this.register(function(e){return new oM(e)}),this.register(function(e){return new rM(e)}),this.register(function(e){return new KE(e)}),this.register(function(e){return new uM(e)}),this.register(function(e){return new hM(e)})}load(t,e,n,i){const o=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const d=so.extractUrlBase(t);a=so.resolveURL(d,this.path)}else a=so.extractUrlBase(t);this.manager.itemStart(t);const l=function(d){i?i(d):console.error(d),o.manager.itemError(t),o.manager.itemEnd(t)},u=new Ef(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(t,function(d){try{o.parse(d,a,function(p){e(p),o.manager.itemEnd(t)},l)}catch(p){l(p)}},n,l)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let o;const a={},l={},u=new TextDecoder;if(typeof t=="string")o=JSON.parse(t);else if(t instanceof ArrayBuffer)if(u.decode(new Uint8Array(t,0,4))===Tf){try{a[ae.KHR_BINARY_GLTF]=new dM(t)}catch(f){i&&i(f);return}o=JSON.parse(a[ae.KHR_BINARY_GLTF].content)}else o=JSON.parse(u.decode(t));else o=t;if(o.asset===void 0||o.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new SM(o,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const f=this.pluginCallbacks[p](d);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,a[f.name]=!0}if(o.extensionsUsed)for(let p=0;p<o.extensionsUsed.length;++p){const f=o.extensionsUsed[p],m=o.extensionsRequired||[];switch(f){case ae.KHR_MATERIALS_UNLIT:a[f]=new $E;break;case ae.KHR_DRACO_MESH_COMPRESSION:a[f]=new pM(o,this.dracoLoader);break;case ae.KHR_TEXTURE_TRANSFORM:a[f]=new fM;break;case ae.KHR_MESH_QUANTIZATION:a[f]=new mM;break;default:m.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}d.setExtensions(a),d.setPlugins(l),d.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,o){n.parse(t,e,i,o)})}}function YE(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const ae={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class KE{constructor(t){this.parser=t,this.name=ae.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const o=e[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const o=e.json,u=((o.extensions&&o.extensions[this.name]||{}).lights||[])[t];let d;const p=new Kt(16777215);u.color!==void 0&&p.setRGB(u.color[0],u.color[1],u.color[2],Ke);const f=u.range!==void 0?u.range:0;switch(u.type){case"directional":d=new Sf(p),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new DE(p),d.distance=f;break;case"spot":d=new LE(p),d.distance=f,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,d.angle=u.spot.outerConeAngle,d.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return d.position.set(0,0,0),d.decay=2,Di(d,u),u.intensity!==void 0&&(d.intensity=u.intensity),d.name=e.createUniqueName(u.name||"light_"+t),i=Promise.resolve(d),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,o=n.json.nodes[t],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(u){return n._getNodeRef(e.cache,l,u)})}}class $E{constructor(){this.name=ae.KHR_MATERIALS_UNLIT}getMaterialType(){return jn}extendParams(t,e,n){const i=[];t.color=new Kt(1,1,1),t.opacity=1;const o=e.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ke),t.opacity=a[3]}o.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",o.baseColorTexture,Pe))}return Promise.all(i)}}class ZE{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name].emissiveStrength;return o!==void 0&&(e.emissiveIntensity=o),Promise.resolve()}}class QE{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Tt(l,l)}return Promise.all(o)}}class JE{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class tM{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[];e.sheenColor=new Kt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;e.sheenColor.setRGB(l[0],l[1],l[2],Ke)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Pe)),a.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class eM{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class nM{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return e.attenuationColor=new Kt().setRGB(l[0],l[1],l[2],Ke),Promise.all(o)}}class iM{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return e.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class sM{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return e.specularColor=new Kt().setRGB(l[0],l[1],l[2],Ke),a.specularColorTexture!==void 0&&o.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Pe)),Promise.all(o)}}class rM{constructor(t){this.parser=t,this.name=ae.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(o)}}class oM{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class aM{constructor(t){this.parser=t,this.name=ae.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const o=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,o.source,a)}}class lM{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,o=i.textures[t];if(!o.extensions||!o.extensions[e])return null;const a=o.extensions[e],l=i.images[a.source];let u=n.textureLoader;if(l.uri){const d=n.options.manager.getHandler(l.uri);d!==null&&(u=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(t,a.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class cM{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,o=i.textures[t];if(!o.extensions||!o.extensions[e])return null;const a=o.extensions[e],l=i.images[a.source];let u=n.textureLoader;if(l.uri){const d=n.options.manager.getHandler(l.uri);d!==null&&(u=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(t,a.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class uM{constructor(t){this.name=ae.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],o=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){const u=i.byteOffset||0,d=i.byteLength||0,p=i.count,f=i.byteStride,m=new Uint8Array(l,u,d);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(p,f,m,i.mode,i.filter).then(function(v){return v.buffer}):a.ready.then(function(){const v=new ArrayBuffer(p*f);return a.decodeGltfBuffer(new Uint8Array(v),p,f,m,i.mode,i.filter),v})})}else return null}}class hM{constructor(t){this.name=ae.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const d of i.primitives)if(d.mode!==Tn.TRIANGLES&&d.mode!==Tn.TRIANGLE_STRIP&&d.mode!==Tn.TRIANGLE_FAN&&d.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],u={};for(const d in a)l.push(this.parser.getDependency("accessor",a[d]).then(p=>(u[d]=p,u[d])));return l.length<1?null:(l.push(this.parser.createNodeMesh(t)),Promise.all(l).then(d=>{const p=d.pop(),f=p.isGroup?p.children:[p],m=d[0].count,v=[];for(const b of f){const w=new Gt,x=new D,_=new Oe,E=new D(1,1,1),y=new pE(b.geometry,b.material,m);for(let S=0;S<m;S++)u.TRANSLATION&&x.fromBufferAttribute(u.TRANSLATION,S),u.ROTATION&&_.fromBufferAttribute(u.ROTATION,S),u.SCALE&&E.fromBufferAttribute(u.SCALE,S),y.setMatrixAt(S,w.compose(x,_,E));for(const S in u)if(S==="_COLOR_0"){const C=u[S];y.instanceColor=new Mc(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&b.geometry.setAttribute(S,u[S]);fe.prototype.copy.call(y,b),this.parser.assignFinalMaterial(y),v.push(y)}return p.isGroup?(p.clear(),p.add(...v),p):v[0]}))}}const Tf="glTF",Gr=12,ap={JSON:1313821514,BIN:5130562};class dM{constructor(t){this.name=ae.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Tf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Gr,o=new DataView(t,Gr);let a=0;for(;a<i;){const l=o.getUint32(a,!0);a+=4;const u=o.getUint32(a,!0);if(a+=4,u===ap.JSON){const d=new Uint8Array(t,Gr+a,l);this.content=n.decode(d)}else if(u===ap.BIN){const d=Gr+a;this.body=t.slice(d,d+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ae.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,o=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,l={},u={},d={};for(const p in a){const f=Ac[p]||p.toLowerCase();l[f]=a[p]}for(const p in t.attributes){const f=Ac[p]||p.toLowerCase();if(a[p]!==void 0){const m=n.accessors[t.attributes[p]],v=sr[m.componentType];d[f]=v.name,u[f]=m.normalized===!0}}return e.getDependency("bufferView",o).then(function(p){return new Promise(function(f,m){i.decodeDracoFile(p,function(v){for(const b in v.attributes){const w=v.attributes[b],x=u[b];x!==void 0&&(w.normalized=x)}f(v)},l,d,Ke,m)})})}}class fM{constructor(){this.name=ae.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class mM{constructor(){this.name=ae.KHR_MESH_QUANTIZATION}}class Af extends po{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[o+a];return e}interpolate_(t,e,n,i){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=l*2,d=l*3,p=i-e,f=(n-e)/p,m=f*f,v=m*f,b=t*d,w=b-d,x=-2*v+3*m,_=v-m,E=1-x,y=_-m+f;for(let S=0;S!==l;S++){const C=a[w+S+l],P=a[w+S+u]*p,A=a[b+S+l],F=a[b+S]*p;o[S]=E*C+y*P+x*A+_*F}return o}}const gM=new Oe;class _M extends Af{interpolate_(t,e,n,i){const o=super.interpolate_(t,e,n,i);return gM.fromArray(o).normalize().toArray(o),o}}const Tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lp={9728:_e,9729:je,9984:_c,9985:xa,9986:Zs,9987:ui},cp={33071:An,33648:Sa,10497:ar},Kl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ac={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vM={CUBICSPLINE:void 0,LINEAR:cr,STEP:lo},$l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new tu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),s.DefaultMaterial}function Zi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Di(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function bM(s,t,e){let n=!1,i=!1,o=!1;for(let d=0,p=t.length;d<p;d++){const f=t[d];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(o=!0),n&&i&&o)break}if(!n&&!i&&!o)return Promise.resolve(s);const a=[],l=[],u=[];for(let d=0,p=t.length;d<p;d++){const f=t[d];if(n){const m=f.POSITION!==void 0?e.getDependency("accessor",f.POSITION):s.attributes.position;a.push(m)}if(i){const m=f.NORMAL!==void 0?e.getDependency("accessor",f.NORMAL):s.attributes.normal;l.push(m)}if(o){const m=f.COLOR_0!==void 0?e.getDependency("accessor",f.COLOR_0):s.attributes.color;u.push(m)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(u)]).then(function(d){const p=d[0],f=d[1],m=d[2];return n&&(s.morphAttributes.position=p),i&&(s.morphAttributes.normal=f),o&&(s.morphAttributes.color=m),s.morphTargetsRelative=!0,s})}function yM(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wM(s){let t;const e=s.extensions&&s.extensions[ae.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Zl(e.attributes):t=s.indices+":"+Zl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Zl(s.targets[n]);return t}function Zl(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Cc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const MM=new Gt;class SM{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new YE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,o=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,o=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&o<98?this.textureLoader=new Mf(this.options.manager):this.textureLoader=new UE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ef(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Zi(o,l,i),Di(l,i),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(l)})).then(function(){t(l)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,o=e.length;i<o;i++){const a=e[i].joints;for(let l=0,u=a.length;l<u;l++)t[a[l]].isBone=!0}for(let i=0,o=t.length;i<o;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),o=(a,l)=>{const u=this.associations.get(a);u!=null&&this.associations.set(l,u);for(const[d,p]of a.children.entries())o(p,l.children[d])};return o(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const o=t(e[i]);o&&n.push(o)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(o){return o.loadNode&&o.loadNode(e)});break;case"mesh":i=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(o,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ae.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(o,a){n.load(so.resolveURL(e.uri,i.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,o=e.byteOffset||0;return n.slice(o,o+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=Kl[i.type],l=sr[i.componentType],u=i.normalized===!0,d=new l(i.count*a);return Promise.resolve(new Be(d,a,u))}const o=[];return i.bufferView!==void 0?o.push(this.getDependency("bufferView",i.bufferView)):o.push(null),i.sparse!==void 0&&(o.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(o).then(function(a){const l=a[0],u=Kl[i.type],d=sr[i.componentType],p=d.BYTES_PER_ELEMENT,f=p*u,m=i.byteOffset||0,v=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0;let w,x;if(v&&v!==f){const _=Math.floor(m/v),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let y=e.cache.get(E);y||(w=new d(l,_*v,i.count*v/p),y=new lE(w,v/p),e.cache.add(E,y)),x=new Kc(y,u,m%v/p,b)}else l===null?w=new d(i.count*u):w=new d(l,m,i.count*u),x=new Be(w,u,b);if(i.sparse!==void 0){const _=Kl.SCALAR,E=sr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,C=new E(a[1],y,i.sparse.count*_),P=new d(a[2],S,i.sparse.count*u);l!==null&&(x=new Be(x.array.slice(),x.itemSize,x.normalized));for(let A=0,F=C.length;A<F;A++){const V=C[A];if(x.setX(V,P[A*u]),u>=2&&x.setY(V,P[A*u+1]),u>=3&&x.setZ(V,P[A*u+2]),u>=4&&x.setW(V,P[A*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(t){const e=this.json,n=this.options,o=e.textures[t].source,a=e.images[o];let l=this.textureLoader;if(a.uri){const u=n.manager.getHandler(a.uri);u!==null&&(l=u)}return this.loadTextureImage(t,o,l)}loadTextureImage(t,e,n){const i=this,o=this.json,a=o.textures[t],l=o.images[e],u=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[u])return this.textureCache[u];const d=this.loadImageSource(e,n).then(function(p){p.flipY=!1,p.name=a.name||l.name||"",p.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(p.name=l.uri);const m=(o.samplers||{})[a.sampler]||{};return p.magFilter=lp[m.magFilter]||je,p.minFilter=lp[m.minFilter]||ui,p.wrapS=cp[m.wrapS]||ar,p.wrapT=cp[m.wrapT]||ar,i.associations.set(p,{textures:t}),p}).catch(function(){return null});return this.textureCache[u]=d,d}loadImageSource(t,e){const n=this,i=this.json,o=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const a=i.images[t],l=self.URL||self.webkitURL;let u=a.uri||"",d=!1;if(a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(f){d=!0;const m=new Blob([f],{type:a.mimeType});return u=l.createObjectURL(m),u});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const p=Promise.resolve(u).then(function(f){return new Promise(function(m,v){let b=m;e.isImageBitmapLoader===!0&&(b=function(w){const x=new Ye(w);x.needsUpdate=!0,m(x)}),e.load(so.resolveURL(f,o.path),b,void 0,v)})}).then(function(f){return d===!0&&l.revokeObjectURL(u),f.userData.mimeType=a.mimeType||EM(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),f});return this.sourceCache[t]=p,p}assignTexture(t,e,n,i){const o=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),o.extensions[ae.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[ae.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const u=o.associations.get(a);a=o.extensions[ae.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),o.associations.set(a,u)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,o=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const l="PointsMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new bf,Yn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(l,u)),n=u}else if(t.isLine){const l="LineBasicMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new Zc,Yn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(l,u)),n=u}if(i||o||a){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let u=this.cache.get(l);u||(u=n.clone(),o&&(u.vertexColors=!0),a&&(u.flatShading=!0),i&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(l,u),this.associations.set(u,this.associations.get(n))),n=u}t.material=n}getMaterialType(){return tu}loadMaterial(t){const e=this,n=this.json,i=this.extensions,o=n.materials[t];let a;const l={},u=o.extensions||{},d=[];if(u[ae.KHR_MATERIALS_UNLIT]){const f=i[ae.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),d.push(f.extendParams(l,o,e))}else{const f=o.pbrMetallicRoughness||{};if(l.color=new Kt(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const m=f.baseColorFactor;l.color.setRGB(m[0],m[1],m[2],Ke),l.opacity=m[3]}f.baseColorTexture!==void 0&&d.push(e.assignTexture(l,"map",f.baseColorTexture,Pe)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(d.push(e.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),d.push(e.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(t)}),d.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(t,l)})))}o.doubleSided===!0&&(l.side=un);const p=o.alphaMode||$l.OPAQUE;if(p===$l.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,p===$l.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==jn&&(d.push(e.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new Tt(1,1),o.normalTexture.scale!==void 0)){const f=o.normalTexture.scale;l.normalScale.set(f,f)}if(o.occlusionTexture!==void 0&&a!==jn&&(d.push(e.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==jn){const f=o.emissiveFactor;l.emissive=new Kt().setRGB(f[0],f[1],f[2],Ke)}return o.emissiveTexture!==void 0&&a!==jn&&d.push(e.assignTexture(l,"emissiveMap",o.emissiveTexture,Pe)),Promise.all(d).then(function(){const f=new a(l);return o.name&&(f.name=o.name),Di(f,o),e.associations.set(f,{materials:t}),o.extensions&&Zi(i,f,o),f})}createUniqueName(t){const e=pe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function o(l){return n[ae.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,e).then(function(u){return up(u,l,e)})}const a=[];for(let l=0,u=t.length;l<u;l++){const d=t[l],p=wM(d),f=i[p];if(f)a.push(f.promise);else{let m;d.extensions&&d.extensions[ae.KHR_DRACO_MESH_COMPRESSION]?m=o(d):m=up(new Je,d,e),i[p]={primitive:d,promise:m},a.push(m)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,o=n.meshes[t],a=o.primitives,l=[];for(let u=0,d=a.length;u<d;u++){const p=a[u].material===void 0?xM(this.cache):this.getDependency("material",a[u].material);l.push(p)}return l.push(e.loadGeometries(a)),Promise.all(l).then(function(u){const d=u.slice(0,u.length-1),p=u[u.length-1],f=[];for(let v=0,b=p.length;v<b;v++){const w=p[v],x=a[v];let _;const E=d[v];if(x.mode===Tn.TRIANGLES||x.mode===Tn.TRIANGLE_STRIP||x.mode===Tn.TRIANGLE_FAN||x.mode===void 0)_=o.isSkinnedMesh===!0?new uE(w,E):new _t(w,E),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),x.mode===Tn.TRIANGLE_STRIP?_.geometry=op(_.geometry,Kp):x.mode===Tn.TRIANGLE_FAN&&(_.geometry=op(_.geometry,xc));else if(x.mode===Tn.LINES)_=new fE(w,E);else if(x.mode===Tn.LINE_STRIP)_=new Un(w,E);else if(x.mode===Tn.LINE_LOOP)_=new mE(w,E);else if(x.mode===Tn.POINTS)_=new gE(w,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(_.geometry.morphAttributes).length>0&&yM(_,o),_.name=e.createUniqueName(o.name||"mesh_"+t),Di(_,o),x.extensions&&Zi(i,_,x),e.assignFinalMaterial(_),f.push(_)}for(let v=0,b=f.length;v<b;v++)e.associations.set(f[v],{meshes:t,primitives:v});if(f.length===1)return o.extensions&&Zi(i,f[0],o),f[0];const m=new rs;o.extensions&&Zi(i,m,o),e.associations.set(m,{meshes:t});for(let v=0,b=f.length;v<b;v++)m.add(f[v]);return m})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new cn(Jp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ho(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Di(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,o=e.joints.length;i<o;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const o=i.pop(),a=i,l=[],u=[];for(let d=0,p=a.length;d<p;d++){const f=a[d];if(f){l.push(f);const m=new Gt;o!==null&&m.fromArray(o.array,d*16),u.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[d])}return new $c(l,u)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],o=i.name?i.name:"animation_"+t,a=[],l=[],u=[],d=[],p=[];for(let f=0,m=i.channels.length;f<m;f++){const v=i.channels[f],b=i.samplers[v.sampler],w=v.target,x=w.node,_=i.parameters!==void 0?i.parameters[b.input]:b.input,E=i.parameters!==void 0?i.parameters[b.output]:b.output;w.node!==void 0&&(a.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",_)),u.push(this.getDependency("accessor",E)),d.push(b),p.push(w))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(d),Promise.all(p)]).then(function(f){const m=f[0],v=f[1],b=f[2],w=f[3],x=f[4],_=[];for(let E=0,y=m.length;E<y;E++){const S=m[E],C=v[E],P=b[E],A=w[E],F=x[E];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const V=n._createAnimationTracks(S,C,P,A,F);if(V)for(let M=0;M<V.length;M++)_.push(V[M])}return new EE(o,void 0,_)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(o){const a=n._getNodeRef(n.meshCache,i.mesh,o);return i.weights!==void 0&&a.traverse(function(l){if(!!l.isMesh)for(let u=0,d=i.weights.length;u<d;u++)l.morphTargetInfluences[u]=i.weights[u]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],o=n._loadNodeShallow(t),a=[],l=i.children||[];for(let d=0,p=l.length;d<p;d++)a.push(n.getDependency("node",l[d]));const u=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([o,Promise.all(a),u]).then(function(d){const p=d[0],f=d[1],m=d[2];m!==null&&p.traverse(function(v){!v.isSkinnedMesh||v.bind(m,MM)});for(let v=0,b=f.length;v<b;v++)p.add(f[v]);return p})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const o=e.nodes[t],a=o.name?i.createUniqueName(o.name):"",l=[],u=i._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(t)});return u&&l.push(u),o.camera!==void 0&&l.push(i.getDependency("camera",o.camera).then(function(d){return i._getNodeRef(i.cameraCache,o.camera,d)})),i._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(t)}).forEach(function(d){l.push(d)}),this.nodeCache[t]=Promise.all(l).then(function(d){let p;if(o.isBone===!0?p=new xf:d.length>1?p=new rs:d.length===1?p=d[0]:p=new fe,p!==d[0])for(let f=0,m=d.length;f<m;f++)p.add(d[f]);if(o.name&&(p.userData.name=o.name,p.name=a),Di(p,o),o.extensions&&Zi(n,p,o),o.matrix!==void 0){const f=new Gt;f.fromArray(o.matrix),p.applyMatrix4(f)}else o.translation!==void 0&&p.position.fromArray(o.translation),o.rotation!==void 0&&p.quaternion.fromArray(o.rotation),o.scale!==void 0&&p.scale.fromArray(o.scale);return i.associations.has(p)||i.associations.set(p,{}),i.associations.get(p).nodes=t,p}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,o=new rs;n.name&&(o.name=i.createUniqueName(n.name)),Di(o,n),n.extensions&&Zi(e,o,n);const a=n.nodes||[],l=[];for(let u=0,d=a.length;u<d;u++)l.push(i.getDependency("node",a[u]));return Promise.all(l).then(function(u){for(let p=0,f=u.length;p<f;p++)o.add(u[p]);const d=p=>{const f=new Map;for(const[m,v]of i.associations)(m instanceof Yn||m instanceof Ye)&&f.set(m,v);return p.traverse(m=>{const v=i.associations.get(m);v!=null&&f.set(m,v)}),f};return i.associations=d(o),o})}_createAnimationTracks(t,e,n,i,o){const a=[],l=t.name?t.name:t.uuid,u=[];Ri[o.path]===Ri.weights?t.traverse(function(m){m.morphTargetInfluences&&u.push(m.name?m.name:m.uuid)}):u.push(l);let d;switch(Ri[o.path]){case Ri.weights:d=dr;break;case Ri.rotation:d=us;break;case Ri.position:case Ri.scale:d=pr;break;default:switch(n.itemSize){case 1:d=dr;break;case 2:case 3:default:d=pr;break}break}const p=i.interpolation!==void 0?vM[i.interpolation]:cr,f=this._getArrayFromAccessor(n);for(let m=0,v=u.length;m<v;m++){const b=new d(u[m]+"."+Ri[o.path],e.array,f,p);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Cc(e.constructor),i=new Float32Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=e[o]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof us?_M:Af;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function TM(s,t,e){const n=t.attributes,i=new ke;if(n.POSITION!==void 0){const l=e.json.accessors[n.POSITION],u=l.min,d=l.max;if(u!==void 0&&d!==void 0){if(i.set(new D(u[0],u[1],u[2]),new D(d[0],d[1],d[2])),l.normalized){const p=Cc(sr[l.componentType]);i.min.multiplyScalar(p),i.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=t.targets;if(o!==void 0){const l=new D,u=new D;for(let d=0,p=o.length;d<p;d++){const f=o[d];if(f.POSITION!==void 0){const m=e.json.accessors[f.POSITION],v=m.min,b=m.max;if(v!==void 0&&b!==void 0){if(u.setX(Math.max(Math.abs(v[0]),Math.abs(b[0]))),u.setY(Math.max(Math.abs(v[1]),Math.abs(b[1]))),u.setZ(Math.max(Math.abs(v[2]),Math.abs(b[2]))),m.normalized){const w=Cc(sr[m.componentType]);u.multiplyScalar(w)}l.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}s.boundingBox=i;const a=new zn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function up(s,t,e){const n=t.attributes,i=[];function o(a,l){return e.getDependency("accessor",a).then(function(u){s.setAttribute(l,u)})}for(const a in n){const l=Ac[a]||a.toLowerCase();l in s.attributes||i.push(o(n[a],l))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(l){s.setIndex(l)});i.push(a)}return he.workingColorSpace!==Ke&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${he.workingColorSpace}" not supported.`),Di(s,t),TM(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?bM(s,t.targets,e):s})}const AM=s=>new Promise((t,e)=>{new Mf().load(s,t,void 0,e)}),CM=s=>new Promise(async(t,e)=>{new qE().load(s,t,void 0,e)}),Cf=0,PM=1,RM=2,hp=2,Ql=1.25,dp=1,ki=6*4+4+4,ka=65535,LM=Math.pow(2,-24),Jl=Symbol("SKIP_GENERATION");function Pf(s){return s.index?s.index.count:s.attributes.position.count}function xr(s){return Pf(s)/3}function Rf(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function IM(s,t){if(!s.index){const e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Rf(e,n);s.setIndex(new Be(i,1));for(let o=0;o<e;o++)i[o]=o}}function Lf(s){const t=xr(s),e=s.drawRange,n=e.start/3,i=(e.start+e.count)/3,o=Math.max(0,n),a=Math.min(t,i)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function If(s){if(!s.groups||!s.groups.length)return Lf(s);const t=[],e=new Set,n=s.drawRange,i=n.start/3,o=(n.start+n.count)/3;for(const l of s.groups){const u=l.start/3,d=(l.start+l.count)/3;e.add(Math.max(i,u)),e.add(Math.min(o,d))}const a=Array.from(e.values()).sort((l,u)=>l-u);for(let l=0;l<a.length-1;l++){const u=a[l],d=a[l+1];t.push({offset:Math.floor(u),count:Math.floor(d-u)})}return t}function DM(s){if(s.groups.length===0)return!1;const t=xr(s),e=If(s).sort((o,a)=>o.offset-a.offset),n=e[e.length-1];n.count=Math.min(t-n.offset,n.count);let i=0;return e.forEach(({count:o})=>i+=o),t!==i}function tc(s,t,e,n,i){let o=1/0,a=1/0,l=1/0,u=-1/0,d=-1/0,p=-1/0,f=1/0,m=1/0,v=1/0,b=-1/0,w=-1/0,x=-1/0;for(let _=t*6,E=(t+e)*6;_<E;_+=6){const y=s[_+0],S=s[_+1],C=y-S,P=y+S;C<o&&(o=C),P>u&&(u=P),y<f&&(f=y),y>b&&(b=y);const A=s[_+2],F=s[_+3],V=A-F,M=A+F;V<a&&(a=V),M>d&&(d=M),A<m&&(m=A),A>w&&(w=A);const L=s[_+4],z=s[_+5],j=L-z,O=L+z;j<l&&(l=j),O>p&&(p=O),L<v&&(v=L),L>x&&(x=L)}n[0]=o,n[1]=a,n[2]=l,n[3]=u,n[4]=d,n[5]=p,i[0]=f,i[1]=m,i[2]=v,i[3]=b,i[4]=w,i[5]=x}function NM(s,t=null,e=null,n=null){const i=s.attributes.position,o=s.index?s.index.array:null,a=xr(s),l=i.normalized;let u;t===null?(u=new Float32Array(a*6*4),e=0,n=a):(u=t,e=e||0,n=n||a);const d=i.array,p=i.offset||0;let f=3;i.isInterleavedBufferAttribute&&(f=i.data.stride);const m=["getX","getY","getZ"];for(let v=e;v<e+n;v++){const b=v*3,w=v*6;let x=b+0,_=b+1,E=b+2;o&&(x=o[x],_=o[_],E=o[E]),l||(x=x*f+p,_=_*f+p,E=E*f+p);for(let y=0;y<3;y++){let S,C,P;l?(S=i[m[y]](x),C=i[m[y]](_),P=i[m[y]](E)):(S=d[x+y],C=d[_+y],P=d[E+y]);let A=S;C<A&&(A=C),P<A&&(A=P);let F=S;C>F&&(F=C),P>F&&(F=P);const V=(F-A)/2,M=y*2;u[w+M+0]=A+V,u[w+M+1]=V+(Math.abs(A)+V)*LM}}return u}function Ce(s,t,e){return e.min.x=t[s],e.min.y=t[s+1],e.min.z=t[s+2],e.max.x=t[s+3],e.max.y=t[s+4],e.max.z=t[s+5],e}function pp(s){let t=-1,e=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>e&&(e=i,t=n)}return t}function fp(s,t){t.set(s)}function mp(s,t,e){let n,i;for(let o=0;o<3;o++){const a=o+3;n=s[o],i=t[o],e[o]=n<i?n:i,n=s[a],i=t[a],e[a]=n>i?n:i}}function ta(s,t,e){for(let n=0;n<3;n++){const i=t[s+2*n],o=t[s+2*n+1],a=i-o,l=i+o;a<e[n]&&(e[n]=a),l>e[n+3]&&(e[n+3]=l)}}function Wr(s){const t=s[3]-s[0],e=s[4]-s[1],n=s[5]-s[2];return 2*(t*e+e*n+n*t)}const ci=32,UM=(s,t)=>s.candidate-t.candidate,Li=new Array(ci).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ea=new Float32Array(6);function OM(s,t,e,n,i,o){let a=-1,l=0;if(o===Cf)a=pp(t),a!==-1&&(l=(t[a]+t[a+3])/2);else if(o===PM)a=pp(s),a!==-1&&(l=FM(e,n,i,a));else if(o===RM){const u=Wr(s);let d=Ql*i;const p=n*6,f=(n+i)*6;for(let m=0;m<3;m++){const v=t[m],x=(t[m+3]-v)/ci;if(i<ci/4){const _=[...Li];_.length=i;let E=0;for(let S=p;S<f;S+=6,E++){const C=_[E];C.candidate=e[S+2*m],C.count=0;const{bounds:P,leftCacheBounds:A,rightCacheBounds:F}=C;for(let V=0;V<3;V++)F[V]=1/0,F[V+3]=-1/0,A[V]=1/0,A[V+3]=-1/0,P[V]=1/0,P[V+3]=-1/0;ta(S,e,P)}_.sort(UM);let y=i;for(let S=0;S<y;S++){const C=_[S];for(;S+1<y&&_[S+1].candidate===C.candidate;)_.splice(S+1,1),y--}for(let S=p;S<f;S+=6){const C=e[S+2*m];for(let P=0;P<y;P++){const A=_[P];C>=A.candidate?ta(S,e,A.rightCacheBounds):(ta(S,e,A.leftCacheBounds),A.count++)}}for(let S=0;S<y;S++){const C=_[S],P=C.count,A=i-C.count,F=C.leftCacheBounds,V=C.rightCacheBounds;let M=0;P!==0&&(M=Wr(F)/u);let L=0;A!==0&&(L=Wr(V)/u);const z=dp+Ql*(M*P+L*A);z<d&&(a=m,d=z,l=C.candidate)}}else{for(let y=0;y<ci;y++){const S=Li[y];S.count=0,S.candidate=v+x+y*x;const C=S.bounds;for(let P=0;P<3;P++)C[P]=1/0,C[P+3]=-1/0}for(let y=p;y<f;y+=6){let P=~~((e[y+2*m]-v)/x);P>=ci&&(P=ci-1);const A=Li[P];A.count++,ta(y,e,A.bounds)}const _=Li[ci-1];fp(_.bounds,_.rightCacheBounds);for(let y=ci-2;y>=0;y--){const S=Li[y],C=Li[y+1];mp(S.bounds,C.rightCacheBounds,S.rightCacheBounds)}let E=0;for(let y=0;y<ci-1;y++){const S=Li[y],C=S.count,P=S.bounds,F=Li[y+1].rightCacheBounds;C!==0&&(E===0?fp(P,ea):mp(P,ea,ea)),E+=C;let V=0,M=0;E!==0&&(V=Wr(ea)/u);const L=i-E;L!==0&&(M=Wr(F)/u);const z=dp+Ql*(V*E+M*L);z<d&&(a=m,d=z,l=S.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${o} used.`);return{axis:a,pos:l}}function FM(s,t,e,n){let i=0;for(let o=t,a=t+e;o<a;o++)i+=s[o*6+n*2];return i/e}class ec{constructor(){this.boundingData=new Float32Array(6)}}function BM(s,t,e,n,i,o){let a=n,l=n+i-1;const u=o.pos,d=o.axis*2;for(;;){for(;a<=l&&e[a*6+d]<u;)a++;for(;a<=l&&e[l*6+d]>=u;)l--;if(a<l){for(let p=0;p<3;p++){let f=t[a*3+p];t[a*3+p]=t[l*3+p],t[l*3+p]=f}for(let p=0;p<6;p++){let f=e[a*6+p];e[a*6+p]=e[l*6+p],e[l*6+p]=f}a++,l--}else return a}}function kM(s,t,e,n,i,o){let a=n,l=n+i-1;const u=o.pos,d=o.axis*2;for(;;){for(;a<=l&&e[a*6+d]<u;)a++;for(;a<=l&&e[l*6+d]>=u;)l--;if(a<l){let p=s[a];s[a]=s[l],s[l]=p;for(let f=0;f<6;f++){let m=e[a*6+f];e[a*6+f]=e[l*6+f],e[l*6+f]=m}a++,l--}else return a}}function dn(s,t){return t[s+15]===65535}function gn(s,t){return t[s+6]}function bn(s,t){return t[s+14]}function Pn(s){return s+8}function yn(s,t){return t[s+6]}function ru(s,t){return t[s+7]}let Df,Qr,ya,Nf;const VM=Math.pow(2,32);function Pc(s){return"count"in s?1:1+Pc(s.left)+Pc(s.right)}function zM(s,t,e){return Df=new Float32Array(e),Qr=new Uint32Array(e),ya=new Uint16Array(e),Nf=new Uint8Array(e),Rc(s,t)}function Rc(s,t){const e=s/4,n=s/2,i="count"in t,o=t.boundingData;for(let a=0;a<6;a++)Df[e+a]=o[a];if(i)if(t.buffer){const a=t.buffer;Nf.set(new Uint8Array(a),s);for(let l=s,u=s+a.byteLength;l<u;l+=ki){const d=l/2;dn(d,ya)||(Qr[l/4+6]+=e)}return s+a.byteLength}else{const a=t.offset,l=t.count;return Qr[e+6]=a,ya[n+14]=l,ya[n+15]=ka,s+ki}else{const a=t.left,l=t.right,u=t.splitAxis;let d;if(d=Rc(s+ki,a),d/4>VM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Qr[e+6]=d/4,d=Rc(d,l),Qr[e+7]=u,d}}function HM(s,t){const e=(s.index?s.index.count:s.attributes.position.count)/3,n=e>2**16,i=n?4:2,o=t?new SharedArrayBuffer(e*i):new ArrayBuffer(e*i),a=n?new Uint32Array(o):new Uint16Array(o);for(let l=0,u=a.length;l<u;l++)a[l]=l;return a}function GM(s,t,e,n,i){const{maxDepth:o,verbose:a,maxLeafTris:l,strategy:u,onProgress:d,indirect:p}=i,f=s._indirectBuffer,m=s.geometry,v=m.index?m.index.array:null,b=p?kM:BM,w=xr(m),x=new Float32Array(6);let _=!1;const E=new ec;return tc(t,e,n,E.boundingData,x),S(E,e,n,x),E;function y(C){d&&d(C/w)}function S(C,P,A,F=null,V=0){if(!_&&V>=o&&(_=!0,a&&(console.warn(`MeshBVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`),console.warn(m))),A<=l||V>=o)return y(P+A),C.offset=P,C.count=A,C;const M=OM(C.boundingData,F,t,P,A,u);if(M.axis===-1)return y(P+A),C.offset=P,C.count=A,C;const L=b(f,v,t,P,A,M);if(L===P||L===P+A)y(P+A),C.offset=P,C.count=A;else{C.splitAxis=M.axis;const z=new ec,j=P,O=L-P;C.left=z,tc(t,j,O,z.boundingData,x),S(z,j,O,x,V+1);const G=new ec,H=L,X=A-O;C.right=G,tc(t,H,X,G.boundingData,x),S(G,H,X,x,V+1)}return C}}function WM(s,t){const e=s.geometry;t.indirect&&(s._indirectBuffer=HM(e,t.useSharedArrayBuffer),DM(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||IM(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=NM(e),o=t.indirect?Lf(e):If(e);s._roots=o.map(a=>{const l=GM(s,i,a.offset,a.count,t),u=Pc(l),d=new n(ki*u);return zM(0,l,d),d})}class Kn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let o=0,a=t.length;o<a;o++){const u=t[o][e];n=u<n?u:n,i=u>i?u:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let o=0,a=e.length;o<a;o++){const l=e[o],u=t.dot(l);n=u<n?u:n,i=u>i?u:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}}Kn.prototype.setFromBox=function(){const s=new D;return function(e,n){const i=n.min,o=n.max;let a=1/0,l=-1/0;for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)for(let p=0;p<=1;p++){s.x=i.x*u+o.x*(1-u),s.y=i.y*d+o.y*(1-d),s.z=i.z*p+o.z*(1-p);const f=e.dot(s);a=Math.min(f,a),l=Math.max(f,l)}this.min=a,this.max=l}}();(function(){const s=new Kn;return function(e,n){const i=e.points,o=e.satAxes,a=e.satBounds,l=n.points,u=n.satAxes,d=n.satBounds;for(let p=0;p<3;p++){const f=a[p],m=o[p];if(s.setFromPoints(m,l),f.isSeparated(s))return!1}for(let p=0;p<3;p++){const f=d[p],m=u[p];if(s.setFromPoints(m,i),f.isSeparated(s))return!1}}})();const XM=function(){const s=new D,t=new D,e=new D;return function(i,o,a){const l=i.start,u=s,d=o.start,p=t;e.subVectors(l,d),s.subVectors(i.end,i.start),t.subVectors(o.end,o.start);const f=e.dot(p),m=p.dot(u),v=p.dot(p),b=e.dot(u),x=u.dot(u)*v-m*m;let _,E;x!==0?_=(f*m-b*v)/x:_=0,E=(f+_*m)/v,a.x=_,a.y=E}}(),ou=function(){const s=new Tt,t=new D,e=new D;return function(i,o,a,l){XM(i,o,s);let u=s.x,d=s.y;if(u>=0&&u<=1&&d>=0&&d<=1){i.at(u,a),o.at(d,l);return}else if(u>=0&&u<=1){d<0?o.at(0,l):o.at(1,l),i.closestPointToPoint(l,!0,a);return}else if(d>=0&&d<=1){u<0?i.at(0,a):i.at(1,a),o.closestPointToPoint(a,!0,l);return}else{let p;u<0?p=i.start:p=i.end;let f;d<0?f=o.start:f=o.end;const m=t,v=e;if(i.closestPointToPoint(f,!0,t),o.closestPointToPoint(p,!0,e),m.distanceToSquared(f)<=v.distanceToSquared(p)){a.copy(m),l.copy(f);return}else{a.copy(p),l.copy(v);return}}}}(),jM=function(){const s=new D,t=new D,e=new Wn,n=new di;return function(o,a){const{radius:l,center:u}=o,{a:d,b:p,c:f}=a;if(n.start=d,n.end=p,n.closestPointToPoint(u,!0,s).distanceTo(u)<=l||(n.start=d,n.end=f,n.closestPointToPoint(u,!0,s).distanceTo(u)<=l)||(n.start=p,n.end=f,n.closestPointToPoint(u,!0,s).distanceTo(u)<=l))return!0;const w=a.getPlane(e);if(Math.abs(w.distanceToPoint(u))<=l){const _=w.projectPoint(u,t);if(a.containsPoint(_))return!0}return!1}}(),qM=1e-15;function nc(s){return Math.abs(s)<qM}class Vn extends hn{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new Kn),this.points=[this.a,this.b,this.c],this.sphere=new zn,this.plane=new Wn,this.needsUpdate=!0}intersectsSphere(t){return jM(t,this)}update(){const t=this.a,e=this.b,n=this.c,i=this.points,o=this.satAxes,a=this.satBounds,l=o[0],u=a[0];this.getNormal(l),u.setFromPoints(l,i);const d=o[1],p=a[1];d.subVectors(t,e),p.setFromPoints(d,i);const f=o[2],m=a[2];f.subVectors(e,n),m.setFromPoints(f,i);const v=o[3],b=a[3];v.subVectors(n,t),b.setFromPoints(v,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(l,t),this.needsUpdate=!1}}Vn.prototype.closestPointToSegment=function(){const s=new D,t=new D,e=new di;return function(i,o=null,a=null){const{start:l,end:u}=i,d=this.points;let p,f=1/0;for(let m=0;m<3;m++){const v=(m+1)%3;e.start.copy(d[m]),e.end.copy(d[v]),ou(e,i,s,t),p=s.distanceToSquared(t),p<f&&(f=p,o&&o.copy(s),a&&a.copy(t))}return this.closestPointToPoint(l,s),p=l.distanceToSquared(s),p<f&&(f=p,o&&o.copy(s),a&&a.copy(l)),this.closestPointToPoint(u,s),p=u.distanceToSquared(s),p<f&&(f=p,o&&o.copy(s),a&&a.copy(u)),Math.sqrt(f)}}();Vn.prototype.intersectsTriangle=function(){const s=new Vn,t=new Array(3),e=new Array(3),n=new Kn,i=new Kn,o=new D,a=new D,l=new D,u=new D,d=new D,p=new di,f=new di,m=new di,v=new D;function b(w,x,_){const E=w.points;let y=0,S=-1;for(let C=0;C<3;C++){const{start:P,end:A}=p;P.copy(E[C]),A.copy(E[(C+1)%3]),p.delta(a);const F=nc(x.distanceToPoint(P));if(nc(x.normal.dot(a))&&F){_.copy(p),y=2;break}const V=x.intersectLine(p,v);if(!V&&F&&v.copy(P),(V||F)&&!nc(v.distanceTo(A))){if(y<=1)(y===1?_.start:_.end).copy(v),F&&(S=y);else if(y>=2){(S===1?_.start:_.end).copy(v),y=2;break}if(y++,y===2&&S===-1)break}}return y}return function(x,_=null,E=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(s.copy(x),s.update(),x=s);const y=this.plane,S=x.plane;if(Math.abs(y.normal.dot(S.normal))>1-1e-10){const C=this.satBounds,P=this.satAxes;e[0]=x.a,e[1]=x.b,e[2]=x.c;for(let V=0;V<4;V++){const M=C[V],L=P[V];if(n.setFromPoints(L,e),M.isSeparated(n))return!1}const A=x.satBounds,F=x.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let V=0;V<4;V++){const M=A[V],L=F[V];if(n.setFromPoints(L,t),M.isSeparated(n))return!1}for(let V=0;V<4;V++){const M=P[V];for(let L=0;L<4;L++){const z=F[L];if(o.crossVectors(M,z),n.setFromPoints(o,t),i.setFromPoints(o,e),n.isSeparated(i))return!1}}return _&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),_.start.set(0,0,0),_.end.set(0,0,0)),!0}else{const C=b(this,S,f);if(C===1&&x.containsPoint(f.end))return _&&(_.start.copy(f.end),_.end.copy(f.end)),!0;if(C!==2)return!1;const P=b(x,y,m);if(P===1&&this.containsPoint(m.end))return _&&(_.start.copy(m.end),_.end.copy(m.end)),!0;if(P!==2)return!1;if(f.delta(l),m.delta(u),l.dot(u)<0){let j=m.start;m.start=m.end,m.end=j}const A=f.start.dot(l),F=f.end.dot(l),V=m.start.dot(l),M=m.end.dot(l),L=F<V,z=A<M;return A!==M&&V!==F&&L===z?!1:(_&&(d.subVectors(f.start,m.start),d.dot(l)>0?_.start.copy(f.start):_.start.copy(m.start),d.subVectors(f.end,m.end),d.dot(l)<0?_.end.copy(f.end):_.end.copy(m.end)),!0)}}}();Vn.prototype.distanceToPoint=function(){const s=new D;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}}();Vn.prototype.distanceToTriangle=function(){const s=new D,t=new D,e=["a","b","c"],n=new di,i=new di;return function(a,l=null,u=null){const d=l||u?n:null;if(this.intersectsTriangle(a,d))return(l||u)&&(l&&d.getCenter(l),u&&d.getCenter(u)),0;let p=1/0;for(let f=0;f<3;f++){let m;const v=e[f],b=a[v];this.closestPointToPoint(b,s),m=b.distanceToSquared(s),m<p&&(p=m,l&&l.copy(s),u&&u.copy(b));const w=this[v];a.closestPointToPoint(w,s),m=w.distanceToSquared(s),m<p&&(p=m,l&&l.copy(w),u&&u.copy(s))}for(let f=0;f<3;f++){const m=e[f],v=e[(f+1)%3];n.set(this[m],this[v]);for(let b=0;b<3;b++){const w=e[b],x=e[(b+1)%3];i.set(a[w],a[x]),ou(n,i,s,t);const _=s.distanceToSquared(t);_<p&&(p=_,l&&l.copy(s),u&&u.copy(t))}}return Math.sqrt(p)}}();class fn{constructor(t,e,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Gt,this.invMatrix=new Gt,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new Kn),this.alignedSatBounds=new Array(3).fill().map(()=>new Kn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}fn.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,i=this.points;for(let d=0;d<=1;d++)for(let p=0;p<=1;p++)for(let f=0;f<=1;f++){const m=1*d|2*p|4*f,v=i[m];v.x=d?n.x:e.x,v.y=p?n.y:e.y,v.z=f?n.z:e.z,v.applyMatrix4(t)}const o=this.satBounds,a=this.satAxes,l=i[0];for(let d=0;d<3;d++){const p=a[d],f=o[d],m=1<<d,v=i[m];p.subVectors(l,v),f.setFromPoints(p,i)}const u=this.alignedSatBounds;u[0].setFromPointsField(i,"x"),u[1].setFromPointsField(i,"y"),u[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();fn.prototype.intersectsBox=function(){const s=new Kn;return function(e){this.needsUpdate&&this.update();const n=e.min,i=e.max,o=this.satBounds,a=this.satAxes,l=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,l[0].isSeparated(s)||(s.min=n.y,s.max=i.y,l[1].isSeparated(s))||(s.min=n.z,s.max=i.z,l[2].isSeparated(s)))return!1;for(let u=0;u<3;u++){const d=a[u],p=o[u];if(s.setFromBox(d,e),p.isSeparated(s))return!1}return!0}}();fn.prototype.intersectsTriangle=function(){const s=new Vn,t=new Array(3),e=new Kn,n=new Kn,i=new D;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(s.copy(a),s.update(),a=s);const l=this.satBounds,u=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let m=0;m<3;m++){const v=l[m],b=u[m];if(e.setFromPoints(b,t),v.isSeparated(e))return!1}const d=a.satBounds,p=a.satAxes,f=this.points;for(let m=0;m<3;m++){const v=d[m],b=p[m];if(e.setFromPoints(b,f),v.isSeparated(e))return!1}for(let m=0;m<3;m++){const v=u[m];for(let b=0;b<4;b++){const w=p[b];if(i.crossVectors(v,w),e.setFromPoints(i,t),n.setFromPoints(i,f),e.isSeparated(n))return!1}}return!0}}();fn.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();fn.prototype.distanceToPoint=function(){const s=new D;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}}();fn.prototype.distanceToBox=function(){const s=["x","y","z"],t=new Array(12).fill().map(()=>new di),e=new Array(12).fill().map(()=>new di),n=new D,i=new D;return function(a,l=0,u=null,d=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(u||d)&&(a.getCenter(i),this.closestPointToPoint(i,n),a.closestPointToPoint(n,i),u&&u.copy(n),d&&d.copy(i)),0;const p=l*l,f=a.min,m=a.max,v=this.points;let b=1/0;for(let x=0;x<8;x++){const _=v[x];i.copy(_).clamp(f,m);const E=_.distanceToSquared(i);if(E<b&&(b=E,u&&u.copy(_),d&&d.copy(i),E<p))return Math.sqrt(E)}let w=0;for(let x=0;x<3;x++)for(let _=0;_<=1;_++)for(let E=0;E<=1;E++){const y=(x+1)%3,S=(x+2)%3,C=_<<y|E<<S,P=1<<x|_<<y|E<<S,A=v[C],F=v[P];t[w].set(A,F);const M=s[x],L=s[y],z=s[S],j=e[w],O=j.start,G=j.end;O[M]=f[M],O[L]=_?f[L]:m[L],O[z]=E?f[z]:m[L],G[M]=m[M],G[L]=_?f[L]:m[L],G[z]=E?f[z]:m[L],w++}for(let x=0;x<=1;x++)for(let _=0;_<=1;_++)for(let E=0;E<=1;E++){i.x=x?m.x:f.x,i.y=_?m.y:f.y,i.z=E?m.z:f.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<b&&(b=y,u&&u.copy(n),d&&d.copy(i),y<p))return Math.sqrt(y)}for(let x=0;x<12;x++){const _=t[x];for(let E=0;E<12;E++){const y=e[E];ou(_,y,n,i);const S=n.distanceToSquared(i);if(S<b&&(b=S,u&&u.copy(n),d&&d.copy(i),S<p))return Math.sqrt(S)}}return Math.sqrt(b)}}();class au{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class YM extends au{constructor(){super(()=>new Vn)}}const Rn=new YM;class KM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const we=new KM;let Oi,er;const Vs=[],na=new au(()=>new ke);function $M(s,t,e,n,i,o){Oi=na.getPrimitive(),er=na.getPrimitive(),Vs.push(Oi,er),we.setBuffer(s._roots[t]);const a=Lc(0,s.geometry,e,n,i,o);we.clearBuffer(),na.releasePrimitive(Oi),na.releasePrimitive(er),Vs.pop(),Vs.pop();const l=Vs.length;return l>0&&(er=Vs[l-1],Oi=Vs[l-2]),a}function Lc(s,t,e,n,i=null,o=0,a=0){const{float32Array:l,uint16Array:u,uint32Array:d}=we;let p=s*2;if(dn(p,u)){const b=gn(s,d),w=bn(p,u);return Ce(s,l,Oi),n(b,w,!1,a,o+s,Oi)}else{let z=function(O){const{uint16Array:G,uint32Array:H}=we;let X=O*2;for(;!dn(X,G);)O=Pn(O),X=O*2;return gn(O,H)},j=function(O){const{uint16Array:G,uint32Array:H}=we;let X=O*2;for(;!dn(X,G);)O=yn(O,H),X=O*2;return gn(O,H)+bn(X,G)};var v=z,m=j;const b=Pn(s),w=yn(s,d);let x=b,_=w,E,y,S,C;if(i&&(S=Oi,C=er,Ce(x,l,S),Ce(_,l,C),E=i(S),y=i(C),y<E)){x=w,_=b;const O=E;E=y,y=O,S=C}S||(S=Oi,Ce(x,l,S));const P=dn(x*2,u),A=e(S,P,E,a+1,o+x);let F;if(A===hp){const O=z(x),H=j(x)-O;F=n(O,H,!0,a+1,o+x,S)}else F=A&&Lc(x,t,e,n,i,o,a+1);if(F)return!0;C=er,Ce(_,l,C);const V=dn(_*2,u),M=e(C,V,y,a+1,o+_);let L;if(M===hp){const O=z(_),H=j(_)-O;L=n(O,H,!0,a+1,o+_,C)}else L=M&&Lc(_,t,e,n,i,o,a+1);return!!L}}const Xr=new D,ic=new D;function ZM(s,t,e={},n=0,i=1/0){const o=n*n,a=i*i;let l=1/0,u=null;if(s.shapecast({boundsTraverseOrder:p=>(Xr.copy(t).clamp(p.min,p.max),Xr.distanceToSquared(t)),intersectsBounds:(p,f,m)=>m<l&&m<a,intersectsTriangle:(p,f)=>{p.closestPointToPoint(t,Xr);const m=t.distanceToSquared(Xr);return m<l&&(ic.copy(Xr),l=m,u=f),m<o}}),l===1/0)return null;const d=Math.sqrt(l);return e.point?e.point.copy(ic):e.point=ic.clone(),e.distance=d,e.faceIndex=u,e}const zs=new D,Hs=new D,Gs=new D,ia=new Tt,sa=new Tt,ra=new Tt,gp=new D,_p=new D,vp=new D,oa=new D;function QM(s,t,e,n,i,o){let a;return o===pn?a=s.intersectTriangle(n,e,t,!0,i):a=s.intersectTriangle(t,e,n,o!==un,i),a===null?null:{distance:s.origin.distanceTo(i),point:i.clone()}}function JM(s,t,e,n,i,o,a,l,u){zs.fromBufferAttribute(t,o),Hs.fromBufferAttribute(t,a),Gs.fromBufferAttribute(t,l);const d=QM(s,zs,Hs,Gs,oa,u);if(d){n&&(ia.fromBufferAttribute(n,o),sa.fromBufferAttribute(n,a),ra.fromBufferAttribute(n,l),d.uv=hn.getInterpolation(oa,zs,Hs,Gs,ia,sa,ra,new Tt)),i&&(ia.fromBufferAttribute(i,o),sa.fromBufferAttribute(i,a),ra.fromBufferAttribute(i,l),d.uv1=hn.getInterpolation(oa,zs,Hs,Gs,ia,sa,ra,new Tt)),e&&(gp.fromBufferAttribute(e,o),_p.fromBufferAttribute(e,a),vp.fromBufferAttribute(e,l),d.normal=hn.getInterpolation(oa,zs,Hs,Gs,gp,_p,vp,new D),d.normal.dot(s.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:a,c:l,normal:new D,materialIndex:0};hn.getNormal(zs,Hs,Gs,p.normal),d.face=p,d.faceIndex=o}return d}function Va(s,t,e,n,i){const o=n*3;let a=o+0,l=o+1,u=o+2;const d=s.index;s.index&&(a=d.getX(a),l=d.getX(l),u=d.getX(u));const{position:p,normal:f,uv:m,uv1:v}=s.attributes,b=JM(e,p,f,m,v,a,l,u,t);return b?(b.faceIndex=n,i&&i.push(b),b):null}function Fe(s,t,e,n){const i=s.a,o=s.b,a=s.c;let l=t,u=t+1,d=t+2;e&&(l=e.getX(l),u=e.getX(u),d=e.getX(d)),i.x=n.getX(l),i.y=n.getY(l),i.z=n.getZ(l),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u),a.x=n.getX(d),a.y=n.getY(d),a.z=n.getZ(d)}function tS(s,t,e,n,i,o){const{geometry:a,_indirectBuffer:l}=s;for(let u=n,d=n+i;u<d;u++)Va(a,t,e,u,o)}function eS(s,t,e,n,i){const{geometry:o,_indirectBuffer:a}=s;let l=1/0,u=null;for(let d=n,p=n+i;d<p;d++){let f;f=Va(o,t,e,d),f&&f.distance<l&&(u=f,l=f.distance)}return u}function nS(s,t,e,n,i,o,a){const{geometry:l}=e,{index:u}=l,d=l.attributes.position;for(let p=s,f=t+s;p<f;p++){let m;if(m=p,Fe(a,m*3,u,d),a.needsUpdate=!0,n(a,m,i,o))return!0}return!1}function iS(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let o,a,l,u,d=0;const p=s._roots;for(let m=0,v=p.length;m<v;m++)o=p[m],a=new Uint32Array(o),l=new Uint16Array(o),u=new Float32Array(o),f(0,d),d+=o.byteLength;function f(m,v,b=!1){const w=m*2;if(l[w+15]===ka){const _=a[m+6],E=l[w+14];let y=1/0,S=1/0,C=1/0,P=-1/0,A=-1/0,F=-1/0;for(let V=3*_,M=3*(_+E);V<M;V++){let L=n[V];const z=i.getX(L),j=i.getY(L),O=i.getZ(L);z<y&&(y=z),z>P&&(P=z),j<S&&(S=j),j>A&&(A=j),O<C&&(C=O),O>F&&(F=O)}return u[m+0]!==y||u[m+1]!==S||u[m+2]!==C||u[m+3]!==P||u[m+4]!==A||u[m+5]!==F?(u[m+0]=y,u[m+1]=S,u[m+2]=C,u[m+3]=P,u[m+4]=A,u[m+5]=F,!0):!1}else{const _=m+8,E=a[m+6],y=_+v,S=E+v;let C=b,P=!1,A=!1;t?C||(P=t.has(y),A=t.has(S),C=!P&&!A):(P=!0,A=!0);const F=C||P,V=C||A;let M=!1;F&&(M=f(_,v,C));let L=!1;V&&(L=f(E,v,C));const z=M||L;if(z)for(let j=0;j<3;j++){const O=_+j,G=E+j,H=u[O],X=u[O+3],et=u[G],tt=u[G+3];u[m+j]=H<et?H:et,u[m+j+3]=X>tt?X:tt}return z}}}const xp=new ke;function Vi(s,t,e,n){return Ce(s,t,xp),e.intersectBox(xp,n)}function sS(s,t,e,n,i,o){const{geometry:a,_indirectBuffer:l}=s;for(let u=n,d=n+i;u<d;u++){let p=l?l[u]:u;Va(a,t,e,p,o)}}function rS(s,t,e,n,i){const{geometry:o,_indirectBuffer:a}=s;let l=1/0,u=null;for(let d=n,p=n+i;d<p;d++){let f;f=Va(o,t,e,a?a[d]:d),f&&f.distance<l&&(u=f,l=f.distance)}return u}function oS(s,t,e,n,i,o,a){const{geometry:l}=e,{index:u}=l,d=l.attributes.position;for(let p=s,f=t+s;p<f;p++){let m;if(m=e.resolveTriangleIndex(p),Fe(a,m*3,u,d),a.needsUpdate=!0,n(a,m,i,o))return!0}return!1}const bp=new D;function aS(s,t,e,n,i){we.setBuffer(s._roots[t]),Ic(0,s,e,n,i),we.clearBuffer()}function Ic(s,t,e,n,i){const{float32Array:o,uint16Array:a,uint32Array:l}=we,u=s*2;if(dn(u,a)){const p=gn(s,l),f=bn(u,a);tS(t,e,n,p,f,i)}else{const p=Pn(s);Vi(p,o,n,bp)&&Ic(p,t,e,n,i);const f=yn(s,l);Vi(f,o,n,bp)&&Ic(f,t,e,n,i)}}const yp=new D,lS=["x","y","z"];function cS(s,t,e,n){we.setBuffer(s._roots[t]);const i=Dc(0,s,e,n);return we.clearBuffer(),i}function Dc(s,t,e,n){const{float32Array:i,uint16Array:o,uint32Array:a}=we;let l=s*2;if(dn(l,o)){const d=gn(s,a),p=bn(l,o);return eS(t,e,n,d,p)}else{const d=ru(s,a),p=lS[d],m=n.direction[p]>=0;let v,b;m?(v=Pn(s),b=yn(s,a)):(v=yn(s,a),b=Pn(s));const x=Vi(v,i,n,yp)?Dc(v,t,e,n):null;if(x){const y=x.point[p];if(m?y<=i[b+d]:y>=i[b+d+3])return x}const E=Vi(b,i,n,yp)?Dc(b,t,e,n):null;return x&&E?x.distance<=E.distance?x:E:x||E||null}}const aa=new ke,Ws=new Vn,Xs=new Vn,jr=new Gt,wp=new fn,la=new fn;function uS(s,t,e,n){we.setBuffer(s._roots[t]);const i=Nc(0,s,e,n);return we.clearBuffer(),i}function Nc(s,t,e,n,i=null){const{float32Array:o,uint16Array:a,uint32Array:l}=we;let u=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),wp.set(e.boundingBox.min,e.boundingBox.max,n),i=wp),dn(u,a)){const p=t.geometry,f=p.index,m=p.attributes.position,v=e.index,b=e.attributes.position,w=gn(s,l),x=bn(u,a);if(jr.copy(n).invert(),e.boundsTree)return Ce(s,o,la),la.matrix.copy(jr),la.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>la.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let y=w*3,S=(x+w)*3;y<S;y+=3)if(Fe(Xs,y,f,m),Xs.needsUpdate=!0,E.intersectsTriangle(Xs))return!0;return!1}});for(let _=w*3,E=(x+w)*3;_<E;_+=3){Fe(Ws,_,f,m),Ws.a.applyMatrix4(jr),Ws.b.applyMatrix4(jr),Ws.c.applyMatrix4(jr),Ws.needsUpdate=!0;for(let y=0,S=v.count;y<S;y+=3)if(Fe(Xs,y,v,b),Xs.needsUpdate=!0,Ws.intersectsTriangle(Xs))return!0}}else{const p=s+8,f=l[s+6];return Ce(p,o,aa),!!(i.intersectsBox(aa)&&Nc(p,t,e,n,i)||(Ce(f,o,aa),i.intersectsBox(aa)&&Nc(f,t,e,n,i)))}}const ca=new Gt,sc=new fn,qr=new fn,hS=new D,dS=new D,pS=new D,fS=new D;function mS(s,t,e,n={},i={},o=0,a=1/0){t.boundingBox||t.computeBoundingBox(),sc.set(t.boundingBox.min,t.boundingBox.max,e),sc.needsUpdate=!0;const l=s.geometry,u=l.attributes.position,d=l.index,p=t.attributes.position,f=t.index,m=Rn.getPrimitive(),v=Rn.getPrimitive();let b=hS,w=dS,x=null,_=null;i&&(x=pS,_=fS);let E=1/0,y=null,S=null;return ca.copy(e).invert(),qr.matrix.copy(ca),s.shapecast({boundsTraverseOrder:C=>sc.distanceToBox(C),intersectsBounds:(C,P,A)=>A<E&&A<a?(P&&(qr.min.copy(C.min),qr.max.copy(C.max),qr.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:F=>qr.distanceToBox(F),intersectsBounds:(F,V,M)=>M<E&&M<a,intersectsRange:(F,V)=>{for(let M=F,L=F+V;M<L;M++){Fe(v,3*M,f,p),v.a.applyMatrix4(e),v.b.applyMatrix4(e),v.c.applyMatrix4(e),v.needsUpdate=!0;for(let z=C,j=C+P;z<j;z++){Fe(m,3*z,d,u),m.needsUpdate=!0;const O=m.distanceToTriangle(v,b,x);if(O<E&&(w.copy(b),_&&_.copy(x),E=O,y=z,S=M),O<o)return!0}}}});{const A=xr(t);for(let F=0,V=A;F<V;F++){Fe(v,3*F,f,p),v.a.applyMatrix4(e),v.b.applyMatrix4(e),v.c.applyMatrix4(e),v.needsUpdate=!0;for(let M=C,L=C+P;M<L;M++){Fe(m,3*M,d,u),m.needsUpdate=!0;const z=m.distanceToTriangle(v,b,x);if(z<E&&(w.copy(b),_&&_.copy(x),E=z,y=M,S=F),z<o)return!0}}}}}),Rn.releasePrimitive(m),Rn.releasePrimitive(v),E===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=E,n.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(ca),w.applyMatrix4(ca),i.distance=w.sub(i.point).length(),i.faceIndex=S),n)}function gS(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let o,a,l,u,d=0;const p=s._roots;for(let m=0,v=p.length;m<v;m++)o=p[m],a=new Uint32Array(o),l=new Uint16Array(o),u=new Float32Array(o),f(0,d),d+=o.byteLength;function f(m,v,b=!1){const w=m*2;if(l[w+15]===ka){const _=a[m+6],E=l[w+14];let y=1/0,S=1/0,C=1/0,P=-1/0,A=-1/0,F=-1/0;for(let V=_,M=_+E;V<M;V++){const L=3*s.resolveTriangleIndex(V);for(let z=0;z<3;z++){let j=L+z;j=n?n[j]:j;const O=i.getX(j),G=i.getY(j),H=i.getZ(j);O<y&&(y=O),O>P&&(P=O),G<S&&(S=G),G>A&&(A=G),H<C&&(C=H),H>F&&(F=H)}}return u[m+0]!==y||u[m+1]!==S||u[m+2]!==C||u[m+3]!==P||u[m+4]!==A||u[m+5]!==F?(u[m+0]=y,u[m+1]=S,u[m+2]=C,u[m+3]=P,u[m+4]=A,u[m+5]=F,!0):!1}else{const _=m+8,E=a[m+6],y=_+v,S=E+v;let C=b,P=!1,A=!1;t?C||(P=t.has(y),A=t.has(S),C=!P&&!A):(P=!0,A=!0);const F=C||P,V=C||A;let M=!1;F&&(M=f(_,v,C));let L=!1;V&&(L=f(E,v,C));const z=M||L;if(z)for(let j=0;j<3;j++){const O=_+j,G=E+j,H=u[O],X=u[O+3],et=u[G],tt=u[G+3];u[m+j]=H<et?H:et,u[m+j+3]=X>tt?X:tt}return z}}}const Ep=new D;function _S(s,t,e,n,i){we.setBuffer(s._roots[t]),Uc(0,s,e,n,i),we.clearBuffer()}function Uc(s,t,e,n,i){const{float32Array:o,uint16Array:a,uint32Array:l}=we,u=s*2;if(dn(u,a)){const p=gn(s,l),f=bn(u,a);sS(t,e,n,p,f,i)}else{const p=Pn(s);Vi(p,o,n,Ep)&&Uc(p,t,e,n,i);const f=yn(s,l);Vi(f,o,n,Ep)&&Uc(f,t,e,n,i)}}const Mp=new D,vS=["x","y","z"];function xS(s,t,e,n){we.setBuffer(s._roots[t]);const i=Oc(0,s,e,n);return we.clearBuffer(),i}function Oc(s,t,e,n){const{float32Array:i,uint16Array:o,uint32Array:a}=we;let l=s*2;if(dn(l,o)){const d=gn(s,a),p=bn(l,o);return rS(t,e,n,d,p)}else{const d=ru(s,a),p=vS[d],m=n.direction[p]>=0;let v,b;m?(v=Pn(s),b=yn(s,a)):(v=yn(s,a),b=Pn(s));const x=Vi(v,i,n,Mp)?Oc(v,t,e,n):null;if(x){const y=x.point[p];if(m?y<=i[b+d]:y>=i[b+d+3])return x}const E=Vi(b,i,n,Mp)?Oc(b,t,e,n):null;return x&&E?x.distance<=E.distance?x:E:x||E||null}}const ua=new ke,js=new Vn,qs=new Vn,Yr=new Gt,Sp=new fn,ha=new fn;function bS(s,t,e,n){we.setBuffer(s._roots[t]);const i=Fc(0,s,e,n);return we.clearBuffer(),i}function Fc(s,t,e,n,i=null){const{float32Array:o,uint16Array:a,uint32Array:l}=we;let u=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Sp.set(e.boundingBox.min,e.boundingBox.max,n),i=Sp),dn(u,a)){const p=t.geometry,f=p.index,m=p.attributes.position,v=e.index,b=e.attributes.position,w=gn(s,l),x=bn(u,a);if(Yr.copy(n).invert(),e.boundsTree)return Ce(s,o,ha),ha.matrix.copy(Yr),ha.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>ha.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let y=w,S=x+w;y<S;y++)if(Fe(qs,3*t.resolveTriangleIndex(y),f,m),qs.needsUpdate=!0,E.intersectsTriangle(qs))return!0;return!1}});for(let _=w,E=x+w;_<E;_++){const y=t.resolveTriangleIndex(_);Fe(js,3*y,f,m),js.a.applyMatrix4(Yr),js.b.applyMatrix4(Yr),js.c.applyMatrix4(Yr),js.needsUpdate=!0;for(let S=0,C=v.count;S<C;S+=3)if(Fe(qs,S,v,b),qs.needsUpdate=!0,js.intersectsTriangle(qs))return!0}}else{const p=s+8,f=l[s+6];return Ce(p,o,ua),!!(i.intersectsBox(ua)&&Fc(p,t,e,n,i)||(Ce(f,o,ua),i.intersectsBox(ua)&&Fc(f,t,e,n,i)))}}const da=new Gt,rc=new fn,Kr=new fn,yS=new D,wS=new D,ES=new D,MS=new D;function SS(s,t,e,n={},i={},o=0,a=1/0){t.boundingBox||t.computeBoundingBox(),rc.set(t.boundingBox.min,t.boundingBox.max,e),rc.needsUpdate=!0;const l=s.geometry,u=l.attributes.position,d=l.index,p=t.attributes.position,f=t.index,m=Rn.getPrimitive(),v=Rn.getPrimitive();let b=yS,w=wS,x=null,_=null;i&&(x=ES,_=MS);let E=1/0,y=null,S=null;return da.copy(e).invert(),Kr.matrix.copy(da),s.shapecast({boundsTraverseOrder:C=>rc.distanceToBox(C),intersectsBounds:(C,P,A)=>A<E&&A<a?(P&&(Kr.min.copy(C.min),Kr.max.copy(C.max),Kr.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(t.boundsTree){const A=t.boundsTree;return A.shapecast({boundsTraverseOrder:F=>Kr.distanceToBox(F),intersectsBounds:(F,V,M)=>M<E&&M<a,intersectsRange:(F,V)=>{for(let M=F,L=F+V;M<L;M++){const z=A.resolveTriangleIndex(M);Fe(v,3*z,f,p),v.a.applyMatrix4(e),v.b.applyMatrix4(e),v.c.applyMatrix4(e),v.needsUpdate=!0;for(let j=C,O=C+P;j<O;j++){const G=s.resolveTriangleIndex(j);Fe(m,3*G,d,u),m.needsUpdate=!0;const H=m.distanceToTriangle(v,b,x);if(H<E&&(w.copy(b),_&&_.copy(x),E=H,y=j,S=M),H<o)return!0}}}})}else{const A=xr(t);for(let F=0,V=A;F<V;F++){Fe(v,3*F,f,p),v.a.applyMatrix4(e),v.b.applyMatrix4(e),v.c.applyMatrix4(e),v.needsUpdate=!0;for(let M=C,L=C+P;M<L;M++){const z=s.resolveTriangleIndex(M);Fe(m,3*z,d,u),m.needsUpdate=!0;const j=m.distanceToTriangle(v,b,x);if(j<E&&(w.copy(b),_&&_.copy(x),E=j,y=M,S=F),j<o)return!0}}}}}),Rn.releasePrimitive(m),Rn.releasePrimitive(v),E===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=E,n.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(da),w.applyMatrix4(da),i.distance=w.sub(i.point).length(),i.faceIndex=S),n)}function TS(){return typeof SharedArrayBuffer!="undefined"}const ro=new we.constructor,Ia=new we.constructor,Ni=new au(()=>new ke),Ys=new ke,Ks=new ke,oc=new ke,ac=new ke;let lc=!1;function AS(s,t,e,n){if(lc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");lc=!0;const i=s._roots,o=t._roots;let a,l=0,u=0;const d=new Gt().copy(e).invert();for(let p=0,f=i.length;p<f;p++){ro.setBuffer(i[p]),u=0;const m=Ni.getPrimitive();Ce(0,ro.float32Array,m),m.applyMatrix4(d);for(let v=0,b=o.length;v<b&&(Ia.setBuffer(o[p]),a=Nn(0,0,e,d,n,l,u,0,0,m),Ia.clearBuffer(),u+=o[v].length,!a);v++);if(Ni.releasePrimitive(m),ro.clearBuffer(),l+=i[p].length,a)break}return lc=!1,a}function Nn(s,t,e,n,i,o=0,a=0,l=0,u=0,d=null,p=!1){let f,m;p?(f=Ia,m=ro):(f=ro,m=Ia);const v=f.float32Array,b=f.uint32Array,w=f.uint16Array,x=m.float32Array,_=m.uint32Array,E=m.uint16Array,y=s*2,S=t*2,C=dn(y,w),P=dn(S,E);let A=!1;if(P&&C)p?A=i(gn(t,_),bn(t*2,E),gn(s,b),bn(s*2,w),u,a+t,l,o+s):A=i(gn(s,b),bn(s*2,w),gn(t,_),bn(t*2,E),l,o+s,u,a+t);else if(P){const F=Ni.getPrimitive();Ce(t,x,F),F.applyMatrix4(e);const V=Pn(s),M=yn(s,b);Ce(V,v,Ys),Ce(M,v,Ks);const L=F.intersectsBox(Ys),z=F.intersectsBox(Ks);A=L&&Nn(t,V,n,e,i,a,o,u,l+1,F,!p)||z&&Nn(t,M,n,e,i,a,o,u,l+1,F,!p),Ni.releasePrimitive(F)}else{const F=Pn(t),V=yn(t,_);Ce(F,x,oc),Ce(V,x,ac);const M=d.intersectsBox(oc),L=d.intersectsBox(ac);if(M&&L)A=Nn(s,F,e,n,i,o,a,l,u+1,d,p)||Nn(s,V,e,n,i,o,a,l,u+1,d,p);else if(M)if(C)A=Nn(s,F,e,n,i,o,a,l,u+1,d,p);else{const z=Ni.getPrimitive();z.copy(oc).applyMatrix4(e);const j=Pn(s),O=yn(s,b);Ce(j,v,Ys),Ce(O,v,Ks);const G=z.intersectsBox(Ys),H=z.intersectsBox(Ks);A=G&&Nn(F,j,n,e,i,a,o,u,l+1,z,!p)||H&&Nn(F,O,n,e,i,a,o,u,l+1,z,!p),Ni.releasePrimitive(z)}else if(L)if(C)A=Nn(s,V,e,n,i,o,a,l,u+1,d,p);else{const z=Ni.getPrimitive();z.copy(ac).applyMatrix4(e);const j=Pn(s),O=yn(s,b);Ce(j,v,Ys),Ce(O,v,Ks);const G=z.intersectsBox(Ys),H=z.intersectsBox(Ks);A=G&&Nn(V,j,n,e,i,a,o,u,l+1,z,!p)||H&&Nn(V,O,n,e,i,a,o,u,l+1,z,!p),Ni.releasePrimitive(z)}}return A}const pa=new fn,Tp=new ke,CS={strategy:Cf,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class lu{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,i=t._roots,o=t._indirectBuffer,a=n.getIndex();let l;return e.cloneBuffers?l={roots:i.map(u=>u.slice()),index:a.array.slice(),indirectBuffer:o?o.slice():null}:l={roots:i,index:a.array,indirectBuffer:o},l}static deserialize(t,e,n={}){n={setIndex:!0,indirect:Boolean(t.indirectBuffer),...n};const{index:i,roots:o,indirectBuffer:a}=t,l=new lu(e,{...n,[Jl]:!0});if(l._roots=o,l._indirectBuffer=a||null,n.setIndex){const u=e.getIndex();if(u===null){const d=new Be(t.index,1,!1);e.setIndex(d)}else u.array!==i&&(u.array.set(i),u.needsUpdate=!0)}return l}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...CS,[Jl]:!1},e),e.useSharedArrayBuffer&&!TS())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Jl]||(WM(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ke)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=e.indirect?i=>n[i]:i=>i}refit(t=null){return(this.indirect?gS:iS)(this,t)}traverse(t,e=0){const n=this._roots[e],i=new Uint32Array(n),o=new Uint16Array(n);a(0);function a(l,u=0){const d=l*2,p=o[d+15]===ka;if(p){const f=i[l+6],m=o[d+14];t(u,p,new Float32Array(n,l*4,6),f,m)}else{const f=l+ki/4,m=i[l+6],v=i[l+7];t(u,p,new Float32Array(n,l*4,6),v)||(a(f,u+1),a(m,u+1))}}}raycast(t,e=Bn){const n=this._roots,i=this.geometry,o=[],a=e.isMaterial,l=Array.isArray(e),u=i.groups,d=a?e.side:e,p=this.indirect?_S:aS;for(let f=0,m=n.length;f<m;f++){const v=l?e[u[f].materialIndex].side:d,b=o.length;if(p(this,f,v,t,o),l){const w=u[f].materialIndex;for(let x=b,_=o.length;x<_;x++)o[x].face.materialIndex=w}}return o}raycastFirst(t,e=Bn){const n=this._roots,i=this.geometry,o=e.isMaterial,a=Array.isArray(e);let l=null;const u=i.groups,d=o?e.side:e,p=this.indirect?xS:cS;for(let f=0,m=n.length;f<m;f++){const v=a?e[u[f].materialIndex].side:d,b=p(this,f,v,t);b!=null&&(l==null||b.distance<l.distance)&&(l=b,a&&(b.face.materialIndex=u[f].materialIndex))}return l}intersectsGeometry(t,e){let n=!1;const i=this._roots,o=this.indirect?bS:uS;for(let a=0,l=i.length;a<l&&(n=o(this,a,t,e),!n);a++);return n}shapecast(t){const e=Rn.getPrimitive(),n=this.indirect?oS:nS;let{boundsTraverseOrder:i,intersectsBounds:o,intersectsRange:a,intersectsTriangle:l}=t;if(a&&l){const f=a;a=(m,v,b,w,x)=>f(m,v,b,w,x)?!0:n(m,v,this,l,b,w,e)}else a||(l?a=(f,m,v,b)=>n(f,m,this,l,v,b,e):a=(f,m,v)=>v);let u=!1,d=0;const p=this._roots;for(let f=0,m=p.length;f<m;f++){const v=p[f];if(u=$M(this,f,o,a,i,d),u)break;d+=v.byteLength}return Rn.releasePrimitive(e),u}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:o}=n;const a=Rn.getPrimitive(),l=this.geometry.index,u=this.geometry.attributes.position,d=this.indirect?b=>{const w=this.resolveTriangleIndex(b);Fe(a,w*3,l,u)}:b=>{Fe(a,b*3,l,u)},p=Rn.getPrimitive(),f=t.geometry.index,m=t.geometry.attributes.position,v=t.indirect?b=>{const w=t.resolveTriangleIndex(b);Fe(p,w*3,f,m)}:b=>{Fe(p,b*3,f,m)};if(o){const b=(w,x,_,E,y,S,C,P)=>{for(let A=_,F=_+E;A<F;A++){v(A),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let V=w,M=w+x;V<M;V++)if(d(V),a.needsUpdate=!0,o(a,p,V,A,y,S,C,P))return!0}return!1};if(i){const w=i;i=function(x,_,E,y,S,C,P,A){return w(x,_,E,y,S,C,P,A)?!0:b(x,_,E,y,S,C,P,A)}}else i=b}return AS(this,t,e,i)}intersectsBox(t,e){return pa.set(t.min,t.max,e),pa.needsUpdate=!0,this.shapecast({intersectsBounds:n=>pa.intersectsBox(n),intersectsTriangle:n=>pa.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},o=0,a=1/0){return(this.indirect?SS:mS)(this,t,e,n,i,o,a)}closestPointToPoint(t,e={},n=0,i=1/0){return ZM(this,t,e,n,i)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Ce(0,new Float32Array(n),Tp),t.union(Tp)}),t}}function PS(s){switch(s){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function RS(s){switch(s){case 1:return jp;case 2:return qp;case 3:return on;case 4:return on}}function Ap(s){switch(s){case 1:return Gc;case 2:return Ua;case 3:return ao;case 4:return ao}}class Uf extends La{constructor(){super(),this.minFilter=_e,this.magFilter=_e,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(t){const e=this.overrideItemSize,n=t.itemSize,i=t.count;if(e!==null){if(n*i%e!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");t.itemSize=e,t.count=i*n/e}const o=t.itemSize,a=t.count,l=t.normalized,u=t.array.constructor,d=u.BYTES_PER_ELEMENT;let p=this._forcedType,f=o;if(p===null)switch(u){case Float32Array:p=Qe;break;case Uint8Array:case Uint16Array:case Uint32Array:p=xn;break;case Int8Array:case Int16Array:case Int32Array:p=eo;break}let m,v,b,w,x=PS(o);switch(p){case Qe:b=1,v=RS(o),l&&d===1?(w=u,x+="8",u===Uint8Array?m=qn:(m=vc,x+="_SNORM")):(w=Float32Array,x+="32F",m=Qe);break;case eo:x+=d*8+"I",b=l?Math.pow(2,u.BYTES_PER_ELEMENT*8-1):1,v=Ap(o),d===1?(w=Int8Array,m=vc):d===2?(w=Int16Array,m=Gp):(w=Int32Array,m=eo);break;case xn:x+=d*8+"UI",b=l?Math.pow(2,u.BYTES_PER_ELEMENT*8-1):1,v=Ap(o),d===1?(w=Uint8Array,m=qn):d===2?(w=Uint16Array,m=Na):(w=Uint32Array,m=xn);break}f===3&&(v===on||v===ao)&&(f=4);const _=Math.ceil(Math.sqrt(a))||1,E=f*_*_,y=new w(E),S=t.normalized;t.normalized=!1;for(let C=0;C<a;C++){const P=f*C;y[P]=t.getX(C)/b,o>=2&&(y[P+1]=t.getY(C)/b),o>=3&&(y[P+2]=t.getZ(C)/b,f===4&&(y[P+3]=1)),o>=4&&(y[P+3]=t.getW(C)/b)}t.normalized=S,this.internalFormat=x,this.format=v,this.type=m,this.image.width=_,this.image.height=_,this.image.data=y,this.needsUpdate=!0,this.dispose(),t.itemSize=n,t.count=i}}class LS extends Uf{constructor(){super(),this._forcedType=xn}}class IS extends Uf{constructor(){super(),this._forcedType=Qe}}class DS{constructor(){this.index=new LS,this.position=new IS,this.bvhBounds=new La,this.bvhContents=new La,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(t){const{geometry:e}=t;if(US(t,this.bvhBounds,this.bvhContents),this.position.updateFrom(e.attributes.position),t.indirect){const n=t._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(e.index)this._cachedIndexAttr=e.index.clone();else{const i=Rf(Pf(e));this._cachedIndexAttr=new Be(i,1,!1)}NS(e,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(e.index)}dispose(){const{index:t,position:e,bvhBounds:n,bvhContents:i}=this;t&&t.dispose(),e&&e.dispose(),n&&n.dispose(),i&&i.dispose()}}function NS(s,t,e){const n=e.array,i=s.index?s.index.array:null;for(let o=0,a=t.length;o<a;o++){const l=3*o,u=3*t[o];for(let d=0;d<3;d++)n[l+d]=i?i[u+d]:u+d}}function US(s,t,e){const n=s._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],o=new Uint16Array(i),a=new Uint32Array(i),l=new Float32Array(i),u=i.byteLength/ki,d=2*Math.ceil(Math.sqrt(u/2)),p=new Float32Array(4*d*d),f=Math.ceil(Math.sqrt(u)),m=new Uint32Array(2*f*f);for(let v=0;v<u;v++){const b=v*ki/4,w=b*2,x=b;for(let _=0;_<3;_++)p[8*v+0+_]=l[x+0+_],p[8*v+4+_]=l[x+3+_];if(dn(w,o)){const _=bn(w,o),E=gn(b,a),y=4294901760|_;m[v*2+0]=y,m[v*2+1]=E}else{const _=4*yn(b,a)/ki,E=ru(b,a);m[v*2+0]=E,m[v*2+1]=_}}t.image.data=p,t.image.width=d,t.image.height=d,t.format=on,t.type=Qe,t.internalFormat="RGBA32F",t.minFilter=_e,t.magFilter=_e,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose(),e.image.data=m,e.image.width=f,e.image.height=f,e.format=Ua,e.type=xn,e.internalFormat="RG32UI",e.minFilter=_e,e.magFilter=_e,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose()}const OS=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,FS=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,BS=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,kS=BS,VS=`
	${OS}
	${FS}
`,Cp={type:"change"},cc={type:"start"},Pp={type:"end"},fa=new fr,Rp=new Wn,zS=Math.cos(70*Jp.DEG2RAD);class HS extends hs{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Ft),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ft),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cp),n.update(),o=i.NONE},this.update=function(){const B=new D,dt=new Oe().setFromUnitVectors(t.up,new D(0,1,0)),gt=dt.clone().invert(),Pt=new D,U=new Oe,it=new D,at=2*Math.PI;return function(Nt=null){const ne=n.object.position;B.copy(ne).sub(n.target),B.applyQuaternion(dt),l.setFromVector3(B),n.autoRotate&&o===i.NONE&&z(M(Nt)),n.enableDamping?(l.theta+=u.theta*n.dampingFactor,l.phi+=u.phi*n.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);let ee=n.minAzimuthAngle,le=n.maxAzimuthAngle;isFinite(ee)&&isFinite(le)&&(ee<-Math.PI?ee+=at:ee>Math.PI&&(ee-=at),le<-Math.PI?le+=at:le>Math.PI&&(le-=at),ee<=le?l.theta=Math.max(ee,Math.min(le,l.theta)):l.theta=l.theta>(ee+le)/2?Math.max(ee,l.theta):Math.min(le,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?l.radius=nt(l.radius):l.radius=nt(l.radius*d),B.setFromSpherical(l),B.applyQuaternion(gt),ne.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),p.set(0,0,0));let Ie=!1;if(n.zoomToCursor&&P){let oe=null;if(n.object.isPerspectiveCamera){const Ae=B.length();oe=nt(Ae*d);const $e=Ae-oe;n.object.position.addScaledVector(S,$e),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ae=new D(C.x,C.y,0);Ae.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),Ie=!0;const $e=new D(C.x,C.y,0);$e.unproject(n.object),n.object.position.sub($e).add(Ae),n.object.updateMatrixWorld(),oe=B.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;oe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(oe).add(n.object.position):(fa.origin.copy(n.object.position),fa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(fa.direction))<zS?t.lookAt(n.target):(Rp.setFromNormalAndCoplanarPoint(n.object.up,n.target),fa.intersectPlane(Rp,n.target))))}else n.object.isOrthographicCamera&&(Ie=d!==1,Ie&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix()));return d=1,P=!1,Ie||Pt.distanceToSquared(n.object.position)>a||8*(1-U.dot(n.object.quaternion))>a||it.distanceToSquared(n.target)>0?(n.dispatchEvent(Cp),Pt.copy(n.object.position),U.copy(n.object.quaternion),it.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",se),n.domElement.removeEventListener("pointerdown",N),n.domElement.removeEventListener("pointercancel",K),n.domElement.removeEventListener("wheel",lt),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",K),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ft),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=i.NONE;const a=1e-6,l=new ip,u=new ip;let d=1;const p=new D,f=new Tt,m=new Tt,v=new Tt,b=new Tt,w=new Tt,x=new Tt,_=new Tt,E=new Tt,y=new Tt,S=new D,C=new Tt;let P=!1;const A=[],F={};let V=!1;function M(B){return B!==null?2*Math.PI/60*n.autoRotateSpeed*B:2*Math.PI/60/60*n.autoRotateSpeed}function L(B){const dt=Math.abs(B*.01);return Math.pow(.95,n.zoomSpeed*dt)}function z(B){u.theta-=B}function j(B){u.phi-=B}const O=function(){const B=new D;return function(gt,Pt){B.setFromMatrixColumn(Pt,0),B.multiplyScalar(-gt),p.add(B)}}(),G=function(){const B=new D;return function(gt,Pt){n.screenSpacePanning===!0?B.setFromMatrixColumn(Pt,1):(B.setFromMatrixColumn(Pt,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(gt),p.add(B)}}(),H=function(){const B=new D;return function(gt,Pt){const U=n.domElement;if(n.object.isPerspectiveCamera){const it=n.object.position;B.copy(it).sub(n.target);let at=B.length();at*=Math.tan(n.object.fov/2*Math.PI/180),O(2*gt*at/U.clientHeight,n.object.matrix),G(2*Pt*at/U.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(gt*(n.object.right-n.object.left)/n.object.zoom/U.clientWidth,n.object.matrix),G(Pt*(n.object.top-n.object.bottom)/n.object.zoom/U.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function et(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function tt(B,dt){if(!n.zoomToCursor)return;P=!0;const gt=n.domElement.getBoundingClientRect(),Pt=B-gt.left,U=dt-gt.top,it=gt.width,at=gt.height;C.x=Pt/it*2-1,C.y=-(U/at)*2+1,S.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function nt(B){return Math.max(n.minDistance,Math.min(n.maxDistance,B))}function st(B){f.set(B.clientX,B.clientY)}function pt(B){tt(B.clientX,B.clientX),_.set(B.clientX,B.clientY)}function vt(B){b.set(B.clientX,B.clientY)}function $(B){m.set(B.clientX,B.clientY),v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const dt=n.domElement;z(2*Math.PI*v.x/dt.clientHeight),j(2*Math.PI*v.y/dt.clientHeight),f.copy(m),n.update()}function ct(B){E.set(B.clientX,B.clientY),y.subVectors(E,_),y.y>0?X(L(y.y)):y.y<0&&et(L(y.y)),_.copy(E),n.update()}function Et(B){w.set(B.clientX,B.clientY),x.subVectors(w,b).multiplyScalar(n.panSpeed),H(x.x,x.y),b.copy(w),n.update()}function Dt(B){tt(B.clientX,B.clientY),B.deltaY<0?et(L(B.deltaY)):B.deltaY>0&&X(L(B.deltaY)),n.update()}function Ot(B){let dt=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),dt=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),dt=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),dt=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),dt=!0;break}dt&&(B.preventDefault(),n.update())}function Mt(B){if(A.length===1)f.set(B.pageX,B.pageY);else{const dt=xt(B),gt=.5*(B.pageX+dt.x),Pt=.5*(B.pageY+dt.y);f.set(gt,Pt)}}function Xt(B){if(A.length===1)b.set(B.pageX,B.pageY);else{const dt=xt(B),gt=.5*(B.pageX+dt.x),Pt=.5*(B.pageY+dt.y);b.set(gt,Pt)}}function kt(B){const dt=xt(B),gt=B.pageX-dt.x,Pt=B.pageY-dt.y,U=Math.sqrt(gt*gt+Pt*Pt);_.set(0,U)}function Y(B){n.enableZoom&&kt(B),n.enablePan&&Xt(B)}function Te(B){n.enableZoom&&kt(B),n.enableRotate&&Mt(B)}function Lt(B){if(A.length==1)m.set(B.pageX,B.pageY);else{const gt=xt(B),Pt=.5*(B.pageX+gt.x),U=.5*(B.pageY+gt.y);m.set(Pt,U)}v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const dt=n.domElement;z(2*Math.PI*v.x/dt.clientHeight),j(2*Math.PI*v.y/dt.clientHeight),f.copy(m)}function zt(B){if(A.length===1)w.set(B.pageX,B.pageY);else{const dt=xt(B),gt=.5*(B.pageX+dt.x),Pt=.5*(B.pageY+dt.y);w.set(gt,Pt)}x.subVectors(w,b).multiplyScalar(n.panSpeed),H(x.x,x.y),b.copy(w)}function At(B){const dt=xt(B),gt=B.pageX-dt.x,Pt=B.pageY-dt.y,U=Math.sqrt(gt*gt+Pt*Pt);E.set(0,U),y.set(0,Math.pow(E.y/_.y,n.zoomSpeed)),X(y.y),_.copy(E);const it=(B.pageX+dt.x)*.5,at=(B.pageY+dt.y)*.5;tt(it,at)}function me(B){n.enableZoom&&At(B),n.enablePan&&zt(B)}function Wt(B){n.enableZoom&&At(B),n.enableRotate&&Lt(B)}function N(B){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",K)),Jt(B),B.pointerType==="touch"?Vt(B):ht(B))}function R(B){n.enabled!==!1&&(B.pointerType==="touch"?rt(B):ot(B))}function K(B){switch(Ht(B),A.length){case 0:n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",K),n.dispatchEvent(Pp),o=i.NONE;break;case 1:const dt=A[0],gt=F[dt];Vt({pointerId:dt,pageX:gt.x,pageY:gt.y});break}}function ht(B){let dt;switch(B.button){case 0:dt=n.mouseButtons.LEFT;break;case 1:dt=n.mouseButtons.MIDDLE;break;case 2:dt=n.mouseButtons.RIGHT;break;default:dt=-1}switch(dt){case ys.DOLLY:if(n.enableZoom===!1)return;pt(B),o=i.DOLLY;break;case ys.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;vt(B),o=i.PAN}else{if(n.enableRotate===!1)return;st(B),o=i.ROTATE}break;case ys.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;st(B),o=i.ROTATE}else{if(n.enablePan===!1)return;vt(B),o=i.PAN}break;default:o=i.NONE}o!==i.NONE&&n.dispatchEvent(cc)}function ot(B){switch(o){case i.ROTATE:if(n.enableRotate===!1)return;$(B);break;case i.DOLLY:if(n.enableZoom===!1)return;ct(B);break;case i.PAN:if(n.enablePan===!1)return;Et(B);break}}function lt(B){n.enabled===!1||n.enableZoom===!1||o!==i.NONE||(B.preventDefault(),n.dispatchEvent(cc),Dt(St(B)),n.dispatchEvent(Pp))}function St(B){const dt=B.deltaMode,gt={clientX:B.clientX,clientY:B.clientY,deltaY:B.deltaY};switch(dt){case 1:gt.deltaY*=16;break;case 2:gt.deltaY*=100;break}return B.ctrlKey&&!V&&(gt.deltaY*=10),gt}function mt(B){B.key==="Control"&&(V=!0,n.domElement.getRootNode().addEventListener("keyup",bt,{passive:!0,capture:!0}))}function bt(B){B.key==="Control"&&(V=!1,n.domElement.getRootNode().removeEventListener("keyup",bt,{passive:!0,capture:!0}))}function Ft(B){n.enabled===!1||n.enablePan===!1||Ot(B)}function Vt(B){switch(Ct(B),A.length){case 1:switch(n.touches.ONE){case ws.ROTATE:if(n.enableRotate===!1)return;Mt(B),o=i.TOUCH_ROTATE;break;case ws.PAN:if(n.enablePan===!1)return;Xt(B),o=i.TOUCH_PAN;break;default:o=i.NONE}break;case 2:switch(n.touches.TWO){case ws.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(B),o=i.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(B),o=i.TOUCH_DOLLY_ROTATE;break;default:o=i.NONE}break;default:o=i.NONE}o!==i.NONE&&n.dispatchEvent(cc)}function rt(B){switch(Ct(B),o){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(B),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;zt(B),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;me(B),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Wt(B),n.update();break;default:o=i.NONE}}function se(B){n.enabled!==!1&&B.preventDefault()}function Jt(B){A.push(B.pointerId)}function Ht(B){delete F[B.pointerId];for(let dt=0;dt<A.length;dt++)if(A[dt]==B.pointerId){A.splice(dt,1);return}}function Ct(B){let dt=F[B.pointerId];dt===void 0&&(dt=new Tt,F[B.pointerId]=dt),dt.set(B.pageX,B.pageY)}function xt(B){const dt=B.pointerId===A[0]?A[1]:A[0];return F[dt]}n.domElement.addEventListener("contextmenu",se),n.domElement.addEventListener("pointerdown",N),n.domElement.addEventListener("pointercancel",K),n.domElement.addEventListener("wheel",lt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",mt,{passive:!0,capture:!0}),this.update()}}const Qi=new XE,rn=new D,Ii=new D,Se=new Oe,Lp={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},uc={type:"change"},Ip={type:"mouseDown"},Dp={type:"mouseUp",mode:null},Np={type:"objectChange"};class GS extends fe{constructor(t,e){super(),e===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),e=document),this.isTransformControls=!0,this.visible=!1,this.domElement=e,this.domElement.style.touchAction="none";const n=new KS;this._gizmo=n,this.add(n);const i=new $S;this._plane=i,this.add(i);const o=this;function a(E,y){let S=y;Object.defineProperty(o,E,{get:function(){return S!==void 0?S:y},set:function(C){S!==C&&(S=C,i[E]=C,n[E]=C,o.dispatchEvent({type:E+"-changed",value:C}),o.dispatchEvent(uc))}}),o[E]=y,i[E]=y,n[E]=y}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const l=new D,u=new D,d=new Oe,p=new Oe,f=new D,m=new Oe,v=new D,b=new D,w=new D,x=0,_=new D;a("worldPosition",l),a("worldPositionStart",u),a("worldQuaternion",d),a("worldQuaternionStart",p),a("cameraPosition",f),a("cameraQuaternion",m),a("pointStart",v),a("pointEnd",b),a("rotationAxis",w),a("rotationAngle",x),a("eye",_),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Oe,this._parentQuaternionInv=new Oe,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Oe,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Oe,this._scaleStart=new D,this._getPointer=WS.bind(this),this._onPointerDown=jS.bind(this),this._onPointerHover=XS.bind(this),this._onPointerMove=qS.bind(this),this._onPointerUp=YS.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;Qi.setFromCamera(t,this.camera);const e=hc(this._gizmo.picker[this.mode],Qi);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t.button!==0)&&this.axis!==null){Qi.setFromCamera(t,this.camera);const e=hc(this._plane,Qi,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Ip.mode=this.mode,this.dispatchEvent(Ip)}}pointerMove(t){const e=this.axis,n=this.mode,i=this.object;let o=this.space;if(n==="scale"?o="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(o="world"),i===void 0||e===null||this.dragging===!1||t.button!==-1)return;Qi.setFromCamera(t,this.camera);const a=hc(this._plane,Qi,!0);if(!!a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),o==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),o==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(o==="local"&&(i.position.applyQuaternion(Se.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),o==="world"&&(i.parent&&i.position.add(rn.setFromMatrixPosition(i.parent.matrixWorld)),e.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(rn.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(e.search("XYZ")!==-1){let l=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(l*=-1),Ii.set(l,l,l)}else rn.copy(this.pointStart),Ii.copy(this.pointEnd),rn.applyQuaternion(this._worldQuaternionInv),Ii.applyQuaternion(this._worldQuaternionInv),Ii.divide(rn),e.search("X")===-1&&(Ii.x=1),e.search("Y")===-1&&(Ii.y=1),e.search("Z")===-1&&(Ii.z=1);i.scale.copy(this._scaleStart).multiply(Ii),this.scaleSnap&&(e.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const l=20/this.worldPosition.distanceTo(rn.setFromMatrixPosition(this.camera.matrixWorld));let u=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(rn.copy(this.rotationAxis).cross(this.eye))*l):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Lp[e]),rn.copy(Lp[e]),o==="local"&&rn.applyQuaternion(this.worldQuaternion),rn.cross(this.eye),rn.length()===0?u=!0:this.rotationAngle=this._offset.dot(rn.normalize())*l),(e==="E"||u)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),o==="local"&&e!=="E"&&e!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(Se.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(Se.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(uc),this.dispatchEvent(Np)}}pointerUp(t){t.button===0&&(this.dragging&&this.axis!==null&&(Dp.mode=this.mode,this.dispatchEvent(Dp)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}attach(t){return this.object=t,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(uc),this.dispatchEvent(Np),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Qi}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function WS(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const t=this.domElement.getBoundingClientRect();return{x:(s.clientX-t.left)/t.width*2-1,y:-(s.clientY-t.top)/t.height*2+1,button:s.button}}}function XS(s){if(!!this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function jS(s){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function qS(s){!this.enabled||this.pointerMove(this._getPointer(s))}function YS(s){!this.enabled||(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function hc(s,t,e){const n=t.intersectObject(s,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||e)return n[i];return!1}const ma=new uo,ge=new D(0,1,0),Up=new D(0,0,0),Op=new Gt,ga=new Oe,wa=new Oe,Gn=new D,Fp=new Gt,Jr=new D(1,0,0),ts=new D(0,1,0),to=new D(0,0,1),_a=new D,$r=new D,Zr=new D;class KS extends fe{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new jn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new Zc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const i=e.clone();i.opacity=.5;const o=t.clone();o.color.setHex(16711680);const a=t.clone();a.color.setHex(65280);const l=t.clone();l.color.setHex(255);const u=t.clone();u.color.setHex(16711680),u.opacity=.5;const d=t.clone();d.color.setHex(65280),d.opacity=.5;const p=t.clone();p.color.setHex(255),p.opacity=.5;const f=t.clone();f.opacity=.25;const m=t.clone();m.color.setHex(16776960),m.opacity=.25,t.clone().color.setHex(16776960);const b=t.clone();b.color.setHex(7895160);const w=new sn(0,.04,.1,12);w.translate(0,.05,0);const x=new Ue(.08,.08,.08);x.translate(0,.04,0);const _=new Je;_.setAttribute("position",new Re([0,0,0,1,0,0],3));const E=new sn(.0075,.0075,.5,3);E.translate(0,.25,0);function y(G,H){const X=new is(G,.0075,3,64,H*Math.PI*2);return X.rotateY(Math.PI/2),X.rotateX(Math.PI/2),X}function S(){const G=new Je;return G.setAttribute("position",new Re([0,0,0,1,1,1],3)),G}const C={X:[[new _t(w,o),[.5,0,0],[0,0,-Math.PI/2]],[new _t(w,o),[-.5,0,0],[0,0,Math.PI/2]],[new _t(E,o),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new _t(w,a),[0,.5,0]],[new _t(w,a),[0,-.5,0],[Math.PI,0,0]],[new _t(E,a)]],Z:[[new _t(w,l),[0,0,.5],[Math.PI/2,0,0]],[new _t(w,l),[0,0,-.5],[-Math.PI/2,0,0]],[new _t(E,l),null,[Math.PI/2,0,0]]],XYZ:[[new _t(new tr(.1,0),f.clone()),[0,0,0]]],XY:[[new _t(new Ue(.15,.15,.01),p.clone()),[.15,.15,0]]],YZ:[[new _t(new Ue(.15,.15,.01),u.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new Ue(.15,.15,.01),d.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new _t(new sn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new _t(new sn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _t(new sn(.2,0,.6,4),n),[0,.3,0]],[new _t(new sn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _t(new sn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new _t(new sn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new _t(new tr(.2,0),n)]],XY:[[new _t(new Ue(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new _t(new Ue(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new Ue(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new _t(new tr(.01,2),i),null,null,null,"helper"]],END:[[new _t(new tr(.01,2),i),null,null,null,"helper"]],DELTA:[[new Un(S(),i),null,null,null,"helper"]],X:[[new Un(_,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Un(_,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Un(_,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},F={XYZE:[[new _t(y(.5,1),b),null,[0,Math.PI/2,0]]],X:[[new _t(y(.5,.5),o)]],Y:[[new _t(y(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new _t(y(.5,.5),l),null,[0,Math.PI/2,0]]],E:[[new _t(y(.75,1),m),null,[0,Math.PI/2,0]]]},V={AXIS:[[new Un(_,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new _t(new Jc(.25,10,8),n)]],X:[[new _t(new is(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new _t(new is(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new _t(new is(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new _t(new is(.75,.1,2,24),n)]]},L={X:[[new _t(x,o),[.5,0,0],[0,0,-Math.PI/2]],[new _t(E,o),[0,0,0],[0,0,-Math.PI/2]],[new _t(x,o),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new _t(x,a),[0,.5,0]],[new _t(E,a)],[new _t(x,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new _t(x,l),[0,0,.5],[Math.PI/2,0,0]],[new _t(E,l),[0,0,0],[Math.PI/2,0,0]],[new _t(x,l),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new _t(new Ue(.15,.15,.01),p),[.15,.15,0]]],YZ:[[new _t(new Ue(.15,.15,.01),u),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new Ue(.15,.15,.01),d),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _t(new Ue(.1,.1,.1),f.clone())]]},z={X:[[new _t(new sn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new _t(new sn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _t(new sn(.2,0,.6,4),n),[0,.3,0]],[new _t(new sn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _t(new sn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new _t(new sn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new _t(new Ue(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new _t(new Ue(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new Ue(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _t(new Ue(.2,.2,.2),n),[0,0,0]]]},j={X:[[new Un(_,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Un(_,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Un(_,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(G){const H=new fe;for(const X in G)for(let et=G[X].length;et--;){const tt=G[X][et][0].clone(),nt=G[X][et][1],st=G[X][et][2],pt=G[X][et][3],vt=G[X][et][4];tt.name=X,tt.tag=vt,nt&&tt.position.set(nt[0],nt[1],nt[2]),st&&tt.rotation.set(st[0],st[1],st[2]),pt&&tt.scale.set(pt[0],pt[1],pt[2]),tt.updateMatrix();const $=tt.geometry.clone();$.applyMatrix4(tt.matrix),tt.geometry=$,tt.renderOrder=1/0,tt.position.set(0,0,0),tt.rotation.set(0,0,0),tt.scale.set(1,1,1),H.add(tt)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(C)),this.add(this.gizmo.rotate=O(F)),this.add(this.gizmo.scale=O(L)),this.add(this.picker.translate=O(P)),this.add(this.picker.rotate=O(M)),this.add(this.picker.scale=O(z)),this.add(this.helper.translate=O(A)),this.add(this.helper.rotate=O(V)),this.add(this.helper.scale=O(j)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:wa;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let o=0;o<i.length;o++){const a=i[o];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let l;if(this.camera.isOrthographicCamera?l=(this.camera.top-this.camera.bottom)/this.camera.zoom:l=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(l*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(Se.setFromEuler(ma.set(0,0,0)),a.quaternion.copy(n).multiply(Se),Math.abs(ge.copy(Jr).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(Se.setFromEuler(ma.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(Se),Math.abs(ge.copy(ts).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(Se.setFromEuler(ma.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(Se),Math.abs(ge.copy(to).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(Se.setFromEuler(ma.set(0,Math.PI/2,0)),ge.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Op.lookAt(Up,ge,ts)),a.quaternion.multiply(Se),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),rn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),rn.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(rn),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(ge.copy(Jr).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(ge.copy(ts).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(ge.copy(to).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(ge.copy(to).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(ge.copy(Jr).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(ge.copy(ts).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(ga.copy(n),ge.copy(this.eye).applyQuaternion(Se.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Op.lookAt(this.eye,Up,ts)),a.name==="X"&&(Se.setFromAxisAngle(Jr,Math.atan2(-ge.y,ge.z)),Se.multiplyQuaternions(ga,Se),a.quaternion.copy(Se)),a.name==="Y"&&(Se.setFromAxisAngle(ts,Math.atan2(ge.x,ge.z)),Se.multiplyQuaternions(ga,Se),a.quaternion.copy(Se)),a.name==="Z"&&(Se.setFromAxisAngle(to,Math.atan2(ge.y,ge.x)),Se.multiplyQuaternions(ga,Se),a.quaternion.copy(Se))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(u){return a.name===u}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(t)}}class $S extends _t{constructor(){super(new ds(1e5,1e5,2,2),new jn({visible:!1,wireframe:!0,side:un,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),_a.copy(Jr).applyQuaternion(e==="local"?this.worldQuaternion:wa),$r.copy(ts).applyQuaternion(e==="local"?this.worldQuaternion:wa),Zr.copy(to).applyQuaternion(e==="local"?this.worldQuaternion:wa),ge.copy($r),this.mode){case"translate":case"scale":switch(this.axis){case"X":ge.copy(this.eye).cross(_a),Gn.copy(_a).cross(ge);break;case"Y":ge.copy(this.eye).cross($r),Gn.copy($r).cross(ge);break;case"Z":ge.copy(this.eye).cross(Zr),Gn.copy(Zr).cross(ge);break;case"XY":Gn.copy(Zr);break;case"YZ":Gn.copy(_a);break;case"XZ":ge.copy(Zr),Gn.copy($r);break;case"XYZ":case"E":Gn.set(0,0,0);break}break;case"rotate":default:Gn.set(0,0,0)}Gn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Fp.lookAt(rn.set(0,0,0),Gn,ge),this.quaternion.setFromRotationMatrix(Fp)),super.updateMatrixWorld(t)}}var ZS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Bc={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(s,t){(function(e,n){n(t)})(ZS,function(e){class n{constructor(r){const[c,g]=r.split("-"),T=c.split(".");this.major=parseInt(T[0],10),this.minor=parseInt(T[1],10),this.patch=parseInt(T[2],10),this.prerelease=g!=null?g:null}toString(){const r=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[r,this.prerelease].join("-"):r}}class i{constructor(r){this.controller_=r}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(r){this.controller_.viewProps.set("disabled",r)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(r){this.controller_.viewProps.set("hidden",r)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class o{constructor(r){this.target=r}}class a extends o{constructor(r,c,g,T){super(r),this.value=c,this.presetKey=g,this.last=T!=null?T:!0}}class l extends o{constructor(r,c,g){super(r),this.value=c,this.presetKey=g}}class u extends o{constructor(r,c){super(r),this.expanded=c}}class d extends o{constructor(r,c){super(r),this.index=c}}function p(h){return h}function f(h){return h==null}function m(h,r){if(h.length!==r.length)return!1;for(let c=0;c<h.length;c++)if(h[c]!==r[c])return!1;return!0}const v={alreadydisposed:()=>"View has been already disposed",invalidparams:h=>`Invalid parameters for '${h.name}'`,nomatchingcontroller:h=>`No matching controller for '${h.key}'`,nomatchingview:h=>`No matching view for '${JSON.stringify(h.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:h=>`Property '${h.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class b{constructor(r){var c;this.message=(c=v[r.type](r.context))!==null&&c!==void 0?c:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=r.type}static alreadyDisposed(){return new b({type:"alreadydisposed"})}static notBindable(){return new b({type:"notbindable"})}static propertyNotFound(r){return new b({type:"propertynotfound",context:{name:r}})}static shouldNeverHappen(){return new b({type:"shouldneverhappen"})}}class w{constructor(r,c,g){this.obj_=r,this.key_=c,this.presetKey_=g!=null?g:c}static isBindable(r){return!(r===null||typeof r!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(r){this.obj_[this.key_]=r}writeProperty(r,c){const g=this.read();if(!w.isBindable(g))throw b.notBindable();if(!(r in g))throw b.propertyNotFound(r);g[r]=c}}class x extends i{get label(){return this.controller_.props.get("label")}set label(r){this.controller_.props.set("label",r)}get title(){var r;return(r=this.controller_.valueController.props.get("title"))!==null&&r!==void 0?r:""}set title(r){this.controller_.valueController.props.set("title",r)}on(r,c){const g=c.bind(this);return this.controller_.valueController.emitter.on(r,()=>{g(new o(this))}),this}}class _{constructor(){this.observers_={}}on(r,c){let g=this.observers_[r];return g||(g=this.observers_[r]=[]),g.push({handler:c}),this}off(r,c){const g=this.observers_[r];return g&&(this.observers_[r]=g.filter(T=>T.handler!==c)),this}emit(r,c){const g=this.observers_[r];!g||g.forEach(T=>{T.handler(c)})}}const E="tp";function y(h){return(c,g)=>[E,"-",h,"v",c?`_${c}`:"",g?`-${g}`:""].join("")}function S(h,r){return c=>r(h(c))}function C(h){return h.rawValue}function P(h,r){h.emitter.on("change",S(C,r)),r(h.rawValue)}function A(h,r,c){P(h.value(r),c)}function F(h,r,c){c?h.classList.add(r):h.classList.remove(r)}function V(h,r){return c=>{F(h,r,c)}}function M(h,r){P(h,c=>{r.textContent=c!=null?c:""})}const L=y("btn");class z{constructor(r,c){this.element=r.createElement("div"),this.element.classList.add(L()),c.viewProps.bindClassModifiers(this.element);const g=r.createElement("button");g.classList.add(L("b")),c.viewProps.bindDisabled(g),this.element.appendChild(g),this.buttonElement=g;const T=r.createElement("div");T.classList.add(L("t")),M(c.props.value("title"),T),this.buttonElement.appendChild(T)}}class j{constructor(r,c){this.emitter=new _,this.onClick_=this.onClick_.bind(this),this.props=c.props,this.viewProps=c.viewProps,this.view=new z(r,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class O{constructor(r,c){var g;this.constraint_=c==null?void 0:c.constraint,this.equals_=(g=c==null?void 0:c.equals)!==null&&g!==void 0?g:(T,k)=>T===k,this.emitter=new _,this.rawValue_=r}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(r){this.setRawValue(r,{forceEmit:!1,last:!0})}setRawValue(r,c){const g=c!=null?c:{forceEmit:!1,last:!0},T=this.constraint_?this.constraint_.constrain(r):r;!!this.equals_(this.rawValue_,T)&&!g.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=T,this.emitter.emit("change",{options:g,rawValue:T,sender:this}))}}class G{constructor(r){this.emitter=new _,this.value_=r}get rawValue(){return this.value_}set rawValue(r){this.setRawValue(r,{forceEmit:!1,last:!0})}setRawValue(r,c){const g=c!=null?c:{forceEmit:!1,last:!0};this.value_===r&&!g.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=r,this.emitter.emit("change",{options:g,rawValue:this.value_,sender:this}))}}function H(h,r){const c=r==null?void 0:r.constraint,g=r==null?void 0:r.equals;return!c&&!g?new G(h):new O(h,r)}class X{constructor(r){this.emitter=new _,this.valMap_=r;for(const c in this.valMap_)this.valMap_[c].emitter.on("change",()=>{this.emitter.emit("change",{key:c,sender:this})})}static createCore(r){return Object.keys(r).reduce((g,T)=>Object.assign(g,{[T]:H(r[T])}),{})}static fromObject(r){const c=this.createCore(r);return new X(c)}get(r){return this.valMap_[r].rawValue}set(r,c){this.valMap_[r].rawValue=c}value(r){return this.valMap_[r]}}function et(h,r){const g=Object.keys(r).reduce((T,k)=>{if(T===void 0)return;const W=r[k],ut=W(h[k]);return ut.succeeded?Object.assign(Object.assign({},T),{[k]:ut.value}):void 0},{});return g}function tt(h,r){return h.reduce((c,g)=>{if(c===void 0)return;const T=r(g);if(!(!T.succeeded||T.value===void 0))return[...c,T.value]},[])}function nt(h){return h===null?!1:typeof h=="object"}function st(h){return r=>c=>{if(!r&&c===void 0)return{succeeded:!1,value:void 0};if(r&&c===void 0)return{succeeded:!0,value:void 0};const g=h(c);return g!==void 0?{succeeded:!0,value:g}:{succeeded:!1,value:void 0}}}function pt(h){return{custom:r=>st(r)(h),boolean:st(r=>typeof r=="boolean"?r:void 0)(h),number:st(r=>typeof r=="number"?r:void 0)(h),string:st(r=>typeof r=="string"?r:void 0)(h),function:st(r=>typeof r=="function"?r:void 0)(h),constant:r=>st(c=>c===r?r:void 0)(h),raw:st(r=>r)(h),object:r=>st(c=>{if(!!nt(c))return et(c,r)})(h),array:r=>st(c=>{if(!!Array.isArray(c))return tt(c,r)})(h)}}const vt={optional:pt(!0),required:pt(!1)};function $(h,r){const c=vt.required.object(r)(h);return c.succeeded?c.value:void 0}function ct(h){return h&&h.parentElement&&h.parentElement.removeChild(h),null}function Et(){return["veryfirst","first","last","verylast"]}const Dt=y(""),Ot={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Mt{constructor(r){this.parent_=null,this.blade=r.blade,this.view=r.view,this.viewProps=r.viewProps;const c=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Et().forEach(g=>{c.classList.remove(Dt(void 0,Ot[g]))}),this.blade.get("positions").forEach(g=>{c.classList.add(Dt(void 0,Ot[g]))})}),this.viewProps.handleDispose(()=>{ct(c)})}get parent(){return this.parent_}}const Xt="http://www.w3.org/2000/svg";function kt(h){h.offsetHeight}function Y(h,r){const c=h.style.transition;h.style.transition="none",r(),h.style.transition=c}function Te(h){return h.ontouchstart!==void 0}function Lt(){return new Function("return this")()}function zt(){return Lt().document}function At(h){const r=h.ownerDocument.defaultView;return r&&"document"in r?h.getContext("2d"):null}const me={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Wt(h,r){const c=h.createElementNS(Xt,"svg");return c.innerHTML=me[r],c}function N(h,r,c){h.insertBefore(r,h.children[c])}function R(h){h.parentElement&&h.parentElement.removeChild(h)}function K(h){for(;h.children.length>0;)h.removeChild(h.children[0])}function ht(h){for(;h.childNodes.length>0;)h.removeChild(h.childNodes[0])}function ot(h){return h.relatedTarget?h.relatedTarget:"explicitOriginalTarget"in h?h.explicitOriginalTarget:null}const lt=y("lbl");function St(h,r){const c=h.createDocumentFragment();return r.split(`
`).map(T=>h.createTextNode(T)).forEach((T,k)=>{k>0&&c.appendChild(h.createElement("br")),c.appendChild(T)}),c}class mt{constructor(r,c){this.element=r.createElement("div"),this.element.classList.add(lt()),c.viewProps.bindClassModifiers(this.element);const g=r.createElement("div");g.classList.add(lt("l")),A(c.props,"label",k=>{f(k)?this.element.classList.add(lt(void 0,"nol")):(this.element.classList.remove(lt(void 0,"nol")),ht(g),g.appendChild(St(r,k)))}),this.element.appendChild(g),this.labelElement=g;const T=r.createElement("div");T.classList.add(lt("v")),this.element.appendChild(T),this.valueElement=T}}class bt extends Mt{constructor(r,c){const g=c.valueController.viewProps;super(Object.assign(Object.assign({},c),{view:new mt(r,{props:c.props,viewProps:g}),viewProps:g})),this.props=c.props,this.valueController=c.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Ft={id:"button",type:"blade",accept(h){const r=vt,c=$(h,{title:r.required.string,view:r.required.constant("button"),label:r.optional.string});return c?{params:c}:null},controller(h){return new bt(h.document,{blade:h.blade,props:X.fromObject({label:h.params.label}),valueController:new j(h.document,{props:X.fromObject({title:h.params.title}),viewProps:h.viewProps})})},api(h){return!(h.controller instanceof bt)||!(h.controller.valueController instanceof j)?null:new x(h.controller)}};class Vt extends Mt{constructor(r){super(r),this.value=r.value}}function rt(){return new X({positions:H([],{equals:m})})}class se extends X{constructor(r){super(r)}static create(r){const c={completed:!0,expanded:r,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},g=X.createCore(c);return new se(g)}get styleExpanded(){var r;return(r=this.get("temporaryExpanded"))!==null&&r!==void 0?r:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const r=this.get("expandedHeight");return this.get("shouldFixHeight")&&!f(r)?`${r}px`:"auto"}bindExpandedClass(r,c){const g=()=>{this.styleExpanded?r.classList.add(c):r.classList.remove(c)};A(this,"expanded",g),A(this,"temporaryExpanded",g)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Jt(h,r){let c=0;return Y(r,()=>{h.set("expandedHeight",null),h.set("temporaryExpanded",!0),kt(r),c=r.clientHeight,h.set("temporaryExpanded",null),kt(r)}),c}function Ht(h,r){r.style.height=h.styleHeight}function Ct(h,r){h.value("expanded").emitter.on("beforechange",()=>{h.set("completed",!1),f(h.get("expandedHeight"))&&h.set("expandedHeight",Jt(h,r)),h.set("shouldFixHeight",!0),kt(r)}),h.emitter.on("change",()=>{Ht(h,r)}),Ht(h,r),r.addEventListener("transitionend",c=>{c.propertyName==="height"&&h.cleanUpTransition()})}class xt extends i{constructor(r,c){super(r),this.rackApi_=c}}function $t(h,r){return h.addBlade(Object.assign(Object.assign({},r),{view:"button"}))}function B(h,r){return h.addBlade(Object.assign(Object.assign({},r),{view:"folder"}))}function dt(h,r){const c=r!=null?r:{};return h.addBlade(Object.assign(Object.assign({},c),{view:"separator"}))}function gt(h,r){return h.addBlade(Object.assign(Object.assign({},r),{view:"tab"}))}class Pt{constructor(r){this.emitter=new _,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=r}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(r){for(const c of this.allItems())if(r(c))return c;return null}includes(r){return this.cache_.has(r)}add(r,c){if(this.includes(r))throw b.shouldNeverHappen();const g=c!==void 0?c:this.items_.length;this.items_.splice(g,0,r),this.cache_.add(r);const T=this.extract_(r);T&&(T.emitter.on("add",this.onSubListAdd_),T.emitter.on("remove",this.onSubListRemove_),T.allItems().forEach(k=>{this.cache_.add(k)})),this.emitter.emit("add",{index:g,item:r,root:this,target:this})}remove(r){const c=this.items_.indexOf(r);if(c<0)return;this.items_.splice(c,1),this.cache_.delete(r);const g=this.extract_(r);g&&(g.emitter.off("add",this.onSubListAdd_),g.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:c,item:r,root:this,target:this})}onSubListAdd_(r){this.cache_.add(r.item),this.emitter.emit("add",{index:r.index,item:r.item,root:this,target:r.target})}onSubListRemove_(r){this.cache_.delete(r.item),this.emitter.emit("remove",{index:r.index,item:r.item,root:this,target:r.target})}}class U extends i{constructor(r){super(r),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new _,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(r){this.controller_.props.set("label",r)}on(r,c){const g=c.bind(this);return this.emitter_.on(r,T=>{g(T.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(r){const c=r.sender.target.read();this.emitter_.emit("change",{event:new a(this,c,this.controller_.binding.target.presetKey,r.options.last)})}}class it extends bt{constructor(r,c){super(r,c),this.binding=c.binding}}class at extends i{constructor(r){super(r),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new _,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(r){this.controller_.props.set("label",r)}on(r,c){const g=c.bind(this);return this.emitter_.on(r,T=>{g(T.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(r){const c=r.sender.target.read();this.emitter_.emit("update",{event:new l(this,c,this.controller_.binding.target.presetKey)})}}class wt extends bt{constructor(r,c){super(r,c),this.binding=c.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Nt(h){return h instanceof le?h.apiSet_:h instanceof xt?h.rackApi_.apiSet_:null}function ne(h,r){const c=h.find(g=>g.controller_===r);if(!c)throw b.shouldNeverHappen();return c}function ee(h,r,c){if(!w.isBindable(h))throw b.notBindable();return new w(h,r,c)}class le extends i{constructor(r,c){super(r),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new _,this.apiSet_=new Pt(Nt),this.pool_=c;const g=this.controller_.rack;g.emitter.on("add",this.onRackAdd_),g.emitter.on("remove",this.onRackRemove_),g.emitter.on("inputchange",this.onRackInputChange_),g.emitter.on("monitorupdate",this.onRackMonitorUpdate_),g.children.forEach(T=>{this.setUpApi_(T)})}get children(){return this.controller_.rack.children.map(r=>ne(this.apiSet_,r))}addInput(r,c,g){const T=g!=null?g:{},k=this.controller_.view.element.ownerDocument,W=this.pool_.createInput(k,ee(r,c,T.presetKey),T),ut=new U(W);return this.add(ut,T.index)}addMonitor(r,c,g){const T=g!=null?g:{},k=this.controller_.view.element.ownerDocument,W=this.pool_.createMonitor(k,ee(r,c),T),ut=new at(W);return this.add(ut,T.index)}addFolder(r){return B(this,r)}addButton(r){return $t(this,r)}addSeparator(r){return dt(this,r)}addTab(r){return gt(this,r)}add(r,c){this.controller_.rack.add(r.controller_,c);const g=this.apiSet_.find(T=>T.controller_===r.controller_);return g&&this.apiSet_.remove(g),this.apiSet_.add(r),r}remove(r){this.controller_.rack.remove(r.controller_)}addBlade(r){const c=this.controller_.view.element.ownerDocument,g=this.pool_.createBlade(c,r),T=this.pool_.createBladeApi(g);return this.add(T,r.index)}on(r,c){const g=c.bind(this);return this.emitter_.on(r,T=>{g(T.event)}),this}setUpApi_(r){this.apiSet_.find(g=>g.controller_===r)||this.apiSet_.add(this.pool_.createBladeApi(r))}onRackAdd_(r){this.setUpApi_(r.bladeController)}onRackRemove_(r){if(r.isRoot){const c=ne(this.apiSet_,r.bladeController);this.apiSet_.remove(c)}}onRackInputChange_(r){const c=r.bladeController;if(c instanceof it){const g=ne(this.apiSet_,c),T=c.binding;this.emitter_.emit("change",{event:new a(g,T.target.read(),T.target.presetKey,r.options.last)})}else if(c instanceof Vt){const g=ne(this.apiSet_,c);this.emitter_.emit("change",{event:new a(g,c.value.rawValue,void 0,r.options.last)})}}onRackMonitorUpdate_(r){if(!(r.bladeController instanceof wt))throw b.shouldNeverHappen();const c=ne(this.apiSet_,r.bladeController),g=r.bladeController.binding;this.emitter_.emit("update",{event:new l(c,g.target.read(),g.target.presetKey)})}}class Ie extends xt{constructor(r,c){super(r,new le(r.rackController,c)),this.emitter_=new _,this.controller_.foldable.value("expanded").emitter.on("change",g=>{this.emitter_.emit("fold",{event:new u(this,g.sender.rawValue)})}),this.rackApi_.on("change",g=>{this.emitter_.emit("change",{event:g})}),this.rackApi_.on("update",g=>{this.emitter_.emit("update",{event:g})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(r){this.controller_.foldable.set("expanded",r)}get title(){return this.controller_.props.get("title")}set title(r){this.controller_.props.set("title",r)}get children(){return this.rackApi_.children}addInput(r,c,g){return this.rackApi_.addInput(r,c,g)}addMonitor(r,c,g){return this.rackApi_.addMonitor(r,c,g)}addFolder(r){return this.rackApi_.addFolder(r)}addButton(r){return this.rackApi_.addButton(r)}addSeparator(r){return this.rackApi_.addSeparator(r)}addTab(r){return this.rackApi_.addTab(r)}add(r,c){return this.rackApi_.add(r,c)}remove(r){this.rackApi_.remove(r)}addBlade(r){return this.rackApi_.addBlade(r)}on(r,c){const g=c.bind(this);return this.emitter_.on(r,T=>{g(T.event)}),this}}class oe extends Mt{constructor(r){super({blade:r.blade,view:r.view,viewProps:r.rackController.viewProps}),this.rackController=r.rackController}}class Ae{constructor(r,c){const g=y(c.viewName);this.element=r.createElement("div"),this.element.classList.add(g()),c.viewProps.bindClassModifiers(this.element)}}function $e(h,r){for(let c=0;c<h.length;c++){const g=h[c];if(g instanceof it&&g.binding===r)return g}return null}function fo(h,r){for(let c=0;c<h.length;c++){const g=h[c];if(g instanceof wt&&g.binding===r)return g}return null}function za(h,r){for(let c=0;c<h.length;c++){const g=h[c];if(g instanceof Vt&&g.value===r)return g}return null}function mi(h){return h instanceof gi?h.rack:h instanceof oe?h.rackController.rack:null}function mo(h){const r=mi(h);return r?r.bcSet_:null}class ps{constructor(r){var c;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new _,this.blade_=r!=null?r:null,(c=this.blade_)===null||c===void 0||c.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new Pt(mo),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(r,c){r.parent&&r.parent.remove(r),r.parent_=this,this.bcSet_.add(r,c)}remove(r){r.parent_=null,this.bcSet_.remove(r)}find(r){return this.bcSet_.allItems().filter(c=>c instanceof r)}onSetAdd_(r){this.updatePositions_();const c=r.target===r.root;if(this.emitter.emit("add",{bladeController:r.item,index:r.index,isRoot:c,sender:this}),!c)return;const g=r.item;if(g.viewProps.emitter.on("change",this.onChildViewPropsChange_),g.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),g.viewProps.handleDispose(this.onChildDispose_),g instanceof it)g.binding.emitter.on("change",this.onChildInputChange_);else if(g instanceof wt)g.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(g instanceof Vt)g.value.emitter.on("change",this.onChildValueChange_);else{const T=mi(g);if(T){const k=T.emitter;k.on("layout",this.onDescendantLayout_),k.on("inputchange",this.onDescendantInputChange_),k.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(r){this.updatePositions_();const c=r.target===r.root;if(this.emitter.emit("remove",{bladeController:r.item,isRoot:c,sender:this}),!c)return;const g=r.item;if(g instanceof it)g.binding.emitter.off("change",this.onChildInputChange_);else if(g instanceof wt)g.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(g instanceof Vt)g.value.emitter.off("change",this.onChildValueChange_);else{const T=mi(g);if(T){const k=T.emitter;k.off("layout",this.onDescendantLayout_),k.off("inputchange",this.onDescendantInputChange_),k.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const r=this.bcSet_.items.filter(T=>!T.viewProps.get("hidden")),c=r[0],g=r[r.length-1];this.bcSet_.items.forEach(T=>{const k=[];T===c&&(k.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&k.push("veryfirst")),T===g&&(k.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&k.push("verylast")),T.blade.set("positions",k)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(r){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(c=>c.viewProps.get("disposed")).forEach(c=>{this.bcSet_.remove(c)})}onChildInputChange_(r){const c=$e(this.find(it),r.sender);if(!c)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:c,options:r.options,sender:this})}onChildMonitorUpdate_(r){const c=fo(this.find(wt),r.sender);if(!c)throw b.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:c,sender:this})}onChildValueChange_(r){const c=za(this.find(Vt),r.sender);if(!c)throw b.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:c,options:r.options,sender:this})}onDescendantLayout_(r){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(r){this.emitter.emit("inputchange",{bladeController:r.bladeController,options:r.options,sender:this})}onDescendantMonitorUpdate_(r){this.emitter.emit("monitorupdate",{bladeController:r.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class gi extends Mt{constructor(r,c){super(Object.assign(Object.assign({},c),{view:new Ae(r,{viewName:"brk",viewProps:c.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const g=new ps(c.root?void 0:c.blade);g.emitter.on("add",this.onRackAdd_),g.emitter.on("remove",this.onRackRemove_),this.rack=g,this.viewProps.handleDispose(()=>{for(let T=this.rack.children.length-1;T>=0;T--)this.rack.children[T].viewProps.set("disposed",!0)})}onRackAdd_(r){!r.isRoot||N(this.view.element,r.bladeController.view.element,r.index)}onRackRemove_(r){!r.isRoot||R(r.bladeController.view.element)}}const br=y("cnt");class Ha{constructor(r,c){var g;this.className_=y((g=c.viewName)!==null&&g!==void 0?g:"fld"),this.element=r.createElement("div"),this.element.classList.add(this.className_(),br()),c.viewProps.bindClassModifiers(this.element),this.foldable_=c.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),A(this.foldable_,"completed",V(this.element,this.className_(void 0,"cpl")));const T=r.createElement("button");T.classList.add(this.className_("b")),A(c.props,"title",It=>{f(It)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),c.viewProps.bindDisabled(T),this.element.appendChild(T),this.buttonElement=T;const k=r.createElement("div");k.classList.add(this.className_("t")),M(c.props.value("title"),k),this.buttonElement.appendChild(k),this.titleElement=k;const W=r.createElement("div");W.classList.add(this.className_("m")),this.buttonElement.appendChild(W);const ut=c.containerElement;ut.classList.add(this.className_("c")),this.element.appendChild(ut),this.containerElement=ut}}class yr extends oe{constructor(r,c){var g;const T=se.create((g=c.expanded)!==null&&g!==void 0?g:!0),k=new gi(r,{blade:c.blade,root:c.root,viewProps:c.viewProps});super(Object.assign(Object.assign({},c),{rackController:k,view:new Ha(r,{containerElement:k.view.element,foldable:T,props:c.props,viewName:c.root?"rot":void 0,viewProps:c.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=c.props,this.foldable=T,Ct(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Ga={id:"folder",type:"blade",accept(h){const r=vt,c=$(h,{title:r.required.string,view:r.required.constant("folder"),expanded:r.optional.boolean});return c?{params:c}:null},controller(h){return new yr(h.document,{blade:h.blade,expanded:h.params.expanded,props:X.fromObject({title:h.params.title}),viewProps:h.viewProps})},api(h){return h.controller instanceof yr?new Ie(h.controller,h.pool):null}};class I extends Vt{constructor(r,c){const g=c.valueController.viewProps;super(Object.assign(Object.assign({},c),{value:c.valueController.value,view:new mt(r,{props:c.props,viewProps:g}),viewProps:g})),this.props=c.props,this.valueController=c.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class q extends i{}const Q=y("spr");class J{constructor(r,c){this.element=r.createElement("div"),this.element.classList.add(Q()),c.viewProps.bindClassModifiers(this.element);const g=r.createElement("hr");g.classList.add(Q("r")),this.element.appendChild(g)}}class Z extends Mt{constructor(r,c){super(Object.assign(Object.assign({},c),{view:new J(r,{viewProps:c.viewProps})}))}}const yt={id:"separator",type:"blade",accept(h){const c=$(h,{view:vt.required.constant("separator")});return c?{params:c}:null},controller(h){return new Z(h.document,{blade:h.blade,viewProps:h.viewProps})},api(h){return h.controller instanceof Z?new q(h.controller):null}},Rt=y("");function Bt(h,r){return V(h,Rt(void 0,r))}class Ut extends X{constructor(r){super(r)}static create(r){var c,g;const T=r!=null?r:{},k={disabled:(c=T.disabled)!==null&&c!==void 0?c:!1,disposed:!1,hidden:(g=T.hidden)!==null&&g!==void 0?g:!1},W=X.createCore(k);return new Ut(W)}bindClassModifiers(r){A(this,"disabled",Bt(r,"disabled")),A(this,"hidden",Bt(r,"hidden"))}bindDisabled(r){A(this,"disabled",c=>{r.disabled=c})}bindTabIndex(r){A(this,"disabled",c=>{r.tabIndex=c?-1:0})}handleDispose(r){this.value("disposed").emitter.on("change",c=>{c&&r()})}}const jt=y("tbi");class Yt{constructor(r,c){this.element=r.createElement("div"),this.element.classList.add(jt()),c.viewProps.bindClassModifiers(this.element),A(c.props,"selected",k=>{k?this.element.classList.add(jt(void 0,"sel")):this.element.classList.remove(jt(void 0,"sel"))});const g=r.createElement("button");g.classList.add(jt("b")),c.viewProps.bindDisabled(g),this.element.appendChild(g),this.buttonElement=g;const T=r.createElement("div");T.classList.add(jt("t")),M(c.props.value("title"),T),this.buttonElement.appendChild(T),this.titleElement=T}}class Zt{constructor(r,c){this.emitter=new _,this.onClick_=this.onClick_.bind(this),this.props=c.props,this.viewProps=c.viewProps,this.view=new Yt(r,{props:c.props,viewProps:c.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ee{constructor(r,c){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Zt(r,{props:c.itemProps,viewProps:Ut.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new gi(r,{blade:rt(),viewProps:Ut.create()}),this.props=c.props,A(this.props,"selected",g=>{this.itemController.props.set("selected",g),this.contentController.viewProps.set("hidden",!g)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class tn{constructor(r,c){this.controller_=r,this.rackApi_=c}get title(){var r;return(r=this.controller_.itemController.props.get("title"))!==null&&r!==void 0?r:""}set title(r){this.controller_.itemController.props.set("title",r)}get selected(){return this.controller_.props.get("selected")}set selected(r){this.controller_.props.set("selected",r)}get children(){return this.rackApi_.children}addButton(r){return this.rackApi_.addButton(r)}addFolder(r){return this.rackApi_.addFolder(r)}addSeparator(r){return this.rackApi_.addSeparator(r)}addTab(r){return this.rackApi_.addTab(r)}add(r,c){this.rackApi_.add(r,c)}remove(r){this.rackApi_.remove(r)}addInput(r,c,g){return this.rackApi_.addInput(r,c,g)}addMonitor(r,c,g){return this.rackApi_.addMonitor(r,c,g)}addBlade(r){return this.rackApi_.addBlade(r)}}class De extends xt{constructor(r,c){super(r,new le(r.rackController,c)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new _,this.pageApiMap_=new Map,this.rackApi_.on("change",g=>{this.emitter_.emit("change",{event:g})}),this.rackApi_.on("update",g=>{this.emitter_.emit("update",{event:g})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(g=>{this.setUpPageApi_(g)})}get pages(){return this.controller_.pageSet.items.map(r=>{const c=this.pageApiMap_.get(r);if(!c)throw b.shouldNeverHappen();return c})}addPage(r){const c=this.controller_.view.element.ownerDocument,g=new Ee(c,{itemProps:X.fromObject({selected:!1,title:r.title}),props:X.fromObject({selected:!1})});this.controller_.add(g,r.index);const T=this.pageApiMap_.get(g);if(!T)throw b.shouldNeverHappen();return T}removePage(r){this.controller_.remove(r)}on(r,c){const g=c.bind(this);return this.emitter_.on(r,T=>{g(T.event)}),this}setUpPageApi_(r){const c=this.rackApi_.apiSet_.find(T=>T.controller_===r.contentController);if(!c)throw b.shouldNeverHappen();const g=new tn(r,c);this.pageApiMap_.set(r,g)}onPageAdd_(r){this.setUpPageApi_(r.item)}onPageRemove_(r){if(!this.pageApiMap_.get(r.item))throw b.shouldNeverHappen();this.pageApiMap_.delete(r.item)}onSelect_(r){this.emitter_.emit("select",{event:new d(this,r.rawValue)})}}const wn=-1;class xe{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=H(!0),this.selectedIndex=H(wn),this.items_=[]}add(r,c){const g=c!=null?c:this.items_.length;this.items_.splice(g,0,r),r.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(r){const c=this.items_.indexOf(r);c<0||(this.items_.splice(c,1),r.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=wn,this.empty.rawValue=!0;return}const r=this.items_.findIndex(c=>c.rawValue);r<0?(this.items_.forEach((c,g)=>{c.rawValue=g===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((c,g)=>{c.rawValue=g===r}),this.selectedIndex.rawValue=r),this.empty.rawValue=!1}onItemSelectedChange_(r){if(r.rawValue){const c=this.items_.findIndex(g=>g===r.sender);this.items_.forEach((g,T)=>{g.rawValue=T===c}),this.selectedIndex.rawValue=c}else this.keepSelection_()}}const Qt=y("tab");class wr{constructor(r,c){this.element=r.createElement("div"),this.element.classList.add(Qt(),br()),c.viewProps.bindClassModifiers(this.element),P(c.empty,V(this.element,Qt(void 0,"nop")));const g=r.createElement("div");g.classList.add(Qt("i")),this.element.appendChild(g),this.itemsElement=g;const T=c.contentsElement;T.classList.add(Qt("c")),this.element.appendChild(T),this.contentsElement=T}}class be extends oe{constructor(r,c){const g=new gi(r,{blade:c.blade,viewProps:c.viewProps}),T=new xe;super({blade:c.blade,rackController:g,view:new wr(r,{contentsElement:g.view.element,empty:T.empty,viewProps:c.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Pt(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=T}get pageSet(){return this.pageSet_}add(r,c){this.pageSet_.add(r,c)}remove(r){this.pageSet_.remove(this.pageSet_.items[r])}onPageAdd_(r){const c=r.item;N(this.view.itemsElement,c.itemController.view.element,r.index),this.rackController.rack.add(c.contentController,r.index),this.tab.add(c.props.value("selected"))}onPageRemove_(r){const c=r.item;R(c.itemController.view.element),this.rackController.rack.remove(c.contentController),this.tab.remove(c.props.value("selected"))}}const Hn={id:"tab",type:"blade",accept(h){const r=vt,c=$(h,{pages:r.required.array(r.required.object({title:r.required.string})),view:r.required.constant("tab")});return!c||c.pages.length===0?null:{params:c}},controller(h){const r=new be(h.document,{blade:h.blade,viewProps:h.viewProps});return h.params.pages.forEach(c=>{const g=new Ee(h.document,{itemProps:X.fromObject({selected:!1,title:c.title}),props:X.fromObject({selected:!1})});r.add(g)}),r},api(h){return h.controller instanceof be?new De(h.controller,h.pool):null}};function go(h,r){const c=h.accept(r.params);if(!c)return null;const g=vt.optional.boolean(r.params.disabled).value,T=vt.optional.boolean(r.params.hidden).value;return h.controller({blade:rt(),document:r.document,params:Object.assign(Object.assign({},c.params),{disabled:g,hidden:T}),viewProps:Ut.create({disabled:g,hidden:T})})}class zi{constructor(){this.disabled=!1,this.emitter=new _}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Er{constructor(r,c){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=r,this.emitter=new _,this.interval_=c,this.setTimer_()}get disabled(){return this.disabled_}set disabled(r){this.disabled_=r,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const r=this.doc_.defaultView;r&&r.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const r=this.doc_.defaultView;r&&(this.timerId_=r.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Le{constructor(r){this.constraints=r}constrain(r){return this.constraints.reduce((c,g)=>g.constrain(c),r)}}function We(h,r){if(h instanceof r)return h;if(h instanceof Le){const c=h.constraints.reduce((g,T)=>g||(T instanceof r?T:null),null);if(c)return c}return null}class Zn{constructor(r){this.options=r}constrain(r){const c=this.options;return c.length===0||c.filter(T=>T.value===r).length>0?r:c[0].value}}class Ve{constructor(r){this.maxValue=r.max,this.minValue=r.min}constrain(r){let c=r;return f(this.minValue)||(c=Math.max(c,this.minValue)),f(this.maxValue)||(c=Math.min(c,this.maxValue)),c}}class _i{constructor(r,c=0){this.step=r,this.origin=c}constrain(r){const c=this.origin%this.step,g=Math.round((r-c)/this.step);return c+g*this.step}}const Mr=y("lst");class _o{constructor(r,c){this.onValueChange_=this.onValueChange_.bind(this),this.props_=c.props,this.element=r.createElement("div"),this.element.classList.add(Mr()),c.viewProps.bindClassModifiers(this.element);const g=r.createElement("select");g.classList.add(Mr("s")),A(this.props_,"options",k=>{K(g),k.forEach((W,ut)=>{const It=r.createElement("option");It.dataset.index=String(ut),It.textContent=W.text,It.value=String(W.value),g.appendChild(It)})}),c.viewProps.bindDisabled(g),this.element.appendChild(g),this.selectElement=g;const T=r.createElement("div");T.classList.add(Mr("m")),T.appendChild(Wt(r,"dropdown")),this.element.appendChild(T),c.value.emitter.on("change",this.onValueChange_),this.value_=c.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class Sr{constructor(r,c){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=c.props,this.value=c.value,this.viewProps=c.viewProps,this.view=new _o(r,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(r){const g=r.currentTarget.selectedOptions.item(0);if(!g)return;const T=Number(g.dataset.index);this.value.rawValue=this.props.get("options")[T].value}}const uu=y("pop");class Xf{constructor(r,c){this.element=r.createElement("div"),this.element.classList.add(uu()),c.viewProps.bindClassModifiers(this.element),P(c.shows,V(this.element,uu(void 0,"v")))}}class hu{constructor(r,c){this.shows=H(!1),this.viewProps=c.viewProps,this.view=new Xf(r,{shows:this.shows,viewProps:this.viewProps})}}const du=y("txt");class jf{constructor(r,c){this.onChange_=this.onChange_.bind(this),this.element=r.createElement("div"),this.element.classList.add(du()),c.viewProps.bindClassModifiers(this.element),this.props_=c.props,this.props_.emitter.on("change",this.onChange_);const g=r.createElement("input");g.classList.add(du("i")),g.type="text",c.viewProps.bindDisabled(g),this.element.appendChild(g),this.inputElement=g,c.value.emitter.on("change",this.onChange_),this.value_=c.value,this.refresh()}refresh(){const r=this.props_.get("formatter");this.inputElement.value=r(this.value_.rawValue)}onChange_(){this.refresh()}}class vo{constructor(r,c){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=c.parser,this.props=c.props,this.value=c.value,this.viewProps=c.viewProps,this.view=new jf(r,{props:c.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(r){const g=r.currentTarget.value,T=this.parser_(g);f(T)||(this.value.rawValue=T),this.view.refresh()}}function qf(h){return String(h)}function pu(h){return h==="false"?!1:!!h}function fu(h){return qf(h)}class Yf{constructor(r){this.text=r}evaluate(){return Number(this.text)}toString(){return this.text}}const Kf={"**":(h,r)=>Math.pow(h,r),"*":(h,r)=>h*r,"/":(h,r)=>h/r,"%":(h,r)=>h%r,"+":(h,r)=>h+r,"-":(h,r)=>h-r,"<<":(h,r)=>h<<r,">>":(h,r)=>h>>r,">>>":(h,r)=>h>>>r,"&":(h,r)=>h&r,"^":(h,r)=>h^r,"|":(h,r)=>h|r};class $f{constructor(r,c,g){this.left=c,this.operator=r,this.right=g}evaluate(){const r=Kf[this.operator];if(!r)throw new Error(`unexpected binary operator: '${this.operator}`);return r(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Zf={"+":h=>h,"-":h=>-h,"~":h=>~h};class Qf{constructor(r,c){this.operator=r,this.expression=c}evaluate(){const r=Zf[this.operator];if(!r)throw new Error(`unexpected unary operator: '${this.operator}`);return r(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Wa(h){return(r,c)=>{for(let g=0;g<h.length;g++){const T=h[g](r,c);if(T!=="")return T}return""}}function Tr(h,r){var c;const g=h.substr(r).match(/^\s+/);return(c=g&&g[0])!==null&&c!==void 0?c:""}function Jf(h,r){const c=h.substr(r,1);return c.match(/^[1-9]$/)?c:""}function Ar(h,r){var c;const g=h.substr(r).match(/^[0-9]+/);return(c=g&&g[0])!==null&&c!==void 0?c:""}function tm(h,r){const c=Ar(h,r);if(c!=="")return c;const g=h.substr(r,1);if(r+=1,g!=="-"&&g!=="+")return"";const T=Ar(h,r);return T===""?"":g+T}function Xa(h,r){const c=h.substr(r,1);if(r+=1,c.toLowerCase()!=="e")return"";const g=tm(h,r);return g===""?"":c+g}function mu(h,r){const c=h.substr(r,1);if(c==="0")return c;const g=Jf(h,r);return r+=g.length,g===""?"":g+Ar(h,r)}function em(h,r){const c=mu(h,r);if(r+=c.length,c==="")return"";const g=h.substr(r,1);if(r+=g.length,g!==".")return"";const T=Ar(h,r);return r+=T.length,c+g+T+Xa(h,r)}function nm(h,r){const c=h.substr(r,1);if(r+=c.length,c!==".")return"";const g=Ar(h,r);return r+=g.length,g===""?"":c+g+Xa(h,r)}function im(h,r){const c=mu(h,r);return r+=c.length,c===""?"":c+Xa(h,r)}const sm=Wa([em,nm,im]);function rm(h,r){var c;const g=h.substr(r).match(/^[01]+/);return(c=g&&g[0])!==null&&c!==void 0?c:""}function om(h,r){const c=h.substr(r,2);if(r+=c.length,c.toLowerCase()!=="0b")return"";const g=rm(h,r);return g===""?"":c+g}function am(h,r){var c;const g=h.substr(r).match(/^[0-7]+/);return(c=g&&g[0])!==null&&c!==void 0?c:""}function lm(h,r){const c=h.substr(r,2);if(r+=c.length,c.toLowerCase()!=="0o")return"";const g=am(h,r);return g===""?"":c+g}function cm(h,r){var c;const g=h.substr(r).match(/^[0-9a-f]+/i);return(c=g&&g[0])!==null&&c!==void 0?c:""}function um(h,r){const c=h.substr(r,2);if(r+=c.length,c.toLowerCase()!=="0x")return"";const g=cm(h,r);return g===""?"":c+g}const hm=Wa([om,lm,um]),dm=Wa([hm,sm]);function pm(h,r){const c=dm(h,r);return r+=c.length,c===""?null:{evaluable:new Yf(c),cursor:r}}function fm(h,r){const c=h.substr(r,1);if(r+=c.length,c!=="(")return null;const g=_u(h,r);if(!g)return null;r=g.cursor,r+=Tr(h,r).length;const T=h.substr(r,1);return r+=T.length,T!==")"?null:{evaluable:g.evaluable,cursor:r}}function mm(h,r){var c;return(c=pm(h,r))!==null&&c!==void 0?c:fm(h,r)}function gu(h,r){const c=mm(h,r);if(c)return c;const g=h.substr(r,1);if(r+=g.length,g!=="+"&&g!=="-"&&g!=="~")return null;const T=gu(h,r);return T?(r=T.cursor,{cursor:r,evaluable:new Qf(g,T.evaluable)}):null}function gm(h,r,c){c+=Tr(r,c).length;const g=h.filter(T=>r.startsWith(T,c))[0];return g?(c+=g.length,c+=Tr(r,c).length,{cursor:c,operator:g}):null}function _m(h,r){return(c,g)=>{const T=h(c,g);if(!T)return null;g=T.cursor;let k=T.evaluable;for(;;){const W=gm(r,c,g);if(!W)break;g=W.cursor;const ut=h(c,g);if(!ut)return null;g=ut.cursor,k=new $f(W.operator,k,ut.evaluable)}return k?{cursor:g,evaluable:k}:null}}const vm=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((h,r)=>_m(h,r),gu);function _u(h,r){return r+=Tr(h,r).length,vm(h,r)}function xm(h){const r=_u(h,0);return!r||r.cursor+Tr(h,r.cursor).length!==h.length?null:r.evaluable}function Qn(h){var r;const c=xm(h);return(r=c==null?void 0:c.evaluate())!==null&&r!==void 0?r:null}function vu(h){if(typeof h=="number")return h;if(typeof h=="string"){const r=Qn(h);if(!f(r))return r}return 0}function bm(h){return String(h)}function Ze(h){return r=>r.toFixed(Math.max(Math.min(h,20),0))}const ym=Ze(0);function xo(h){return ym(h)+"%"}function xu(h){return String(h)}function ja(h){return h}function bu(h,r){for(;h.length<r;)h.push(void 0)}function wm(h){const r=[];return bu(r,h),H(r)}function Em(h){const r=h.indexOf(void 0);return r<0?h:h.slice(0,r)}function Mm(h,r){const c=[...Em(h),r];return c.length>h.length?c.splice(0,c.length-h.length):bu(c,h.length),c}function Cr({primary:h,secondary:r,forward:c,backward:g}){let T=!1;function k(W){T||(T=!0,W(),T=!1)}h.emitter.on("change",W=>{k(()=>{r.setRawValue(c(h,r),W.options)})}),r.emitter.on("change",W=>{k(()=>{h.setRawValue(g(h,r),W.options)}),k(()=>{r.setRawValue(c(h,r),W.options)})}),k(()=>{r.setRawValue(c(h,r),{forceEmit:!1,last:!0})})}function mn(h,r){const c=h*(r.altKey?.1:1)*(r.shiftKey?10:1);return r.upKey?+c:r.downKey?-c:0}function Pr(h){return{altKey:h.altKey,downKey:h.key==="ArrowDown",shiftKey:h.shiftKey,upKey:h.key==="ArrowUp"}}function Jn(h){return{altKey:h.altKey,downKey:h.key==="ArrowLeft",shiftKey:h.shiftKey,upKey:h.key==="ArrowRight"}}function Sm(h){return h==="ArrowUp"||h==="ArrowDown"}function yu(h){return Sm(h)||h==="ArrowLeft"||h==="ArrowRight"}function qa(h,r){var c,g;const T=r.ownerDocument.defaultView,k=r.getBoundingClientRect();return{x:h.pageX-(((c=T&&T.scrollX)!==null&&c!==void 0?c:0)+k.left),y:h.pageY-(((g=T&&T.scrollY)!==null&&g!==void 0?g:0)+k.top)}}class Hi{constructor(r){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=r,this.emitter=new _,r.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),r.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),r.addEventListener("touchend",this.onTouchEnd_),r.addEventListener("mousedown",this.onMouseDown_)}computePosition_(r){const c=this.elem_.getBoundingClientRect();return{bounds:{width:c.width,height:c.height},point:r?{x:r.x,y:r.y}:null}}onMouseDown_(r){var c;r.preventDefault(),(c=r.currentTarget)===null||c===void 0||c.focus();const g=this.elem_.ownerDocument;g.addEventListener("mousemove",this.onDocumentMouseMove_),g.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:r.altKey,data:this.computePosition_(qa(r,this.elem_)),sender:this,shiftKey:r.shiftKey})}onDocumentMouseMove_(r){this.emitter.emit("move",{altKey:r.altKey,data:this.computePosition_(qa(r,this.elem_)),sender:this,shiftKey:r.shiftKey})}onDocumentMouseUp_(r){const c=this.elem_.ownerDocument;c.removeEventListener("mousemove",this.onDocumentMouseMove_),c.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:r.altKey,data:this.computePosition_(qa(r,this.elem_)),sender:this,shiftKey:r.shiftKey})}onTouchStart_(r){r.preventDefault();const c=r.targetTouches.item(0),g=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:r.altKey,data:this.computePosition_(c?{x:c.clientX-g.left,y:c.clientY-g.top}:void 0),sender:this,shiftKey:r.shiftKey}),this.lastTouch_=c}onTouchMove_(r){const c=r.targetTouches.item(0),g=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:r.altKey,data:this.computePosition_(c?{x:c.clientX-g.left,y:c.clientY-g.top}:void 0),sender:this,shiftKey:r.shiftKey}),this.lastTouch_=c}onTouchEnd_(r){var c;const g=(c=r.targetTouches.item(0))!==null&&c!==void 0?c:this.lastTouch_,T=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:r.altKey,data:this.computePosition_(g?{x:g.clientX-T.left,y:g.clientY-T.top}:void 0),sender:this,shiftKey:r.shiftKey})}}function Me(h,r,c,g,T){const k=(h-r)/(c-r);return g+k*(T-g)}function wu(h){return String(h.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ze(h,r,c){return Math.min(Math.max(h,r),c)}function Eu(h,r){return(h%r+r)%r}const En=y("txt");class Tm{constructor(r,c){this.onChange_=this.onChange_.bind(this),this.props_=c.props,this.props_.emitter.on("change",this.onChange_),this.element=r.createElement("div"),this.element.classList.add(En(),En(void 0,"num")),c.arrayPosition&&this.element.classList.add(En(void 0,c.arrayPosition)),c.viewProps.bindClassModifiers(this.element);const g=r.createElement("input");g.classList.add(En("i")),g.type="text",c.viewProps.bindDisabled(g),this.element.appendChild(g),this.inputElement=g,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=c.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(En()),this.inputElement.classList.add(En("i"));const T=r.createElement("div");T.classList.add(En("k")),this.element.appendChild(T),this.knobElement=T;const k=r.createElementNS(Xt,"svg");k.classList.add(En("g")),this.knobElement.appendChild(k);const W=r.createElementNS(Xt,"path");W.classList.add(En("gb")),k.appendChild(W),this.guideBodyElem_=W;const ut=r.createElementNS(Xt,"path");ut.classList.add(En("gh")),k.appendChild(ut),this.guideHeadElem_=ut;const It=r.createElement("div");It.classList.add(y("tt")()),this.knobElement.appendChild(It),this.tooltipElem_=It,c.value.emitter.on("change",this.onChange_),this.value=c.value,this.refresh()}onDraggingChange_(r){if(r.rawValue===null){this.element.classList.remove(En(void 0,"drg"));return}this.element.classList.add(En(void 0,"drg"));const c=r.rawValue/this.props_.get("draggingScale"),g=c+(c>0?-1:c<0?1:0),T=ze(-g,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${g+T},0 L${g},4 L${g+T},8`,`M ${c},-1 L${c},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${c},4`);const k=this.props_.get("formatter");this.tooltipElem_.textContent=k(this.value.rawValue),this.tooltipElem_.style.left=`${c}px`}refresh(){const r=this.props_.get("formatter");this.inputElement.value=r(this.value.rawValue)}onChange_(){this.refresh()}}class Rr{constructor(r,c){var g;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=c.baseStep,this.parser_=c.parser,this.props=c.props,this.sliderProps_=(g=c.sliderProps)!==null&&g!==void 0?g:null,this.value=c.value,this.viewProps=c.viewProps,this.dragging_=H(null),this.view=new Tm(r,{arrayPosition:c.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const T=new Hi(this.view.knobElement);T.emitter.on("down",this.onPointerDown_),T.emitter.on("move",this.onPointerMove_),T.emitter.on("up",this.onPointerUp_)}constrainValue_(r){var c,g;const T=(c=this.sliderProps_)===null||c===void 0?void 0:c.get("minValue"),k=(g=this.sliderProps_)===null||g===void 0?void 0:g.get("maxValue");let W=r;return T!==void 0&&(W=Math.max(W,T)),k!==void 0&&(W=Math.min(W,k)),W}onInputChange_(r){const g=r.currentTarget.value,T=this.parser_(g);f(T)||(this.value.rawValue=this.constrainValue_(T)),this.view.refresh()}onInputKeyDown_(r){const c=mn(this.baseStep_,Pr(r));c!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+c),{forceEmit:!1,last:!1})}onInputKeyUp_(r){mn(this.baseStep_,Pr(r))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(r){if(!r.point)return null;const c=r.point.x-r.bounds.width/2;return this.constrainValue_(this.originRawValue_+c*this.props.get("draggingScale"))}onPointerMove_(r){const c=this.computeDraggingValue_(r.data);c!==null&&(this.value.setRawValue(c,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(r){const c=this.computeDraggingValue_(r.data);c!==null&&(this.value.setRawValue(c,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Ya=y("sld");class Am{constructor(r,c){this.onChange_=this.onChange_.bind(this),this.props_=c.props,this.props_.emitter.on("change",this.onChange_),this.element=r.createElement("div"),this.element.classList.add(Ya()),c.viewProps.bindClassModifiers(this.element);const g=r.createElement("div");g.classList.add(Ya("t")),c.viewProps.bindTabIndex(g),this.element.appendChild(g),this.trackElement=g;const T=r.createElement("div");T.classList.add(Ya("k")),this.trackElement.appendChild(T),this.knobElement=T,c.value.emitter.on("change",this.onChange_),this.value=c.value,this.update_()}update_(){const r=ze(Me(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${r}%`}onChange_(){this.update_()}}class Cm{constructor(r,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=c.baseStep,this.value=c.value,this.viewProps=c.viewProps,this.props=c.props,this.view=new Am(r,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Hi(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(r,c){!r.point||this.value.setRawValue(Me(ze(r.point.x,0,r.bounds.width),0,r.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),c)}onPointerDownOrMove_(r){this.handlePointerEvent_(r.data,{forceEmit:!1,last:!1})}onPointerUp_(r){this.handlePointerEvent_(r.data,{forceEmit:!0,last:!0})}onKeyDown_(r){const c=mn(this.baseStep_,Jn(r));c!==0&&this.value.setRawValue(this.value.rawValue+c,{forceEmit:!1,last:!1})}onKeyUp_(r){mn(this.baseStep_,Jn(r))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ka=y("sldtxt");class Pm{constructor(r,c){this.element=r.createElement("div"),this.element.classList.add(Ka());const g=r.createElement("div");g.classList.add(Ka("s")),this.sliderView_=c.sliderView,g.appendChild(this.sliderView_.element),this.element.appendChild(g);const T=r.createElement("div");T.classList.add(Ka("t")),this.textView_=c.textView,T.appendChild(this.textView_.element),this.element.appendChild(T)}}class $a{constructor(r,c){this.value=c.value,this.viewProps=c.viewProps,this.sliderC_=new Cm(r,{baseStep:c.baseStep,props:c.sliderProps,value:c.value,viewProps:this.viewProps}),this.textC_=new Rr(r,{baseStep:c.baseStep,parser:c.parser,props:c.textProps,sliderProps:c.sliderProps,value:c.value,viewProps:c.viewProps}),this.view=new Pm(r,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Lr(h,r){h.write(r)}function bo(h){const r=vt;if(Array.isArray(h))return r.required.array(r.required.object({text:r.required.string,value:r.required.raw}))(h).value;if(typeof h=="object")return r.required.raw(h).value}function Mu(h){if(h==="inline"||h==="popup")return h}function vi(h){const r=vt;return r.required.object({max:r.optional.number,min:r.optional.number,step:r.optional.number})(h).value}function Su(h){if(Array.isArray(h))return h;const r=[];return Object.keys(h).forEach(c=>{r.push({text:c,value:h[c]})}),r}function Za(h){return f(h)?null:new Zn(Su(h))}function Qa(h){const r=h?We(h,Zn):null;return r?r.options:null}function Rm(h){const r=h?We(h,_i):null;return r?r.step:null}function yo(h,r){const c=h&&We(h,_i);return c?wu(c.step):Math.max(wu(r),2)}function fs(h){const r=Rm(h);return r!=null?r:1}function ms(h,r){var c;const g=h&&We(h,_i),T=Math.abs((c=g==null?void 0:g.step)!==null&&c!==void 0?c:r);return T===0?.1:Math.pow(10,Math.floor(Math.log10(T))-1)}const wo=y("ckb");class Lm{constructor(r,c){this.onValueChange_=this.onValueChange_.bind(this),this.element=r.createElement("div"),this.element.classList.add(wo()),c.viewProps.bindClassModifiers(this.element);const g=r.createElement("label");g.classList.add(wo("l")),this.element.appendChild(g);const T=r.createElement("input");T.classList.add(wo("i")),T.type="checkbox",g.appendChild(T),this.inputElement=T,c.viewProps.bindDisabled(this.inputElement);const k=r.createElement("div");k.classList.add(wo("w")),g.appendChild(k);const W=Wt(r,"check");k.appendChild(W),c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Im{constructor(r,c){this.onInputChange_=this.onInputChange_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.view=new Lm(r,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(r){const c=r.currentTarget;this.value.rawValue=c.checked}}function Dm(h){const r=[],c=Za(h.options);return c&&r.push(c),new Le(r)}const Nm={id:"input-bool",type:"input",accept:(h,r)=>{if(typeof h!="boolean")return null;const g=$(r,{options:vt.optional.custom(bo)});return g?{initialValue:h,params:g}:null},binding:{reader:h=>pu,constraint:h=>Dm(h.params),writer:h=>Lr},controller:h=>{var r;const c=h.document,g=h.value,T=h.constraint;return T&&We(T,Zn)?new Sr(c,{props:X.fromObject({options:(r=Qa(T))!==null&&r!==void 0?r:[]}),value:g,viewProps:h.viewProps}):new Im(c,{value:g,viewProps:h.viewProps})}},Gi=y("col");class Um{constructor(r,c){this.element=r.createElement("div"),this.element.classList.add(Gi()),c.foldable.bindExpandedClass(this.element,Gi(void 0,"expanded")),A(c.foldable,"completed",V(this.element,Gi(void 0,"cpl")));const g=r.createElement("div");g.classList.add(Gi("h")),this.element.appendChild(g);const T=r.createElement("div");T.classList.add(Gi("s")),g.appendChild(T),this.swatchElement=T;const k=r.createElement("div");if(k.classList.add(Gi("t")),g.appendChild(k),this.textElement=k,c.pickerLayout==="inline"){const W=r.createElement("div");W.classList.add(Gi("p")),this.element.appendChild(W),this.pickerElement=W}else this.pickerElement=null}}function Om(h,r,c){const g=ze(h/255,0,1),T=ze(r/255,0,1),k=ze(c/255,0,1),W=Math.max(g,T,k),ut=Math.min(g,T,k),It=W-ut;let qt=0,ce=0;const ue=(ut+W)/2;return It!==0&&(ce=It/(1-Math.abs(W+ut-1)),g===W?qt=(T-k)/It:T===W?qt=2+(k-g)/It:qt=4+(g-T)/It,qt=qt/6+(qt<0?1:0)),[qt*360,ce*100,ue*100]}function Fm(h,r,c){const g=(h%360+360)%360,T=ze(r/100,0,1),k=ze(c/100,0,1),W=(1-Math.abs(2*k-1))*T,ut=W*(1-Math.abs(g/60%2-1)),It=k-W/2;let qt,ce,ue;return g>=0&&g<60?[qt,ce,ue]=[W,ut,0]:g>=60&&g<120?[qt,ce,ue]=[ut,W,0]:g>=120&&g<180?[qt,ce,ue]=[0,W,ut]:g>=180&&g<240?[qt,ce,ue]=[0,ut,W]:g>=240&&g<300?[qt,ce,ue]=[ut,0,W]:[qt,ce,ue]=[W,0,ut],[(qt+It)*255,(ce+It)*255,(ue+It)*255]}function Bm(h,r,c){const g=ze(h/255,0,1),T=ze(r/255,0,1),k=ze(c/255,0,1),W=Math.max(g,T,k),ut=Math.min(g,T,k),It=W-ut;let qt;It===0?qt=0:W===g?qt=60*(((T-k)/It%6+6)%6):W===T?qt=60*((k-g)/It+2):qt=60*((g-T)/It+4);const ce=W===0?0:It/W,ue=W;return[qt,ce*100,ue*100]}function Tu(h,r,c){const g=Eu(h,360),T=ze(r/100,0,1),k=ze(c/100,0,1),W=k*T,ut=W*(1-Math.abs(g/60%2-1)),It=k-W;let qt,ce,ue;return g>=0&&g<60?[qt,ce,ue]=[W,ut,0]:g>=60&&g<120?[qt,ce,ue]=[ut,W,0]:g>=120&&g<180?[qt,ce,ue]=[0,W,ut]:g>=180&&g<240?[qt,ce,ue]=[0,ut,W]:g>=240&&g<300?[qt,ce,ue]=[ut,0,W]:[qt,ce,ue]=[W,0,ut],[(qt+It)*255,(ce+It)*255,(ue+It)*255]}function km(h,r,c){const g=c+r*(100-Math.abs(2*c-100))/200;return[h,g!==0?r*(100-Math.abs(2*c-100))/g:0,c+r*(100-Math.abs(2*c-100))/(2*100)]}function Vm(h,r,c){const g=100-Math.abs(c*(200-r)/100-100);return[h,g!==0?r*c/g:0,c*(200-r)/(2*100)]}function Wi(h){return[h[0],h[1],h[2]]}function Au(h,r){return[h[0],h[1],h[2],r]}const zm={hsl:{hsl:(h,r,c)=>[h,r,c],hsv:km,rgb:Fm},hsv:{hsl:Vm,hsv:(h,r,c)=>[h,r,c],rgb:Tu},rgb:{hsl:Om,hsv:Bm,rgb:(h,r,c)=>[h,r,c]}};function Eo(h,r){return[r==="float"?1:h==="rgb"?255:360,r==="float"?1:h==="rgb"?255:100,r==="float"?1:h==="rgb"?255:100]}function Hm(h,r,c){var g;const T=Eo(r,c);return[r==="rgb"?ze(h[0],0,T[0]):Eu(h[0],T[0]),ze(h[1],0,T[1]),ze(h[2],0,T[2]),ze((g=h[3])!==null&&g!==void 0?g:1,0,1)]}function Cu(h,r,c,g){const T=Eo(r,c),k=Eo(r,g);return h.map((W,ut)=>W/T[ut]*k[ut])}function Gm(h,r,c){const g=Cu(h,r.mode,r.type,"int"),T=zm[r.mode][c.mode](...g);return Cu(T,c.mode,"int",c.type)}function Mo(h,r){return typeof h!="object"||f(h)?!1:r in h&&typeof h[r]=="number"}class re{constructor(r,c,g="int"){this.mode=c,this.type=g,this.comps_=Hm(r,c,g)}static black(r="int"){return new re([0,0,0],"rgb",r)}static fromObject(r,c="int"){const g="a"in r?[r.r,r.g,r.b,r.a]:[r.r,r.g,r.b];return new re(g,"rgb",c)}static toRgbaObject(r,c="int"){return r.toRgbaObject(c)}static isRgbColorObject(r){return Mo(r,"r")&&Mo(r,"g")&&Mo(r,"b")}static isRgbaColorObject(r){return this.isRgbColorObject(r)&&Mo(r,"a")}static isColorObject(r){return this.isRgbColorObject(r)}static equals(r,c){if(r.mode!==c.mode)return!1;const g=r.comps_,T=c.comps_;for(let k=0;k<g.length;k++)if(g[k]!==T[k])return!1;return!0}getComponents(r,c="int"){return Au(Gm(Wi(this.comps_),{mode:this.mode,type:this.type},{mode:r!=null?r:this.mode,type:c}),this.comps_[3])}toRgbaObject(r="int"){const c=this.getComponents("rgb",r);return{r:c[0],g:c[1],b:c[2],a:c[3]}}}const xi=y("colp");class Wm{constructor(r,c){this.alphaViews_=null,this.element=r.createElement("div"),this.element.classList.add(xi());const g=r.createElement("div");g.classList.add(xi("hsv"));const T=r.createElement("div");T.classList.add(xi("sv")),this.svPaletteView_=c.svPaletteView,T.appendChild(this.svPaletteView_.element),g.appendChild(T);const k=r.createElement("div");k.classList.add(xi("h")),this.hPaletteView_=c.hPaletteView,k.appendChild(this.hPaletteView_.element),g.appendChild(k),this.element.appendChild(g);const W=r.createElement("div");if(W.classList.add(xi("rgb")),this.textView_=c.textView,W.appendChild(this.textView_.element),this.element.appendChild(W),c.alphaViews){this.alphaViews_={palette:c.alphaViews.palette,text:c.alphaViews.text};const ut=r.createElement("div");ut.classList.add(xi("a"));const It=r.createElement("div");It.classList.add(xi("ap")),It.appendChild(this.alphaViews_.palette.element),ut.appendChild(It);const qt=r.createElement("div");qt.classList.add(xi("at")),qt.appendChild(this.alphaViews_.text.element),ut.appendChild(qt),this.element.appendChild(ut)}}get allFocusableElements(){const r=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(c=>c.inputElement)];return this.alphaViews_&&r.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),r}}function Xm(h){return h==="int"?"int":h==="float"?"float":void 0}function Ja(h){const r=vt;return $(h,{alpha:r.optional.boolean,color:r.optional.object({alpha:r.optional.boolean,type:r.optional.custom(Xm)}),expanded:r.optional.boolean,picker:r.optional.custom(Mu)})}function Xi(h){return h?.1:1}function ji(h){var r;return(r=h.color)===null||r===void 0?void 0:r.type}function jm(h,r){return h.alpha===r.alpha&&h.mode===r.mode&&h.notation===r.notation&&h.type===r.type}function Mn(h,r){const c=h.match(/^(.+)%$/);return Math.min(c?parseFloat(c[1])*.01*r:parseFloat(h),r)}const qm={deg:h=>h,grad:h=>h*360/400,rad:h=>h*360/(2*Math.PI),turn:h=>h*360};function Pu(h){const r=h.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!r)return parseFloat(h);const c=parseFloat(r[1]),g=r[2];return qm[g](c)}function Ru(h){const r=h.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!r)return null;const c=[Mn(r[1],255),Mn(r[2],255),Mn(r[3],255)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])?null:c}function Lu(h){return r=>{const c=Ru(r);return c?new re(c,"rgb",h):null}}function Iu(h){const r=h.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!r)return null;const c=[Mn(r[1],255),Mn(r[2],255),Mn(r[3],255),Mn(r[4],1)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])||isNaN(c[3])?null:c}function Du(h){return r=>{const c=Iu(r);return c?new re(c,"rgb",h):null}}function Nu(h){const r=h.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!r)return null;const c=[Pu(r[1]),Mn(r[2],100),Mn(r[3],100)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])?null:c}function Uu(h){return r=>{const c=Nu(r);return c?new re(c,"hsl",h):null}}function Ou(h){const r=h.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!r)return null;const c=[Pu(r[1]),Mn(r[2],100),Mn(r[3],100),Mn(r[4],1)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])||isNaN(c[3])?null:c}function Fu(h){return r=>{const c=Ou(r);return c?new re(c,"hsl",h):null}}function Bu(h){const r=h.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(r)return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)];const c=h.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return c?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:null}function Ym(h){const r=Bu(h);return r?new re(r,"rgb","int"):null}function ku(h){const r=h.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(r)return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16),Me(parseInt(r[4]+r[4],16),0,255,0,1)];const c=h.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return c?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16),Me(parseInt(c[4],16),0,255,0,1)]:null}function Km(h){const r=ku(h);return r?new re(r,"rgb","int"):null}function Vu(h){const r=h.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!r)return null;const c=[parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3])];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])?null:c}function zu(h){return r=>{const c=Vu(r);return c?new re(c,"rgb",h):null}}function Hu(h){const r=h.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!r)return null;const c=[parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3]),parseFloat(r[4])];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])||isNaN(c[3])?null:c}function Gu(h){return r=>{const c=Hu(r);return c?new re(c,"rgb",h):null}}const $m=[{parser:Bu,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ku,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Ru,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Iu,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Nu,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Ou,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Vu,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Hu,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Zm(h){return $m.reduce((r,{parser:c,result:g})=>r||(c(h)?g:null),null)}function tl(h,r="int"){const c=Zm(h);return c?c.notation==="hex"&&r!=="float"?Object.assign(Object.assign({},c),{type:"int"}):c.notation==="func"?Object.assign(Object.assign({},c),{type:r}):null:null}const Wu={int:[Ym,Km,Lu("int"),Du("int"),Uu("int"),Fu("int"),zu("int"),Gu("int")],float:[Lu("float"),Du("float"),Uu("float"),Fu("float"),zu("float"),Gu("float")]};function Qm(h){const r=Wu[h];return c=>{if(typeof c!="string")return re.black(h);const g=r.reduce((T,k)=>T||k(c),null);return g!=null?g:re.black(h)}}function el(h){const r=Wu[h];return c=>r.reduce((g,T)=>g||T(c),null)}function Xu(h){const r=ze(Math.floor(h),0,255).toString(16);return r.length===1?`0${r}`:r}function ju(h,r="#"){const c=Wi(h.getComponents("rgb")).map(Xu).join("");return`${r}${c}`}function nl(h,r="#"){const c=h.getComponents("rgb"),g=[c[0],c[1],c[2],c[3]*255].map(Xu).join("");return`${r}${g}`}function qu(h,r){const c=Ze(r==="float"?2:0);return`rgb(${Wi(h.getComponents("rgb",r)).map(T=>c(T)).join(", ")})`}function Jm(h){return r=>qu(r,h)}function So(h,r){const c=Ze(2),g=Ze(r==="float"?2:0);return`rgba(${h.getComponents("rgb",r).map((k,W)=>(W===3?c:g)(k)).join(", ")})`}function tg(h){return r=>So(r,h)}function eg(h){const r=[Ze(0),xo,xo];return`hsl(${Wi(h.getComponents("hsl")).map((g,T)=>r[T](g)).join(", ")})`}function ng(h){const r=[Ze(0),xo,xo,Ze(2)];return`hsla(${h.getComponents("hsl").map((g,T)=>r[T](g)).join(", ")})`}function Yu(h,r){const c=Ze(r==="float"?2:0),g=["r","g","b"];return`{${Wi(h.getComponents("rgb",r)).map((k,W)=>`${g[W]}: ${c(k)}`).join(", ")}}`}function ig(h){return r=>Yu(r,h)}function Ku(h,r){const c=Ze(2),g=Ze(r==="float"?2:0),T=["r","g","b","a"];return`{${h.getComponents("rgb",r).map((W,ut)=>{const It=ut===3?c:g;return`${T[ut]}: ${It(W)}`}).join(", ")}}`}function sg(h){return r=>Ku(r,h)}const rg=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:ju},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:nl},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:eg},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:ng},...["int","float"].reduce((h,r)=>[...h,{format:{alpha:!1,mode:"rgb",notation:"func",type:r},stringifier:Jm(r)},{format:{alpha:!0,mode:"rgb",notation:"func",type:r},stringifier:tg(r)},{format:{alpha:!1,mode:"rgb",notation:"object",type:r},stringifier:ig(r)},{format:{alpha:!0,mode:"rgb",notation:"object",type:r},stringifier:sg(r)}],[])];function il(h){return rg.reduce((r,c)=>r||(jm(c.format,h)?c.stringifier:null),null)}const Ir=y("apl");class og{constructor(r,c){this.onValueChange_=this.onValueChange_.bind(this),this.value=c.value,this.value.emitter.on("change",this.onValueChange_),this.element=r.createElement("div"),this.element.classList.add(Ir()),c.viewProps.bindTabIndex(this.element);const g=r.createElement("div");g.classList.add(Ir("b")),this.element.appendChild(g);const T=r.createElement("div");T.classList.add(Ir("c")),g.appendChild(T),this.colorElem_=T;const k=r.createElement("div");k.classList.add(Ir("m")),this.element.appendChild(k),this.markerElem_=k;const W=r.createElement("div");W.classList.add(Ir("p")),this.markerElem_.appendChild(W),this.previewElem_=W,this.update_()}update_(){const r=this.value.rawValue,c=r.getComponents("rgb"),g=new re([c[0],c[1],c[2],0],"rgb"),T=new re([c[0],c[1],c[2],255],"rgb"),k=["to right",So(g),So(T)];this.colorElem_.style.background=`linear-gradient(${k.join(",")})`,this.previewElem_.style.backgroundColor=So(r);const W=Me(c[3],0,1,0,100);this.markerElem_.style.left=`${W}%`}onValueChange_(){this.update_()}}class ag{constructor(r,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.view=new og(r,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Hi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(r,c){if(!r.point)return;const g=r.point.x/r.bounds.width,T=this.value.rawValue,[k,W,ut]=T.getComponents("hsv");this.value.setRawValue(new re([k,W,ut,g],"hsv"),c)}onPointerDown_(r){this.handlePointerEvent_(r.data,{forceEmit:!1,last:!1})}onPointerMove_(r){this.handlePointerEvent_(r.data,{forceEmit:!1,last:!1})}onPointerUp_(r){this.handlePointerEvent_(r.data,{forceEmit:!0,last:!0})}onKeyDown_(r){const c=mn(Xi(!0),Jn(r));if(c===0)return;const g=this.value.rawValue,[T,k,W,ut]=g.getComponents("hsv");this.value.setRawValue(new re([T,k,W,ut+c],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(r){mn(Xi(!0),Jn(r))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const gs=y("coltxt");function lg(h){const r=h.createElement("select"),c=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return r.appendChild(c.reduce((g,T)=>{const k=h.createElement("option");return k.textContent=T.text,k.value=T.value,g.appendChild(k),g},h.createDocumentFragment())),r}class cg{constructor(r,c){this.element=r.createElement("div"),this.element.classList.add(gs());const g=r.createElement("div");g.classList.add(gs("m")),this.modeElem_=lg(r),this.modeElem_.classList.add(gs("ms")),g.appendChild(this.modeSelectElement);const T=r.createElement("div");T.classList.add(gs("mm")),T.appendChild(Wt(r,"dropdown")),g.appendChild(T),this.element.appendChild(g);const k=r.createElement("div");k.classList.add(gs("w")),this.element.appendChild(k),this.textsElem_=k,this.textViews_=c.textViews,this.applyTextViews_(),P(c.colorMode,W=>{this.modeElem_.value=W})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(r){this.textViews_=r,this.applyTextViews_()}applyTextViews_(){K(this.textsElem_);const r=this.element.ownerDocument;this.textViews_.forEach(c=>{const g=r.createElement("div");g.classList.add(gs("c")),g.appendChild(c.element),this.textsElem_.appendChild(g)})}}function ug(h){return Ze(h==="float"?2:0)}function hg(h,r,c){const g=Eo(h,r)[c];return new Ve({min:0,max:g})}function sl(h,r,c){return new Rr(h,{arrayPosition:c===0?"fst":c===3-1?"lst":"mid",baseStep:Xi(!1),parser:r.parser,props:X.fromObject({draggingScale:r.colorType==="float"?.01:1,formatter:ug(r.colorType)}),value:H(0,{constraint:hg(r.colorMode,r.colorType,c)}),viewProps:r.viewProps})}class dg{constructor(r,c){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=c.colorType,this.parser_=c.parser,this.value=c.value,this.viewProps=c.viewProps,this.colorMode=H(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(r),this.view=new cg(r,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(r){const c={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},g=[sl(r,c,0),sl(r,c,1),sl(r,c,2)];return g.forEach((T,k)=>{Cr({primary:this.value,secondary:T.value,forward:W=>W.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[k],backward:(W,ut)=>{const It=this.colorMode.rawValue,qt=W.rawValue.getComponents(It,this.colorType_);return qt[k]=ut.rawValue,new re(Au(Wi(qt),qt[3]),It,this.colorType_)}})}),g}onModeSelectChange_(r){const c=r.currentTarget;this.colorMode.rawValue=c.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const rl=y("hpl");class pg{constructor(r,c){this.onValueChange_=this.onValueChange_.bind(this),this.value=c.value,this.value.emitter.on("change",this.onValueChange_),this.element=r.createElement("div"),this.element.classList.add(rl()),c.viewProps.bindTabIndex(this.element);const g=r.createElement("div");g.classList.add(rl("c")),this.element.appendChild(g);const T=r.createElement("div");T.classList.add(rl("m")),this.element.appendChild(T),this.markerElem_=T,this.update_()}update_(){const r=this.value.rawValue,[c]=r.getComponents("hsv");this.markerElem_.style.backgroundColor=qu(new re([c,100,100],"hsv"));const g=Me(c,0,360,0,100);this.markerElem_.style.left=`${g}%`}onValueChange_(){this.update_()}}class fg{constructor(r,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.view=new pg(r,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Hi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(r,c){if(!r.point)return;const g=Me(ze(r.point.x,0,r.bounds.width),0,r.bounds.width,0,359),T=this.value.rawValue,[,k,W,ut]=T.getComponents("hsv");this.value.setRawValue(new re([g,k,W,ut],"hsv"),c)}onPointerDown_(r){this.handlePointerEvent_(r.data,{forceEmit:!1,last:!1})}onPointerMove_(r){this.handlePointerEvent_(r.data,{forceEmit:!1,last:!1})}onPointerUp_(r){this.handlePointerEvent_(r.data,{forceEmit:!0,last:!0})}onKeyDown_(r){const c=mn(Xi(!1),Jn(r));if(c===0)return;const g=this.value.rawValue,[T,k,W,ut]=g.getComponents("hsv");this.value.setRawValue(new re([T+c,k,W,ut],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(r){mn(Xi(!1),Jn(r))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ol=y("svp"),$u=64;class mg{constructor(r,c){this.onValueChange_=this.onValueChange_.bind(this),this.value=c.value,this.value.emitter.on("change",this.onValueChange_),this.element=r.createElement("div"),this.element.classList.add(ol()),c.viewProps.bindTabIndex(this.element);const g=r.createElement("canvas");g.height=$u,g.width=$u,g.classList.add(ol("c")),this.element.appendChild(g),this.canvasElement=g;const T=r.createElement("div");T.classList.add(ol("m")),this.element.appendChild(T),this.markerElem_=T,this.update_()}update_(){const r=At(this.canvasElement);if(!r)return;const g=this.value.rawValue.getComponents("hsv"),T=this.canvasElement.width,k=this.canvasElement.height,W=r.getImageData(0,0,T,k),ut=W.data;for(let ce=0;ce<k;ce++)for(let ue=0;ue<T;ue++){const ei=Me(ue,0,T,0,100),Nr=Me(ce,0,k,100,0),Ur=Tu(g[0],ei,Nr),bs=(ce*T+ue)*4;ut[bs]=Ur[0],ut[bs+1]=Ur[1],ut[bs+2]=Ur[2],ut[bs+3]=255}r.putImageData(W,0,0);const It=Me(g[1],0,100,0,100);this.markerElem_.style.left=`${It}%`;const qt=Me(g[2],0,100,100,0);this.markerElem_.style.top=`${qt}%`}onValueChange_(){this.update_()}}class gg{constructor(r,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.view=new mg(r,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Hi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(r,c){if(!r.point)return;const g=Me(r.point.x,0,r.bounds.width,0,100),T=Me(r.point.y,0,r.bounds.height,100,0),[k,,,W]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new re([k,g,T,W],"hsv"),c)}onPointerDown_(r){this.handlePointerEvent_(r.data,{forceEmit:!1,last:!1})}onPointerMove_(r){this.handlePointerEvent_(r.data,{forceEmit:!1,last:!1})}onPointerUp_(r){this.handlePointerEvent_(r.data,{forceEmit:!0,last:!0})}onKeyDown_(r){yu(r.key)&&r.preventDefault();const[c,g,T,k]=this.value.rawValue.getComponents("hsv"),W=Xi(!1),ut=mn(W,Jn(r)),It=mn(W,Pr(r));ut===0&&It===0||this.value.setRawValue(new re([c,g+ut,T+It,k],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(r){const c=Xi(!1),g=mn(c,Jn(r)),T=mn(c,Pr(r));g===0&&T===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class _g{constructor(r,c){this.value=c.value,this.viewProps=c.viewProps,this.hPaletteC_=new fg(r,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new gg(r,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=c.supportsAlpha?{palette:new ag(r,{value:this.value,viewProps:this.viewProps}),text:new Rr(r,{parser:Qn,baseStep:.1,props:X.fromObject({draggingScale:.01,formatter:Ze(2)}),value:H(0,{constraint:new Ve({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Cr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:g=>g.rawValue.getComponents()[3],backward:(g,T)=>{const k=g.rawValue.getComponents();return k[3]=T.rawValue,new re(k,g.rawValue.mode)}}),this.textC_=new dg(r,{colorType:c.colorType,parser:Qn,value:this.value,viewProps:this.viewProps}),this.view=new Wm(r,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:c.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const al=y("colsw");class vg{constructor(r,c){this.onValueChange_=this.onValueChange_.bind(this),c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.element=r.createElement("div"),this.element.classList.add(al()),c.viewProps.bindClassModifiers(this.element);const g=r.createElement("div");g.classList.add(al("sw")),this.element.appendChild(g),this.swatchElem_=g;const T=r.createElement("button");T.classList.add(al("b")),c.viewProps.bindDisabled(T),this.element.appendChild(T),this.buttonElement=T,this.update_()}update_(){const r=this.value.rawValue;this.swatchElem_.style.backgroundColor=nl(r)}onValueChange_(){this.update_()}}class xg{constructor(r,c){this.value=c.value,this.viewProps=c.viewProps,this.view=new vg(r,{value:this.value,viewProps:this.viewProps})}}class ll{constructor(r,c){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.foldable_=se.create(c.expanded),this.swatchC_=new xg(r,{value:this.value,viewProps:this.viewProps});const g=this.swatchC_.view.buttonElement;g.addEventListener("blur",this.onButtonBlur_),g.addEventListener("click",this.onButtonClick_),this.textC_=new vo(r,{parser:c.parser,props:X.fromObject({formatter:c.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Um(r,{foldable:this.foldable_,pickerLayout:c.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=c.pickerLayout==="popup"?new hu(r,{viewProps:this.viewProps}):null;const T=new _g(r,{colorType:c.colorType,supportsAlpha:c.supportsAlpha,value:this.value,viewProps:this.viewProps});T.view.allFocusableElements.forEach(k=>{k.addEventListener("blur",this.onPopupChildBlur_),k.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=T,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(T.view.element),Cr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:k=>k.rawValue,backward:(k,W)=>W.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ct(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(r){if(!this.popC_)return;const c=this.view.element,g=r.relatedTarget;(!g||!c.contains(g))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(r){if(!this.popC_)return;const c=this.popC_.view.element,g=ot(r);g&&c.contains(g)||g&&g===this.swatchC_.view.buttonElement&&!Te(c.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(r){this.popC_?r.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&r.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function bg(h,r){return re.isColorObject(h)?re.fromObject(h,r):re.black(r)}function yg(h){return Wi(h.getComponents("rgb")).reduce((r,c)=>r<<8|Math.floor(c)&255,0)}function wg(h){return h.getComponents("rgb").reduce((r,c,g)=>{const T=Math.floor(g===3?c*255:c)&255;return r<<8|T},0)>>>0}function Eg(h){return new re([h>>16&255,h>>8&255,h&255],"rgb")}function Mg(h){return new re([h>>24&255,h>>16&255,h>>8&255,Me(h&255,0,255,0,1)],"rgb")}function Sg(h){return typeof h!="number"?re.black():Eg(h)}function Tg(h){return typeof h!="number"?re.black():Mg(h)}function Ag(h){const r=il(h);return r?(c,g)=>{Lr(c,r(g))}:null}function Cg(h){const r=h?wg:yg;return(c,g)=>{Lr(c,r(g))}}function Pg(h,r,c){const g=r.toRgbaObject(c);h.writeProperty("r",g.r),h.writeProperty("g",g.g),h.writeProperty("b",g.b),h.writeProperty("a",g.a)}function Rg(h,r,c){const g=r.toRgbaObject(c);h.writeProperty("r",g.r),h.writeProperty("g",g.g),h.writeProperty("b",g.b)}function Lg(h,r){return(c,g)=>{h?Pg(c,g,r):Rg(c,g,r)}}function cl(h){var r;return!!((h==null?void 0:h.alpha)||((r=h==null?void 0:h.color)===null||r===void 0?void 0:r.alpha))}function Ig(h){return h?r=>nl(r,"0x"):r=>ju(r,"0x")}function Dg(h){return"color"in h||"view"in h&&h.view==="color"}const Ng={id:"input-color-number",type:"input",accept:(h,r)=>{if(typeof h!="number"||!Dg(r))return null;const c=Ja(r);return c?{initialValue:h,params:c}:null},binding:{reader:h=>cl(h.params)?Tg:Sg,equals:re.equals,writer:h=>Cg(cl(h.params))},controller:h=>{const r=cl(h.params),c="expanded"in h.params?h.params.expanded:void 0,g="picker"in h.params?h.params.picker:void 0;return new ll(h.document,{colorType:"int",expanded:c!=null?c:!1,formatter:Ig(r),parser:el("int"),pickerLayout:g!=null?g:"popup",supportsAlpha:r,value:h.value,viewProps:h.viewProps})}};function Ug(h){return re.isRgbaColorObject(h)}function Og(h){return r=>bg(r,h)}function Fg(h,r){return c=>h?Ku(c,r):Yu(c,r)}const Bg={id:"input-color-object",type:"input",accept:(h,r)=>{if(!re.isColorObject(h))return null;const c=Ja(r);return c?{initialValue:h,params:c}:null},binding:{reader:h=>Og(ji(h.params)),equals:re.equals,writer:h=>Lg(Ug(h.initialValue),ji(h.params))},controller:h=>{var r;const c=re.isRgbaColorObject(h.initialValue),g="expanded"in h.params?h.params.expanded:void 0,T="picker"in h.params?h.params.picker:void 0,k=(r=ji(h.params))!==null&&r!==void 0?r:"int";return new ll(h.document,{colorType:k,expanded:g!=null?g:!1,formatter:Fg(c,k),parser:el(k),pickerLayout:T!=null?T:"popup",supportsAlpha:c,value:h.value,viewProps:h.viewProps})}},kg={id:"input-color-string",type:"input",accept:(h,r)=>{if(typeof h!="string"||"view"in r&&r.view==="text")return null;const c=tl(h,ji(r));if(!c||!il(c))return null;const T=Ja(r);return T?{initialValue:h,params:T}:null},binding:{reader:h=>{var r;return Qm((r=ji(h.params))!==null&&r!==void 0?r:"int")},equals:re.equals,writer:h=>{const r=tl(h.initialValue,ji(h.params));if(!r)throw b.shouldNeverHappen();const c=Ag(r);if(!c)throw b.notBindable();return c}},controller:h=>{const r=tl(h.initialValue,ji(h.params));if(!r)throw b.shouldNeverHappen();const c=il(r);if(!c)throw b.shouldNeverHappen();const g="expanded"in h.params?h.params.expanded:void 0,T="picker"in h.params?h.params.picker:void 0;return new ll(h.document,{colorType:r.type,expanded:g!=null?g:!1,formatter:c,parser:el(r.type),pickerLayout:T!=null?T:"popup",supportsAlpha:r.alpha,value:h.value,viewProps:h.viewProps})}};class bi{constructor(r){this.components=r.components,this.asm_=r.assembly}constrain(r){const c=this.asm_.toComponents(r).map((g,T)=>{var k,W;return(W=(k=this.components[T])===null||k===void 0?void 0:k.constrain(g))!==null&&W!==void 0?W:g});return this.asm_.fromComponents(c)}}const Zu=y("pndtxt");class Vg{constructor(r,c){this.textViews=c.textViews,this.element=r.createElement("div"),this.element.classList.add(Zu()),this.textViews.forEach(g=>{const T=r.createElement("div");T.classList.add(Zu("a")),T.appendChild(g.element),this.element.appendChild(T)})}}function zg(h,r,c){return new Rr(h,{arrayPosition:c===0?"fst":c===r.axes.length-1?"lst":"mid",baseStep:r.axes[c].baseStep,parser:r.parser,props:r.axes[c].textProps,value:H(0,{constraint:r.axes[c].constraint}),viewProps:r.viewProps})}class ul{constructor(r,c){this.value=c.value,this.viewProps=c.viewProps,this.acs_=c.axes.map((g,T)=>zg(r,c,T)),this.acs_.forEach((g,T)=>{Cr({primary:this.value,secondary:g.value,forward:k=>c.assembly.toComponents(k.rawValue)[T],backward:(k,W)=>{const ut=c.assembly.toComponents(k.rawValue);return ut[T]=W.rawValue,c.assembly.fromComponents(ut)}})}),this.view=new Vg(r,{textViews:this.acs_.map(g=>g.view)})}}function Qu(h,r){return"step"in h&&!f(h.step)?new _i(h.step,r):null}function Ju(h){return"max"in h&&!f(h.max)||"min"in h&&!f(h.min)?new Ve({max:h.max,min:h.min}):null}function Hg(h,r){const c=[],g=Qu(h,r);g&&c.push(g);const T=Ju(h);T&&c.push(T);const k=Za(h.options);return k&&c.push(k),new Le(c)}function Gg(h){const r=h?We(h,Ve):null;return r?[r.minValue,r.maxValue]:[void 0,void 0]}function Wg(h){const[r,c]=Gg(h);return[r!=null?r:0,c!=null?c:100]}const Xg={id:"input-number",type:"input",accept:(h,r)=>{if(typeof h!="number")return null;const c=vt,g=$(r,{format:c.optional.function,max:c.optional.number,min:c.optional.number,options:c.optional.custom(bo),step:c.optional.number});return g?{initialValue:h,params:g}:null},binding:{reader:h=>vu,constraint:h=>Hg(h.params,h.initialValue),writer:h=>Lr},controller:h=>{var r,c;const g=h.value,T=h.constraint;if(T&&We(T,Zn))return new Sr(h.document,{props:X.fromObject({options:(r=Qa(T))!==null&&r!==void 0?r:[]}),value:g,viewProps:h.viewProps});const k=(c="format"in h.params?h.params.format:void 0)!==null&&c!==void 0?c:Ze(yo(T,g.rawValue));if(T&&We(T,Ve)){const[W,ut]=Wg(T);return new $a(h.document,{baseStep:fs(T),parser:Qn,sliderProps:X.fromObject({maxValue:ut,minValue:W}),textProps:X.fromObject({draggingScale:ms(T,g.rawValue),formatter:k}),value:g,viewProps:h.viewProps})}return new Rr(h.document,{baseStep:fs(T),parser:Qn,props:X.fromObject({draggingScale:ms(T,g.rawValue),formatter:k}),value:g,viewProps:h.viewProps})}};class yi{constructor(r=0,c=0){this.x=r,this.y=c}getComponents(){return[this.x,this.y]}static isObject(r){if(f(r))return!1;const c=r.x,g=r.y;return!(typeof c!="number"||typeof g!="number")}static equals(r,c){return r.x===c.x&&r.y===c.y}toObject(){return{x:this.x,y:this.y}}}const th={toComponents:h=>h.getComponents(),fromComponents:h=>new yi(...h)},_s=y("p2d");class jg{constructor(r,c){this.element=r.createElement("div"),this.element.classList.add(_s()),c.viewProps.bindClassModifiers(this.element),P(c.expanded,V(this.element,_s(void 0,"expanded")));const g=r.createElement("div");g.classList.add(_s("h")),this.element.appendChild(g);const T=r.createElement("button");T.classList.add(_s("b")),T.appendChild(Wt(r,"p2dpad")),c.viewProps.bindDisabled(T),g.appendChild(T),this.buttonElement=T;const k=r.createElement("div");if(k.classList.add(_s("t")),g.appendChild(k),this.textElement=k,c.pickerLayout==="inline"){const W=r.createElement("div");W.classList.add(_s("p")),this.element.appendChild(W),this.pickerElement=W}else this.pickerElement=null}}const wi=y("p2dp");class qg{constructor(r,c){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=c.invertsY,this.maxValue_=c.maxValue,this.element=r.createElement("div"),this.element.classList.add(wi()),c.layout==="popup"&&this.element.classList.add(wi(void 0,"p"));const g=r.createElement("div");g.classList.add(wi("p")),c.viewProps.bindTabIndex(g),this.element.appendChild(g),this.padElement=g;const T=r.createElementNS(Xt,"svg");T.classList.add(wi("g")),this.padElement.appendChild(T),this.svgElem_=T;const k=r.createElementNS(Xt,"line");k.classList.add(wi("ax")),k.setAttributeNS(null,"x1","0"),k.setAttributeNS(null,"y1","50%"),k.setAttributeNS(null,"x2","100%"),k.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(k);const W=r.createElementNS(Xt,"line");W.classList.add(wi("ax")),W.setAttributeNS(null,"x1","50%"),W.setAttributeNS(null,"y1","0"),W.setAttributeNS(null,"x2","50%"),W.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(W);const ut=r.createElementNS(Xt,"line");ut.classList.add(wi("l")),ut.setAttributeNS(null,"x1","50%"),ut.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ut),this.lineElem_=ut;const It=r.createElement("div");It.classList.add(wi("m")),this.padElement.appendChild(It),this.markerElem_=It,c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[r,c]=this.value.rawValue.getComponents(),g=this.maxValue_,T=Me(r,-g,+g,0,100),k=Me(c,-g,+g,0,100),W=this.invertsY_?100-k:k;this.lineElem_.setAttributeNS(null,"x2",`${T}%`),this.lineElem_.setAttributeNS(null,"y2",`${W}%`),this.markerElem_.style.left=`${T}%`,this.markerElem_.style.top=`${W}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function eh(h,r,c){return[mn(r[0],Jn(h)),mn(r[1],Pr(h))*(c?1:-1)]}class Yg{constructor(r,c){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.baseSteps_=c.baseSteps,this.maxValue_=c.maxValue,this.invertsY_=c.invertsY,this.view=new qg(r,{invertsY:this.invertsY_,layout:c.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Hi(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(r,c){if(!r.point)return;const g=this.maxValue_,T=Me(r.point.x,0,r.bounds.width,-g,+g),k=Me(this.invertsY_?r.bounds.height-r.point.y:r.point.y,0,r.bounds.height,-g,+g);this.value.setRawValue(new yi(T,k),c)}onPointerDown_(r){this.handlePointerEvent_(r.data,{forceEmit:!1,last:!1})}onPointerMove_(r){this.handlePointerEvent_(r.data,{forceEmit:!1,last:!1})}onPointerUp_(r){this.handlePointerEvent_(r.data,{forceEmit:!0,last:!0})}onPadKeyDown_(r){yu(r.key)&&r.preventDefault();const[c,g]=eh(r,this.baseSteps_,this.invertsY_);c===0&&g===0||this.value.setRawValue(new yi(this.value.rawValue.x+c,this.value.rawValue.y+g),{forceEmit:!1,last:!1})}onPadKeyUp_(r){const[c,g]=eh(r,this.baseSteps_,this.invertsY_);c===0&&g===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Kg{constructor(r,c){var g,T;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.foldable_=se.create(c.expanded),this.popC_=c.pickerLayout==="popup"?new hu(r,{viewProps:this.viewProps}):null;const k=new Yg(r,{baseSteps:[c.axes[0].baseStep,c.axes[1].baseStep],invertsY:c.invertsY,layout:c.pickerLayout,maxValue:c.maxValue,value:this.value,viewProps:this.viewProps});k.view.allFocusableElements.forEach(W=>{W.addEventListener("blur",this.onPopupChildBlur_),W.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=k,this.textC_=new ul(r,{assembly:th,axes:c.axes,parser:c.parser,value:this.value,viewProps:this.viewProps}),this.view=new jg(r,{expanded:this.foldable_.value("expanded"),pickerLayout:c.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(g=this.view.buttonElement)===null||g===void 0||g.addEventListener("blur",this.onPadButtonBlur_),(T=this.view.buttonElement)===null||T===void 0||T.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Cr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:W=>W.rawValue,backward:(W,ut)=>ut.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ct(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(r){if(!this.popC_)return;const c=this.view.element,g=r.relatedTarget;(!g||!c.contains(g))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(r){if(!this.popC_)return;const c=this.popC_.view.element,g=ot(r);g&&c.contains(g)||g&&g===this.view.buttonElement&&!Te(c.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(r){this.popC_?r.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&r.key==="Escape"&&this.view.buttonElement.focus()}}function $g(h){return yi.isObject(h)?new yi(h.x,h.y):new yi}function Zg(h,r){h.writeProperty("x",r.x),h.writeProperty("y",r.y)}function ti(h,r){if(!h)return;const c=[],g=Qu(h,r);g&&c.push(g);const T=Ju(h);return T&&c.push(T),new Le(c)}function Qg(h,r){return new bi({assembly:th,components:[ti("x"in h?h.x:void 0,r.x),ti("y"in h?h.y:void 0,r.y)]})}function nh(h,r){var c,g;const T=h&&We(h,Ve);if(T)return Math.max(Math.abs((c=T.minValue)!==null&&c!==void 0?c:0),Math.abs((g=T.maxValue)!==null&&g!==void 0?g:0));const k=fs(h);return Math.max(Math.abs(k)*10,Math.abs(r)*10)}function Jg(h,r){const c=r instanceof bi?r.components[0]:void 0,g=r instanceof bi?r.components[1]:void 0,T=nh(c,h.x),k=nh(g,h.y);return Math.max(T,k)}function ih(h,r){return{baseStep:fs(r),constraint:r,textProps:X.fromObject({draggingScale:ms(r,h),formatter:Ze(yo(r,h))})}}function t_(h){if(!("y"in h))return!1;const r=h.y;return r&&"inverted"in r?!!r.inverted:!1}const e_={id:"input-point2d",type:"input",accept:(h,r)=>{if(!yi.isObject(h))return null;const c=vt,g=$(r,{expanded:c.optional.boolean,picker:c.optional.custom(Mu),x:c.optional.custom(vi),y:c.optional.object({inverted:c.optional.boolean,max:c.optional.number,min:c.optional.number,step:c.optional.number})});return g?{initialValue:h,params:g}:null},binding:{reader:h=>$g,constraint:h=>Qg(h.params,h.initialValue),equals:yi.equals,writer:h=>Zg},controller:h=>{const r=h.document,c=h.value,g=h.constraint;if(!(g instanceof bi))throw b.shouldNeverHappen();const T="expanded"in h.params?h.params.expanded:void 0,k="picker"in h.params?h.params.picker:void 0;return new Kg(r,{axes:[ih(c.rawValue.x,g.components[0]),ih(c.rawValue.y,g.components[1])],expanded:T!=null?T:!1,invertsY:t_(h.params),maxValue:Jg(c.rawValue,g),parser:Qn,pickerLayout:k!=null?k:"popup",value:c,viewProps:h.viewProps})}};class vs{constructor(r=0,c=0,g=0){this.x=r,this.y=c,this.z=g}getComponents(){return[this.x,this.y,this.z]}static isObject(r){if(f(r))return!1;const c=r.x,g=r.y,T=r.z;return!(typeof c!="number"||typeof g!="number"||typeof T!="number")}static equals(r,c){return r.x===c.x&&r.y===c.y&&r.z===c.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const sh={toComponents:h=>h.getComponents(),fromComponents:h=>new vs(...h)};function n_(h){return vs.isObject(h)?new vs(h.x,h.y,h.z):new vs}function i_(h,r){h.writeProperty("x",r.x),h.writeProperty("y",r.y),h.writeProperty("z",r.z)}function s_(h,r){return new bi({assembly:sh,components:[ti("x"in h?h.x:void 0,r.x),ti("y"in h?h.y:void 0,r.y),ti("z"in h?h.z:void 0,r.z)]})}function hl(h,r){return{baseStep:fs(r),constraint:r,textProps:X.fromObject({draggingScale:ms(r,h),formatter:Ze(yo(r,h))})}}const r_={id:"input-point3d",type:"input",accept:(h,r)=>{if(!vs.isObject(h))return null;const c=vt,g=$(r,{x:c.optional.custom(vi),y:c.optional.custom(vi),z:c.optional.custom(vi)});return g?{initialValue:h,params:g}:null},binding:{reader:h=>n_,constraint:h=>s_(h.params,h.initialValue),equals:vs.equals,writer:h=>i_},controller:h=>{const r=h.value,c=h.constraint;if(!(c instanceof bi))throw b.shouldNeverHappen();return new ul(h.document,{assembly:sh,axes:[hl(r.rawValue.x,c.components[0]),hl(r.rawValue.y,c.components[1]),hl(r.rawValue.z,c.components[2])],parser:Qn,value:r,viewProps:h.viewProps})}};class xs{constructor(r=0,c=0,g=0,T=0){this.x=r,this.y=c,this.z=g,this.w=T}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(r){if(f(r))return!1;const c=r.x,g=r.y,T=r.z,k=r.w;return!(typeof c!="number"||typeof g!="number"||typeof T!="number"||typeof k!="number")}static equals(r,c){return r.x===c.x&&r.y===c.y&&r.z===c.z&&r.w===c.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const rh={toComponents:h=>h.getComponents(),fromComponents:h=>new xs(...h)};function o_(h){return xs.isObject(h)?new xs(h.x,h.y,h.z,h.w):new xs}function a_(h,r){h.writeProperty("x",r.x),h.writeProperty("y",r.y),h.writeProperty("z",r.z),h.writeProperty("w",r.w)}function l_(h,r){return new bi({assembly:rh,components:[ti("x"in h?h.x:void 0,r.x),ti("y"in h?h.y:void 0,r.y),ti("z"in h?h.z:void 0,r.z),ti("w"in h?h.w:void 0,r.w)]})}function c_(h,r){return{baseStep:fs(r),constraint:r,textProps:X.fromObject({draggingScale:ms(r,h),formatter:Ze(yo(r,h))})}}const u_={id:"input-point4d",type:"input",accept:(h,r)=>{if(!xs.isObject(h))return null;const c=vt,g=$(r,{x:c.optional.custom(vi),y:c.optional.custom(vi),z:c.optional.custom(vi),w:c.optional.custom(vi)});return g?{initialValue:h,params:g}:null},binding:{reader:h=>o_,constraint:h=>l_(h.params,h.initialValue),equals:xs.equals,writer:h=>a_},controller:h=>{const r=h.value,c=h.constraint;if(!(c instanceof bi))throw b.shouldNeverHappen();return new ul(h.document,{assembly:rh,axes:r.rawValue.getComponents().map((g,T)=>c_(g,c.components[T])),parser:Qn,value:r,viewProps:h.viewProps})}};function h_(h){const r=[],c=Za(h.options);return c&&r.push(c),new Le(r)}const d_={id:"input-string",type:"input",accept:(h,r)=>{if(typeof h!="string")return null;const g=$(r,{options:vt.optional.custom(bo)});return g?{initialValue:h,params:g}:null},binding:{reader:h=>xu,constraint:h=>h_(h.params),writer:h=>Lr},controller:h=>{var r;const c=h.document,g=h.value,T=h.constraint;return T&&We(T,Zn)?new Sr(c,{props:X.fromObject({options:(r=Qa(T))!==null&&r!==void 0?r:[]}),value:g,viewProps:h.viewProps}):new vo(c,{parser:k=>k,props:X.fromObject({formatter:ja}),value:g,viewProps:h.viewProps})}},Dr={monitor:{defaultInterval:200,defaultLineCount:3}},oh=y("mll");class p_{constructor(r,c){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=c.formatter,this.element=r.createElement("div"),this.element.classList.add(oh()),c.viewProps.bindClassModifiers(this.element);const g=r.createElement("textarea");g.classList.add(oh("i")),g.style.height=`calc(var(--bld-us) * ${c.lineCount})`,g.readOnly=!0,c.viewProps.bindDisabled(g),this.element.appendChild(g),this.textareaElem_=g,c.value.emitter.on("change",this.onValueUpdate_),this.value=c.value,this.update_()}update_(){const r=this.textareaElem_,c=r.scrollTop===r.scrollHeight-r.clientHeight,g=[];this.value.rawValue.forEach(T=>{T!==void 0&&g.push(this.formatter_(T))}),r.textContent=g.join(`
`),c&&(r.scrollTop=r.scrollHeight)}onValueUpdate_(){this.update_()}}class dl{constructor(r,c){this.value=c.value,this.viewProps=c.viewProps,this.view=new p_(r,{formatter:c.formatter,lineCount:c.lineCount,value:this.value,viewProps:this.viewProps})}}const ah=y("sgl");class f_{constructor(r,c){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=c.formatter,this.element=r.createElement("div"),this.element.classList.add(ah()),c.viewProps.bindClassModifiers(this.element);const g=r.createElement("input");g.classList.add(ah("i")),g.readOnly=!0,g.type="text",c.viewProps.bindDisabled(g),this.element.appendChild(g),this.inputElement=g,c.value.emitter.on("change",this.onValueUpdate_),this.value=c.value,this.update_()}update_(){const r=this.value.rawValue,c=r[r.length-1];this.inputElement.value=c!==void 0?this.formatter_(c):""}onValueUpdate_(){this.update_()}}class pl{constructor(r,c){this.value=c.value,this.viewProps=c.viewProps,this.view=new f_(r,{formatter:c.formatter,value:this.value,viewProps:this.viewProps})}}const m_={id:"monitor-bool",type:"monitor",accept:(h,r)=>{if(typeof h!="boolean")return null;const g=$(r,{lineCount:vt.optional.number});return g?{initialValue:h,params:g}:null},binding:{reader:h=>pu},controller:h=>{var r;return h.value.rawValue.length===1?new pl(h.document,{formatter:fu,value:h.value,viewProps:h.viewProps}):new dl(h.document,{formatter:fu,lineCount:(r=h.params.lineCount)!==null&&r!==void 0?r:Dr.monitor.defaultLineCount,value:h.value,viewProps:h.viewProps})}},Ei=y("grl");class g_{constructor(r,c){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=r.createElement("div"),this.element.classList.add(Ei()),c.viewProps.bindClassModifiers(this.element),this.formatter_=c.formatter,this.props_=c.props,this.cursor_=c.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const g=r.createElementNS(Xt,"svg");g.classList.add(Ei("g")),g.style.height=`calc(var(--bld-us) * ${c.lineCount})`,this.element.appendChild(g),this.svgElem_=g;const T=r.createElementNS(Xt,"polyline");this.svgElem_.appendChild(T),this.lineElem_=T;const k=r.createElement("div");k.classList.add(Ei("t"),y("tt")()),this.element.appendChild(k),this.tooltipElem_=k,c.value.emitter.on("change",this.onValueUpdate_),this.value=c.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const r=this.svgElem_.getBoundingClientRect(),c=this.value.rawValue.length-1,g=this.props_.get("minValue"),T=this.props_.get("maxValue"),k=[];this.value.rawValue.forEach((ce,ue)=>{if(ce===void 0)return;const ei=Me(ue,0,c,0,r.width),Nr=Me(ce,g,T,r.height,0);k.push([ei,Nr].join(","))}),this.lineElem_.setAttributeNS(null,"points",k.join(" "));const W=this.tooltipElem_,ut=this.value.rawValue[this.cursor_.rawValue];if(ut===void 0){W.classList.remove(Ei("t","a"));return}const It=Me(this.cursor_.rawValue,0,c,0,r.width),qt=Me(ut,g,T,r.height,0);W.style.left=`${It}px`,W.style.top=`${qt}px`,W.textContent=`${this.formatter_(ut)}`,W.classList.contains(Ei("t","a"))||(W.classList.add(Ei("t","a"),Ei("t","in")),kt(W),W.classList.remove(Ei("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class __{constructor(r,c){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=c.props,this.value=c.value,this.viewProps=c.viewProps,this.cursor_=H(-1),this.view=new g_(r,{cursor:this.cursor_,formatter:c.formatter,lineCount:c.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!Te(r))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const g=new Hi(this.view.element);g.emitter.on("down",this.onGraphPointerDown_),g.emitter.on("move",this.onGraphPointerMove_),g.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(r){const c=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Me(r.offsetX,0,c.width,0,this.value.rawValue.length))}onGraphPointerDown_(r){this.onGraphPointerMove_(r)}onGraphPointerMove_(r){if(!r.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Me(r.data.point.x,0,r.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function fl(h){return"format"in h&&!f(h.format)?h.format:Ze(2)}function v_(h){var r;return h.value.rawValue.length===1?new pl(h.document,{formatter:fl(h.params),value:h.value,viewProps:h.viewProps}):new dl(h.document,{formatter:fl(h.params),lineCount:(r=h.params.lineCount)!==null&&r!==void 0?r:Dr.monitor.defaultLineCount,value:h.value,viewProps:h.viewProps})}function x_(h){var r,c,g;return new __(h.document,{formatter:fl(h.params),lineCount:(r=h.params.lineCount)!==null&&r!==void 0?r:Dr.monitor.defaultLineCount,props:X.fromObject({maxValue:(c="max"in h.params?h.params.max:null)!==null&&c!==void 0?c:100,minValue:(g="min"in h.params?h.params.min:null)!==null&&g!==void 0?g:0}),value:h.value,viewProps:h.viewProps})}function lh(h){return"view"in h&&h.view==="graph"}const b_={id:"monitor-number",type:"monitor",accept:(h,r)=>{if(typeof h!="number")return null;const c=vt,g=$(r,{format:c.optional.function,lineCount:c.optional.number,max:c.optional.number,min:c.optional.number,view:c.optional.string});return g?{initialValue:h,params:g}:null},binding:{defaultBufferSize:h=>lh(h)?64:1,reader:h=>vu},controller:h=>lh(h.params)?x_(h):v_(h)},y_={id:"monitor-string",type:"monitor",accept:(h,r)=>{if(typeof h!="string")return null;const c=vt,g=$(r,{lineCount:c.optional.number,multiline:c.optional.boolean});return g?{initialValue:h,params:g}:null},binding:{reader:h=>xu},controller:h=>{var r;const c=h.value;return c.rawValue.length>1||"multiline"in h.params&&h.params.multiline?new dl(h.document,{formatter:ja,lineCount:(r=h.params.lineCount)!==null&&r!==void 0?r:Dr.monitor.defaultLineCount,value:c,viewProps:h.viewProps}):new pl(h.document,{formatter:ja,value:c,viewProps:h.viewProps})}};class w_{constructor(r){this.onValueChange_=this.onValueChange_.bind(this),this.reader=r.reader,this.writer=r.writer,this.emitter=new _,this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.target=r.target,this.read()}read(){const r=this.target.read();r!==void 0&&(this.value.rawValue=this.reader(r))}write_(r){this.writer(this.target,r)}onValueChange_(r){this.write_(r.rawValue),this.emitter.emit("change",{options:r.options,rawValue:r.rawValue,sender:this})}}function E_(h,r){const c=h.accept(r.target.read(),r.params);if(f(c))return null;const g=vt,T={target:r.target,initialValue:c.initialValue,params:c.params},k=h.binding.reader(T),W=h.binding.constraint?h.binding.constraint(T):void 0,ut=H(k(c.initialValue),{constraint:W,equals:h.binding.equals}),It=new w_({reader:k,target:r.target,value:ut,writer:h.binding.writer(T)}),qt=g.optional.boolean(r.params.disabled).value,ce=g.optional.boolean(r.params.hidden).value,ue=h.controller({constraint:W,document:r.document,initialValue:c.initialValue,params:c.params,value:It.value,viewProps:Ut.create({disabled:qt,hidden:ce})}),ei=g.optional.string(r.params.label).value;return new it(r.document,{binding:It,blade:rt(),props:X.fromObject({label:ei!=null?ei:r.target.key}),valueController:ue})}class M_{constructor(r){this.onTick_=this.onTick_.bind(this),this.reader_=r.reader,this.target=r.target,this.emitter=new _,this.value=r.value,this.ticker=r.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const r=this.target.read();if(r===void 0)return;const c=this.value.rawValue,g=this.reader_(r);this.value.rawValue=Mm(c,g),this.emitter.emit("update",{rawValue:g,sender:this})}onTick_(r){this.read()}}function S_(h,r){return r===0?new zi:new Er(h,r!=null?r:Dr.monitor.defaultInterval)}function T_(h,r){var c,g,T;const k=vt,W=h.accept(r.target.read(),r.params);if(f(W))return null;const ut={target:r.target,initialValue:W.initialValue,params:W.params},It=h.binding.reader(ut),qt=(g=(c=k.optional.number(r.params.bufferSize).value)!==null&&c!==void 0?c:h.binding.defaultBufferSize&&h.binding.defaultBufferSize(W.params))!==null&&g!==void 0?g:1,ce=k.optional.number(r.params.interval).value,ue=new M_({reader:It,target:r.target,ticker:S_(r.document,ce),value:wm(qt)}),ei=k.optional.boolean(r.params.disabled).value,Nr=k.optional.boolean(r.params.hidden).value,Ur=h.controller({document:r.document,params:W.params,value:ue.value,viewProps:Ut.create({disabled:ei,hidden:Nr})}),bs=(T=k.optional.string(r.params.label).value)!==null&&T!==void 0?T:r.target.key;return new wt(r.document,{binding:ue,blade:rt(),props:X.fromObject({label:bs}),valueController:Ur})}class A_{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(r){r.type==="blade"?this.pluginsMap_.blades.unshift(r):r.type==="input"?this.pluginsMap_.inputs.unshift(r):r.type==="monitor"&&this.pluginsMap_.monitors.unshift(r)}createInput(r,c,g){const T=c.read();if(f(T))throw new b({context:{key:c.key},type:"nomatchingcontroller"});const k=this.pluginsMap_.inputs.reduce((W,ut)=>W!=null?W:E_(ut,{document:r,target:c,params:g}),null);if(k)return k;throw new b({context:{key:c.key},type:"nomatchingcontroller"})}createMonitor(r,c,g){const T=this.pluginsMap_.monitors.reduce((k,W)=>k!=null?k:T_(W,{document:r,params:g,target:c}),null);if(T)return T;throw new b({context:{key:c.key},type:"nomatchingcontroller"})}createBlade(r,c){const g=this.pluginsMap_.blades.reduce((T,k)=>T!=null?T:go(k,{document:r,params:c}),null);if(!g)throw new b({type:"nomatchingview",context:{params:c}});return g}createBladeApi(r){if(r instanceof it)return new U(r);if(r instanceof wt)return new at(r);if(r instanceof gi)return new le(r,this);const c=this.pluginsMap_.blades.reduce((g,T)=>g!=null?g:T.api({controller:r,pool:this}),null);if(!c)throw b.shouldNeverHappen();return c}}function C_(){const h=new A_;return[e_,r_,u_,d_,Xg,kg,Bg,Ng,Nm,m_,y_,b_,Ft,Ga,yt,Hn].forEach(r=>{h.register(r)}),h}class ch extends i{constructor(r){super(r),this.emitter_=new _,this.controller_.valueController.value.emitter.on("change",c=>{this.emitter_.emit("change",{event:new a(this,c.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(r){this.controller_.props.set("label",r)}get options(){return this.controller_.valueController.props.get("options")}set options(r){this.controller_.valueController.props.set("options",r)}get value(){return this.controller_.valueController.value.rawValue}set value(r){this.controller_.valueController.value.rawValue=r}on(r,c){const g=c.bind(this);return this.emitter_.on(r,T=>{g(T.event)}),this}}class uh extends i{constructor(r){super(r),this.emitter_=new _,this.controller_.valueController.value.emitter.on("change",c=>{this.emitter_.emit("change",{event:new a(this,c.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(r){this.controller_.props.set("label",r)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(r){this.controller_.valueController.sliderController.props.set("maxValue",r)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(r){this.controller_.valueController.sliderController.props.set("minValue",r)}get value(){return this.controller_.valueController.value.rawValue}set value(r){this.controller_.valueController.value.rawValue=r}on(r,c){const g=c.bind(this);return this.emitter_.on(r,T=>{g(T.event)}),this}}class hh extends i{constructor(r){super(r),this.emitter_=new _,this.controller_.valueController.value.emitter.on("change",c=>{this.emitter_.emit("change",{event:new a(this,c.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(r){this.controller_.props.set("label",r)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(r){this.controller_.valueController.props.set("formatter",r)}get value(){return this.controller_.valueController.value.rawValue}set value(r){this.controller_.valueController.value.rawValue=r}on(r,c){const g=c.bind(this);return this.emitter_.on(r,T=>{g(T.event)}),this}}const P_=function(){return{id:"list",type:"blade",accept(h){const r=vt,c=$(h,{options:r.required.custom(bo),value:r.required.raw,view:r.required.constant("list"),label:r.optional.string});return c?{params:c}:null},controller(h){const r=new Sr(h.document,{props:X.fromObject({options:Su(h.params.options)}),value:H(h.params.value),viewProps:h.viewProps});return new I(h.document,{blade:h.blade,props:X.fromObject({label:h.params.label}),valueController:r})},api(h){return!(h.controller instanceof I)||!(h.controller.valueController instanceof Sr)?null:new ch(h.controller)}}}();function R_(h){return h.reduce((r,c)=>Object.assign(r,{[c.presetKey]:c.read()}),{})}function L_(h,r){h.forEach(c=>{const g=r[c.presetKey];g!==void 0&&c.write(g)})}class I_ extends Ie{constructor(r,c){super(r,c)}get element(){return this.controller_.view.element}importPreset(r){const c=this.controller_.rackController.rack.find(it).map(g=>g.binding.target);L_(c,r),this.refresh()}exportPreset(){const r=this.controller_.rackController.rack.find(it).map(c=>c.binding.target);return R_(r)}refresh(){this.controller_.rackController.rack.find(it).forEach(r=>{r.binding.read()}),this.controller_.rackController.rack.find(wt).forEach(r=>{r.binding.read()})}}class D_ extends yr{constructor(r,c){super(r,{expanded:c.expanded,blade:c.blade,props:c.props,root:!0,viewProps:c.viewProps})}}const N_={id:"slider",type:"blade",accept(h){const r=vt,c=$(h,{max:r.required.number,min:r.required.number,view:r.required.constant("slider"),format:r.optional.function,label:r.optional.string,value:r.optional.number});return c?{params:c}:null},controller(h){var r,c;const g=(r=h.params.value)!==null&&r!==void 0?r:0,T=new $a(h.document,{baseStep:1,parser:Qn,sliderProps:X.fromObject({maxValue:h.params.max,minValue:h.params.min}),textProps:X.fromObject({draggingScale:ms(void 0,g),formatter:(c=h.params.format)!==null&&c!==void 0?c:bm}),value:H(g),viewProps:h.viewProps});return new I(h.document,{blade:h.blade,props:X.fromObject({label:h.params.label}),valueController:T})},api(h){return!(h.controller instanceof I)||!(h.controller.valueController instanceof $a)?null:new uh(h.controller)}},U_=function(){return{id:"text",type:"blade",accept(h){const r=vt,c=$(h,{parse:r.required.function,value:r.required.raw,view:r.required.constant("text"),format:r.optional.function,label:r.optional.string});return c?{params:c}:null},controller(h){var r;const c=new vo(h.document,{parser:h.params.parse,props:X.fromObject({formatter:(r=h.params.format)!==null&&r!==void 0?r:g=>String(g)}),value:H(h.params.value),viewProps:h.viewProps});return new I(h.document,{blade:h.blade,props:X.fromObject({label:h.params.label}),valueController:c})},api(h){return!(h.controller instanceof I)||!(h.controller.valueController instanceof vo)?null:new hh(h.controller)}}}();function O_(h){const r=h.createElement("div");return r.classList.add(y("dfw")()),h.body&&h.body.appendChild(r),r}function dh(h,r,c){if(h.querySelector(`style[data-tp-style=${r}]`))return;const g=h.createElement("style");g.dataset.tpStyle=r,g.textContent=c,h.head.appendChild(g)}class F_ extends I_{constructor(r){var c,g;const T=r!=null?r:{},k=(c=T.document)!==null&&c!==void 0?c:zt(),W=C_(),ut=new D_(k,{expanded:T.expanded,blade:rt(),props:X.fromObject({title:T.title}),viewProps:Ut.create()});super(ut,W),this.pool_=W,this.containerElem_=(g=T.container)!==null&&g!==void 0?g:O_(k),this.containerElem_.appendChild(this.element),this.doc_=k,this.usesDefaultWrapper_=!T.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw b.alreadyDisposed();return this.doc_}dispose(){const r=this.containerElem_;if(!r)throw b.alreadyDisposed();if(this.usesDefaultWrapper_){const c=r.parentElement;c&&c.removeChild(r)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(r){("plugin"in r?[r.plugin]:"plugins"in r?r.plugins:[]).forEach(g=>{this.pool_.register(g),this.embedPluginStyle_(g)})}embedPluginStyle_(r){r.css&&dh(this.document,`plugin-${r.id}`,r.css)}setUpDefaultPlugins_(){dh(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(r=>{this.embedPluginStyle_(r)}),this.registerPlugin({plugins:[N_,P_,Hn,U_]})}}const B_=new n("3.1.0");e.BladeApi=i,e.ButtonApi=x,e.FolderApi=Ie,e.InputBindingApi=U,e.ListApi=ch,e.MonitorBindingApi=at,e.Pane=F_,e.SeparatorApi=q,e.SliderApi=uh,e.TabApi=De,e.TabPageApi=tn,e.TextApi=hh,e.TpChangeEvent=a,e.VERSION=B_,Object.defineProperty(e,"__esModule",{value:!0})})})(Bc,Bc.exports);var kc={d:(s,t)=>{for(var e in t)kc.o(t,e)&&!kc.o(s,e)&&Object.defineProperty(s,e,{enumerable:!0,get:t[e]})},o:(s,t)=>Object.prototype.hasOwnProperty.call(s,t)},Of={};kc.d(Of,{Q:()=>eT});var dc=function(s,t,e,n){return new(e||(e=Promise))(function(i,o){function a(d){try{u(n.next(d))}catch(p){o(p)}}function l(d){try{u(n.throw(d))}catch(p){o(p)}}function u(d){var p;d.done?i(d.value):(p=d.value,p instanceof e?p:new e(function(f){f(p)})).then(a,l)}u((n=n.apply(s,t||[])).next())})};const Ff=Symbol("Comlink.proxy"),QS=Symbol("Comlink.endpoint"),JS=Symbol("Comlink.releaseProxy"),Vc=Symbol("Comlink.thrown"),Bp=s=>typeof s=="object"&&s!==null||typeof s=="function",Bf=new Map([["proxy",{canHandle:s=>Bp(s)&&s[Ff],serialize(s){const{port1:t,port2:e}=new MessageChannel;return kf(s,t),[e,[e]]},deserialize:s=>(s.start(),zf(s))}],["throw",{canHandle:s=>Bp(s)&&Vc in s,serialize({value:s}){let t;return t=s instanceof Error?{isError:!0,value:{message:s.message,name:s.name,stack:s.stack}}:{isError:!1,value:s},[t,[]]},deserialize(s){throw s.isError?Object.assign(new Error(s.value.message),s.value):s.value}}]]);function kf(s,t=self){t.addEventListener("message",function e(n){if(!n||!n.data)return;const{id:i,type:o,path:a}=Object.assign({path:[]},n.data),l=(n.data.argumentList||[]).map(ss);let u;try{const d=a.slice(0,-1).reduce((f,m)=>f[m],s),p=a.reduce((f,m)=>f[m],s);switch(o){case"GET":u=p;break;case"SET":d[a.slice(-1)[0]]=ss(n.data.value),u=!0;break;case"APPLY":u=p.apply(d,l);break;case"CONSTRUCT":u=Ea(new p(...l));break;case"ENDPOINT":{const{port1:f,port2:m}=new MessageChannel;kf(s,m),u=function(v,b){return Hf.set(v,b),v}(f,[f])}break;case"RELEASE":u=void 0;break;default:return}}catch(d){u={value:d,[Vc]:0}}Promise.resolve(u).catch(d=>({value:d,[Vc]:0})).then(d=>{const[p,f]=cu(d);t.postMessage(Object.assign(Object.assign({},p),{id:i}),f),o==="RELEASE"&&(t.removeEventListener("message",e),Vf(t))})}),t.start&&t.start()}function Vf(s){(function(t){return t.constructor.name==="MessagePort"})(s)&&s.close()}function zf(s,t){return zc(s,[],t)}function va(s){if(s)throw new Error("Proxy has been released and is not useable")}function zc(s,t=[],e=function(){}){let n=!1;const i=new Proxy(e,{get(o,a){if(va(n),a===JS)return()=>$s(s,{type:"RELEASE",path:t.map(l=>l.toString())}).then(()=>{Vf(s),n=!0});if(a==="then"){if(t.length===0)return{then:()=>i};const l=$s(s,{type:"GET",path:t.map(u=>u.toString())}).then(ss);return l.then.bind(l)}return zc(s,[...t,a])},set(o,a,l){va(n);const[u,d]=cu(l);return $s(s,{type:"SET",path:[...t,a].map(p=>p.toString()),value:u},d).then(ss)},apply(o,a,l){va(n);const u=t[t.length-1];if(u===QS)return $s(s,{type:"ENDPOINT"}).then(ss);if(u==="bind")return zc(s,t.slice(0,-1));const[d,p]=kp(l);return $s(s,{type:"APPLY",path:t.map(f=>f.toString()),argumentList:d},p).then(ss)},construct(o,a){va(n);const[l,u]=kp(a);return $s(s,{type:"CONSTRUCT",path:t.map(d=>d.toString()),argumentList:l},u).then(ss)}});return i}function kp(s){const t=s.map(cu);return[t.map(n=>n[0]),(e=t.map(n=>n[1]),Array.prototype.concat.apply([],e))];var e}const Hf=new WeakMap;function Ea(s){return Object.assign(s,{[Ff]:!0})}function cu(s){for(const[t,e]of Bf)if(e.canHandle(s)){const[n,i]=e.serialize(s);return[{type:"HANDLER",name:t,value:n},i]}return[{type:"RAW",value:s},Hf.get(s)||[]]}function ss(s){switch(s.type){case"HANDLER":return Bf.get(s.name).deserialize(s.value);case"RAW":return s.value}}function $s(s,t,e){return new Promise(n=>{const i=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");s.addEventListener("message",function o(a){a.data&&a.data.id&&a.data.id===i&&(s.removeEventListener("message",o),n(a.data))}),s.start&&s.start(),s.postMessage(Object.assign({id:i},t),e)})}class tT extends class{}{init(t,e,n,i){if(!this.api){if(!i)throw new Error("workerFilePath is required");(()=>{var o,a,l,u;o=this,a=void 0,u=function*(){const d=yield fetch(i).then(m=>m.blob()),p=URL.createObjectURL(d),f=new Worker(p,{type:"module"});this.api=yield new(zf(f))(Ea(()=>{t(),URL.revokeObjectURL(p)}),Ea((m,v)=>m==="xatlas_web.wasm"?n:m+v),Ea(e))},new((l=void 0)||(l=Promise))(function(d,p){function f(b){try{v(u.next(b))}catch(w){p(w)}}function m(b){try{v(u.throw(b))}catch(w){p(w)}}function v(b){var w;b.done?d(b.value):(w=b.value,w instanceof l?w:new l(function(x){x(w)})).then(f,m)}v((u=u.apply(o,a||[])).next())})})()}}}class eT extends class{constructor(t,e={resolution:2048},n={},i=!1,o=!1,a=!1){this.THREE=t,this.packOptions=e,this.chartOptions=n,this.useNormals=i,this.timeUnwrap=o,this.logProgress=a,this._libraryLoaded=!1,this._isUnwrapping=!1,this.xAtlas=this._createXAtlas()}loadLibrary(t,e,n){return dc(this,void 0,void 0,function*(){if(!this._libraryLoaded){for(yield new Promise((i,o)=>{try{this.xAtlas.init(()=>{i()},t,e,n)}catch(a){o(a)}});!this.xAtlas.api||!(yield this.xAtlas.api.loaded);)yield new Promise(i=>setTimeout(i,100));this._libraryLoaded=!0}})}packAtlas(t,e="uv2",n="uv"){return dc(this,void 0,void 0,function*(){if(!this._libraryLoaded)return console.warn("xatlas-three: library not loaded"),[];if(!t)return[];if(t.length<1)return[];const i=this.chartOptions.useInputMeshUvs;for(;this._isUnwrapping;)console.log("xatlas-three: unwrapping another mesh, waiting 100 ms"),yield new Promise(d=>setTimeout(d,100));this._isUnwrapping=!0,yield this.xAtlas.api.setProgressLogging(this.logProgress),yield this.xAtlas.api.createAtlas();let o=[],a="";for(let d of t){let{uuid:p,index:f,attributes:m}=d;const v=d.userData.worldScale||1;o.push(p),f&&m.position&&m.position.itemSize===3?(a="Mesh"+o.length+" added to atlas: "+p,this.timeUnwrap&&console.time(a),yield this.xAtlas.api.addMesh(f.array,m.position.array,m.normal?m.normal.array:void 0,m.uv?m.uv.array:void 0,p,this.useNormals,i,v),this.timeUnwrap&&console.timeEnd(a)):console.warn("xatlas-three: Geometry not supported: ",d)}a="Generated atlas with "+o.length+" meshes",this.timeUnwrap&&console.time(a);let l=yield this.xAtlas.api.generateAtlas(this.chartOptions,this.packOptions,!0);this.timeUnwrap&&console.timeEnd(a);let u=[];for(let d of l){let p=t.find(f=>f.uuid===d.mesh);p?(d.vertex.vertices&&p.setAttribute("position",new this.THREE.BufferAttribute(d.vertex.vertices,3,!1)),d.vertex.normals&&p.setAttribute("normal",new this.THREE.BufferAttribute(d.vertex.normals,3,!0)),d.vertex.coords1&&p.setAttribute(e,new this.THREE.BufferAttribute(d.vertex.coords1,2,!1)),d.vertex.coords&&e!==n&&p.setAttribute(n,new this.THREE.BufferAttribute(d.vertex.coords,2,!1)),d.index&&p.setIndex(new this.THREE.BufferAttribute(d.index,1,!1)),u.push(p)):console.error("xatlas-three: Mesh not found: ",d.mesh)}return yield this.xAtlas.api.destroyAtlas(),this._isUnwrapping=!1,u})}unwrapGeometry(t,e="uv",n="uv2"){return dc(this,void 0,void 0,function*(){return this.packAtlas([t],e,n)})}}{_createXAtlas(){return new tT}}var nT=Of.Q;const Gf=new nT({BufferAttribute:Be});var Wf=(s=>(s[s.AddMesh=0]="AddMesh",s[s.ComputeCharts=1]="ComputeCharts",s[s.PackCharts=2]="PackCharts",s[s.BuildOutputMeshes=3]="BuildOutputMeshes",s))(Wf||{});const iT=async()=>{const s=(t,e)=>{console.log(`\u{1F5FA}\uFE0F XAtlas ${Wf[t]} ${e}%`)};await Gf.loadLibrary(s,"https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js"),console.log("Loaded")},sT=async s=>{const t=s.map(e=>e.geometry);await Gf.packAtlas(t,"uv2","uv")},rT=`
    uniform vec2 offset;
    attribute vec2 uv2;
    varying vec4 vWorldPosition;

    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0) ;

        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0); 
    }
`,oT=`
    varying vec4 vWorldPosition;

    void main() {
        gl_FragColor = vWorldPosition;
    }
`,aT=new kn({vertexShader:rT,fragmentShader:oT,side:un,fog:!1,uniforms:{offset:new Ba(new Tt(0,0))}}),lT=`
    varying vec4 vNormal;
    attribute vec2 uv2;
    uniform vec2 offset;

    void main() {
        vNormal = modelMatrix * vec4(normal, 0.0);

        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`,cT=`
    varying vec4 vWorldPosition; 
    varying vec4 vNormal;

    void main() {
        gl_FragColor = normalize(vNormal);
    }
`,uT=new kn({vertexShader:lT,fragmentShader:cT,side:un,fog:!1,uniforms:{offset:new Ba(new Tt(0,0))}}),hT=[{x:-2,y:-2},{x:2,y:-2},{x:-2,y:2},{x:2,y:2},{x:-1,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:2,y:-1},{x:-2,y:1},{x:2,y:1},{x:-1,y:2},{x:1,y:2},{x:-2,y:0},{x:2,y:0},{x:0,y:-2},{x:0,y:2},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:1,y:1},{x:0,y:-1},{x:0,y:1},{x:0,y:0}],dT=(s,t,e,n=!0)=>{const i=l=>{const u=new pi(e,e,{type:Qe,magFilter:_e,minFilter:_e}),d=new ho(-100,100,-100,100,-100,200);d.updateMatrix();const p=new fe;p.matrixWorldAutoUpdate=!1;for(const f of t){const m=f.clone();m.material=l,p.add(m)}if(s.autoClear=!1,s.setRenderTarget(u),s.setClearColor(0,0),s.clear(),n)for(const f of hT)l.uniforms.offset.value.x=f.x*(1/e),l.uniforms.offset.value.y=f.y*(1/e),s.render(p,d);return l.uniforms.offset.value.x=0,l.uniforms.offset.value.y=0,s.render(p,d),s.setRenderTarget(null),u.texture},o=i(aT),a=i(uT);return{positionTexture:o,normalTexture:a}};class pT extends kn{constructor(t){const e=new DS;e.updateFrom(t.bvh),super({transparent:!0,uniforms:{bvh:{value:e},positions:{value:t.positions},normals:{value:t.normals},invModelMatrix:{value:t.invModelMatrix},casts:{value:t.casts},lightPosition:{value:t.lightPosition},lightSize:{value:t.lightSize},opacity:{value:1},sampleIndex:{value:0},directLightEnabled:{value:t.directLightEnabled},indirectLightEnabled:{value:t.indirectLightEnabled},ambientLightEnabled:{value:t.ambientLightEnabled},ambientDistance:{value:t.ambientDistance}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    gl_Position = vec4( position, 1.0 );
                    vUv = uv;
                }
            `,fragmentShader:`
                precision highp isampler2D;
                precision highp usampler2D;
                ${kS}
                ${VS}
                
                uniform mat4 invModelMatrix;
                uniform sampler2D positions;
                uniform sampler2D normals;
                uniform int casts;
                
                uniform vec3 lightPosition;
                uniform float lightSize;
                uniform int sampleIndex;
        
                uniform bool directLightEnabled;
                uniform bool indirectLightEnabled;
                uniform bool ambientLightEnabled;
                uniform float ambientDistance;
                uniform float opacity;
        
                uniform BVH bvh;
                varying vec2 vUv;
        
                uvec4 s0;
                void rng_initialize(vec2 p, int frame) {
                    // white noise seed
                    s0 = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );
                }
        
                void pcg4d( inout uvec4 v ) {
                    v = v * 1664525u + 1013904223u;
                    v.x += v.y * v.w;
                    v.y += v.z * v.x;
                    v.z += v.x * v.y;
                    v.w += v.y * v.z;
                    v = v ^ ( v >> 16u );
                    v.x += v.y*v.w;
                    v.y += v.z*v.x;
                    v.z += v.x*v.y;
                    v.w += v.y*v.z;
                }
                
                float rand() {
                    pcg4d(s0);
                    return float( s0.x ) / float( 0xffffffffu );
                }
                vec2 rand2() {
                    pcg4d( s0 );
                    return vec2( s0.xy ) / float(0xffffffffu);
                }
                vec3 rand3() {
                    pcg4d(s0);
                    return vec3( s0.xyz ) / float( 0xffffffffu );
                }
                vec4 rand4() {
                    pcg4d(s0);
                    return vec4(s0)/float(0xffffffffu);
                }
        
                vec3 randomSpherePoint(vec3 rand) {
                    float ang1 = (rand.x + 1.0) * 3.1415; // [-1..1) -> [0..2*PI)
                    float u = rand.y; // [-1..1), cos and acos(2v-1) cancel each other out, so we arrive at [-1..1)
                    float u2 = u * u;
                    float sqrt1MinusU2 = sqrt(1.0 - u2);
                    float x = sqrt1MinusU2 * cos(ang1);
                    float y = sqrt1MinusU2 * sin(ang1);
                    float z = u;
                    return vec3(x, y, z);
                  }
        
                  vec3 getHemisphereSample( vec3 n, vec2 uv ) {
                    // https://www.rorydriscoll.com/2009/01/07/better-sampling/
                    // https://graphics.pixar.com/library/OrthonormalB/paper.pdf
                    float sign = n.z == 0.0 ? 1.0 : sign( n.z );
                    float a = - 1.0 / ( sign + n.z );
                    float b = n.x * n.y * a;
                    vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
                    vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );
                    float r = sqrt( uv.x );
                    float theta = 2.0 * 3.1415 * uv.y;
                    float x = r * cos( theta );
                    float y = r * sin( theta );
                    return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;
                }
        
                void main() {
                    vec4 position = texture2D(positions, vUv);
                    vec4 normal = texture2D(normals, vUv);
                    
                    rng_initialize( gl_FragCoord.xy, sampleIndex );
                    
                    vec3 rayOrigin = vec3(position.r, position.g, position.b);
                    vec3 rayDirection = vec3(normal.r, normal.g, normal.b);
        
                    rayOrigin += rayDirection * 0.001;
                    
                    uvec4 faceIndices = uvec4( 0u );
                    vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
                    vec3 barycoord = vec3( 0.0 );
                    float side = 1.0;
                    float dist = 0.0;
        
                    vec3 totalIndirectLight = vec3(0.0);
                    vec3 totalAO = vec3(0.0);
                    vec3 totalDirectLight = vec3(0.0);
                    
                    if(ambientLightEnabled || indirectLightEnabled) {
                        for ( int i = 0; i < casts; i++ ) {
                            vec3 newDirection = getHemisphereSample(normal.xyz, rand4().xy);
                            
                            if(dot(rayDirection, newDirection) > 0.0) {
                                bool hit = bvhIntersectFirstHit( bvh, rayOrigin, newDirection, faceIndices, faceNormal, barycoord, side, dist );
        
                                if(!hit) {
                                    totalIndirectLight.r += 1.0;
                                    totalIndirectLight.g += 1.0;
                                    totalIndirectLight.b += 1.0;
                                }
        
                                if(!hit || dist > ambientDistance) {
                                    totalAO.r += 1.0;
                                    totalAO.g += 1.0;
                                    totalAO.b += 1.0;
                                }
                            }
                        }
                    }
                    
                    if(directLightEnabled) {
                        for ( int i = 0; i < casts; i++ ) {
                            vec3 newDirection = lightPosition - (rayOrigin + randomSpherePoint(rand3() * 0.05) * lightSize);
                            
                            newDirection = normalize(newDirection);
                            bool hit = bvhIntersectFirstHit( bvh, rayOrigin, newDirection, faceIndices, faceNormal, barycoord, side, dist );
                            
                            if(!hit) {
                                totalDirectLight.r += 1.0;
                                totalDirectLight.g += 1.0;
                                totalDirectLight.b += 1.0;
                            }
                        }
                    }
                    
                    vec4 adverageDirectLight = vec4(totalDirectLight / float(casts), 1.0);
                    vec4 adverageAO = vec4(totalAO / float(casts), 1.0);
                    vec4 adverageIndirectLight = vec4(totalIndirectLight / float(casts), 1.0);
        
                    float multiplier = directLightEnabled && indirectLightEnabled ? 0.5 : 1.0;
        
                    vec4 finalColor = vec4(0.0);
        
                    if(directLightEnabled) {
                        finalColor += adverageDirectLight * multiplier;
                    }
        
                    if(indirectLightEnabled) {
                        finalColor += adverageIndirectLight * multiplier;
                    }
        
                    if(ambientLightEnabled) {
                        if(!directLightEnabled && !indirectLightEnabled) {
                            finalColor = adverageAO;
                        } else {
                            finalColor *= adverageAO;
                        }
                    }
                    
                    finalColor.a = opacity;
        
                    gl_FragColor = finalColor;
                }
            `})}}const fT=(s,t,e,n,i)=>{const o=new pT({bvh:n,invModelMatrix:new Gt().identity(),positions:t,normals:e,casts:i.casts,lightPosition:i.lightPosition,lightSize:i.lightSize,opacity:1,sampleIndex:0,directLightEnabled:i.directLightEnabled,indirectLightEnabled:i.indirectLightEnabled,ambientLightEnabled:i.ambientLightEnabled,ambientDistance:i.ambientDistance}),a=new pi(i.resolution,i.resolution,{type:Qe,minFilter:yv,magFilter:je,generateMipmaps:!0});s.setRenderTarget(a),s.setClearColor(16711680,0),s.clear();const l=new _t(new ds(2,2),o),u=new ho;let d=0;const p=()=>(s.setRenderTarget(a),o.uniforms.sampleIndex.value=d,o.uniforms.opacity.value=d==0?1:1/d,s.render(l,u),s.setRenderTarget(null),d++,d);return s.setRenderTarget(null),{renderTexture:a,render:p}},mT=s=>jE(s.map(t=>{const e=new _t(t.geometry.clone(),t.material);return e.geometry.deleteAttribute("color"),e.geometry.applyMatrix4(t.matrixWorld),e.geometry})),gT={["level_blockout.glb"]:"level_blockout.glb"},_T={Standard:"standard",Positions:"positions",Normals:"normals","UV2 Debug":"uv",Lightmap:"lightmap",Beauty:"beauty"},vT={LinearFilter:"linear",Nearest:"nearest"};class xT{constructor(t){this.currentModelMeshs=[],this.options={model:"level_blockout",renderMode:"beauty",lightMapSize:1024,casts:1,filterMode:"linear",directLightEnabled:!0,indirectLightEnabled:!0,ambientLightEnabled:!0,ambientDistance:.3,debugTextures:!1,pause:!1},this.uvDebugTexture=t,this.scene=new aE,this.scene.background=new Kt(7649791),this.camera=new cn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,10,10),this.renderer=new vf({antialias:!0}),this.renderer.outputColorSpace=Pe,this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.controls=new HS(this.camera,this.renderer.domElement),this.directionalLight=new Sf(16777215,1),this.lightDummy=new fe,this.lightDummy.position.set(15,30,8),this.lightTranformController=new GS(this.camera,this.renderer.domElement),this.lightTranformController.addEventListener("dragging-changed",e=>{this.controls.enabled=!e.value}),this.lightTranformController.attach(this.lightDummy),this.scene.add(this.lightDummy),this.scene.add(this.lightTranformController),this.pane=new Bc.exports.Pane,this.pane.addInput(this.options,"model",{options:gT}).on("change",()=>this.onMapChange()),this.pane.addInput(this.options,"renderMode",{options:_T}).on("change",()=>this.onRenderModeChange()),this.pane.addInput(this.options,"lightMapSize",{max:4096,min:128,step:128}),this.pane.addInput(this.options,"casts",{max:4,min:1,step:1}),this.pane.addInput(this.options,"directLightEnabled"),this.pane.addInput(this.options,"indirectLightEnabled"),this.pane.addInput(this.options,"ambientLightEnabled"),this.pane.addInput(this.options,"ambientDistance",{max:2,min:.01}),this.pane.addInput(this.options,"debugTextures").on("change",()=>this.onRenderModeChange()),this.pane.addInput(this.options,"filterMode",{options:vT}).on("change",()=>this.onRenderModeChange()),this.pane.addButton({title:"Reset"}).on("click",()=>{this.options.pause=!1,this.pane.refresh(),this.generateLightmap(),setTimeout(()=>{this.lightmapper.render()},0)}),this.pane.addInput(this.options,"pause"),this.initialSetup()}updateSize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}async initialSetup(){await this.onMapChange()}async onMapChange(){this.currentModel&&this.scene.remove(this.currentModel),this.camera.position.set(0,10,10),this.currentModelMeshs=[],this.lightmapper=null;const t=await CM(this.options.model);t.scene.traverse(e=>{e.isMesh&&(e.material._originalMap=e.material.map,this.currentModelMeshs.push(e))}),this.currentModel=t.scene,this.scene.add(t.scene),await this.updateAtlasTextures(),this.update(),await this.generateLightmap(),this.lightmapper.render()}async updateAtlasTextures(){await sT(this.currentModelMeshs)}async generateLightmap(){const t=this.options.lightMapSize,e=dT(this.renderer,this.currentModelMeshs,t,!0);this.positionTexture=e.positionTexture,this.normalTexture=e.normalTexture,this.update();const n=mT(this.currentModelMeshs),i=new lu(n),o={resolution:t,casts:this.options.casts,filterMode:this.options.filterMode=="linear"?je:_e,lightPosition:this.lightDummy.position,lightSize:3,ambientDistance:this.options.ambientDistance,ambientLightEnabled:this.options.ambientLightEnabled,directLightEnabled:this.options.directLightEnabled,indirectLightEnabled:this.options.indirectLightEnabled};this.lightmapper=await fT(this.renderer,e.positionTexture,e.normalTexture,i,o),this.lightmapTexture=this.lightmapper.renderTexture,this.onRenderModeChange(),setTimeout(()=>{this.options.pause=!0,this.pane.refresh()},2e3)}createDebugTexture(t,e){const n=new _t(new ds(20,20),new jn({map:t,side:un}));return n.position.copy(e),n.scale.set(.5,.5,.5),this.scene.add(n),n}onDebugTexturesChange(){this.debugPosition&&this.scene.remove(this.debugPosition),this.debugNormals&&this.scene.remove(this.debugNormals),this.debugLightmap&&this.scene.remove(this.debugLightmap),this.options.debugTextures&&(this.debugPosition=this.createDebugTexture(this.positionTexture,new D(0,10,0)),this.debugNormals=this.createDebugTexture(this.normalTexture,new D(12,10,0)),this.debugLightmap=this.createDebugTexture(this.lightmapTexture.texture,new D(24,10,0)))}onRenderModeChange(){this.currentModel.traverse(t=>{t.isMesh&&(t.material.map=null,this.options.renderMode=="standard"&&(t.material.lightMap=null,t.material.map=t.material._originalMap),this.options.renderMode=="positions"&&(t.material.lightMap=this.positionTexture,t.material.lightMap.channel=2),this.options.renderMode=="normals"&&(t.material.lightMap=this.normalTexture,t.material.lightMap.channel=2),this.options.renderMode=="uv"&&(t.material.lightMap=this.uvDebugTexture,t.material.lightMap.channel=2),this.options.renderMode=="lightmap"&&(t.material.lightMap=this.lightmapTexture.texture,t.material.lightMap.channel=2),this.options.renderMode=="beauty"&&(t.material.lightMap=this.lightmapTexture.texture,t.material.lightMap.channel=2,t.material.map=t.material._originalMap),t.material.lightMap&&(t.material.lightMap.needsUpdate=!0,t.material.lightMap.channel=2),t.material.lightMapIntensity=1,t.material.needsUpdate=!0)}),this.options.renderMode=="standard"?this.scene.add(this.directionalLight):this.scene.remove(this.directionalLight),this.onDebugTexturesChange()}update(){requestAnimationFrame(()=>this.update()),this.lightmapper&&!this.options.pause&&this.lightmapper.render(),this.controls.update(),this.renderer.render(this.scene,this.camera)}}(async()=>{await iT();const s=await AM("uv_map.jpg"),t=new xT(s);window.addEventListener("resize",()=>{t.updateSize()})})();
