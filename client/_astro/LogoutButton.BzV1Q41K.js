import{d as r,c as s,g as a}from"./index.D8K0Xl66.js";import{u as i}from"./http.BT3W8ybg.js";import{_ as u}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./utils.x8l0Hx9r.js";const c=r({__name:"LogoutButton",setup(e,{expose:t}){t();const o={logout:i("logout","post",{onToastClose(){window.location.href="/login"},toastMsg:"Sesión cerrada correctamente, redirigiendo..."})};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),l=["disabled"];function d(e,t,n,o,p,_){return a(),s("button",{class:"btn btn-error col-span-2 btn-block",onClick:t[0]||(t[0]=m=>o.logout.mutate({})),disabled:o.logout.isPending.value},"Cerrar sesión",8,l)}const k=u(c,[["render",d]]);export{k as default};
