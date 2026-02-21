<template>
  <div :class="containerClass">
    <div class="flex flex-col justify-evenly flex-1 p-4">
      <h2 class="text-left mb-6 md:mb-12">{{ project.projectName }}</h2>

      <p class="" v-if="project.projectName !== 'Ah Bah Bravo!'">
        {{ $t(project.projectName.toLowerCase()) }}
      </p>
      <p class="" v-else>{{ $t("abb") }}</p>
      <!-- <p class="" v-if="showDetails">SHOW MORE</p> -->
      <div class="flex justify-center mt-8 align-middle gap-6">
        <!-- <UButton
          variant="solid"
          class="hover:cursor-pointer"
          :label="showDetails ? $t('more_info') : $t('less_info')"
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
      <YoutubeEmbedding :video-id="project.videoId" :title="project.projectName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import YoutubeEmbedding from "./YoutubeEmbedding.vue";

const props = defineProps<{
  project: {
    projectName: string;
    videoId: string;
    dossierPath?: string;
  };
  // showDetails: boolean
  index: number;
}>();

const showDetails = ref(false);
const toggleShowDetails = () => {
  showDetails.value = !showDetails.value;
};

const containerClass = computed(() =>
  props.index % 2 === 1
    ? "flex flex-col lg:flex-row-reverse mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl"
    : "flex flex-col lg:flex-row mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl",
);
</script>

<style scoped></style>
