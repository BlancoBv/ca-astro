import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, ae as renderScript } from './astro/server_BYikK1dL.mjs';
/* empty css                           */

const $$Astro = createAstro("https://computodistribuido.org");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/blanco/Documentos/ca-astro/node_modules/.pnpm/astro@5.0.3_@types+node@22.5.5_jiti@1.21.6_rollup@4.28.1_typescript@5.6.2_yaml@2.5.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/blanco/Documentos/ca-astro/node_modules/.pnpm/astro@5.0.3_@types+node@22.5.5_jiti@1.21.6_rollup@4.28.1_typescript@5.6.2_yaml@2.5.1/node_modules/astro/components/ClientRouter.astro", void 0);

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

export { $$ClientRouter as $, _export_sfc as _ };
