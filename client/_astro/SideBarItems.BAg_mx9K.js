import{d as c,o as s,c as n,a as t,F as _,t as p,u,q as $}from"./index.CYdWx_fJ.js";import{a as m}from"./http.CGtWncCw.js";import{_ as f}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./utils.O0ez53dv.js";const y=c({__name:"MiembrosSide",emits:["click"],setup(d,{expose:r,emit:i}){r();const o=i,{data:l,isPending:a}=m("miembros?colaborador=false","miembrosData"),e={emit:o,data:l,isPending:a};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),g={open:""},k=["href"],S={key:1};function x(d,r,i,o,l,a){return s(),n("details",g,[r[1]||(r[1]=t("summary",null,"Miembros",-1)),t("ul",null,[o.isPending?(s(),n("li",S,r[0]||(r[0]=[t("span",{class:"loading loading-spinner loading-xs"},null,-1)]))):(s(!0),n(_,{key:0},p(o.data.response,e=>(s(),n("li",null,[t("a",{href:"/miembros/"+e.idmiembro},u(`${e.nombre} ${e.apepat} ${e.apemat}`),9,k)]))),256))])])}const h=f(y,[["render",x]]),P=c({__name:"ColaboradoresSide",emits:["click"],setup(d,{expose:r,emit:i}){r();const o=i,{data:l,isPending:a}=m("miembros?colaborador=true","colaboradoresData"),e={emit:o,data:l,isPending:a};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),B={open:""},C=["href"],M={key:1};function v(d,r,i,o,l,a){return s(),n("details",B,[r[1]||(r[1]=t("summary",null,"Miembros",-1)),t("ul",null,[o.isPending?(s(),n("li",M,r[0]||(r[0]=[t("span",{class:"loading loading-spinner loading-xs"},null,-1)]))):(s(!0),n(_,{key:0},p(o.data.response,e=>(s(),n("li",null,[t("a",{href:"/miembros/"+e.idmiembro},u(`${e.nombre} ${e.apepat} ${e.apemat}`),9,C)]))),256))])])}const D=f(P,[["render",v]]),j=c({__name:"SideBarItems",setup(d,{expose:r}){r();const{data:i,isPending:o,isError:l}=m("menus","menus-nav"),a={data:i,isPending:o,isError:l,MiembrosSide:h,ColaboradoresSide:D};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),E={key:2,open:""},F=["href"],I=["href"],O={key:1};function q(d,r,i,o,l,a){return s(),n(_,null,[!o.isPending&&!o.isError?(s(!0),n(_,{key:0},p(o.data.response,e=>(s(),n("li",null,[e.ruta==="miembros"?(s(),$(o.MiembrosSide,{key:0})):e.ruta==="colaboradores"?(s(),$(o.ColaboradoresSide,{key:1})):e.dropcollapse?(s(),n("details",E,[t("summary",null,u(e.nombre),1),t("ul",null,[(s(!0),n(_,null,p(e.submenus,b=>(s(),n("li",null,[t("a",{href:"/"+e.ruta+"/"+b.ruta},u(b.nombre),9,F)]))),256))])])):(s(),n("a",{key:3,href:"/"+e.ruta},u(e.nombre),9,I))]))),256)):(s(),n("li",O,r[0]||(r[0]=[t("a",null,"Cargando...",-1)]))),r[1]||(r[1]=t("li",null,[t("a",{href:"/login"},"Iniciar sesión")],-1))],64)}const w=f(j,[["render",q]]);export{w as default};
