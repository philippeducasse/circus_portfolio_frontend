<template>
  <h2 class="text-center py-8 px-4">{{ $t("projects_header") }}</h2>

  <div class="flex flex-col items-center mt-4 mb-4 text-left">
    <Project v-for="(project, index) in projects" :key="project.projectName" :project="project" :index="index" />
  </div>
</template>
<script setup lang="ts">
import Project from '~/components/page-components/projects/Project.vue';
const projects = [
  { projectName: "Lulu", videoId: "mRTKk2jQAa0" },
  { projectName: "Ah Bah Bravo!", videoId: "nIY84br9loQ" },
  { projectName: "Stone", videoId: "9cfrJuHebWM" },
  { projectName: "Forgotten", videoId: "_9mTJzKfU1s" }
]
</script>
