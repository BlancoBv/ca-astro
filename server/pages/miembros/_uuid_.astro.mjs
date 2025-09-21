import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_PXGLLX5r.mjs';
import { f as formatDate } from '../../chunks/format_CRU5uAFP.mjs';
import { L as ListaProyectosMiembros2 } from '../../chunks/ListaProyectosMiembros2_BXuKf1y1.mjs';
import { L as ListaPublicacionesMiembros2 } from '../../chunks/ListaPublicacionesMiembros2_DkQVdTEW.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DeXEjhey.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CtY31-wz.mjs';
import { $ as $$Breadcumb } from '../../chunks/Breadcumb_S2ffQydz.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$uuid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$uuid;
  const { uuid } = Astro2.params;
  const miembro = await fetch(
    `http://localhost:4321/api/miembros?uuid=${uuid}&includeProyectos=true&includePublicaciones=true`
  ).then((res) => res.json());
  const redesSocialesIcon = {
    facebook: "bi bi-facebook",
    x: "bi bi-twitter-x",
    correo: "bi bi-envelope-fill",
    linkedin: "bi bi-linkedin",
    otro: "bi bi-link-45deg"
  };
  if (!miembro || miembro.hasOwnProperty("msg")) {
    return Astro2.redirect("/404");
  }
  miembro.response.proyectos.forEach((el) => {
    el.fechaInicio = formatDate(el.fechaInicio, "LL");
    el.fechaTermino = formatDate(el.fechaTermino, "LL");
    el.fechaInicioEntrega = el.fechaInicioEntrega ? formatDate(el.fechaInicioEntrega, "LL") : el.fechaInicioEntrega;
    el.fechaTerminoEntrega = el.fechaTerminoEntrega ? formatDate(el.fechaTerminoEntrega, "LL") : el.fechaTerminoEntrega;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> ${renderComponent($$result2, "Breadcrumb", $$Breadcumb, { "items": [{ name: "Miembros" }, { name: miembro.response.nombreCompleto }] })} <div class="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-sm w-full not-prose"> <div class="stat"> <div class="stat-figure text-secondary"> <div${addAttribute(["avatar", [
    { "avatar-placeholder": !miembro.response?.imgPerfil }
  ]], "class:list")}> <div${addAttribute(["w-32 rounded-full", [
    {
      "bg-neutral text-neutral-content": !miembro.response?.imgPerfil
    }
  ]], "class:list")}> ${miembro.response?.imgPerfil ? renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": miembro.response.imgPerfil, "alt": miembro.response.nombreCompleto, "class": "aspect-square", "width": 100, "height": 100, "loading": "eager" })}` : renderTemplate`<span class="text-3xl"> ${miembro.response.nombreCompleto.charAt(0)} </span>`} </div> </div> </div> <div class="stat-value text-balance"> ${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto} </div> <div class="stat-title">${miembro.response.puesto.toUpperCase()}</div> <div class="stat-desc text-secondary"> ${miembro.response.tipoMiembro.toUpperCase()} </div> </div> <div class="stat"> <div class="stat-figure text-secondary"> <i class="bi bi-globe text-2xl"></i> </div> <div class="stat-title">Enlaces de contacto</div> <div class="stat-value"> ${miembro.response.contactos.length > 0 ? renderTemplate`<span>${miembro.response.contactos.length}</span>` : renderTemplate`<span class="text-balance">Sin información de contacto.</span>`} </div> ${miembro.response.contactos.length > 0 && renderTemplate`<div class="stat-actions flex flex-wrap gap-2"> ${miembro.response.contactos.map((el) => renderTemplate`<a class="btn"${addAttribute(`${el.tipo === "correo" ? "mailto:" : ""}${el.url}`, "href")}${addAttribute(el.tipo, "aria-label")} target="_blank"> <i${addAttribute(redesSocialesIcon[el.tipo], "class")}></i> </a>`)} </div>`} </div> </div> <!-- <div
      class="stats md:grid-cols-2 shadow stats-vertical md:stats-horizontal w-full not-prose min-h-40"
    >
      <div class="stat flex flex-col md:inline-grid place-items-center place">
        <div class="stat-figure text-secondary size-40">
          {
            miembro.response?.imgPerfil && (
              <div class="avatar size-full">
                <div class="rounded-full">
                  <Image
                    src={miembro.response.imgPerfil}
                    alt={miembro.response.nombreCompleto}
                    class="aspect-square"
                    width={100}
                    height={100}
                    loading="eager"
                  />
                </div>
              </div>
            )
          }
          {
            !miembro.response?.imgPerfil && (
              <div class="avatar avatar-placeholder size-full">
                <div class="bg-neutral text-neutral-content rounded-full">
                  <span class="text-3xl">
                    {miembro.response.nombreCompleto.charAt(0)}
                  </span>
                </div>
              </div>
            )
          }
        </div>
        <div class="stat-value text-wrap text-center">
          {miembro.response.gradoEstudio}. {miembro.response.nombreCompleto}
        </div>
        <div class="stat-title">{miembro.response.puesto.toUpperCase()}</div>
        <div class="stat-desc text-wrap">
          {miembro.response.tipoMiembro.toUpperCase()}
        </div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-figure text-secondary">
          <i class="bi bi-share-fill text-2xl"></i>
        </div>
        <div class="stat-title">Enlaces de contacto</div>
        <div
          class="stat-value text-base-content flex flex-wrap gap-4 text-wrap"
        >
          {
            miembro.response.contactos.length > 0 &&
              miembro.response.contactos.map((el) => (
                <a
                  class="hover:text-primary hover:scale-105 duration-100 ease-in"
                  href={\`\${el.tipo === "correo" ? "mailto:" : ""}\${el.url}\`}
                  aria-label={el.tipo}
                  target="_blank"
                >
                  <i class={redesSocialesIcon[el.tipo as keyof icons]} />
                </a>
              ))
          }
          {
            miembro.response.contactos.length < 1 && (
              <span>Sin información de contacto.</span>
            )
          }
        </div>
      </div>
    </div> --> <p>${miembro.response.resumen}</p> <h2 class="mt-0">Proyectos</h2> ${renderComponent($$result2, "ListaProyectosMiembros2", ListaProyectosMiembros2, { "data": miembro.response.proyectos, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/listas/ListaProyectosMiembros2.vue", "client:component-export": "default" })} <h2 class="mt-0">Publicaciones</h2> ${renderComponent($$result2, "ListaPublicacionesMiembros2", ListaPublicacionesMiembros2, { "data": miembro.response.publicaciones, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/listas/ListaPublicacionesMiembros2.vue", "client:component-export": "default" })} </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/miembros/[uuid].astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/miembros/[uuid].astro";
const $$url = "/miembros/[uuid]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$uuid,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
