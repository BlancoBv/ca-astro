import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_PXGLLX5r.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$Breadcumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcumb;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="breadcrumbs text-sm not-prose"> <ul> <li> <a href="/"> <i class="bi bi-house-fill"></i>
Inicio
</a> </li> ${items.length > 0 && items.map((item) => renderTemplate`<li>${item.url ? renderTemplate`<a${addAttribute(item.url, "href")}>${item.name}</a>` : item.name}</li>`)} </ul> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/breadcumb/Breadcumb.astro", void 0);

export { $$Breadcumb as $ };
