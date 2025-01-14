import { B as BaseStyle, A as resolveFieldData, C as focus, F as isPrintableCharacter, G as getFirstFocusableElement, H as getLastFocusableElement, N as equals, I as addStyle, J as relativePosition, u as getOuterWidth, K as absolutePosition, L as isTouchDevice, M as getFocusableElements, a as isNotEmpty, O as findLastIndex, f as findSingle, Q as FilterService, k as isEmpty } from './_@astro-renderers_BnjbwtTW.mjs';
import { g as script$4, c as script$5, U as UniqueComponentId, Z as ZIndex, O as OverlayEventBus, C as ConnectedOverlayScrollHandler, R as Ripple, f as script$6, h as script$7, i as script$8, d as script$9, j as script$a, k as script$b, l as script$c, m as script$d, n as script$e, o as script$f, p as script$g } from './index_DoPSSCG4.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot, createBlock, resolveDynamicComponent, createCommentVNode, toDisplayString, resolveComponent, resolveDirective, Fragment, createTextVNode, renderList, createVNode, normalizeClass, withCtx, Transition, normalizeProps, createSlots, withDirectives } from 'vue';

var script$3 = {
  name: 'TimesCircleIcon',
  "extends": script$4
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}

script$3.render = render$2;

var theme$1 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-chip {\n    display: inline-flex;\n    align-items: center;\n    background: ".concat(dt('chip.background'), ";\n    color: ").concat(dt('chip.color'), ";\n    border-radius: ").concat(dt('chip.border.radius'), ";\n    padding: ").concat(dt('chip.padding.y'), " ").concat(dt('chip.padding.x'), ";\n    gap: ").concat(dt('chip.gap'), ";\n}\n\n.p-chip-icon {\n    color: ").concat(dt('chip.icon.color'), ";\n    font-size: ").concat(dt('chip.icon.font.size'), ";\n    width: ").concat(dt('chip.icon.size'), ";\n    height: ").concat(dt('chip.icon.size'), ";\n}\n\n.p-chip-image {\n    border-radius: 50%;\n    width: ").concat(dt('chip.image.width'), ";\n    height: ").concat(dt('chip.image.height'), ";\n    margin-left: calc(-1 * ").concat(dt('chip.padding.y'), ");\n}\n\n.p-chip:has(.p-chip-remove-icon) {\n    padding-right: ").concat(dt('chip.padding.y'), ";\n}\n\n.p-chip:has(.p-chip-image) {\n    padding-top: calc(").concat(dt('chip.padding.y'), " / 2);\n    padding-bottom: calc(").concat(dt('chip.padding.y'), " / 2);\n}\n\n.p-chip-remove-icon {\n    cursor: pointer;\n    font-size: ").concat(dt('chip.remove.icon.size'), ";\n    width: ").concat(dt('chip.remove.icon.size'), ";\n    height: ").concat(dt('chip.remove.icon.size'), ";\n    color: ").concat(dt('chip.remove.icon.color'), ";\n    border-radius: 50%;\n    transition: outline-color ").concat(dt('chip.transition.duration'), ", box-shadow ").concat(dt('chip.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-chip-remove-icon:focus-visible {\n    box-shadow: ").concat(dt('chip.remove.icon.focus.ring.shadow'), ";\n    outline: ").concat(dt('chip.remove.icon.focus.ring.width'), " ").concat(dt('chip.remove.icon.focus.ring.style'), " ").concat(dt('chip.remove.icon.focus.ring.color'), ";\n    outline-offset: ").concat(dt('chip.remove.icon.focus.ring.offset'), ";\n}\n");
};
var classes$1 = {
  root: 'p-chip p-component',
  image: 'p-chip-image',
  icon: 'p-chip-icon',
  label: 'p-chip-label',
  removeIcon: 'p-chip-remove-icon'
};
var ChipStyle = BaseStyle.extend({
  name: 'chip',
  theme: theme$1,
  classes: classes$1
});

var script$1$1 = {
  name: 'BaseChip',
  "extends": script$5,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    image: {
      type: String,
      "default": null
    },
    removable: {
      type: Boolean,
      "default": false
    },
    removeIcon: {
      type: String,
      "default": undefined
    }
  },
  style: ChipStyle,
  provide: function provide() {
    return {
      $pcChip: this,
      $parentInstance: this
    };
  }
};

var script$2 = {
  name: 'Chip',
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ['remove'],
  data: function data() {
    return {
      visible: true
    };
  },
  methods: {
    onKeydown: function onKeydown(event) {
      if (event.key === 'Enter' || event.key === 'Backspace') {
        this.close(event);
      }
    },
    close: function close(event) {
      this.visible = false;
      this.$emit('remove', event);
    }
  },
  components: {
    TimesCircleIcon: script$3
  }
};

var _hoisted_1$1 = ["aria-label"];
var _hoisted_2$1 = ["src"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.visible ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx('root'),
    "aria-label": _ctx.label
  }, _ctx.ptmi('root')), [renderSlot(_ctx.$slots, "default", {}, function () {
    return [_ctx.image ? (openBlock(), createElementBlock("img", mergeProps({
      key: 0,
      src: _ctx.image
    }, _ctx.ptm('image'), {
      "class": _ctx.cx('image')
    }), null, 16, _hoisted_2$1)) : _ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), mergeProps({
      key: 1,
      "class": _ctx.cx('icon')
    }, _ctx.ptm('icon')), null, 16, ["class"])) : _ctx.icon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx('icon'), _ctx.icon]
    }, _ctx.ptm('icon')), null, 16)) : createCommentVNode("", true), _ctx.label ? (openBlock(), createElementBlock("div", mergeProps({
      key: 3,
      "class": _ctx.cx('label')
    }, _ctx.ptm('label')), toDisplayString(_ctx.label), 17)) : createCommentVNode("", true)];
  }), _ctx.removable ? renderSlot(_ctx.$slots, "removeicon", {
    key: 0,
    removeCallback: $options.close,
    keydownCallback: $options.onKeydown
  }, function () {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.removeIcon ? 'span' : 'TimesCircleIcon'), mergeProps({
      tabindex: "0",
      "class": [_ctx.cx('removeIcon'), _ctx.removeIcon],
      onClick: $options.close,
      onKeydown: $options.onKeydown
    }, _ctx.ptm('removeIcon')), null, 16, ["class", "onClick", "onKeydown"]))];
  }) : createCommentVNode("", true)], 16, _hoisted_1$1)) : createCommentVNode("", true);
}

