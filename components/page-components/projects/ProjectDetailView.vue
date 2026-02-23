<template>
  <div :class="containerClass" :id="project.title">
    <div class="flex flex-col justify-evenly flex-1 md:p-0 p-4">
      <h2 class="text-left mb-6 md:mb-12">{{ project.title }}</h2>

      <p v-if="project.title !== 'Ah Bah Bravo!'">
        {{ $t(project.title.toLowerCase()) }}
      </p>
      <p v-else>{{ $t("abb") }}</p>
      <div class="flex justify-between mt-6">
        <p class="font-bold text-sm">
          {{ $t("length") }}: <span class="font-normal">{{ $t(project.length) }} min</span>
        </p>
        <p class="font-bold text-sm">
          {{ $t("stage") }}: <span class="font-normal">{{ $t(project.stage) }}</span>
        </p>
      </div>
      <div class="flex justify-center mt-8 align-middle gap-6">
        <ULink
          v-if="project.dossierPath"
          class="hover:cursor-pointer p-1"
          :href="project.dossierPath"
          download
        >
          {{ $t("download_dossier") }}
        </ULink>
      </div>
    </div>
    <div class="relative w-screen self-center lg:w-[60%] max-w-4xl aspect-video">
      <YoutubeEmbedding :video-id="project.videoId" :title="project.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import YoutubeEmbedding from "./YoutubeEmbedding.vue";

const props = defineProps<{
  project: {
    id: number;
    title: string;
    videoId: string;
    dossierPath?: string;
    length: string;
    stage: string;
  };
  index: number;
}>();

const containerClass = computed(() =>
  props.index % 2 === 1
    ? "flex flex-col lg:flex-row-reverse mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl"
    : "flex flex-col lg:flex-row mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl",
);
</script>

<style scoped></style>
