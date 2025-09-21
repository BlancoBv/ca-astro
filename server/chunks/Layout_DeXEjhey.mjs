import { c as createComponent, m as maybeRenderHead, a as renderTemplate, aj as renderSlot, b as createAstro, r as renderComponent, ak as Fragment, d as addAttribute, e as renderTransition, al as createTransitionScope, am as renderHead, an as renderScript } from './astro/server_PXGLLX5r.mjs';
import { _ as _export_sfc, $ as $$ClientRouter } from './_plugin-vue_export-helper_tWar_dvF.mjs';
import { a as formatYear } from './format_CRU5uAFP.mjs';
/* empty css                           */
import { $ as $$Image } from './_astro_assets_CtY31-wz.mjs';
import 'vue3-toastify';
import { defineComponent, useSSRContext, ref, onMounted, mergeProps } from 'vue';
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
  return renderTemplate`${maybeRenderHead()}<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10"> <aside> <img src="/logo.webp" width="150px" alt="logo"> <p></p><p> <i class="bi bi-c-circle"></i> <span>${fDate}</span> Cuerpo Académico - Cómputo Distribuido
</p> <br>
Última actualización, septiembre 2025.
 </aside> <nav> <h6 class="footer-title">Ubicación</h6> <div class="grid grid-cols-1 gap-4"> <p> <i class="bi bi-geo-alt-fill"></i> Km. 3 carretera Balancán-Villahermosa,
        Balancán, Tabasco C.P. 86930
</p> <p><i class="bi bi-telephone-fill"></i> 934 - 115 - 1443</p> <a href="https://maps.app.goo.gl/DVs2mPFzfHBDdCXj9" class="link" target="_blank">
Ver en Google Maps <i class="bi bi-box-arrow-up-right"></i> </a> </div> </nav> </footer>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/Footer.astro", void 0);

const $$DropdownNavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="dropdown dropdown-hover"> <div tabindex="0" role="button" class="btn btn-ghost"> ${renderSlot($$result, $$slots["dropdown-name"])} </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"> <li> ${renderSlot($$result, $$slots["dropdown-items"])} </li> </ul> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/DropdownNavBar.astro", void 0);

const $$Astro$3 = createAstro("https://computodistribuido.org");
const $$MiembrosNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MiembrosNav;
  const { colaboradores } = Astro2.props;
  const res = await fetch(
    `http://localhost:4321/api/miembros?colaborador=${colaboradores ? "true" : "false"}`
  ).then((res2) => res2.json());
  return renderTemplate`${renderComponent($$result, "DropdownNavBar", $$DropdownNavBar, {}, { "dropdown-items": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "dropdown-items" }, { "default": async ($$result3) => renderTemplate`${res.response?.map((miembro) => renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(`/miembros/${miembro.uuid}`, "href")} class="text-balance"> ${miembro.nombreCompleto} </a> </li>`)}` })}`, "dropdown-name": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "dropdown-name" }, { "default": async ($$result3) => renderTemplate`${colaboradores ? "Colaboradores" : "Miembros"}` })}` })} <!-- <div class="dropdown dropdown-hover group">
  <div
    tabindex="0"
    role="button"
    class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1 flex gap-1"
  >
    {colaboradores ? "Colaboradores" : "Miembros"}
    <div class="swap swap-rotate group-hover:swap-active">
      <i class="bi bi-caret-down-fill swap-off"></i>
      <i class="bi bi-caret-up-fill swap-on"></i>
    </div>
  </div>
  <ul
    tabindex="0"
    class="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow"
  >
    {
      res.response?.map((miembro) => {
        return (
          <li>
            <a href={\`/miembros/\${miembro.uuid}\`} class="text-balance">
              {miembro.nombreCompleto}
            </a>
          </li>
        );
      })
    }
  </ul>
</div> -->`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/MiembrosNav.astro", void 0);

const $$NavBarItems = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("http://localhost:4321/api/menus").then(
    (res2) => res2.json()
  );
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${res.response?.map((menu) => {
    if (menu.ruta === "miembros") {
      return renderTemplate`${renderComponent($$result2, "MiembrosNav", $$MiembrosNav, {})}`;
    }
    if (menu.ruta === "colaboradores") {
      return renderTemplate`${renderComponent($$result2, "MiembrosNav", $$MiembrosNav, { "colaboradores": true })}`;
    }
    if (menu.dropcollapse)
      return renderTemplate`${renderComponent($$result2, "DropdownNavBar", $$DropdownNavBar, {}, { "dropdown-items": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "dropdown-items" }, { "default": async ($$result4) => renderTemplate`${menu.submenus?.map((submenu) => renderTemplate`${maybeRenderHead()}<li><a${addAttribute(`/${menu.ruta}/${submenu.ruta}`, "href")}>${submenu.nombre}</a></li>`)}` })}`, "dropdown-name": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "dropdown-name" }, { "default": async ($$result4) => renderTemplate`${menu.nombre}` })}` })}`;
    return renderTemplate`<a class="rounded-btn hover:bg-base-content/10 py-2 px-4 text-sm mb-1"${addAttribute(`/${menu.ruta}`, "href")}>${menu.nombre}</a>`;
  })}` })}`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/NavBarItems.astro", void 0);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitch",
  setup(__props, { expose: __expose }) {
    __expose();
    const active = ref(false);
    const changeTheme = (checked) => {
      const theme = checked ? "dark" : "winter";
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
  _push(`<label${ssrRenderAttrs(mergeProps({ class: "swap swap-rotate" }, _attrs))}><input type="checkbox" class="theme-controller"${ssrIncludeBooleanAttr($setup.active) ? " checked" : ""}><div class="swap-off h-10 w-10 fill-current flex justify-center items-center"><i class="bi bi-sun-fill text-xl"></i></div><div class="swap-on h-10 w-10 fill-current flex justify-center items-center"><i class="bi bi-moon-fill text-xl"></i></div></label>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/ThemeSwitch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ThemeSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="navbar bg-base-100/80 shadow-sm backdrop-blur-sm h-20 w-full z-50 sticky top-0" data-astro-transition-persist="navbar"${addAttribute(renderTransition($$result, "mb44arrd", "", "navbar"), "data-astro-transition-scope")}> <div class="navbar-start"> <div class="flex-none lg:hidden"> <label for="side-menu" aria-label="open sidebar" class="btn btn-square btn-ghost size-10"> <i class="bi bi-list text-3xl"></i> </label> </div> <a href="/" class="btn btn-ghost text-xl">${renderComponent($$result, "Image", $$Image, { "src": "/logo.webp", "alt": "logo", "class": "h-full object-contain", "width": 100, "height": 300, "loading": "eager" })}</a> </div> <div class="navbar-center hidden lg:flex"> ${renderComponent($$result, "NavBarItems", $$NavBarItems, {})} ${renderComponent($$result, "DropdownNavBar", $$DropdownNavBar, {}, { "dropdown-items": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "dropdown-items" }, { "default": ($$result3) => renderTemplate` <li> <a href="/documentos/minutas">Minutas</a> </li> ` })}`, "dropdown-name": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "dropdown-name" }, { "default": ($$result3) => renderTemplate`Documentos` })}` })} </div> <div class="navbar-end"> ${renderComponent($$result, "ThemeSwitch", ThemeSwitch, { "client:load": true, "data-astro-transition-persist": "theme-switch", "client:component-hydration": "load", "client:component-path": "/home/blanco/Documentos/ca-astro/src/components/gui/ThemeSwitch.vue", "client:component-export": "default", "data-astro-transition-scope": renderTransition($$result, "wpkwdkdb", "", "theme-switch") })} <a href="/login" class="btn btn-ghost"> <i class="bi bi-door-open-fill text-xl"></i> </a> </div> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/NavBar.astro", "self");

const $$Astro$2 = createAstro("https://computodistribuido.org");
const $$MiembrosSide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MiembrosSide;
  const { colaboradores } = Astro2.props;
  const res = await fetch(
    `http://localhost:4321/api/miembros?colaborador=${colaboradores ? "true" : "false"}`
  ).then((res2) => res2.json());
  return renderTemplate`${maybeRenderHead()}<li> <details open> <summary> ${colaboradores ? "Colaboradores" : "Miembros"} </summary> <ul> ${res.response?.map((miembro) => {
    return renderTemplate`<li> <a${addAttribute(`/miembros/${miembro.uuid}`, "href")} class="text-balance"> ${miembro.nombreCompleto} </a> </li>`;
  })} </ul> </details> </li>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/MiembrosSide.astro", void 0);

const $$SidebarItems = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("http://localhost:4321/api/menus").then(
    (res2) => res2.json()
  );
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${res.response?.map((menu) => {
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
  return renderTemplate`${maybeRenderHead()}<ul class="menu bg-base-200 min-h-full rounded-e-box w-80 p-4"${addAttribute(createTransitionScope($$result, "ebud5mhz"), "data-astro-transition-persist")}> ${renderComponent($$result, "SidebarItems", $$SidebarItems, {})} <li> <details open> <summary>Documentos</summary> <ul> <li> <a href="/documentos/minutas"> Minutas </a> </li> </ul> </details> </li> <li><a href="/login"> ${user?.id ? "Ir al panel" : "Iniciar sesi\xF3n"} </a></li> </ul>`;
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
  return renderTemplate`<html lang="es" data-theme="winter"> <head><meta charset="UTF-8"><meta name="description" content="Cuerpo academico de cómputo distribuido del Instituto Tecnologico Superior de los Ríos"><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>${title}</title>${renderHead()}</head> <body class="w-screen h-screen drawer overflow-x-clip"> <input id="side-menu" type="checkbox" class="drawer-toggle"> <div class="drawer-content h-full w-full" id="scroll-container"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> <div class="drawer-side z-[1000]"> <label for="side-menu" aria-label="close sidebar" class="drawer-overlay"></label> ${renderComponent($$result, "SideBar", $$SideBar, {})} </div>  ${renderScript($$result, "/home/blanco/Documentos/ca-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/blanco/Documentos/ca-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
