import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, a as renderComponent, f as renderHead, g as renderSlot, h as createTransitionScope } from './astro/server_PUIICibt.mjs';
import { C as Carousel } from './Carousel_BzwQjI9L.mjs';
/* empty css                           */
import { u as useSendData, _ as _export_sfc, $ as $$ViewTransitions } from './_plugin-vue_export-helper_BAiHI28O.mjs';
import 'vue3-toastify';
import '@primevue/themes/aura';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
/* empty css                         */

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
    class: "btn btn-error",
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

const $$Astro = createAstro("https://computodistribuido.org/");
const $$LayoutPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutPanel;
  const { user } = Astro2.locals;
  const { pathname } = Astro2.url;
  return renderTemplate`<html lang="es" data-theme="business"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>Panel de administración</title>${renderHead()}</head> <body class="w-screen h-screen overflow-x-hidden"> <div class="drawer drawer-open h-full w-full"> <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> <div class="drawer-content overflow-y-auto h-full w-full">
Bienvenido ${user?.nombre_completo} ${renderComponent($$result, "LogoutButton", LogoutButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/panel/LogoutButton.vue", "client:component-export": "default" })} <!-- Navbar --> ${pathname === "/" && renderTemplate`${renderComponent($$result, "Carousel", Carousel, {})}`} <!-- Page content here --> ${renderSlot($$result, $$slots["default"])} <footer class="footer bg-base-200 text-base-content p-10"> <nav> <h6 class="footer-title">Services</h6> <a class="link link-hover">Branding</a> <a class="link link-hover">Design</a> <a class="link link-hover">Marketing</a> <a class="link link-hover">Advertisement</a> </nav> <nav> <h6 class="footer-title">Company</h6> <a class="link link-hover">About us</a> <a class="link link-hover">Contact</a> <a class="link link-hover">Jobs</a> <a class="link link-hover">Press kit</a> </nav> <nav> <h6 class="footer-title">Legal</h6> <a class="link link-hover">Terms of use</a> <a class="link link-hover">Privacy policy</a> <a class="link link-hover">Cookie policy</a> </nav> </footer> <footer class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4"> <aside class="grid-flow-col items-center"> <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"> <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path> </svg> <p>
ACME Industries Ltd.
<br>
Providing reliable tech since 1992
</p> </aside> <nav class="md:place-self-center md:justify-self-end"> <div class="grid grid-flow-col gap-4"> <a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path> </svg> </a> <a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path> </svg> </a> <a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path> </svg> </a> </div> </nav> </footer> </div> <div class="drawer-side z-50"${addAttribute(createTransitionScope($$result, "z3tozceh"), "data-astro-transition-persist")}> <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu bg-base-200 rounded-box w-56 h-full"> <li><a>Item 1</a></li> <li> <details open> <summary>Articulos</summary> <ul> <li><a href="/panel/articulos/crear">Crear</a></li> <li><a>Submenu 2</a></li> <li> <details open> <summary>Parent</summary> <ul> <li><a>Submenu 1</a></li> <li><a>Submenu 2</a></li> </ul> </details> </li> </ul> </details> </li> <li><a href="/panel/etiquetas">Etiquetas</a></li> <li><a>Item 3</a></li> </ul> </div> </div> </body></html><!-- <style is:global>
	:root {
		--accent: 136, 58, 234;
		--accent-light: 224, 204, 250;
		--accent-dark: 49, 10, 101;
		--accent-gradient: linear-gradient(
			45deg,
			rgb(var(--accent)),
			rgb(var(--accent-light)) 30%,
			white 60%
		);
	}
	html {
		font-family: system-ui, sans-serif;
		background: #13151a;
	}
	code {
		font-family:
			Menlo,
			Monaco,
			Lucida Console,
			Liberation Mono,
			DejaVu Sans Mono,
			Bitstream Vera Sans Mono,
			Courier New,
			monospace;
	}
</style> -->`;
}, "/home/blanco/Documentos/ca-astro/src/layouts/LayoutPanel.astro", "self");

export { $$LayoutPanel as $, LogoutButton as L };
