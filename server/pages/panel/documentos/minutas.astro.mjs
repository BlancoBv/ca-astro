/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../../chunks/astro/server_BYikK1dL.mjs';
import { $ as $$LayoutPanel } from '../../../chunks/LayoutPanel_BncRqzJi.mjs';
import { A as AddMinuta } from '../../../chunks/AddMinuta_0sfca8n0.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_BbUQvcMQ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Lista de minutas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AddMinuta", AddMinuta, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/forms/AddMinuta.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/documentos/minutas/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/documentos/minutas/index.astro";
const $$url = "/panel/documentos/minutas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
