import 'vue3-toastify';
import '@primevue/themes/aura';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList } from 'vue';
import { a as useGetData, _ as _export_sfc } from './_plugin-vue_export-helper_Dp5eun83.mjs';
import { Carousel as Carousel$1, Navigation, Pagination, Slide } from 'vue3-carousel';
/* empty css                         */
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  setup(__props, { expose: __expose }) {
    __expose();
    const { data, isPending, isError } = useGetData("banners?mostrar=true", "bannersData");
    const __returned__ = { data, isPending, isError, get Carousel() {
      return Carousel$1;
    }, get Navigation() {
      return Navigation;
    }, get Pagination() {
      return Pagination;
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
      "items-to-show": 1.5,
      class: "block",
      "wrap-around": "",
      "pause-autoplay-on-hover": ""
    }, _attrs), {
      slides: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($setup.data.response, (banner) => {
            _push2(ssrRenderComponent($setup["Slide"], {
              class: "h-96 w-full",
              key: banner.idbanner
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full w-full relative flex items-end justify-end"${_scopeId2}><img class="w-full h-full object-cover -z-10 absolute top-0 left-0 rounded-box"${ssrRenderAttr("src", banner.imagen)} width="100px" height="100px"${ssrRenderAttr("alt", banner.createdAt)}${_scopeId2}><div class="p-4 w-full lg:w-3/4"${_scopeId2}>`);
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
                        width: "100px",
                        height: "100px",
                        alt: banner.createdAt
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
            (openBlock(true), createBlock(Fragment, null, renderList($setup.data.response, (banner) => {
              return openBlock(), createBlock($setup["Slide"], {
                class: "h-96 w-full",
                key: banner.idbanner
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full w-full relative flex items-end justify-end" }, [
                    createVNode("img", {
                      class: "w-full h-full object-cover -z-10 absolute top-0 left-0 rounded-box",
                      src: banner.imagen,
                      width: "100px",
                      height: "100px",
                      alt: banner.createdAt
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
          _push2(ssrRenderComponent($setup["Pagination"], null, null, _parent2, _scopeId));
        } else {
          return [
            createVNode($setup["Navigation"]),
            createVNode($setup["Pagination"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[406px] w-full flex flex-col gap-4" }, _attrs))}><div class="skeleton w-full grow"></div><div class="flex h-2 gap-2 justify-center"><div class="skeleton h-full w-5"></div><div class="skeleton h-full w-5"></div><div class="skeleton h-full w-5"></div></div></div>`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gui/Carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Carousel as C };
