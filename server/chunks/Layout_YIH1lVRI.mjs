import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition, a as renderComponent, b as createAstro, f as renderHead, g as renderSlot, h as createTransitionScope } from './astro/server_BLMGylKI.mjs';
import { a as useGetData, _ as _export_sfc, $ as $$ViewTransitions } from './_plugin-vue_export-helper_DoRTQOpn.mjs';
import 'vue3-toastify';
import '@primevue/themes/aura';
import { useSSRContext, defineComponent, mergeProps, ref, onMounted } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import moment from 'moment';
/* empty css                           */
/* empty css                           */
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-10 bg-primary text-base-100 w-full lg:grid lg:grid-cols-3"> <span class="my-auto">TecNM Campus de los Ríos</span> <div class="flex justify-end gap-4 not-prose col-span-2 items-center px-4"> <a class="link link-hover font-bold text-sm" href="/">Gobierno</a> <a class="link link-hover font-bold text-sm" href="/">Participa</a> <a class="link link-hover font-bold text-sm" href="/">Datos</a> </div> </div> <!--  <div class="min-h-20 bg-white">
        barra blanca
    </div> -->`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/Header.astro", void 0);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SideBarItems",
  setup(__props, { expose: __expose }) {
    __expose();
    const { data, isPending, isError } = useGetData("menus", "menus-nav");
    const __returned__ = { data, isPending, isError };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if (!$setup.isPending && !$setup.isError) {
    _push(`<!--[-->`);
    ssrRenderList($setup.data.response, (menu) => {
      _push(`<li>`);
      if (menu.dropcollapse) {
        _push(`<details open><summary>${ssrInterpolate(menu.nombre)}</summary><ul><!--[-->`);
        ssrRenderList(menu.submenus, (submenu) => {
          _push(`<li><a${ssrRenderAttr("href", "/" + menu.ruta + "/" + submenu.ruta)}>${ssrInterpolate(submenu.nombre)}</a></li>`);
        });
        _push(`<!--]--></ul></details>`);
      } else {
        _push(`<a${ssrRenderAttr("href", "/" + menu.ruta)}>${ssrInterpolate(menu.nombre)}</a>`);
      }
      _push(`</li>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<li><a>Cargando...</a></li>`);
  }
  _push(`<li><a href="/login">Iniciar sesi\xF3n</a></li><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/SideBarItems.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SideBarItems = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);

