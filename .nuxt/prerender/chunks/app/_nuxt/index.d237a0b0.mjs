import { _ as _export_sfc, a as __nuxt_component_0$2, b as __nuxt_component_1$2, c as __nuxt_component_2$1, d as __nuxt_component_3$1, e as __nuxt_component_4$1, f as __nuxt_component_5$1, g as __nuxt_component_6$1 } from '../server.mjs';
import { mergeProps, useSSRContext } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/hookable/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/unctx/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/ufo/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/h3/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/defu/dist/defu.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/@vueuse/shared/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/vue-i18n/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/destr/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/scule/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/ohash/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/unstorage/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/radix3/dist/index.mjs';

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
  const _component_EnENheaderSection = __nuxt_component_0$2;
  const _component_EnENsection1 = __nuxt_component_1$2;
  const _component_EnENsection2 = __nuxt_component_2$1;
  const _component_EnENsection3 = __nuxt_component_3$1;
  const _component_EnENsection4 = __nuxt_component_4$1;
  const _component_EnENsection5 = __nuxt_component_5$1;
  const _component_EnENfooterSection = __nuxt_component_6$1;
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

export { index as default };
//# sourceMappingURL=index.d237a0b0.mjs.map
