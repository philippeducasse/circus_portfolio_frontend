<template>
  <div>
    <div v-for="comment in comments">This is a comment</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const comments = ref(null);

const fetchComments = async () => {
  try {
    const response = await fetch("http://localhost:8000");
    comments.value = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchComments();
});

const props = defineProps<{
  showName: string;
}>();
</script>
