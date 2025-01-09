import{d as w,u as y,b as p,j as C,I as S,o as c,c as b,n as N,t as I,m,G as k,H as F,E as A,F as g,a,w as B,g as P,f as T,i as E,e as R}from"./index.DLAxijO8.js";import{a as U,u as v}from"./http.DlgmvE8u.js";import{s as V,a as Y}from"./index.O5SMKElr.js";import{s as j}from"./index.DtzTfqdq.js";/* empty css                       */import{_ as M}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{h as q}from"./moment.C5S46NFB.js";import"./utils.eLTsyS1M.js";import"./index.Dgm2gvju.js";const L=w({__name:"ListaMinutas",props:{data:{},isPending:{type:Boolean},mutationDelete:{}},setup(u,{expose:t}){t();const i=u,e=y("cm"),o=p(null),s=p(!1),n=p([{label:"Eliminar",icon:"bi bi-trash-fill",command:()=>{i.mutationDelete.mutate({fileName:o.value?.fileName})}}]),r=f=>{e.value?.show(f.originalEvent)};C(()=>{s.value=!0}),S(()=>{s.value=!1});const d={props:i,cm:e,selectedItem:o,isMounted:s,items:n,onRowContextMenu:r,get DataTable(){return V},get Column(){return Y},get ContextMenu(){return j}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),G={key:0,class:"skeleton h-96 w-full"};function H(u,t,i,e,o,s){return c(),b(g,null,[N(I(e.selectedItem)+" ",1),m(e.ContextMenu,{ref:"cm",model:e.items,onHide:t[0]||(t[0]=n=>e.selectedItem=null)},null,8,["model"]),e.isMounted?(c(),k(e.DataTable,{key:1,class:A({"skeleton select-none":e.props.isPending}),value:e.props.data,paginator:!0,rows:5,onRowContextmenu:e.onRowContextMenu,"context-menu":"",contextMenuSelection:e.selectedItem,"onUpdate:contextMenuSelection":t[1]||(t[1]=n=>e.selectedItem=n)},{default:F(()=>[m(e.Column,{field:"fileName",header:"Nombre del archivo",sortable:""}),m(e.Column,{field:"fechaCreacion",header:"Fecha de creación",sortable:""})]),_:1},8,["class","value","contextMenuSelection"])):(c(),b("div",G))],64)}const O=M(L,[["render",H]]),z=w({__name:"AddMinuta",setup(u,{expose:t}){t();const{data:i,isPending:e,refetch:o}=U("minutas","minutasData"),s=new Date(Date.now()),n=q(s),r=E({fecha:n.format("YYYY-MM-DD")}),d=v("minutas","post",{sendAsFormData:!0,onSuccess(){const l=document.getElementById("input-add-file");l.value="",o()}}),f=v("minutas","delete",{onSuccess(){o()}}),D=l=>{const{files:h}=l.target;r.file=h[0]},x=R(()=>`MINUTA_CA;${r.fecha}.pdf`),_={data:i,isPending:e,refetch:o,date:s,m:n,body:r,send:d,deleteMinuta:f,handle:D,fileName:x,upload:()=>{const l=new FormData;l.append("file",r?.file??""),l.append("fileName",x.value),d.mutate(l)},ListaMinutas:O};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),J={class:"form-control w-full max-w-xs"},K={class:"form-control w-full max-w-xs"},Q={class:"form-control w-full max-w-xs"},W=["value"];function X(u,t,i,e,o,s){return c(),b(g,null,[a("form",{class:"grid grid-cols-2 lg:grid-cols-4 items-end gap-4 mb-4",onSubmit:T(e.upload,["prevent"])},[a("label",J,[t[1]||(t[1]=a("div",{class:"label"},[a("span",{class:"label-text"},"Selecciona una archivo")],-1)),a("input",{name:"imagen",type:"file",class:"file-input file-input-bordered w-full max-w-xs",accept:"application/pdf",onInput:e.handle,id:"input-add-file",required:""},null,32)]),a("label",K,[t[2]||(t[2]=a("div",{class:"label"},[a("span",{class:"label-text"},"Fecha")],-1)),B(a("input",{type:"date",class:"input input-bordered w-full max-w-xs","onUpdate:modelValue":t[0]||(t[0]=n=>e.body.fecha=n),required:""},null,512),[[P,e.body.fecha]])]),a("label",Q,[t[3]||(t[3]=a("div",{class:"label"},[a("span",{class:"label-text"},"Nombre del archivo**")],-1)),a("input",{class:"input input-bordered w-full max-w-xs",value:e.fileName,required:"",readonly:"",disabled:""},null,8,W)]),t[4]||(t[4]=a("button",{class:"btn btn-primary",type:"submit"},"Añadir minuta",-1))],32),m(e.ListaMinutas,{data:e.data?.files??[],"is-pending":e.isPending,mutationDelete:e.deleteMinuta},null,8,["data","is-pending","mutationDelete"])],64)}const re=M(z,[["render",X]]);export{re as default};
