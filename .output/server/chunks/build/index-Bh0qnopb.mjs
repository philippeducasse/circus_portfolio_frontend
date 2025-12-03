import { _ as _sfc_main$1 } from './Carousel-GSPrxvBI.mjs';
import { b as __nuxt_component_1$1, c as _sfc_main$8 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderTeleport } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "img/images/ABB5.webp",
      "img/images/ABB2.webp",
      "img/images/Amimi.webp",
      // "img/images/ball.webp",
      // "img/images/ball2.webp",
      "img/images/ejc.webp",
      "img/images/ejc2.webp",
      "img/images/ejc3.webp",
      // "img/images/foot.webp",
      "img/images/fusion.webp",
      "img/images/hs_ejc.webp",
      // "img/images/hs.webp",
      "img/images/kaos.webp",
      "img/images/lulu.webp",
      "img/images/maranam.webp",
      "img/images/maranam2.webp",
      "img/images/philo_rolli.webp",
      "img/images/snowlulu2.webp",
      "img/images/spektakel.webp"
      // "img/images/staff.webp",
      // "img/images/staff2.webp",
      // "img/images/staff3.webp",
    ];
    const selectedImage = ref(void 0);
    const openImage = (url) => {
      isModalOpen.value = true;
      selectedImage.value = url;
    };
    const closeImage = () => {
      isModalOpen.value = false;
    };
    const isModalOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = _sfc_main$1;
      const _component_NuxtImg = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 mb-16" }, _attrs))}><h2 class="pb-8 md:pb-16">${ssrInterpolate(_ctx.$t("about_title"))}</h2><div class="flex flex-col md:flex-row md:gap-16 gap-y-10 items-center"><p class="flex-1 text-left">${ssrInterpolate(_ctx.$t("about"))}</p><div class="relative flex flex-col w-4/5 md:w-1/2 items-center">`);
      _push(ssrRenderComponent(_component_UCarousel, {
        ref: "carouselRef",
        items,
        class: "w-full mx-auto rounded-lg flex items-center place-items-center h-full",
        ui: { container: "items-center" },
        arrows: ""
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: item,
              draggable: "false",
              class: "cursor-pointer object-contain max-h-[600px] w-auto my-auto",
              onClick: ($event) => openImage(item),
              alt: item
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: item,
                draggable: "false",
                class: "cursor-pointer object-contain max-h-[600px] w-auto my-auto",
                onClick: ($event) => openImage(item),
                alt: item
              }, null, 8, ["src", "onClick", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        label: _ctx.$t("full_screen"),
        onClick: ($event) => isModalOpen.value = true,
        variant: "link",
        class: "absolute -bottom-22 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition"
      }, null, _parent));
      _push(`</div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isModalOpen)) {
          _push2(`<div class="fixed inset-0 dark bg-(--ui-bg) flex justify-center items-center z-50 pointer-events-auto"><div class="relative w-fit">`);
          _push2(ssrRenderComponent(_component_UCarousel, {
            ref: "carouselRef",
            items,
            ui: { item: "basis-full", container: "place-items-center" },
            class: "md:w-4/5 mx-auto rounded-lg flex items-center",
            arrows: ""
          }, {
            default: withCtx(({ item }, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_NuxtImg, {
                  src: item,
                  draggable: "false",
                  class: "object-contain h-full max-h-[600px] w-full",
                  alt: item
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtImg, {
                    src: item,
                    draggable: "false",
                    class: "object-contain h-full max-h-[600px] w-full",
                    alt: item
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(unref(_sfc_main$8), {
            onClick: closeImage,
            label: "✕",
            class: "absolute -bottom-12 md:bottom-0 right-4 md:right-12"
          }, null, _parent));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "#teleports", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bh0qnopb.mjs.map
