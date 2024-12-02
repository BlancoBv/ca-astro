/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BLMGylKI.mjs';
import { L as LogoutButton, $ as $$LayoutPanel } from '../chunks/LayoutPanel_DF8mk24q.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BuVY0NLu.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "title": "Inicio de sesi\xF3n" }, { "default": ($$result2) => renderTemplate`
Panel epico
${renderComponent($$result2, "LogoutButton", LogoutButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/panel/LogoutButton.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/index.astro";
const $$url = "/panel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
