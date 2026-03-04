<template>
  <div class="max-w-4xl">
    <h2>{{ $t("reviews") }}</h2>
    <div class="flex md:flex-row flex-col gap-y-4 justify-between mt-16">
      <h3>{{ $t("reviewsSubtitle") }}</h3>
      <UButton class="self-center" size="lg" icon="i-lucide-pencil-line" @click="showForm = true">
        {{ $t("formTitle") }}
      </UButton>
    </div>
    <div v-for="(projectReviews, project_id) in groupedReviews" :key="project_id" class="my-8">
      <h2 class="text-primary-400 mb-8 text-center">{{ projectMap[project_id]?.title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ReviewCard
          v-for="review in projectReviews"
          :key="review.id"
          :review="review"
          show-project-title
        />
      </div>
    </div>
  </div>

  <UModal v-model:open="showForm">
    <template #content>
      <div class="p-6">
        <ReviewForm @submit="handleSubmit" />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import ReviewCard, { type Review } from "~/components/page-components/reviews/ReviewCard.vue";
import ReviewForm from "~/components/page-components/reviews/ReviewForm.vue";

const router = useRoute();
const reviews = ref<Review[]>([]);
const showForm = ref(false);
const { projects } = useProjects();

const fetchReviews = async () => {
  try {
    const response = await fetch("http://localhost:8000");
    reviews.value = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchReviews();
  if (router.query.show) {
    showForm.value = true;
  }
});

const toast = useToast();

function showToast(message: string) {
  console.log("toasting");
  toast.add({
    title: message,
    class: "text-center",
  });
}

const groupedReviews = computed(() => {
  if (!reviews.value) return {};
  return reviews.value.reduce((acc: Record<number, Review[]>, review: Review) => {
    (acc[review.project_id] ??= []).push(review);
    return acc;
  }, {});
});

const projectMap = computed(() => {
  return Object.fromEntries(projects.value.map((p) => [p.id, p]));
});

console.log({ groupedReviews });
const handleSubmit = async (data: unknown) => {
  showForm.value = false;
  console.log("submitting", { data });

  const response = await fetch("http://localhost:8000", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("showing toast!");
    showToast("Thank you for your review!");
    await fetchReviews();
  }
};
</script>
