import { _ as _export_sfc, u as useRoute, o as loading, p as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "axios";
import "ohmyfetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "defu";
import "@vueuse/shared";
import "vue-router";
import "vue-i18n";
const _userid__vue_vue_type_style_index_0_scoped_56361bb0_lang = "";
const _sfc_main = {
  __name: "[userid]",
  __ssrInlineRender: true,
  setup(__props) {
    const userData = ref();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "user-detail-section" }, _attrs))} data-v-56361bb0><h1 class="m-10 text-xl font-bold text-blue-900" data-v-56361bb0>USER DETAILS</h1>`);
      if (!userData.value) {
        _push(ssrRenderComponent(loading, { class: "user-loading" }, null, _parent));
      } else {
        _push(`<div class="user-detail-container" data-v-56361bb0><div class="user-profile-header" data-v-56361bb0><img${ssrRenderAttr("src", `${userData.value.picture}`)} alt="" class="user-profile-header-img" data-v-56361bb0><div class="user-profile-header-name" data-v-56361bb0>${ssrInterpolate(userData.value.title.charAt(0).toUpperCase())}${ssrInterpolate(userData.value.title.slice(1))}. ${ssrInterpolate(userData.value.firstName)} ${ssrInterpolate(userData.value.lastName)}</div><div data-v-56361bb0> \u{1F6A9}${ssrInterpolate(userData.value.location.city)}, ${ssrInterpolate(userData.value.location.country)}</div></div><div class="user-profile-full-info" data-v-56361bb0><div class="user-profile-info-content" data-v-56361bb0><div class="user-profile-info-title" data-v-56361bb0>User Info</div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>First Name</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(userData.value.firstName)}</div></div></div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>Last Name</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(userData.value.lastName)}</div></div></div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>Date of Birth</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(new Date(userData.value.dateOfBirth).toLocaleDateString())} at ${ssrInterpolate(new Date(userData.value.dateOfBirth).toLocaleTimeString())}</div></div></div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>Title</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(userData.value.title)}</div></div></div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>Gender</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(userData.value.gender)}</div></div></div></div><div class="user-profile-info-content" data-v-56361bb0><div class="user-profile-info-title" data-v-56361bb0>Location</div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>Country</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(userData.value.location.country)}</div></div></div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>State</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(userData.value.location.state)}</div></div></div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>City</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(userData.value.location.city)}</div></div></div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>Street</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(userData.value.location.street)}</div></div></div></div><div class="user-profile-info-content" data-v-56361bb0><div class="user-profile-info-title" data-v-56361bb0>Contact</div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>Email</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(userData.value.email)}</div></div></div><div class="user-profile-info-holder" data-v-56361bb0><div class="user-profile-info-type" data-v-56361bb0>Phone</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(userData.value.phone)}</div></div></div></div><div class="user-profile-info-content" data-v-56361bb0><div class="user-profile-info-title" data-v-56361bb0>Activity</div><div class="user-profile-info-type" data-v-56361bb0>Last Activity</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(new Date(userData.value.updatedDate).toLocaleDateString())} at ${ssrInterpolate(new Date(userData.value.updatedDate).toLocaleTimeString())}</div></div><div class="user-profile-info-type" data-v-56361bb0>Registration Date</div><div class="user-profile-info-data" data-v-56361bb0><div data-v-56361bb0>${ssrInterpolate(new Date(userData.value.registerDate).toLocaleDateString())} at ${ssrInterpolate(new Date(userData.value.registerDate).toLocaleTimeString())}</div></div></div></div>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/user" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-10 text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300" data-v-56361bb0${_scopeId}> Back to Users </div>`);
            } else {
              return [
                createVNode("div", { class: "mb-10 text-xl font-bold border-2 p-2 border-blue-300 rounded hover:text-white hover:bg-blue-300" }, " Back to Users ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/[userid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _userid_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56361bb0"]]);
export {
  _userid_ as default
};
//# sourceMappingURL=_userid_.42e74d5d.js.map
