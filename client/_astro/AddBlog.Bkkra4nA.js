import{d as f,o as c,c as u,a,n as i,t as S,f as v,F as w,i as D}from"./index.DxymP5mP.js";import{e as E,E as k,I as A}from"./EditorInstance.DxzgRVn5.js";import{I as B}from"./Input.CBiKcPvB.js";import{h as C}from"./moment.C5S46NFB.js";import{S as q}from"./SelectEtiqueta.D1ml92WY.js";import{a as F,u as b}from"./http.fLk4Mcz6.js";import{_ as h}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./utils.DVtFzRZj.js";const Y=f({__name:"AddImage",setup(m,{expose:t}){t();const{refetch:l}=F("imagenes","imagesGalleryData"),e=b("imagenes","post",{sendAsFormData:!0,onSuccess(){const o=document.getElementById("input-add-image"),r=document.getElementById("modal-add-image");o.value="",r.close(),l()}}),d={refetch:l,send:e,handleImage:o=>{const r=new FormData,{files:g}=o.target;r.append("imagen",g[0]),e.mutate(r)}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),M={id:"modal-add-image",class:"modal"},j={class:"modal-box w-6/12 max-w-5xl h-5/6"},O={class:"form-control w-full max-w-xs"};function T(m,t,l,e,s,d){return c(),u("dialog",M,[a("div",j,[t[1]||(t[1]=a("form",{method:"dialog"},[a("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"},"✕")],-1)),t[2]||(t[2]=a("h3",{class:"text-lg font-bold"},"Añadir nueva imagen",-1)),a("form",null,[a("label",O,[t[0]||(t[0]=a("div",{class:"label"},[a("span",{class:"label-text"},"Selecciona una imagen")],-1)),a("input",{type:"file",class:"file-input file-input-bordered w-full max-w-xs",accept:"image/*",onInput:e.handleImage,id:"input-add-image"},null,32)])])]),t[3]||(t[3]=a("form",{method:"dialog",class:"modal-backdrop"},[a("button",null,"close")],-1))])}const V=h(Y,[["render",T]]),G=f({__name:"AddBlog",props:{idUsuario:{}},setup(m,{expose:t}){t();const l=m,e=new Date(Date.now()),s=C(e),d=b("blogs","post",{onSuccess(){o.titulo="",o.contenido="",o.fecha=s.format("YYYY-MM-DD"),o.imagen="",o.etiquetas=[]}}),o=D({titulo:"",contenido:"",fecha:s.format("YYYY-MM-DD"),estatus:"aceptado",imagen:"",usuarios_id:l.idUsuario,etiquetas:[]}),r=()=>{document.getElementById("modal-image-main").showModal()},g=n=>{o.imagen=n,document.getElementById("modal-image-main").close()},_=n=>{o.titulo=n},y=n=>{o.fecha=n},x=n=>{o.etiquetas=n},I=E(o,"<p>¡Eliminame y empieza a redactar el contenido!</p>"),p={props:l,dateLocal:e,m:s,send:d,body:o,openImageSelector:r,handleClick:g,handleChangeTitulo:_,handleChangeFecha:y,handleEtiquetas:x,editor:I,Editor:k,Input:B,ImageSelector:A,SelectEtiqueta:q,AddImage:V};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),N={class:"flex gap-4 flex-wrap items-center pb-4"},P={class:"flex gap-4 items-center"},U={key:0,class:"w-24 h-24 text-xs"},z=["src"];function L(m,t,l,e,s,d){return c(),u(w,null,[i(e.AddImage),i(e.ImageSelector,{"editor-instance":e.editor},null,8,["editor-instance"]),i(e.ImageSelector,{id:"modal-image-main",onAddImageToObject:e.handleClick}),a("form",{onSubmit:t[0]||(t[0]=v(()=>{e.send.mutate(e.body)},["prevent"]))},[a("div",N,[i(e.Input,{value:e.body.titulo,label:"Titulo del blog",type:"text",onSetValue:e.handleChangeTitulo},null,8,["value"]),i(e.Input,{value:e.body.fecha,label:"Fecha",type:"date",onSetValue:e.handleChangeFecha},null,8,["value"]),a("div",P,[e.body.imagen.length<1?(c(),u("p",U,"Selecciona una imagen para ver la vista previa")):(c(),u("img",{key:1,src:e.body.imagen,class:"object-contain",width:"96px",height:"96px"},null,8,z)),a("button",{onClick:e.openImageSelector,class:"btn btn-secondary",type:"button"},S(e.body.imagen.length<1?"Seleccionar":"Cambiar")+" imagen principal",1)]),i(e.SelectEtiqueta,{value:e.body.etiquetas,onSetOption:e.handleEtiquetas},null,8,["value"])]),i(e.Editor,{editor:e.editor},null,8,["editor"]),t[1]||(t[1]=a("button",{class:"btn btn-primary",type:"submit"},"Guardar",-1))],32)],64)}const ee=h(G,[["render",L]]);export{ee as default};
