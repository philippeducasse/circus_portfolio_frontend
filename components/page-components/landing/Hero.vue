<template>
  <div class="text-center flex flex-col h-full items-center gap-y-[5vh] justify-evenly md:-mt-4">
    <h1 class="mt-16 md:mt-4">Philippe Ducasse</h1>
    <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
      class="w-72 md:w-2/3 mx-auto rounded-lg overflow-hidden" :autoplay="{ delay: 2000 }" loop>
      <NuxtImg :src="item" draggable="false" class="w-full h-full" />
    </UCarousel>
    <h2>{{ $t("hero_subtitle") }}</h2>
  </div>
</template>

<script setup lang="ts">
const items = [

  "/img/images/cropped-staff3.webp",
  "/img/images/cropped-ejc.webp",
  "/img/images/cropped-foot.webp",
  "/img/images/cropped-Amimi.webp",
  "/img/images/cropped-spektakel.webp",
  "/img/images/cropped-ABB2.webp",
  "/img/images/ABB3.webp",
  "/img/images/ABB4.webp",
];
</script>

<style scoped></style>
