<template>
  <h2 class="text-center py-8 px-4">{{ $t("projects_header") }}</h2>

  <div class="flex flex-col items-center mt-4 mb-4 text-left">
    <Project
      v-for="(project, index) in projects"
      :key="project.projectName"
      :project="project"
      :index="index"
    />
  </div>
</template>
<script setup lang="ts">
import Project from "~/components/page-components/projects/Project.vue";
import { ref, onMounted } from "vue";

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

const comments = ref(null);

const projects = [
  {
    projectName: "Lulu",
    projectId: 1,
    videoId: "mRTKk2jQAa0",
    dossierPath: "/dossiers/Dossier_Lulu_2026-en.pdf",
  },
  {
    projectName: "Ah Bah Bravo!",
    projectId: 2,

    videoId: "nIY84br9loQ",
    dossierPath: "/dossiers/AhBahBravo_2026_compressed.pdf",
  },
  { projectName: "Stone", videoId: "9cfrJuHebWM", projectId: 3 },
  { projectName: "Forgotten", videoId: "_9mTJzKfU1s", projectId: 4 },
];
</script>
