/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../../chunks/astro/server_BYikK1dL.mjs';
import { $ as $$Layout } from '../../chunks/Layout_hdLbWaBy.mjs';
import moment from 'moment';
export { r as renderers } from '../../chunks/_@astro-renderers_DB6v8AOh.mjs';

const $$Astro$1 = createAstro("https://computodistribuido.org");
const $$CardPdf = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardPdf;
  const { fileName, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" class="card bg-base-100 image-full w-full h-96 shadow-xl group"> <figure class="w-full"> <i class="bi bi-file-earmark-pdf-fill text-9xl group-hover:scale-110 duration-200 ease-in"></i> </figure> <div class="card-body"> <h2 class="card-title text-2xl">${fileName}</h2> <!--   <p>{formatDate(fecha, "LL")}</p> --> </div> </a>`;
}, "/home/blanco/Documentos/ca-astro/src/components/cards/CardPdf.astro", void 0);

const $$Astro = createAstro("https://computodistribuido.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { searchParams } = Astro2.url;
  const year = searchParams.get("year");
  const minutas = await fetch(
    "http://localhost:4321/api/minutas"
  ).then((res) => res.json());
  const years = /* @__PURE__ */ new Set();
  if (minutas.files?.length) {
    minutas.files.forEach((el) => {
      const date = el.fileName.split(";")[1].split(".")[0];
      const year2 = moment(date).year();
      years.add(year2);
    });
  }
  if (year) {
    minutas.files?.filter((el) => {
      const date = el.fileName.split(";")[1].split(".")[0];
      const yearFile = moment(date).year();
      return yearFile === Number(year);
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Minutas del CA" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> <h1>Minutas</h1> <!--     <form class="flex gap-4 items-center mb-4 not-prose">
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Año de consulta</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Todas</option>
          {Array.from(years).map((el) => <option value={el}>{el}</option>)}
        </select>
      </label>
      <button class="btn btn-primary" type="submit">Filtrar</button>
    </form> --> <div class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${minutas?.files?.map((el) => renderTemplate`${renderComponent($$result2, "CardPdf", $$CardPdf, { "fileName": el.fileName, "url": el.url })}`)} </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/documentos/minutas/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/documentos/minutas/index.astro";
const $$url = "/documentos/minutas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
