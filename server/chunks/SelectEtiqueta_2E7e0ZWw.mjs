import 'vue3-toastify';
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { a as useGetData } from './http_yWF3wTfY.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_3ktPLYsj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SelectEtiqueta",
  emits: ["setOption"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const values = ref([]);
    const { data, isError, isPending } = useGetData("etiquetas", "etiquetasData");
    const defaultLabels = ref([]);
    const handleClick = (element) => {
      values.value = [...values.value, { id: element.idetiqueta, label: element.nombre }];
      emit("setOption", values.value);
      if (defaultLabels.value.length < 1) {
        const newValues = [...data.value.response];
        const indexOfElement = newValues.findIndex((el) => el.idetiqueta === element.idetiqueta);
        newValues.splice(indexOfElement, 1);
        defaultLabels.value = newValues;
      } else {
        const newValues = [...defaultLabels.value];
        const indexOfElement = newValues.findIndex((el) => el.idetiqueta === element.idetiqueta);
        newValues.splice(indexOfElement, 1);
        defaultLabels.value = newValues;
      }
    };
    const deleteEtiqueta = (index) => {
      const newValues = [...values.value];
      const indexOfElement = [...data.value.response].findIndex((el) => el.idetiqueta === newValues[index].id);
      defaultLabels.value = [...defaultLabels.value, data.value.response[indexOfElement]];
      newValues.splice(index, 1);
      values.value = newValues;
      emit("setOption", values.value);
    };
    const __returned__ = { emit, values, data, isError, isPending, defaultLabels, handleClick, deleteEtiqueta };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><label>Etiquetas</label><div class="flex gap-4 items-center"><div class="border border-base-content/20 rounded-box h-20 flex-grow gap-4 p-2 flex flex-wrap overflow-y-auto">`);
  if ($setup.values.length < 1) {
    _push(`<span class="badge badge-primary">\xA1A\xF1ade algunas etiquetas!</span>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList($setup.values, (etiqueta, index) => {
      _push(`<div class="badge badge-primary cursor-pointer hover:badge-error">${ssrInterpolate(etiqueta.label)}</div>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</div><details class="dropdown"><summary class="btn btn-secondary m-1">A\xF1adir etiquetas</summary><ul class="menu dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow">`);
  if (!$setup.isPending && !$setup.isError && $setup.values.length < 1) {
    _push(`<!--[-->`);
    ssrRenderList($setup.data.response, (etiqueta) => {
      _push(`<li><button type="button">${ssrInterpolate(etiqueta.nombre)}</button></li>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList($setup.defaultLabels, (etiqueta) => {
      _push(`<li><button type="button">${ssrInterpolate(etiqueta.nombre)}</button></li>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</ul></details></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/forms/SelectEtiqueta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectEtiqueta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { SelectEtiqueta as S };
