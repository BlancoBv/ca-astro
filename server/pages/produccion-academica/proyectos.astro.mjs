/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DmhofpIV.mjs';
import { L as ListaProyectosMiembros } from '../../chunks/ListaProyectosMiembros_TlUWCWYL.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CYu2Rs5Q.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const proyectos = await fetch("http://localhost:4321/api/proyectos").then(
    (res) => res.json()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Articulos publicados" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> <h1>Proyectos realizados</h1> <p>
Lista de todos los proyectos realizados por los miembros del cuerpo
      académico de Cómputo Distribuido.
</p> ${renderComponent($$result2, "ListaProyectosMiembros", ListaProyectosMiembros, { "data": proyectos?.response ?? [], "rows": 20, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/listas/ListaProyectosMiembros.vue", "client:component-export": "default" })} </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/produccion-academica/proyectos/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/produccion-academica/proyectos/index.astro";
const $$url = "/produccion-academica/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
