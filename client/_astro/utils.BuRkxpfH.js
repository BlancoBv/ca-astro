import{a5 as x,H}from"./index.CZZ2clTV.js";var T=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},y=typeof window>"u"||"Deno"in globalThis;function j(){}function lt(t,e){return typeof t=="function"?t(e):t}function $(t){return typeof t=="number"&&t>=0&&t!==1/0}function _(t,e){return Math.max(t+(e||0)-Date.now(),0)}function ft(t,e){return typeof t=="function"?t(e):t}function B(t,e){return typeof t=="function"?t(e):t}function dt(t,e){const{type:s="all",exact:i,fetchStatus:r,predicate:o,queryKey:u,stale:n}=t;if(u){if(i){if(e.queryHash!==V(u,e.options))return!1}else if(!C(e.queryKey,u))return!1}if(s!=="all"){const a=e.isActive();if(s==="active"&&!a||s==="inactive"&&a)return!1}return!(typeof n=="boolean"&&e.isStale()!==n||r&&r!==e.state.fetchStatus||o&&!o(e))}function pt(t,e){const{exact:s,status:i,predicate:r,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(s){if(w(e.options.mutationKey)!==w(o))return!1}else if(!C(e.options.mutationKey,o))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function V(t,e){return(e?.queryKeyHashFn||w)(t)}function w(t){return JSON.stringify(t,(e,s)=>F(s)?Object.keys(s).sort().reduce((i,r)=>(i[r]=s[r],i),{}):s)}function C(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(s=>!C(t[s],e[s])):!1}function A(t,e){if(t===e)return t;const s=D(t)&&D(e);if(s||F(t)&&F(e)){const i=s?t:Object.keys(t),r=i.length,o=s?e:Object.keys(e),u=o.length,n=s?[]:{};let a=0;for(let f=0;f<u;f++){const h=s?f:o[f];(!s&&i.includes(h)||s)&&t[h]===void 0&&e[h]===void 0?(n[h]=void 0,a++):(n[h]=A(t[h],e[h]),n[h]===t[h]&&t[h]!==void 0&&a++)}return r===u&&a===r?t:n}return e}function yt(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(t[s]!==e[s])return!1;return!0}function D(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function F(t){if(!U(t))return!1;const e=t.constructor;if(e===void 0)return!0;const s=e.prototype;return!(!U(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function U(t){return Object.prototype.toString.call(t)==="[object Object]"}function Y(t){return new Promise(e=>{setTimeout(e,t)})}function z(t,e,s){return typeof s.structuralSharing=="function"?s.structuralSharing(t,e):s.structuralSharing!==!1?A(t,e):e}function mt(t){return t}function vt(t,e,s=0){const i=[...t,e];return s&&i.length>s?i.slice(1):i}function bt(t,e,s=0){const i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var J=Symbol();function W(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:!t.queryFn||t.queryFn===J?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var X=class extends T{#e;#t;#s;constructor(){super(),this.#s=t=>{if(!y&&window.addEventListener){const e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#t||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(t){this.#s=t,this.#t?.(),this.#t=t(e=>{typeof e=="boolean"?this.setFocused(e):this.onFocus()})}setFocused(t){this.#e!==t&&(this.#e=t,this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Z=new X,tt=class extends T{#e=!0;#t;#s;constructor(){super(),this.#s=t=>{if(!y&&window.addEventListener){const e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#t||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(t){this.#s=t,this.#t?.(),this.#t=t(this.setOnline.bind(this))}setOnline(t){this.#e!==t&&(this.#e=t,this.listeners.forEach(s=>{s(t)}))}isOnline(){return this.#e}},M=new tt;function et(t){return Math.min(1e3*2**t,3e4)}function q(t){return(t??"online")==="online"?M.isOnline():!0}var K=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function S(t){return t instanceof K}function I(t){let e=!1,s=0,i=!1,r,o,u;const n=new Promise((c,d)=>{o=c,u=d}),a=c=>{i||(m(new K(c)),t.abort?.())},f=()=>{e=!0},h=()=>{e=!1},E=()=>Z.isFocused()&&(t.networkMode==="always"||M.isOnline())&&t.canRun(),R=()=>q(t.networkMode)&&t.canRun(),G=c=>{i||(i=!0,t.onSuccess?.(c),r?.(),o(c))},m=c=>{i||(i=!0,t.onError?.(c),r?.(),u(c))},P=()=>new Promise(c=>{r=d=>{(i||E())&&c(d)},t.onPause?.()}).then(()=>{r=void 0,i||t.onContinue?.()}),v=()=>{if(i)return;let c;const d=s===0?t.initialPromise:void 0;try{c=d??t.fn()}catch(l){c=Promise.reject(l)}Promise.resolve(c).then(G).catch(l=>{if(i)return;const p=t.retry??(y?0:3),b=t.retryDelay??et,N=typeof b=="function"?b(s,l):b,Q=p===!0||typeof p=="number"&&s<p||typeof p=="function"&&p(s,l);if(e||!Q){m(l);return}s++,t.onFail?.(s,l),Y(N).then(()=>E()?void 0:P()).then(()=>{e?m(l):v()})})};return{promise:n,cancel:a,continue:()=>(r?.(),n),cancelRetry:f,continueRetry:h,canStart:R,start:()=>(R()?v():P().then(v),n)}}function st(){let t=[],e=0,s=n=>{n()},i=n=>{n()},r=n=>setTimeout(n,0);const o=n=>{e?t.push(n):r(()=>{s(n)})},u=()=>{const n=t;t=[],n.length&&r(()=>{i(()=>{n.forEach(a=>{s(a)})})})};return{batch:n=>{let a;e++;try{a=n()}finally{e--,e||u()}return a},batchCalls:n=>(...a)=>{o(()=>{n(...a)})},schedule:o,setNotifyFunction:n=>{s=n},setBatchNotifyFunction:n=>{i=n},setScheduler:n=>{r=n}}}var L=st(),k=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),$(this.gcTime)&&(this.#e=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(y?1/0:5*60*1e3))}clearGcTimeout(){this.#e&&(clearTimeout(this.#e),this.#e=void 0)}},St=class extends k{#e;#t;#s;#i;#o;#r;constructor(t){super(),this.#r=!1,this.#o=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#s=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#e=nt(this.options),this.state=t.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(t){this.options={...this.#o,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#s.remove(this)}setData(t,e){const s=z(this.state.data,t,this.options);return this.#n({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#n({type:"setState",state:t,setStateOptions:e})}cancel(t){const e=this.#i?.promise;return this.#i?.cancel(t),e?e.then(j).catch(j):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(t=>B(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!_(this.state.dataUpdatedAt,t)}onFocus(){this.observers.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#i&&(this.#r?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#n({type:"invalidate"})}fetch(t,e){if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(t&&this.setOptions(t),!this.options.queryFn){const n=this.observers.find(a=>a.options.queryFn);n&&this.setOptions(n.options)}const s=new AbortController,i=n=>{Object.defineProperty(n,"signal",{enumerable:!0,get:()=>(this.#r=!0,s.signal)})},r=()=>{const n=W(this.options,e),a={queryKey:this.queryKey,meta:this.meta};return i(a),this.#r=!1,this.options.persister?this.options.persister(n,a,this):n(a)},o={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:r};i(o),this.options.behavior?.onFetch(o,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#n({type:"fetch",meta:o.fetchOptions?.meta});const u=n=>{S(n)&&n.silent||this.#n({type:"error",error:n}),S(n)||(this.#s.config.onError?.(n,this),this.#s.config.onSettled?.(this.state.data,n,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#i=I({initialPromise:e?.initialPromise,fn:o.fetchFn,abort:s.abort.bind(s),onSuccess:n=>{if(n===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(n)}catch(a){u(a);return}this.#s.config.onSuccess?.(n,this),this.#s.config.onSettled?.(n,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(n,a)=>{this.#n({type:"failed",failureCount:n,error:a})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0}),this.#i.start()}#n(t){const e=s=>{switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...it(s.data,this.options),fetchMeta:t.meta??null};case"success":return{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return S(i)&&i.revert&&this.#t?{...this.#t,fetchStatus:"idle"}:{...s,error:i,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=e(this.state),L.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:t})})}};function it(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:q(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function nt(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,s=e!==void 0,i=s?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var gt=class extends k{#e;#t;#s;constructor(t){super(),this.mutationId=t.mutationId,this.#t=t.mutationCache,this.#e=[],this.state=t.state||rt(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#e.includes(t)||(this.#e.push(t),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#e=this.#e.filter(e=>e!==t),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#e.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#s?.continue()??this.execute(this.state.variables)}async execute(t){this.#s=I({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(i,r)=>{this.#i({type:"failed",failureCount:i,error:r})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});const e=this.state.status==="pending",s=!this.#s.canStart();try{if(!e){this.#i({type:"pending",variables:t,isPaused:s}),await this.#t.config.onMutate?.(t,this);const r=await this.options.onMutate?.(t);r!==this.state.context&&this.#i({type:"pending",context:r,variables:t,isPaused:s})}const i=await this.#s.start();return await this.#t.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#t.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#i({type:"success",data:i}),i}catch(i){try{throw await this.#t.config.onError?.(i,t,this.state.context,this),await this.options.onError?.(i,t,this.state.context),await this.#t.config.onSettled?.(void 0,i,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,i,t,this.state.context),i}finally{this.#i({type:"error",error:i})}}finally{this.#t.runNext(this)}}#i(t){const e=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=e(this.state),L.batch(()=>{this.#e.forEach(s=>{s.onMutationUpdate(t)}),this.#t.notify({mutation:this,type:"updated",action:t})})}};function rt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ot="VUE_QUERY_CLIENT";function wt(t){const e=t?`:${t}`:"";return`${ot}${e}`}function Ft(t,e){Object.keys(t).forEach(s=>{t[s]=e[s]})}function O(t,e,s="",i=0){if(e){const r=e(t,s,i);if(r===void 0&&x(t)||r!==void 0)return r}if(Array.isArray(t))return t.map((r,o)=>O(r,e,String(o),i+1));if(typeof t=="object"&&ut(t)){const r=Object.entries(t).map(([o,u])=>[o,O(u,e,o,i+1)]);return Object.fromEntries(r)}return t}function at(t,e){return O(t,e)}function g(t,e=!1){return at(t,(s,i,r)=>{if(r===1&&i==="queryKey")return g(s,!0);if(e&&ct(s))return g(s(),e);if(x(s))return g(H(s),e)})}function ut(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function ct(t){return typeof t=="function"}function Ot(t,e){return typeof t=="function"?t(...e):!!t}export{C as A,J as B,gt as M,St as Q,T as S,ft as a,$ as b,it as c,z as d,L as e,Z as f,rt as g,w as h,y as i,wt as j,g as k,Ot as l,mt as m,j as n,V as o,dt as p,pt as q,B as r,yt as s,_ as t,Ft as u,W as v,bt as w,vt as x,M as y,lt as z};
