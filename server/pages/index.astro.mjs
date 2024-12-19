/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, aa as Fragment } from '../chunks/astro/server_BYikK1dL.mjs';
import { $ as $$Layout } from '../chunks/Layout_CC5I6w4Y.mjs';
import { $ as $$CardBlog } from '../chunks/CardBlog_BzkTLiC3.mjs';
import 'vue3-toastify';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment as Fragment$1, renderList } from 'vue';
import { a as useGetData } from '../chunks/http_Cz-Emh2m.mjs';
import { Carousel as Carousel$1, Navigation, Slide } from 'vue3-carousel';
/* empty css                                 */
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_BiaGrSvn.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DB6v8AOh.mjs';

const $$BlogsContainer = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await fetch(`http://localhost:4321/api/blogs?status=aceptado&limit=3`).then(
    (res) => res.json()
  );
  return renderTemplate`${maybeRenderHead()}<div class="prose max-w-full p-4"> <h1>Eventos destacados</h1> <div class="not-prose gap-4 place-items-center place-content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${blogs.response?.blogs?.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${blogs.response.blogs.map((el) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "titulo": el.titulo, "imagen": el.imagen, "fecha": el.fecha, "id": el.idblog })}`)}<div class="md:col-span-2 lg:col-span-3 w-full flex justify-center"> <a class="btn btn-primary w-1/2" href="/content">
Ver todos
</a> </div> ` })}`} ${blogs.response.blogs?.length < 1 && renderTemplate`<div class="h-96 flex flex-col justify-center items-center gap-4 md:col-span-2 lg:col-span-3"> <i class="bi bi-clouds text-9xl"></i> <h1 class="text-xl">Sin eventos recientes</h1> </div>`} </div> </div>`;
}, "/home/blanco/Documentos/ca-astro/src/components/gui/BlogsContainer.astro", void 0);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  setup(__props, { expose: __expose }) {
    __expose();
    const { data, isPending, isError } = useGetData("banners?mostrar=true", "bannersData");
    const __returned__ = { data, isPending, isError, get Carousel() {
      return Carousel$1;
    }, get Navigation() {
      return Navigation;
    }, get Slide() {
      return Slide;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (!$setup.isPending && !$setup.isError) {
    _push(ssrRenderComponent($setup["Carousel"], mergeProps({
      class: "block",
      "wrap-around": "",
      breakpoints: {
        300: {
          itemsToShow: 1.3,
          snapAlign: "start"
        },
        // 500px and up
        640: {
          itemsToShow: 1.5,
          snapAlign: "center"
        }
      }
    }, _attrs), {
      slides: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($setup.data.response, (banner) => {
            _push2(ssrRenderComponent($setup["Slide"], {
              class: "h-60 md:h-96 w-full",
              key: banner.idbanner
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full w-full relative flex items-end justify-end"${_scopeId2}><img class="w-full h-full object-cover -z-10 absolute top-0 left-0 rounded-box"${ssrRenderAttr("src", banner.imagen)} width="50px" height="50px"${ssrRenderAttr("alt", banner.createdAt)} loading="eager"${_scopeId2}><div class="p-4 w-full lg:w-3/4"${_scopeId2}>`);
                  if (banner.url || banner.descripcion) {
                    _push3(`<div class="card bg-base-100/70 backdrop-blur-sm shadow-xl w-full min-h-32"${_scopeId2}><div class="card-body"${_scopeId2}>`);
                    if (banner.descripcion) {
                      _push3(`<p${_scopeId2}>${ssrInterpolate(banner.descripcion)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (banner.url) {
                      _push3(`<div class="card-actions justify-end"${_scopeId2}><a target="_blank"${ssrRenderAttr("href", banner.url)} class="btn btn-primary btn-sm"${_scopeId2}>Ver enlace adjunto</a></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full w-full relative flex items-end justify-end" }, [
                      createVNode("img", {
                        class: "w-full h-full object-cover -z-10 absolute top-0 left-0 rounded-box",
                        src: banner.imagen,
                        width: "50px",
                        height: "50px",
                        alt: banner.createdAt,
                        loading: "eager"
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "p-4 w-full lg:w-3/4" }, [
                        banner.url || banner.descripcion ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "card bg-base-100/70 backdrop-blur-sm shadow-xl w-full min-h-32"
                        }, [
                          createVNode("div", { class: "card-body" }, [
                            banner.descripcion ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(banner.descripcion), 1)) : createCommentVNode("", true),
                            banner.url ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "card-actions justify-end"
                            }, [
                              createVNode("a", {
                                target: "_blank",
                                href: banner.url,
                                class: "btn btn-primary btn-sm"
                              }, "Ver enlace adjunto", 8, ["href"])
                            ])) : createCommentVNode("", true)
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment$1, null, renderList($setup.data.response, (banner) => {
              return openBlock(), createBlock($setup["Slide"], {
                class: "h-60 md:h-96 w-full",
                key: banner.idbanner
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full w-full relative flex items-end justify-end" }, [
                    createVNode("img", {
                      class: "w-full h-full object-cover -z-10 absolute top-0 left-0 rounded-box",
                      src: banner.imagen,
                      width: "50px",
                      height: "50px",
                      alt: banner.createdAt,
                      loading: "eager"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "p-4 w-full lg:w-3/4" }, [
                      banner.url || banner.descripcion ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "card bg-base-100/70 backdrop-blur-sm shadow-xl w-full min-h-32"
                      }, [
                        createVNode("div", { class: "card-body" }, [
                          banner.descripcion ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(banner.descripcion), 1)) : createCommentVNode("", true),
                          banner.url ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "card-actions justify-end"
                          }, [
                            createVNode("a", {
                              target: "_blank",
                              href: banner.url,
                              class: "btn btn-primary btn-sm"
                            }, "Ver enlace adjunto", 8, ["href"])
                          ])) : createCommentVNode("", true)
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ];
        }
      }),
      addons: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["Navigation"], null, null, _parent2, _scopeId));
        } else {
          return [
            createVNode($setup["Navigation"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-60 md:h-[384px] w-full flex flex-col gap-4" }, _attrs))}><div class="skeleton w-full grow"></div></div>`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/Carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CA - c\xF3mputo distribuido." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Carousel", Carousel, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/gui/Carousel.vue", "client:component-export": "default" })} ${renderComponent($$result2, "BlogsContainer", $$BlogsContainer, {})} <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"> <div class="card bg-accent text-accent-content shadow-xl"> <div class="card-body"> <h2 class="card-title">Misión</h2> <p class="text-balance">
Contribuir con el mejoramiento de la formación académica de los
            estudiantes de la carrera de Ingeniería en Sistemas computacionales
            del Instituto tecnológico Superior de los Ríos.
</p> </div> </div> <div class="card bg-secondary text-secondary-content shadow-xl"> <div class="card-body"> <h2 class="card-title">Visión</h2> <p class="text-balance">
Lograr la consolidación del cuerpo académico a través del incremento
            de nuestra producción académica, investigación con reconocimiento
            nacional e internacional.
</p> </div> </div> <div class="card bg-neutral text-neutral-content shadow-xl"> <div class="card-body"> <h2 class="card-title">Objetivos</h2> <p class="text-balance">
Desarrollar un cuerpo académico para el desarrollo de proyectos de
            investigación, dirección de tesís, desarrollo de aplicación de
            sistema distribuido, así como el mejoramiento de los planes de
            estudios de la carrera.
</p> </div> </div> </div> </main> ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
