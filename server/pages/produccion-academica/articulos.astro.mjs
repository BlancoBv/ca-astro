import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_PXGLLX5r.mjs';
import { $ as $$Breadcumb } from '../../chunks/Breadcumb_S2ffQydz.mjs';
import { L as ListaPublicacionesMiembros2 } from '../../chunks/ListaPublicacionesMiembros2_DkQVdTEW.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DeXEjhey.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articulos = await fetch("http://localhost:4321/api/publicaciones").then(
    (res) => res.json()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Articulos publicados" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> ${renderComponent($$result2, "Breadcumb", $$Breadcumb, { "items": [{ name: "Producci\xF3n academica" }, { name: "Art\xEDculos" }] })} <h1>Artículos publicados</h1> <p>
Lista de todos los artículos publicados por los miembros del cuerpo
      académico de Cómputo Distribuido.
</p> ${renderComponent($$result2, "ListaPublicacionesMiembros2", ListaPublicacionesMiembros2, { "data": articulos?.response ?? [], "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/listas/ListaPublicacionesMiembros2.vue", "client:component-export": "default" })} </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/produccion-academica/articulos/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/produccion-academica/articulos/index.astro";
const $$url = "/produccion-academica/articulos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
