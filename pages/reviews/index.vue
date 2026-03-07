<template>
  <div class="max-w-4xl">
    <h2>{{ $t("reviews") }}</h2>
    <div class="flex md:flex-row flex-col gap-y-4 justify-evenly mt-16">
      <h3>{{ $t("reviewsSubtitle") }}</h3>
      <UButton class="self-center" size="lg" icon="i-lucide-pencil-line" @click="showForm = true">
        {{ $t("formTitle") }}
      </UButton>
    </div>
    <div v-for="(projectReviews, project_id) in groupedReviews" :key="project_id" class="my-16">
      <h2 class="text-primary-400 mb-8 text-center">
        {{ project_id === `-1` ? $t("otherReviews") : projectMap[project_id]?.title }}
      </h2>
      <div class="md:columns-2 columns-1 gap-8 space-y-8">
        <ReviewCard
          v-for="review in projectReviews"
          :key="review.id"
          :review="review"
          show-project-title
        />
      </div>
    </div>
  </div>

  <ReviewFormModal v-model:open="showForm" />
</template>

<script setup lang="ts">
import ReviewCard from "~/components/page-components/reviews/ReviewCard.vue";
import ReviewFormModal from "~/components/page-components/reviews/ReviewFormModal.vue";
import { type Review } from "~/composables/useReviews";

const router = useRoute();
const showForm = ref(false);
const { projects } = useProjects();
const { reviews, fetchReviews } = useReviews();

onMounted(() => {
  fetchReviews();
  if (router.query.show) {
    showForm.value = true;
  }
});

const groupedReviews = computed(() => {
  return reviews.value.reduce((acc: Record<number, Review[]>, review: Review) => {
    (acc[review.project_id ?? -1] ??= []).push(review);
    return acc;
  }, {});
});

const projectMap = computed(() => {
  return Object.fromEntries(projects.value.map((p) => [p.id, p]));
});
</script>
