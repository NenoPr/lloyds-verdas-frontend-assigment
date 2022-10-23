import { getCurrentInstance, inject, defineComponent, h, computed, unref, Suspense, Transition, provide, reactive, ref, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext, shallowRef, createApp, toRef, isRef, defineAsyncComponent, onErrorCaptured, nextTick, watchEffect } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/vue/index.mjs';
import { $fetch } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/ohmyfetch/dist/node.mjs';
import { createHooks } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/unctx/dist/index.mjs';
import { hasProtocol, isEqual, parseURL, joinURL } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/ufo/dist/index.mjs';
import { createError as createError$1, sendRedirect } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/h3/dist/index.mjs';
import { defuFn } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/defu/dist/defu.mjs';
import { resolveUnref } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/@vueuse/shared/index.mjs';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSuspense } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/vue/server-renderer/index.mjs';
import { createI18n } from 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/vue-i18n/index.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/destr/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/scule/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/ohash/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/unstorage/dist/index.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///home/neno/WebProjects/lloyds-verdas-frontend-assigment/node_modules/radix3/dist/index.mjs';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      const el = void 0;
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$3 = defineNuxtLink({ componentName: "NuxtLink" });
const inlineConfig = {};
defuFn(inlineConfig);
function useHead(meta2) {
  useNuxtApp()._useHead(meta2);
}
const components = {};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
var PROVIDE_KEY = "usehead";
var HEAD_COUNT_KEY = "head:count";
var HEAD_ATTRS_KEY = "data-head-attrs";
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = "data-meta-body";
var propsToString = (props) => {
  const handledAttributes = [];
  for (const [key, value] of Object.entries(props)) {
    if (value === false || value == null)
      continue;
    let attribute = key;
    if (value !== true)
      attribute += `="${String(value).replace(/"/g, "&quot;")}"`;
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? ` ${handledAttributes.join(" ")}` : "";
};
var tagToString = (tag) => {
  const attrs = propsToString(tag.props);
  const openTag = `<${tag.tag}${attrs}>`;
  return SELF_CLOSING_TAGS.includes(tag.tag) ? openTag : `${openTag}${tag.children || ""}</${tag.tag}>`;
};
var resolveHeadEntries = (entries, force) => {
  return entries.map((e) => {
    if (e.input && (force || !e.resolved))
      e.input = resolveUnrefHeadInput(e.input);
    return e;
  });
};
var renderHeadToString = async (head) => {
  var _a, _b;
  const headHtml = [];
  const bodyHtml = [];
  let titleHtml = "";
  const attrs = { htmlAttrs: {}, bodyAttrs: {} };
  const resolvedEntries = resolveHeadEntries(head.headEntries);
  for (const h2 in head.hooks["resolved:entries"])
    await head.hooks["resolved:entries"][h2](resolvedEntries);
  const headTags = resolveHeadEntriesToTags(resolvedEntries);
  for (const h2 in head.hooks["resolved:tags"])
    await head.hooks["resolved:tags"][h2](headTags);
  for (const tag of headTags) {
    if ((_a = tag.options) == null ? void 0 : _a.beforeTagRender)
      tag.options.beforeTagRender(tag);
    if (tag.tag === "title")
      titleHtml = tagToString(tag);
    else if (tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs")
      attrs[tag.tag] = { ...attrs[tag.tag], ...tag.props };
    else if ((_b = tag.options) == null ? void 0 : _b.body)
      bodyHtml.push(tagToString(tag));
    else
      headHtml.push(tagToString(tag));
  }
  headHtml.push(`<meta name="${HEAD_COUNT_KEY}" content="${headHtml.length}">`);
  return {
    get headTags() {
      return titleHtml + headHtml.join("");
    },
    get htmlAttrs() {
      return propsToString({
        ...attrs.htmlAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(attrs.htmlAttrs).join(",")
      });
    },
    get bodyAttrs() {
      return propsToString({
        ...attrs.bodyAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(attrs.bodyAttrs).join(",")
      });
    },
    get bodyTags() {
      return bodyHtml.join("");
    }
  };
};
var sortTags = (aTag, bTag) => {
  const tagWeight = (tag) => {
    var _a;
    if ((_a = tag.options) == null ? void 0 : _a.renderPriority)
      return tag.options.renderPriority;
    switch (tag.tag) {
      case "base":
        return -1;
      case "meta":
        if (tag.props.charset)
          return -2;
        if (tag.props["http-equiv"] === "content-security-policy")
          return 0;
        return 10;
      default:
        return 10;
    }
  };
  return tagWeight(aTag) - tagWeight(bTag);
};
var tagDedupeKey = (tag) => {
  const { props, tag: tagName, options } = tag;
  if (tagName === "base" || tagName === "title" || tagName === "titleTemplate")
    return tagName;
  if (tagName === "link" && props.rel === "canonical")
    return "canonical";
  if (props.charset)
    return "charset";
  if (options == null ? void 0 : options.key)
    return `${tagName}:${options.key}`;
  const name = ["id"];
  if (tagName === "meta")
    name.push(...["name", "property", "http-equiv"]);
  for (const n of name) {
    if (typeof props[n] !== "undefined") {
      return `${tagName}:${n}:${props[n]}`;
    }
  }
  return tag.runtime.position;
};
function resolveUnrefHeadInput(ref2) {
  const root = resolveUnref(ref2);
  if (!ref2 || !root) {
    return root;
  }
  if (Array.isArray(root)) {
    return root.map(resolveUnrefHeadInput);
  }
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([key, value]) => {
        if (key === "titleTemplate")
          return [key, unref(value)];
        return [
          key,
          resolveUnrefHeadInput(value)
        ];
      })
    );
  }
  return root;
}
var resolveTag = (name, input, e) => {
  var _a;
  input = { ...input };
  const tag = {
    tag: name,
    props: {},
    runtime: {
      entryId: e.id
    },
    options: {
      ...e.options
    }
  };
  ["hid", "vmid", "key"].forEach((key) => {
    if (input[key]) {
      tag.options.key = input[key];
      delete input[key];
    }
  });
  ["children", "innerHTML", "textContent"].forEach((key) => {
    if (typeof input[key] !== "undefined") {
      tag.children = input[key];
      delete input[key];
    }
  });
  ["body", "renderPriority"].forEach((key) => {
    if (typeof input[key] !== "undefined") {
      tag.options[key] = input[key];
      delete input[key];
    }
  });
  if ((_a = tag.options) == null ? void 0 : _a.body)
    input[BODY_TAG_ATTR_NAME] = true;
  tag.props = input;
  return tag;
};
var headInputToTags = (e) => {
  return Object.entries(e.input).filter(([, v]) => typeof v !== "undefined").map(([key, value]) => {
    return (Array.isArray(value) ? value : [value]).map((props) => {
      switch (key) {
        case "title":
        case "titleTemplate":
          return {
            tag: key,
            children: props,
            props: {},
            runtime: { entryId: e.id },
            options: e.options
          };
        case "base":
        case "meta":
        case "link":
        case "style":
        case "script":
        case "noscript":
        case "htmlAttrs":
        case "bodyAttrs":
          return resolveTag(key, props, e);
        default:
          return false;
      }
    });
  }).flat().filter((v) => !!v);
};
var renderTitleTemplate = (template, title) => {
  if (template == null)
    return title || null;
  if (typeof template === "function")
    return template(title);
  return template.replace("%s", title != null ? title : "");
};
var resolveHeadEntriesToTags = (entries) => {
  const deduping = {};
  const resolvedEntries = resolveHeadEntries(entries);
  resolvedEntries.forEach((entry2, entryIndex) => {
    const tags = headInputToTags(entry2);
    tags.forEach((tag, tagIdx) => {
      tag.runtime = tag.runtime || {};
      tag.runtime.position = entryIndex * 1e4 + tagIdx;
      deduping[tagDedupeKey(tag)] = tag;
    });
  });
  let resolvedTags = Object.values(deduping).sort((a, b) => a.runtime.position - b.runtime.position).sort(sortTags);
  const titleTemplateIdx = resolvedTags.findIndex((i) => i.tag === "titleTemplate");
  const titleIdx = resolvedTags.findIndex((i) => i.tag === "title");
  if (titleIdx !== -1 && titleTemplateIdx !== -1) {
    const newTitle = renderTitleTemplate(
      resolvedTags[titleTemplateIdx].children,
      resolvedTags[titleIdx].children
    );
    if (newTitle !== null) {
      resolvedTags[titleIdx].children = newTitle || resolvedTags[titleIdx].children;
    } else {
      resolvedTags = resolvedTags.filter((_, i) => i !== titleIdx);
    }
    resolvedTags = resolvedTags.filter((_, i) => i !== titleTemplateIdx);
  } else if (titleTemplateIdx !== -1) {
    const newTitle = renderTitleTemplate(
      resolvedTags[titleTemplateIdx].children
    );
    if (newTitle !== null) {
      resolvedTags[titleTemplateIdx].children = newTitle;
      resolvedTags[titleTemplateIdx].tag = "title";
    } else {
      resolvedTags = resolvedTags.filter((_, i) => i !== titleTemplateIdx);
    }
  }
  return resolvedTags;
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs))
        el.removeAttribute(key);
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false)
      el.removeAttribute(key);
    else
      el.setAttribute(key, value);
    keys.push(key);
  }
  if (keys.length)
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  else
    el.removeAttribute(HEAD_ATTRS_KEY);
};
var createElement = (tag, document) => {
  var _a;
  const $el = document.createElement(tag.tag);
  Object.entries(tag.props).forEach(([k, v]) => {
    if (v !== false) {
      $el.setAttribute(k, v === true ? "" : String(v));
    }
  });
  if (tag.children) {
    if ((_a = tag.options) == null ? void 0 : _a.safe) {
      if (tag.tag !== "script")
        $el.textContent = tag.children;
    } else {
      $el.innerHTML = tag.children;
    }
  }
  return $el;
};
var updateElements = (document = window.document, type, tags) => {
  var _a, _b;
  const head = document.head;
  const body = document.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type)
        oldBodyElements.push(bodyMetaElements[i]);
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type)
        oldHeadElements.push(j);
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => {
    var _a3;
    var _a2;
    return {
      element: createElement(tag, document),
      body: (_a3 = (_a2 = tag.options) == null ? void 0 : _a2.body) != null ? _a3 : false
    };
  });
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body)
      body.insertAdjacentElement("beforeend", t.element);
    else
      head.insertBefore(t.element, headCountEl);
  });
  headCountEl.setAttribute(
    "content",
    `${headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length}`
  );
};
var updateDOM = async (head, previousTags, document) => {
  var _a, _b;
  const tags = {};
  if (!document)
    document = window.document;
  for (const k in head.hooks["before:dom"]) {
    if (await head.hooks["before:dom"][k]() === false)
      return;
  }
  const resolvedEntries = resolveHeadEntries(head.headEntries);
  for (const h2 in head.hooks["resolved:entries"])
    await head.hooks["resolved:entries"][h2](resolvedEntries);
  const headTags = resolveHeadEntriesToTags(resolvedEntries);
  for (const h2 in head.hooks["resolved:tags"])
    await head.hooks["resolved:tags"][h2](headTags);
  for (const tag of headTags) {
    switch (tag.tag) {
      case "title":
        if (typeof tag.children !== "undefined")
          document.title = tag.children;
        break;
      case "base":
      case "meta":
      case "link":
      case "style":
      case "script":
      case "noscript":
        tags[tag.tag] = tags[tag.tag] || [];
        tags[tag.tag].push(tag);
        break;
    }
  }
  setAttrs(document.documentElement, ((_a = headTags.find((t) => t.tag === "htmlAttrs")) == null ? void 0 : _a.props) || {});
  setAttrs(document.body, ((_b = headTags.find((t) => t.tag === "bodyAttrs")) == null ? void 0 : _b.props) || {});
  const tagKeys = /* @__PURE__ */ new Set([...Object.keys(tags), ...previousTags]);
  for (const tag of tagKeys)
    updateElements(document, tag, tags[tag] || []);
  previousTags.clear();
  Object.keys(tags).forEach((i) => previousTags.add(i));
};
var createHead = (initHeadObject) => {
  let entries = [];
  let entryId = 0;
  const previousTags = /* @__PURE__ */ new Set();
  let domUpdateTick = null;
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    },
    get headEntries() {
      return entries;
    },
    get headTags() {
      const resolvedEntries = resolveHeadEntries(head.headEntries);
      return resolveHeadEntriesToTags(resolvedEntries);
    },
    addHeadObjs(input, options) {
      return head.addEntry(input, options);
    },
    addEntry(input, options = {}) {
      let resolved = false;
      if (options == null ? void 0 : options.resolved) {
        resolved = true;
        delete options.resolved;
      }
      const entry2 = {
        id: entryId++,
        options,
        resolved,
        input
      };
      entries.push(entry2);
      return {
        remove() {
          entries = entries.filter((_objs) => _objs.id !== entry2.id);
        },
        update(updatedInput) {
          entries = entries.map((e) => {
            if (e.id === entry2.id)
              e.input = updatedInput;
            return e;
          });
        }
      };
    },
    async updateDOM(document, force) {
      const doDomUpdate = () => {
        domUpdateTick = null;
        return updateDOM(head, previousTags, document);
      };
      if (force)
        return doDomUpdate();
      return domUpdateTick = domUpdateTick || new Promise((resolve) => nextTick(() => resolve(doDomUpdate())));
    },
    addReactiveEntry(input, options = {}) {
      let entrySideEffect = null;
      const cleanUpWatch = watchEffect(() => {
        const resolvedInput = resolveUnrefHeadInput(input);
        if (entrySideEffect === null) {
          entrySideEffect = head.addEntry(
            resolvedInput,
            { ...options, resolved: true }
          );
        } else {
          entrySideEffect.update(resolvedInput);
        }
      });
      return () => {
        cleanUpWatch();
        if (entrySideEffect)
          entrySideEffect.remove();
      };
    }
  };
  if (initHeadObject)
    head.addEntry(initHeadObject);
  return head;
};
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const appLayoutTransition = { "name": "layout", "mode": "out-in" };
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  head.addEntry(appHead, { resolved: true });
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = (_meta, options) => {
    {
      head.addEntry(_meta, options);
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const meta2 = await renderHeadToString(head);
      return {
        ...meta2,
        bodyScripts: meta2.bodyTags
      };
    };
  }
});
const metaMixin = {
  created() {
    const instance = getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? () => options.head(nuxtApp) : options.head;
    useHead(source);
  }
};
const node_modules_nuxt_dist_head_runtime_mixin_plugin_mjs_prWV5EzJWI = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin(metaMixin);
});
const _imports_0$1 = "" + globalThis.__buildAssetsURL("Group-4.c841a4a7.svg");
const _imports_1$1 = "" + globalThis.__buildAssetsURL("instagram-logo-svgrepo-com.7c34ad32.svg");
const _imports_2$1 = "" + globalThis.__buildAssetsURL("facebook-svgrepo-com.62df866d.svg");
const _imports_3 = "" + globalThis.__buildAssetsURL("linkedin-logo-svgrepo-com.6f5531dc.svg");
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$h = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$3;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-60d61ebc><div class="text-white xl:text-base md:text-xs header-contact" data-v-60d61ebc><span class="font-bold hidden sm:block" data-v-60d61ebc>Contact us</span><a class="hover:underline hover:opacity-70" href="mailto:info@vedras.hr" data-v-60d61ebc>info@verdas.hr</a><a class="hover:underline hover:opacity-70" href="tel:385989608920" data-v-60d61ebc>+385 98 9608 920</a>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="font-bold hover:underline hover:opacity-50" data-v-60d61ebc${_scopeId}>HR</button>`);
      } else {
        return [
          createVNode("button", { class: "font-bold hover:underline hover:opacity-50" }, "HR")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header-content" data-v-60d61ebc><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="header-img" data-v-60d61ebc><div class="header-line" data-v-60d61ebc></div><h1 class="header-h1 text-scroll-ani" data-v-60d61ebc>ON HOLD</h1><div class="header-socialMedia" data-v-60d61ebc><a href="https://www.instagram.com/vedrasgroup/?hl=en" target="_blank" rel="noreferrer noopener" class="social-icon hover:cursor-pointer hover:opacity-70 transition ease-in-out duration-350" data-v-60d61ebc><img class="instagram"${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-60d61ebc></a><a href="https://www.facebook.com/vedrasevents/" target="_blank" rel="noreferrer noopener" class="social-icon hover:cursor-pointer hover:opacity-70 transition ease-in-out duration-350" data-v-60d61ebc><img class="facebook"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-60d61ebc></a><a href="https://www.linkedin.com/company/42940956/" target="_blank" rel="noreferrer noopener" class="social-icon hover:cursor-pointer hover:opacity-70 transition ease-in-out duration-350" data-v-60d61ebc><img class="linkedin"${ssrRenderAttr("src", _imports_3)} alt="" data-v-60d61ebc></a></div></div></section>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/en/ENheaderSection.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-60d61ebc"]]);
const _imports_0 = "" + globalThis.__buildAssetsURL("UVD-Robots-logo-tagline-black-website.250d5fde.png");
const _imports_1 = "" + globalThis.__buildAssetsURL("boston-medical-logo-color-jpg.6a865f1d.png");
const _imports_2 = "" + globalThis.__buildAssetsURL("kill-stroj-full.f4044d42.png");
const _sfc_main$g = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sectionOne" }, _attrs))} data-v-8fdb303b><div class="sectionOne-info-container text-gray-default text-scroll-ani" data-v-8fdb303b><p class="mt-12" data-v-8fdb303b> In the midst of the current situation with Co-vid19, our \u201Cevent\u201D industry is completely stopped. It is really hard to predict the start of big gatherings and coffee parties that are close to the summer we are used to. Despite the temporary pause of the entire event industry, Vedras does not want to stand aside and wait for this pandemic to end on its own, but as we always do, we are embarking on new ventures and victories. This time around, we are introducing something completely new, something unrelated to our usual business. We present something that will help us combat this pandemic and make everyone return to normal as soon as possible. </p><img${ssrRenderAttr("src", _imports_0)} alt="" class="sectionOne-info-img w-[300px] h-[160px]" data-v-8fdb303b><img${ssrRenderAttr("src", _imports_1)} alt="" class="sectionOne-info-img w-[360px] h-[64px]" data-v-8fdb303b><p class="sectionOne-info-2nd-para pb-8" data-v-8fdb303b> We want to inform you of the availability of a new autonomous UV disinfection robot from the Blue Ocean Robotics company. </p></div><div class="sectionOne-img-container image-scroll-ani" data-v-8fdb303b><img${ssrRenderAttr("src", _imports_2)} alt="kill stroj" class="killer-robot" data-v-8fdb303b><div class="sectionOne-infoPanel bg-blue-default" data-v-8fdb303b><p data-v-8fdb303b>KILLS 99,99% MICROORGANISAMS</p></div></div></section>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/en/ENsection1.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-8fdb303b"]]);
const _sfc_main$f = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sectionTwo bg-blue-default" }, _attrs))} data-v-3619a666><div class="sectionTwo-info-container text-white text-base md:text-xl" data-v-3619a666><h2 class="text-2xl md:text-4xl font-bold text-white mb-8 pt-8" data-v-3619a666> New in our offer! </h2><p class="text-white" data-v-3619a666> Secure robot disinfection and sterilization with applications in: </p><ul class="sectionTwo-list text-white font-bold" data-v-3619a666><li data-v-3619a666>Tourism (hotels, apartments, holiday homes, mobile homes ...)</li><li data-v-3619a666>Industry (factories, warehouses, plants ...)</li><li data-v-3619a666> Public places (health centers, kindergartens, schools, colleges, offices, airports, stations, fitness gyms, shopping centers ...) </li></ul><p class="mt-8" data-v-3619a666> Robots designed to clean operating rooms and laboratories are now disinfecting your business and private spaces. </p><a href="http://www.uvd-robots.com/" target="_blank" rel="noreferrer noopener" class="mt-8 font-bold hover:underline text-base md:text-[16px]" data-v-3619a666>More details about UVD Robots</a></div><div class="sectionTwo-img-container image-scroll-ani hide" data-v-3619a666></div></section>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/en/ENsection2.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-3619a666"]]);
const _sfc_main$e = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sectionThree text-gray-default" }, _attrs))} data-v-8d0f69da><div class="sectionThree-img-container image-scroll-ani hide" data-v-8d0f69da></div><div class="sectionThree-info-container text-scroll-ani" data-v-8d0f69da><h2 class="font-bold text-2xl md:text-4xl" data-v-8d0f69da>#covidfree</h2><p data-v-8d0f69da> By applying ultraviolet light (UV, UV-c), the UVD robot destroys the structure of DNA in all microorganisms. </p><p data-v-8d0f69da> With help of robots, we provide a service for cleaning large and small spaces, which in the shortest possible time and autonomously disinfect indoors where safety and \u201Csense of cleanliness\u201D must come first. </p></div></section>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/en/ENsection3.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-8d0f69da"]]);
const _sfc_main$d = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sectionFour" }, _attrs))} data-v-1387a077><div class="sectionFour-img-container" data-v-1387a077></div><div class="sectionFour-info-container bg-blue-default" data-v-1387a077><h2 class="text-white font-semibold" data-v-1387a077> You want to provide a secure place to stay or work for your costumers or employees. Search no more and contact us now. Let your spaces be #covidfree </h2></div></section>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/en/ENsection4.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-1387a077"]]);
const _sfc_main$c = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sectionFive" }, _attrs))} data-v-95633402><div class="sectionFive-info-container image-scroll-ani hide" data-v-95633402><h2 class="font-bold text-gray-default text-2xl md:text-4xl" data-v-95633402> Our staff is ready to provide a service as soon as possible which includes: </h2><ul class="sectionFive-list text-gray-default" data-v-95633402><li data-v-95633402>delivery of UV disinfection robot</li><li data-v-95633402>mapping of the rooms intended for disinfection</li><li data-v-95633402>control of operation during disinfection</li><li data-v-95633402>collection of the UV disinfection robot</li></ul><a href="http://vedras.hr/download/Vedras_dezinfekcija_UVD_Robotima.pdf" target="_blank" rel="noreferrer noopener" data-v-95633402><button class="mt-10 bg-blue-default w-[216px] h-[57px] p-4 text-white border-[1px] border-blue-default hover:bg-white hover:text-blue-default" data-v-95633402> DOWNLOAD BROCHURE </button></a></div><div class="sectionFive-img-container text-scroll-ani hide" data-v-95633402></div></section>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/en/ENsection5.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-95633402"]]);
const _sfc_main$b = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer bg-blue-default text-4xl text-white" }, _attrs))} data-v-928deed2><p data-v-928deed2>Contact us for more:</p><div data-v-928deed2><a class="font-bold hover:underline" href="mailto:info@verdas.hr" data-v-928deed2>info@vedras.hr</a> or call us <a class="font-bold hover:underline" href="tel:385989608920" data-v-928deed2>+385 98 9608 920</a></div></footer>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/en/ENfooterSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_6$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-928deed2"]]);
const meta$3 = void 0;
const _sfc_main$9 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$3;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-914c9a19><div class="text-white xl:text-base md:text-xs header-contact" data-v-914c9a19><span class="font-bold hidden sm:block" data-v-914c9a19>Kontaktirajte nas</span><a class="hover:underline hover:opacity-70" href="mailto:info@vedras.hr" data-v-914c9a19>info@verdas.hr</a><a class="hover:underline hover:opacity-70" href="tel:385989608920" data-v-914c9a19>+385 98 9608 920</a>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/en" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="font-bold hover:underline hover:opacity-50" data-v-914c9a19${_scopeId}>EN</button>`);
      } else {
        return [
          createVNode("button", { class: "font-bold hover:underline hover:opacity-50" }, "EN")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header-content" data-v-914c9a19><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="header-img" data-v-914c9a19><div class="header-line" data-v-914c9a19></div><h1 class="header-h1 text-scroll-ani" data-v-914c9a19>ON HOLD</h1><div class="header-socialMedia" data-v-914c9a19><a href="https://www.instagram.com/vedrasgroup/?hl=en" target="_blank" rel="noreferrer noopener" class="social-icon hover:cursor-pointer hover:opacity-70 transition ease-in-out duration-350" data-v-914c9a19><img class="instagram"${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-914c9a19></a><a href="https://www.facebook.com/vedrasevents/" target="_blank" rel="noreferrer noopener" class="social-icon hover:cursor-pointer hover:opacity-70 transition ease-in-out duration-350" data-v-914c9a19><img class="facebook"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-914c9a19></a><a href="https://www.linkedin.com/company/42940956/" target="_blank" rel="noreferrer noopener" class="social-icon hover:cursor-pointer hover:opacity-70 transition ease-in-out duration-350" data-v-914c9a19><img class="linkedin"${ssrRenderAttr("src", _imports_3)} alt="" data-v-914c9a19></a></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/headerSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-914c9a19"]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sectionOne" }, _attrs))} data-v-b409c5d8><div class="sectionOne-info-container text-gray-default text-scroll-ani" data-v-b409c5d8><p class="mt-12" data-v-b409c5d8> U jeku trenutne situacije sa Covid-19, na\u0161a je \u201Cevent\u201D bran\u0161a potpuno zaustavljena. Zaista te\u0161ko predvi\u0111amo po\u010Detak velikih okupljanja i zabava kave prili\u010De ljetu na kakvog smo navikli. Unato\u010D privremenoj stanci cijele event industrije, Vedras ne \u017Eeli stajati po strani i \u010Dekati da se ova pandemija sama od sebe zavr\u0161i, ve\u0107 smo kao \u0161to to uvijek \u010Dinimo, krenuli u nove pothvate i pobjede. Ovoga puta predstavljamo ne\u0161to sasvim novo, ne\u0161to \u0161to nije povezano sa na\u0161im uobi\u010Dajenim poslovanjem. Predstavljamo ne\u0161to \u0161to \u0107e nam pomo\u0107i u borbi protiv ove pandemije i u\u010Diniti da se svi \u0161to prije vratimo normalnom \u017Eivotu. </p><img${ssrRenderAttr("src", _imports_0)} alt="" class="sectionOne-info-img w-[300px] h-[160px]" data-v-b409c5d8><img${ssrRenderAttr("src", _imports_1)} alt="" class="sectionOne-info-img w-[360px] h-[64px]" data-v-b409c5d8><p class="sectionOne-info-2nd-para pb-8" data-v-b409c5d8> Vedras d.o.o. Vas ovim putem \u017Eeli informirati o dostupnosti autonomnog UV-dezinfekcijskog robota tvrtke Blue Ocean Robotics. </p></div><div class="sectionOne-img-container image-scroll-ani" data-v-b409c5d8><img${ssrRenderAttr("src", _imports_2)} alt="kill stroj" class="killer-robot" data-v-b409c5d8><div class="sectionOne-infoPanel bg-blue-default" data-v-b409c5d8><p data-v-b409c5d8>UBIJA 99,99% MIKROORGANIZAMA</p></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section1.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-b409c5d8"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sectionTwo bg-blue-default" }, _attrs))} data-v-4e44263b><div class="sectionTwo-info-container text-white text-base md:text-xl" data-v-4e44263b><h2 class="text-2xl md:text-4xl font-bold text-white mb-8 pt-8" data-v-4e44263b> Novo u na\u0161oj ponudi! </h2><p class="text-white" data-v-4e44263b> Robotska dezinfekcija i sterilizacija prostora s primjenom u: </p><ul class="sectionTwo-list text-white font-bold" data-v-4e44263b><li data-v-4e44263b>Turizmu (hoteli, apartmani, ku\u0107e za odmor, mobilne ku\u0107ice...)</li><li data-v-4e44263b>Industriji (tvornice, skladi\u0161ta, pogoni...)</li><li data-v-4e44263b> Javnim mjestima (domovi zdravlja, vrti\u0107i, \u0161kole, fakulteti, uredi, zra\u010Dne luke, kolodvori, fitness dvorane, \u0161oping centri...) </li></ul><p class="mt-8" data-v-4e44263b> Roboti konstruirani za \u010Di\u0161\u0107enje operacijskih sala i laboratorija, sada dezinficiraju va\u0161e poslovne i privatne prostore. </p><a href="http://www.uvd-robots.com/" target="_blank" rel="noreferrer noopener" class="mt-8 font-bold hover:underline text-base md:text-[16px]" data-v-4e44263b>Vi\u0161e detalja o UVD Robots</a></div><div class="sectionTwo-img-container image-scroll-ani hide" data-v-4e44263b></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section2.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-4e44263b"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sectionThree text-gray-default" }, _attrs))} data-v-00e676fc><div class="sectionThree-img-container image-scroll-ani hide" data-v-00e676fc></div><div class="sectionThree-info-container text-scroll-ani" data-v-00e676fc><h2 class="font-bold text-2xl md:text-4xl" data-v-00e676fc>#covidfree</h2><p data-v-00e676fc> Primjenom Ultraljubi\u010Dastog svjetla, (ultravioletnog, UV-c), UVD-robot uni\u0161tava strukturu DNA u svim mikroorganizmima. </p><p data-v-00e676fc> Pru\u017Eamo uslugu \u010Di\u0161\u0107enja velikih i malih prostora, uz pomo\u0107 robota, koji u najkra\u0107em mogu\u0107em roku i autonomno dezinficiraju zatvorene prostore gdje sigurnost i \u201Cosje\u0107aj \u010Disto\u0107e\u201D mora biti na prvom mjestu. </p></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section3.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-00e676fc"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sectionFour" }, _attrs))} data-v-4c9cfbcc><div class="sectionFour-img-container" data-v-4c9cfbcc></div><div class="sectionFour-info-container bg-blue-default" data-v-4c9cfbcc><h2 class="text-white font-semibold" data-v-4c9cfbcc> \u017Delite va\u0161im klijentima i zaposlenicima pru\u017Eiti potpuno \u010Dist prostor? Kontaktirajte nas odmah, neka va\u0161 prostor bude #covidfree! </h2></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section4.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-4c9cfbcc"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sectionFive" }, _attrs))} data-v-ca3ab0ec><div class="sectionFive-info-container image-scroll-ani hide" data-v-ca3ab0ec><h2 class="font-bold text-gray-default text-2xl md:text-4xl" data-v-ca3ab0ec> Na\u0161e tehni\u010Dko osoblje spremno je u najkra\u0107em mogu\u0107em roku izvr\u0161iti uslugu koja uklju\u010Duje: </h2><ul class="sectionFive-list text-gray-default" data-v-ca3ab0ec><li data-v-ca3ab0ec>dopremu UV-dezinfekcijskog robota</li><li data-v-ca3ab0ec>mapiranje prostorija predvi\u0111enih za dezinfekciju</li><li data-v-ca3ab0ec>kontrolu rada tijekom dezinfekcije</li><li data-v-ca3ab0ec>otpremu UV-dezinfekcijskog robota</li></ul><a href="http://vedras.hr/download/Vedras_dezinfekcija_UVD_Robotima.pdf" target="_blank" rel="noreferrer noopener" data-v-ca3ab0ec><button class="mt-10 bg-blue-default w-[216px] h-[57px] p-4 text-white border-[1px] border-blue-default hover:bg-white hover:text-blue-default" data-v-ca3ab0ec> PREUZMI BRO\u0160URU </button></a></div><div class="sectionFive-img-container text-scroll-ani hide" data-v-ca3ab0ec></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section5.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-ca3ab0ec"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer bg-blue-default text-4xl text-white" }, _attrs))} data-v-c9646182><p data-v-c9646182>Za vi\u0161e informacija pi\u0161ite nam na mail:</p><div data-v-c9646182><a class="font-bold hover:underline" href="mailto:info@verdas.hr" data-v-c9646182>info@vedras.hr</a> ili nazovite broj <a class="font-bold hover:underline" href="tel:385989608920" data-v-c9646182>+385 98 9608 920</a></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footerSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c9646182"]]);
const meta$2 = void 0;
const _sfc_main$2 = {
  name: "LoadingComponent"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-c59e24bc><div class="loading" data-v-c59e24bc><span data-v-c59e24bc></span><div class="loading-word" data-v-c59e24bc>Loading...</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loading.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const loading = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c59e24bc"]]);
const meta$1 = void 0;
const meta = void 0;
const _routes = [
  {
    name: "en",
    path: "/en",
    file: "/home/neno/WebProjects/lloyds-verdas-frontend-assigment/pages/en/index.vue",
    children: [],
    meta: meta$3,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.dd2e4270.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "/home/neno/WebProjects/lloyds-verdas-frontend-assigment/pages/index.vue",
    children: [],
    meta: meta$2,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.277ba6e4.mjs').then((m) => m.default || m)
  },
  {
    name: "user-userid",
    path: "/user/:userid",
    file: "/home/neno/WebProjects/lloyds-verdas-frontend-assigment/pages/user/[userid].vue",
    children: [],
    meta: meta$1,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_userid_.42e74d5d.mjs').then((m) => m.default || m)
  },
  {
    name: "user",
    path: "/user",
    file: "/home/neno/WebProjects/lloyds-verdas-frontend-assigment/pages/user/index.vue",
    children: [],
    meta,
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index.f1453c24.mjs').then((m) => m.default || m)
  }
];
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions
};
const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (typeof result === "boolean") {
    return result;
  }
  return createError(result);
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b, _c, _d;
  let __temp, __restore;
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = (_b = (_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) != null ? _b : createMemoryHistory(routerBase);
  const routes = (_d = (_c = routerOptions.routes) == null ? void 0 : _c.call(routerOptions, _routes)) != null ? _d : _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c2, _d2;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a2, _b2;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a2 = initialLayout.value) != null ? _a2 : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.event.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const message$1 = "Hello!";
const language$1 = "Language";
const en = {
  message: message$1,
  language: language$1
};
const message = "Pozdrav!";
const language = "Jezik";
const hr = {
  message,
  language
};
const plugins_i18n_js_sVHQBgnb3t = defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "hr",
    messages: {
      hr,
      en
    }
  });
  vueApp.use(i18n);
});
const _plugins = [
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_head_runtime_mixin_plugin_mjs_prWV5EzJWI,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  plugins_i18n_js_sVHQBgnb3t
];
const _sfc_main$1 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component.6420b0e4.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = resolveComponent("App");
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const layouts = {};
const LayoutLoader = defineComponent({
  props: {
    name: String,
    ...{}
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => {
      return h(LayoutComponent, {}, context.slots);
    };
  }
});
const __nuxt_component_0 = defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const injectedRoute = inject("_route");
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(props.name)) != null ? _a : route.meta.layout) != null ? _b : "default";
    });
    return () => {
      var _a;
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (_a = route.meta.layoutTransition) != null ? _a : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => _wrapIf(LayoutLoader, hasLayout && { key: layout.value, name: layout.value, hasTransition: !!transitionProps }, context.slots).default()
      }).default();
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b, _c, _d;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          const transitionProps = (_b = (_a = props.transition) != null ? _a : routeProps.route.meta.pageTransition) != null ? _b : appPageTransition;
          const done = nuxtApp.deferHydration();
          return _wrapIf(
            Transition,
            transitionProps,
            wrapInKeepAlive(
              (_d = (_c = props.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component).finally(done)
              }, { default: () => h(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) })
            )
          ).default();
        }
      });
    };
  }
});
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main$1);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, __nuxt_component_0$2 as a, __nuxt_component_1$2 as b, __nuxt_component_2$1 as c, __nuxt_component_3$1 as d, entry$1 as default, __nuxt_component_4$1 as e, __nuxt_component_5$1 as f, __nuxt_component_6$1 as g, __nuxt_component_0$1 as h, __nuxt_component_1$1 as i, __nuxt_component_2 as j, __nuxt_component_3 as k, __nuxt_component_4 as l, __nuxt_component_5 as m, __nuxt_component_6 as n, loading as o, __nuxt_component_0$3 as p, useHead as q, useRoute as u };
//# sourceMappingURL=server.mjs.map
