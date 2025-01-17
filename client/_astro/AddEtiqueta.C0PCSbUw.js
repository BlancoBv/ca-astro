import{d as y,b as q,p as w,y as C,K as E,o as f,c as x,f as S,g as u,i as c,h as p,t as m,w as k,a as _,k as M,n as U,j as Y,F as P,m as V}from"./index.CVCDyEFK.js";import{I as F}from"./Input.Bw3EzM23.js";import{a as A,u as v}from"./http.Cre9WaSw.js";import{a as B,s as I}from"./index.xKhLUDZR.js";import{f as N}from"./format.DRaPJfrL.js";/* empty css                       */import{_ as D}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./utils.yDiRiW9u.js";import"./index.BbQA0y4H.js";import"./moment.C5S46NFB.js";const j=y({__name:"ListaEtiquetas",props:{data:{},isPending:{type:Boolean},mutationUpdate:{}},setup(d,{expose:o}){o();const n=d,e=q(!1),l=r=>{e:{const{data:t,newValue:a,field:i}=r;a!==t[i]&&n.mutationUpdate.mutate({idetiqueta:t.idetiqueta,[i]:a});break e}};w(()=>{e.value=!0}),C(()=>{e.value=!1});const s={props:n,isMounted:e,handleEdit:l,get DataTable(){return B},get Column(){return I},get formatDate(){return N}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),T={key:0,class:"skeleton h-96 w-full"},L=["onUpdate:modelValue"];function z(d,o,n,e,l,s){const r=E("uppercase");return e.isMounted?(f(),S(e.DataTable,{key:1,class:U({"skeleton select-none":e.props.isPending,"cursor-wait select-none":e.props.mutationUpdate.isPending.value}),value:e.props.data,paginator:!0,rows:5,"edit-mode":"cell",onCellEditComplete:e.handleEdit},{default:u(()=>[c(e.Column,{field:"nombre",header:"Nombre"},{body:u(({data:t,field:a})=>[p(m(t[a]??"---"),1)]),editor:u(({data:t,field:a})=>[k(_("input",{"onUpdate:modelValue":i=>t[a]=i,type:"text",class:"input input-bordered w-full max-w-xs"},null,8,L),[[M,t[a]],[r,t[a]]])]),_:1}),c(e.Column,{field:"createdAt",header:"Fecha de creación",sortable:""},{body:u(({data:t,field:a})=>[p(m(e.formatDate(t[a],"DD-MM-YYYY")),1)]),_:1}),c(e.Column,{field:"updatedAt",header:"Ultima actualización",sortable:""},{body:u(({data:t,field:a})=>[p(m(e.formatDate(t[a],"DD-MM-YYYY")),1)]),_:1})]),_:1},8,["class","value"])):(f(),x("div",T))}const O=D(j,[["render",z]]),G=y({__name:"AddEtiqueta",props:{user:{}},setup(d,{expose:o}){o();const n=d,e=V({nombre:"",idUsuario:n.user}),{data:l,isError:s,isPending:r,refetch:t}=A("etiquetas","etiquetasData"),a=h=>{e.nombre=h.toUpperCase()},i=v("etiquetas","post",{onSuccess:()=>{e.nombre="",t()}}),g=v("etiquetas","put",{onSuccess:()=>{t()}}),b={props:n,body:e,data:l,isError:s,isPending:r,refetch:t,handleInput:a,send:i,edit:g,Input:F,ListaEtiquetas:O};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}});function K(d,o,n,e,l,s){return f(),x(P,null,[_("form",{onSubmit:o[0]||(o[0]=Y(r=>e.send.mutate(e.body),["prevent"])),class:"flex justify-center gap-4 items-end mb-4"},[c(e.Input,{value:e.body.nombre,onSetValue:e.handleInput,label:"Nombre de la etiqueta"},null,8,["value"]),o[1]||(o[1]=_("button",{type:"submit",class:"btn btn-primary"},"Añadir",-1))],32),c(e.ListaEtiquetas,{data:e.data?.response??[],"is-pending":e.isPending,"mutation-update":e.edit},null,8,["data","is-pending","mutation-update"])],64)}const ae=D(G,[["render",K]]);export{ae as default};
