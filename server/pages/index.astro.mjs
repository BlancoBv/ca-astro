/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, F as Fragment } from '../chunks/astro/server_BLMGylKI.mjs';
import { $ as $$Layout } from '../chunks/Layout_Ci0Il5qM.mjs';
import { $ as $$CardBlog } from '../chunks/CardBlog_C3HCPOqy.mjs';
import { C as Carousel } from '../chunks/Carousel_fgOYUA07.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_Dy1BIr2k.mjs';

const $$BlogsContainer = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await fetch(`http://localhost:4321/api/blogs?status=aceptado&limit=3`).then(
    (res) => res.json()
  );
  return renderTemplate`${maybeRenderHead()}<div class="prose max-w-full p-4"> <h1>Eventos destacados</h1> <div class="not-prose gap-4 place-items-center place-content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${blogs.response?.blogs?.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${blogs.response.blogs.map((el) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "titulo": el.titulo, "imagen": el.imagen, "fecha": el.fecha, "id": el.idblog })}`)}<div class="md:col-span-2 lg:col-span-3 w-full flex justify-center"> <a class="btn btn-primary w-1/2" href="/content">
Ver todos
</a> </div> ` })}`} ${blogs.response.blogs?.length < 1 && renderTemplate`<div class="h-96 flex flex-col justify-center items-center gap-4 md:col-span-2 lg:col-span-3"> <i class="bi bi-clouds text-9xl"></i> <h1 class="text-xl">Sin eventos recientes</h1> </div>`} </div> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/BlogsContainer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CA - computo distribuido." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Carousel", Carousel, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/gui/Carousel.vue", "client:component-export": "default" })} ${renderComponent($$result2, "BlogsContainer", $$BlogsContainer, {})} <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 p-4 lg:h-96 text-balance"> <div class="card bg-accent text-accent-content shadow-xl"> <div class="card-body"> <h2 class="card-title">Misión</h2> <p>
Contribuir con el mejoramiento de la formación académica de los
            estudiantes de la carrera de Ingeniería en Sistemas computacionales
            del Instituto tecnológico Superior de los Ríos.
</p> </div> </div> <div class="card bg-secondary text-secondary-content shadow-xl"> <div class="card-body"> <h2 class="card-title">Visión</h2> <p>
Lograr la consolidación del cuerpo académico a través del incremento
            de nuestra producción académica, investigación con reconocimiento
            nacional e internacional.
</p> </div> </div> <div class="card bg-neutral text-neutral-content shadow-xl md:col-span-2"> <div class="card-body"> <h2 class="card-title">Objetivos</h2> <p>
Desarrollar un cuerpo académico para el desarrollo de proyectos de
            investigación, dirección de tesís, desarrollo de aplicación de
            sistema distribuido, así como el mejoramiento de los planes de
            estudios de la carrera.
</p> </div> </div> </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
