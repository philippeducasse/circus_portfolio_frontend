<template>
  <h2 class="text-center py-8 px-4">{{ $t("projects_header") }}</h2>

  <div class="flex flex-col items-center mt-4 mb-4 text-left">
    <Project
      v-for="(project, index) in projects"
      :key="project.projectTitle"
      :project="project"
      :index="index"
      @toggleDetails="handleToggleDetails"
    />
  </div>
</template>
<script setup lang="ts">
import { useProjects } from "~/composables/useProjects";
import Project from "~/components/page-components/projects/Project.vue";

const { projects } = useProjects();
const handleToggleDetails = (projectId: number) => {
  projects.value = projects.value.map((project) => {
    if (project.projectId === projectId) {
      return { ...project, showDetails: !project.showDetails };
    }
    return project;
  });
};
</script>
