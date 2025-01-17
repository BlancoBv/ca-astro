/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BYikK1dL.mjs';
import { $ as $$LayoutPanel } from '../chunks/LayoutPanel_DG5Ka4oX.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_5KdtQE-v.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPanel", $$LayoutPanel, { "sectionTitle": "Inicio" }, { "default": ($$result2) => renderTemplate`
Inicio panel de administración de la pagina
` })}`;
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
