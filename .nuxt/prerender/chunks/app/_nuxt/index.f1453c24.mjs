import { _ as _export_sfc, o as loading, p as __nuxt_component_0$3 } from '../server.mjs';
import { ref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/vue/server-renderer/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const usersData = ref();
    const usersPage = ref(0);
    const displayAll = ref(false);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "users-section" }, _attrs))} data-v-d5d9d5a3><div class="header-options" data-v-d5d9d5a3><h1 class="text-blue-default text-[2rem] font-bold mxs:text-[1.5rem]" data-v-d5d9d5a3> Dummyapi Users Page </h1><div class="flex flex-row gap-4 justify-center items-center" data-v-d5d9d5a3><button class="text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300" data-v-d5d9d5a3> Cards </button>`);
      if (displayAll.value === true) {
        _push(`<div data-v-d5d9d5a3><button class="text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300" data-v-d5d9d5a3> Display by Page </button></div>`);
      } else {
        _push(`<button class="text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300" data-v-d5d9d5a3> Display All </button>`);
      }
      _push(`<button class="text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300" data-v-d5d9d5a3> List </button></div>`);
      if (!displayAll.value) {
        _push(`<div class="page-navigation mb-2" data-v-d5d9d5a3><button class="nav-btn" data-v-d5d9d5a3>${ssrInterpolate("<")}</button><div data-v-d5d9d5a3>Page ${ssrInterpolate(usersPage.value + 1)} of 4</div><button class="nav-btn" data-v-d5d9d5a3>${ssrInterpolate(">")}</button></div>`);
      } else {
        _push(`<div data-v-d5d9d5a3></div>`);
      }
      _push(`</div>`);
      if (!usersData.value) {
        _push(ssrRenderComponent(loading, null, null, _parent));
      } else {
        _push(`<div class="user-container cards bg-gray-50 bg-opacity-90" data-v-d5d9d5a3><!--[-->`);
        ssrRenderList(usersData.value, (user) => {
          _push(`<div class="user-card-holder" data-v-d5d9d5a3>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/user/${user.id}`,
            class: "user-card hover:bg-blue-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="user-picture"${ssrRenderAttr("src", `${user.picture}`)} alt="" data-v-d5d9d5a3${_scopeId}><div class="user-name-holder" data-v-d5d9d5a3${_scopeId}>${ssrInterpolate(user.title.charAt(0).toUpperCase())}${ssrInterpolate(user.title.slice(1))}. ${ssrInterpolate(user.firstName)} ${ssrInterpolate(user.lastName)}</div>`);
              } else {
                return [
                  createVNode("img", {
                    class: "user-picture",
                    src: `${user.picture}`,
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "user-name-holder" }, toDisplayString(user.title.charAt(0).toUpperCase()) + toDisplayString(user.title.slice(1)) + ". " + toDisplayString(user.firstName) + " " + toDisplayString(user.lastName), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      if (!usersData.value) {
        _push(`<div data-v-d5d9d5a3></div>`);
      } else {
        _push(`<div class="footer-options" data-v-d5d9d5a3>`);
        if (!displayAll.value) {
          _push(`<div class="page-navigation mt-2" data-v-d5d9d5a3><button class="nav-btn" data-v-d5d9d5a3>${ssrInterpolate("<")}</button><div data-v-d5d9d5a3>Page ${ssrInterpolate(usersPage.value + 1)} of 4</div><button class="nav-btn" data-v-d5d9d5a3>${ssrInterpolate(">")}</button></div>`);
        } else {
          _push(`<div data-v-d5d9d5a3></div>`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d5d9d5a3"]]);

export { index as default };
//# sourceMappingURL=index.f1453c24.mjs.map
