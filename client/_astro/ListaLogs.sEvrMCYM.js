import{d as c,c as m,k as u,l as n,b as f,j as p,y as _,o as l,n as a,m as h,t as b}from"./index.iB3PD7ql.js";import{a as x,s as D}from"./index.BDsPK3sE.js";import{f as g}from"./format.DRaPJfrL.js";import"./moment.C5S46NFB.js";/* empty css                       */import{_ as k}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./index.DBeV__Ke.js";const C=c({__name:"ListaLogs",props:{data:{}},setup(o,{expose:r}){r();const s=o,e=f(!1);p(()=>{e.value=!0}),_(()=>{e.value=!1});const t={props:s,isMounted:e,get DataTable(){return x},get Column(){return D},get formatDate(){return g}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),v={key:0,class:"skeleton h-96 w-full"};function y(o,r,s,e,t,M){return e.isMounted?(l(),u(e.DataTable,{key:1,value:e.props.data,paginator:!0,rows:10},{default:n(()=>[a(e.Column,{field:"method",header:"Método",sortable:""}),a(e.Column,{field:"ruta",header:"Ruta"}),a(e.Column,{field:"idUsuario",header:"Usuario",sortable:""}),a(e.Column,{field:"createdAt",header:"Fecha de creación",sortable:""},{body:n(({data:i,field:d})=>[h(b(e.formatDate(i[d],"DD-MM-YYYY hh:mm:ss")),1)]),_:1})]),_:1},8,["value"])):(l(),m("div",v))}const j=k(C,[["render",y]]);export{j as default};
