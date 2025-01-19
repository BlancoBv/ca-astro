import{d as N,b as M,e as j,j as I,m as T,o as C,c as P,k as Y,l as i,n as d,p as v,t as b,w as n,a as l,g as u,v as D,f as V,L as F,q as p,M as E,h as L,x as B,F as q,i as R,y as z}from"./index.DGIqKwc_.js";import{a as A,u as h}from"./http.CSxkZ7zv.js";import{a as G,s as J}from"./index.BFyzPufX.js";import{s as k,v as K}from"./zodValidations.CrW4606p.js";import{f as H}from"./format.DRaPJfrL.js";/* empty css                       */import{_ as O}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./utils.BuHPegBM.js";import"./index.BB4SJUmK.js";import"./moment.C5S46NFB.js";const Q=N({__name:"ListaPublicaciones",props:{data:{},isPending:{type:Boolean},mutationUpdate:{},miembros:{}},setup(_,{expose:a}){a();const x=_,e=M(!1),y=j(()=>x?.miembros.map(r=>({label:r.nombreCompleto,value:r.idmiembro}))??[]),m=M([]),o=r=>{e:{const{data:c,newValue:s,field:f}=r;if(f==="miembrosCol"){if(c[f]!==E(m.value)){const g=new Set(c[f]),w=new Set(E(m.value)),S=g.difference(w),U=w.difference(g);x.mutationUpdate.mutate({idpublicacion:c.idpublicacion,miembrosColabAdd:Array.from(U),miembrosColabDelete:Array.from(S)})}break e}s!==c[f]&&x.mutationUpdate.mutate({idpublicacion:c.idpublicacion,[f]:s});break e}};I(()=>{e.value=!0}),T(()=>{e.value=!1});const t={props:x,isMounted:e,miembros:y,colaboradores:m,handleEdit:o,get DataTable(){return G},get Column(){return J},get MultiSelect(){return k},get formatDate(){return H}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),W={key:0,class:"skeleton h-96 w-full"},X=["onUpdate:modelValue"],Z={class:"w-60"},$=["onUpdate:modelValue"],ee=["onUpdate:modelValue"],oe={class:"badge badge-info h-max"},le=["onUpdate:modelValue"],ae={class:"flex gap-4 items-center mb-4"},te=["onSubmit"],re=["onSubmit"],ie=["onUpdate:modelValue"],se=["onUpdate:modelValue"],ne=["onUpdate:modelValue"],de=["onUpdate:modelValue"];function ue(_,a,x,e,y,m){return e.isMounted?(C(),Y(e.DataTable,{key:1,class:p({"skeleton select-none":e.props.isPending,"cursor-wait select-none":e.props.mutationUpdate.isPending.value}),value:e.props.data,paginator:!0,rows:5,"edit-mode":"cell",onCellEditComplete:e.handleEdit},{default:i(()=>[d(e.Column,{field:"ISSN",header:"ISSN"},{body:i(({data:o,field:t})=>[v(b(o[t]??"---"),1)]),editor:i(({data:o,field:t})=>[n(l("input",{"onUpdate:modelValue":r=>o[t]=r,type:"text",class:"input input-bordered w-full max-w-xs"},null,8,X),[[u,o[t]]])]),_:1}),d(e.Column,{field:"titulo",header:"Titulo de la publicación"},{body:i(({data:o,field:t})=>[l("div",Z,b(o[t]),1)]),editor:i(({data:o,field:t})=>[n(l("textarea",{"onUpdate:modelValue":r=>o[t]=r,class:"textarea textarea-bordered h-24"},null,8,$),[[u,o[t]]])]),_:1}),d(e.Column,{field:"year",header:"Año"},{editor:i(({data:o,field:t})=>[n(l("input",{"onUpdate:modelValue":r=>o[t]=r,type:"text",class:"input input-bordered w-full max-w-xs"},null,8,ee),[[u,o[t]]])]),_:1}),d(e.Column,{field:"tipo",header:"Tipo",sortable:""},{body:i(({data:o,field:t})=>[l("div",oe,b(o[t].toUpperCase()),1)]),editor:i(({data:o,field:t})=>[n(l("select",{"onUpdate:modelValue":r=>o[t]=r,class:"select select-bordered w-full max-w-xs"},a[3]||(a[3]=[l("option",{disabled:"",selected:""},"Selecciona un tipo",-1),l("option",{value:"arbitrado"},"Arbitrado",-1),l("option",{value:"memoria en extenso"},"Memoria en extenso",-1),l("option",{value:"journa"},"Journal",-1),l("option",{value:"indexado"},"Indexado",-1)]),8,le),[[D,o[t]]])]),_:1}),d(e.Column,{field:"miembrosCol",header:"Miembros autores"},{body:i(({data:o})=>[v(b(o.miembros_publicacion.map(t=>t.nombreCompleto).join(",")),1)]),editor:i(({data:o,field:t,editorSaveCallback:r,editorCancelCallback:c})=>[l("div",ae,[l("form",{onSubmit:V(c,["prevent"])},a[4]||(a[4]=[l("button",{type:"submit",class:"btn btn-error btn-xs"},"Cancelar",-1)]),40,te),l("form",{onSubmit:V(r,["prevent"])},a[5]||(a[5]=[l("button",{type:"submit",class:"btn btn-primary btn-xs"},"Guardar",-1)]),40,re)]),d(e.MultiSelect,{modelValue:e.colaboradores,"onUpdate:modelValue":a[0]||(a[0]=s=>e.colaboradores=s),onVnodeMounted:s=>e.colaboradores=o[t],options:e.miembros,"option-label":"label","option-value":"value",display:"chip",filter:"",onKeydown:[a[1]||(a[1]=F(V(()=>{},["stop"]),["enter"])),a[2]||(a[2]=F(V(()=>{},["stop"]),["escape"]))]},null,8,["modelValue","onVnodeMounted","options"])]),_:1}),d(e.Column,{field:"otrosAutores",header:"Otros autores"},{body:i(({data:o,field:t})=>[v(b(o[t]??"---"),1)]),editor:i(({data:o,field:t})=>[n(l("textarea",{"onUpdate:modelValue":r=>o[t]=r,class:"textarea textarea-bordered h-24"},null,8,ie),[[u,o[t]]])]),_:1}),d(e.Column,{field:"descripcion",header:"Descripción"},{body:i(({data:o,field:t})=>[v(b(o[t]??"---"),1)]),editor:i(({data:o,field:t})=>[n(l("textarea",{"onUpdate:modelValue":r=>o[t]=r,class:"textarea textarea-bordered h-24"},null,8,se),[[u,o[t]]])]),_:1}),d(e.Column,{field:"url",header:"URL (DOI u otro)"},{body:i(({data:o,field:t})=>[v(b(o[t]??"---"),1)]),editor:i(({data:o,field:t})=>[n(l("textarea",{"onUpdate:modelValue":r=>o[t]=r,class:"textarea textarea-bordered h-24"},null,8,ne),[[u,o[t]]])]),_:1}),d(e.Column,{field:"visible",header:"Visibilidad de la publicación",sortable:""},{body:i(({data:o,field:t})=>[l("div",{class:p(["badge h-max",{"badge-success":o[t],"badge-error":!o[t]}])},b(o[t]?"Visible":"No visible"),3)]),editor:i(({data:o,field:t})=>[n(l("select",{"onUpdate:modelValue":r=>o[t]=r,class:"select select-bordered w-full max-w-xs"},a[6]||(a[6]=[l("option",{disabled:"",selected:"",value:""},"Selecciona una visibilidad",-1),l("option",{value:!0},"Visible",-1),l("option",{value:!1},"No visible",-1)]),8,de),[[D,o[t]]])]),_:1}),d(e.Column,{field:"createdAt",header:"Fecha de creación",sortable:""},{body:i(({data:o,field:t})=>[v(b(e.formatDate(o[t],"DD-MM-YYYY")),1)]),_:1}),d(e.Column,{field:"updatedAt",header:"Ultima actualización",sortable:""},{body:i(({data:o,field:t})=>[v(b(e.formatDate(o[t],"DD-MM-YYYY")),1)]),_:1})]),_:1},8,["class","value"])):(C(),P("div",W))}const be=O(Q,[["render",ue]]),me=N({__name:"AddPublicaciones",setup(_,{expose:a}){a();const x=new K,{data:e,isPending:y,refetch:m}=A("publicaciones","publicacionesData"),{data:o}=A("miembros","miembrosData"),t=M(!1),r=h("publicaciones","post",{onSuccess(){s.titulo="",s.ISSN=null,s.descripcion=null,s.year="",s.url=null,s.miembrosColaboradores=[],s.tipo="",s.otrosAutores=null,m()}}),c=h("publicaciones","put",{onSuccess(){m()}}),s=R({titulo:"",ISSN:null,descripcion:null,year:"",url:null,miembrosColaboradores:[],visible:!0,tipo:"",otrosAutores:null}),f=j(()=>e.value?.response.map(S=>({...S,miembrosCol:S.miembros_publicacion.map(U=>U.idmiembro)}))??[]),w={validator:x,data:e,isPending:y,refetch:m,miembros:o,noMiembrosColab:t,addPublicacion:r,updatePublicaciones:c,body:s,proyectos:f,handleSubmit:()=>{e:{if(s.miembrosColaboradores.length>0&&(t.value=!1),s.miembrosColaboradores.length<1){t.value=!0,z.error("No seleccionaste ningun miembro colaborador.");break e}r.mutate(s);break e}},ListaPublicaciones:be,get MultiSelect(){return k}};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}),ce={class:"form-control w-full max-w-xs h-full row-span-2"},pe={class:"form-control w-full max-w-xs h-full row-span-2"},xe={class:"form-control w-full max-w-xs"},fe={class:"form-control w-full max-w-xs"},ve={class:"form-control w-full max-w-xs"},ye={class:"form-control w-full max-w-xs"},we={class:"form-control w-full max-w-xs"},Ve={class:"w-full max-w-xs"},_e={class:"label"},Se={key:0,class:"label-text-alt text-error"};function Ce(_,a,x,e,y,m){return C(),P(q,null,[l("form",{class:"mb-4 grid grid-cols-4 grid-rows-3 gap-4 items-end",onSubmit:V(e.handleSubmit,["prevent"])},[l("label",ce,[a[8]||(a[8]=l("div",{class:"label"},[l("span",{class:"label-text"},"Titulo")],-1)),n(l("textarea",{"onUpdate:modelValue":a[0]||(a[0]=o=>e.body.titulo=o),class:p(["textarea textarea-bordered h-full",{"textarea-error":e.validator.setErrorObject(e.addPublicacion.error.value).setField("titulo").getValidator().isError()}]),required:""},null,2),[[u,e.body.titulo]])]),l("label",pe,[a[9]||(a[9]=l("div",{class:"label"},[l("span",{class:"label-text"},"Descripción")],-1)),n(l("textarea",{"onUpdate:modelValue":a[1]||(a[1]=o=>e.body.descripcion=o),class:p(["textarea textarea-bordered h-full",{"textarea-error":e.validator.setErrorObject(e.addPublicacion.error.value).setField("titulo").getValidator().isError()}])},null,2),[[u,e.body.descripcion]])]),l("label",xe,[a[10]||(a[10]=l("div",{class:"label"},[l("span",{class:"label-text"},"ISSN")],-1)),n(l("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=o=>e.body.ISSN=o),class:p(["input input-bordered w-full max-w-xs",{"input-error":e.validator.setErrorObject(e.addPublicacion.error.value).setField("clave").getValidator().isError()}])},null,2),[[u,e.body.ISSN]])]),l("label",fe,[a[11]||(a[11]=l("div",{class:"label"},[l("span",{class:"label-text"},"Otros autores"),l("span",{class:"label-text-alt"},'Separar con ";"')],-1)),n(l("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=o=>e.body.otrosAutores=o),class:p(["input input-bordered w-full max-w-xs",{"input-error":e.validator.setErrorObject(e.addPublicacion.error.value).setField("clave").getValidator().isError()}])},null,2),[[u,e.body.otrosAutores]])]),l("label",ve,[a[12]||(a[12]=l("div",{class:"label"},[l("span",{class:"label-text"},"Año de publicación")],-1)),n(l("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=o=>e.body.year=o),class:p(["input input-bordered w-full max-w-xs",{"input-error":e.validator.setErrorObject(e.addPublicacion.error.value).setField("clave").getValidator().isError()}]),required:""},null,2),[[u,e.body.year]])]),l("label",ye,[a[13]||(a[13]=l("div",{class:"label"},[l("span",{class:"label-text"},"URL (doi, etc.)")],-1)),n(l("input",{type:"text","onUpdate:modelValue":a[5]||(a[5]=o=>e.body.url=o),class:p(["input input-bordered w-full max-w-xs",{"input-error":e.validator.setErrorObject(e.addPublicacion.error.value).setField("clave").getValidator().isError()}])},null,2),[[u,e.body.url]])]),l("label",we,[a[15]||(a[15]=l("div",{class:"label"},[l("span",{class:"label-text"},"Tipo")],-1)),n(l("select",{class:"select select-bordered","onUpdate:modelValue":a[6]||(a[6]=o=>e.body.tipo=o),required:""},a[14]||(a[14]=[L('<option disabled selected value="">Selecciona un tipo</option><option value="arbitrado">Arbitrado</option><option value="memoria en extenso">Memoria en extenso</option><option value="journal">Journal</option><option value="indexado">Indexado</option>',5)]),512),[[D,e.body.tipo]])]),l("div",Ve,[l("div",_e,[a[16]||(a[16]=l("span",{class:"label-text"},"Miembros colaboradores",-1)),e.noMiembrosColab?(C(),P("span",Se,"**")):B("",!0)]),d(e.MultiSelect,{modelValue:e.body.miembrosColaboradores,"onUpdate:modelValue":a[7]||(a[7]=o=>e.body.miembrosColaboradores=o),display:"chip",options:e.miembros?.response,optionLabel:"nombreCompleto","option-value":"idmiembro",filter:"",placeholder:"Selecciona uno o más miembros","max-selected-labels":2,class:p({"input-error":e.noMiembrosColab||e.validator.setErrorObject(e.addPublicacion.error.value).setField("miembrosColaboradores").getValidator().isError()})},null,8,["modelValue","options","class"])]),a[17]||(a[17]=l("button",{class:"btn btn-primary"},"Añadir publicación",-1))],32),d(e.ListaPublicaciones,{data:e.proyectos??[],"is-pending":e.isPending,miembros:e.miembros?.response??[],"mutation-update":e.updatePublicaciones},null,8,["data","is-pending","miembros","mutation-update"])],64)}const je=O(me,[["render",Ce]]);export{je as default};
