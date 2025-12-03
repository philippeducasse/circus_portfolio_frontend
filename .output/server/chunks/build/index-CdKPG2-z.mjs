import { defineComponent, computed, mergeProps, unref, ref, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "YoutubeEmbedding",
  __ssrInlineRender: true,
  props: {
    videoId: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    const loaded = ref(false);
    const thumbnailUrl = computed(
      () => `https://img.youtube.com/vi/${props.videoId}/maxresdefault.jpg`
    );
    const embedUrl = computed(
      () => `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1`
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(loaded)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-full cursor-pointer group" }, _attrs))}><img${ssrRenderAttr("src", unref(thumbnailUrl))}${ssrRenderAttr("alt", __props.title)} class="w-full h-full object-cover"><div class="absolute inset-0 flex items-center justify-center group-hover:bg-opacity-40 transition"><svg class="w-20 h-20 text-white" viewBox="0 0 68 48"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg></div></div>`);
      } else {
        _push(`<iframe${ssrRenderAttrs(mergeProps({
          class: "absolute w-full h-full",
          src: unref(embedUrl),
          title: "YouTube video player",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          referrerpolicy: "strict-origin-when-cross-origin",
          allowfullscreen: ""
        }, _attrs))}></iframe>`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page-components/projects/YoutubeEmbedding.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const YoutubeEmbedding = Object.assign(_sfc_main$2, { __name: "PageComponentsProjectsYoutubeEmbedding" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Project",
  __ssrInlineRender: true,
  props: {
    project: {},
    index: {}
  },
  setup(__props) {
    const props = __props;
    const containerClass = computed(
      () => props.index % 2 === 1 ? "flex flex-col lg:flex-row-reverse mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl" : "flex flex-col lg:flex-row mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(containerClass) }, _attrs))}><div class="flex flex-col justify-evenly flex-1 p-4"><h2 class="text-left mb-6 md:mb-12">${ssrInterpolate(__props.project.projectName)}</h2>`);
      if (__props.project.projectName !== "Ah Bah Bravo!") {
        _push(`<p class="">${ssrInterpolate(_ctx.$t(__props.project.projectName.toLocaleLowerCase()))}</p>`);
      } else {
        _push(`<p class="">${ssrInterpolate(_ctx.$t("abb"))}</p>`);
      }
      _push(`</div><div class="relative w-screen self-end lg:w-[60%] max-w-4xl aspect-video">`);
      _push(ssrRenderComponent(YoutubeEmbedding, {
        "video-id": __props.project.videoId,
        title: __props.project.projectName
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page-components/projects/Project.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Project = Object.assign(_sfc_main$1, { __name: "PageComponentsProjectsProject" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      { projectName: "Lulu", videoId: "mRTKk2jQAa0" },
      { projectName: "Ah Bah Bravo!", videoId: "nIY84br9loQ" },
      { projectName: "Stone", videoId: "9cfrJuHebWM" },
      { projectName: "Forgotten", videoId: "_9mTJzKfU1s" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2 class="text-center py-8 px-4">${ssrInterpolate(_ctx.$t("projects_header"))}</h2><div class="flex flex-col items-center mt-4 mb-4 text-left"><!--[-->`);
      ssrRenderList(projects, (project, index) => {
        _push(ssrRenderComponent(Project, {
          key: project.projectName,
          project,
          index
        }, null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CdKPG2-z.mjs.map
