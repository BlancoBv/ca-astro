import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_PXGLLX5r.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$BadgeEtiquetas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BadgeEtiquetas;
  const { nombre, ruta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(ruta, "href")} class="badge badge-soft badge-accent"> <i class="bi bi-tag-fill"></i> ${nombre} </a>`;
}, "/home/blanco/Documentos/ca-astro/src/components/badge/BadgeEtiquetas.astro", void 0);

const $$EtiquetasHeading = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="divider not-prose"> <i class="bi bi-tags-fill"></i>Etiquetas
</span>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/EtiquetasHeading.astro", void 0);

export { $$EtiquetasHeading as $, $$BadgeEtiquetas as a };