moment.locale("es-mx");
function formatDate(date, format) {
  return moment(date).format(format ?? "L");
}
function formatYear(date) {
  return moment(date).year();
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const actualDate = new Date(Date.now());
  const fDate = formatYear(actualDate);
  return renderTemplate`${maybeRenderHead()}<footer class="footer bg-base-200 text-base-content p-10"> <nav> <h6 class="footer-title"><i class="bi bi-geo-alt-fill"></i> Ubicación</h6> <p>
Dirección: Km. 3 carretera Balancán-Villahermosa, Balancán, Tabasco C.P.
      86930
</p> <p>Teléfono: 934 - 115 - 1443</p> <a href="https://maps.app.goo.gl/DVs2mPFzfHBDdCXj9" class="link" target="_blank">
Ver en Google Maps
<i class="bi bi-box-arrow-up-right"></i> </a> <!-- <iframe
      title="location map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.199083036566!2d-91.5346115538867!3d17.82929994302398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f3c2bd64971569%3A0x237ff6dacda499f4!2sInstituto%20Tecnol%C3%B3gico%20Superior%20de%20los%20R%C3%ADos!5e0!3m2!1ses-419!2smx!4v1729784470010!5m2!1ses-419!2smx"
      height="350"
      width="350"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      transition:name="mapa-location"
      transition:persist></iframe> --> <!--  <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a> --> </nav> <nav> <h6 class="footer-title">Transparencia</h6> <a class="link" href="#">About us</a> <a class="link" href="#">Contact</a> <a class="link" href="#">Jobs</a> <a class="link" href="#">Press kit</a> </nav> <nav> <h6 class="footer-title">Ultima actualización</h6> <span>30 de octubre de 2024</span> </nav> </footer> <footer class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4"> <aside class="grid-flow-col items-center"> <!--     <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="fill-current"
    >
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
      ></path>
    </svg> --> <p> <i class="bi bi-c-circle"></i> <span>${fDate}</span>
Cuerpo Académico - Computo Distribuido
</p> </aside> <nav class="md:place-self-center md:justify-self-end"> <div class="grid grid-flow-col gap-4 text-2xl"> <a href="mailto:cdistribuido2018@gmail.com" title="Mail" aria-label="Correo"> <i class="bi bi-envelope-fill"></i> </a> <a href="https://www.facebook.com/ComputoDistribuido/" target="_blank" title="Facebook" aria-label="Facebook"> <i class="bi bi-facebook"></i> </a> </div> </nav> </footer>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/Footer.astro", void 0);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MiembrosNav",
  props: {
    baseUrl: {},
    actualRoute: {}
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const { data, isPending } = useGetData("miembros?colaborador=false", "miembrosData");
    const handleSetRoute = (ruta) => {
      emit("click", ruta);
    };
    const __returned__ = { props, emit, data, isPending, handleSetRoute };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown dropdown-hover group" }, _attrs))}><div tabindex="0" role="button" class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1 flex gap-1"> Miembros <div class="swap swap-rotate group-hover:swap-active"><i class="bi bi-caret-down-fill swap-off"></i><i class="bi bi-caret-up-fill swap-on"></i></div></div><ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">`);
  if (!$setup.isPending) {
    _push(`<!--[-->`);
    ssrRenderList($setup.data.response, (miembro) => {
      _push(`<li><a${ssrRenderAttr("href", "/" + $setup.props.baseUrl + "/" + miembro.idmiembro)} class="${ssrRenderClass({ "bg-base-content/10": $setup.props.actualRoute === `/${$setup.props.baseUrl}/${miembro.idmiembro}` })}">${ssrInterpolate(miembro.nombreCompleto)}</a></li>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<li><span class="loading loading-spinner loading-xs"></span></li>`);
  }
  _push(`</ul></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/MiembrosNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MiembrosNav = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ColaboradoresNav",
  props: {
    baseUrl: {},
    actualRoute: {}
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const { data, isPending } = useGetData("miembros?colaborador=true", "colaboradoresData");
    const handleSetRoute = (ruta) => {
      emit("click", ruta);
    };
    const __returned__ = { props, emit, data, isPending, handleSetRoute };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown dropdown-hover group" }, _attrs))}><div tabindex="0" role="button" class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1 flex gap-1"> Colaboradores <div class="swap swap-rotate group-hover:swap-active"><i class="bi bi-caret-down-fill swap-off"></i><i class="bi bi-caret-up-fill swap-on"></i></div></div><ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">`);
  if (!$setup.isPending) {
    _push(`<!--[-->`);
    ssrRenderList($setup.data.response, (miembro) => {
      _push(`<li><a${ssrRenderAttr("href", "/" + $setup.props.baseUrl + "/" + miembro.idmiembro)} class="${ssrRenderClass({ "bg-base-content/10": $setup.props.actualRoute === `/${$setup.props.baseUrl}/${miembro.idmiembro}` })}">${ssrInterpolate(miembro.nombreCompleto)}</a></li>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<li><span class="loading loading-spinner loading-xs"></span></li>`);
  }
  _push(`</ul></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/ColaboradoresNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ColaboradoresNav = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavbarItems",
  setup(__props, { expose: __expose }) {
    __expose();
    const { data, isPending, isError } = useGetData("menus", "menus-nav");
    const actualRoute = ref("");
    const setActualRoute = (ruta) => {
      actualRoute.value = ruta;
    };
    const __returned__ = { data, isPending, isError, actualRoute, setActualRoute, MiembrosNav, ColaboradoresNav };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if (!$setup.isPending && !$setup.isError) {
    _push(`<!--[-->`);
    ssrRenderList($setup.data.response, (menu) => {
      _push(`<!--[-->`);
      if (menu.ruta === "miembros") {
        _push(ssrRenderComponent($setup["MiembrosNav"], {
          "base-url": menu.ruta,
          "actual-route": $setup.actualRoute,
          onClick: $setup.setActualRoute
        }, null, _parent));
      } else if (menu.ruta === "colaboradores") {
        _push(ssrRenderComponent($setup["ColaboradoresNav"], {
          "base-url": "miembros",
          onClick: $setup.setActualRoute,
          "actual-route": $setup.actualRoute
        }, null, _parent));
      } else if (menu.dropcollapse) {
        _push(`<div class="dropdown dropdown-hover group"><div tabindex="0" role="button" class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1 flex gap-1">${ssrInterpolate(menu.nombre)} <div class="swap swap-rotate group-hover:swap-active"><i class="bi bi-caret-down-fill swap-off"></i><i class="bi bi-caret-up-fill swap-on"></i></div></div><ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"><!--[-->`);
        ssrRenderList(menu.submenus, (submenu) => {
          _push(`<li><a${ssrRenderAttr("href", "/" + menu.ruta + "/" + submenu.ruta)} class="${ssrRenderClass({ "bg-base-content/10": $setup.actualRoute === `/${menu.ruta}/${submenu.ruta}` })}">${ssrInterpolate(submenu.nombre)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<a class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1"${ssrRenderAttr("href", "/" + menu.ruta)}>${ssrInterpolate(menu.nombre)}</a>`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(5, (_n) => {
      _push(`<div class="skeleton h-8 w-32"></div>`);
    });
    _push(`<!--]-->`);
  }
  _push(`<a href="/login" class="${ssrRenderClass([{ "bg-base-content/10": $setup.actualRoute === "/login" }, "rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1"])}"> Iniciar sesi\xF3n </a><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/NavbarItems.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitch",
  setup(__props, { expose: __expose }) {
    __expose();
    const active = ref(false);
    const changeTheme = (checked) => {
      const theme = checked ? "night" : "winter";
      document.documentElement.setAttribute("data-theme", theme);
    };
    const handle = (ev) => {
      const { checked } = ev.target;
      active.value = checked;
      localStorage.setItem("isDark", JSON.stringify(checked));
      changeTheme(checked);
    };
    onMounted(() => {
      const isDark = JSON.parse(localStorage.getItem("isDark") ?? "false");
      active.value = isDark;
    });
    const __returned__ = { active, changeTheme, handle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<label${ssrRenderAttrs(mergeProps({ class: "swap swap-rotate" }, _attrs))}><input type="checkbox" class="theme-controller"${ssrIncludeBooleanAttr($setup.active) ? " checked" : ""}><div class="swap-on fill-current flex justify-center items-center size-10"><i class="bi bi-sun-fill text-xl"></i></div><div class="swap-off fill-current flex justify-center items-center size-10"><i class="bi bi-moon-fill text-xl"></i></div></label>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/ThemeSwitch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ThemeSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar bg-base-100/80 backdrop-blur-sm min-h-20 w-full z-40 sticky top-0"> <div class="flex-none lg:hidden"> <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost size-10"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </label> </div> <div class="navbar-start grow justify-center lg:justify-start lg:grow-0"> <a href="/" class="btn btn-ghost" title="Inicio"> <img src="/logo.png" alt="logo" class="h-full object-contain" width="100px" height="100px"> </a> </div> <div class="navbar-center hidden lg:flex" data-astro-transition-persist="navbar-items"${addAttribute(renderTransition($$result, "yq567od7", "", "navbar-items"), "data-astro-transition-scope")}> ${renderComponent($$result, "NavbarItems", NavbarItems, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/blanco/Documentos/ca-astro/src/components/gui/NavbarItems.vue", "client:component-export": "default" })} </div> <div class="navbar-end w-min lg:w-1/2"> ${renderComponent($$result, "ThemeSwitch", ThemeSwitch, { "client:load": true, "data-astro-transition-persist": "theme-switch", "client:component-hydration": "load", "client:component-path": "/home/blanco/Documentos/ca-astro/src/components/gui/ThemeSwitch.vue", "client:component-export": "default", "data-astro-transition-scope": renderTransition($$result, "htwmiurr", "", "theme-switch") })} <!-- <label class="swap swap-rotate">
      <input type="checkbox" class="theme-controller" value="night" />

      <div
        class="swap-on fill-current flex justify-center items-center size-10"
      >
        <i class="bi bi-sun-fill text-xl"></i>
      </div>
      <div
        class="swap-off fill-current flex justify-center items-center size-10"
      >
        <i class="bi bi-moon-fill text-xl"></i>
      </div>
    </label> --> </div> </nav>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/NavBar.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://computodistribuido.org");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  Astro2.response.headers.set(
    "Cache-Control",
    "public, s-maxage=120, stale-while-revalidate=60"
  );
  return renderTemplate`<html lang="es" data-theme="winter"> <head><meta charset="UTF-8"><meta name="description" content="Cuerpo academico de computo distribuido del Instituto Tecnologico Superior de los Ríos"><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest">${renderTemplate(_a || (_a = __template(['<script type="text/javascript">\n      (function (c, l, a, r, i, t, y) {\n        c[a] =\n          c[a] ||\n          function () {\n            (c[a].q = c[a].q || []).push(arguments);\n          };\n        t = l.createElement(r);\n        t.async = 1;\n        t.src = "https://www.clarity.ms/tag/" + i;\n        y = l.getElementsByTagName(r)[0];\n        y.parentNode.insertBefore(t, y);\n      })(window, document, "clarity", "script", "p2w2k9i73t");\n    </script>'])))}<meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body class="w-screen h-screen overflow-x-hidden"> <div class="drawer h-full w-full"> <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> <div class="drawer-content h-full w-full overflow-x-hidden" id="scroll-container"> <!-- Navbar --> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> <div class="drawer-side z-50"> <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu bg-base-200 min-h-full w-80 p-4"${addAttribute(createTransitionScope($$result, "6xbvbalr"), "data-astro-transition-persist")}> <!-- Sidebar content here --> ${renderComponent($$result, "SideBarItems", SideBarItems, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/gui/SideBarItems.vue", "client:component-export": "default" })} </ul> </div> </div>  </body></html>`;
}, "/home/blanco/Documentos/ca-astro/src/layouts/Layout.astro", "self");

export { $$Layout as $, formatDate as f };
