import{d as _,k as g,l as r,r as b,o as v,m as x,g as h,a as l,b as C,v as S,n as a,t as n,p as w}from"./index.Bq36XaFJ.js";import{F as y}from"./index.BTSUBtd4.js";import{s as M,a as N}from"./index.ANgRgRTQ.js";/* empty css                      */import{_ as A}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./index.Cg9gzw4y.js";const F=_({__name:"ListaPublicacionesMiembros",props:{data:{}},setup(u,{expose:t}){t();const c=u,e=b(!1),f=b({global:{value:null,matchMode:y.CONTAINS}}),p=s=>{const m=new Intl.ListFormat("es",{type:"conjunction",style:"long"}),i=[];if(s.miembros_publicacion.forEach(d=>{i.push(d.nombreCompleto)}),s.otrosAutores){const d=s.otrosAutores.split(";");i.push(...d)}return i.length<1?"---":m.format(i)};v(()=>{e.value=!0}),x(()=>{e.value=!1});const o={props:c,isMounted:e,filters:f,getCollabs:p,get Column(){return M},get DataTable(){return N}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),T={class:"flex justify-end mb-4"},I={class:"input input-bordered flex items-center gap-2 w-full max-w-xs"},k={class:"w-20"},P={class:"min-w-32"},B={class:"w-32"};function D(u,t,c,e,f,p){return h(),g(e.DataTable,{value:e.props.data,paginator:!0,rows:10,rowsPerPageOptions:[5,10,20,50],filters:e.filters,"onUpdate:filters":t[1]||(t[1]=o=>e.filters=o),globalFilterFields:["ISSN","titulo","otrosAutores"],loading:e.props.data.length<1?!1:!e.isMounted},{loading:r(()=>t[2]||(t[2]=[l("div",{class:"absolute top-0 left-0 h-full w-full z-30 select-none skeleton bg-base-300/60 backdrop-blur-[0.5px] rounded-btn"},null,-1)])),header:r(()=>[l("div",T,[l("label",I,[t[3]||(t[3]=l("i",{class:"bi bi-search"},null,-1)),C(l("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.filters.global.value=o),type:"text",class:"grow",placeholder:"Buscar publicación (ISSN, titulo, autores)"},null,512),[[S,e.filters.global.value]])])])]),empty:r(()=>t[4]||(t[4]=[l("div",{class:"text-center font-bold"},"Sin datos.",-1)])),default:r(()=>[a(e.Column,{field:"ISSN",header:"ISSN"},{body:r(({data:o,field:s})=>[l("div",k,n(o[s]??"---"),1)]),_:1}),a(e.Column,{field:"titulo",header:"Titulo"},{body:r(({data:o,field:s})=>[l("div",P,n(o[s]),1)]),_:1}),a(e.Column,{field:"year",header:"Año",sortable:""}),a(e.Column,{field:"miembros_publicacion",header:"Autores"},{body:r(({data:o})=>[l("div",B,n(e.getCollabs(o)),1)]),_:1}),a(e.Column,{field:"tipo",header:"Tipo",sortable:""},{body:r(({data:o,field:s})=>[w(n(o[s].toUpperCase()),1)]),_:1})]),_:1},8,["value","filters","loading"])}const E=A(F,[["render",D]]);export{E as default};