script$2.render = render$1;

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-multiselect {\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n    background: ".concat(dt('multiselect.background'), ";\n    border: 1px solid ").concat(dt('multiselect.border.color'), ";\n    transition: background ").concat(dt('multiselect.transition.duration'), ", color ").concat(dt('multiselect.transition.duration'), ", border-color ").concat(dt('multiselect.transition.duration'), ", outline-color ").concat(dt('multiselect.transition.duration'), ", box-shadow ").concat(dt('multiselect.transition.duration'), ";\n    border-radius: ").concat(dt('multiselect.border.radius'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('multiselect.shadow'), ";\n}\n\n.p-multiselect:not(.p-disabled):hover {\n    border-color: ").concat(dt('multiselect.hover.border.color'), ";\n}\n\n.p-multiselect:not(.p-disabled).p-focus {\n    border-color: ").concat(dt('multiselect.focus.border.color'), ";\n    box-shadow: ").concat(dt('multiselect.focus.ring.shadow'), ";\n    outline: ").concat(dt('multiselect.focus.ring.width'), " ").concat(dt('multiselect.focus.ring.style'), " ").concat(dt('multiselect.focus.ring.color'), ";\n    outline-offset: ").concat(dt('multiselect.focus.ring.offset'), ";\n}\n\n.p-multiselect.p-variant-filled {\n    background: ").concat(dt('multiselect.filled.background'), ";\n}\n\n.p-multiselect.p-variant-filled:not(.p-disabled):hover {\n    background: ").concat(dt('multiselect.filled.hover.background'), ";\n}\n\n.p-multiselect.p-variant-filled.p-focus {\n    background: ").concat(dt('multiselect.filled.focus.background'), ";\n}\n\n.p-multiselect.p-invalid {\n    border-color: ").concat(dt('multiselect.invalid.border.color'), ";\n}\n\n.p-multiselect.p-disabled {\n    opacity: 1;\n    background: ").concat(dt('multiselect.disabled.background'), ";\n}\n\n.p-multiselect-dropdown {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    background: transparent;\n    color: ").concat(dt('multiselect.dropdown.color'), ";\n    width: ").concat(dt('multiselect.dropdown.width'), ";\n    border-top-right-radius: ").concat(dt('multiselect.border.radius'), ";\n    border-bottom-right-radius: ").concat(dt('multiselect.border.radius'), ";\n}\n\n.p-multiselect-label-container {\n    overflow: hidden;\n    flex: 1 1 auto;\n    cursor: pointer;\n}\n\n.p-multiselect-label {\n    display: flex;\n    align-items-center;\n    gap: calc(").concat(dt('multiselect.padding.y'), " / 2);\n    white-space: nowrap;\n    cursor: pointer;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: ").concat(dt('multiselect.padding.y'), " ").concat(dt('multiselect.padding.x'), ";\n    color: ").concat(dt('multiselect.color'), ";\n}\n\n.p-multiselect-label.p-placeholder {\n    color: ").concat(dt('multiselect.placeholder.color'), ";\n}\n\n.p-multiselect.p-disabled .p-multiselect-label {\n    color: ").concat(dt('multiselect.disabled.color'), ";\n}\n\n.p-multiselect-label-empty {\n    overflow: hidden;\n    visibility: hidden;\n}\n\n.p-multiselect .p-multiselect-overlay {\n    min-width: 100%;\n}\n\n.p-multiselect-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ").concat(dt('multiselect.overlay.background'), ";\n    color: ").concat(dt('multiselect.overlay.color'), ";\n    border: 1px solid ").concat(dt('multiselect.overlay.border.color'), ";\n    border-radius: ").concat(dt('multiselect.overlay.border.radius'), ";\n    box-shadow: ").concat(dt('multiselect.overlay.shadow'), ";\n}\n\n.p-multiselect-header {\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt('multiselect.list.header.padding'), ";\n}\n\n.p-multiselect-header .p-checkbox {\n    margin-right: ").concat(dt('multiselect.option.gap'), ";\n}\n\n.p-multiselect-filter-container {\n    flex: 1 1 auto;\n}\n\n.p-multiselect-filter {\n    width: 100%;\n}\n\n.p-multiselect-list-container {\n    overflow: auto;\n}\n\n.p-multiselect-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    padding: ").concat(dt('multiselect.list.padding'), ";\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('multiselect.list.gap'), "\n}\n\n.p-multiselect-option {\n    cursor: pointer;\n    font-weight: normal;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt('multiselect.option.gap'), ";\n    padding: ").concat(dt('multiselect.option.padding'), ";\n    border: 0 none;\n    color: ").concat(dt('multiselect.option.color'), ";\n    background: transparent;\n    transition: background ").concat(dt('multiselect.transition.duration'), ", color ").concat(dt('multiselect.transition.duration'), ", border-color ").concat(dt('multiselect.transition.duration'), ", box-shadow ").concat(dt('multiselect.transition.duration'), ", outline-color ").concat(dt('multiselect.transition.duration'), ";\n    border-radius: ").concat(dt('multiselect.option.border.radius'), "\n}\n\n.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {\n    background: ").concat(dt('multiselect.option.focus.background'), ";\n    color: ").concat(dt('multiselect.option.focus.color'), ";\n}\n\n.p-multiselect-option.p-multiselect-option-selected {\n    background: ").concat(dt('multiselect.option.selected.background'), ";\n    color: ").concat(dt('multiselect.option.selected.color'), ";\n}\n\n.p-multiselect-option.p-multiselect-option-selected.p-focus {\n    background: ").concat(dt('multiselect.option.selected.focus.background'), ";\n    color: ").concat(dt('multiselect.option.selected.focus.color'), ";\n}\n\n.p-multiselect-option-group {\n    cursor: auto;\n    margin: 0;\n    padding: ").concat(dt('multiselect.option.group.padding'), ";\n    background: ").concat(dt('multiselect.option.group.background'), ";\n    color: ").concat(dt('multiselect.option.group.color'), ";\n    font-weight: ").concat(dt('multiselect.option.group.font.weight'), ";\n}\n\n.p-multiselect-empty-message {\n    padding: ").concat(dt('multiselect.empty.message.padding'), ";\n}\n\n.p-multiselect-label .p-chip {\n    padding-top: calc(").concat(dt('multiselect.padding.y'), " / 2);\n    padding-bottom: calc(").concat(dt('multiselect.padding.y'), " / 2);\n    border-radius: ").concat(dt('multiselect.chip.border.radius'), ";\n}\n\n.p-multiselect-label:has(.p-chip) {\n    padding: calc(").concat(dt('multiselect.padding.y'), " / 2) calc(").concat(dt('multiselect.padding.x'), " / 2);\n}\n\n.p-multiselect-fluid {\n    display: flex;\n}\n");
};
var inlineStyles = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes = {
  root: function root(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-multiselect p-component p-inputwrapper', {
      'p-multiselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': props.modelValue && props.modelValue.length,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-multiselect-open': instance.overlayVisible,
      'p-multiselect-fluid': instance.hasFluid
    }];
  },
  labelContainer: 'p-multiselect-label-container',
  label: function label(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props;
    return ['p-multiselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-multiselect-label-empty': !props.placeholder && (!props.modelValue || props.modelValue.length === 0)
    }];
  },
  chipItem: 'p-multiselect-chip-item',
  pcChip: 'p-multiselect-chip',
  chipIcon: 'p-multiselect-chip-icon',
  dropdown: 'p-multiselect-dropdown',
  loadingIcon: 'p-multiselect-loading-icon',
  dropdownIcon: 'p-multiselect-dropdown-icon',
  overlay: 'p-multiselect-overlay p-component',
  header: 'p-multiselect-header',
  pcFilterContainer: 'p-multiselect-filter-container',
  pcFilter: 'p-multiselect-filter',
  listContainer: 'p-multiselect-list-container',
  list: 'p-multiselect-list',
  optionGroup: 'p-multiselect-option-group',
  option: function option(_ref5) {
    var instance = _ref5.instance,
      _option = _ref5.option,
      index = _ref5.index,
      getItemOptions = _ref5.getItemOptions,
      props = _ref5.props;
    return ['p-multiselect-option', {
      'p-multiselect-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-multiselect-empty-message'
};
var MultiSelectStyle = BaseStyle.extend({
  name: 'multiselect',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

var script$1 = {
  name: 'BaseMultiSelect',
  "extends": script$5,
  props: {
    modelValue: null,
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      "default": '14rem'
    },
    placeholder: String,
    variant: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    fluid: {
      type: Boolean,
      "default": null
    },
    inputId: {
      type: String,
      "default": null
    },
    panelClass: {
      type: String,
      "default": null
    },
    panelStyle: {
      type: null,
      "default": null
    },
    overlayClass: {
      type: String,
      "default": null
    },
    overlayStyle: {
      type: null,
      "default": null
    },
    dataKey: null,
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
      type: String,
      "default": 'contains'
    },
    filterFields: {
      type: Array,
      "default": null
    },
    appendTo: {
      type: [String, Object],
      "default": 'body'
    },
    display: {
      type: String,
      "default": 'comma'
    },
    selectedItemsLabel: {
      type: String,
      "default": null
    },
    maxSelectedLabels: {
      type: Number,
      "default": null
    },
    selectionLimit: {
      type: Number,
      "default": null
    },
    showToggleAll: {
      type: Boolean,
      "default": true
    },
    loading: {
      type: Boolean,
      "default": false
    },
    checkboxIcon: {
      type: String,
      "default": undefined
    },
    dropdownIcon: {
      type: String,
      "default": undefined
    },
    filterIcon: {
      type: String,
      "default": undefined
    },
    loadingIcon: {
      type: String,
      "default": undefined
    },
    removeTokenIcon: {
      type: String,
      "default": undefined
    },
    chipIcon: {
      type: String,
      "default": undefined
    },
    selectAll: {
      type: Boolean,
      "default": null
    },
    resetFilterOnHide: {
      type: Boolean,
      "default": false
    },
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    autoOptionFocus: {
      type: Boolean,
      "default": false
    },
    autoFilterFocus: {
      type: Boolean,
      "default": false
    },
    focusOnHover: {
      type: Boolean,
      "default": true
    },
    highlightOnSelect: {
      type: Boolean,
      "default": false
    },
    filterMessage: {
      type: String,
      "default": null
    },
    selectionMessage: {
      type: String,
      "default": null
    },
    emptySelectionMessage: {
      type: String,
      "default": null
    },
    emptyFilterMessage: {
      type: String,
      "default": null
    },
    emptyMessage: {
      type: String,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    }
  },
  style: MultiSelectStyle,
  provide: function provide() {
    return {
      $pcMultiSelect: this,
      $parentInstance: this
    };
  }
};

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$1(e, r, t) { return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var script = {
  name: 'MultiSelect',
  "extends": script$1,
  inheritAttrs: false,
  emits: ['update:modelValue', 'change', 'focus', 'blur', 'before-show', 'before-hide', 'show', 'hide', 'filter', 'selectall-change'],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  startRangeIndex: -1,
  searchTimeout: null,
  searchValue: '',
  selectOnFocus: false,
  data: function data() {
    return {
      id: this.$attrs.id,
      clicked: false,
      focused: false,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: false
    };
  },
  watch: {
    '$attrs.id': function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    options: function options() {
      this.autoUpdateModel();
    }
  },
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      ZIndex.clear(this.overlay);
      this.overlay = null;
    }
  },
  methods: {
    getOptionIndex: function getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)['index'];
    },
    getOptionLabel: function getOptionLabel(option) {
      return this.optionLabel ? resolveFieldData(option, this.optionLabel) : option;
    },
    getOptionValue: function getOptionValue(option) {
      return this.optionValue ? resolveFieldData(option, this.optionValue) : option;
    },
    getOptionRenderKey: function getOptionRenderKey(option, index) {
      return this.dataKey ? resolveFieldData(option, this.dataKey) : this.getOptionLabel(option) + "_".concat(index);
    },
    getHeaderCheckboxPTOptions: function getHeaderCheckboxPTOptions(key) {
      return this.ptm(key, {
        context: {
          selected: this.allSelected
        }
      });
    },
    getCheckboxPTOptions: function getCheckboxPTOptions(option, itemOptions, index, key) {
      return this.ptm(key, {
        context: {
          selected: this.isSelected(option),
          focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
          disabled: this.isOptionDisabled(option)
        }
      });
    },
    isOptionDisabled: function isOptionDisabled(option) {
      if (this.maxSelectionLimitReached && !this.isSelected(option)) {
        return true;
      }
      return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : false;
    },
    isOptionGroup: function isOptionGroup(option) {
      return this.optionGroupLabel && option.optionGroup && option.group;
    },
    getOptionGroupLabel: function getOptionGroupLabel(optionGroup) {
      return resolveFieldData(optionGroup, this.optionGroupLabel);
    },
    getOptionGroupChildren: function getOptionGroupChildren(optionGroup) {
      return resolveFieldData(optionGroup, this.optionGroupChildren);
    },
    getAriaPosInset: function getAriaPosInset(index) {
      var _this = this;
      return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter(function (option) {
        return _this.isOptionGroup(option);
      }).length : index) + 1;
    },
    show: function show(isFocus) {
      this.$emit('before-show');
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
      isFocus && focus(this.$refs.focusInput);
    },
    hide: function hide(isFocus) {
      var _this2 = this;
      var _hide = function _hide() {
        _this2.$emit('before-hide');
        _this2.overlayVisible = false;
        _this2.clicked = false;
        _this2.focusedOptionIndex = -1;
        _this2.searchValue = '';
        _this2.resetFilterOnHide && (_this2.filterValue = null);
        isFocus && focus(_this2.$refs.focusInput);
      };
      setTimeout(function () {
        _hide();
      }, 0); // For ScreenReaders
    },
    onFocus: function onFocus(event) {
      if (this.disabled) {
        // For ScreenReaders
        return;
      }
      this.focused = true;
      if (this.overlayVisible) {
        this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
        this.scrollInView(this.focusedOptionIndex);
      }
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.clicked = false;
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.searchValue = '';
      this.$emit('blur', event);
    },
    onKeyDown: function onKeyDown(event) {
      var _this3 = this;
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        case 'PageDown':
          this.onPageDownKey(event);
          break;
        case 'PageUp':
          this.onPageUpKey(event);
          break;
        case 'Enter':
        case 'NumpadEnter':
        case 'Space':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.onShiftKey(event);
          break;
        default:
          if (event.code === 'KeyA' && metaKey) {
            var value = this.visibleOptions.filter(function (option) {
              return _this3.isValidOption(option);
            }).map(function (option) {
              return _this3.getOptionValue(option);
            });
            this.updateModel(event, value);
            event.preventDefault();
            break;
          }
          if (!metaKey && isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            this.searchOptions(event);
            event.preventDefault();
          }
          break;
      }
      this.clicked = false;
    },
    onContainerClick: function onContainerClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      if (!this.overlay || !this.overlay.contains(event.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
      this.clicked = true;
    },
    onFirstHiddenFocus: function onFirstHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? getFirstFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      focus(focusableEl);
    },
    onLastHiddenFocus: function onLastHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? getLastFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      focus(focusableEl);
    },
    onOptionSelect: function onOptionSelect(event, option) {
      var _this4 = this;
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var isFocus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (this.disabled || this.isOptionDisabled(option)) {
        return;
      }
      var selected = this.isSelected(option);
      var value = null;
      if (selected) value = this.modelValue.filter(function (val) {
        return !equals(val, _this4.getOptionValue(option), _this4.equalityKey);
      });else value = [].concat(_toConsumableArray(this.modelValue || []), [this.getOptionValue(option)]);
      this.updateModel(event, value);
      index !== -1 && (this.focusedOptionIndex = index);
      isFocus && focus(this.$refs.focusInput);
    },
    onOptionMouseMove: function onOptionMouseMove(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    },
    onOptionSelectRange: function onOptionSelectRange(event) {
      var _this5 = this;
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
      end === -1 && (end = this.findNearestSelectedOptionIndex(start));
      if (start !== -1 && end !== -1) {
        var rangeStart = Math.min(start, end);
        var rangeEnd = Math.max(start, end);
        var value = this.visibleOptions.slice(rangeStart, rangeEnd + 1).filter(function (option) {
          return _this5.isValidOption(option);
        }).map(function (option) {
          return _this5.getOptionValue(option);
        });
        this.updateModel(event, value);
      }
    },
    onFilterChange: function onFilterChange(event) {
      var value = event.target.value;
      this.filterValue = value;
      this.focusedOptionIndex = -1;
      this.$emit('filter', {
        originalEvent: event,
        value: value
      });
      !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown: function onFilterKeyDown(event) {
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event, true);
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          this.onArrowLeftKey(event, true);
          break;
        case 'Home':
          this.onHomeKey(event, true);
          break;
        case 'End':
          this.onEndKey(event, true);
          break;
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event, true);
          break;
      }
    },
    onFilterBlur: function onFilterBlur() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated: function onFilterUpdated() {
      if (this.overlayVisible) {
        this.alignOverlay();
      }
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit('overlay-click', {
        originalEvent: event,
        target: this.$el
      });
    },
    onOverlayKeyDown: function onOverlayKeyDown(event) {
      switch (event.code) {
        case 'Escape':
          this.onEscapeKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      if (!this.overlayVisible) {
        this.show();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        if (event.shiftKey) {
          this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (event.altKey && !pressedInInputText) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        if (event.shiftKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      pressedInInputText && (this.focusedOptionIndex = -1);
    },
    onHomeKey: function onHomeKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (pressedInInputText) {
        var target = event.currentTarget;
        if (event.shiftKey) {
          target.setSelectionRange(0, event.target.selectionStart);
        } else {
          target.setSelectionRange(0, 0);
          this.focusedOptionIndex = -1;
        }
      } else {
        var metaKey = event.metaKey || event.ctrlKey;
        var optionIndex = this.findFirstOptionIndex();
        if (event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (pressedInInputText) {
        var target = event.currentTarget;
        if (event.shiftKey) {
          target.setSelectionRange(event.target.selectionStart, target.value.length);
        } else {
          var len = target.value.length;
          target.setSelectionRange(len, len);
          this.focusedOptionIndex = -1;
        }
      } else {
        var metaKey = event.metaKey || event.ctrlKey;
        var optionIndex = this.findLastOptionIndex();
        if (event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onPageUpKey: function onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    },
    onPageDownKey: function onPageDownKey(event) {
      this.scrollInView(this.visibleOptions.length - 1);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (!this.overlayVisible) {
        this.focusedOptionIndex = -1; // reset
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionIndex !== -1) {
          if (event.shiftKey) this.onOptionSelectRange(event, this.focusedOptionIndex);else this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
      }
      event.preventDefault();
    },
    onEscapeKey: function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          focus(event.shiftKey ? this.$refs.lastHiddenFocusableElementOnOverlay : this.$refs.firstHiddenFocusableElementOnOverlay);
          event.preventDefault();
        } else {
          if (this.focusedOptionIndex !== -1) {
            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
    },
    onShiftKey: function onShiftKey() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onOverlayEnter: function onOverlayEnter(el) {
      ZIndex.set('overlay', el, this.$primevue.config.zIndex.overlay);
      addStyle(el, {
        position: 'absolute',
        top: '0',
        left: '0'
      });
      this.alignOverlay();
      this.scrollInView();
      this.autoFilterFocus && focus(this.$refs.filterInput.$el);
    },
    onOverlayAfterEnter: function onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit('show');
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit('hide');
      this.overlay = null;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndex.clear(el);
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo === 'self') {
        relativePosition(this.overlay, this.$el);
      } else {
        this.overlay.style.minWidth = getOuterWidth(this.$el) + 'px';
        absolutePosition(this.overlay, this.$el);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this6 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this6.overlayVisible && _this6.isOutsideClicked(event)) {
            _this6.hide();
          }
        };
        document.addEventListener('click', this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this7 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function () {
          if (_this7.overlayVisible) {
            _this7.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this8 = this;
      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this8.overlayVisible && !isTouchDevice()) {
            _this8.hide();
          }
        };
        window.addEventListener('resize', this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    },
    isOutsideClicked: function isOutsideClicked(event) {
      return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target) || this.overlay && this.overlay.contains(event.target));
    },
    getLabelByValue: function getLabelByValue(value) {
      var _this9 = this;
      var options = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      var matchedOption = options.find(function (option) {
        return !_this9.isOptionGroup(option) && equals(_this9.getOptionValue(option), value, _this9.equalityKey);
      });
      return matchedOption ? this.getOptionLabel(matchedOption) : null;
    },
    getSelectedItemsLabel: function getSelectedItemsLabel() {
      var pattern = /{(.*?)}/;
      var selectedItemsLabel = this.selectedItemsLabel || this.$primevue.config.locale.selectionMessage;
      if (pattern.test(selectedItemsLabel)) {
        return selectedItemsLabel.replace(selectedItemsLabel.match(pattern)[0], this.modelValue.length + '');
      }
      return selectedItemsLabel;
    },
    onToggleAll: function onToggleAll(event) {
      var _this10 = this;
      if (this.selectAll !== null) {
        this.$emit('selectall-change', {
          originalEvent: event,
          checked: !this.allSelected
        });
      } else {
        var value = this.allSelected ? [] : this.visibleOptions.filter(function (option) {
          return _this10.isValidOption(option);
        }).map(function (option) {
          return _this10.getOptionValue(option);
        });
        this.updateModel(event, value);
      }
    },
    removeOption: function removeOption(event, optionValue) {
      var _this11 = this;
      event.stopPropagation();
      var value = this.modelValue.filter(function (val) {
        return !equals(val, optionValue, _this11.equalityKey);
      });
      this.updateModel(event, value);
    },
    clearFilter: function clearFilter() {
      this.filterValue = null;
    },
    hasFocusableElements: function hasFocusableElements() {
      return getFocusableElements(this.overlay, ':not([data-p-hidden-focusable="true"])').length > 0;
    },
    isOptionMatched: function isOptionMatched(option) {
      var _this$getOptionLabel;
      return this.isValidOption(option) && typeof this.getOptionLabel(option) === 'string' && ((_this$getOptionLabel = this.getOptionLabel(option)) === null || _this$getOptionLabel === void 0 ? void 0 : _this$getOptionLabel.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)));
    },
    isValidOption: function isValidOption(option) {
      return isNotEmpty(option) && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    },
    isValidSelectedOption: function isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    },
    isEquals: function isEquals(value1, value2) {
      return equals(value1, value2, this.equalityKey);
    },
    isSelected: function isSelected(option) {
      var _this12 = this;
      var optionValue = this.getOptionValue(option);
      return (this.modelValue || []).some(function (value) {
        return _this12.isEquals(value, optionValue);
      });
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this13 = this;
      return this.visibleOptions.findIndex(function (option) {
        return _this13.isValidOption(option);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this14 = this;
      return findLastIndex(this.visibleOptions, function (option) {
        return _this14.isValidOption(option);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var _this15 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function (option) {
        return _this15.isValidOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var _this16 = this;
      var matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), function (option) {
        return _this16.isValidOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex: function findSelectedOptionIndex() {
      var _this17 = this;
      if (this.hasSelectedOption) {
        var _loop = function _loop() {
            var value = _this17.modelValue[index];
            var matchedOptionIndex = _this17.visibleOptions.findIndex(function (option) {
              return _this17.isValidSelectedOption(option) && _this17.isEquals(value, _this17.getOptionValue(option));
            });
            if (matchedOptionIndex > -1) return {
              v: matchedOptionIndex
            };
          },
          _ret;
        for (var index = this.modelValue.length - 1; index >= 0; index--) {
          _ret = _loop();
          if (_ret) return _ret.v;
        }
      }
      return -1;
    },
    findFirstSelectedOptionIndex: function findFirstSelectedOptionIndex() {
      var _this18 = this;
      return this.hasSelectedOption ? this.visibleOptions.findIndex(function (option) {
        return _this18.isValidSelectedOption(option);
      }) : -1;
    },
    findLastSelectedOptionIndex: function findLastSelectedOptionIndex() {
      var _this19 = this;
      return this.hasSelectedOption ? findLastIndex(this.visibleOptions, function (option) {
        return _this19.isValidSelectedOption(option);
      }) : -1;
    },
    findNextSelectedOptionIndex: function findNextSelectedOptionIndex(index) {
      var _this20 = this;
      var matchedOptionIndex = this.hasSelectedOption && index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function (option) {
        return _this20.isValidSelectedOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
    },
    findPrevSelectedOptionIndex: function findPrevSelectedOptionIndex(index) {
      var _this21 = this;
      var matchedOptionIndex = this.hasSelectedOption && index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), function (option) {
        return _this21.isValidSelectedOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
    },
    findNearestSelectedOptionIndex: function findNearestSelectedOptionIndex(index) {
      var firstCheckUp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var matchedOptionIndex = -1;
      if (this.hasSelectedOption) {
        if (firstCheckUp) {
          matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
        } else {
          matchedOptionIndex = this.findNextSelectedOptionIndex(index);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
        }
      }
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findFirstFocusedOptionIndex: function findFirstFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex: function findLastFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    searchOptions: function searchOptions(event) {
      var _this22 = this;
      this.searchValue = (this.searchValue || '') + event.key;
      var optionIndex = -1;
      if (isNotEmpty(this.searchValue)) {
        if (this.focusedOptionIndex !== -1) {
          optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function (option) {
            return _this22.isOptionMatched(option);
          });
          optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex(function (option) {
            return _this22.isOptionMatched(option);
          }) : optionIndex + this.focusedOptionIndex;
        } else {
          optionIndex = this.visibleOptions.findIndex(function (option) {
            return _this22.isOptionMatched(option);
          });
        }
        if (optionIndex === -1 && this.focusedOptionIndex === -1) {
          optionIndex = this.findFirstFocusedOptionIndex();
        }
        if (optionIndex !== -1) {
          this.changeFocusedOptionIndex(event, optionIndex);
        }
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function () {
        _this22.searchValue = '';
        _this22.searchTimeout = null;
      }, 500);
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index;
        this.scrollInView();
        if (this.selectOnFocus) {
          this.onOptionSelect(event, this.visibleOptions[index]);
        }
      }
    },
    scrollInView: function scrollInView() {
      var _this23 = this;
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      this.$nextTick(function () {
        var id = index !== -1 ? "".concat(_this23.id, "_").concat(index) : _this23.focusedOptionId;
        var element = findSingle(_this23.list, "li[id=\"".concat(id, "\"]"));
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: 'nearest',
            inline: 'nearest'
          });
        } else if (!_this23.virtualScrollerDisabled) {
          _this23.virtualScroller && _this23.virtualScroller.scrollToIndex(index !== -1 ? index : _this23.focusedOptionIndex);
        }
      });
    },
    autoUpdateModel: function autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        var value = this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);
        this.updateModel(null, [value]);
      }
    },
    updateModel: function updateModel(event, value) {
      this.$emit('update:modelValue', value);
      this.$emit('change', {
        originalEvent: event,
        value: value
      });
    },
    flatOptions: function flatOptions(options) {
      var _this24 = this;
      return (options || []).reduce(function (result, option, index) {
        result.push({
          optionGroup: option,
          group: true,
          index: index
        });
        var optionGroupChildren = _this24.getOptionGroupChildren(option);
        optionGroupChildren && optionGroupChildren.forEach(function (o) {
          return result.push(o);
        });
        return result;
      }, []);
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    listRef: function listRef(el, contentRef) {
      this.list = el;
      contentRef && contentRef(el); // For VirtualScroller
    },
    virtualScrollerRef: function virtualScrollerRef(el) {
      this.virtualScroller = el;
    }
  },
  computed: {
    visibleOptions: function visibleOptions() {
      var _this25 = this;
      var options = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        var filteredOptions = FilterService.filter(options, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          var optionGroups = this.options || [];
          var filtered = [];
          optionGroups.forEach(function (group) {
            var groupChildren = _this25.getOptionGroupChildren(group);
            var filteredItems = groupChildren.filter(function (item) {
              return filteredOptions.includes(item);
            });
            if (filteredItems.length > 0) filtered.push(_objectSpread(_objectSpread({}, group), {}, _defineProperty$1({}, typeof _this25.optionGroupChildren === 'string' ? _this25.optionGroupChildren : 'items', _toConsumableArray(filteredItems))));
          });
          return this.flatOptions(filtered);
        }
        return filteredOptions;
      }
      return options;
    },
    label: function label() {
      // TODO: Refactor
      var label;
      if (this.modelValue && this.modelValue.length) {
        if (isNotEmpty(this.maxSelectedLabels) && this.modelValue.length > this.maxSelectedLabels) {
          return this.getSelectedItemsLabel();
        } else {
          label = '';
          for (var i = 0; i < this.modelValue.length; i++) {
            if (i !== 0) {
              label += ', ';
            }
            label += this.getLabelByValue(this.modelValue[i]);
          }
        }
      } else {
        label = this.placeholder;
      }
      return label;
    },
    chipSelectedItems: function chipSelectedItems() {
      return isNotEmpty(this.maxSelectedLabels) && this.modelValue && this.modelValue.length > this.maxSelectedLabels;
    },
    allSelected: function allSelected() {
      var _this26 = this;
      return this.selectAll !== null ? this.selectAll : isNotEmpty(this.visibleOptions) && this.visibleOptions.every(function (option) {
        return _this26.isOptionGroup(option) || _this26.isOptionDisabled(option) || _this26.isSelected(option);
      });
    },
    hasSelectedOption: function hasSelectedOption() {
      return isNotEmpty(this.modelValue);
    },
    equalityKey: function equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields: function searchFields() {
      return this.filterFields || [this.optionLabel];
    },
    maxSelectionLimitReached: function maxSelectionLimitReached() {
      return this.selectionLimit && this.modelValue && this.modelValue.length === this.selectionLimit;
    },
    filterResultMessageText: function filterResultMessageText() {
      return isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll('{0}', this.visibleOptions.length) : this.emptyFilterMessageText;
    },
    filterMessageText: function filterMessageText() {
      return this.filterMessage || this.$primevue.config.locale.searchMessage || '';
    },
    emptyFilterMessageText: function emptyFilterMessageText() {
      return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || '';
    },
    emptyMessageText: function emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || '';
    },
    selectionMessageText: function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || '';
    },
    emptySelectionMessageText: function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || '';
    },
    selectedMessageText: function selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll('{0}', this.modelValue.length) : this.emptySelectionMessageText;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.id, "_").concat(this.focusedOptionIndex) : null;
    },
    ariaSetSize: function ariaSetSize() {
      var _this27 = this;
      return this.visibleOptions.filter(function (option) {
        return !_this27.isOptionGroup(option);
      }).length;
    },
    toggleAllAriaLabel: function toggleAllAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria[this.allSelected ? 'selectAll' : 'unselectAll'] : undefined;
    },
    listAriaLabel: function listAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : undefined;
    },
    virtualScrollerDisabled: function virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    },
    hasFluid: function hasFluid() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    InputText: script$6,
    Checkbox: script$7,
    VirtualScroller: script$8,
    Portal: script$9,
    Chip: script$2,
    IconField: script$a,
    InputIcon: script$b,
    TimesIcon: script$c,
    SearchIcon: script$d,
    ChevronDownIcon: script$e,
    SpinnerIcon: script$f,
    CheckIcon: script$g
  }
};

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _hoisted_1 = ["id", "disabled", "placeholder", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = ["id", "aria-label"];
var _hoisted_4 = ["id"];
var _hoisted_5 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Chip = resolveComponent("Chip");
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_Checkbox = resolveComponent("Checkbox");
  var _component_InputText = resolveComponent("InputText");
  var _component_SearchIcon = resolveComponent("SearchIcon");
  var _component_InputIcon = resolveComponent("InputIcon");
  var _component_IconField = resolveComponent("IconField");
  var _component_VirtualScroller = resolveComponent("VirtualScroller");
  var _component_Portal = resolveComponent("Portal");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx('root'),
    style: _ctx.sx('root'),
    onClick: _cache[7] || (_cache[7] = function () {
      return $options.onContainerClick && $options.onContainerClick.apply($options, arguments);
    })
  }, _ctx.ptmi('root')), [createElementVNode("div", mergeProps({
    "class": "p-hidden-accessible"
  }, _ctx.ptm('hiddenInputContainer'), {
    "data-p-hidden-accessible": true
  }), [createElementVNode("input", mergeProps({
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    readonly: "",
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.id + '_list',
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : undefined,
    "aria-invalid": _ctx.invalid || undefined,
    onFocus: _cache[0] || (_cache[0] = function () {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function () {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function () {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _ctx.ptm('hiddenInput')), null, 16, _hoisted_1)], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx('labelContainer')
  }, _ctx.ptm('labelContainer')), [createElementVNode("div", mergeProps({
    "class": _ctx.cx('label')
  }, _ctx.ptm('label')), [renderSlot(_ctx.$slots, "value", {
    value: _ctx.modelValue,
    placeholder: _ctx.placeholder
  }, function () {
    return [_ctx.display === 'comma' ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createTextVNode(toDisplayString($options.label || 'empty'), 1)], 64)) : _ctx.display === 'chip' ? (openBlock(), createElementBlock(Fragment, {
      key: 1
    }, [$options.chipSelectedItems ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString($options.label), 1)) : (openBlock(true), createElementBlock(Fragment, {
      key: 1
    }, renderList(_ctx.modelValue, function (item) {
      return openBlock(), createElementBlock("span", mergeProps({
        key: $options.getLabelByValue(item),
        "class": _ctx.cx('chipItem'),
        ref_for: true
      }, _ctx.ptm('chipItem')), [renderSlot(_ctx.$slots, "chip", {
        value: item,
        removeCallback: function removeCallback(event) {
          return $options.removeOption(event, item);
        }
      }, function () {
        return [createVNode(_component_Chip, {
          "class": normalizeClass(_ctx.cx('pcChip')),
          label: $options.getLabelByValue(item),
          removeIcon: _ctx.chipIcon || _ctx.removeTokenIcon,
          removable: "",
          unstyled: _ctx.unstyled,
          onRemove: function onRemove($event) {
            return $options.removeOption($event, item);
          },
          pt: _ctx.ptm('pcChip')
        }, {
          removeicon: withCtx(function () {
            return [renderSlot(_ctx.$slots, _ctx.$slots.chipicon ? 'chipicon' : 'removetokenicon', {
              "class": normalizeClass(_ctx.cx('chipIcon')),
              item: item,
              removeCallback: function removeCallback(event) {
                return $options.removeOption(event, item);
              }
            })];
          }),
          _: 2
        }, 1032, ["class", "label", "removeIcon", "unstyled", "onRemove", "pt"])];
      })], 16);
    }), 128)), !_ctx.modelValue || _ctx.modelValue.length === 0 ? (openBlock(), createElementBlock(Fragment, {
      key: 2
    }, [createTextVNode(toDisplayString(_ctx.placeholder || 'empty'), 1)], 64)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)];
  })], 16)], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx('dropdown')
  }, _ctx.ptm('dropdown')), [_ctx.loading ? renderSlot(_ctx.$slots, "loadingicon", {
    key: 0,
    "class": normalizeClass(_ctx.cx('loadingIcon'))
  }, function () {
    return [_ctx.loadingIcon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": [_ctx.cx('loadingIcon'), 'pi-spin', _ctx.loadingIcon],
      "aria-hidden": "true"
    }, _ctx.ptm('loadingIcon')), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      "class": _ctx.cx('loadingIcon'),
      spin: "",
      "aria-hidden": "true"
    }, _ctx.ptm('loadingIcon')), null, 16, ["class"]))];
  }) : renderSlot(_ctx.$slots, "dropdownicon", {
    key: 1,
    "class": normalizeClass(_ctx.cx('dropdownIcon'))
  }, function () {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon ? 'span' : 'ChevronDownIcon'), mergeProps({
      "class": [_ctx.cx('dropdownIcon'), _ctx.dropdownIcon],
      "aria-hidden": "true"
    }, _ctx.ptm('dropdownIcon')), null, 16, ["class"]))];
  })], 16), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function () {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onAfterEnter: $options.onOverlayAfterEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm('transition')), {
        "default": withCtx(function () {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            style: [_ctx.panelStyle, _ctx.overlayStyle],
            "class": [_ctx.cx('overlay'), _ctx.panelClass, _ctx.overlayClass],
            onClick: _cache[5] || (_cache[5] = function () {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[6] || (_cache[6] = function () {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            })
          }, _ctx.ptm('overlay')), [createElementVNode("span", mergeProps({
            ref: "firstHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[3] || (_cache[3] = function () {
              return $options.onFirstHiddenFocus && $options.onFirstHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm('hiddenFirstFocusableEl'), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16), renderSlot(_ctx.$slots, "header", {
            value: _ctx.modelValue,
            options: $options.visibleOptions
          }), _ctx.showToggleAll && _ctx.selectionLimit == null || _ctx.filter ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx('header')
          }, _ctx.ptm('header')), [_ctx.showToggleAll && _ctx.selectionLimit == null ? (openBlock(), createBlock(_component_Checkbox, {
            key: 0,
            modelValue: $options.allSelected,
            binary: true,
            disabled: _ctx.disabled,
            variant: _ctx.variant,
            "aria-label": $options.toggleAllAriaLabel,
            onChange: $options.onToggleAll,
            unstyled: _ctx.unstyled,
            pt: $options.getHeaderCheckboxPTOptions('pcHeaderCheckbox')
          }, {
            icon: withCtx(function (slotProps) {
              return [_ctx.$slots.headercheckboxicon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.headercheckboxicon), {
                key: 0,
                checked: slotProps.checked,
                "class": normalizeClass(slotProps["class"])
              }, null, 8, ["checked", "class"])) : slotProps.checked ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.checkboxIcon ? 'span' : 'CheckIcon'), mergeProps({
                key: 1,
                "class": [slotProps["class"], _defineProperty({}, _ctx.checkboxIcon, slotProps.checked)]
              }, $options.getHeaderCheckboxPTOptions('pcHeaderCheckbox.icon')), null, 16, ["class"])) : createCommentVNode("", true)];
            }),
            _: 1
          }, 8, ["modelValue", "disabled", "variant", "aria-label", "onChange", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.filter ? (openBlock(), createBlock(_component_IconField, {
            key: 1,
            "class": normalizeClass(_ctx.cx('pcFilterContainer')),
            unstyled: _ctx.unstyled,
            pt: _ctx.ptm('pcFilterContainer')
          }, {
            "default": withCtx(function () {
              return [createVNode(_component_InputText, {
                ref: "filterInput",
                value: $data.filterValue,
                onVnodeMounted: $options.onFilterUpdated,
                onVnodeUpdated: $options.onFilterUpdated,
                "class": normalizeClass(_ctx.cx('pcFilter')),
                placeholder: _ctx.filterPlaceholder,
                disabled: _ctx.disabled,
                variant: _ctx.variant,
                unstyled: _ctx.unstyled,
                role: "searchbox",
                autocomplete: "off",
                "aria-owns": $data.id + '_list',
                "aria-activedescendant": $options.focusedOptionId,
                onKeydown: $options.onFilterKeyDown,
                onBlur: $options.onFilterBlur,
                onInput: $options.onFilterChange,
                pt: _ctx.ptm('pcFilter')
              }, null, 8, ["value", "onVnodeMounted", "onVnodeUpdated", "class", "placeholder", "disabled", "variant", "unstyled", "aria-owns", "aria-activedescendant", "onKeydown", "onBlur", "onInput", "pt"]), createVNode(_component_InputIcon, {
                unstyled: _ctx.unstyled,
                pt: _ctx.ptm('pcFilterIconContainer')
              }, {
                "default": withCtx(function () {
                  return [renderSlot(_ctx.$slots, "filtericon", {}, function () {
                    return [_ctx.filterIcon ? (openBlock(), createElementBlock("span", mergeProps({
                      key: 0,
                      "class": _ctx.filterIcon
                    }, _ctx.ptm('filterIcon')), null, 16)) : (openBlock(), createBlock(_component_SearchIcon, normalizeProps(mergeProps({
                      key: 1
                    }, _ctx.ptm('filterIcon'))), null, 16))];
                  })];
                }),
                _: 3
              }, 8, ["unstyled", "pt"])];
            }),
            _: 3
          }, 8, ["class", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.filter ? (openBlock(), createElementBlock("span", mergeProps({
            key: 2,
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm('hiddenFilterResult'), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.filterResultMessageText), 17)) : createCommentVNode("", true)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
            "class": _ctx.cx('listContainer'),
            style: {
              'max-height': $options.virtualScrollerDisabled ? _ctx.scrollHeight : ''
            }
          }, _ctx.ptm('listContainer')), [createVNode(_component_VirtualScroller, mergeProps({
            ref: $options.virtualScrollerRef
          }, _ctx.virtualScrollerOptions, {
            items: $options.visibleOptions,
            style: {
              height: _ctx.scrollHeight
            },
            tabindex: -1,
            disabled: $options.virtualScrollerDisabled,
            pt: _ctx.ptm('virtualScroller')
          }), createSlots({
            content: withCtx(function (_ref2) {
              var styleClass = _ref2.styleClass,
                contentRef = _ref2.contentRef,
                items = _ref2.items,
                getItemOptions = _ref2.getItemOptions,
                contentStyle = _ref2.contentStyle,
                itemSize = _ref2.itemSize;
              return [createElementVNode("ul", mergeProps({
                ref: function ref(el) {
                  return $options.listRef(el, contentRef);
                },
                id: $data.id + '_list',
                "class": [_ctx.cx('list'), styleClass],
                style: contentStyle,
                role: "listbox",
                "aria-multiselectable": "true",
                "aria-label": $options.listAriaLabel
              }, _ctx.ptm('list')), [(openBlock(true), createElementBlock(Fragment, null, renderList(items, function (option, i) {
                return openBlock(), createElementBlock(Fragment, {
                  key: $options.getOptionRenderKey(option, $options.getOptionIndex(i, getItemOptions))
                }, [$options.isOptionGroup(option) ? (openBlock(), createElementBlock("li", mergeProps({
                  key: 0,
                  id: $data.id + '_' + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + 'px' : undefined
                  },
                  "class": _ctx.cx('optionGroup'),
                  role: "option",
                  ref_for: true
                }, _ctx.ptm('optionGroup')), [renderSlot(_ctx.$slots, "optiongroup", {
                  option: option.optionGroup,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function () {
                  return [createTextVNode(toDisplayString($options.getOptionGroupLabel(option.optionGroup)), 1)];
                })], 16, _hoisted_4)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
                  key: 1,
                  id: $data.id + '_' + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + 'px' : undefined
                  },
                  "class": _ctx.cx('option', {
                    option: option,
                    index: i,
                    getItemOptions: getItemOptions
                  }),
                  role: "option",
                  "aria-label": $options.getOptionLabel(option),
                  "aria-selected": $options.isSelected(option),
                  "aria-disabled": $options.isOptionDisabled(option),
                  "aria-setsize": $options.ariaSetSize,
                  "aria-posinset": $options.getAriaPosInset($options.getOptionIndex(i, getItemOptions)),
                  onClick: function onClick($event) {
                    return $options.onOptionSelect($event, option, $options.getOptionIndex(i, getItemOptions), true);
                  },
                  onMousemove: function onMousemove($event) {
                    return $options.onOptionMouseMove($event, $options.getOptionIndex(i, getItemOptions));
                  },
                  ref_for: true
                }, $options.getCheckboxPTOptions(option, getItemOptions, i, 'option'), {
                  "data-p-selected": $options.isSelected(option),
                  "data-p-focused": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions),
                  "data-p-disabled": $options.isOptionDisabled(option)
                }), [createVNode(_component_Checkbox, {
                  modelValue: $options.isSelected(option),
                  binary: true,
                  tabindex: -1,
                  variant: _ctx.variant,
                  unstyled: _ctx.unstyled,
                  pt: $options.getCheckboxPTOptions(option, getItemOptions, i, 'pcOptionCheckbox')
                }, {
                  icon: withCtx(function (slotProps) {
                    return [_ctx.$slots.optioncheckboxicon || _ctx.$slots.itemcheckboxicon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.optioncheckboxicon || _ctx.$slots.itemcheckboxicon), {
                      key: 0,
                      checked: slotProps.checked,
                      "class": normalizeClass(slotProps["class"])
                    }, null, 8, ["checked", "class"])) : slotProps.checked ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.checkboxIcon ? 'span' : 'CheckIcon'), mergeProps({
                      key: 1,
                      "class": [slotProps["class"], _defineProperty({}, _ctx.checkboxIcon, slotProps.checked)],
                      ref_for: true
                    }, $options.getCheckboxPTOptions(option, getItemOptions, i, 'pcOptionCheckbox.icon')), null, 16, ["class"])) : createCommentVNode("", true)];
                  }),
                  _: 2
                }, 1032, ["modelValue", "variant", "unstyled", "pt"]), renderSlot(_ctx.$slots, "option", {
                  option: option,
                  selected: $options.isSelected(option),
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function () {
                  return [createElementVNode("span", mergeProps({
                    ref_for: true
                  }, _ctx.ptm('optionLabel')), toDisplayString($options.getOptionLabel(option)), 17)];
                })], 16, _hoisted_5)), [[_directive_ripple]])], 64);
              }), 128)), $data.filterValue && (!items || items && items.length === 0) ? (openBlock(), createElementBlock("li", mergeProps({
                key: 0,
                "class": _ctx.cx('emptyMessage'),
                role: "option"
              }, _ctx.ptm('emptyMessage')), [renderSlot(_ctx.$slots, "emptyfilter", {}, function () {
                return [createTextVNode(toDisplayString($options.emptyFilterMessageText), 1)];
              })], 16)) : !_ctx.options || _ctx.options && _ctx.options.length === 0 ? (openBlock(), createElementBlock("li", mergeProps({
                key: 1,
                "class": _ctx.cx('emptyMessage'),
                role: "option"
              }, _ctx.ptm('emptyMessage')), [renderSlot(_ctx.$slots, "empty", {}, function () {
                return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
              })], 16)) : createCommentVNode("", true)], 16, _hoisted_3)];
            }),
            _: 2
          }, [_ctx.$slots.loader ? {
            name: "loader",
            fn: withCtx(function (_ref4) {
              var options = _ref4.options;
              return [renderSlot(_ctx.$slots, "loader", {
                options: options
              })];
            }),
            key: "0"
          } : undefined]), 1040, ["items", "style", "disabled", "pt"])], 16), renderSlot(_ctx.$slots, "footer", {
            value: _ctx.modelValue,
            options: $options.visibleOptions
          }), !_ctx.options || _ctx.options && _ctx.options.length === 0 ? (openBlock(), createElementBlock("span", mergeProps({
            key: 1,
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm('hiddenEmptyMessage'), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.emptyMessageText), 17)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm('hiddenSelectedMessage'), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.selectedMessageText), 17), createElementVNode("span", mergeProps({
            ref: "lastHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[4] || (_cache[4] = function () {
              return $options.onLastHiddenFocus && $options.onLastHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm('hiddenLastFocusableEl'), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16)], 16)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}

script.render = render;

export { script as s };
