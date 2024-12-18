import 'vue3-toastify';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_DIEfqyNs.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input",
  props: {
    value: {},
    label: {},
    type: {}
  },
  emits: ["setValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const props = __props;
    const handleChange = (event) => {
      const { value } = event.target;
      emit("setValue", value);
    };
    const __returned__ = { emit, props, handleChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<label${ssrRenderAttrs(mergeProps({ class: "form-control w-full max-w-xs" }, _attrs))}><div class="label"><span class="label-text">${ssrInterpolate($setup.props.label)}</span></div><input${ssrRenderAttr("type", $setup.props.type ?? "text")} class="input input-bordered w-full max-w-xs" required${ssrRenderAttr("value", $setup.props.value)}></label>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Input as I };
