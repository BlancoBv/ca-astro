import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, a as renderComponent, ae as renderHead, af as renderSlot, ad as createTransitionScope } from './astro/server_DmhofpIV.mjs';
import { _ as _export_sfc, $ as $$ClientRouter } from './_plugin-vue_export-helper_3ktPLYsj.mjs';
/* empty css                         */
/* empty css                           */
import { R as Roles, f as Permisos } from './index_CM2BeHHC.mjs';
import { C as ControllerBuilder } from './builder_Cv7uo8Sa.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { u as useSendData } from './http_yWF3wTfY.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
/* empty css                         */

var permType = /* @__PURE__ */ ((permType2) => {
  permType2["r"] = "r";
  permType2["w"] = "w";
  permType2["d"] = "d";
  permType2["u"] = "u";
  return permType2;
})(permType || {});
async function validatePerm(idRol, permType2, permName) {
  if (idRol === 1) {
    return false;
  }
  const controller = new ControllerBuilder();
  const rol = await controller.setModel(Roles).setIncludedModels([
    {
      model: Permisos,
      through: { attributes: [] },
      attributes: ["nombre", "tipo"]
    }
  ]).setWhereFilters({ id: idRol }).getResult().getOne();
  const permisos = rol?.toJSON().permisos;
  return !permisos?.some(
    (el) => el.nombre === permName && el.tipo === permType2
  );
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LogoutButton",
  setup(__props, { expose: __expose }) {
    __expose();
    const logout = useSendData("logout", "post", {
      onToastClose() {
        window.location.href = "/login";
      },
      toastMsg: "Sesi\xF3n cerrada correctamente, redirigiendo..."
    });
    const __returned__ = { logout };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "btn btn-error col-span-2 btn-block",
    disabled: $setup.logout.isPending.value
  }, _attrs))}>Cerrar sesi\xF3n</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/panel/LogoutButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LogoutButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$LayoutPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutPanel;
  const { user } = Astro2.locals;
  const { sectionTitle } = Astro2.props;
  Astro2.response.headers.set("Cache-Control", "public, max-age=0");
  return renderTemplate`<html lang="es" data-theme="winter"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>Panel de administración</title>${renderHead()}</head> <body class="w-screen h-screen overflow-x-hidden"> <div class="drawer drawer-open h-full w-full"> <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> <div class="drawer-content overflow-y-auto h-full w-full p-4"> <div class="prose max-w-full w-full"> <h1 class="mb-0">${sectionTitle}</h1> <div class="divider"></div> </div> ${renderSlot($$result, $$slots["default"])} </div> <div class="drawer-side z-50"${addAttribute(createTransitionScope($$result, "jplsrtv5"), "data-astro-transition-persist")}> <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu bg-base-200 rounded-box w-60 h-screen flex-nowrap overflow-y-auto"> <li><a href="/panel">Inicio</a></li> ${!await validatePerm(user?.idRol, permType.r, "banners") && renderTemplate`<li> <a href="/panel/banners">Banners</a> </li>`} ${!await validatePerm(user?.idRol, permType.r, "articulos") && renderTemplate`<li> <details open> <summary>Articulos</summary> <ul> <li> <a href="/panel/articulos/crear">Crear</a> </li> </ul> </details> </li>`} ${!await validatePerm(user?.idRol, permType.r, "etiquetas") && renderTemplate`<li> <a href="/panel/etiquetas">Etiquetas</a> </li>`} ${!await validatePerm(user?.idRol, permType.r, "blogs") && renderTemplate`<li> <details open> <summary>Blogs</summary> <ul> <li> <a href="/panel/blogs/lista">Lista de blogs</a> </li> <li> <a href="/panel/blogs/add">Añadir nuevo blog</a> </li> </ul> </details> </li>`} <li> <details open> <summary>Documentos</summary> <ul> ${!await validatePerm(user?.idRol, permType.r, "minutas") && renderTemplate`<li> <a href="/panel/documentos/minutas">Minutas</a> </li>`} </ul> </details> </li> ${!await validatePerm(user?.idRol, permType.r, "proyectos") && renderTemplate`<li> <a href="/panel/proyectos">Proyectos</a> </li>`} <li> <a href="/panel/publicaciones">Publicaciones</a> </li> ${user?.idRol === 1 && renderTemplate`<li> <a href="/panel/logs">Logs</a> </li>`} <div class="sticky bottom-0 bg-base-100/80 backdrop-blur-sm"> <div class="divider mt-0"></div> <div class="grid grid-cols-2 grid-rows-2 place-items-center"> <div class="avatar placeholder"> <div class="bg-neutral text-neutral-content w-24 rounded-full"> <span class="text-3xl">${user?.nombre_completo.charAt(0)}</span> </div> </div> <p>${user?.nombre_completo}</p> ${renderComponent($$result, "LogoutButton", LogoutButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/panel/LogoutButton.vue", "client:component-export": "default" })} </div> </div> </ul> </div> </div> </body></html>`;
}, "/home/blanco/Documentos/ca-astro/src/layouts/LayoutPanel.astro", "self");

export { $$LayoutPanel as $, permType as p, validatePerm as v };
