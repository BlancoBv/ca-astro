import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, a as renderComponent, aa as Fragment, e as renderTransition, ab as createTransitionScope, ac as renderHead, ad as renderSlot, ae as renderScript } from './astro/server_BYikK1dL.mjs';
import { _ as _export_sfc, $ as $$ClientRouter } from './_plugin-vue_export-helper_NQzEJyeK.mjs';
import { b as formatYear } from './format_Cetxi1N9.mjs';
/* empty css                           */
import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, onMounted, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr } from 'vue/server-renderer';
/* empty css                         */
/* empty css                           */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-10 bg-neutral/80 w-full flex gap-4 flex-wrap justify-end items-center px-4"> <a href="https://rios.tecnm.mx/rios/" target="_blank" class="btn btn-xs btn-info">TecNM Campus de los Ríos <i class="bi bi-box-arrow-up-right"></i></a> <!--   <a class="btn btn-xs btn-info" href="/">Gobierno</a>
  <a class="btn btn-xs btn-info" href="/">Participa</a>
  <a class="btn btn-xs btn-info" href="/">Datos</a> --> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const actualDate = new Date(Date.now());
  const fDate = formatYear(actualDate);
  return renderTemplate`${maybeRenderHead()}<div class="footer bg-base-300 text-base-content p-10"> <nav> <h6 class="footer-title"><i class="bi bi-geo-alt-fill"></i> Ubicación</h6> <p>
Dirección: Km. 3 carretera Balancán-Villahermosa, Balancán, Tabasco C.P.
      86930
</p> <p>Teléfono: 934 - 115 - 1443</p> <a href="https://maps.app.goo.gl/DVs2mPFzfHBDdCXj9" class="link" target="_blank">
Ver en Google Maps <i class="bi bi-box-arrow-up-right"></i> </a> <!-- <iframe
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
    <a class="link link-hover">Advertisement</a> --> </nav> <!--   <nav>
    <h6 class="footer-title">Transparencia</h6>
    <a class="link" href="#">About us</a>
    <a class="link" href="#">Contact</a>
    <a class="link" href="#">Jobs</a>
    <a class="link" href="#">Press kit</a>
  </nav> --> <nav> <h6 class="footer-title">Ultima actualización</h6> <span>30 de octubre de 2024</span> </nav> </div> <footer class="footer place-items-center md:place-items-start bg-base-300 text-base-content border-base-300 border-t px-10 py-4"> <aside class="grid-flow-col items-center"> <p> <i class="bi bi-c-circle"></i> <span>${fDate}</span>
Cuerpo Académico - Computo Distribuido
</p> </aside> <nav class="md:place-self-center md:justify-self-end"> <div class="grid grid-flow-col gap-4 text-2xl"> <a href="mailto:cdistribuido2018@gmail.com" title="Mail" aria-label="Correo"> <i class="bi bi-envelope-fill"></i> </a> <a href="https://www.facebook.com/ComputoDistribuido/" target="_blank" title="Facebook" aria-label="Facebook"> <i class="bi bi-facebook"></i> </a> </div> </nav> </footer>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/Footer.astro", void 0);

const $$Astro$4 = createAstro("https://computodistribuido.org");
const $$MiembrosNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MiembrosNav;
  const { colaboradores } = Astro2.props;
  const res = await fetch(
    `http://localhost:4321/api/miembros?colaborador=${colaboradores ? "true" : "false"}`
  ).then((res2) => res2.json());
  return renderTemplate`${maybeRenderHead()}<div class="dropdown dropdown-hover group"> <div tabindex="0" role="button" class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1 flex gap-1"> ${colaboradores ? "Colaboradores" : "Miembros"} <div class="swap swap-rotate group-hover:swap-active"> <i class="bi bi-caret-down-fill swap-off"></i> <i class="bi bi-caret-up-fill swap-on"></i> </div> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow"> ${res.response?.map((miembro) => {
    return renderTemplate`<li> <a${addAttribute(`/miembros/${miembro.idmiembro}`, "href")} class="text-balance"> ${miembro.nombreCompleto} </a> </li>`;
  })} </ul> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/MiembrosNav.astro", void 0);

const $$NavBarItems = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("http://localhost:4321/api/menus").then(
    (res2) => res2.json()
  );
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${res.response?.map((menu) => {
    if (menu.ruta === "miembros") {
      return renderTemplate`${renderComponent($$result2, "MiembrosNav", $$MiembrosNav, {})}`;
    }
    if (menu.ruta === "colaboradores") {
      return renderTemplate`${renderComponent($$result2, "MiembrosNav", $$MiembrosNav, { "colaboradores": true })}`;
    }
    if (menu.dropcollapse)
      return renderTemplate`${maybeRenderHead()}<div class="dropdown dropdown-hover group"><div tabindex="0" role="button" class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1 flex gap-1">${menu.nombre}<div class="swap swap-rotate group-hover:swap-active"><i class="bi bi-caret-down-fill swap-off"></i><i class="bi bi-caret-up-fill swap-on"></i></div></div><ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow">${menu.submenus?.map((submenu) => renderTemplate`<li><a${addAttribute(`/${menu.ruta}/${submenu.ruta}`, "href")}>${submenu.nombre}</a></li>`)}</ul></div>`;
    return renderTemplate`<a class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1"${addAttribute(`/${menu.ruta}`, "href")}>${menu.nombre}</a>`;
  })}` })}`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/NavBarItems.astro", void 0);

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

