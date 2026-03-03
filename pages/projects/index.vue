<template>
  <h2 class="text-center py-8 px-4">{{ $t("projects") }}</h2>
  <h3 class="text-center py-8 px-4">{{ $t("projects_header") }}</h3>
  <div class="flex flex-col items-center mt-4 mb-4 text-left">
    <ProjectDetailView
      v-for="(project, index) in projects"
      :key="project.title"
      :project="project"
      :index="index"
      :reviews="reviews?.filter((r) => r.project_id === project.id)"
    />
  </div>
</template>
<script setup lang="ts">
import { useProjects } from "~/composables/useProjects";
import ProjectDetailView from "~/components/page-components/projects/ProjectDetailView.vue";

const { projects } = useProjects();
const reviews = ref();

const fetchReviews = async () => {
  try {
    const response = await fetch("http://localhost:8000");
    reviews.value = await response.json();
    console.log("SETTING REVIEWS: ", reviews.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

console.log("projects", projects.value, reviews.value);
onMounted(() => {
  fetchReviews();
});
</script>
