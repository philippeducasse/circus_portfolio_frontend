import { _ as _export_sfc, b as __nuxt_component_1$1 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5" }, _attrs))}><div class="flex flex-col gap-6"><div class=""><h2>${ssrInterpolate(_ctx.$t("support_finance"))}</h2><div class="flex gap-6 justify-center flex-wrap items-center my-16"><div class="bg-white h-fit pt-2 pl-2 min-w-fit">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/bundes.png",
    width: "250",
    class: "",
    height: "30",
    alt: "Beauftragt für Bundesregierung und Kunst"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/nsk.jpg",
    width: "160",
    class: "",
    alt: "Neustart Kultur"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/gvl.jpg",
    width: "160",
    class: "",
    alt: "GVL"
  }, null, _parent));
  _push(`</div></div><div class=""><h2>${ssrInterpolate(_ctx.$t("support_artistic"))}</h2><div class="flex gap-6 justify-center flex-wrap items-center mt-16">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/katapult.png",
    width: "200",
    height: "60",
    alt: "katapult"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/zm.jpg",
    width: "150",
    height: "150",
    alt: "Zirkus Mond"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/vuesch.png",
    width: "150",
    class: "",
    alt: "Vuesch"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/ufer.png",
    width: "200",
    class: "",
    alt: "Ufer Studios"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/schatz.png",
    width: "200",
    class: "",
    alt: "Schatzinsel"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/Noctambules.png",
    width: "200",
    class: "",
    alt: "Noctambules"
  }, null, _parent));
  _push(`<div class="bg-white h-fit p-2">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/etage.png",
    width: "200",
    class: "",
    alt: "Die Etage"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/crac.png",
    width: "120",
    class: "",
    alt: "CRAC"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/support/acud.jpg",
    width: "120",
    class: "",
    alt: "ACUD"
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/support/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BoUnvO3Z.mjs.map
