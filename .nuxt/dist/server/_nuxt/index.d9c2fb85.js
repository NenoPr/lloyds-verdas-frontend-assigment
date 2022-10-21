import { _ as _export_sfc, a as __nuxt_component_0, b as __nuxt_component_1, c as __nuxt_component_2, d as __nuxt_component_3, e as __nuxt_component_4, f as __nuxt_component_5, g as __nuxt_component_6 } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ohmyfetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "defu";
import "@vueuse/shared";
import "vue-router";
import "vue-i18n";
const index_vue_vue_type_style_index_0_scoped_1ac04db4_lang = "";
const _sfc_main = {
  head() {
    return {
      title: "Verdas | We present something that will help us combat this pandemic and make everyone return to normal as soon as possible. ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "We present something that will help us combat this pandemic and make everyone return to normal as soon as possible. "
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_EnENheaderSection = __nuxt_component_0;
  const _component_EnENsection1 = __nuxt_component_1;
  const _component_EnENsection2 = __nuxt_component_2;
  const _component_EnENsection3 = __nuxt_component_3;
  const _component_EnENsection4 = __nuxt_component_4;
  const _component_EnENsection5 = __nuxt_component_5;
  const _component_EnENfooterSection = __nuxt_component_6;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "app" }, _attrs))} data-v-1ac04db4>`);
  _push(ssrRenderComponent(_component_EnENheaderSection, null, null, _parent));
  _push(ssrRenderComponent(_component_EnENsection1, null, null, _parent));
  _push(ssrRenderComponent(_component_EnENsection2, null, null, _parent));
  _push(ssrRenderComponent(_component_EnENsection3, null, null, _parent));
  _push(ssrRenderComponent(_component_EnENsection4, null, null, _parent));
  _push(ssrRenderComponent(_component_EnENsection5, null, null, _parent));
  _push(ssrRenderComponent(_component_EnENfooterSection, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/en/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1ac04db4"]]);
export {
  index as default
};
//# sourceMappingURL=index.d9c2fb85.js.map
