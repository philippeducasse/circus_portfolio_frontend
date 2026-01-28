<template>
  <div :class="containerClass">
    <div class="flex flex-col justify-evenly flex-1 p-4">
      <h2 class="text-left mb-6 md:mb-12">{{ project.projectName }}</h2>

      <p class="" v-if="project.projectName !== 'Ah Bah Bravo!'">
        {{ $t(project.projectName.toLocaleLowerCase()) }}
      </p>
      <p class="" v-else>{{ $t("abb") }}</p>
      <div class="flex justify-center">
        <!-- <UButton
          variant="link"
          class="hover:cursor-pointer"
          :label="$t('more_info')"
          @click="toggleShowDetails"
        /> -->
        <a
          v-if="project.dossierPath"
          class="hover:cursor-pointer mt-2"
          :href="project.dossierPath"
          download
        >
          {{ $t("download_dossier") }}
        </a>
      </div>
    </div>
    <div class="relative w-screen self-end lg:w-[60%] max-w-4xl aspect-video">
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
    : "flex flex-col lg:flex-row mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl"
);
</script>

<style scoped></style>
