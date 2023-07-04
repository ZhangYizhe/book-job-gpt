(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ac(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const fe={},rs=[],gt=()=>{},sm=()=>!1,rm=/^on[^a-z]/,zi=t=>rm.test(t),cc=t=>t.startsWith("onUpdate:"),De=Object.assign,uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},im=Object.prototype.hasOwnProperty,ee=(t,e)=>im.call(t,e),U=Array.isArray,is=t=>Dr(t)==="[object Map]",As=t=>Dr(t)==="[object Set]",$u=t=>Dr(t)==="[object Date]",Y=t=>typeof t=="function",Se=t=>typeof t=="string",rr=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Qh=t=>he(t)&&Y(t.then)&&Y(t.catch),Yh=Object.prototype.toString,Dr=t=>Yh.call(t),om=t=>Dr(t).slice(8,-1),Xh=t=>Dr(t)==="[object Object]",lc=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ui=ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ki=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},am=/-(\w)/g,Nt=Ki(t=>t.replace(am,(e,n)=>n?n.toUpperCase():"")),cm=/\B([A-Z])/g,Hn=Ki(t=>t.replace(cm,"-$1").toLowerCase()),Gi=Ki(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lo=Ki(t=>t?`on${Gi(t)}`:""),ir=(t,e)=>!Object.is(t,e),li=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ei=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vu;const fa=()=>Vu||(Vu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hc(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Se(s)?fm(s):hc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Se(t))return t;if(he(t))return t}}const um=/;(?![^(]*\))/g,lm=/:([^]+)/,hm=/\/\*[^]*?\*\//g;function fm(t){const e={};return t.replace(hm,"").split(um).forEach(n=>{if(n){const s=n.split(lm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fc(t){let e="";if(Se(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=fc(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pm=ac(dm);function Jh(t){return!!t||t===""}function gm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Mn(t[s],e[s]);return n}function Mn(t,e){if(t===e)return!0;let n=$u(t),s=$u(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=rr(t),s=rr(e),n||s)return t===e;if(n=U(t),s=U(e),n||s)return n&&s?gm(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Mn(t[o],e[o]))return!1}}return String(t)===String(e)}function dc(t,e){return t.findIndex(n=>Mn(n,e))}const fS=t=>Se(t)?t:t==null?"":U(t)||he(t)&&(t.toString===Yh||!Y(t.toString))?JSON.stringify(t,Zh,2):String(t),Zh=(t,e)=>e&&e.__v_isRef?Zh(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:As(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!U(e)&&!Xh(e)?String(e):e;let ft;class mm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ft;try{return ft=this,e()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ym(t,e=ft){e&&e.active&&e.effects.push(t)}function vm(){return ft}const pc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ef=t=>(t.w&hn)>0,tf=t=>(t.n&hn)>0,wm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=hn},Em=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ef(r)&&!tf(r)?r.delete(t):e[n++]=r,r.w&=~hn,r.n&=~hn}e.length=n}},da=new WeakMap;let js=0,hn=1;const pa=30;let dt;const Nn=Symbol(""),ga=Symbol("");class gc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ym(this,s)}run(){if(!this.active)return this.fn();let e=dt,n=rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dt,dt=this,rn=!0,hn=1<<++js,js<=pa?wm(this):Bu(this),this.fn()}finally{js<=pa&&Em(this),hn=1<<--js,dt=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dt===this?this.deferStop=!0:this.active&&(Bu(this),this.onStop&&this.onStop(),this.active=!1)}}function Bu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let rn=!0;const nf=[];function Ds(){nf.push(rn),rn=!1}function xs(){const t=nf.pop();rn=t===void 0?!0:t}function et(t,e,n){if(rn&&dt){let s=da.get(t);s||da.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=pc()),sf(r)}}function sf(t,e){let n=!1;js<=pa?tf(t)||(t.n|=hn,n=!ef(t)):n=!t.has(dt),n&&(t.add(dt),dt.deps.push(t))}function qt(t,e,n,s,r,i){const o=da.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?lc(n)&&a.push(o.get("length")):(a.push(o.get(Nn)),is(t)&&a.push(o.get(ga)));break;case"delete":U(t)||(a.push(o.get(Nn)),is(t)&&a.push(o.get(ga)));break;case"set":is(t)&&a.push(o.get(Nn));break}if(a.length===1)a[0]&&ma(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);ma(pc(c))}}function ma(t,e){const n=U(t)?t:[...t];for(const s of n)s.computed&&Uu(s);for(const s of n)s.computed||Uu(s)}function Uu(t,e){(t!==dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Tm=ac("__proto__,__v_isRef,__isVue"),rf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rr)),Im=mc(),bm=mc(!1,!0),_m=mc(!0),ju=Sm();function Sm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let i=0,o=this.length;i<o;i++)et(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ne)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ds();const s=ne(this)[e].apply(this,n);return xs(),s}}),t}function Cm(t){const e=ne(this);return et(e,"has",t),e.hasOwnProperty(t)}function mc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?jm:lf:e?uf:cf).get(s))return s;const o=U(s);if(!t){if(o&&ee(ju,r))return Reflect.get(ju,r,i);if(r==="hasOwnProperty")return Cm}const a=Reflect.get(s,r,i);return(rr(r)?rf.has(r):Tm(r))||(t||et(s,"get",r),e)?a:je(a)?o&&lc(r)?a:a.value:he(a)?t?hf(a):Rs(a):a}}const Am=of(),Dm=of(!0);function of(t=!1){return function(n,s,r,i){let o=n[s];if(ds(o)&&je(o)&&!je(r))return!1;if(!t&&(!Ti(r)&&!ds(r)&&(o=ne(o),r=ne(r)),!U(n)&&je(o)&&!je(r)))return o.value=r,!0;const a=U(n)&&lc(s)?Number(s)<n.length:ee(n,s),c=Reflect.set(n,s,r,i);return n===ne(i)&&(a?ir(r,o)&&qt(n,"set",s,r):qt(n,"add",s,r)),c}}function xm(t,e){const n=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&qt(t,"delete",e,void 0),s}function Rm(t,e){const n=Reflect.has(t,e);return(!rr(e)||!rf.has(e))&&et(t,"has",e),n}function km(t){return et(t,"iterate",U(t)?"length":Nn),Reflect.ownKeys(t)}const af={get:Im,set:Am,deleteProperty:xm,has:Rm,ownKeys:km},Nm={get:_m,set(t,e){return!0},deleteProperty(t,e){return!0}},Om=De({},af,{get:bm,set:Dm}),yc=t=>t,Wi=t=>Reflect.getPrototypeOf(t);function Kr(t,e,n=!1,s=!1){t=t.__v_raw;const r=ne(t),i=ne(e);n||(e!==i&&et(r,"get",e),et(r,"get",i));const{has:o}=Wi(r),a=s?yc:n?Ec:or;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Gr(t,e=!1){const n=this.__v_raw,s=ne(n),r=ne(t);return e||(t!==r&&et(s,"has",t),et(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Wr(t,e=!1){return t=t.__v_raw,!e&&et(ne(t),"iterate",Nn),Reflect.get(t,"size",t)}function qu(t){t=ne(t);const e=ne(this);return Wi(e).has.call(e,t)||(e.add(t),qt(e,"add",t,t)),this}function Hu(t,e){e=ne(e);const n=ne(this),{has:s,get:r}=Wi(n);let i=s.call(n,t);i||(t=ne(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?ir(e,o)&&qt(n,"set",t,e):qt(n,"add",t,e),this}function zu(t){const e=ne(this),{has:n,get:s}=Wi(e);let r=n.call(e,t);r||(t=ne(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&qt(e,"delete",t,void 0),i}function Ku(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&qt(t,"clear",void 0,void 0),n}function Qr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ne(o),c=e?yc:t?Ec:or;return!t&&et(a,"iterate",Nn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Yr(t,e,n){return function(...s){const r=this.__v_raw,i=ne(r),o=is(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?yc:e?Ec:or;return!e&&et(i,"iterate",c?ga:Nn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function Pm(){const t={get(i){return Kr(this,i)},get size(){return Wr(this)},has:Gr,add:qu,set:Hu,delete:zu,clear:Ku,forEach:Qr(!1,!1)},e={get(i){return Kr(this,i,!1,!0)},get size(){return Wr(this)},has:Gr,add:qu,set:Hu,delete:zu,clear:Ku,forEach:Qr(!1,!0)},n={get(i){return Kr(this,i,!0)},get size(){return Wr(this,!0)},has(i){return Gr.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:Qr(!0,!1)},s={get(i){return Kr(this,i,!0,!0)},get size(){return Wr(this,!0)},has(i){return Gr.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:Qr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yr(i,!1,!1),n[i]=Yr(i,!0,!1),e[i]=Yr(i,!1,!0),s[i]=Yr(i,!0,!0)}),[t,n,e,s]}const[Mm,Lm,Fm,$m]=Pm();function vc(t,e){const n=e?t?$m:Fm:t?Lm:Mm;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ee(n,r)&&r in s?n:s,r,i)}const Vm={get:vc(!1,!1)},Bm={get:vc(!1,!0)},Um={get:vc(!0,!1)},cf=new WeakMap,uf=new WeakMap,lf=new WeakMap,jm=new WeakMap;function qm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hm(t){return t.__v_skip||!Object.isExtensible(t)?0:qm(om(t))}function Rs(t){return ds(t)?t:wc(t,!1,af,Vm,cf)}function zm(t){return wc(t,!1,Om,Bm,uf)}function hf(t){return wc(t,!0,Nm,Um,lf)}function wc(t,e,n,s,r){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Hm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function os(t){return ds(t)?os(t.__v_raw):!!(t&&t.__v_isReactive)}function ds(t){return!!(t&&t.__v_isReadonly)}function Ti(t){return!!(t&&t.__v_isShallow)}function ff(t){return os(t)||ds(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function df(t){return wi(t,"__v_skip",!0),t}const or=t=>he(t)?Rs(t):t,Ec=t=>he(t)?hf(t):t;function pf(t){rn&&dt&&(t=ne(t),sf(t.dep||(t.dep=pc())))}function gf(t,e){t=ne(t);const n=t.dep;n&&ma(n)}function je(t){return!!(t&&t.__v_isRef===!0)}function Km(t){return mf(t,!1)}function Gm(t){return mf(t,!0)}function mf(t,e){return je(t)?t:new Wm(t,e)}class Wm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:or(e)}get value(){return pf(this),this._value}set value(e){const n=this.__v_isShallow||Ti(e)||ds(e);e=n?e:ne(e),ir(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:or(e),gf(this))}}function as(t){return je(t)?t.value:t}const Qm={get:(t,e,n)=>as(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return je(r)&&!je(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function yf(t){return os(t)?t:new Proxy(t,Qm)}class Ym{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new gc(e,()=>{this._dirty||(this._dirty=!0,gf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ne(this);return pf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Xm(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=gt):(s=t.get,r=t.set),new Ym(s,r,i||!r,n)}function on(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Qi(i,e,n)}return r}function mt(t,e,n,s){if(Y(t)){const i=on(t,e,n,s);return i&&Qh(i)&&i.catch(o=>{Qi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(mt(t[i],e,n,s));return r}function Qi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){on(c,null,10,[t,o,a]);return}}Jm(t,n,r,s)}function Jm(t,e,n,s=!0){console.error(t)}let ar=!1,ya=!1;const Be=[];let St=0;const cs=[];let $t=null,Sn=0;const vf=Promise.resolve();let Tc=null;function wf(t){const e=Tc||vf;return t?e.then(this?t.bind(this):t):e}function Zm(t){let e=St+1,n=Be.length;for(;e<n;){const s=e+n>>>1;cr(Be[s])<t?e=s+1:n=s}return e}function Ic(t){(!Be.length||!Be.includes(t,ar&&t.allowRecurse?St+1:St))&&(t.id==null?Be.push(t):Be.splice(Zm(t.id),0,t),Ef())}function Ef(){!ar&&!ya&&(ya=!0,Tc=vf.then(If))}function ey(t){const e=Be.indexOf(t);e>St&&Be.splice(e,1)}function ty(t){U(t)?cs.push(...t):(!$t||!$t.includes(t,t.allowRecurse?Sn+1:Sn))&&cs.push(t),Ef()}function Gu(t,e=ar?St+1:0){for(;e<Be.length;e++){const n=Be[e];n&&n.pre&&(Be.splice(e,1),e--,n())}}function Tf(t){if(cs.length){const e=[...new Set(cs)];if(cs.length=0,$t){$t.push(...e);return}for($t=e,$t.sort((n,s)=>cr(n)-cr(s)),Sn=0;Sn<$t.length;Sn++)$t[Sn]();$t=null,Sn=0}}const cr=t=>t.id==null?1/0:t.id,ny=(t,e)=>{const n=cr(t)-cr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function If(t){ya=!1,ar=!0,Be.sort(ny);const e=gt;try{for(St=0;St<Be.length;St++){const n=Be[St];n&&n.active!==!1&&on(n,null,14)}}finally{St=0,Be.length=0,Tf(),ar=!1,Tc=null,(Be.length||cs.length)&&If()}}function sy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||fe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||fe;f&&(r=n.map(g=>Se(g)?g.trim():g)),h&&(r=n.map(Ei))}let a,c=s[a=Lo(e)]||s[a=Lo(Nt(e))];!c&&i&&(c=s[a=Lo(Hn(e))]),c&&mt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mt(u,t,6,r)}}function bf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=bf(u,e,!0);l&&(a=!0,De(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(he(t)&&s.set(t,null),null):(U(i)?i.forEach(c=>o[c]=null):De(o,i),he(t)&&s.set(t,o),o)}function Yi(t,e){return!t||!zi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,Hn(e))||ee(t,e))}let ut=null,Xi=null;function Ii(t){const e=ut;return ut=t,Xi=t&&t.type.__scopeId||null,e}function dS(t){Xi=t}function pS(){Xi=null}function ry(t,e=ut,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&rl(-1);const i=Ii(e);let o;try{o=t(...r)}finally{Ii(i),s._d&&rl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Fo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:E,inheritAttrs:I}=t;let C,k;const O=Ii(t);try{if(n.shapeFlag&4){const M=r||s;C=_t(l.call(M,M,h,i,g,f,E)),k=c}else{const M=e;C=_t(M.length>1?M(i,{attrs:c,slots:a,emit:u}):M(i,null)),k=e.props?c:iy(c)}}catch(M){Qs.length=0,Qi(M,t,1),C=Je(Ln)}let H=C;if(k&&I!==!1){const M=Object.keys(k),{shapeFlag:ve}=H;M.length&&ve&7&&(o&&M.some(cc)&&(k=oy(k,o)),H=ps(H,k))}return n.dirs&&(H=ps(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),C=H,Ii(O),C}const iy=t=>{let e;for(const n in t)(n==="class"||n==="style"||zi(n))&&((e||(e={}))[n]=t[n]);return e},oy=(t,e)=>{const n={};for(const s in t)(!cc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ay(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Wu(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!Yi(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wu(s,o,u):!0:!!o;return!1}function Wu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Yi(n,i))return!0}return!1}function cy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const uy=t=>t.__isSuspense;function ly(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):ty(t)}const Xr={};function hi(t,e,n){return _f(t,e,n)}function _f(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=fe){var a;const c=vm()===((a=Pe)==null?void 0:a.scope)?Pe:null;let u,l=!1,h=!1;if(je(t)?(u=()=>t.value,l=Ti(t)):os(t)?(u=()=>t,s=!0):U(t)?(h=!0,l=t.some(M=>os(M)||Ti(M)),u=()=>t.map(M=>{if(je(M))return M.value;if(os(M))return An(M);if(Y(M))return on(M,c,2)})):Y(t)?e?u=()=>on(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return f&&f(),mt(t,c,3,[g])}:u=gt,e&&s){const M=u;u=()=>An(M())}let f,g=M=>{f=O.onStop=()=>{on(M,c,4)}},E;if(lr)if(g=gt,e?n&&mt(e,c,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const M=iv();E=M.__watcherHandles||(M.__watcherHandles=[])}else return gt;let I=h?new Array(t.length).fill(Xr):Xr;const C=()=>{if(O.active)if(e){const M=O.run();(s||l||(h?M.some((ve,Ie)=>ir(ve,I[Ie])):ir(M,I)))&&(f&&f(),mt(e,c,3,[M,I===Xr?void 0:h&&I[0]===Xr?[]:I,g]),I=M)}else O.run()};C.allowRecurse=!!e;let k;r==="sync"?k=C:r==="post"?k=()=>Ye(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),k=()=>Ic(C));const O=new gc(u,k);e?n?C():I=O.run():r==="post"?Ye(O.run.bind(O),c&&c.suspense):O.run();const H=()=>{O.stop(),c&&c.scope&&uc(c.scope.effects,O)};return E&&E.push(H),H}function hy(t,e,n){const s=this.proxy,r=Se(t)?t.includes(".")?Sf(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Pe;gs(this);const a=_f(r,i.bind(s),n);return o?gs(o):On(),a}function Sf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function An(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))An(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)An(t[n],e);else if(As(t)||is(t))t.forEach(n=>{An(n,e)});else if(Xh(t))for(const n in t)An(t[n],e);return t}function gS(t,e){const n=ut;if(n===null)return t;const s=to(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=fe]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&An(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function In(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ds(),mt(c,n,8,[t.el,a,t,e]),xs())}}function Cf(t,e){return Y(t)?(()=>De({name:t.name},e,{setup:t}))():t}const fi=t=>!!t.type.__asyncLoader,Af=t=>t.type.__isKeepAlive;function fy(t,e){Df(t,"a",e)}function dy(t,e){Df(t,"da",e)}function Df(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ji(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Af(r.parent.vnode)&&py(s,e,n,r),r=r.parent}}function py(t,e,n,s){const r=Ji(e,t,s,!0);xf(()=>{uc(s[e],r)},n)}function Ji(t,e,n=Pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ds(),gs(n);const a=mt(e,n,t,o);return On(),xs(),a});return s?r.unshift(i):r.push(i),i}}const Yt=t=>(e,n=Pe)=>(!lr||t==="sp")&&Ji(t,(...s)=>e(...s),n),gy=Yt("bm"),my=Yt("m"),yy=Yt("bu"),vy=Yt("u"),wy=Yt("bum"),xf=Yt("um"),Ey=Yt("sp"),Ty=Yt("rtg"),Iy=Yt("rtc");function by(t,e=Pe){Ji("ec",t,e)}const Rf="components";function _y(t,e){return Cy(Rf,t,!0,e)||t}const Sy=Symbol.for("v-ndc");function Cy(t,e,n=!0,s=!1){const r=ut||Pe;if(r){const i=r.type;if(t===Rf){const a=nv(i,!1);if(a&&(a===e||a===Nt(e)||a===Gi(Nt(e))))return i}const o=Qu(r[t]||i[t],e)||Qu(r.appContext[t],e);return!o&&s?i:o}}function Qu(t,e){return t&&(t[e]||t[Nt(e)]||t[Gi(Nt(e))])}function mS(t,e,n,s){let r;const i=n&&n[s];if(U(t)||Se(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(he(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const va=t=>t?Hf(t)?to(t)||t.proxy:va(t.parent):null,Ws=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>va(t.parent),$root:t=>va(t.root),$emit:t=>t.emit,$options:t=>bc(t),$forceUpdate:t=>t.f||(t.f=()=>Ic(t.update)),$nextTick:t=>t.n||(t.n=wf.bind(t.proxy)),$watch:t=>hy.bind(t)}),$o=(t,e)=>t!==fe&&!t.__isScriptSetup&&ee(t,e),Ay={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if($o(s,e))return o[e]=1,s[e];if(r!==fe&&ee(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ee(u,e))return o[e]=3,i[e];if(n!==fe&&ee(n,e))return o[e]=4,n[e];wa&&(o[e]=0)}}const l=Ws[e];let h,f;if(l)return e==="$attrs"&&et(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==fe&&ee(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ee(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return $o(r,e)?(r[e]=n,!0):s!==fe&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==fe&&ee(t,o)||$o(e,o)||(a=i[0])&&ee(a,o)||ee(s,o)||ee(Ws,o)||ee(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Yu(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wa=!0;function Dy(t){const e=bc(t),n=t.proxy,s=t.ctx;wa=!1,e.beforeCreate&&Xu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:E,activated:I,deactivated:C,beforeDestroy:k,beforeUnmount:O,destroyed:H,unmounted:M,render:ve,renderTracked:Ie,renderTriggered:tt,errorCaptured:lt,serverPrefetch:Mt,expose:wt,inheritAttrs:Xt,components:Tn,directives:Et,filters:Ls}=e;if(u&&xy(u,s,null),o)for(const ue in o){const se=o[ue];Y(se)&&(s[ue]=se.bind(n))}if(r){const ue=r.call(n,n);he(ue)&&(t.data=Rs(ue))}if(wa=!0,i)for(const ue in i){const se=i[ue],Lt=Y(se)?se.bind(n,n):Y(se.get)?se.get.bind(n,n):gt,Jt=!Y(se)&&Y(se.set)?se.set.bind(n):gt,Tt=at({get:Lt,set:Jt});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:Qe=>Tt.value=Qe})}if(a)for(const ue in a)kf(a[ue],s,n,ue);if(c){const ue=Y(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(se=>{di(se,ue[se])})}l&&Xu(l,t,"c");function Ce(ue,se){U(se)?se.forEach(Lt=>ue(Lt.bind(n))):se&&ue(se.bind(n))}if(Ce(gy,h),Ce(my,f),Ce(yy,g),Ce(vy,E),Ce(fy,I),Ce(dy,C),Ce(by,lt),Ce(Iy,Ie),Ce(Ty,tt),Ce(wy,O),Ce(xf,M),Ce(Ey,Mt),U(wt))if(wt.length){const ue=t.exposed||(t.exposed={});wt.forEach(se=>{Object.defineProperty(ue,se,{get:()=>n[se],set:Lt=>n[se]=Lt})})}else t.exposed||(t.exposed={});ve&&t.render===gt&&(t.render=ve),Xt!=null&&(t.inheritAttrs=Xt),Tn&&(t.components=Tn),Et&&(t.directives=Et)}function xy(t,e,n=gt){U(t)&&(t=Ea(t));for(const s in t){const r=t[s];let i;he(r)?"default"in r?i=jt(r.from||s,r.default,!0):i=jt(r.from||s):i=jt(r),je(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Xu(t,e,n){mt(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function kf(t,e,n,s){const r=s.includes(".")?Sf(n,s):()=>n[s];if(Se(t)){const i=e[t];Y(i)&&hi(r,i)}else if(Y(t))hi(r,t.bind(n));else if(he(t))if(U(t))t.forEach(i=>kf(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&hi(r,i,t)}}function bc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>bi(c,u,o,!0)),bi(c,e,o)),he(e)&&i.set(e,c),c}function bi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&bi(t,i,n,!0),r&&r.forEach(o=>bi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ry[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ry={data:Ju,props:Zu,emits:Zu,methods:qs,computed:qs,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:qs,directives:qs,watch:Ny,provide:Ju,inject:ky};function Ju(t,e){return e?t?function(){return De(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function ky(t,e){return qs(Ea(t),Ea(e))}function Ea(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?De(Object.create(null),t,e):e}function Zu(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:De(Object.create(null),Yu(t),Yu(e??{})):e}function Ny(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function Nf(){return{app:null,config:{isNativeTag:sm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oy=0;function Py(t,e){return function(s,r=null){Y(s)||(s=De({},s)),r!=null&&!he(r)&&(r=null);const i=Nf(),o=new Set;let a=!1;const c=i.app={_uid:Oy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ov,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Je(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,to(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c},runWithContext(u){_i=c;try{return u()}finally{_i=null}}};return c}}let _i=null;function di(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function jt(t,e,n=!1){const s=Pe||ut;if(s||_i){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:_i._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}function My(t,e,n,s=!1){const r={},i={};wi(i,eo,1),t.propsDefaults=Object.create(null),Of(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:zm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Ly(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ne(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(Yi(t.emitsOptions,f))continue;const g=e[f];if(c)if(ee(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const E=Nt(f);r[E]=Ta(c,a,E,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{Of(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ee(e,h)&&((l=Hn(h))===h||!ee(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Ta(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ee(e,h))&&(delete i[h],u=!0)}u&&qt(t,"set","$attrs")}function Of(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ui(c))continue;const u=e[c];let l;r&&ee(r,l=Nt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Yi(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ne(n),u=a||fe;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Ta(r,c,h,u[h],t,!ee(u,h))}}return o}function Ta(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(gs(r),s=u[n]=c.call(null,e),On())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Hn(n))&&(s=!0))}return s}function Pf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[f,g]=Pf(h,e,!0);De(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return he(t)&&s.set(t,rs),rs;if(U(i))for(let l=0;l<i.length;l++){const h=Nt(i[l]);el(h)&&(o[h]=fe)}else if(i)for(const l in i){const h=Nt(l);if(el(h)){const f=i[l],g=o[h]=U(f)||Y(f)?{type:f}:De({},f);if(g){const E=sl(Boolean,g.type),I=sl(String,g.type);g[0]=E>-1,g[1]=I<0||E<I,(E>-1||ee(g,"default"))&&a.push(h)}}}const u=[o,a];return he(t)&&s.set(t,u),u}function el(t){return t[0]!=="$"}function tl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function nl(t,e){return tl(t)===tl(e)}function sl(t,e){return U(e)?e.findIndex(n=>nl(n,t)):Y(e)&&nl(e,t)?0:-1}const Mf=t=>t[0]==="_"||t==="$stable",_c=t=>U(t)?t.map(_t):[_t(t)],Fy=(t,e,n)=>{if(e._n)return e;const s=ry((...r)=>_c(e(...r)),n);return s._c=!1,s},Lf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Mf(r))continue;const i=t[r];if(Y(i))e[r]=Fy(r,i,s);else if(i!=null){const o=_c(i);e[r]=()=>o}}},Ff=(t,e)=>{const n=_c(e);t.slots.default=()=>n},$y=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),wi(e,"_",n)):Lf(e,t.slots={})}else t.slots={},e&&Ff(t,e);wi(t.slots,eo,1)},Vy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(De(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Lf(e,r)),o=e}else e&&(Ff(t,e),o={default:1});if(i)for(const a in r)!Mf(a)&&!(a in o)&&delete r[a]};function Ia(t,e,n,s,r=!1){if(U(t)){t.forEach((f,g)=>Ia(f,e&&(U(e)?e[g]:e),n,s,r));return}if(fi(s)&&!r)return;const i=s.shapeFlag&4?to(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===fe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Se(u)?(l[u]=null,ee(h,u)&&(h[u]=null)):je(u)&&(u.value=null)),Y(c))on(c,a,12,[o,l]);else{const f=Se(c),g=je(c);if(f||g){const E=()=>{if(t.f){const I=f?ee(h,c)?h[c]:l[c]:c.value;r?U(I)&&uc(I,i):U(I)?I.includes(i)||I.push(i):f?(l[c]=[i],ee(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,ee(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(E.id=-1,Ye(E,n)):E()}}}const Ye=ly;function By(t){return Uy(t)}function Uy(t,e){const n=fa();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=gt,insertStaticContent:E}=t,I=(d,p,m,y=null,w=null,T=null,N=!1,A=null,D=!!p.dynamicChildren)=>{if(d===p)return;d&&!$s(d,p)&&(y=v(d),Qe(d,w,T,!0),d=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:b,ref:V,shapeFlag:L}=p;switch(b){case Zi:C(d,p,m,y);break;case Ln:k(d,p,m,y);break;case pi:d==null&&O(p,m,y,N);break;case Vt:Tn(d,p,m,y,w,T,N,A,D);break;default:L&1?ve(d,p,m,y,w,T,N,A,D):L&6?Et(d,p,m,y,w,T,N,A,D):(L&64||L&128)&&b.process(d,p,m,y,w,T,N,A,D,x)}V!=null&&w&&Ia(V,d&&d.ref,T,p||d,!p)},C=(d,p,m,y)=>{if(d==null)s(p.el=a(p.children),m,y);else{const w=p.el=d.el;p.children!==d.children&&u(w,p.children)}},k=(d,p,m,y)=>{d==null?s(p.el=c(p.children||""),m,y):p.el=d.el},O=(d,p,m,y)=>{[d.el,d.anchor]=E(d.children,p,m,y,d.el,d.anchor)},H=({el:d,anchor:p},m,y)=>{let w;for(;d&&d!==p;)w=f(d),s(d,m,y),d=w;s(p,m,y)},M=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},ve=(d,p,m,y,w,T,N,A,D)=>{N=N||p.type==="svg",d==null?Ie(p,m,y,w,T,N,A,D):Mt(d,p,w,T,N,A,D)},Ie=(d,p,m,y,w,T,N,A)=>{let D,b;const{type:V,props:L,shapeFlag:B,transition:G,dirs:X}=d;if(D=d.el=o(d.type,T,L&&L.is,L),B&8?l(D,d.children):B&16&&lt(d.children,D,null,y,w,T&&V!=="foreignObject",N,A),X&&In(d,null,y,"created"),tt(D,d,d.scopeId,N,y),L){for(const ce in L)ce!=="value"&&!ui(ce)&&i(D,ce,null,L[ce],T,d.children,y,w,Le);"value"in L&&i(D,"value",null,L.value),(b=L.onVnodeBeforeMount)&&bt(b,y,d)}X&&In(d,null,y,"beforeMount");const le=(!w||w&&!w.pendingBranch)&&G&&!G.persisted;le&&G.beforeEnter(D),s(D,p,m),((b=L&&L.onVnodeMounted)||le||X)&&Ye(()=>{b&&bt(b,y,d),le&&G.enter(D),X&&In(d,null,y,"mounted")},w)},tt=(d,p,m,y,w)=>{if(m&&g(d,m),y)for(let T=0;T<y.length;T++)g(d,y[T]);if(w){let T=w.subTree;if(p===T){const N=w.vnode;tt(d,N,N.scopeId,N.slotScopeIds,w.parent)}}},lt=(d,p,m,y,w,T,N,A,D=0)=>{for(let b=D;b<d.length;b++){const V=d[b]=A?tn(d[b]):_t(d[b]);I(null,V,p,m,y,w,T,N,A)}},Mt=(d,p,m,y,w,T,N)=>{const A=p.el=d.el;let{patchFlag:D,dynamicChildren:b,dirs:V}=p;D|=d.patchFlag&16;const L=d.props||fe,B=p.props||fe;let G;m&&bn(m,!1),(G=B.onVnodeBeforeUpdate)&&bt(G,m,p,d),V&&In(p,d,m,"beforeUpdate"),m&&bn(m,!0);const X=w&&p.type!=="foreignObject";if(b?wt(d.dynamicChildren,b,A,m,y,X,T):N||se(d,p,A,null,m,y,X,T,!1),D>0){if(D&16)Xt(A,p,L,B,m,y,w);else if(D&2&&L.class!==B.class&&i(A,"class",null,B.class,w),D&4&&i(A,"style",L.style,B.style,w),D&8){const le=p.dynamicProps;for(let ce=0;ce<le.length;ce++){const we=le[ce],ht=L[we],Xn=B[we];(Xn!==ht||we==="value")&&i(A,we,ht,Xn,w,d.children,m,y,Le)}}D&1&&d.children!==p.children&&l(A,p.children)}else!N&&b==null&&Xt(A,p,L,B,m,y,w);((G=B.onVnodeUpdated)||V)&&Ye(()=>{G&&bt(G,m,p,d),V&&In(p,d,m,"updated")},y)},wt=(d,p,m,y,w,T,N)=>{for(let A=0;A<p.length;A++){const D=d[A],b=p[A],V=D.el&&(D.type===Vt||!$s(D,b)||D.shapeFlag&70)?h(D.el):m;I(D,b,V,null,y,w,T,N,!0)}},Xt=(d,p,m,y,w,T,N)=>{if(m!==y){if(m!==fe)for(const A in m)!ui(A)&&!(A in y)&&i(d,A,m[A],null,N,p.children,w,T,Le);for(const A in y){if(ui(A))continue;const D=y[A],b=m[A];D!==b&&A!=="value"&&i(d,A,b,D,N,p.children,w,T,Le)}"value"in y&&i(d,"value",m.value,y.value)}},Tn=(d,p,m,y,w,T,N,A,D)=>{const b=p.el=d?d.el:a(""),V=p.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:G}=p;G&&(A=A?A.concat(G):G),d==null?(s(b,m,y),s(V,m,y),lt(p.children,m,V,w,T,N,A,D)):L>0&&L&64&&B&&d.dynamicChildren?(wt(d.dynamicChildren,B,m,w,T,N,A),(p.key!=null||w&&p===w.subTree)&&$f(d,p,!0)):se(d,p,m,V,w,T,N,A,D)},Et=(d,p,m,y,w,T,N,A,D)=>{p.slotScopeIds=A,d==null?p.shapeFlag&512?w.ctx.activate(p,m,y,N,D):Ls(p,m,y,w,T,N,D):Wn(d,p,D)},Ls=(d,p,m,y,w,T,N)=>{const A=d.component=Xy(d,y,w);if(Af(d)&&(A.ctx.renderer=x),Jy(A),A.asyncDep){if(w&&w.registerDep(A,Ce),!d.el){const D=A.subTree=Je(Ln);k(null,D,p,m)}return}Ce(A,d,p,m,w,T,N)},Wn=(d,p,m)=>{const y=p.component=d.component;if(ay(d,p,m))if(y.asyncDep&&!y.asyncResolved){ue(y,p,m);return}else y.next=p,ey(y.update),y.update();else p.el=d.el,y.vnode=p},Ce=(d,p,m,y,w,T,N)=>{const A=()=>{if(d.isMounted){let{next:V,bu:L,u:B,parent:G,vnode:X}=d,le=V,ce;bn(d,!1),V?(V.el=X.el,ue(d,V,N)):V=X,L&&li(L),(ce=V.props&&V.props.onVnodeBeforeUpdate)&&bt(ce,G,V,X),bn(d,!0);const we=Fo(d),ht=d.subTree;d.subTree=we,I(ht,we,h(ht.el),v(ht),d,w,T),V.el=we.el,le===null&&cy(d,we.el),B&&Ye(B,w),(ce=V.props&&V.props.onVnodeUpdated)&&Ye(()=>bt(ce,G,V,X),w)}else{let V;const{el:L,props:B}=p,{bm:G,m:X,parent:le}=d,ce=fi(p);if(bn(d,!1),G&&li(G),!ce&&(V=B&&B.onVnodeBeforeMount)&&bt(V,le,p),bn(d,!0),L&&re){const we=()=>{d.subTree=Fo(d),re(L,d.subTree,d,w,null)};ce?p.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=Fo(d);I(null,we,m,y,d,w,T),p.el=we.el}if(X&&Ye(X,w),!ce&&(V=B&&B.onVnodeMounted)){const we=p;Ye(()=>bt(V,le,we),w)}(p.shapeFlag&256||le&&fi(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Ye(d.a,w),d.isMounted=!0,p=m=y=null}},D=d.effect=new gc(A,()=>Ic(b),d.scope),b=d.update=()=>D.run();b.id=d.uid,bn(d,!0),b()},ue=(d,p,m)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Ly(d,p.props,y,m),Vy(d,p.children,m),Ds(),Gu(),xs()},se=(d,p,m,y,w,T,N,A,D=!1)=>{const b=d&&d.children,V=d?d.shapeFlag:0,L=p.children,{patchFlag:B,shapeFlag:G}=p;if(B>0){if(B&128){Jt(b,L,m,y,w,T,N,A,D);return}else if(B&256){Lt(b,L,m,y,w,T,N,A,D);return}}G&8?(V&16&&Le(b,w,T),L!==b&&l(m,L)):V&16?G&16?Jt(b,L,m,y,w,T,N,A,D):Le(b,w,T,!0):(V&8&&l(m,""),G&16&&lt(L,m,y,w,T,N,A,D))},Lt=(d,p,m,y,w,T,N,A,D)=>{d=d||rs,p=p||rs;const b=d.length,V=p.length,L=Math.min(b,V);let B;for(B=0;B<L;B++){const G=p[B]=D?tn(p[B]):_t(p[B]);I(d[B],G,m,null,w,T,N,A,D)}b>V?Le(d,w,T,!0,!1,L):lt(p,m,y,w,T,N,A,D,L)},Jt=(d,p,m,y,w,T,N,A,D)=>{let b=0;const V=p.length;let L=d.length-1,B=V-1;for(;b<=L&&b<=B;){const G=d[b],X=p[b]=D?tn(p[b]):_t(p[b]);if($s(G,X))I(G,X,m,null,w,T,N,A,D);else break;b++}for(;b<=L&&b<=B;){const G=d[L],X=p[B]=D?tn(p[B]):_t(p[B]);if($s(G,X))I(G,X,m,null,w,T,N,A,D);else break;L--,B--}if(b>L){if(b<=B){const G=B+1,X=G<V?p[G].el:y;for(;b<=B;)I(null,p[b]=D?tn(p[b]):_t(p[b]),m,X,w,T,N,A,D),b++}}else if(b>B)for(;b<=L;)Qe(d[b],w,T,!0),b++;else{const G=b,X=b,le=new Map;for(b=X;b<=B;b++){const nt=p[b]=D?tn(p[b]):_t(p[b]);nt.key!=null&&le.set(nt.key,b)}let ce,we=0;const ht=B-X+1;let Xn=!1,Mu=0;const Fs=new Array(ht);for(b=0;b<ht;b++)Fs[b]=0;for(b=G;b<=L;b++){const nt=d[b];if(we>=ht){Qe(nt,w,T,!0);continue}let It;if(nt.key!=null)It=le.get(nt.key);else for(ce=X;ce<=B;ce++)if(Fs[ce-X]===0&&$s(nt,p[ce])){It=ce;break}It===void 0?Qe(nt,w,T,!0):(Fs[It-X]=b+1,It>=Mu?Mu=It:Xn=!0,I(nt,p[It],m,null,w,T,N,A,D),we++)}const Lu=Xn?jy(Fs):rs;for(ce=Lu.length-1,b=ht-1;b>=0;b--){const nt=X+b,It=p[nt],Fu=nt+1<V?p[nt+1].el:y;Fs[b]===0?I(null,It,m,Fu,w,T,N,A,D):Xn&&(ce<0||b!==Lu[ce]?Tt(It,m,Fu,2):ce--)}}},Tt=(d,p,m,y,w=null)=>{const{el:T,type:N,transition:A,children:D,shapeFlag:b}=d;if(b&6){Tt(d.component.subTree,p,m,y);return}if(b&128){d.suspense.move(p,m,y);return}if(b&64){N.move(d,p,m,x);return}if(N===Vt){s(T,p,m);for(let L=0;L<D.length;L++)Tt(D[L],p,m,y);s(d.anchor,p,m);return}if(N===pi){H(d,p,m);return}if(y!==2&&b&1&&A)if(y===0)A.beforeEnter(T),s(T,p,m),Ye(()=>A.enter(T),w);else{const{leave:L,delayLeave:B,afterLeave:G}=A,X=()=>s(T,p,m),le=()=>{L(T,()=>{X(),G&&G()})};B?B(T,X,le):le()}else s(T,p,m)},Qe=(d,p,m,y=!1,w=!1)=>{const{type:T,props:N,ref:A,children:D,dynamicChildren:b,shapeFlag:V,patchFlag:L,dirs:B}=d;if(A!=null&&Ia(A,null,m,d,!0),V&256){p.ctx.deactivate(d);return}const G=V&1&&B,X=!fi(d);let le;if(X&&(le=N&&N.onVnodeBeforeUnmount)&&bt(le,p,d),V&6)zr(d.component,m,y);else{if(V&128){d.suspense.unmount(m,y);return}G&&In(d,null,p,"beforeUnmount"),V&64?d.type.remove(d,p,m,w,x,y):b&&(T!==Vt||L>0&&L&64)?Le(b,p,m,!1,!0):(T===Vt&&L&384||!w&&V&16)&&Le(D,p,m),y&&Qn(d)}(X&&(le=N&&N.onVnodeUnmounted)||G)&&Ye(()=>{le&&bt(le,p,d),G&&In(d,null,p,"unmounted")},m)},Qn=d=>{const{type:p,el:m,anchor:y,transition:w}=d;if(p===Vt){Yn(m,y);return}if(p===pi){M(d);return}const T=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:A}=w,D=()=>N(m,T);A?A(d.el,T,D):D()}else T()},Yn=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},zr=(d,p,m)=>{const{bum:y,scope:w,update:T,subTree:N,um:A}=d;y&&li(y),w.stop(),T&&(T.active=!1,Qe(N,d,p,m)),A&&Ye(A,p),Ye(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Le=(d,p,m,y=!1,w=!1,T=0)=>{for(let N=T;N<d.length;N++)Qe(d[N],p,m,y,w)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),P=(d,p,m)=>{d==null?p._vnode&&Qe(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,m),Gu(),Tf(),p._vnode=d},x={p:I,um:Qe,m:Tt,r:Qn,mt:Ls,mc:lt,pc:se,pbc:wt,n:v,o:t};let $,re;return e&&([$,re]=e(x)),{render:P,hydrate:$,createApp:Py(P,$)}}function bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function $f(t,e,n=!1){const s=t.children,r=e.children;if(U(s)&&U(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=tn(r[i]),a.el=o.el),n||$f(o,a)),a.type===Zi&&(a.el=o.el)}}function jy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const qy=t=>t.__isTeleport,Vt=Symbol.for("v-fgt"),Zi=Symbol.for("v-txt"),Ln=Symbol.for("v-cmt"),pi=Symbol.for("v-stc"),Qs=[];let pt=null;function Vf(t=!1){Qs.push(pt=t?null:[])}function Hy(){Qs.pop(),pt=Qs[Qs.length-1]||null}let ur=1;function rl(t){ur+=t}function Bf(t){return t.dynamicChildren=ur>0?pt||rs:null,Hy(),ur>0&&pt&&pt.push(t),t}function yS(t,e,n,s,r,i){return Bf(qf(t,e,n,s,r,i,!0))}function Uf(t,e,n,s,r){return Bf(Je(t,e,n,s,r,!0))}function ba(t){return t?t.__v_isVNode===!0:!1}function $s(t,e){return t.type===e.type&&t.key===e.key}const eo="__vInternal",jf=({key:t})=>t??null,gi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Se(t)||je(t)||Y(t)?{i:ut,r:t,k:e,f:!!n}:t:null);function qf(t,e=null,n=null,s=0,r=null,i=t===Vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jf(e),ref:e&&gi(e),scopeId:Xi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ut};return a?(Sc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Se(n)?8:16),ur>0&&!o&&pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&pt.push(c),c}const Je=zy;function zy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Sy)&&(t=Ln),ba(t)){const a=ps(t,e,!0);return n&&Sc(a,n),ur>0&&!i&&pt&&(a.shapeFlag&6?pt[pt.indexOf(t)]=a:pt.push(a)),a.patchFlag|=-2,a}if(sv(t)&&(t=t.__vccOpts),e){e=Ky(e);let{class:a,style:c}=e;a&&!Se(a)&&(e.class=fc(a)),he(c)&&(ff(c)&&!U(c)&&(c=De({},c)),e.style=hc(c))}const o=Se(t)?1:uy(t)?128:qy(t)?64:he(t)?4:Y(t)?2:0;return qf(t,e,n,s,r,o,i,!0)}function Ky(t){return t?ff(t)||eo in t?De({},t):t:null}function ps(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Wy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&jf(a),ref:e&&e.ref?n&&r?U(r)?r.concat(gi(e)):[r,gi(e)]:gi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ps(t.ssContent),ssFallback:t.ssFallback&&ps(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Gy(t=" ",e=0){return Je(Zi,null,t,e)}function vS(t,e){const n=Je(pi,null,t);return n.staticCount=e,n}function wS(t="",e=!1){return e?(Vf(),Uf(Ln,null,t)):Je(Ln,null,t)}function _t(t){return t==null||typeof t=="boolean"?Je(Ln):U(t)?Je(Vt,null,t.slice()):typeof t=="object"?tn(t):Je(Zi,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ps(t)}function Sc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Sc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(eo in e)?e._ctx=ut:r===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),s&64?(n=16,e=[Gy(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=fc([e.class,s.class]));else if(r==="style")e.style=hc([e.style,s.style]);else if(zi(r)){const i=e[r],o=s[r];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function bt(t,e,n,s=null){mt(t,e,7,[n,s])}const Qy=Nf();let Yy=0;function Xy(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Qy,i={uid:Yy++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new mm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pf(s,r),emitsOptions:bf(s,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sy.bind(null,i),t.ce&&t.ce(i),i}let Pe=null,Cc,Jn,il="__VUE_INSTANCE_SETTERS__";(Jn=fa()[il])||(Jn=fa()[il]=[]),Jn.push(t=>Pe=t),Cc=t=>{Jn.length>1?Jn.forEach(e=>e(t)):Jn[0](t)};const gs=t=>{Cc(t),t.scope.on()},On=()=>{Pe&&Pe.scope.off(),Cc(null)};function Hf(t){return t.vnode.shapeFlag&4}let lr=!1;function Jy(t,e=!1){lr=e;const{props:n,children:s}=t.vnode,r=Hf(t);My(t,n,r,e),$y(t,s);const i=r?Zy(t,e):void 0;return lr=!1,i}function Zy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=df(new Proxy(t.ctx,Ay));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?tv(t):null;gs(t),Ds();const i=on(s,t,0,[t.props,r]);if(xs(),On(),Qh(i)){if(i.then(On,On),e)return i.then(o=>{ol(t,o,e)}).catch(o=>{Qi(o,t,0)});t.asyncDep=i}else ol(t,i,e)}else zf(t,e)}function ol(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=yf(e)),zf(t,n)}let al;function zf(t,e,n){const s=t.type;if(!t.render){if(!e&&al&&!s.render){const r=s.template||bc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=De(De({isCustomElement:i,delimiters:a},o),c);s.render=al(r,u)}}t.render=s.render||gt}gs(t),Ds(),Dy(t),xs(),On()}function ev(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}}))}function tv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ev(t)},slots:t.slots,emit:t.emit,expose:e}}function to(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yf(df(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ws)return Ws[n](t)},has(e,n){return n in e||n in Ws}}))}function nv(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function sv(t){return Y(t)&&"__vccOpts"in t}const at=(t,e)=>Xm(t,e,lr);function Kf(t,e,n){const s=arguments.length;return s===2?he(e)&&!U(e)?ba(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ba(n)&&(n=[n]),Je(t,e,n))}const rv=Symbol.for("v-scx"),iv=()=>jt(rv),ov="3.3.4",av="http://www.w3.org/2000/svg",Cn=typeof document<"u"?document:null,cl=Cn&&Cn.createElement("template"),cv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Cn.createElementNS(av,t):Cn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{cl.innerHTML=s?`<svg>${t}</svg>`:t;const a=cl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lv(t,e,n){const s=t.style,r=Se(n);if(n&&!r){if(e&&!Se(e))for(const i in e)n[i]==null&&_a(s,i,"");for(const i in n)_a(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ul=/\s*!important$/;function _a(t,e,n){if(U(n))n.forEach(s=>_a(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=hv(t,e);ul.test(n)?t.setProperty(Hn(s),n.replace(ul,""),"important"):t[s]=n}}const ll=["Webkit","Moz","ms"],Vo={};function hv(t,e){const n=Vo[e];if(n)return n;let s=Nt(e);if(s!=="filter"&&s in t)return Vo[e]=s;s=Gi(s);for(let r=0;r<ll.length;r++){const i=ll[r]+s;if(i in t)return Vo[e]=i}return e}const hl="http://www.w3.org/1999/xlink";function fv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hl,e.slice(6,e.length)):t.setAttributeNS(hl,e,n);else{const i=pm(e);n==null||i&&!Jh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function dv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,l=n??"";u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Jh(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Bt(t,e,n,s){t.addEventListener(e,n,s)}function pv(t,e,n,s){t.removeEventListener(e,n,s)}function gv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=mv(e);if(s){const u=i[e]=wv(s,r);Bt(t,a,u,c)}else o&&(pv(t,a,o,c),i[e]=void 0)}}const fl=/(?:Once|Passive|Capture)$/;function mv(t){let e;if(fl.test(t)){e={};let s;for(;s=t.match(fl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),e]}let Bo=0;const yv=Promise.resolve(),vv=()=>Bo||(yv.then(()=>Bo=0),Bo=Date.now());function wv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;mt(Ev(s,n.value),e,5,[s])};return n.value=t,n.attached=vv(),n}function Ev(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const dl=/^on[a-z]/,Tv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?uv(t,s,r):e==="style"?lv(t,n,s):zi(e)?cc(e)||gv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iv(t,e,s,r))?dv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),fv(t,e,s,r))};function Iv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&dl.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dl.test(e)&&Se(n)?!1:e in t}const fn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>li(e,n):e};function bv(t){t.target.composing=!0}function pl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ES={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=fn(r);const i=s||r.props&&r.props.type==="number";Bt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ei(a)),t._assign(a)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),e||(Bt(t,"compositionstart",bv),Bt(t,"compositionend",pl),Bt(t,"change",pl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=fn(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ei(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},TS={deep:!0,created(t,e,n){t._assign=fn(n),Bt(t,"change",()=>{const s=t._modelValue,r=ms(t),i=t.checked,o=t._assign;if(U(s)){const a=dc(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if(As(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Gf(t,i))})},mounted:gl,beforeUpdate(t,e,n){t._assign=fn(n),gl(t,e,n)}};function gl(t,{value:e,oldValue:n},s){t._modelValue=e,U(e)?t.checked=dc(e,s.props.value)>-1:As(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Mn(e,Gf(t,!0)))}const IS={created(t,{value:e},n){t.checked=Mn(e,n.props.value),t._assign=fn(n),Bt(t,"change",()=>{t._assign(ms(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=fn(s),e!==n&&(t.checked=Mn(e,s.props.value))}},bS={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=As(e);Bt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ei(ms(o)):ms(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=fn(s)},mounted(t,{value:e}){ml(t,e)},beforeUpdate(t,e,n){t._assign=fn(n)},updated(t,{value:e}){ml(t,e)}};function ml(t,e){const n=t.multiple;if(!(n&&!U(e)&&!As(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=ms(i);if(n)U(e)?i.selected=dc(e,o)>-1:i.selected=e.has(o);else if(Mn(ms(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ms(t){return"_value"in t?t._value:t.value}function Gf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const _v=["ctrl","shift","alt","meta"],Sv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_v.some(n=>t[`${n}Key`]&&!e.includes(n))},_S=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Sv[e[r]];if(i&&i(n,e))return}return t(n,...s)},Cv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},SS=(t,e)=>n=>{if(!("key"in n))return;const s=Hn(n.key);if(e.some(r=>r===s||Cv[r]===s))return t(n)},Av=De({patchProp:Tv},cv);let yl;function Dv(){return yl||(yl=By(Av))}const xv=(...t)=>{const e=Dv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Rv(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Rv(t){return Se(t)?document.querySelector(t):t}const kv=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Nv={};function Ov(t,e){const n=_y("router-view");return Vf(),Uf(n)}const Pv=kv(Nv,[["render",Ov]]),Mv="modulepreload",Lv=function(t,e){return new URL(t,e).href},vl={},Jr=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Lv(i,s),i in vl)return;vl[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Mv,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof window<"u";function Fv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function Uo(t,e){const n={};for(const s in e){const r=e[s];n[s]=yt(r)?r.map(t):t(r)}return n}const Ys=()=>{},yt=Array.isArray,$v=/\/$/,Vv=t=>t.replace($v,"");function jo(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=qv(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Bv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Uv(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ys(e.matched[s],n.matched[r])&&Wf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jv(t[n],e[n]))return!1;return!0}function jv(t,e){return yt(t)?El(t,e):yt(e)?El(e,t):t===e}function El(t,e){return yt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function qv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var hr;(function(t){t.pop="pop",t.push="push"})(hr||(hr={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function Hv(t){if(!t)if(es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Vv(t)}const zv=/^[^#]+#/;function Kv(t,e){return t.replace(zv,"#")+e}function Gv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const no=()=>({left:window.pageXOffset,top:window.pageYOffset});function Wv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Gv(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Tl(t,e){return(history.state?history.state.position-e:-1)+t}const Sa=new Map;function Qv(t,e){Sa.set(t,e)}function Yv(t){const e=Sa.get(t);return Sa.delete(t),e}let Xv=()=>location.protocol+"//"+location.host;function Qf(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),wl(c,"")}return wl(n,t)+s+r}function Jv(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=Qf(t,location),E=n.value,I=e.value;let C=0;if(f){if(n.value=g,e.value=f,o&&o===E){o=null;return}C=I?f.position-I.position:0}else s(g);r.forEach(k=>{k(n.value,E,{delta:C,type:hr.pop,direction:C?C>0?Xs.forward:Xs.back:Xs.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const E=r.indexOf(f);E>-1&&r.splice(E,1)};return i.push(g),g}function l(){const{history:f}=window;f.state&&f.replaceState(oe({},f.state,{scroll:no()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function Il(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?no():null}}function Zv(t){const{history:e,location:n}=window,s={value:Qf(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Xv()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=oe({},e.state,Il(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=oe({},r.value,e.state,{forward:c,scroll:no()});i(l.current,l,!0);const h=oe({},Il(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function ew(t){t=Hv(t);const e=Zv(t),n=Jv(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=oe({location:"",base:t,go:s,createHref:Kv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function tw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ew(t)}function nw(t){return typeof t=="string"||t&&typeof t=="object"}function Yf(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xf=Symbol("");var bl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bl||(bl={}));function vs(t,e){return oe(new Error,{type:t,[Xf]:!0},e)}function Ft(t,e){return t instanceof Error&&Xf in t&&(e==null||!!(t.type&e))}const _l="[^/]+?",sw={sensitive:!1,strict:!1,start:!0,end:!0},rw=/[.+*?^${}()[\]/\\]/g;function iw(t,e){const n=oe({},sw,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(rw,"\\$&"),g+=40;else if(f.type===1){const{value:E,repeatable:I,optional:C,regexp:k}=f;i.push({name:E,repeatable:I,optional:C});const O=k||_l;if(O!==_l){g+=10;try{new RegExp(`(${O})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${E}" (${O}): `+M.message)}}let H=I?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(H=C&&u.length<2?`(?:/${H})`:"/"+H),C&&(H+="?"),r+=H,g+=20,C&&(g+=-8),I&&(g+=-20),O===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",E=i[f-1];h[E.name]=g&&E.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:E,repeatable:I,optional:C}=g,k=E in u?u[E]:"";if(yt(k)&&!I)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const O=yt(k)?k.join("/"):k;if(!O)if(C)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);l+=O}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function ow(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function aw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=ow(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Sl(s))return 1;if(Sl(r))return-1}return r.length-s.length}function Sl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cw={type:0,value:""},uw=/[a-zA-Z0-9_]/;function lw(t){if(!t)return[[]];if(t==="/")return[[cw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:uw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function hw(t,e,n){const s=iw(lw(t.path),n),r=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function fw(t,e){const n=[],s=new Map;e=Dl({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,E=dw(l);E.aliasOf=f&&f.record;const I=Dl(e,l),C=[E];if("alias"in l){const H=typeof l.alias=="string"?[l.alias]:l.alias;for(const M of H)C.push(oe({},E,{components:f?f.record.components:E.components,path:M,aliasOf:f?f.record:E}))}let k,O;for(const H of C){const{path:M}=H;if(h&&M[0]!=="/"){const ve=h.record.path,Ie=ve[ve.length-1]==="/"?"":"/";H.path=h.record.path+(M&&Ie+M)}if(k=hw(H,h,I),f?f.alias.push(k):(O=O||k,O!==k&&O.alias.push(k),g&&l.name&&!Al(k)&&o(l.name)),E.children){const ve=E.children;for(let Ie=0;Ie<ve.length;Ie++)i(ve[Ie],k,f&&f.children[Ie])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return O?()=>{o(O)}:Ys}function o(l){if(Yf(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&aw(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Jf(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Al(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},E,I;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw vs(1,{location:l});I=f.record.name,g=oe(Cl(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),l.params&&Cl(l.params,f.keys.map(O=>O.name))),E=f.stringify(g)}else if("path"in l)E=l.path,f=n.find(O=>O.re.test(E)),f&&(g=f.parse(E),I=f.record.name);else{if(f=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw vs(1,{location:l,currentLocation:h});I=f.record.name,g=oe({},h.params,l.params),E=f.stringify(g)}const C=[];let k=f;for(;k;)C.unshift(k.record),k=k.parent;return{name:I,path:E,params:g,matched:C,meta:gw(C)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Cl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function dw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:pw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function pw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Al(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gw(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function Dl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Jf(t,e){return e.children.some(n=>n===t||Jf(t,n))}const Zf=/#/g,mw=/&/g,yw=/\//g,vw=/=/g,ww=/\?/g,ed=/\+/g,Ew=/%5B/g,Tw=/%5D/g,td=/%5E/g,Iw=/%60/g,nd=/%7B/g,bw=/%7C/g,sd=/%7D/g,_w=/%20/g;function Ac(t){return encodeURI(""+t).replace(bw,"|").replace(Ew,"[").replace(Tw,"]")}function Sw(t){return Ac(t).replace(nd,"{").replace(sd,"}").replace(td,"^")}function Ca(t){return Ac(t).replace(ed,"%2B").replace(_w,"+").replace(Zf,"%23").replace(mw,"%26").replace(Iw,"`").replace(nd,"{").replace(sd,"}").replace(td,"^")}function Cw(t){return Ca(t).replace(vw,"%3D")}function Aw(t){return Ac(t).replace(Zf,"%23").replace(ww,"%3F")}function Dw(t){return t==null?"":Aw(t).replace(yw,"%2F")}function Si(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function xw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ed," "),o=i.indexOf("="),a=Si(o<0?i:i.slice(0,o)),c=o<0?null:Si(i.slice(o+1));if(a in e){let u=e[a];yt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function xl(t){let e="";for(let n in t){const s=t[n];if(n=Cw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(yt(s)?s.map(i=>i&&Ca(i)):[s&&Ca(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Rw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=yt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const kw=Symbol(""),Rl=Symbol(""),Dc=Symbol(""),rd=Symbol(""),Aa=Symbol("");function Vs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function nn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(vs(4,{from:n,to:e})):h instanceof Error?a(h):nw(h)?a(vs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function qo(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Nw(a)){const u=(a.__vccOpts||a)[e];u&&r.push(nn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Fv(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&nn(f,n,s,i,o)()}))}}return r}function Nw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kl(t){const e=jt(Dc),n=jt(rd),s=at(()=>e.resolve(as(t.to))),r=at(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(ys.bind(null,l));if(f>-1)return f;const g=Nl(c[u-2]);return u>1&&Nl(l)===g&&h[h.length-1].path!==g?h.findIndex(ys.bind(null,c[u-2])):f}),i=at(()=>r.value>-1&&Lw(n.params,s.value.params)),o=at(()=>r.value>-1&&r.value===n.matched.length-1&&Wf(n.params,s.value.params));function a(c={}){return Mw(c)?e[as(t.replace)?"replace":"push"](as(t.to)).catch(Ys):Promise.resolve()}return{route:s,href:at(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Ow=Cf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kl,setup(t,{slots:e}){const n=Rs(kl(t)),{options:s}=jt(Dc),r=at(()=>({[Ol(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ol(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Kf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Pw=Ow;function Mw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Lw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!yt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Nl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ol=(t,e,n)=>t??e??n,Fw=Cf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=jt(Aa),r=at(()=>t.route||s.value),i=jt(Rl,0),o=at(()=>{let u=as(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=at(()=>r.value.matched[o.value]);di(Rl,at(()=>o.value+1)),di(kw,a),di(Aa,r);const c=Km();return hi(()=>[c.value,a.value,t.name],([u,l,h],[f,g,E])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!ys(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return Pl(n.default,{Component:f,route:u});const g=h.props[l],E=g?g===!0?u.params:typeof g=="function"?g(u):g:null,C=Kf(f,oe({},E,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Pl(n.default,{Component:C,route:u})||C}}});function Pl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $w=Fw;function Vw(t){const e=fw(t.routes,t),n=t.parseQuery||xw,s=t.stringifyQuery||xl,r=t.history,i=Vs(),o=Vs(),a=Vs(),c=Gm(en);let u=en;es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Uo.bind(null,v=>""+v),h=Uo.bind(null,Dw),f=Uo.bind(null,Si);function g(v,P){let x,$;return Yf(v)?(x=e.getRecordMatcher(v),$=P):$=v,e.addRoute($,x)}function E(v){const P=e.getRecordMatcher(v);P&&e.removeRoute(P)}function I(){return e.getRoutes().map(v=>v.record)}function C(v){return!!e.getRecordMatcher(v)}function k(v,P){if(P=oe({},P||c.value),typeof v=="string"){const m=jo(n,v,P.path),y=e.resolve({path:m.path},P),w=r.createHref(m.fullPath);return oe(m,y,{params:f(y.params),hash:Si(m.hash),redirectedFrom:void 0,href:w})}let x;if("path"in v)x=oe({},v,{path:jo(n,v.path,P.path).path});else{const m=oe({},v.params);for(const y in m)m[y]==null&&delete m[y];x=oe({},v,{params:h(m)}),P.params=h(P.params)}const $=e.resolve(x,P),re=v.hash||"";$.params=l(f($.params));const d=Bv(s,oe({},v,{hash:Sw(re),path:$.path})),p=r.createHref(d);return oe({fullPath:d,hash:re,query:s===xl?Rw(v.query):v.query||{}},$,{redirectedFrom:void 0,href:p})}function O(v){return typeof v=="string"?jo(n,v,c.value.path):oe({},v)}function H(v,P){if(u!==v)return vs(8,{from:P,to:v})}function M(v){return tt(v)}function ve(v){return M(oe(O(v),{replace:!0}))}function Ie(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:x}=P;let $=typeof x=="function"?x(v):x;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=O($):{path:$},$.params={}),oe({query:v.query,hash:v.hash,params:"path"in $?{}:v.params},$)}}function tt(v,P){const x=u=k(v),$=c.value,re=v.state,d=v.force,p=v.replace===!0,m=Ie(x);if(m)return tt(oe(O(m),{state:typeof m=="object"?oe({},re,m.state):re,force:d,replace:p}),P||x);const y=x;y.redirectedFrom=P;let w;return!d&&Uv(s,$,x)&&(w=vs(16,{to:y,from:$}),Tt($,$,!0,!1)),(w?Promise.resolve(w):wt(y,$)).catch(T=>Ft(T)?Ft(T,2)?T:Jt(T):se(T,y,$)).then(T=>{if(T){if(Ft(T,2))return tt(oe({replace:p},O(T.to),{state:typeof T.to=="object"?oe({},re,T.to.state):re,force:d}),P||y)}else T=Tn(y,$,!0,p,re);return Xt(y,$,T),T})}function lt(v,P){const x=H(v,P);return x?Promise.reject(x):Promise.resolve()}function Mt(v){const P=Yn.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(v):v()}function wt(v,P){let x;const[$,re,d]=Bw(v,P);x=qo($.reverse(),"beforeRouteLeave",v,P);for(const m of $)m.leaveGuards.forEach(y=>{x.push(nn(y,v,P))});const p=lt.bind(null,v,P);return x.push(p),Le(x).then(()=>{x=[];for(const m of i.list())x.push(nn(m,v,P));return x.push(p),Le(x)}).then(()=>{x=qo(re,"beforeRouteUpdate",v,P);for(const m of re)m.updateGuards.forEach(y=>{x.push(nn(y,v,P))});return x.push(p),Le(x)}).then(()=>{x=[];for(const m of v.matched)if(m.beforeEnter&&!P.matched.includes(m))if(yt(m.beforeEnter))for(const y of m.beforeEnter)x.push(nn(y,v,P));else x.push(nn(m.beforeEnter,v,P));return x.push(p),Le(x)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),x=qo(d,"beforeRouteEnter",v,P),x.push(p),Le(x))).then(()=>{x=[];for(const m of o.list())x.push(nn(m,v,P));return x.push(p),Le(x)}).catch(m=>Ft(m,8)?m:Promise.reject(m))}function Xt(v,P,x){for(const $ of a.list())Mt(()=>$(v,P,x))}function Tn(v,P,x,$,re){const d=H(v,P);if(d)return d;const p=P===en,m=es?history.state:{};x&&($||p?r.replace(v.fullPath,oe({scroll:p&&m&&m.scroll},re)):r.push(v.fullPath,re)),c.value=v,Tt(v,P,x,p),Jt()}let Et;function Ls(){Et||(Et=r.listen((v,P,x)=>{if(!zr.listening)return;const $=k(v),re=Ie($);if(re){tt(oe(re,{replace:!0}),$).catch(Ys);return}u=$;const d=c.value;es&&Qv(Tl(d.fullPath,x.delta),no()),wt($,d).catch(p=>Ft(p,12)?p:Ft(p,2)?(tt(p.to,$).then(m=>{Ft(m,20)&&!x.delta&&x.type===hr.pop&&r.go(-1,!1)}).catch(Ys),Promise.reject()):(x.delta&&r.go(-x.delta,!1),se(p,$,d))).then(p=>{p=p||Tn($,d,!1),p&&(x.delta&&!Ft(p,8)?r.go(-x.delta,!1):x.type===hr.pop&&Ft(p,20)&&r.go(-1,!1)),Xt($,d,p)}).catch(Ys)}))}let Wn=Vs(),Ce=Vs(),ue;function se(v,P,x){Jt(v);const $=Ce.list();return $.length?$.forEach(re=>re(v,P,x)):console.error(v),Promise.reject(v)}function Lt(){return ue&&c.value!==en?Promise.resolve():new Promise((v,P)=>{Wn.add([v,P])})}function Jt(v){return ue||(ue=!v,Ls(),Wn.list().forEach(([P,x])=>v?x(v):P()),Wn.reset()),v}function Tt(v,P,x,$){const{scrollBehavior:re}=t;if(!es||!re)return Promise.resolve();const d=!x&&Yv(Tl(v.fullPath,0))||($||!x)&&history.state&&history.state.scroll||null;return wf().then(()=>re(v,P,d)).then(p=>p&&Wv(p)).catch(p=>se(p,v,P))}const Qe=v=>r.go(v);let Qn;const Yn=new Set,zr={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,hasRoute:C,getRoutes:I,resolve:k,options:t,push:M,replace:ve,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ce.add,isReady:Lt,install(v){const P=this;v.component("RouterLink",Pw),v.component("RouterView",$w),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>as(c)}),es&&!Qn&&c.value===en&&(Qn=!0,M(r.location).catch(re=>{}));const x={};for(const re in en)x[re]=at(()=>c.value[re]);v.provide(Dc,P),v.provide(rd,Rs(x)),v.provide(Aa,c);const $=v.unmount;Yn.add(v),v.unmount=function(){Yn.delete(v),Yn.size<1&&(u=en,Et&&Et(),Et=null,c.value=en,Qn=!1,ue=!1),$()}}};function Le(v){return v.reduce((P,x)=>P.then(()=>Mt(x)),Promise.resolve())}return zr}function Bw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>ys(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>ys(u,c))||r.push(c))}return[n,s,r]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Uw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(id(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Uw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new jw;const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const E=u<<6&192|h;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qw=function(t){const e=id(t);return od.encodeByteArray(e,!0)},Ci=function(t){return qw(t).replace(/\./g,"")},Hw=function(t){try{return od.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=()=>zw().__FIREBASE_DEFAULTS__,Gw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ww=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hw(t[1]);return e&&JSON.parse(e)},ad=()=>{try{return Kw()||Gw()||Ww()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qw=t=>{var e,n;return(n=(e=ad())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yw=t=>{const e=Qw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cd=()=>{var t;return(t=ad())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ci(JSON.stringify(n)),Ci(JSON.stringify(o)),a].join(".")}function Zw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ud(){try{return typeof indexedDB=="object"}catch{return!1}}function ld(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function e0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="FirebaseError";class yn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=t0,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?n0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new yn(r,a,s)}}function n0(t,e){return t.replace(s0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const s0=/\{\$([^}]+)}/g;function Ai(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ml(i)&&Ml(o)){if(!Ai(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ml(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=1e3,i0=2,o0=4*60*60*1e3,a0=.5;function Ll(t,e=r0,n=i0){const s=e*Math.pow(n,t),r=Math.round(a0*s*(Math.random()-.5)*2);return Math.min(o0,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l0(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:u0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u0(t){return t===_n?void 0:t}function l0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new c0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const f0={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},d0=ie.INFO,p0={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},g0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=p0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xc{constructor(e){this.name=e,this._logLevel=d0,this._logHandler=g0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?f0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const m0=(t,e)=>e.some(n=>t instanceof n);let Fl,$l;function y0(){return Fl||(Fl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v0(){return $l||($l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hd=new WeakMap,Da=new WeakMap,fd=new WeakMap,Ho=new WeakMap,Rc=new WeakMap;function w0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(an(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hd.set(n,t)}).catch(()=>{}),Rc.set(e,t),e}function E0(t){if(Da.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Da.set(t,e)}let xa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Da.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function T0(t){xa=t(xa)}function I0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(zo(this),e,...n);return fd.set(s,e.sort?e.sort():[e]),an(s)}:v0().includes(t)?function(...e){return t.apply(zo(this),e),an(hd.get(this))}:function(...e){return an(t.apply(zo(this),e))}}function b0(t){return typeof t=="function"?I0(t):(t instanceof IDBTransaction&&E0(t),m0(t,y0())?new Proxy(t,xa):t)}function an(t){if(t instanceof IDBRequest)return w0(t);if(Ho.has(t))return Ho.get(t);const e=b0(t);return e!==t&&(Ho.set(t,e),Rc.set(e,t)),e}const zo=t=>Rc.get(t);function _0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=an(o);return s&&o.addEventListener("upgradeneeded",c=>{s(an(o.result),c.oldVersion,c.newVersion,an(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const S0=["get","getKey","getAll","getAllKeys","count"],C0=["put","add","delete","clear"],Ko=new Map;function Vl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ko.get(e))return Ko.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=C0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||S0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ko.set(e,i),i}T0(t=>({...t,get:(e,n,s)=>Vl(e,n)||t.get(e,n,s),has:(e,n)=>!!Vl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(D0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function D0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ra="@firebase/app",Bl="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new xc("@firebase/app"),x0="@firebase/app-compat",R0="@firebase/analytics-compat",k0="@firebase/analytics",N0="@firebase/app-check-compat",O0="@firebase/app-check",P0="@firebase/auth",M0="@firebase/auth-compat",L0="@firebase/database",F0="@firebase/database-compat",$0="@firebase/functions",V0="@firebase/functions-compat",B0="@firebase/installations",U0="@firebase/installations-compat",j0="@firebase/messaging",q0="@firebase/messaging-compat",H0="@firebase/performance",z0="@firebase/performance-compat",K0="@firebase/remote-config",G0="@firebase/remote-config-compat",W0="@firebase/storage",Q0="@firebase/storage-compat",Y0="@firebase/firestore",X0="@firebase/firestore-compat",J0="firebase",Z0="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="[DEFAULT]",eE={[Ra]:"fire-core",[x0]:"fire-core-compat",[k0]:"fire-analytics",[R0]:"fire-analytics-compat",[O0]:"fire-app-check",[N0]:"fire-app-check-compat",[P0]:"fire-auth",[M0]:"fire-auth-compat",[L0]:"fire-rtdb",[F0]:"fire-rtdb-compat",[$0]:"fire-fn",[V0]:"fire-fn-compat",[B0]:"fire-iid",[U0]:"fire-iid-compat",[j0]:"fire-fcm",[q0]:"fire-fcm-compat",[H0]:"fire-perf",[z0]:"fire-perf-compat",[K0]:"fire-rc",[G0]:"fire-rc-compat",[W0]:"fire-gcs",[Q0]:"fire-gcs-compat",[Y0]:"fire-fst",[X0]:"fire-fst-compat","fire-js":"fire-js",[J0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Map,Na=new Map;function tE(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(Na.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;Na.set(e,t);for(const n of Di.values())tE(n,t);return!0}function xr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cn=new so("app","Firebase",nE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=Z0;function dd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ka,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw cn.create("bad-app-name",{appName:String(r)});if(n||(n=cd()),!n)throw cn.create("no-options");const i=Di.get(r);if(i){if(Ai(n,i.options)&&Ai(s,i.config))return i;throw cn.create("duplicate-app",{appName:r})}const o=new h0(r);for(const c of Na.values())o.addComponent(c);const a=new sE(n,s,o);return Di.set(r,a),a}function pd(t=ka){const e=Di.get(t);if(!e&&t===ka&&cd())return dd();if(!e)throw cn.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let r=(s=eE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(a.join(" "));return}dn(new zt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebase-heartbeat-database",oE=1,fr="firebase-heartbeat-store";let Go=null;function gd(){return Go||(Go=_0(iE,oE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fr)}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),Go}async function aE(t){try{return await(await gd()).transaction(fr).objectStore(fr).get(md(t))}catch(e){if(e instanceof yn)Fn.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function Ul(t,e){try{const s=(await gd()).transaction(fr,"readwrite");await s.objectStore(fr).put(e,md(t)),await s.done}catch(n){if(n instanceof yn)Fn.warn(n.message);else{const s=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(s.message)}}}function md(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=1024,uE=30*24*60*60*1e3;class lE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=uE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jl(),{heartbeatsToSend:n,unsentEntries:s}=hE(this._heartbeatsCache.heartbeats),r=Ci(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function jl(){return new Date().toISOString().substring(0,10)}function hE(t,e=cE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ql(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ql(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ud()?ld().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ql(t){return Ci(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){dn(new zt("platform-logger",e=>new A0(e),"PRIVATE")),dn(new zt("heartbeat",e=>new lE(e),"PRIVATE")),xt(Ra,Bl,t),xt(Ra,Bl,"esm2017"),xt("fire-js","")}dE("");var pE="firebase",gE="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(pE,gE,"app");const mE=(t,e)=>e.some(n=>t instanceof n);let Hl,zl;function yE(){return Hl||(Hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vE(){return zl||(zl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yd=new WeakMap,Oa=new WeakMap,vd=new WeakMap,Wo=new WeakMap,kc=new WeakMap;function wE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(un(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yd.set(n,t)}).catch(()=>{}),kc.set(e,t),e}function EE(t){if(Oa.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Oa.set(t,e)}let Pa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TE(t){Pa=t(Pa)}function IE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Qo(this),e,...n);return vd.set(s,e.sort?e.sort():[e]),un(s)}:vE().includes(t)?function(...e){return t.apply(Qo(this),e),un(yd.get(this))}:function(...e){return un(t.apply(Qo(this),e))}}function bE(t){return typeof t=="function"?IE(t):(t instanceof IDBTransaction&&EE(t),mE(t,yE())?new Proxy(t,Pa):t)}function un(t){if(t instanceof IDBRequest)return wE(t);if(Wo.has(t))return Wo.get(t);const e=bE(t);return e!==t&&(Wo.set(t,e),kc.set(e,t)),e}const Qo=t=>kc.get(t);function _E(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=un(o);return s&&o.addEventListener("upgradeneeded",c=>{s(un(o.result),c.oldVersion,c.newVersion,un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const SE=["get","getKey","getAll","getAllKeys","count"],CE=["put","add","delete","clear"],Yo=new Map;function Kl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yo.get(e))return Yo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=CE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||SE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Yo.set(e,i),i}TE(t=>({...t,get:(e,n,s)=>Kl(e,n)||t.get(e,n,s),has:(e,n)=>!!Kl(e,n)||t.has(e,n)}));const wd="@firebase/installations",Nc="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=1e4,Td=`w:${Nc}`,Id="FIS_v2",AE="https://firebaseinstallations.googleapis.com/v1",DE=60*60*1e3,xE="installations",RE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},$n=new so(xE,RE,kE);function bd(t){return t instanceof yn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d({projectId:t}){return`${AE}/projects/${t}/installations`}function Sd(t){return{token:t.token,requestStatus:2,expiresIn:OE(t.expiresIn),creationTime:Date.now()}}async function Cd(t,e){const s=(await e.json()).error;return $n.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ad({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function NE(t,{refreshToken:e}){const n=Ad(t);return n.append("Authorization",PE(e)),n}async function Dd(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OE(t){return Number(t.replace("s","000"))}function PE(t){return`${Id} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ME({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=_d(t),r=Ad(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:Id,appId:t.appId,sdkVersion:Td},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Dd(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Sd(u.authToken)}}else throw await Cd("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=/^[cdef][\w-]{21}$/,Ma="";function $E(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=VE(t);return FE.test(n)?n:Ma}catch{return Ma}}function VE(t){return LE(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=new Map;function kd(t,e){const n=ro(t);Nd(n,e),BE(n,e)}function Nd(t,e){const n=Rd.get(t);if(n)for(const s of n)s(e)}function BE(t,e){const n=UE();n&&n.postMessage({key:t,fid:e}),jE()}let Dn=null;function UE(){return!Dn&&"BroadcastChannel"in self&&(Dn=new BroadcastChannel("[Firebase] FID Change"),Dn.onmessage=t=>{Nd(t.data.key,t.data.fid)}),Dn}function jE(){Rd.size===0&&Dn&&(Dn.close(),Dn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="firebase-installations-database",HE=1,Vn="firebase-installations-store";let Xo=null;function Oc(){return Xo||(Xo=_E(qE,HE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vn)}}})),Xo}async function xi(t,e){const n=ro(t),r=(await Oc()).transaction(Vn,"readwrite"),i=r.objectStore(Vn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&kd(t,e.fid),e}async function Od(t){const e=ro(t),s=(await Oc()).transaction(Vn,"readwrite");await s.objectStore(Vn).delete(e),await s.done}async function io(t,e){const n=ro(t),r=(await Oc()).transaction(Vn,"readwrite"),i=r.objectStore(Vn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&kd(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(t){let e;const n=await io(t.appConfig,s=>{const r=zE(s),i=KE(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Ma?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function zE(t){const e=t||{fid:$E(),registrationStatus:0};return Pd(e)}function KE(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject($n.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=GE(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WE(t)}:{installationEntry:e}}async function GE(t,e){try{const n=await ME(t,e);return xi(t.appConfig,n)}catch(n){throw bd(n)&&n.customData.serverCode===409?await Od(t.appConfig):await xi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function WE(t){let e=await Gl(t.appConfig);for(;e.registrationStatus===1;)await xd(100),e=await Gl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Pc(t);return s||n}return e}function Gl(t){return io(t,e=>{if(!e)throw $n.create("installation-not-found");return Pd(e)})}function Pd(t){return QE(t)?{fid:t.fid,registrationStatus:0}:t}function QE(t){return t.registrationStatus===1&&t.registrationTime+Ed<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE({appConfig:t,heartbeatServiceProvider:e},n){const s=XE(t,n),r=NE(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Td,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Dd(()=>fetch(s,a));if(c.ok){const u=await c.json();return Sd(u)}else throw await Cd("Generate Auth Token",c)}function XE(t,{fid:e}){return`${_d(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(t,e=!1){let n;const s=await io(t.appConfig,i=>{if(!Md(i))throw $n.create("not-registered");const o=i.authToken;if(!e&&e1(o))return i;if(o.requestStatus===1)return n=JE(t,e),i;{if(!navigator.onLine)throw $n.create("app-offline");const a=n1(i);return n=ZE(t,a),a}});return n?await n:s.authToken}async function JE(t,e){let n=await Wl(t.appConfig);for(;n.authToken.requestStatus===1;)await xd(100),n=await Wl(t.appConfig);const s=n.authToken;return s.requestStatus===0?Mc(t,e):s}function Wl(t){return io(t,e=>{if(!Md(e))throw $n.create("not-registered");const n=e.authToken;return s1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ZE(t,e){try{const n=await YE(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await xi(t.appConfig,s),n}catch(n){if(bd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Od(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xi(t.appConfig,s)}throw n}}function Md(t){return t!==void 0&&t.registrationStatus===2}function e1(t){return t.requestStatus===2&&!t1(t)}function t1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+DE}function n1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function s1(t){return t.requestStatus===1&&t.requestTime+Ed<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t){const e=t,{installationEntry:n,registrationPromise:s}=await Pc(e);return s?s.catch(console.error):Mc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e=!1){const n=t;return await o1(n),(await Mc(n,e)).token}async function o1(t){const{registrationPromise:e}=await Pc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t){if(!t||!t.options)throw Jo("App Configuration");if(!t.name)throw Jo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Jo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Jo(t){return $n.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="installations",c1="installations-internal",u1=t=>{const e=t.getProvider("app").getImmediate(),n=a1(e),s=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},l1=t=>{const e=t.getProvider("app").getImmediate(),n=xr(e,Ld).getImmediate();return{getId:()=>r1(n),getToken:r=>i1(n,r)}};function h1(){dn(new zt(Ld,u1,"PUBLIC")),dn(new zt(c1,l1,"PRIVATE"))}h1();xt(wd,Nc);xt(wd,Nc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="analytics",f1="firebase_id",d1="origin",p1=60*1e3,g1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new xc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},rt=new so("analytics","Analytics",m1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){if(!t.startsWith(Lc)){const e=rt.create("invalid-gtag-resource",{gtagURL:t});return Ze.warn(e.message),""}return t}function Fd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function v1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function w1(t,e){const n=v1("firebase-js-sdk-policy",{createScriptURL:y1}),s=document.createElement("script"),r=`${Lc}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function E1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function T1(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Fd(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(a){Ze.error(a)}t("config",r,i)}async function I1(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Fd(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Ze.error(i)}}function b1(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[a,c]=o;await I1(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await T1(t,e,n,s,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,u]=o;t("get",a,c,u)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ze.error(a)}}return r}function _1(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=b1(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function S1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Lc)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=30,A1=1e3;class D1{constructor(e={},n=A1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $d=new D1;function x1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function R1(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:x1(s)},i=g1.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function k1(t,e=$d,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw rt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw rt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new P1;return setTimeout(async()=>{a.abort()},n!==void 0?n:p1),Vd({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Vd(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=$d){var i;const{appId:o,measurementId:a}=t;try{await N1(s,e)}catch(c){if(a)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await R1(t);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!O1(u)){if(r.deleteThrottleMetadata(o),a)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ll(n,r.intervalMillis,C1):Ll(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,h),Ze.debug(`Calling attemptFetch again in ${l} millis`),Vd(t,h,s,r)}}function N1(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function O1(t){if(!(t instanceof yn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class P1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function M1(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(){if(ud())try{await ld()}catch(t){return Ze.warn(rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ze.warn(rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function F1(t,e,n,s,r,i,o){var a;const c=k1(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ze.error(g)),e.push(c);const u=L1().then(g=>{if(g)return s.getId()}),[l,h]=await Promise.all([c,u]);S1(i)||w1(i,l.measurementId),r("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[d1]="firebase",f.update=!0,h!=null&&(f[f1]=h),r("config",l.measurementId,f),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.app=e}_delete(){return delete Js[this.app.options.appId],Promise.resolve()}}let Js={},Ql=[];const Yl={};let Zo="dataLayer",V1="gtag",Xl,Bd,Jl=!1;function B1(){const t=[];if(Zw()&&t.push("This is a browser extension environment."),e0()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=rt.create("invalid-analytics-context",{errorInfo:e});Ze.warn(n.message)}}function U1(t,e,n){B1();const s=t.options.appId;if(!s)throw rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rt.create("no-api-key");if(Js[s]!=null)throw rt.create("already-exists",{id:s});if(!Jl){E1(Zo);const{wrappedGtag:i,gtagCore:o}=_1(Js,Ql,Yl,Zo,V1);Bd=i,Xl=o,Jl=!0}return Js[s]=F1(t,Ql,Yl,e,Xl,Zo,n),new $1(t)}function j1(t=pd()){t=Ht(t);const e=xr(t,Ri);return e.isInitialized()?e.getImmediate():q1(t)}function q1(t,e={}){const n=xr(t,Ri);if(n.isInitialized()){const r=n.getImmediate();if(Ai(e,n.getOptions()))return r;throw rt.create("already-initialized")}return n.initialize({options:e})}function H1(t,e,n,s){t=Ht(t),M1(Bd,Js[t.app.options.appId],e,n,s).catch(r=>Ze.error(r))}const Zl="@firebase/analytics",eh="0.10.0";function z1(){dn(new zt(Ri,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return U1(s,r,n)},"PUBLIC")),dn(new zt("analytics-internal",t,"PRIVATE")),xt(Zl,eh),xt(Zl,eh,"esm2017");function t(e){try{const n=e.getProvider(Ri).getImmediate();return{logEvent:(s,r,i)=>H1(n,s,r,i)}}catch(n){throw rt.create("interop-component-reg-failed",{reason:n})}}}z1();var K1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Fc=Fc||{},z=K1||self;function oo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function G1(t){return Object.prototype.hasOwnProperty.call(t,ea)&&t[ea]||(t[ea]=++W1)}var ea="closure_uid_"+(1e9*Math.random()>>>0),W1=0;function Q1(t,e,n){return t.call.apply(t.bind,arguments)}function Y1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=Q1:qe=Y1,qe.apply(null,arguments)}function Zr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Re(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function vn(){this.s=this.s,this.o=this.o}var X1=0;vn.prototype.s=!1;vn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),X1!=0)&&G1(this)};vn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ud=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $c(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function th(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(oo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function He(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var J1=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",()=>{},e),z.removeEventListener("test",()=>{},e)}catch{}return t}();function dr(t){return/^[\s\xa0]*$/.test(t)}function ao(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Ct(t){return ao().indexOf(t)!=-1}function Vc(t){return Vc[" "](t),t}Vc[" "]=function(){};function Z1(t,e){var n=zT;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var eT=Ct("Opera"),ws=Ct("Trident")||Ct("MSIE"),jd=Ct("Edge"),La=jd||ws,qd=Ct("Gecko")&&!(ao().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge"))&&!(Ct("Trident")||Ct("MSIE"))&&!Ct("Edge"),tT=ao().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge");function Hd(){var t=z.document;return t?t.documentMode:void 0}var Fa;e:{var ta="",na=function(){var t=ao();if(qd)return/rv:([^\);]+)(\)|;)/.exec(t);if(jd)return/Edge\/([\d\.]+)/.exec(t);if(ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(tT)return/WebKit\/(\S+)/.exec(t);if(eT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(na&&(ta=na?na[1]:""),ws){var sa=Hd();if(sa!=null&&sa>parseFloat(ta)){Fa=String(sa);break e}}Fa=ta}var $a;if(z.document&&ws){var nh=Hd();$a=nh||parseInt(Fa,10)||void 0}else $a=void 0;var nT=$a;function pr(t,e){if(He.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qd){e:{try{Vc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pr.$.h.call(this)}}Re(pr,He);var sT={2:"touch",3:"pen",4:"mouse"};pr.prototype.h=function(){pr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var kr="closure_listenable_"+(1e6*Math.random()|0),rT=0;function iT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++rT,this.fa=this.ia=!1}function co(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function oT(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function zd(t){const e={};for(const n in t)e[n]=t[n];return e}const sh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kd(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<sh.length;i++)n=sh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function uo(t){this.src=t,this.g={},this.h=0}uo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ba(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new iT(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Va(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ud(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(co(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ba(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Uc="closure_lm_"+(1e6*Math.random()|0),ra={};function Gd(t,e,n,s,r){if(s&&s.once)return Qd(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Gd(t,e[i],n,s,r);return null}return n=Hc(n),t&&t[kr]?t.O(e,n,Rr(s)?!!s.capture:!!s,r):Wd(t,e,n,!1,s,r)}function Wd(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Rr(r)?!!r.capture:!!r,a=qc(t);if(a||(t[Uc]=a=new uo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=aT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)J1||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Xd(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aT(){function t(n){return e.call(t.src,t.listener,n)}const e=cT;return t}function Qd(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qd(t,e[i],n,s,r);return null}return n=Hc(n),t&&t[kr]?t.P(e,n,Rr(s)?!!s.capture:!!s,r):Wd(t,e,n,!0,s,r)}function Yd(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Yd(t,e[i],n,s,r);else s=Rr(s)?!!s.capture:!!s,n=Hc(n),t&&t[kr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ba(i,n,s,r),-1<n&&(co(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=qc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ba(e,n,s,r)),(n=-1<t?e[t]:null)&&jc(n))}function jc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[kr])Va(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Xd(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=qc(e))?(Va(n,t),n.h==0&&(n.src=null,e[Uc]=null)):co(t)}}}function Xd(t){return t in ra?ra[t]:ra[t]="on"+t}function cT(t,e){if(t.fa)t=!0;else{e=new pr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&jc(t),t=n.call(s,e)}return t}function qc(t){return t=t[Uc],t instanceof uo?t:null}var ia="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hc(t){return typeof t=="function"?t:(t[ia]||(t[ia]=function(e){return t.handleEvent(e)}),t[ia])}function xe(){vn.call(this),this.i=new uo(this),this.S=this,this.J=null}Re(xe,vn);xe.prototype[kr]=!0;xe.prototype.removeEventListener=function(t,e,n,s){Yd(this,t,e,n,s)};function Me(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new He(e,t);else if(e instanceof He)e.target=e.target||t;else{var r=e;e=new He(s,t),Kd(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ei(o,s,!0,e)&&r}if(o=e.g=t,r=ei(o,s,!0,e)&&r,r=ei(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ei(o,s,!1,e)&&r}xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)co(n[s]);delete t.g[e],t.h--}}this.J=null};xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};xe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ei(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Va(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var zc=z.JSON.stringify;class uT{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function lT(){var t=Kc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hT{constructor(){this.h=this.g=null}add(e,n){const s=Jd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Jd=new uT(()=>new fT,t=>t.reset());class fT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dT(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function pT(t){z.setTimeout(()=>{throw t},0)}let gr,mr=!1,Kc=new hT,Zd=()=>{const t=z.Promise.resolve(void 0);gr=()=>{t.then(gT)}};var gT=()=>{for(var t;t=lT();){try{t.h.call(t.g)}catch(n){pT(n)}var e=Jd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}mr=!1};function lo(t,e){xe.call(this),this.h=t||1,this.g=e||z,this.j=qe(this.qb,this),this.l=Date.now()}Re(lo,xe);R=lo.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Me(this,"tick"),this.ga&&(Gc(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){lo.$.N.call(this),Gc(this),delete this.g};function Wc(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function ep(t){t.g=Wc(()=>{t.g=null,t.i&&(t.i=!1,ep(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mT extends vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ep(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yr(t){vn.call(this),this.h=t,this.g={}}Re(yr,vn);var rh=[];function tp(t,e,n,s){Array.isArray(n)||(n&&(rh[0]=n.toString()),n=rh);for(var r=0;r<n.length;r++){var i=Gd(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function np(t){Bc(t.g,function(e,n){this.g.hasOwnProperty(n)&&jc(e)},t),t.g={}}yr.prototype.N=function(){yr.$.N.call(this),np(this)};yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ho(){this.g=!0}ho.prototype.Ea=function(){this.g=!1};function yT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function vT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ss(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ET(t,n)+(s?" "+s:"")})}function wT(t,e){t.info(function(){return"TIMEOUT: "+e})}ho.prototype.info=function(){};function ET(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return zc(n)}catch{return e}}var zn={},ih=null;function fo(){return ih=ih||new xe}zn.Ta="serverreachability";function sp(t){He.call(this,zn.Ta,t)}Re(sp,He);function vr(t){const e=fo();Me(e,new sp(e))}zn.STAT_EVENT="statevent";function rp(t,e){He.call(this,zn.STAT_EVENT,t),this.stat=e}Re(rp,He);function We(t){const e=fo();Me(e,new rp(e,t))}zn.Ua="timingevent";function ip(t,e){He.call(this,zn.Ua,t),this.size=e}Re(ip,He);function Nr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var po={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},op={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qc(){}Qc.prototype.h=null;function oh(t){return t.h||(t.h=t.i())}function ap(){}var Or={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yc(){He.call(this,"d")}Re(Yc,He);function Xc(){He.call(this,"c")}Re(Xc,He);var Ua;function go(){}Re(go,Qc);go.prototype.g=function(){return new XMLHttpRequest};go.prototype.i=function(){return{}};Ua=new go;function Pr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new yr(this),this.P=TT,t=La?125:void 0,this.V=new lo(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cp}function cp(){this.i=null,this.g="",this.h=!1}var TT=45e3,ja={},ki={};R=Pr.prototype;R.setTimeout=function(t){this.P=t};function qa(t,e,n){t.L=1,t.v=yo(Kt(e)),t.s=n,t.S=!0,up(t,null)}function up(t,e){t.G=Date.now(),Mr(t),t.A=Kt(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),yp(n.i,"t",s),t.C=0,n=t.l.J,t.h=new cp,t.g=$p(t.l,n?e:null,!t.s),0<t.O&&(t.M=new mT(qe(t.Pa,t,t.g),t.O)),tp(t.U,t.g,"readystatechange",t.nb),e=t.I?zd(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),vr(),yT(t.j,t.u,t.A,t.m,t.W,t.s)}R.nb=function(t){t=t.target;const e=this.M;e&&At(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const l=At(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||La||this.g&&(this.h.h||this.g.ja()||lh(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?vr(3):vr(2)),mo(this);var n=this.g.da();this.ca=n;t:if(lp(this)){var s=lh(this.g);t="";var r=s.length,i=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),Zs(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,vT(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dr(a)){var u=a;break t}}u=null}if(n=u)ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ha(this,n);else{this.i=!1,this.o=3,We(12),xn(this),Zs(this);break e}}this.S?(hp(this,l,o),La&&this.i&&l==3&&(tp(this.U,this.V,"tick",this.mb),this.V.start())):(ss(this.j,this.m,o,null),Ha(this,o)),l==4&&xn(this),this.i&&!this.J&&(l==4?Pp(this.l,this):(this.i=!1,Mr(this)))}else jT(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),xn(this),Zs(this)}}}catch{}finally{}};function lp(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function hp(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=IT(t,n),r==ki){e==4&&(t.o=4,We(14),s=!1),ss(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ja){t.o=4,We(15),ss(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ss(t.j,t.m,r,null),Ha(t,r);lp(t)&&r!=ki&&r!=ja&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,We(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),su(e),e.M=!0,We(11))):(ss(t.j,t.m,n,"[Invalid Chunked Response]"),xn(t),Zs(t))}R.mb=function(){if(this.g){var t=At(this.g),e=this.g.ja();this.C<e.length&&(mo(this),hp(this,t,e),this.i&&t!=4&&Mr(this))}};function IT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ki:(n=Number(e.substring(n,s)),isNaN(n)?ja:(s+=1,s+n>e.length?ki:(e=e.slice(s,s+n),t.C=s+n,e)))}R.cancel=function(){this.J=!0,xn(this)};function Mr(t){t.Y=Date.now()+t.P,fp(t,t.P)}function fp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Nr(qe(t.lb,t),e)}function mo(t){t.B&&(z.clearTimeout(t.B),t.B=null)}R.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(wT(this.j,this.A),this.L!=2&&(vr(),We(17)),xn(this),this.o=2,Zs(this)):fp(this,this.Y-t)};function Zs(t){t.l.H==0||t.J||Pp(t.l,t)}function xn(t){mo(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gc(t.V),np(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ha(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||za(n.i,t))){if(!t.K&&za(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Pi(n),Eo(n);else break e;nu(n),We(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Nr(qe(n.ib,n),6e3));if(1>=Ep(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Rn(n,11)}else if((t.K||n.g==t)&&Pi(n),!dr(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=s.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Jc(i,i.h),i.h=null))}if(s.F){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.Da=I,de(s.I,s.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Fp(s,s.J?s.pa:null,s.Y),o.K){Tp(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(mo(a),Mr(a)),s.g=o}else Np(s);0<n.j.length&&To(n)}else u[0]!="stop"&&u[0]!="close"||Rn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Rn(n,7):tu(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}vr(4)}catch{}}function bT(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(oo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function _T(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(oo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function dp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(oo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=_T(t),s=bT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ST(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Pn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pn){this.h=t.h,Ni(this,t.j),this.s=t.s,this.g=t.g,Oi(this,t.m),this.l=t.l;var e=t.i,n=new wr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ah(this,n),this.o=t.o}else t&&(e=String(t).match(pp))?(this.h=!1,Ni(this,e[1]||"",!0),this.s=Hs(e[2]||""),this.g=Hs(e[3]||"",!0),Oi(this,e[4]),this.l=Hs(e[5]||"",!0),ah(this,e[6]||"",!0),this.o=Hs(e[7]||"")):(this.h=!1,this.i=new wr(null,this.h))}Pn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(zs(e,ch,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(zs(e,ch,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(zs(n,n.charAt(0)=="/"?DT:AT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",zs(n,RT)),t.join("")};function Kt(t){return new Pn(t)}function Ni(t,e,n){t.j=n?Hs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ah(t,e,n){e instanceof wr?(t.i=e,kT(t.i,t.h)):(n||(e=zs(e,xT)),t.i=new wr(e,t.h))}function de(t,e,n){t.i.set(e,n)}function yo(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Hs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function zs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,CT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function CT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ch=/[#\/\?@]/g,AT=/[#\?:]/g,DT=/[#\?]/g,xT=/[#\?@]/g,RT=/#/g;function wr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function wn(t){t.g||(t.g=new Map,t.h=0,t.i&&ST(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=wr.prototype;R.add=function(t,e){wn(this),this.i=null,t=ks(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gp(t,e){wn(t),e=ks(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function mp(t,e){return wn(t),e=ks(t,e),t.g.has(e)}R.forEach=function(t,e){wn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};R.ta=function(){wn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};R.Z=function(t){wn(this);let e=[];if(typeof t=="string")mp(this,t)&&(e=e.concat(this.g.get(ks(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return wn(this),this.i=null,t=ks(this,t),mp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function yp(t,e,n){gp(t,e),0<n.length&&(t.i=null,t.g.set(ks(t,e),$c(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ks(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kT(t,e){e&&!t.j&&(wn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(gp(this,s),yp(this,r,n))},t)),t.j=e}var NT=class{constructor(t,e){this.g=t,this.map=e}};function vp(t){this.l=t||OT,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var OT=10;function wp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ep(t){return t.h?1:t.g?t.g.size:0}function za(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jc(t,e){t.g?t.g.add(e):t.h=e}function Tp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vp.prototype.cancel=function(){if(this.i=Ip(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ip(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $c(t.i)}var PT=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function MT(){this.g=new PT}function LT(t,e,n){const s=n||"";try{dp(t,function(r,i){let o=r;Rr(r)&&(o=zc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function FT(t,e){const n=new ho;if(z.Image){const s=new Image;s.onload=Zr(ti,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Zr(ti,n,s,"TestLoadImage: error",!1,e),s.onabort=Zr(ti,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Zr(ti,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ti(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Lr(t){this.l=t.fc||null,this.j=t.ob||!1}Re(Lr,Qc);Lr.prototype.g=function(){return new vo(this.l,this.j)};Lr.prototype.i=function(t){return function(){return t}}({});function vo(t,e){xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Zc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Re(vo,xe);var Zc=0;R=vo.prototype;R.open=function(t,e){if(this.readyState!=Zc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Er(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=Zc};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Er(this)),this.g&&(this.readyState=3,Er(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bp(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function bp(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fr(this):Er(this),this.readyState==3&&bp(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,Fr(this))};R.Ya=function(t){this.g&&(this.response=t,Fr(this))};R.ka=function(){this.g&&Fr(this)};function Fr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Er(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Er(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $T=z.JSON.parse;function ye(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=_p,this.L=this.M=!1}Re(ye,xe);var _p="",VT=/^https?$/i,BT=["POST","PUT"];R=ye.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ua.g(),this.C=this.u?oh(this.u):oh(Ua),this.g.onreadystatechange=qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){uh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=Ud(BT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ap(this),0<this.B&&((this.L=UT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.ua,this)):this.A=Wc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){uh(this,i)}};function UT(t){return ws&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof Fc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function uh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Sp(t),wo(t)}function Sp(t){t.F||(t.F=!0,Me(t,"complete"),Me(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),wo(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wo(this,!0)),ye.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?Cp(this):this.kb())};R.kb=function(){Cp(this)};function Cp(t){if(t.h&&typeof Fc<"u"&&(!t.C[1]||At(t)!=4||t.da()!=2)){if(t.v&&At(t)==4)Wc(t.La,0,t);else if(Me(t,"readystatechange"),At(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(pp)[1]||null;!r&&z.self&&z.self.location&&(r=z.self.location.protocol.slice(0,-1)),s=!VT.test(r?r.toLowerCase():"")}n=s}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var i=2<At(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Sp(t)}}finally{wo(t)}}}}function wo(t,e){if(t.g){Ap(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ap(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}R.isActive=function(){return!!this.g};function At(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$T(e)}};function lh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case _p:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function jT(t){const e={};t=(t.g&&2<=At(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(dr(t[s]))continue;var n=dT(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}oT(e,function(s){return s.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dp(t){let e="";return Bc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function eu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Dp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function Bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xp(t){this.Ga=0,this.j=[],this.l=new ho,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Bs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Bs("baseRetryDelayMs",5e3,t),this.hb=Bs("retryDelaySeedMs",1e4,t),this.eb=Bs("forwardChannelMaxRetries",2,t),this.xa=Bs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new vp(t&&t.concurrentRequestLimit),this.Ja=new MT,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=xp.prototype;R.ra=8;R.H=1;function tu(t){if(Rp(t),t.H==3){var e=t.W++,n=Kt(t.I);if(de(n,"SID",t.K),de(n,"RID",e),de(n,"TYPE","terminate"),$r(t,n),e=new Pr(t,t.l,e),e.L=2,e.v=yo(Kt(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=$p(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Mr(e)}Lp(t)}function Eo(t){t.g&&(su(t),t.g.cancel(),t.g=null)}function Rp(t){Eo(t),t.u&&(z.clearTimeout(t.u),t.u=null),Pi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function To(t){if(!wp(t.i)&&!t.m){t.m=!0;var e=t.Na;gr||Zd(),mr||(gr(),mr=!0),Kc.add(e,t),t.C=0}}function qT(t,e){return Ep(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Nr(qe(t.Na,t,e),Mp(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Pr(this,this.l,t);let i=this.s;if(this.U&&(i?(i=zd(i),Kd(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=kp(this,r,e),n=Kt(this.I),de(n,"RID",t),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),$r(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Dp(i)))+"&"+e:this.o&&eu(n,this.o,i)),Jc(this.i,r),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",e),de(n,"SID","null"),r.aa=!0,qa(r,n,null)):qa(r,n,e),this.H=2}}else this.H==3&&(t?hh(this,t):this.j.length==0||wp(this.i)||hh(this))};function hh(t,e){var n;e?n=e.m:n=t.W++;const s=Kt(t.I);de(s,"SID",t.K),de(s,"RID",n),de(s,"AID",t.V),$r(t,s),t.o&&t.s&&eu(s,t.o,t.s),n=new Pr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=kp(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Jc(t.i,n),qa(n,s,e)}function $r(t,e){t.na&&Bc(t.na,function(n,s){de(e,s,n)}),t.h&&dp({},function(n,s){de(e,s,n)})}function kp(t,e,n){n=Math.min(t.j.length,n);var s=t.h?qe(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].g;const l=r[c].map;if(u-=i,0>u)i=Math.max(0,r[c].g-100),a=!1;else try{LT(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function Np(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;gr||Zd(),mr||(gr(),mr=!0),Kc.add(e,t),t.A=0}}function nu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Nr(qe(t.Ma,t),Mp(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,Op(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Nr(qe(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,We(10),Eo(this),Op(this))};function su(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Op(t){t.g=new Pr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Kt(t.wa);de(e,"RID","rpc"),de(e,"SID",t.K),de(e,"AID",t.V),de(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&de(e,"TO",t.qa),de(e,"TYPE","xmlhttp"),$r(t,e),t.o&&t.s&&eu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=yo(Kt(e)),n.s=null,n.S=!0,up(n,t)}R.ib=function(){this.v!=null&&(this.v=null,Eo(this),nu(this),We(19))};function Pi(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Pp(t,e){var n=null;if(t.g==e){Pi(t),su(t),t.g=null;var s=2}else if(za(t.i,e))n=e.F,Tp(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=fo(),Me(s,new ip(s,n)),To(t)}else Np(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&qT(t,e)||s==2&&nu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Rn(t,5);break;case 4:Rn(t,10);break;case 3:Rn(t,6);break;default:Rn(t,2)}}}function Mp(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Rn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=qe(t.pb,t);n||(n=new Pn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Ni(n,"https"),yo(n)),FT(n.toString(),s)}else We(2);t.H=0,t.h&&t.h.za(e),Lp(t),Rp(t)}R.pb=function(t){t?(this.l.info("Successfully pinged google.com"),We(2)):(this.l.info("Failed to ping google.com"),We(1))};function Lp(t){if(t.H=0,t.ma=[],t.h){const e=Ip(t.i);(e.length!=0||t.j.length!=0)&&(th(t.ma,e),th(t.ma,t.j),t.i.i.length=0,$c(t.j),t.j.length=0),t.h.ya()}}function Fp(t,e,n){var s=n instanceof Pn?Kt(n):new Pn(n);if(s.g!="")e&&(s.g=e+"."+s.g),Oi(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Pn(null);s&&Ni(i,s),e&&(i.g=e),r&&Oi(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&de(s,n,e),de(s,"VER",t.ra),$r(t,s),s}function $p(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ye(new Lr({ob:!0})):new ye(t.va),e.Oa(t.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function Vp(){}R=Vp.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function Mi(){if(ws&&!(10<=Number(nT)))throw Error("Environmental error: no available transport.")}Mi.prototype.g=function(t,e){return new ot(t,e)};function ot(t,e){xe.call(this),this.g=new xp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!dr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!dr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ns(this)}Re(ot,xe);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;We(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Fp(t,null,t.Y),To(t)};ot.prototype.close=function(){tu(this.g)};ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zc(t),t=n);e.j.push(new NT(e.fb++,t)),e.H==3&&To(e)};ot.prototype.N=function(){this.g.h=null,delete this.j,tu(this.g),delete this.g,ot.$.N.call(this)};function Bp(t){Yc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Re(Bp,Yc);function Up(){Xc.call(this),this.status=1}Re(Up,Xc);function Ns(t){this.g=t}Re(Ns,Vp);Ns.prototype.Ba=function(){Me(this.g,"a")};Ns.prototype.Aa=function(t){Me(this.g,new Bp(t))};Ns.prototype.za=function(t){Me(this.g,new Up)};Ns.prototype.ya=function(){Me(this.g,"b")};function HT(){this.blockSize=-1}function vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Re(vt,HT);vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function oa(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}vt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)oa(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){oa(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){oa(this,s),r=0;break}}this.h=r,this.i+=e};vt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ae(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var zT={};function ru(t){return-128<=t&&128>t?Z1(t,function(e){return new ae([e|0],0>e?-1:0)}):new ae([t|0],0>t?-1:0)}function Dt(t){if(isNaN(t)||!isFinite(t))return us;if(0>t)return Oe(Dt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ka;return new ae(e,0)}function jp(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Oe(jp(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Dt(Math.pow(e,8)),s=us,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Dt(Math.pow(e,i)),s=s.R(i).add(Dt(o))):(s=s.R(n),s=s.add(Dt(o)))}return s}var Ka=4294967296,us=ru(0),Ga=ru(1),fh=ru(16777216);R=ae.prototype;R.ea=function(){if(ct(this))return-Oe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ka+s)*e,e*=Ka}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ut(this))return"0";if(ct(this))return"-"+Oe(this).toString(t);for(var e=Dt(Math.pow(t,6)),n=this,s="";;){var r=Fi(n,e).g;n=Li(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Ut(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ut(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ct(t){return t.h==-1}R.X=function(t){return t=Li(this,t),ct(t)?-1:Ut(t)?0:1};function Oe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ae(n,~t.h).add(Ga)}R.abs=function(){return ct(this)?Oe(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new ae(n,n[n.length-1]&-2147483648?-1:0)};function Li(t,e){return t.add(Oe(e))}R.R=function(t){if(Ut(this)||Ut(t))return us;if(ct(this))return ct(t)?Oe(this).R(Oe(t)):Oe(Oe(this).R(t));if(ct(t))return Oe(this.R(Oe(t)));if(0>this.X(fh)&&0>t.X(fh))return Dt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,ni(n,2*s+2*r),n[2*s+2*r+1]+=i*c,ni(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,ni(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,ni(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ae(n,0)};function ni(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Us(t,e){this.g=t,this.h=e}function Fi(t,e){if(Ut(e))throw Error("division by zero");if(Ut(t))return new Us(us,us);if(ct(t))return e=Fi(Oe(t),e),new Us(Oe(e.g),Oe(e.h));if(ct(e))return e=Fi(t,Oe(e)),new Us(Oe(e.g),e.h);if(30<t.g.length){if(ct(t)||ct(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ga,s=e;0>=s.X(t);)n=dh(n),s=dh(s);var r=Zn(n,1),i=Zn(s,1);for(s=Zn(s,2),n=Zn(n,2);!Ut(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Zn(s,1),n=Zn(n,1)}return e=Li(t,r.R(e)),new Us(r,e)}for(r=us;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Dt(n),o=i.R(e);ct(o)||0<o.X(t);)n-=s,i=Dt(n),o=i.R(e);Ut(i)&&(i=Ga),r=r.add(i),t=Li(t,o)}return new Us(r,t)}R.gb=function(t){return Fi(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ae(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ae(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ae(n,this.h^t.h)};function dh(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ae(n,t.h)}function Zn(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ae(r,t.h)}Mi.prototype.createWebChannel=Mi.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;po.NO_ERROR=0;po.TIMEOUT=8;po.HTTP_ERROR=6;op.COMPLETE="complete";ap.EventType=Or;Or.OPEN="a";Or.CLOSE="b";Or.ERROR="c";Or.MESSAGE="d";xe.prototype.listen=xe.prototype.O;ye.prototype.listenOnce=ye.prototype.P;ye.prototype.getLastError=ye.prototype.Sa;ye.prototype.getLastErrorCode=ye.prototype.Ia;ye.prototype.getStatus=ye.prototype.da;ye.prototype.getResponseJson=ye.prototype.Wa;ye.prototype.getResponseText=ye.prototype.ja;ye.prototype.send=ye.prototype.ha;ye.prototype.setWithCredentials=ye.prototype.Oa;vt.prototype.digest=vt.prototype.l;vt.prototype.reset=vt.prototype.reset;vt.prototype.update=vt.prototype.j;ae.prototype.add=ae.prototype.add;ae.prototype.multiply=ae.prototype.R;ae.prototype.modulo=ae.prototype.gb;ae.prototype.compare=ae.prototype.X;ae.prototype.toNumber=ae.prototype.ea;ae.prototype.toString=ae.prototype.toString;ae.prototype.getBits=ae.prototype.D;ae.fromNumber=Dt;ae.fromString=jp;var KT=function(){return new Mi},GT=function(){return fo()},aa=po,WT=op,QT=zn,ph={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},YT=Lr,si=ap,XT=ye,JT=vt,ls=ae;const gh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new xc("@firebase/firestore");function mh(){return Bn.logLevel}function F(t,...e){if(Bn.logLevel<=ie.DEBUG){const n=e.map(iu);Bn.debug(`Firestore (${Os}): ${t}`,...n)}}function Gt(t,...e){if(Bn.logLevel<=ie.ERROR){const n=e.map(iu);Bn.error(`Firestore (${Os}): ${t}`,...n)}}function Es(t,...e){if(Bn.logLevel<=ie.WARN){const n=e.map(iu);Bn.warn(`Firestore (${Os}): ${t}`,...n)}}function iu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw Gt(e),new Error(e)}function pe(t,e){t||K()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class eI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tI{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ln,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pe(typeof s.accessToken=="string"),new qp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new $e(e)}}class nI{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class sI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new nI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.T=n.token,new rI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=oI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function te(t,e){return t<e?-1:t>e?1:0}function Ts(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new _e(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new _e(0,0))}static max(){return new W(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Tr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Tr{construct(e,n,s){return new me(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new me(n)}static emptyPath(){return new me([])}}const aI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Tr{construct(e,n,s){return new Ue(e,n,s)}static isValidIdentifier(e){return aI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new j(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new j(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(me.fromString(e))}static fromName(e){return new q(me.fromString(e).popFirst(5))}static empty(){return new q(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new me(e.slice()))}}function cI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new _e(n+1,0):new _e(n,s));return new pn(r,q.empty(),e)}function uI(t){return new pn(t.readTime,t.key,-1)}class pn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new pn(W.min(),q.empty(),-1)}static max(){return new pn(W.max(),q.empty(),-1)}}function lI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==hI)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Br(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}ou.ct=-1;function Io(t){return t==null}function $i(t){return t===0&&1/t==-1/0}function dI(t){return typeof t=="number"&&Number.isInteger(t)&&!$i(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ri(this.root,e,this.comparator,!0)}}class ri{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ne.RED,this.left=r??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ne(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ne.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vh(this.data.getIterator())}getIteratorFrom(e){return new vh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class vh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new st([])}unionWith(e){let n=new ze(Ue.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new st(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Kp("Invalid base64 string: "+r):r}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const pI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(t){if(pe(!!t),typeof t=="string"){let e=0;const n=pI.exec(t);if(pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Un(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cu(t){const e=t.mapValue.fields.__previous_value__;return au(e)?cu(e):e}function Ir(t){const e=gn(t.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,s,r,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class br{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof br&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?au(t)?4:mI(t)?9007199254740991:10:K()}function Ot(t,e){if(t===e)return!0;const n=jn(t);if(n!==jn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ir(t).isEqual(Ir(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=gn(s.timestampValue),o=gn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Un(s.bytesValue).isEqual(Un(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Te(s.geoPointValue.latitude)===Te(r.geoPointValue.latitude)&&Te(s.geoPointValue.longitude)===Te(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Te(s.integerValue)===Te(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Te(s.doubleValue),o=Te(r.doubleValue);return i===o?$i(i)===$i(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(yh(i)!==yh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ot(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function _r(t,e){return(t.values||[]).find(n=>Ot(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=jn(t),s=jn(e);if(n!==s)return te(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Te(r.integerValue||r.doubleValue),a=Te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return wh(t.timestampValue,e.timestampValue);case 4:return wh(Ir(t),Ir(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Un(r),a=Un(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=te(o[c],a[c]);if(u!==0)return u}return te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=te(Te(r.latitude),Te(i.latitude));return o!==0?o:te(Te(r.longitude),Te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Is(o[c],a[c]);if(u)return u}return te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ii.mapValue&&i===ii.mapValue)return 0;if(r===ii.mapValue)return 1;if(i===ii.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=te(a[l],u[l]);if(h!==0)return h;const f=Is(o[a[l]],c[u[l]]);if(f!==0)return f}return te(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function wh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=gn(t),s=gn(e),r=te(n.seconds,s.seconds);return r!==0?r:te(n.nanos,s.nanos)}function bs(t){return Wa(t)}function Wa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=gn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Un(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Wa(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Wa(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function Qa(t){return!!t&&"integerValue"in t}function uu(t){return!!t&&"arrayValue"in t}function Eh(t){return!!t&&"nullValue"in t}function Th(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mi(t){return!!t&&"mapValue"in t}function er(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=er(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=er(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!mi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=er(n)}setAll(e){let n=Ue.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=er(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];mi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Kn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Xe(er(this.value))}}function Gp(t){const e=[];return Kn(t.fields,(n,s)=>{const r=new Ue([n]);if(mi(s)){const i=Gp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new st(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ve(e,0,W.min(),W.min(),W.min(),Xe.empty(),0)}static newFoundDocument(e,n,s,r){return new Ve(e,1,n,W.min(),s,r,0)}static newNoDocument(e,n){return new Ve(e,2,n,W.min(),W.min(),Xe.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,W.min(),W.min(),Xe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.position=e,this.inclusive=n}}function Ih(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=Is(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function bh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ot(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n="asc"){this.field=e,this.dir=n}}function yI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{}class be extends Wp{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new wI(e,n,s):n==="array-contains"?new II(e,s):n==="in"?new bI(e,s):n==="not-in"?new _I(e,s):n==="array-contains-any"?new SI(e,s):new be(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new EI(e,s):new TI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Is(n,this.value)):n!==null&&jn(this.value)===jn(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pt extends Wp{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Pt(e,n)}matches(e){return Qp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Qp(t){return t.op==="and"}function Yp(t){return vI(t)&&Qp(t)}function vI(t){for(const e of t.filters)if(e instanceof Pt)return!1;return!0}function Ya(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+bs(t.value);if(Yp(t))return t.filters.map(e=>Ya(e)).join(",");{const e=t.filters.map(n=>Ya(n)).join(",");return`${t.op}(${e})`}}function Xp(t,e){return t instanceof be?function(n,s){return s instanceof be&&n.op===s.op&&n.field.isEqual(s.field)&&Ot(n.value,s.value)}(t,e):t instanceof Pt?function(n,s){return s instanceof Pt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Xp(i,s.filters[o]),!0):!1}(t,e):void K()}function Jp(t){return t instanceof be?function(e){return`${e.field.canonicalString()} ${e.op} ${bs(e.value)}`}(t):t instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(Jp).join(" ,")+"}"}(t):"Filter"}class wI extends be{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class EI extends be{constructor(e,n){super(e,"in",n),this.keys=Zp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TI extends be{constructor(e,n){super(e,"not-in",n),this.keys=Zp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Zp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class II extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uu(n)&&_r(n.arrayValue,this.value)}}class bI extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_r(this.value.arrayValue,n)}}class _I extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_r(this.value.arrayValue,n)}}class SI extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>_r(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function _h(t,e=null,n=[],s=[],r=null,i=null,o=null){return new CI(t,e,n,s,r,i,o)}function lu(t){const e=Q(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ya(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Io(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>bs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>bs(s)).join(",")),e.dt=n}return e.dt}function hu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Xp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bh(t.startAt,e.startAt)&&bh(t.endAt,e.endAt)}function Xa(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function AI(t,e,n,s,r,i,o,a){return new bo(t,e,n,s,r,i,o,a)}function fu(t){return new bo(t)}function Sh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xI(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function RI(t){return t.collectionGroup!==null}function hs(t){const e=Q(t);if(e.wt===null){e.wt=[];const n=xI(e),s=DI(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new tr(n)),e.wt.push(new tr(Ue.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new tr(Ue.keyField(),i))}}}return e.wt}function Wt(t){const e=Q(t);if(!e._t)if(e.limitType==="F")e._t=_h(e.path,e.collectionGroup,hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of hs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new tr(i.field,o))}const s=e.endAt?new Vi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Vi(e.startAt.position,e.startAt.inclusive):null;e._t=_h(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Ja(t,e,n){return new bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _o(t,e){return hu(Wt(t),Wt(e))&&t.limitType===e.limitType}function eg(t){return`${lu(Wt(t))}|lt:${t.limitType}`}function Za(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Jp(s)).join(", ")}]`),Io(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>bs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>bs(s)).join(",")),`Target(${n})`}(Wt(t))}; limitType=${t.limitType})`}function So(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of hs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ih(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,hs(n),s)||n.endAt&&!function(r,i,o){const a=Ih(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,hs(n),s))}(t,e)}function kI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tg(t){return(e,n)=>{let s=!1;for(const r of hs(t)){const i=NI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function NI(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Is(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Kn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return zp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=new ge(q.comparator);function Qt(){return OI}const ng=new ge(q.comparator);function Ks(...t){let e=ng;for(const n of t)e=e.insert(n.key,n);return e}function sg(t){let e=ng;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function kn(){return nr()}function rg(){return nr()}function nr(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const PI=new ge(q.comparator),MI=new ze(q.comparator);function J(...t){let e=MI;for(const n of t)e=e.add(n);return e}const LI=new ze(te);function FI(){return LI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(e)?"-0":e}}function og(t){return{integerValue:""+t}}function $I(t,e){return dI(e)?og(e):ig(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this._=void 0}}function VI(t,e,n){return t instanceof Bi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&au(r)&&(r=cu(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Sr?cg(t,e):t instanceof Cr?ug(t,e):function(s,r){const i=ag(s,r),o=Ch(i)+Ch(s.gt);return Qa(i)&&Qa(s.gt)?og(o):ig(s.serializer,o)}(t,e)}function BI(t,e,n){return t instanceof Sr?cg(t,e):t instanceof Cr?ug(t,e):n}function ag(t,e){return t instanceof Ui?Qa(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Bi extends Co{}class Sr extends Co{constructor(e){super(),this.elements=e}}function cg(t,e){const n=lg(e);for(const s of t.elements)n.some(r=>Ot(r,s))||n.push(s);return{arrayValue:{values:n}}}class Cr extends Co{constructor(e){super(),this.elements=e}}function ug(t,e){let n=lg(e);for(const s of t.elements)n=n.filter(r=>!Ot(r,s));return{arrayValue:{values:n}}}class Ui extends Co{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Ch(t){return Te(t.integerValue||t.doubleValue)}function lg(t){return uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function UI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Sr&&s instanceof Sr||n instanceof Cr&&s instanceof Cr?Ts(n.elements,s.elements,Ot):n instanceof Ui&&s instanceof Ui?Ot(n.gt,s.gt):n instanceof Bi&&s instanceof Bi}(t.transform,e.transform)}class jI{constructor(e,n){this.version=e,this.transformResults=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ao{}function hg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dg(t.key,Rt.none()):new Ur(t.key,t.data,Rt.none());{const n=t.data,s=Xe.empty();let r=new ze(Ue.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new En(t.key,s,new st(r.toArray()),Rt.none())}}function qI(t,e,n){t instanceof Ur?function(s,r,i){const o=s.value.clone(),a=Dh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof En?function(s,r,i){if(!yi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Dh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function sr(t,e,n,s){return t instanceof Ur?function(r,i,o,a){if(!yi(r.precondition,i))return o;const c=r.value.clone(),u=xh(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof En?function(r,i,o,a){if(!yi(r.precondition,i))return o;const c=xh(r.fieldTransforms,a,i),u=i.data;return u.setAll(fg(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return yi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function HI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=ag(s.transform,r||null);i!=null&&(n===null&&(n=Xe.empty()),n.set(s.field,i))}return n||null}function Ah(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ts(n,s,(r,i)=>UI(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ur extends Ao{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class En extends Ao{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Dh(t,e,n){const s=new Map;pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,BI(o,a,n[r]))}return s}function xh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,VI(i,o,e))}return s}class dg extends Ao{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zI extends Ao{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&qI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=sr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=sr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=rg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=hg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,s)=>Ah(n,s))&&Ts(this.baseMutations,e.baseMutations,(n,s)=>Ah(n,s))}}class du{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){pe(e.mutations.length===s.length);let r=PI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new du(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,Z;function QI(t){switch(t){default:return K();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function pg(t){if(t===void 0)return Gt("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ee.OK:return _.OK;case Ee.CANCELLED:return _.CANCELLED;case Ee.UNKNOWN:return _.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return _.INTERNAL;case Ee.UNAVAILABLE:return _.UNAVAILABLE;case Ee.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ee.NOT_FOUND:return _.NOT_FOUND;case Ee.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ee.ABORTED:return _.ABORTED;case Ee.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ee.DATA_LOSS:return _.DATA_LOSS;default:return K()}}(Z=Ee||(Ee={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return oi}static getOrCreateInstance(){return oi===null&&(oi=new pu),oi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let oi=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=new ls([4294967295,4294967295],0);function Rh(t){const e=YI().encode(t),n=new JT;return n.update(e),new Uint8Array(n.digest())}function kh(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ls([n,s],0),new ls([r,i],0)]}class gu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Gs(`Invalid padding: ${n}`);if(s<0)throw new Gs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Gs(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Gs(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ls.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(ls.fromNumber(s)));return r.compare(XI)===1&&(r=new ls([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Rh(e),[s,r]=kh(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gu(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Rh(e),[s,r]=kh(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,jr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Do(W.min(),r,new ge(te),Qt(),J())}}class jr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new jr(s,n,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class gg{constructor(e,n){this.targetId=e,this.Vt=n}}class mg{constructor(e,n,s=Ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Nh{constructor(){this.St=0,this.Dt=Ph(),this.Ct=Ke.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=J(),n=J(),s=J();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new jr(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Ph()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class JI{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Qt(),this.zt=Oh(),this.Wt=new ge(te)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(Xa(o))if(r===0){const a=new q(o.path);this.Yt(s,a,Ve.newNoDocument(a,W.min()))}else pe(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,u)}(n=pu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,l,h){var f,g,E,I,C,k;const O={localCacheCount:l,existenceFilterCount:h.count},H=h.unchangedNames;return H&&(O.bloomFilter={applied:u===0,hashCount:(f=H==null?void 0:H.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(I=(E=(g=H==null?void 0:H.bits)===null||g===void 0?void 0:g.bitmap)===null||E===void 0?void 0:E.length)!==null&&I!==void 0?I:0,padding:(k=(C=H==null?void 0:H.bits)===null||C===void 0?void 0:C.padding)!==null&&k!==void 0?k:0}),O}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,u;try{c=Un(i).toUint8Array()}catch(l){if(l instanceof Kp)return Es("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new gu(c,o,a)}catch(l){return Es(l instanceof Gs?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:r!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Xa(a.target)){const c=new q(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Ve.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=J();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new Do(e,n,this.Wt,this.jt,s);return this.jt=Qt(),this.zt=Oh(),this.Wt=new ge(te),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Nh,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new ze(te),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Nh),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Oh(){return new ge(q.comparator)}function Ph(){return new ge(q.comparator)}const ZI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),eb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),tb=(()=>({and:"AND",or:"OR"}))();class nb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ec(t,e){return t.useProto3Json||Io(e)?e:{value:e}}function ji(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sb(t,e){return ji(t,e.toTimestamp())}function kt(t){return pe(!!t),W.fromTimestamp(function(e){const n=gn(e);return new _e(n.seconds,n.nanos)}(t))}function mu(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vg(t){const e=me.fromString(t);return pe(Ig(e)),e}function tc(t,e){return mu(t.databaseId,e.path)}function ca(t,e){const n=vg(e);if(n.get(1)!==t.databaseId.projectId)throw new j(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(wg(n))}function nc(t,e){return mu(t.databaseId,e)}function rb(t){const e=vg(t);return e.length===4?me.emptyPath():wg(e)}function sc(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wg(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mh(t,e,n){return{name:tc(t,e),fields:n.value.mapValue.fields}}function ib(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(pe(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(pe(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:pg(c.code);return new j(u,c.message||"")}(o);n=new mg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ca(t,s.document.name),i=kt(s.document.updateTime),o=s.document.createTime?kt(s.document.createTime):W.min(),a=new Xe({mapValue:{fields:s.document.fields}}),c=Ve.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new vi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ca(t,s.document),i=s.readTime?kt(s.readTime):W.min(),o=Ve.newNoDocument(r,i),a=s.removedTargetIds||[];n=new vi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ca(t,s.document),i=s.removedTargetIds||[];n=new vi([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new WI(r,i),a=s.targetId;n=new gg(a,o)}}return n}function ob(t,e){let n;if(e instanceof Ur)n={update:Mh(t,e.key,e.value)};else if(e instanceof dg)n={delete:tc(t,e.key)};else if(e instanceof En)n={update:Mh(t,e.key,e.data),updateMask:gb(e.fieldMask)};else{if(!(e instanceof zI))return K();n={verify:tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Bi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Sr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Cr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ui)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:sb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function ab(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?kt(s.updateTime):kt(r);return i.isEqual(W.min())&&(i=kt(r)),new jI(i,s.transformResults||[])}(n,e))):[]}function cb(t,e){return{documents:[nc(t,e.path)]}}function ub(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=nc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=nc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Tg(Pt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ts(l.field),direction:fb(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ec(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function lb(t){let e=rb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){pe(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Eg(l);return h instanceof Pt&&Yp(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new tr(ns(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Io(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Vi(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Vi(f,h)}(n.endAt)),AI(e,r,o,i,a,"F",c,u)}function hb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Eg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ns(e.unaryFilter.field);return be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(e.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ns(e.unaryFilter.field);return be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ns(e.unaryFilter.field);return be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return be.create(ns(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(n=>Eg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function fb(t){return ZI[t]}function db(t){return eb[t]}function pb(t){return tb[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return Ue.fromServerFormat(t.fieldPath)}function Tg(t){return t instanceof be?function(e){if(e.op==="=="){if(Th(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NAN"}};if(Eh(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Th(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NOT_NAN"}};if(Eh(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(e.field),op:db(e.op),value:e.value}}}(t):t instanceof Pt?function(e){const n=e.getFilters().map(s=>Tg(s));return n.length===1?n[0]:{compositeFilter:{op:pb(e.op),filters:n}}}(t):K()}function gb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ig(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,s,r,i=W.min(),o=W.min(),a=Ke.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.fe=e}}function yb(t){const e=lb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ja(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.rn=new wb}addToCollectionParentIndex(e,n){return this.rn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(pn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class wb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ze(me.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ze(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new _s(0)}static Mn(){return new _s(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&sr(s.mutation,r,st.empty(),_e.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,J()).next(()=>s))}getLocalViewOfDocuments(e,n,s=J()){const r=kn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ks();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=kn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,J()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Qt();const o=nr(),a=nr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof En)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),sr(l.mutation,u,l.mutation.getFieldMask(),_e.now())):o.set(u.key,st.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Tb(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=nr();let r=new ge((o,a)=>o-a),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||st.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||J()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=rg();l.forEach(f=>{if(!i.has(f)){const g=hg(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(kn());let a=-1,c=i;return o.next(u=>S.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?S.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,J())).next(l=>({batchId:a,changes:sg(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let r=Ks();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ks();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(u,l){return new bo(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Ve.newInvalidDocument(u)))});let o=Ks();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&sr(u.mutation,c,st.empty(),_e.now()),So(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return S.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:kt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:yb(s.bundledQuery),readTime:kt(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.overlays=new ge(q.comparator),this.ls=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=kn();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=kn(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ge((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=kn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=kn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return S.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new GI(n,s));let i=this.ls.get(n);i===void 0&&(i=J(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.fs=new ze(Ae.ds),this.ws=new ze(Ae._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Ae(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Ae(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new q(new me([])),s=new Ae(n,e),r=new Ae(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new q(new me([])),s=new Ae(n,e),r=new Ae(n,e+1);let i=J();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ae(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ae{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return q.comparator(e.key,n.key)||te(e.As,n.As)}static _s(e,n){return te(e.As,n.As)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ze(Ae.ds)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Ae(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ae(n,0),r=new Ae(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ze(te);return n.forEach(r=>{const i=new Ae(r,0),o=new Ae(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),S.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const o=new Ae(new q(i),0);let a=new ze(te);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.As)),!0)},o),S.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){pe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return S.forEach(n.mutations,r=>{const i=new Ae(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Ae(n,0),r=this.Rs.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.Ds=e,this.docs=new ge(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let s=Qt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ve.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Qt();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||lI(uI(l),s)<=0||(r.has(l.key)||So(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){K()}Cs(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Ab(this)}getSize(e){return S.resolve(this.size)}}class Ab extends Eb{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.persistence=e,this.xs=new Ps(n=>lu(n),hu),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Ns=0,this.ks=new yu,this.targetCount=0,this.Ms=_s.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),S.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Fn(n),S.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this.$s={},this.overlays={},this.Os=new ou(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Db(this),this.indexManager=new vb,this.remoteDocumentCache=function(s){return new Cb(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new mb(n),this.qs=new bb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _b,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new Sb(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new Rb(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return S.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class Rb extends fI{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.Qs=new yu,this.js=null}static zs(e){return new vu(e)}get Ws(){if(this.js)return this.js;throw K()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),S.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ws,s=>{const r=q.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,W.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return S.or([()=>S.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=J(),r=J();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(Sh(n))return S.resolve(null);let s=Wt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ja(n,null,"F"),s=Wt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=J(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ji(n,a);return this.zi(n,u,o,c.readTime)?this.Ki(e,Ja(n,null,"F")):this.Wi(e,u,n,c)}))})))}Gi(e,n,s,r){return Sh(n)||r.isEqual(W.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(mh()<=ie.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Za(n)),this.Wi(e,o,n,cI(r,-1)))})}ji(e,n){let s=new ze(tg(e));return n.forEach((r,i)=>{So(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return mh()<=ie.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Za(n)),this.Ui.getDocumentsMatchingQuery(e,n,pn.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new ge(te),this.Yi=new Ps(i=>lu(i),hu),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ib(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Ob(t,e,n,s){return new Nb(t,e,n,s)}async function bg(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=J();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function Pb(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=S.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(E=>{const I=c.docVersions.get(g);pe(I!==null),E.version.compareTo(I)<0&&(l.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=J();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function _g(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function Mb(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(E,I,C){return E.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,g,l)&&a.push(n.Bs.updateTargetData(i,g))});let c=Qt(),u=J();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Lb(i,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!s.isEqual(W.min())){const l=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ji=r,i))}function Lb(t,e,n){let s=J(),r=J();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Qt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:r}})}function Fb(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function $b(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new sn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function rc(t,e,n){const s=Q(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Br(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function Lh(t,e,n){const s=Q(t);let r=W.min(),i=J();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Q(a),h=l.Yi.get(u);return h!==void 0?S.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(s,o,Wt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:W.min(),n?i:J())).next(a=>(Vb(s,kI(e),a),{documents:a,ir:i})))}function Vb(t,e,n){let s=t.Xi.get(e)||W.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class Fh{constructor(){this.activeTargetIds=FI()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bb{constructor(){this.Hr=new Fh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Fh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai=null;function ua(){return ai===null?ai=268435456+Math.round(2147483648*Math.random()):ai++,"0x"+ai.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection";class Hb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=ua(),a=this.To(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(u=>(F("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Es("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Os,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=jb[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=ua();return new Promise((o,a)=>{const c=new XT;c.setWithCredentials(!0),c.listenOnce(WT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case aa.NO_ERROR:const l=c.getResponseJson();F(Fe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case aa.TIMEOUT:F(Fe,`RPC '${e}' ${i} timed out`),a(new j(_.DEADLINE_EXCEEDED,"Request time out"));break;case aa.HTTP_ERROR:const h=c.getStatus();if(F(Fe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const E=function(I){const C=I.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(C)>=0?C:_.UNKNOWN}(g.status);a(new j(E,g.message))}else a(new j(_.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(_.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F(Fe,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);F(Fe,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}Ro(e,n,s){const r=ua(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KT(),a=GT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new YT({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");F(Fe,`Creating RPC '${e}' stream ${r}: ${l}`,c);const h=o.createWebChannel(l,c);let f=!1,g=!1;const E=new qb({ro:C=>{g?F(Fe,`Not sending because RPC '${e}' stream ${r} is closed:`,C):(f||(F(Fe,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),F(Fe,`RPC '${e}' stream ${r} sending:`,C),h.send(C))},oo:()=>h.close()}),I=(C,k,O)=>{C.listen(k,H=>{try{O(H)}catch(M){setTimeout(()=>{throw M},0)}})};return I(h,si.EventType.OPEN,()=>{g||F(Fe,`RPC '${e}' stream ${r} transport opened.`)}),I(h,si.EventType.CLOSE,()=>{g||(g=!0,F(Fe,`RPC '${e}' stream ${r} transport closed`),E.wo())}),I(h,si.EventType.ERROR,C=>{g||(g=!0,Es(Fe,`RPC '${e}' stream ${r} transport errored:`,C),E.wo(new j(_.UNAVAILABLE,"The operation could not be completed")))}),I(h,si.EventType.MESSAGE,C=>{var k;if(!g){const O=C.data[0];pe(!!O);const H=O,M=H.error||((k=H[0])===null||k===void 0?void 0:k.error);if(M){F(Fe,`RPC '${e}' stream ${r} received error:`,M);const ve=M.status;let Ie=function(lt){const Mt=Ee[lt];if(Mt!==void 0)return pg(Mt)}(ve),tt=M.message;Ie===void 0&&(Ie=_.INTERNAL,tt="Unknown error status: "+ve+" with message "+M.message),g=!0,E.wo(new j(Ie,tt)),h.close()}else F(Fe,`RPC '${e}' stream ${r} received:`,O),E._o(O)}}),I(a,QT.STAT_EVENT,C=>{C.stat===ph.PROXY?F(Fe,`RPC '${e}' stream ${r} detected buffering proxy`):C.stat===ph.NOPROXY&&F(Fe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function la(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){return new nb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Sg(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Gt(n.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new j(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zb extends Cg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=ib(this.serializer,e),s=function(r){if(!("targetChange"in r))return W.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?kt(i.readTime):W.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=sc(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Xa(a)?{documents:cb(r,a)}:{query:ub(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=yg(r,i.resumeToken);const c=ec(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(W.min())>0){o.readTime=ji(r,i.snapshotVersion.toTimestamp());const c=ec(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=hb(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=sc(this.serializer),n.removeTarget=e,this.Wo(n)}}class Kb extends Cg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=ab(e.writeResults,e.commitTime),s=kt(e.commitTime);return this.listener.cu(s,n)}return pe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=sc(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ob(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new j(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(_.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(_.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class Wb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Gt(n),this.mu=!1):F("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Gn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.vu.add(4),await qr(c),c.bu.set("Unknown"),c.vu.delete(4),await Ro(c)}(this))})}),this.bu=new Wb(s,r)}}async function Ro(t){if(Gn(t))for(const e of t.Ru)await e(!0)}async function qr(t){for(const e of t.Ru)await e(!1)}function Ag(t,e){const n=Q(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Iu(n)?Tu(n):Ms(n).Ko()&&Eu(n,e))}function Dg(t,e){const n=Q(t),s=Ms(n);n.Au.delete(e),s.Ko()&&xg(n,e),n.Au.size===0&&(s.Ko()?s.jo():Gn(n)&&n.bu.set("Unknown"))}function Eu(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).su(e)}function xg(t,e){t.Vu.qt(e),Ms(t).iu(e)}function Tu(t){t.Vu=new JI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.bu.gu()}function Iu(t){return Gn(t)&&!Ms(t).Uo()&&t.Au.size>0}function Gn(t){return Q(t).vu.size===0}function Rg(t){t.Vu=void 0}async function Yb(t){t.Au.forEach((e,n)=>{Eu(t,e)})}async function Xb(t,e){Rg(t),Iu(t)?(t.bu.Iu(e),Tu(t)):t.bu.set("Unknown")}async function Jb(t,e,n){if(t.bu.set("Online"),e instanceof mg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await qi(t,s)}else if(e instanceof vi?t.Vu.Ht(e):e instanceof gg?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(W.min()))try{const s=await _g(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.Au.get(c);u&&r.Au.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const u=r.Au.get(a);if(!u)return;r.Au.set(a,u.withResumeToken(Ke.EMPTY_BYTE_STRING,u.snapshotVersion)),xg(r,a);const l=new sn(u.target,a,c,u.sequenceNumber);Eu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await qi(t,s)}}async function qi(t,e,n){if(!Br(e))throw e;t.vu.add(1),await qr(t),t.bu.set("Offline"),n||(n=()=>_g(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Ro(t)})}function kg(t,e){return e().catch(n=>qi(t,n,e))}async function ko(t){const e=Q(t),n=mn(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Zb(e);)try{const r=await Fb(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,e_(e,r)}catch(r){await qi(e,r)}Ng(e)&&Og(e)}function Zb(t){return Gn(t)&&t.Eu.length<10}function e_(t,e){t.Eu.push(e);const n=mn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Ng(t){return Gn(t)&&!mn(t).Uo()&&t.Eu.length>0}function Og(t){mn(t).start()}async function t_(t){mn(t).hu()}async function n_(t){const e=mn(t);for(const n of t.Eu)e.uu(n.mutations)}async function s_(t,e,n){const s=t.Eu.shift(),r=du.from(s,e,n);await kg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ko(t)}async function r_(t,e){e&&mn(t).ou&&await async function(n,s){if(r=s.code,QI(r)&&r!==_.ABORTED){const i=n.Eu.shift();mn(n).Qo(),await kg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ko(n)}var r}(t,e),Ng(t)&&Og(t)}async function Vh(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=Gn(n);n.vu.add(3),await qr(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Ro(n)}async function i_(t,e){const n=Q(t);e?(n.vu.delete(2),await Ro(n)):e||(n.vu.add(2),await qr(n),n.bu.set("Unknown"))}function Ms(t){return t.Su||(t.Su=function(e,n,s){const r=Q(e);return r.fu(),new zb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:Yb.bind(null,t),ao:Xb.bind(null,t),nu:Jb.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Iu(t)?Tu(t):t.bu.set("Unknown")):(await t.Su.stop(),Rg(t))})),t.Su}function mn(t){return t.Du||(t.Du=function(e,n,s){const r=Q(e);return r.fu(),new Kb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:t_.bind(null,t),ao:r_.bind(null,t),au:n_.bind(null,t),cu:s_.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await ko(t)):(await t.Du.stop(),t.Eu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new bu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _u(t,e){if(Gt("AsyncQueue",`${e}: ${t}`),Br(t))return new j(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=Ks(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new fs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.Cu=new ge(q.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):K():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ss{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ss(e,n,fs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.Nu=void 0,this.listeners=[]}}class a_{constructor(){this.queries=new Ps(e=>eg(e),_o),this.onlineState="Unknown",this.ku=new Set}}async function c_(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new o_),r)try{i.Nu=await n.onListen(s)}catch(o){const a=_u(o,`Initialization of query '${Za(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Su(n)}async function u_(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function l_(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&Su(n)}function h_(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Su(t){t.ku.forEach(e=>{e.next()})}class f_{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ss(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.key=e}}class Mg{constructor(e){this.key=e}}class d_{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=J(),this.mutatedKeys=J(),this.tc=tg(e),this.ec=new fs(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Bh,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=So(this.query,h)?h:null,E=!!f&&this.mutatedKeys.has(f.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;f&&g?f.data.isEqual(g.data)?E!==I&&(s.track({type:3,doc:g}),C=!0):this.rc(f,g)||(s.track({type:2,doc:g}),C=!0,(c&&this.tc(g,c)>0||u&&this.tc(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),C=!0):f&&!g&&(s.track({type:1,doc:f}),C=!0,(c||u)&&(a=!0)),C&&(g?(o=o.add(g),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((u,l)=>function(h,f){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(f)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new Ss(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Bh,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=J(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new Mg(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new Pg(s))}),n}hc(e){this.Yu=e.ir,this.Zu=J();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Ss.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class p_{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class g_{constructor(e){this.key=e,this.fc=!1}}class m_{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ps(a=>eg(a),_o),this._c=new Map,this.mc=new Set,this.gc=new ge(q.comparator),this.yc=new Map,this.Ic=new yu,this.Tc={},this.Ec=new Map,this.Ac=_s.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function y_(t,e){const n=A_(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await $b(n.localStore,Wt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await v_(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Ag(n.remoteStore,o)}return r}async function v_(t,e,n,s,r){t.Rc=(h,f,g)=>async function(E,I,C,k){let O=I.view.sc(C);O.zi&&(O=await Lh(E.localStore,I.query,!1).then(({documents:ve})=>I.view.sc(ve,O)));const H=k&&k.targetChanges.get(I.targetId),M=I.view.applyChanges(O,E.isPrimaryClient,H);return jh(E,I.targetId,M.cc),M.snapshot}(t,h,f,g);const i=await Lh(t.localStore,e,!0),o=new d_(e,i.ir),a=o.sc(i.documents),c=jr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);jh(t,n,u.cc);const l=new p_(e,n,o);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function w_(t,e){const n=Q(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!_o(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await rc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Dg(n.remoteStore,s.targetId),ic(n,s.targetId)}).catch(Vr)):(ic(n,s.targetId),await rc(n.localStore,s.targetId,!0))}async function E_(t,e,n){const s=D_(t);try{const r=await function(i,o){const a=Q(i),c=_e.now(),u=o.reduce((f,g)=>f.add(g.key),J());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Qt(),E=J();return a.Zi.getEntries(f,u).next(I=>{g=I,g.forEach((C,k)=>{k.isValidDocument()||(E=E.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(I=>{l=I;const C=[];for(const k of o){const O=HI(k,l.get(k.key).overlayedDocument);O!=null&&C.push(new En(k.key,O,Gp(O.value.mapValue),Rt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,C,o)}).next(I=>{h=I;const C=I.applyToLocalDocumentSet(l,E);return a.documentOverlayCache.saveOverlays(f,I.batchId,C)})}).then(()=>({batchId:h.batchId,changes:sg(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new ge(te)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Hr(s,r.changes),await ko(s.remoteStore)}catch(r){const i=_u(r,"Failed to persist write");n.reject(i)}}async function Lg(t,e){const n=Q(t);try{const s=await Mb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?pe(o.fc):r.removedDocuments.size>0&&(pe(o.fc),o.fc=!1))}),await Hr(n,s,e)}catch(s){await Vr(s)}}function Uh(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&Su(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function T_(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new ge(q.comparator);o=o.insert(i,Ve.newNoDocument(i,W.min()));const a=J().add(i),c=new Do(W.min(),new Map,new ge(te),o,a);await Lg(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),Cu(s)}else await rc(s.localStore,e,!1).then(()=>ic(s,e,n)).catch(Vr)}async function I_(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await Pb(n.localStore,e);$g(n,s,null),Fg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Hr(n,r)}catch(r){await Vr(r)}}async function b_(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(pe(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);$g(s,e,n),Fg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Hr(s,r)}catch(r){await Vr(r)}}function Fg(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function $g(t,e,n){const s=Q(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function ic(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||Vg(t,s)})}function Vg(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Dg(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Cu(t))}function jh(t,e,n){for(const s of n)s instanceof Pg?(t.Ic.addReference(s.key,e),__(t,s)):s instanceof Mg?(F("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Vg(t,s.key)):K()}function __(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(F("SyncEngine","New document in limbo: "+n),t.mc.add(s),Cu(t))}function Cu(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new q(me.fromString(e)),s=t.Ac.next();t.yc.set(s,new g_(n)),t.gc=t.gc.insert(n,s),Ag(t.remoteStore,new sn(Wt(fu(n.path)),s,"TargetPurposeLimboResolution",ou.ct))}}async function Hr(t,e,n){const s=Q(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=wu.Li(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>S.forEach(c,h=>S.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>S.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Br(l))throw l;F("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ji.get(h),g=f.snapshotVersion,E=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(h,E)}}}(s.localStore,i))}async function S_(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await bg(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new j(_.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Hr(n,s.er)}}function C_(t,e){const n=Q(t),s=n.yc.get(e);if(s&&s.fc)return J().add(s.key);{let r=J();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function A_(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=T_.bind(null,e),e.dc.nu=l_.bind(null,e.eventManager),e.dc.Pc=h_.bind(null,e.eventManager),e}function D_(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=I_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=b_.bind(null,e),e}class qh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Ob(this.persistence,new kb,e.initialUser,this.serializer)}createPersistence(e){return new xb(vu.zs,this.serializer)}createSharedClientState(e){return new Bb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class x_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Uh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=S_.bind(null,this.syncEngine),await i_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new a_}createDatastore(e){const n=xo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Hb(r));var r;return function(i,o,a,c){return new Gb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Uh(this.syncEngine,a,0),o=$h.D()?new $h:new Ub,new Qb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new m_(s,r,i,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);F("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await qr(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Gt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=$e.UNAUTHENTICATED,this.clientId=Hp.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=_u(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ha(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await bg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await O_(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Vh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Vh(e.remoteStore,i)),t._onlineComponents=e}function N_(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function O_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await ha(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!N_(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await ha(t,new qh)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await ha(t,new qh);return t._offlineComponents}async function Bg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Hh(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Hh(t,new x_))),t._onlineComponents}function P_(t){return Bg(t).then(e=>e.syncEngine)}async function M_(t){const e=await Bg(t),n=e.eventManager;return n.onListen=y_.bind(null,e.syncEngine),n.onUnlisten=w_.bind(null,e.syncEngine),n}function L_(t,e,n={}){const s=new ln;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new R_({next:h=>{i.enqueueAndForget(()=>u_(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new j(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new j(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new f_(fu(o.path),u,{includeMetadataChanges:!0,Ku:!0});return c_(r,l)}(await M_(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t,e,n){if(!n)throw new j(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $_(t,e,n,s){if(e===!0&&s===!0)throw new j(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kh(t){if(!q.isDocumentKey(t))throw new j(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Au(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Au(t);throw new j(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new j(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ug((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class Du{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ZT;switch(n.type){case"firstParty":return new sI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zh.get(e);n&&(F("ComponentProvider","Removing Datastore"),zh.delete(e),n.terminate())}(this),Promise.resolve()}}function V_(t,e,n,s={}){var r;const i=(t=qn(t,Du))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=$e.MOCK_USER;else{a=Jw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new j(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new $e(u)}t._authCredentials=new eI(new qp(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class xu{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xu(this.firestore,e,this._query)}}class Ar extends xu{constructor(e,n,s){super(e,n,fu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new q(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function B_(t,e,...n){if(t=Ht(t),arguments.length===1&&(e=Hp.A()),F_("doc","path",e),t instanceof Du){const s=me.fromString(e,...n);return Kh(s),new it(t,null,new q(s))}{if(!(t instanceof it||t instanceof Ar))throw new j(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return Kh(s),new it(t.firestore,t instanceof Ar?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Sg(this,"async_queue_retry"),this.Xc=()=>{const n=la();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=la();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=la();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ln;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Br(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Gt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=bu.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&K()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class No extends Du{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new U_,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qg(this),this._firestoreClient.terminate()}}function j_(t,e){const n=typeof t=="object"?t:pd(),s=typeof t=="string"?t:e||"(default)",r=xr(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Yw("firestore");i&&V_(r,...i)}return r}function jg(t){return t._firestoreClient||qg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qg(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,u){return new gI(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ug(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new k_(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(Ke.fromBase64String(e))}catch(n){throw new j(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=/^__.*__$/;class H_{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new En(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ur(e,this.data,n,this.fieldTransforms)}}class Hg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new En(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Nu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Hi(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(zg(this.ca)&&q_.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class z_{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||xo(e)}ya(e,n,s,r=!1){return new Nu({ca:e,methodName:n,ga:s,path:Ue.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kg(t){const e=t._freezeSettings(),n=xo(t._databaseId);return new z_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function K_(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);Ou("Data must be an object, but it was:",o,s);const a=Gg(s,o);let c,u;if(i.merge)c=new st(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=oc(e,h,n);if(!o.contains(f))throw new j(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Qg(l,f)||l.push(f)}c=new st(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new H_(new Xe(a),c,u)}class Po extends Ru{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Po}}function G_(t,e,n,s){const r=t.ya(1,e,n);Ou("Data must be an object, but it was:",r,s);const i=[],o=Xe.empty();Kn(s,(c,u)=>{const l=Pu(e,c,n);u=Ht(u);const h=r.da(l);if(u instanceof Po)i.push(l);else{const f=Mo(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new st(i);return new Hg(o,a,r.fieldTransforms)}function W_(t,e,n,s,r,i){const o=t.ya(1,e,n),a=[oc(e,s,n)],c=[r];if(i.length%2!=0)throw new j(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(oc(e,i[f])),c.push(i[f+1]);const u=[],l=Xe.empty();for(let f=a.length-1;f>=0;--f)if(!Qg(u,a[f])){const g=a[f];let E=c[f];E=Ht(E);const I=o.da(g);if(E instanceof Po)u.push(g);else{const C=Mo(E,I);C!=null&&(u.push(g),l.set(g,C))}}const h=new st(u);return new Hg(l,h,o.fieldTransforms)}function Mo(t,e){if(Wg(t=Ht(t)))return Ou("Unsupported field value:",e,t),Gg(t,e);if(t instanceof Ru)return function(n,s){if(!zg(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Mo(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return $I(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=_e.fromDate(n);return{timestampValue:ji(s.serializer,r)}}if(n instanceof _e){const r=new _e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ji(s.serializer,r)}}if(n instanceof ku)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Cs)return{bytesValue:yg(s.serializer,n._byteString)};if(n instanceof it){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:mu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Au(n)}`)}(t,e)}function Gg(t,e){const n={};return zp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kn(t,(s,r)=>{const i=Mo(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Wg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof ku||t instanceof Cs||t instanceof it||t instanceof Ru)}function Ou(t,e,n){if(!Wg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Au(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function oc(t,e,n){if((e=Ht(e))instanceof Oo)return e._internalPath;if(typeof e=="string")return Pu(t,e);throw Hi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Q_=new RegExp("[~\\*/\\[\\]]");function Pu(t,e,n){if(e.search(Q_)>=0)throw Hi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oo(...e.split("."))._internalPath}catch{throw Hi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new j(_.INVALID_ARGUMENT,a+t+c)}function Qg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Y_ extends Yg{data(){return super.data()}}function Xg(t,e){return typeof e=="string"?Pu(t,e):e instanceof Oo?e._internalPath:e._delegate._internalPath}class X_{convertValue(e,n="none"){switch(jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Kn(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ku(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=cu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ir(e));default:return null}}convertTimestamp(e){const n=gn(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=me.fromString(e);pe(Ig(s));const r=new br(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(n)||Gt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jg extends Yg{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new eS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Xg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class eS extends Jg{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t){t=qn(t,it);const e=qn(t.firestore,No);return L_(jg(e),t._key).then(n=>sS(e,t,n))}class tS extends X_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function nS(t,e,n){t=qn(t,it);const s=qn(t.firestore,No),r=J_(t.converter,e,n);return Zg(s,[K_(Kg(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Rt.none())])}function AS(t,e,n,...s){t=qn(t,it);const r=qn(t.firestore,No),i=Kg(r);let o;return o=typeof(e=Ht(e))=="string"||e instanceof Oo?W_(i,"updateDoc",t._key,e,n,s):G_(i,"updateDoc",t._key,e),Zg(r,[o.toMutation(t._key,Rt.exists(!0))])}function Zg(t,e){return function(n,s){const r=new ln;return n.asyncQueue.enqueueAndForget(async()=>E_(await P_(n),s,r)),r.promise}(jg(t),e)}function sS(t,e,n){const s=n.docs.get(e._key),r=new tS(t);return new Jg(t,r,e._key,s,new Z_(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Os=n})(rE),dn(new zt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new No(new tI(n.getProvider("auth-internal")),new iI(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new j(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new br(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),xt(gh,"3.13.0",t),xt(gh,"3.13.0","esm2017")})();const rS={apiKey:"AIzaSyC5EahUiqrNQF70hDI8MH-7wuECKvs1sr8",authDomain:"chatgpt-7a122.firebaseapp.com",projectId:"chatgpt-7a122",storageBucket:"chatgpt-7a122.appspot.com",messagingSenderId:"347720165724",appId:"1:347720165724:web:a9b2cd693832366b943999",measurementId:"G-WVP03ZKEPM"},em=dd(rS);j1(em);const iS=j_(em);let ci;const oS=new Uint8Array(16);function aS(){if(!ci&&(ci=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ci))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ci(oS)}const ke=[];for(let t=0;t<256;++t)ke.push((t+256).toString(16).slice(1));function cS(t,e=0){return(ke[t[e+0]]+ke[t[e+1]]+ke[t[e+2]]+ke[t[e+3]]+"-"+ke[t[e+4]]+ke[t[e+5]]+"-"+ke[t[e+6]]+ke[t[e+7]]+"-"+ke[t[e+8]]+ke[t[e+9]]+"-"+ke[t[e+10]]+ke[t[e+11]]+ke[t[e+12]]+ke[t[e+13]]+ke[t[e+14]]+ke[t[e+15]]).toLowerCase()}const uS=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Wh={randomUUID:uS};function lS(t,e,n){if(Wh.randomUUID&&!e&&!t)return Wh.randomUUID();t=t||{};const s=t.random||(t.rng||aS)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=s[r];return e}return cS(s)}const DS=Rs({tag:"home",db:iS,aiProxy:"https://bookbot.yizheyun.cn",elecoxyKey:"",modelVersion:"gpt-35-turbo",apiVersion:"2023-05-15",debug:!1,isAgreeConsent:!1,isPrompts:!0,order:["book","job"],preQuestionnaire:null,scenarioQuestionnaires:{book:null,job:null},listQuestionnaires:{book:null,job:null},postQuestionnaires:{book:null,job:null},interviewQuestionnaire:null,messages:{book:[],job:[]},items:{book:new Set,job:new Set},itemsRanks:{book:{},job:{}},itemsRates:{book:{},job:{}},async submit(){const t={};this.order.forEach(s=>{t[s]=Array.from(this.items[s])});const e={};this.order.forEach(s=>{e[s]=this.scenarioQuestionnaires[s].data.map(r=>({id:r.id,title:r.title,value:r.value}))});const n={};this.order.forEach(s=>{n[s]=this.postQuestionnaires[s].data.map(r=>({id:r.id,title:r.title,value:r.value}))}),await nS(B_(this.db,"records",lS()),{basic:{aiProxy:this.aiProxy,modelVersion:this.modelVersion,apiVersion:this.apiVersion,debug:this.debug,isAgreeConsent:this.debug,isPrompts:this.debug,order:this.order},data:{preQuestionnaire:JSON.stringify(this.preQuestionnaire.data.map(s=>({id:s.id,title:s.title,value:s.value}))),scenarioQuestionnaires:JSON.stringify(e),listQuestionnaires:JSON.stringify(this.listQuestionnaires),postQuestionnaires:JSON.stringify(n),interviewQuestionnaire:JSON.stringify(this.interviewQuestionnaire)},chat:{messages:JSON.stringify(this.messages),items:JSON.stringify(t),itemsRates:JSON.stringify(this.itemsRates)},timestamp:Date.now()})},reset(){this.tag="home",this.preQuestionnaire=null,this.scenarioQuestionnaires={book:null,job:null},this.listQuestionnaires={book:null,job:null},this.postQuestionnaires={book:null,job:null},this.interviewQuestionnaire=null,this.messages={book:[],job:[]},this.items={book:new Set,job:new Set},this.itemsRates={book:{},job:{}}}}),hS=[{path:"/",name:"home",component:()=>Jr(()=>import("./HomeView-d065d919.js"),["./HomeView-d065d919.js","./HomeView-ee22fc98.css"],import.meta.url)},{path:"/survey",name:"survey",component:()=>Jr(()=>import("./SurveyView-b896c40e.js"),["./SurveyView-b896c40e.js","./SurveyView-c6f01c1e.css"],import.meta.url)},{path:"/chat",name:"chat",component:()=>Jr(()=>import("./ChatView-3e22bcb9.js"),["./ChatView-3e22bcb9.js","./ChatView-24e53397.css"],import.meta.url)},{path:"/end",name:"end",component:()=>Jr(()=>import("./EndView-34a106f6.js"),["./EndView-34a106f6.js","./EndView-32be8920.css"],import.meta.url)}],tm=Vw({history:tw(),scrollBehavior(t,e,n){return n||{top:0}},routes:hS});tm.beforeEach(async(t,e)=>{});const nm=xv(Pv);nm.use(tm);nm.mount("#app");export{Vt as F,kv as _,CS as a,AS as b,yS as c,qf as d,Gy as e,pS as f,B_ as g,wS as h,mS as i,IS as j,bS as k,ES as l,hc as m,fc as n,Vf as o,dS as p,vS as q,Rs as r,DS as s,fS as t,SS as u,TS as v,gS as w,_S as x};
