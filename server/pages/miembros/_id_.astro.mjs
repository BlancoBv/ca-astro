/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Csy-cjiN.mjs';
import { $ as $$Layout, f as formatDate } from '../../chunks/Layout_B0YNWotX.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BiZX0rLU.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CY4cSyXV.mjs';

const $$Astro = createAstro("https://computodistribuido.org");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const miembro = await fetch(
    `http://localhost:4321/api/miembros?idmiembro=${id}&includeProyectos=true`
  ).then((res) => res.json());
  const getMiembro = async (id2) => {
    if (id2) {
      const response = await fetch(
        `http://localhost:4321/api/miembros?idmiembro=${id2}`
      ).then((res) => res.json());
      return response.response.nombreCompleto;
    }
    return "";
  };
  const redesSocialesIcon = {
    facebook: "bi bi-facebook",
    x: "bi bi-twitter-x",
    correo: "bi bi-envelope-fill",
    linkedin: "bi bi-linkedin",
    otro: "bi bi-link-45deg"
  };
  if (!miembro) {
    return Astro2.redirect("/404");
  }
  console.log(miembro.response);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": miembro.response.nombreCompleto }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> <!--   <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="not-prose flex justify-center items-center">
        <Image
          class="object-contain size-60"
          src={miembro.response.imgPerfil}
          alt={miembro.response.nombreCompleto}
          loading="lazy"
          inferSize
        />
      </div>
      <div class="col-span-2">
        <h1>
          {miembro.response.gradoEstudio}. {miembro.response.nombreCompleto}
        </h1>
        <span class="text-secondary-content"
          >{miembro.response.puesto.toUpperCase()}</span
        >
        <p class="text-justify">{miembro.response.resumen}</p>
      </div>
    </div> --> <div class="stats md:grid-cols-2 shadow stats-vertical md:stats-horizontal w-full not-prose min-h-40"> <div class="stat flex flex-col md:inline-grid place-items-center place"> <div class="stat-figure text-secondary size-40"> <div class="avatar size-full"> <div class="rounded-full"> ${renderComponent($$result2, "Image", $$Image, { "src": miembro.response.imgPerfil, "alt": miembro.response.nombreCompleto, "class": "aspect-square", "width": 100, "height": 100 })} </div> </div> </div> <div class="stat-value text-wrap text-center"> ${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto} </div> <div class="stat-title">${miembro.response.puesto.toUpperCase()}</div> <div class="stat-desc text-wrap">Lider</div> </div> <div class="stat place-items-center"> <div class="stat-figure text-primary"> <i class="bi bi-share-fill text-2xl"></i> </div> <div class="stat-title">Información de contacto</div> <div class="stat-value text-base-content flex flex-wrap gap-4 text-wrap"> ${miembro.response.contactos.length > 0 && miembro.response.contactos.map((el) => renderTemplate`<a class="hover:text-primary hover:scale-105 duration-100 ease-in"${addAttribute(`${el.tipo === "correo" ? "mailto:" : ""}${el.url}`, "href")} target="_blank"> <i${addAttribute(redesSocialesIcon[el.tipo], "class")}></i> </a>`)} ${miembro.response.contactos.length < 1 && renderTemplate`<span>Sin información de contacto.</span>`} </div> <!-- <div class="stat-desc">21% more than last month</div> --> </div> <!--      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div class="stat-title">Page Views</div>
        <div class="stat-value text-secondary">2.6M</div>
        <div class="stat-desc">21% more than last month</div>
      </div> --> </div> <p class="text-justify">${miembro.response.resumen}</p> <h2 class="mt-0">Proyectos</h2> <div class="overflow-x-auto"> <table class="table table-zebra text-center not-prose"> <!-- head --> <thead> <tr> <th>Clave</th> <th>Proyecto</th> <th>Duración</th> <th>Director</th> <th>Colaboradores</th> <th>Tipo</th> </tr> </thead> <tbody> ${miembro.response.proyectos.length > 0 && miembro.response.proyectos.map((el) => renderTemplate`<tr> <th>${el.clave}</th> <td>${el.titulo}</td> <td> ${`${formatDate(el.fechaInicio, "LL")} a ${formatDate(el.fechaTermino, "LL")}`}${" "} </td> <td>${getMiembro(el.director)}</td> <td>${el.otrosColaboradores ?? "---"}</td> <td>${el.tipo}</td> </tr>`)} ${miembro.response.proyectos.length < 1 && renderTemplate`<tr> <th colspan="6">Sin datos.</th> </tr>`} </tbody> </table> </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/miembros/[id].astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/miembros/[id].astro";
const $$url = "/miembros/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
