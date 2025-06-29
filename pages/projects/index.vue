<template>
  <h3 class="text-center py-8 px-4">{{ $t("projects_header") }}</h3>

  <div class="flex flex-col items-center mt-4 mb-4 text-left">
    <Project v-for="(project, index) in projects" :key="project.projectName" :project="project" :index="index" />
  </div>
</template>
<script setup lang="ts">
import Project from '~/components/page-components/projects/Project.vue';
const projects = [
  { projectName: "Lulu", trailerUrl: "https://www.youtube-nocookie.com/embed/mRTKk2jQAa0?si=OsjYt2B87_LdDiao&amp;controls=0" },
  { projectName: "Ah Bah Bravo!", trailerUrl: "https://www.youtube-nocookie.com/embed/gq4O41LFR6g?si=g6Its14Au8zlKcCw&amp;controls=0" },
  { projectName: "Stone", trailerUrl: "https://www.youtube-nocookie.com/embed/9cfrJuHebWM?si=r7n0j84CZaZhIeoV&amp;controls=0" },
  { projectName: "Forgotten", trailerUrl: "https://www.youtube-nocookie.com/embed/_9mTJzKfU1s?si=cslwc5-YOwRxw53V&amp;controls=0" }
]
</script>