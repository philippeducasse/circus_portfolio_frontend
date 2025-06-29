<template>
  <div :class="containerClass">
    <div class="flex flex-col justify-evenly flex-1 p-4">
      <h2 class="text-left mb-6 md:mb-12">{{ project.projectName }}</h2>

      <p class="" v-if="project.projectName !== 'Ah Bah Bravo!'">{{ $t(project.projectName.toLocaleLowerCase()) }}</p>
      <p class="" v-else>{{ $t("abb") }}</p>

    </div>
    <div class="relative w-screen self-end lg:w-[60%] max-w-4xl aspect-video">
      <iframe class="absolute w-full h-full" width="560" height="315" :src=project.trailerUrl
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  project: {
    projectName: string
    trailerUrl: string
  }
  index: number
}>()

const containerClass = computed(() =>
  props.index % 2 === 1
    ? 'flex flex-col lg:flex-row-reverse mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl'
    : 'flex flex-col lg:flex-row mt-10 md:mt-20 mb-24 gap-10 w-full max-w-6xl'
)

</script>

<style scoped></style>