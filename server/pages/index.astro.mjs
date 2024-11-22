/* empty css                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_PUIICibt.mjs';
import { $ as $$Layout } from '../chunks/Layout_BOXDJUk2.mjs';
import { $ as $$CardBlog } from '../chunks/CardBlog_DBnAzLkM.mjs';
import { C as Carousel } from '../chunks/Carousel_BzwQjI9L.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CY4cSyXV.mjs';

const $$Astro = createAstro("https://computodistribuido.org/");
const $$BlogsContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogsContainer;
  const { origin } = Astro2.url;
  const blogs = await fetch(`${origin}/api/blogs?status=aceptado&limit=3`).then(
    (res) => res.json()
  );
  return renderTemplate`${maybeRenderHead()}<div class="prose max-w-full p-4"> <h1>Eventos destacados</h1> <div class="not-prose gap-4 place-items-center place-content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${blogs.response?.blogs?.length > 0 && blogs.response.blogs.map((el) => renderTemplate`${renderComponent($$result, "CardBlog", $$CardBlog, { "titulo": el.titulo, "imagen": el.imagen, "fecha": el.fecha, "id": el.idblog })}`)} <div class="md:col-span-2 lg:col-span-3 w-full flex justify-center"> <a class="btn btn-primary w-1/2" href="/content">Ver todos </a> </div> </div> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/BlogsContainer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <!-- <script>\n  import Aos from "aos";\n  Aos.init({\n    mirror: true,\n    once: false,\n  });\n<\/script> -->'])), renderComponent($$result, "Layout", $$Layout, { "title": "Cuerpo academico, computo distribuido." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Carousel", Carousel, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/gui/Carousel.vue", "client:component-export": "default" })} ${renderComponent($$result2, "BlogsContainer", $$BlogsContainer, {})} <div class="grid grid-cols-2 grid-rows-2 gap-4 p-4 lg:h-96"> <div class="card bg-accent text-accent-content shadow-xl"> <div class="card-body"> <h2 class="card-title">Misión</h2> <p>
Contribuir con el mejoramiento de la formación académica de los
            estudiantes de la carrera de Ingeniería en Sistemas computacionales
            del Instituto tecnológico Superior de los Ríos.
</p> </div> </div> <div class="card bg-secondary text-secondary-content shadow-xl"> <div class="card-body"> <h2 class="card-title">Visión</h2> <p>
Lograr la consolidación del cuerpo académico a través del incremento
            de nuestra producción académica, investigación con reconocimiento
            nacional e internacional.
</p> </div> </div> <div class="card bg-neutral text-neutral-content shadow-xl col-span-2"> <div class="card-body"> <h2 class="card-title">Objetivos</h2> <p>
Desarrollar un cuerpo académico para el desarrollo de proyectos de
            investigación, dirección de tesís, desarrollo de aplicación de
            sistema distribuido, así como el mejoramiento de los planes de
            estudios de la carrera.
</p> </div> </div> </div> </main> ` }));
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
