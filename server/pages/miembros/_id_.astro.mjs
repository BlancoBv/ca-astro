/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BYikK1dL.mjs';
import { a as formatMoneda, f as formatDate } from '../../chunks/format_Cetxi1N9.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment } from 'vue';
import { s as script, a as script$1 } from '../../chunks/index_BHTcDF0C.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
/* empty css                                   */
import { _ as _export_sfc } from '../../chunks/_plugin-vue_export-helper_BRCTKcgz.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Dl_LH0xV.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_DarXLmXQ.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_5KdtQE-v.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListaProyectosMiembros",
  props: {
    data: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const getCollabs = (element) => {
      const formatter = new Intl.ListFormat("es", {
        type: "conjunction",
        style: "long"
      });
      const miembrosF = [];
      element.miembros_proyecto.forEach((el) => {
        miembrosF.push(el.nombreCompleto);
      });
      if (element.otrosColaboradores) {
        const otherCollabsArr = element.otrosColaboradores.split(";");
        miembrosF.push(...otherCollabsArr);
      }
      if (miembrosF.length < 1) {
        return "---";
      }
      return formatter.format(miembrosF);
    };
    const __returned__ = { props, getCollabs, get Column() {
      return script;
    }, get DataTable() {
      return script$1;
    }, get formatMoneda() {
      return formatMoneda;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["DataTable"], mergeProps({
    value: $setup.props.data,
    paginator: true,
    rows: 10,
    rowsPerPageOptions: [5, 10, 20, 50]
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
        _push2(ssrRenderComponent($setup["Column"], {
          field: "clave",
          header: "Clave"
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="w-20"${_scopeId2}>${ssrInterpolate(data[field])}</div>`);
            } else {
              return [
                createVNode("div", { class: "w-20" }, toDisplayString(data[field]), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "convocatoria",
          header: "Convocatoria"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "titulo",
          header: "Titulo"
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="min-w-32"${_scopeId2}>${ssrInterpolate(data[field])}</div>`);
            } else {
              return [
                createVNode("div", { class: "min-w-32" }, toDisplayString(data[field]), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "director_proyecto.nombreCompleto",
          header: "Director(a) responsable",
          sortable: ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "fechaInicio",
          header: "Vigencia"
        }, {
          body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="w-24"${_scopeId2}>${ssrInterpolate(data.fechaInicio)} a ${ssrInterpolate(data.fechaTermino)}</div>`);
            } else {
              return [
                createVNode("div", { class: "w-24" }, toDisplayString(data.fechaInicio) + " a " + toDisplayString(data.fechaTermino), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "miembros_proyecto",
          header: "Colaboradores"
        }, {
          body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="w-32"${_scopeId2}>${ssrInterpolate($setup.getCollabs(data))}</div>`);
            } else {
              return [
                createVNode("div", { class: "w-32" }, toDisplayString($setup.getCollabs(data)), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "tipo",
          header: "Tipo",
          sortable: ""
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(data[field].toUpperCase())}`);
            } else {
              return [
                createTextVNode(toDisplayString(data[field].toUpperCase()), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "monto",
          header: "Monto aprobado",
          sortable: ""
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($setup.formatMoneda(data[field]))}`);
            } else {
              return [
                createTextVNode(toDisplayString($setup.formatMoneda(data[field])), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "fechaInicioEntrega",
          header: "Entrega final"
        }, {
          body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (!data.fechaInicioEntrega || !data.fechaTerminoEntrega) {
                _push3(`<!--[--> --- <!--]-->`);
              } else {
                _push3(`<div class="w-24"${_scopeId2}>${ssrInterpolate(data.fechaInicioEntrega)} a ${ssrInterpolate(data.fechaTerminoEntrega)}</div>`);
              }
            } else {
              return [
                !data.fechaInicioEntrega || !data.fechaTerminoEntrega ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(" --- ")
                ], 64)) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-24"
                }, toDisplayString(data.fechaInicioEntrega) + " a " + toDisplayString(data.fechaTerminoEntrega), 1))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "estatus",
          header: "Estatus",
          sortable: ""
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass([{
                "badge-success": data[field] === "finalizado",
                "badge-info": data[field] === "en proceso"
              }, "badge h-max"])}"${_scopeId2}>${ssrInterpolate(data[field].toUpperCase())}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["badge h-max", {
                    "badge-success": data[field] === "finalizado",
                    "badge-info": data[field] === "en proceso"
                  }]
                }, toDisplayString(data[field].toUpperCase()), 3)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode($setup["Column"], {
            field: "clave",
            header: "Clave"
          }, {
            body: withCtx(({ data, field }) => [
              createVNode("div", { class: "w-20" }, toDisplayString(data[field]), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "convocatoria",
            header: "Convocatoria"
          }),
          createVNode($setup["Column"], {
            field: "titulo",
            header: "Titulo"
          }, {
            body: withCtx(({ data, field }) => [
              createVNode("div", { class: "min-w-32" }, toDisplayString(data[field]), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "director_proyecto.nombreCompleto",
            header: "Director(a) responsable",
            sortable: ""
          }),
          createVNode($setup["Column"], {
            field: "fechaInicio",
            header: "Vigencia"
          }, {
            body: withCtx(({ data }) => [
              createVNode("div", { class: "w-24" }, toDisplayString(data.fechaInicio) + " a " + toDisplayString(data.fechaTermino), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "miembros_proyecto",
            header: "Colaboradores"
          }, {
            body: withCtx(({ data }) => [
              createVNode("div", { class: "w-32" }, toDisplayString($setup.getCollabs(data)), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "tipo",
            header: "Tipo",
            sortable: ""
          }, {
            body: withCtx(({ data, field }) => [
              createTextVNode(toDisplayString(data[field].toUpperCase()), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "monto",
            header: "Monto aprobado",
            sortable: ""
          }, {
            body: withCtx(({ data, field }) => [
              createTextVNode(toDisplayString($setup.formatMoneda(data[field])), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "fechaInicioEntrega",
            header: "Entrega final"
          }, {
            body: withCtx(({ data }) => [
              !data.fechaInicioEntrega || !data.fechaTerminoEntrega ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createTextVNode(" --- ")
              ], 64)) : (openBlock(), createBlock("div", {
                key: 1,
                class: "w-24"
              }, toDisplayString(data.fechaInicioEntrega) + " a " + toDisplayString(data.fechaTerminoEntrega), 1))
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "estatus",
            header: "Estatus",
            sortable: ""
          }, {
            body: withCtx(({ data, field }) => [
              createVNode("div", {
                class: ["badge h-max", {
                  "badge-success": data[field] === "finalizado",
                  "badge-info": data[field] === "en proceso"
                }]
              }, toDisplayString(data[field].toUpperCase()), 3)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaProyectosMiembros.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListaProyectosMiembros = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListaPublicacionesMiembros",
  props: {
    data: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const getCollabs = (element) => {
      const formatter = new Intl.ListFormat("es", {
        type: "conjunction",
        style: "long"
      });
      const miembrosF = [];
      element.miembros_publicacion.forEach((el) => {
        miembrosF.push(el.nombreCompleto);
      });
      if (element.otrosAutores) {
        const otherAutoresArr = element.otrosAutores.split(";");
        miembrosF.push(...otherAutoresArr);
      }
      if (miembrosF.length < 1) {
        return "---";
      }
      return formatter.format(miembrosF);
    };
    const __returned__ = { props, getCollabs, get Column() {
      return script;
    }, get DataTable() {
      return script$1;
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
    rowsPerPageOptions: [5, 10, 20, 50]
  }, _attrs), {
    empty: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center font-bold"${_scopeId}>Sin datos.</div>`);
      } else {
        return [
          createVNode("div", { class: "text-center font-bold" }, "Sin datos.")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent($setup["Column"], {
          field: "ISSN",
          header: "ISSN"
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="w-20"${_scopeId2}>${ssrInterpolate(data[field] ?? "---")}</div>`);
            } else {
              return [
                createVNode("div", { class: "w-20" }, toDisplayString(data[field] ?? "---"), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "titulo",
          header: "Titulo"
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="min-w-32"${_scopeId2}>${ssrInterpolate(data[field])}</div>`);
            } else {
              return [
                createVNode("div", { class: "min-w-32" }, toDisplayString(data[field]), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "year",
          header: "A\xF1o",
          sortable: ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "miembros_publicacion",
          header: "Autores"
        }, {
          body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="w-32"${_scopeId2}>${ssrInterpolate($setup.getCollabs(data))}</div>`);
            } else {
              return [
                createVNode("div", { class: "w-32" }, toDisplayString($setup.getCollabs(data)), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent($setup["Column"], {
          field: "tipo",
          header: "Tipo",
          sortable: ""
        }, {
          body: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(data[field].toUpperCase())}`);
            } else {
              return [
                createTextVNode(toDisplayString(data[field].toUpperCase()), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode($setup["Column"], {
            field: "ISSN",
            header: "ISSN"
          }, {
            body: withCtx(({ data, field }) => [
              createVNode("div", { class: "w-20" }, toDisplayString(data[field] ?? "---"), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "titulo",
            header: "Titulo"
          }, {
            body: withCtx(({ data, field }) => [
              createVNode("div", { class: "min-w-32" }, toDisplayString(data[field]), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "year",
            header: "A\xF1o",
            sortable: ""
          }),
          createVNode($setup["Column"], {
            field: "miembros_publicacion",
            header: "Autores"
          }, {
            body: withCtx(({ data }) => [
              createVNode("div", { class: "w-32" }, toDisplayString($setup.getCollabs(data)), 1)
            ]),
            _: 1
          }),
          createVNode($setup["Column"], {
            field: "tipo",
            header: "Tipo",
            sortable: ""
          }, {
            body: withCtx(({ data, field }) => [
              createTextVNode(toDisplayString(data[field].toUpperCase()), 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/listas/ListaPublicacionesMiembros.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListaPublicacionesMiembros = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://computodistribuido.org");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const miembro = await fetch(
    `http://localhost:4321/api/miembros?idmiembro=${id}&includeProyectos=true&includePublicaciones=true`
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="prose max-w-full p-4"> <div class="stats md:grid-cols-2 shadow stats-vertical md:stats-horizontal w-full not-prose min-h-40"> <div class="stat flex flex-col md:inline-grid place-items-center place"> <div class="stat-figure text-secondary size-40"> ${miembro.response?.imgPerfil && renderTemplate`<div class="avatar size-full"> <div class="rounded-full"> ${renderComponent($$result2, "Image", $$Image, { "src": miembro.response.imgPerfil, "alt": miembro.response.nombreCompleto, "class": "aspect-square", "width": 100, "height": 100, "loading": "eager" })} </div> </div>`} ${!miembro.response?.imgPerfil && renderTemplate`<div class="avatar placeholder size-full"> <div class="bg-neutral text-neutral-content rounded-full"> <span class="text-3xl"> ${miembro.response.nombreCompleto.charAt(0)} </span> </div> </div>`} </div> <div class="stat-value text-wrap text-center"> ${miembro.response.gradoEstudio}. ${miembro.response.nombreCompleto} </div> <div class="stat-title">${miembro.response.puesto.toUpperCase()}</div> <div class="stat-desc text-wrap"> ${miembro.response.tipoMiembro.toUpperCase()} </div> </div> <div class="stat place-items-center"> <div class="stat-figure text-secondary"> <i class="bi bi-share-fill text-2xl"></i> </div> <div class="stat-title">Enlaces de contacto</div> <div class="stat-value text-base-content flex flex-wrap gap-4 text-wrap"> ${miembro.response.contactos.length > 0 && miembro.response.contactos.map((el) => renderTemplate`<a class="hover:text-primary hover:scale-105 duration-100 ease-in"${addAttribute(`${el.tipo === "correo" ? "mailto:" : ""}${el.url}`, "href")}${addAttribute(el.tipo, "aria-label")} target="_blank"> <i${addAttribute(redesSocialesIcon[el.tipo], "class")}></i> </a>`)} ${miembro.response.contactos.length < 1 && renderTemplate`<span>Sin información de contacto.</span>`} </div> </div> </div> <p>${miembro.response.resumen}</p> <h2 class="mt-0">Proyectos</h2> ${renderComponent($$result2, "ListaProyectosMiembros", ListaProyectosMiembros, { "data": miembro.response.proyectos, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/listas/ListaProyectosMiembros.vue", "client:component-export": "default" })} <h2 class="mt-0">Publicaciones</h2> ${renderComponent($$result2, "ListaPublicacionesMiembros", ListaPublicacionesMiembros, { "data": miembro.response.publicaciones, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/listas/ListaPublicacionesMiembros.vue", "client:component-export": "default" })} </main> ` })}`;
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
