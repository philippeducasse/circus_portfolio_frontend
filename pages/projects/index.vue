<template>
  <h2 class="text-center py-8 px-4">{{ $t("projects") }}</h2>
  <h3 class="text-center py-8 px-4">{{ $t("projects_header") }}</h3>
  <div class="flex flex-col items-center mt-4 mb-4 text-left">
    <ProjectDetailView
      v-for="(project, index) in projects"
      :key="project.title"
      :project="project"
      :index="index"
      :reviews="reviews?.filter((r: Review) => r.project_id === project.id)"
    />
  </div>
</template>
<script setup lang="ts">
import { useProjects } from "~/composables/useProjects";
import ProjectDetailView from "~/components/page-components/projects/ProjectDetailView.vue";
import { type Review } from "~/composables/useReviews";

const { projects } = useProjects();
const { reviews, fetchReviews } = useReviews();

onMounted(() => {
  fetchReviews();
});
</script>
