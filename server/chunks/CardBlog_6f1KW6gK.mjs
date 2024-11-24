import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, e as renderTransition } from './astro/server_BLMGylKI.mjs';
import { f as formatDate } from './Layout_CnarBXC3.mjs';
import { $ as $$Image } from './_astro_assets_C3jSEVob.mjs';
/* empty css                         */

const $$Astro = createAstro("https://computodistribuido.org");
const $$CardBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardBlog;
  const { titulo, id, imagen, fecha } = Astro2.props;
  return renderTemplate`<!-- <div class="card card-compact bg-base-100 w-full max-w-md shadow-xl">
  <figure class="h-60">
    <Image
      transition:name={\`img-\${id}\`}
      class="object-contain hover:scale-110 duration-100 ease-in h-full w-full"
      src={imagen}
      alt={titulo}
      width={100}
      height={100}
      loading="lazy"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{titulo}</h2>
    <p>{formatDate(fecha)}</p>
    <div class="card-actions justify-end">
      <a class="btn btn-primary" href={\`/content/\${id}\`}>Ver</a>
    </div>
  </div>
</div> -->${maybeRenderHead()}<a${addAttribute(`/content/${id}`, "href")} class="card bg-base-100 image-full w-full h-96 shadow-xl group"> <figure class="w-full"> ${renderComponent($$result, "Image", $$Image, { "class": "object-contain group-hover:scale-110 duration-200 ease-in h-full w-full", "src": imagen, "alt": titulo, "width": 100, "height": 100, "loading": "lazy", "data-astro-transition-scope": renderTransition($$result, "ubkkuexo", "", `img-${id}`) })} </figure> <div class="card-body"> <h2 class="card-title text-2xl">${titulo}</h2> <p>${formatDate(fecha, "LL")}</p> <!--     <div class="card-actions justify-end">
      <a class="btn btn-primary" href={\`/content/\${id}\`}>
        Ver <i class="bi bi-box-arrow-up-right text-xl"></i>
      </a>
    </div> --> </div> </a>`;
}, "/home/blanco/Documentos/ca-astro/src/components/cards/CardBlog.astro", "self");

export { $$CardBlog as $ };
