/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BYikK1dL.mjs';
import { f as formatDate } from '../../chunks/format_DDvzIGDn.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { s as script, a as script$1 } from '../../chunks/index_CfC-Oi8h.mjs';
import get from 'lodash/get.js';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
/* empty css                                   */
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_5v_ptjmN.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BkoCVzvU.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Dp_aSPpe.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_DJ3BG1z4.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TableMiembros",
  props: {
    cols: {},
    data: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
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
    const getEntregaFinal = (element) => {
      if (!element.fechaInicioEntrega || !element.fechaTerminoEntrega) {
        return "---";
      }
      return `${element.fechaInicioEntrega} a ${element.fechaTerminoEntrega}`;
    };
    const getField = (row, col) => {
      if (col.field === "estatus") {
        return null;
      }
      if (col.formatter) {
        return formatter[col.formatter]?.(get(
          row.data,
          col.field,
          row.data
        ));
      }
      return get(row.data, col.field, row.data);
    };
    const formatter = {
      uppercase: (value) => value.toUpperCase(),
      duracion: (value) => getDuracion(value),
      colabs: (value) => getCollabs(value),
      monto: (value) => value ?? "---",
      entregaFinal: (value) => getEntregaFinal(value)
    };
    const __returned__ = { props, getCollabs, getDuracion, getEntregaFinal, getField, formatter, get Column() {
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
    selectionMode: "single"
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
                _push3(`${ssrInterpolate($setup.getField(row, col))} `);
                if (col.field === "estatus") {
                  _push3(`<div class="${ssrRenderClass([{
                    "badge-success": $setup.get(
                      row.data,
                      col.field,
                      row.data
                    ) === "finalizado",
                    "badge-info": $setup.get(
                      row.data,
                      col.field,
                      row.data
                    ) === "en proceso"
                  }, "badge h-max"])}"${_scopeId2}>${ssrInterpolate($setup.get(row.data, col.field, row.data).toUpperCase())}</div>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  createTextVNode(toDisplayString($setup.getField(row, col)) + " ", 1),
                  col.field === "estatus" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ["badge h-max", {
                      "badge-success": $setup.get(
                        row.data,
                        col.field,
                        row.data
                      ) === "finalizado",
                      "badge-info": $setup.get(
                        row.data,
                        col.field,
                        row.data
                      ) === "en proceso"
                    }]
                  }, toDisplayString($setup.get(row.data, col.field, row.data).toUpperCase()), 3)) : createCommentVNode("", true)
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
                createTextVNode(toDisplayString($setup.getField(row, col)) + " ", 1),
                col.field === "estatus" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["badge h-max", {
                    "badge-success": $setup.get(
                      row.data,
                      col.field,
                      row.data
                    ) === "finalizado",
                    "badge-info": $setup.get(
                      row.data,
                      col.field,
                      row.data
                    ) === "en proceso"
                  }]
                }, toDisplayString($setup.get(row.data, col.field, row.data).toUpperCase()), 3)) : createCommentVNode("", true)
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
    el.fechaInicioEntrega = el.fechaInicioEntrega ? formatDate(el.fechaInicioEntrega, "LL") : el.fechaInicioEntrega;
    el.fechaTerminoEntrega = el.fechaTerminoEntrega ? formatDate(el.fechaTerminoEntrega, "LL") : el.fechaTerminoEntrega;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> <div class="stats md:grid-cols-2 shadow stats-vertical md:stats-horizontal w-full not-prose min-h-40"> <div class="stat flex flex-col md:inline-grid place-items-center place"> <div class="stat-figure text-secondary size-40"> ${miembro.response?.imgPerfil && renderTemplate`<div class="avatar size-full"> <div class="rounded-full"> ${renderComponent($$result2, "Image", $$Image, { "src": miembro.response.imgPerfil, "alt": miembro.response.nombreCompleto, "class": "aspect-square", "width": 100, "height": 100, "loading": "eager" })} </div> </div>`} ${!miembro.response?.imgPerfil && renderTemplate`<div class="avatar placeholder size-full"> <div class="bg-neutral text-neutral-content rounded-full"> <span class="text-3xl"> ${miembro.response.nombreCompleto.charAt(0)} </span> </div> </div>`} </div> <div class="stat-value text-wrap text-center"> ${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto} </div> <div class="stat-title">${miembro.response.puesto.toUpperCase()}</div> <div class="stat-desc text-wrap"> ${miembro.response.tipoMiembro.toUpperCase()} </div> </div> <div class="stat place-items-center"> <div class="stat-figure text-secondary"> <i class="bi bi-share-fill text-2xl"></i> </div> <div class="stat-title">Enlaces de contacto</div> <div class="stat-value text-base-content flex flex-wrap gap-4 text-wrap"> ${miembro.response.contactos.length > 0 && miembro.response.contactos.map((el) => renderTemplate`<a class="hover:text-primary hover:scale-105 duration-100 ease-in"${addAttribute(`${el.tipo === "correo" ? "mailto:" : ""}${el.url}`, "href")}${addAttribute(el.tipo, "aria-label")} target="_blank"> <i${addAttribute(redesSocialesIcon[el.tipo], "class")}></i> </a>`)} ${miembro.response.contactos.length < 1 && renderTemplate`<span>Sin información de contacto.</span>`} </div> </div> </div> <p>${miembro.response.resumen}</p> <h2 class="mt-0">Proyectos</h2> ${renderComponent($$result2, "TableMiembros", TableMiembros, { "data": miembro.response.proyectos, "cols": [
    { header: "Clave", field: "clave" },
    { header: "Proyecto", field: "titulo" },
    {
      header: "Director(a) responsable",
      field: "director_proyecto.nombreCompleto",
      sortable: true
    },
    {
      header: "Vigencia",
      field: "",
      formatter: "duracion"
    },
    { header: "Otros colaboradores", field: "", formatter: "colabs" },
    {
      header: "Tipo",
      field: "tipo",
      formatter: "uppercase",
      sortable: true
    },
    {
      header: "Monto aprobado",
      field: "monto",
      sortable: true,
      formatter: "monto"
    },
    {
      header: "Fecha entrega final",
      field: "",
      formatter: "entregaFinal"
    },
    { header: "Estatus", field: "estatus", sortable: true }
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
