<template>
  <div>
    <div v-for="review in reviews">This is a review</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const reviews = ref(null);

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
});

const props = defineProps<{
  showName: string;
}>();
</script>
