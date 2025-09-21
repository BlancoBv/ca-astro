import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, d as addAttribute, e as renderTransition, a as renderTemplate } from './astro/server_PXGLLX5r.mjs';
import { f as formatDate } from './format_CRU5uAFP.mjs';
import { $ as $$Image } from './_astro_assets_CtY31-wz.mjs';
/* empty css                         */

const $$Astro = createAstro("https://computodistribuido.org");
const $$CardBlog2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardBlog2;
  const { titulo, id, imagen, fecha } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card bg-base-100 w-full h-100 shadow-sm"> <figure class="h-50"> ${renderComponent($$result, "Image", $$Image, { "class": "object-cover w-full h-full", "src": imagen, "alt": titulo, "width": 100, "height": 100, "loading": "eager", "data-astro-transition-scope": renderTransition($$result, "3de6qabq", "", `img-${id}`) })} </figure> <div class="card-body"> <h2 class="card-title">${titulo}</h2> <p></p><div class="badge badge-secondary flex items-center justify-center"> <i class="bi bi-calendar-fill"></i> ${formatDate(fecha, "L")} </div>  <div class="card-actions justify-end"> <a${addAttribute(`/content/evento/${id}`, "href")} class="btn btn-primary">
Más información
</a> </div> </div> </div> <!-- <a
  href={\`/content/evento/\${id}\`}
  class="card bg-base-100 image-full w-full h-96 shadow-xl group"
>
  <figure class="w-full">
    <Image
      transition:name={\`img-\${id}\`}
      class="object-contain group-hover:scale-110 duration-200 ease-in h-full w-full"
      src={imagen}
      alt={titulo}
      width={100}
      height={100}
      loading="eager"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-2xl">{titulo}</h2>
    <p>{formatDate(fecha, "LL")}</p>
  </div>
</a> -->`;
}, "/home/blanco/Documentos/ca-astro/src/components/cards/CardBlog2.astro", "self");

export { $$CardBlog2 as $ };
