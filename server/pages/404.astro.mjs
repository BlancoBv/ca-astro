/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Csy-cjiN.mjs';
import { $ as $$Layout } from '../chunks/Layout_CtlZ3nLo.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CY4cSyXV.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 | No encontrado." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-96 flex flex-col justify-center items-center gap-4"> <h1 class="font-bold text-8xl">404</h1> <span class="text-secondary/80">Página no encontrada.</span> <a href="/" class="btn btn-secondary">
Volver al inicio <i class="bi bi-house-fill"></i> </a> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/404.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
