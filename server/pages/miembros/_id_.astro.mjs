/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BLMGylKI.mjs';
import { f as formatDate } from '../../chunks/format_BnSwxyOw.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, onMounted, onUnmounted, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { s as script, a as script$1 } from '../../chunks/index_Bs5YyKFW.mjs';
import get from 'lodash/get.js';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
/* empty css                                   */
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_Dp5eun83.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DryVfzA-.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_C3jSEVob.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BuVY0NLu.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TableMiembros",
  props: {
    cols: {},
    data: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isMounted = ref(false);
    const getCollabs = (element) => {
      const formatter2 = new Intl.ListFormat("es", {
        type: "conjunction",
        style: "long"
      });
      const miembrosF = [];
      console.log(element);
      element.miembros_proyecto.forEach((el) => {
        miembrosF.push(el.nombreCompleto);
      });
      if (element.otrosColaboradores) {
        const otherCollabsArr = element.otrosColaboradores.split(",");
        miembrosF.push(...otherCollabsArr);
      }
      if (miembrosF.length < 1) {
        return "----";
      }
      return formatter2.format(miembrosF);
    };
    const getDuracion = (element) => {
      return `${element.fechaInicio} a ${element.fechaTermino}`;
    };
    const formatter = {
      uppercase: (value) => value.toUpperCase(),
      duracion: (value) => getDuracion(value),
      colabs: (value) => getCollabs(value)
    };
    const handleClick = () => {
      console.log("Row");
    };
    onMounted(() => {
      isMounted.value = true;
    });
    onUnmounted(() => {
      isMounted.value = false;
    });
    const __returned__ = { props, isMounted, getCollabs, getDuracion, formatter, handleClick, get Column() {
      return script;
    }, get DataTable() {
      return script$1;
    }, get get() {
      return get;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["DataTable"], mergeProps({
    value: $setup.props.data,
    paginator: true,
    rows: 10,
    rowsPerPageOptions: [5, 10, 20, 50],
    selectionMode: "single",
    onRowClick: $setup.handleClick
  }, _attrs), {
    empty: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Sin datos. `);
      } else {
        return [
          createTextVNode(" Sin datos. ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.props.cols, (col) => {
          _push2(ssrRenderComponent($setup["Column"], {
            key: col.field,
            field: col.field,
            header: col.header,
            sortable: col.sortable
          }, {
            body: withCtx((row, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(col.formatter ? $setup.formatter[col.formatter]?.($setup.get(row.data, col.field, row.data)) : $setup.get(
                  row.data,
                  col.field,
                  row.data
                ))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(col.formatter ? $setup.formatter[col.formatter]?.($setup.get(row.data, col.field, row.data)) : $setup.get(
                    row.data,
                    col.field,
                    row.data
                  )), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.props.cols, (col) => {
            return openBlock(), createBlock($setup["Column"], {
              key: col.field,
              field: col.field,
              header: col.header,
              sortable: col.sortable
            }, {
              body: withCtx((row) => [
                createTextVNode(toDisplayString(col.formatter ? $setup.formatter[col.formatter]?.($setup.get(row.data, col.field, row.data)) : $setup.get(
                  row.data,
                  col.field,
                  row.data
                )), 1)
              ]),
              _: 2
            }, 1032, ["field", "header", "sortable"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TableMiembros.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TableMiembros = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const miembro = await fetch(
    `http://localhost:4321/api/miembros?idmiembro=${id}&includeProyectos=true`
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
  });
  console.log(miembro.response);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> <div class="stats md:grid-cols-2 shadow stats-vertical md:stats-horizontal w-full not-prose min-h-40"> <div class="stat flex flex-col md:inline-grid place-items-center place"> <div class="stat-figure text-secondary size-40"> ${miembro.response?.imgPerfil && renderTemplate`<div class="avatar size-full"> <div class="rounded-full"> ${renderComponent($$result2, "Image", $$Image, { "src": miembro.response.imgPerfil, "alt": miembro.response.nombreCompleto, "class": "aspect-square", "width": 100, "height": 100, "loading": "eager" })} </div> </div>`} ${!miembro.response?.imgPerfil && renderTemplate`<div class="avatar placeholder size-full"> <div class="bg-neutral text-neutral-content rounded-full"> <span class="text-3xl"> ${miembro.response.nombreCompleto.charAt(0)} </span> </div> </div>`} </div> <div class="stat-value text-wrap text-center"> ${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto} </div> <div class="stat-title">${miembro.response.puesto.toUpperCase()}</div> <div class="stat-desc text-wrap"> ${miembro.response.tipoMiembro.toUpperCase()} </div> </div> <div class="stat place-items-center"> <div class="stat-figure text-secondary"> <i class="bi bi-share-fill text-2xl"></i> </div> <div class="stat-title">Enlaces de contacto</div> <div class="stat-value text-base-content flex flex-wrap gap-4 text-wrap"> ${miembro.response.contactos.length > 0 && miembro.response.contactos.map((el) => renderTemplate`<a class="hover:text-primary hover:scale-105 duration-100 ease-in"${addAttribute(`${el.tipo === "correo" ? "mailto:" : ""}${el.url}`, "href")}${addAttribute(el.tipo, "aria-label")} target="_blank"> <i${addAttribute(redesSocialesIcon[el.tipo], "class")}></i> </a>`)} ${miembro.response.contactos.length < 1 && renderTemplate`<span>Sin información de contacto.</span>`} </div> </div> </div> <p>${miembro.response.resumen}</p> <h2 class="mt-0">Proyectos</h2> <!--     <div class="overflow-x-auto">
      <table class="table table-zebra text-balance not-prose">
        <thead>
          <tr class="bg-neutral text-neutral-content">
            <th class="w-40">Clave</th>
            <th>Proyecto</th>
            <th>Duración</th>
            <th>Director</th>
            <th>Colaboradores</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {
            miembro.response.proyectos.length > 0 &&
              miembro.response.proyectos.map((el: any) => (
                <tr>
                  <th>{el.clave}</th>
                  <td>{el.titulo}</td>
                  <td>
                    {\`\${formatDate(el.fechaInicio, "LL")} a \${formatDate(el.fechaTermino, "LL")}\`}{" "}
                  </td>
                  <td>{el.director_proyecto.nombreCompleto}</td>
                  <td>{getCollabs(el) ?? "---"}</td>
                  <td>{el.tipo.toUpperCase()}</td>
                </tr>
              ))
          }
          {
            miembro.response.proyectos.length < 1 && (
              <tr>
                <th colspan="6" class="text-center text-xl">
                  Sin datos.
                </th>
              </tr>
            )
          }
        </tbody>
      </table>
    </div> --> ${renderComponent($$result2, "TableMiembros", TableMiembros, { "data": miembro.response.proyectos, "cols": [
    { header: "Clave", field: "clave" },
    { header: "Proyecto", field: "titulo" },
    {
      header: "Director",
      field: "director_proyecto.nombreCompleto",
      sortable: true
    },
    {
      header: "Duraci\xF3n",
      field: "",
      formatter: "duracion"
    },
    { header: "Otros colaboradores", field: "", formatter: "colabs" },
    {
      header: "Tipo",
      field: "tipo",
      formatter: "uppercase",
      sortable: true
    }
  ], "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/TableMiembros.vue", "client:component-export": "default" })} </main> ` })}`;
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
