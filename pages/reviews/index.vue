<template>
  <div>
    <h2>{{ $t("reviews") }}</h2>
    <h3>{{ $t("reviewsSubtitle") }}</h3>

    <Review v-for="review in reviews" :key="review" :review="review" />

    <UButton class="" size="lg" icon="i-lucide-pencil-line" @click="showForm = true">
      {{ $t("formTitle") }}
    </UButton>
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
import Review from "~/components/page-components/projects/Review.vue";
import ReviewForm from "~/components/page-components/reviews/ReviewForm.vue";

const router = useRoute();
const reviews = ref(null);
const showForm = ref(false);

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

const handleSubmit = async (data: unknown) => {
  showForm.value = false;
  console.log({ data });

  const response = await fetch("http://localhost:8000", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("showing toast!");
    showToast("Thank you for your review!");
  }
};
</script>
