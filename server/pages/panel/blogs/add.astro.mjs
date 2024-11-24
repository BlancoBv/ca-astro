/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../../chunks/astro/server_BLMGylKI.mjs';
import { E as Editor } from '../../../chunks/Editor_CJ3SlcWC.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_DfQEY_hd.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_Dy1BIr2k.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "A\xF1adir contenido" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Editor", Editor, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/editor/Editor.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/panel/blogs/add/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/panel/blogs/add/index.astro";
const $$url = "/panel/blogs/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
