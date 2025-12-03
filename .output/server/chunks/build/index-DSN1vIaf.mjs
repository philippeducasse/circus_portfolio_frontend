import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CalendarYear",
  __ssrInlineRender: true,
  props: {
    year: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "preformatted-text" }, _attrs))}><h3 class="my-8">${ssrInterpolate(__props.year)}</h3><p>${ssrInterpolate(_ctx.$t(`calendar_${__props.year}`))}</p></li>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page-components/calendar/CalendarYear.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CalendarYear = Object.assign(_sfc_main$1, { __name: "PageComponentsCalendarYear" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const years = [2021, 2022, 2023, 2024];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4" }, _attrs))}><h2 class="pb-8 md:pb-16">${ssrInterpolate(_ctx.$t("calendar_title"))}</h2><div class="flex flex-col md:gap-16 gap-y-10 pb-8 md:pb-16 text-left"><ul class=""><li class="preformatted-text decoration-none"><h3 class="my-8">${ssrInterpolate(_ctx.$t("calendar_upcoming_title"))}</h3><p>${ssrInterpolate(_ctx.$t("calendar_2025"))}</p></li></ul></div><div class="flex flex-col gap-y-10 text-left"><h3>${ssrInterpolate(_ctx.$t("calendar_past_title"))}</h3><!--[-->`);
      ssrRenderList(years.reverse(), (year) => {
        _push(`<ul>`);
        _push(ssrRenderComponent(CalendarYear, { year }, null, _parent));
        _push(`</ul>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calendar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DSN1vIaf.mjs.map
