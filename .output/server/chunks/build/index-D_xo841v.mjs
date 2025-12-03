import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Carousel-GSPrxvBI.mjs';
import { b as __nuxt_component_1$1 } from './server.mjs';
import 'embla-carousel-vue';
import 'reka-ui';
import '@vueuse/core';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "/img/images/cropped-ABB2.webp",
      "/img/images/ABB3.webp",
      "/img/images/cropped-staff3.webp",
      "/img/images/cropped-ejc.webp",
      "/img/images/cropped-foot.webp",
      "/img/images/cropped-Amimi.webp",
      "/img/images/cropped-spektakel.webp"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = _sfc_main$2;
      const _component_NuxtImg = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center flex flex-col h-full items-center gap-y-[5vh] justify-evenly md:-mt-4" }, _attrs))}><h1 class="mt-16 md:mt-4">Philippe Ducasse</h1>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        ref: "carouselRef",
        items,
        ui: { item: "basis-full" },
        class: "w-72 md:w-2/3 mx-auto rounded-lg overflow-hidden",
        autoplay: { delay: 2e3 },
        loop: ""
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: item,
              draggable: "false",
              class: "w-full h-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: item,
                draggable: "false",
                class: "w-full h-full"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2>${ssrInterpolate(_ctx.$t("hero_subtitle"))}</h2></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page-components/landing/Hero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Hero = Object.assign(_sfc_main$1, { __name: "PageComponentsLandingHero" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Hero, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D_xo841v.mjs.map
