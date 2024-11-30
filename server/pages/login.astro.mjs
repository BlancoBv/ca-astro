/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BLMGylKI.mjs';
import { $ as $$Layout } from '../chunks/Layout_BYFGd-tl.mjs';
import 'vue3-toastify';
import '@primevue/themes/aura';
import { useSSRContext, defineComponent, ref, reactive, onMounted, mergeProps } from 'vue';
import { u as useSendData, _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_Dp5eun83.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
export { r as renderers } from '../chunks/_@astro-renderers_Dy1BIr2k.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form",
  setup(__props, { expose: __expose }) {
    __expose();
    const isHydrating = ref(true);
    const sendForm = useSendData("login", "post", {
      onToastClose() {
        window.location.href = "/panel";
      },
      toastMsg: "Sesi\xF3n iniciada correctamente, redirigiendo..."
    });
    const body = reactive({ password: "", user: "" });
    const send = () => {
      sendForm.mutate(body);
    };
    onMounted(() => {
      isHydrating.value = false;
    });
    const __returned__ = { isHydrating, sendForm, body, send };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center" }, _attrs))}><div class="hero min-h-96"><div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left"><h1 class="text-5xl font-bold">Inicio de sesi\xF3n</h1><p class="py-6"> Panel de administraci\xF3n de la p\xE1gina WEB del Cuerpo Acad\xE9mico. </p></div><div class="card bg-base-100 shrink-0 shadow-2xl items-center">`);
  if (!$setup.isHydrating) {
    _push(`<form class="card-body md:w-96 h-80"><div class="form-control"><label class="label"><span class="label-text">Usuario</span></label><input type="text" placeholder="admin" class="input input-bordered" required${ssrRenderAttr("value", $setup.body.user)}></div><div class="form-control"><label class="label"><span class="label-text">Contrase\xF1a</span></label><input type="password" placeholder="******" class="input input-bordered" required${ssrRenderAttr("value", $setup.body.password)}></div><div class="form-control mt-6"><button class="btn btn-primary" type="submit"${ssrIncludeBooleanAttr($setup.sendForm.isPending.value) ? " disabled" : ""}> Iniciar sesi\xF3n </button></div></form>`);
  } else {
    _push(`<div class="w-80 md:w-96 h-80 p-8 flex flex-col items-center justify-center"><div class="w-full flex flex-col gap-4 mb-4"><div class="skeleton w-28 h-4"></div><div class="skeleton w-full h-12"></div></div><div class="w-full flex flex-col gap-4"><div class="skeleton w-28 h-4"></div><div class="skeleton w-full h-12"></div></div><div class="skeleton w-full h-12 mt-6 bg-primary rounded-btn"></div></div>`);
  }
  _push(`</div></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/login/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio de sesion" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Form", Form, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/login/Form.vue", "client:component-export": "default" })} ` })}`;
}, "/home/blanco/Documentos/ca-astro/src/pages/login/index.astro", void 0);

const $$file = "/home/blanco/Documentos/ca-astro/src/pages/login/index.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