const $$Astro$3 = createAstro("https://computodistribuido.org");
const $$NavBarServer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavBarServer;
  const { user } = Astro2.locals;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar bg-base-200/80 backdrop-blur-sm min-h-20 w-full z-40 sticky top-0" data-astro-transition-persist="navbar"${addAttribute(renderTransition($$result, "kg4xebrk", "", "navbar"), "data-astro-transition-scope")}> <div class="flex-none lg:hidden"> <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost size-10"> <i class="bi bi-list text-3xl"></i> </label> </div> <div class="navbar-start grow justify-center lg:justify-start lg:grow-0"> <a href="/" class="btn btn-ghost" title="Inicio"> <img src="/logo.webp" alt="logo" class="h-full object-contain" width="100px" height="300px" loading="eager"> </a> </div> <div class="navbar-center hidden lg:flex"> ${renderComponent($$result, "NavBarItems", $$NavBarItems, {})} <div class="dropdown dropdown-hover group"> <div tabindex="0" role="button" class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1 flex gap-1">
Documentos
<div class="swap swap-rotate group-hover:swap-active"> <i class="bi bi-caret-down-fill swap-off"></i> <i class="bi bi-caret-up-fill swap-on"></i> </div> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow"> <li> <a href="/documentos/minutas">Minutas</a> </li> </ul> </div> <a href="/login" class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1"> ${user?.id ? "Ir al panel" : "Iniciar sesi\xF3n"} </a> </div> <div class="navbar-end w-min lg:w-1/2"> ${renderComponent($$result, "ThemeSwitch", ThemeSwitch, { "client:load": true, "data-astro-transition-persist": "theme-switch", "client:component-hydration": "load", "client:component-path": "/home/blanco/Documentos/ca-astro/src/components/gui/ThemeSwitch.vue", "client:component-export": "default", "data-astro-transition-scope": renderTransition($$result, "awy5qik5", "", "theme-switch") })} <!-- <label class="swap swap-rotate">
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
}, "/home/blanco/Documentos/ca-astro/src/components/gui/NavBarServer.astro", "self");

const $$Astro$2 = createAstro("https://computodistribuido.org");
const $$MiembrosSide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MiembrosSide;
  const { colaboradores } = Astro2.props;
  const res = await fetch(
    `http://localhost:4321/api/miembros?colaborador=${colaboradores ? "true" : "false"}`
  ).then((res2) => res2.json());
  return renderTemplate`${maybeRenderHead()}<li> <details open> <summary> ${colaboradores ? "Colaboradores" : "Miembros"} </summary> <ul> ${res.response?.map((miembro) => {
    return renderTemplate`<li> <a${addAttribute(`/miembros/${miembro.idmiembro}`, "href")} class="text-balance"> ${miembro.nombreCompleto} </a> </li>`;
  })} </ul> </details> </li>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/MiembrosSide.astro", void 0);

const $$SidebarItems = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("http://localhost:4321/api/menus").then(
    (res2) => res2.json()
  );
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${res.response?.map((menu) => {
    if (menu.ruta === "miembros") {
      return renderTemplate`${renderComponent($$result2, "MiembrosSide", $$MiembrosSide, {})}`;
    }
    if (menu.ruta === "colaboradores") {
      return renderTemplate`${renderComponent($$result2, "MiembrosSide", $$MiembrosSide, { "colaboradores": true })}`;
    }
    if (menu.dropcollapse)
      return renderTemplate`${maybeRenderHead()}<li><details open><summary>${menu.nombre}</summary><ul>${menu.submenus?.map((submenu) => renderTemplate`<li><a${addAttribute(`/${menu.ruta}/${submenu.ruta}`, "href")}>${submenu.nombre}</a></li>`)}</ul></details></li>`;
    return renderTemplate`<li><a class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1"${addAttribute(`/${menu.ruta}`, "href")}>${menu.nombre}</a></li>`;
  })}` })}`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/SidebarItems.astro", void 0);

const $$Astro$1 = createAstro("https://computodistribuido.org");
const $$SideBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SideBar;
  const { user } = Astro2.locals;
  return renderTemplate`${maybeRenderHead()}<ul class="menu bg-base-200 min-h-full w-80 p-4"${addAttribute(createTransitionScope($$result, "ebud5mhz"), "data-astro-transition-persist")}> ${renderComponent($$result, "SidebarItems", $$SidebarItems, {})} <li> <details open> <summary>Documentos</summary> <ul> <li> <a href="/documentos/minutas"> Minutas </a> </li> </ul> </details> </li> <li><a href="/login"> ${user?.id ? "Ir al panel" : "Iniciar sesi\xF3n"} </a></li> </ul>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/SideBar.astro", "self");

const $$Astro = createAstro("https://computodistribuido.org");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  Astro2.response.headers.set(
    "Cache-Control",
    "public, s-maxage=360, stale-while-revalidate=180"
  );
  return renderTemplate`<html lang="es" data-theme="winter"> <head><meta charset="UTF-8"><meta name="description" content="Cuerpo academico de cómputo distribuido del Instituto Tecnologico Superior de los Ríos"><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>${title}</title>${renderHead()}</head> <body class="w-screen h-screen overflow-x-hidden"> <div class="drawer h-full w-full"> <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> <div class="drawer-content h-full w-full overflow-x-hidden" id="scroll-container"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "NavBarServer", $$NavBarServer, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> <div class="drawer-side z-50"> <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> ${renderComponent($$result, "SideBar", $$SideBar, {})} </div> </div>  ${renderScript($$result, "/home/blanco/Documentos/ca-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/blanco/Documentos/ca-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
