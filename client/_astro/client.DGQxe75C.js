import{S as K,o as U,Q as Z,e as m,p as F,M as $,q as L,n as v,v as X,w as ee,x as te,f as ae,y as R,a as q,z as re,h as I,A as H,B as ne,k as s,j as se,i as ie}from"./utils.CthnZA6R.js";import{b as W,G as oe,i as ue,k as Q,a1 as le,p as ce,d as de,E as C,a2 as he,a3 as fe,a4 as pe}from"./index.Ce10efX-.js";import{aa as me,z,a1 as h,P as A,y as N,B as P}from"./index.CdQf_57s.js";var J=class extends K{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){const n=t.queryKey,u=t.queryHash??U(n,t);let i=this.get(u);return i||(i=new Z({cache:this,queryKey:n,queryHash:u,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(i)),i}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){m.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){const t={exact:!0,...e};return this.getAll().find(r=>F(t,r))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(r=>F(e,r)):t}notify(e){m.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){m.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){m.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Y=class extends K{constructor(e={}){super(),this.config=e,this.#e=new Map,this.#t=Date.now()}#e;#t;build(e,t,r){const n=new $({mutationCache:this,mutationId:++this.#t,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){const t=D(e),r=this.#e.get(t)??[];r.push(e),this.#e.set(t,r),this.notify({type:"added",mutation:e})}remove(e){const t=D(e);if(this.#e.has(t)){const r=this.#e.get(t)?.filter(n=>n!==e);r&&(r.length===0?this.#e.delete(t):this.#e.set(t,r))}this.notify({type:"removed",mutation:e})}canRun(e){const t=this.#e.get(D(e))?.find(r=>r.state.status==="pending");return!t||t===e}runNext(e){return this.#e.get(D(e))?.find(r=>r!==e&&r.state.isPaused)?.continue()??Promise.resolve()}clear(){m.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#e.values()].flat()}find(e){const t={exact:!0,...e};return this.getAll().find(r=>L(t,r))}findAll(e={}){return this.getAll().filter(t=>L(e,t))}notify(e){m.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return m.batch(()=>Promise.all(e.map(t=>t.continue().catch(v))))}};function D(a){return a.options.scope?.id??String(a.mutationId)}function j(a){return{onFetch:(e,t)=>{const r=e.options,n=e.fetchOptions?.meta?.fetchMore?.direction,u=e.state.data?.pages||[],i=e.state.data?.pageParams||[];let c={pages:[],pageParams:[]},l=0;const o=async()=>{let d=!1;const p=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(e.signal.aborted?d=!0:e.signal.addEventListener("abort",()=>{d=!0}),e.signal)})},M=X(e.options,e.fetchOptions),S=async(f,g,b)=>{if(d)return Promise.reject();if(g==null&&f.pages.length)return Promise.resolve(f);const y={queryKey:e.queryKey,pageParam:g,direction:b?"backward":"forward",meta:e.options.meta};p(y);const G=await M(y),{maxPages:E}=e.options,x=b?ee:te;return{pages:x(f.pages,G,E),pageParams:x(f.pageParams,g,E)}};if(n&&u.length){const f=n==="backward",g=f?ge:B,b={pages:u,pageParams:i},y=g(r,b);c=await S(b,y,f)}else{const f=a??u.length;do{const g=l===0?i[0]??r.initialPageParam:B(r,c);if(l>0&&g==null)break;c=await S(c,g),l++}while(l<f)}return c};e.options.persister?e.fetchFn=()=>e.options.persister?.(o,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},t):e.fetchFn=o}}}function B(a,{pages:e,pageParams:t}){const r=e.length-1;return e.length>0?a.getNextPageParam(e[r],e,t[r],t):void 0}function ge(a,{pages:e,pageParams:t}){return e.length>0?a.getPreviousPageParam?.(e[0],e,t[0],t):void 0}var ye=class{#e;#t;#a;#n;#s;#r;#i;#o;constructor(e={}){this.#e=e.queryCache||new J,this.#t=e.mutationCache||new Y,this.#a=e.defaultOptions||{},this.#n=new Map,this.#s=new Map,this.#r=0}mount(){this.#r++,this.#r===1&&(this.#i=ae.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#o=R.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#r--,this.#r===0&&(this.#i?.(),this.#i=void 0,this.#o?.(),this.#o=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const r=this.defaultQueryOptions(e),n=this.#e.build(this,r);return e.revalidateIfStale&&n.isStaleByTime(q(r.staleTime,n))&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:t,state:r})=>{const n=r.data;return[t,n]})}setQueryData(e,t,r){const n=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(n.queryHash)?.state.data,c=re(t,i);if(c!==void 0)return this.#e.build(this,n).setData(c,{...r,manual:!0})}setQueriesData(e,t,r){return m.batch(()=>this.#e.findAll(e).map(({queryKey:n})=>[n,this.setQueryData(n,t,r)]))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){const t=this.#e;m.batch(()=>{t.findAll(e).forEach(r=>{t.remove(r)})})}resetQueries(e,t){const r=this.#e,n={type:"active",...e};return m.batch(()=>(r.findAll(e).forEach(u=>{u.reset()}),this.refetchQueries(n,t)))}cancelQueries(e={},t={}){const r={revert:!0,...t},n=m.batch(()=>this.#e.findAll(e).map(u=>u.cancel(r)));return Promise.all(n).then(v).catch(v)}invalidateQueries(e={},t={}){return m.batch(()=>{if(this.#e.findAll(e).forEach(n=>{n.invalidate()}),e.refetchType==="none")return Promise.resolve();const r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){const r={...t,cancelRefetch:t?.cancelRefetch??!0},n=m.batch(()=>this.#e.findAll(e).filter(u=>!u.isDisabled()).map(u=>{let i=u.fetch(void 0,r);return r.throwOnError||(i=i.catch(v)),u.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(n).then(v)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const r=this.#e.build(this,t);return r.isStaleByTime(q(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(v).catch(v)}fetchInfiniteQuery(e){return e.behavior=j(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(v).catch(v)}ensureInfiniteQueryData(e){return e.behavior=j(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return R.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#a}setDefaultOptions(e){this.#a=e}setQueryDefaults(e,t){this.#n.set(I(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#n.values()];let r={};return t.forEach(n=>{H(e,n.queryKey)&&(r={...r,...n.defaultOptions})}),r}setMutationDefaults(e,t){this.#s.set(I(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#s.values()];let r={};return t.forEach(n=>{H(e,n.mutationKey)&&(r={...r,...n.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;const t={...this.#a.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=U(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===ne&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#a.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},ve=class extends J{find(a){return super.find(s(a))}findAll(a={}){return super.findAll(s(a))}},be=class extends Y{find(a){return super.find(s(a))}findAll(a={}){return super.findAll(s(a))}},Me=class extends ye{constructor(a={}){const e={defaultOptions:a.defaultOptions,queryCache:a.queryCache||new ve,mutationCache:a.mutationCache||new be};super(e),this.isRestoring=W(!1)}isFetching(a={}){return super.isFetching(s(a))}isMutating(a={}){return super.isMutating(s(a))}getQueryData(a){return super.getQueryData(s(a))}ensureQueryData(a){return super.ensureQueryData(s(a))}getQueriesData(a){return super.getQueriesData(s(a))}setQueryData(a,e,t={}){return super.setQueryData(s(a),e,s(t))}setQueriesData(a,e,t={}){return super.setQueriesData(s(a),e,s(t))}getQueryState(a){return super.getQueryState(s(a))}removeQueries(a={}){return super.removeQueries(s(a))}resetQueries(a={},e={}){return super.resetQueries(s(a),s(e))}cancelQueries(a={},e={}){return super.cancelQueries(s(a),s(e))}invalidateQueries(a={},e={}){const t=s(a),r=s(e);if(super.invalidateQueries({...t,refetchType:"none"},r),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return oe().then(()=>super.refetchQueries(n,r))}refetchQueries(a={},e={}){return super.refetchQueries(s(a),s(e))}fetchQuery(a){return super.fetchQuery(s(a))}prefetchQuery(a){return super.prefetchQuery(s(a))}fetchInfiniteQuery(a){return super.fetchInfiniteQuery(s(a))}prefetchInfiniteQuery(a){return super.prefetchInfiniteQuery(s(a))}setDefaultOptions(a){super.setDefaultOptions(s(a))}setQueryDefaults(a,e){super.setQueryDefaults(s(a),s(e))}getQueryDefaults(a){return super.getQueryDefaults(s(a))}setMutationDefaults(a,e){super.setMutationDefaults(s(a),s(e))}getMutationDefaults(a){return super.getMutationDefaults(s(a))}},Se={install:(a,e={})=>{const t=se(e.queryClientKey);let r;if("queryClient"in e&&e.queryClient)r=e.queryClient;else{const i="queryClientConfig"in e?e.queryClientConfig:void 0;r=new Me(i)}ie||r.mount();let n=()=>{};if(e.clientPersister){r.isRestoring.value=!0;const[i,c]=e.clientPersister(r);n=i,c.then(()=>{r.isRestoring.value=!1,e.clientPersisterOnSuccess?.(r)})}const u=()=>{r.unmount(),n()};if(a.onUnmount)a.onUnmount(u);else{const i=a.unmount;a.unmount=function(){u(),i()}}a.provide(t,r)}};function O(a){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(a)}function k(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),t.push.apply(t,r)}return t}function T(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?k(Object(t),!0).forEach(function(r){Pe(a,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))})}return a}function Pe(a,e,t){return(e=we(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function we(a){var e=Oe(a,"string");return O(e)=="symbol"?e:e+""}function Oe(a,e){if(O(a)!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var r=t.call(a,e||"default");if(O(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}var Qe={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[h.STARTS_WITH,h.CONTAINS,h.NOT_CONTAINS,h.ENDS_WITH,h.EQUALS,h.NOT_EQUALS],numeric:[h.EQUALS,h.NOT_EQUALS,h.LESS_THAN,h.LESS_THAN_OR_EQUAL_TO,h.GREATER_THAN,h.GREATER_THAN_OR_EQUAL_TO],date:[h.DATE_IS,h.DATE_IS_NOT,h.DATE_BEFORE,h.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},Ae=Symbol();function De(a,e){var t={config:ue(e)};return a.config.globalProperties.$primevue=t,a.provide(Ae,t),Te(),Ce(a,t),t}var w=[];function Te(){z.clear(),w.forEach(function(a){return a?.()}),w=[]}function Ce(a,e){var t=W(!1),r=function(){var o;if(((o=e.config)===null||o===void 0?void 0:o.theme)!=="none"&&!N.isStyleNameLoaded("common")){var d,p,M=((d=P.getCommonTheme)===null||d===void 0?void 0:d.call(P))||{},S=M.primitive,f=M.semantic,g=M.global,b=M.style,y={nonce:(p=e.config)===null||p===void 0||(p=p.csp)===null||p===void 0?void 0:p.nonce};P.load(S?.css,T({name:"primitive-variables"},y)),P.load(f?.css,T({name:"semantic-variables"},y)),P.load(g?.css,T({name:"global-variables"},y)),P.loadTheme(T({name:"global-style"},y),b),N.setLoadedStyleName("common")}};z.on("theme:change",function(l){t.value||(a.config.globalProperties.$primevue.config.theme=l,t.value=!0)});var n=Q(e.config,function(l,o){A.emit("config:change",{newValue:l,oldValue:o})},{immediate:!0,deep:!0}),u=Q(function(){return e.config.ripple},function(l,o){A.emit("config:ripple:change",{newValue:l,oldValue:o})},{immediate:!0,deep:!0}),i=Q(function(){return e.config.theme},function(l,o){t.value||N.setTheme(l),e.config.unstyled||r(),t.value=!1,A.emit("config:theme:change",{newValue:l,oldValue:o})},{immediate:!0,deep:!0}),c=Q(function(){return e.config.unstyled},function(l,o){!l&&e.config.theme&&r(),A.emit("config:unstyled:change",{newValue:l,oldValue:o})},{immediate:!0,deep:!0});w.push(n),w.push(u),w.push(i),w.push(c)}var Ne={install:function(e,t){var r=me(Qe,t);De(e,r)}};const V=a=>{a.use(Se),a.use(le,{autoClose:800,position:ce.POSITION.TOP_RIGHT}),a.use(Ne,{locale:{startsWith:"Empieza con",contains:"Contiene",notContains:"No contiene",endsWith:"Termina con",equals:"Igual a",notEquals:"Diferente de",noFilter:"Sin filtro",lt:"Menor que",lte:"Menor o igual a",gt:"Mayor que",gte:"Mayor o igual a",dateIs:"La fecha es",dateIsNot:"La fecha no es",dateBefore:"La fecha es antes de",dateAfter:"La fecha es después de",clear:"Limpiar",apply:"Aplicar",matchAll:"Coincide con todos",matchAny:"Coincide con alguno",addRule:"Agregar regla",removeRule:"Eliminar regla",accept:"Sí",reject:"No",choose:"Elegir",upload:"Subir",cancel:"Cancelar",completed:"Completado",pending:"Pendiente",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],dayNamesShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],dayNamesMin:["Do","Lu","Ma","Mi","Ju","Vi","Sá"],monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],chooseYear:"Elegir año",chooseMonth:"Elegir mes",chooseDate:"Elegir fecha",prevDecade:"Década anterior",nextDecade:"Década siguiente",prevYear:"Año anterior",nextYear:"Año siguiente",prevMonth:"Mes anterior",nextMonth:"Mes siguiente",prevHour:"Hora anterior",nextHour:"Hora siguiente",prevMinute:"Minuto anterior",nextMinute:"Minuto siguiente",prevSecond:"Segundo anterior",nextSecond:"Segundo siguiente",am:"a. m.",pm:"p. m.",today:"Hoy",weekHeader:"Sem",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"dd/mm/yy",weak:"Débil",medium:"Medio",strong:"Fuerte",passwordPrompt:"Ingrese una contraseña",searchMessage:"{0} resultados disponibles",selectionMessage:"{0} elementos seleccionados",emptySelectionMessage:"No hay elementos seleccionados",emptySearchMessage:"No se encontraron resultados",fileChosenMessage:"{0} archivos",noFileChosenMessage:"No se eligió ningún archivo",emptyMessage:"No hay opciones disponibles",aria:{trueLabel:"Verdadero",falseLabel:"Falso",nullLabel:"No seleccionado",star:"1 estrella",stars:"{star} estrellas",selectAll:"Todos los elementos seleccionados",unselectAll:"Todos los elementos deseleccionados",close:"Cerrar",previous:"Anterior",next:"Siguiente",navigation:"Navegación",scrollTop:"Ir al inicio",moveTop:"Mover al principio",moveUp:"Mover hacia arriba",moveDown:"Mover hacia abajo",moveBottom:"Mover al final",moveToTarget:"Mover al destino",moveToSource:"Mover al origen",moveAllToTarget:"Mover todo al destino",moveAllToSource:"Mover todo al origen",pageLabel:"Página {page}",firstPageLabel:"Primera página",lastPageLabel:"Última página",nextPageLabel:"Página siguiente",prevPageLabel:"Página anterior",rowsPerPageLabel:"Filas por página",jumpToPageDropdownLabel:"Ir a página desde lista",jumpToPageInputLabel:"Ir a página desde entrada",selectRow:"Fila seleccionada",unselectRow:"Fila deseleccionada",expandRow:"Fila expandida",collapseRow:"Fila colapsada",showFilterMenu:"Mostrar menú de filtros",hideFilterMenu:"Ocultar menú de filtros",filterOperator:"Operador del filtro",filterConstraint:"Restricción del filtro",editRow:"Editar fila",saveEdit:"Guardar edición",cancelEdit:"Cancelar edición",listView:"Vista de lista",gridView:"Vista de cuadrícula",slide:"Diapositiva",slideNumber:"Diapositiva {slideNumber}",zoomImage:"Ampliar imagen",zoomIn:"Ampliar",zoomOut:"Reducir",rotateRight:"Girar a la derecha",rotateLeft:"Girar a la izquierda"}},unstyled:!0,pt:{datatable:{root:"not-prose",table:"table table-zebra"},paginator:{root:"py-4",content:"flex justify-center items-center gap-4 flex-wrap",pages:"flex gap-4",first:"btn btn-sm",prev:"btn btn-sm",next:"btn btn-sm",last:"btn btn-sm",page:"btn btn-sm data-[p-active=true]:btn-secondary"},select:{root:"input input-bordered flex gap-2 items-center justify-center w-fit",overlay:"menu bg-base-100 rounded-btn",label:"outline-none"},multiselect:{root:"input input-bordered w-full max-w-xs flex gap-2 items-center justify-center",overlay:"menu bg-base-100 rounded-btn shadow overflow-y-auto w-60 p-4",option:"flex items-center flex-row flex-nowrap",list:"pt-4",optionLabel:"",labelcontainer:"overflow-x-auto",label:"outline-none text-sm flex gap-4 items-center text-nowrap",header:"flex items-center gap-4",chipitem:"text-xs"},contextmenu:{root:"menu bg-base-100 shadow rounded-btn",itemlink:"flex gap-2"},textarea:{root:"textarea textarea-bordered"},checkbox:{root:"w-fit",input:"checkbox checkbox-primary checkbox-xs",box:"hidden"},inputtext:{root:"input input-bordered w-full max-w-xs"},iconfield:{root:"flex items-center gap-4"},chip:{root:"flex bg-base-200 gap-4 items-center p-1 rounded-btn"}},theme:{options:{darkModeSelector:!1}}})},Ee=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),xe=async a=>{"default"in Ee&&await V(a)},Fe=de({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:a,value:e,hydrate:t}){if(!e)return()=>null;let r=t?"astro-slot":"astro-static-slot";return()=>C(r,{name:a,innerHTML:e})}});let _=new WeakMap;const ke=a=>async(e,t,r,{client:n})=>{if(!a.hasAttribute("ssr"))return;const u=e.name?`${e.name} Host`:void 0,i={};for(const[d,p]of Object.entries(r))i[d]=()=>C(Fe,{value:p,name:d==="default"?void 0:d});const c=n!=="only",l=c?he:fe;let o=_.get(a);if(o)o.props=t,o.slots=i,o.component.$forceUpdate();else{o={props:t,slots:i};const d=l({name:u,render(){let p=C(e,o.props,o.slots);return o.component=this,Le(e.setup)&&(p=C(pe,null,p)),p}});d.config.idPrefix=a.getAttribute("prefix"),await xe(d),d.mount(a,c),_.set(a,o),a.addEventListener("astro:unmount",()=>d.unmount(),{once:!0})}};function Le(a){const e=a?.constructor;return e&&e.name==="AsyncFunction"}export{ke as default};
