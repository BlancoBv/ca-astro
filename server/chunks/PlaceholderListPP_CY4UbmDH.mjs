import 'vue3-toastify';
import { defineComponent, useSSRContext, mergeProps, mergeModels, useModel, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_tWar_dvF.mjs';
/* empty css                          */

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StatInfoPublic",
  props: {
    colSpan: {},
    rowSpan: {},
    mainClass: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "stats shadow" }, _attrs))}><div class="stat">`);
  if (_ctx.$slots.icon) {
    _push(`<div class="stat-figure text-2xl">`);
    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="stat-title">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</div><div class="stat-value text-sm sm:text-lg text-balance">`);
  ssrRenderSlot(_ctx.$slots, "data", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/stat/StatInfoPublic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const StatInfoPP = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DebounceInputSearch",
  props: /* @__PURE__ */ mergeModels({
    disabled: { type: Boolean },
    placeholder: {},
    loading: { type: Boolean },
    customClass: {}
  }, {
    "value": { type: String, required: true },
    "valueModifiers": {}
  }),
  emits: ["update:value"],
  setup(__props, { expose: __expose }) {
    __expose();
    const value = useModel(__props, "value");
    const props = __props;
    const timer = ref(null);
    const normalize = (text) => text.normalize("NFD").replace(
      /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
      "$1"
    ).normalize();
    const onInput = (ev) => {
      const { value: busqueda } = ev.target;
      if (timer.value !== null) {
        clearTimeout(timer.value);
      }
      timer.value = window.setTimeout(() => {
        value.value = busqueda;
      }, 800);
    };
    const __returned__ = { value, props, timer, normalize, onInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<label${ssrRenderAttrs(mergeProps({ class: "input" }, _attrs))}><i class="bi bi-search"></i><input type="search" required${ssrRenderAttr("value", $setup.value)}${ssrRenderAttr("placeholder", $props.placeholder ?? "")}${ssrIncludeBooleanAttr($setup.props.disabled || $setup.props.loading) ? " disabled" : ""}></label>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/input/DebounceInputSearch.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DebounceInputSearch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "List",
  props: {
    data: {},
    keyTitle: {},
    keyEmpty: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({
    name: "list",
    class: "list bg-base-100 rounded-box shadow-sm overflow-hidden relative"
  }, _attrs))}><li class="p-4 pb-2 text-xs opacity-60 tracking-wide">`);
  ssrRenderSlot(_ctx.$slots, "titulo", {}, null, _push, _parent);
  _push(`</li>`);
  if (_ctx.$slots.row) {
    _push(`<!--[-->`);
    ssrRenderList($setup.props.data, (row) => {
      ssrRenderSlot(_ctx.$slots, "row", { data: row }, null, _push, _parent);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<li class="list-row"><div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"></div><div><div>Dio Lupa</div><div class="text-xs uppercase font-semibold opacity-60"> Remaining Reason </div></div><p class="list-col-wrap text-xs"> &quot;Remaining Reason&quot; became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa\u2019s most iconic tracks. </p><button class="btn btn-square btn-ghost"><svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg></button><button class="btn btn-square btn-ghost"><svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg></button></li>`);
  }
  if ($setup.props.data.length < 1) {
    if (_ctx.$slots.empty) {
      ssrRenderSlot(_ctx.$slots, "empty", {}, null, _push, _parent);
    } else {
      _push(`<li class="list-row"><div><i class="bi bi-emoji-frown-fill text-4xl"></i></div><div><div>Sin elementos</div></div><p class="list-col-wrap text-xs">No existen elementos.</p></li>`);
    }
  }
  _push(`</ul>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/list/List.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const List = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = {};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:px-20 lg:px-40 not-prose grid grid-cols-1 gap-2" }, _attrs))}><div><div class="h-10 w-30 skeleton"></div></div><div class="grid grid-cols-2"><div class="h-10 max-w-80 skeleton"></div><div class="h-10 w-23 skeleton place-self-end"></div></div><div><div class="h-[600px] w-full skeleton"></div></div><div class="h-5 w-30 skeleton place-self-end"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/placeholders/PlaceholderListPP.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const PlaceholderListPP = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { DebounceInputSearch as D, List as L, PlaceholderListPP as P, StatInfoPP as S };
