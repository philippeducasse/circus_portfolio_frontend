<template>
  <hr v-if="index > 0" class="w-full max-w-6xl border-t border-white/10 mt-20" />
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
  <UPageGrid
    v-if="project.images"
    class="mt-16 gap-3 w-full max-w-6xl mx-auto px-4 md:px-0 auto-rows-[250px]"
    ><img
      v-for="(image, index) in project.images"
      :key="index"
      :src="image.src"
      :alt="image.alt"
      :class="`rounded-lg w-full aspect-[4/3] object-cover object-top cursor-pointer ${image.class}`"
      @click="openCarousel(index)"
  /></UPageGrid>
  <div class="my-6 w-full">
    <h3 class="">{{ $t("reviews") }}</h3>
    <Review v-if="reviews" />
    <UButton icon="i-lucide-pencil-line" :to="`/reviews?show=${project.id}`">{{
      $t("formTitle")
    }}</UButton>
  </div>
  <ImageCarouselModal
    v-model="isModalOpen"
    :items="project.images || []"
    :start-index="startIndex"
  />
</template>

<script setup lang="ts">
import YoutubeEmbedding from "./YoutubeEmbedding.vue";
import Review from "~/components/page-components/projects/Review.vue";

interface Image {
  src: string;
  alt: string;
  class?: string;
}

const props = defineProps<{
  project: {
    id: number;
    title: string;
    videoId: string;
    dossierPath?: string;
    length: string;
    stage: string;
    images?: Image[];
  };
  index: number;
}>();

const isModalOpen = ref(false);
const startIndex = ref(0);
const reviews = ref(null);

const fetchReviews = async () => {
  try {
    const response = await fetch("http://localhost:8000");
    reviews.value = await response.json();
    console.log("reviews: ", reviews.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchReviews();
});

const openCarousel = (index: number) => {
  startIndex.value = index;
  isModalOpen.value = true;
};

const containerClass = computed(() =>
  props.index % 2 === 1
    ? "flex flex-col lg:flex-row-reverse mt-10 md:mt-20  gap-10 w-full max-w-6xl"
    : "flex flex-col lg:flex-row mt-10 md:mt-20  gap-10 w-full max-w-6xl",
);
</script>

<style scoped></style>
