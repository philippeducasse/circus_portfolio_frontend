<template>
  <div :class="containerClass">
    <div class="flex flex-col justify-evenly flex-1 md:p-0 p-4">
      <h2 class="text-left mb-6 md:mb-12">{{ project.projectTitle }}</h2>

      <p class="" v-if="project.projectTitle !== 'Ah Bah Bravo!'">
        {{ $t(project.projectTitle.toLowerCase()) }}
      </p>
      <p class="" v-else>{{ $t("abb") }}</p>
      <div class="flex justify-between mt-6">
        <p class="font-bold text-sm">
          {{ $t("length") }}: <span class="font-normal">{{ $t(project.length) }} min</span>
        </p>
        <p class="font-bold text-sm">
          {{ $t("stage") }}: <span class="font-normal">{{ $t(project.stage) }}</span>
        </p>
      </div>
      <!-- <p class="" v-if="project.showDetails">SHOW MORE</p> -->
      <div class="flex justify-center mt-8 align-middle gap-6">
        <!-- <UButton
          variant="solid"
          class="hover:cursor-pointer"
          :label="!project.showDetails ? $t('more_info') : $t('less_info')"
          @click="toggleShowDetails"
        /> -->
        <a
          v-if="project.dossierPath"
          class="hover:cursor-pointer p-1"
          :href="project.dossierPath"
          download
        >
          {{ $t("download_dossier") }}
        </a>
      </div>
    </div>
    <div class="relative w-screen self-center lg:w-[60%] max-w-4xl aspect-video">
      <YoutubeEmbedding :video-id="project.videoId" :title="project.projectTitle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import YoutubeEmbedding from "./YoutubeEmbedding.vue";

const props = defineProps<{
  project: {
    projectId: number;
    projectTitle: string;
    videoId: string;
    showDetails?: boolean;
    dossierPath?: string;
    length: string;
    stage: string;
  };
  index: number;
}>();

const toggleShowDetails = () => {
  emit("toggleDetails", props.project.projectId);
};

const emit = defineEmits<{ (e: "toggleDetails", projectId: number): void }>();

const containerClass = computed(() =>
  props.index % 2 === 1
    ? "flex flex-col lg:flex-row-reverse mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl"
    : "flex flex-col lg:flex-row mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl",
);
</script>

<style scoped></style>
