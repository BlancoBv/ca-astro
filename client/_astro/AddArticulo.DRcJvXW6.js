import{d as B,b as h,u as U,x as V,o as l,c as i,a as o,t as v,F as x,r as E,s as y,n as f,w as q,g as R,p as D,f as N,i as I,y as k}from"./index.DxymP5mP.js";import{e as F,E as T,I as j}from"./EditorInstance.DxzgRVn5.js";import{a as M,u as G}from"./http.fLk4Mcz6.js";import{_ as O}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{S as L}from"./SelectEtiqueta.D1ml92WY.js";import"./utils.DVtFzRZj.js";const z=B({__name:"SelectRuta",props:{value:{},required:{type:Boolean}},emits:["setOption"],setup(c,{expose:t,emit:u}){t();const e=c,s=h(e.value),r=u,a=h(!1),m=h({subrutas:[],rutaBase:""}),w=U("input-ruta"),{data:p,isError:_,isPending:g}=M("menus","rutasData"),b=d=>{s.value=d,r("setOption",d)};V(s,(d,C)=>{if(console.log({value:d,oldValue:C}),!_.value&&!g.value){const A=p.value.response?.findIndex(P=>P.ruta===d),S=p.value.response[A];S&&S?.dropcollapse?(a.value=!0,m.value={rutaBase:d,subrutas:S.submenus}):(a.value=!1,m.value={rutaBase:"",subrutas:[]})}});const n={props:e,ruta:s,emit:r,haveRoutes:a,subRoutes:m,inputRuta:w,data:p,isError:_,isPending:g,handleChange:b};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),H=["value"],J={selected:"",disabled:"",value:""},K=["value"],Q=["value"],W=["value"];function X(c,t,u,e,s,r){return l(),i(x,null,[o("select",{class:"select select-bordered w-full max-w-xs",value:e.ruta,onInput:t[0]||(t[0]=a=>e.handleChange(a.target.value)),required:"",ref:"input-ruta"},[o("option",J,v(e.isPending?"Cargando...":"Seleccione una ruta"),1),!e.isPending&&!e.isError?(l(!0),i(x,{key:0},E(e.data.response,a=>(l(),i("option",{value:a.ruta},v(a.nombre),9,K))),256)):y("",!0)],40,H),e.haveRoutes?(l(),i("select",{key:0,class:"select select-bordered w-full max-w-xs",value:e.props.value,onInput:t[1]||(t[1]=a=>e.emit("setOption",a.target.value)),required:""},[t[2]||(t[2]=o("option",{selected:"",disabled:"",value:""},"Seleccione una ruta",-1)),!e.isPending&&!e.isError?(l(!0),i(x,{key:0},E(e.subRoutes.subrutas,a=>(l(),i("option",{value:e.subRoutes.rutaBase+"/"+a.ruta},v(a.nombre),9,W))),256)):y("",!0)],40,Q)):y("",!0)],64)}const Y=O(z,[["render",X]]),Z=B({__name:"AddArticulo",props:{idUsuario:{}},setup(c,{expose:t}){t();const u=c,e=I({titulo:"",ruta:"",idUsuario:u.idUsuario,fecha:"",etiquetas:[]}),s=F(e),r=G("articulos","post"),a=I({src:null}),b={props:u,body:e,editor:s,send:r,image:a,handleEditor:n=>{e.contenido=n},handleRuta:n=>{e.ruta=n},handleEtiquetas:n=>{e.etiquetas=n},handleSubmit:()=>{e:{if(!e.contenido){k.warning("No has escrito nada en el editor.");break e}if(e.etiquetas.length<1){k.error("Añade al menos una etiqueta.");break e}r.mutate(e)}},handleImg:n=>{a.src=n},Editor:T,SelectRuta:Y,SelectEtiqueta:L,ImageSelector:j};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}),$={class:"form-control w-full max-w-xs"},ee={class:"form-control w-full max-w-xs"};function te(c,t,u,e,s,r){return l(),i(x,null,[f(e.ImageSelector,{onClick:e.handleImg,"editor-instance":e.editor},null,8,["editor-instance"]),o("form",{onSubmit:N(e.handleSubmit,["prevent"])},[o("label",$,[t[3]||(t[3]=o("div",{class:"label"},[o("span",{class:"label-text"},"Titulo del articulo")],-1)),q(o("input",{type:"text",class:"input input-bordered w-full max-w-xs",required:"","onUpdate:modelValue":t[0]||(t[0]=a=>e.body.titulo=a)},null,512),[[R,e.body.titulo]])]),o("label",ee,[t[4]||(t[4]=o("div",{class:"label"},[o("span",{class:"label-text"},"Fecha")],-1)),q(o("input",{type:"date",class:"input input-bordered w-full max-w-xs",required:"","onUpdate:modelValue":t[1]||(t[1]=a=>e.body.fecha=a)},null,512),[[R,e.body.fecha]])]),D(" "+v(e.body.ruta)+" ",1),f(e.SelectRuta,{value:e.body.ruta,onSetOption:e.handleRuta},null,8,["value"]),f(e.SelectEtiqueta,{value:e.body.etiquetas,onSetOption:e.handleEtiquetas},null,8,["value"]),f(e.Editor,{onUpdateContent:e.handleEditor,onAddImage:t[2]||(t[2]=()=>{}),editor:e.editor},null,8,["editor"]),t[5]||(t[5]=o("button",{class:"btn btn-primary",type:"submit"},"Enviar",-1))],32)],64)}const ie=O(Z,[["render",te]]);export{ie as default};
