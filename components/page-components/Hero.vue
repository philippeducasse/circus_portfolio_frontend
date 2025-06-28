<template>
  <div class="text-center flex flex-col h-full items-center gap-y-[5vh] justify-evenly md:-mt-4">
    <h1 class="mt-16 md:mt-4">Philippe Ducasse</h1>
    <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
      class="w-72 md:w-2/3 mx-auto rounded-lg overflow-hidden" :autoplay="{ delay: 2000 }" loop>
      <img :src="item" draggable="false" class="w-full h-full" />
    </UCarousel>
    <h2>{{ $t("hero_subtitle") }}</h2>
  </div>
</template>

<script setup lang="ts">
const items = [
  "/img/images/cropped-ABB2.jpg",
  "/img/images/cropped-staff3.jpg",
  "/img/images/cropped-ejc.jpg",
  "/img/images/cropped-foot.jpg",
  "/img/images/cropped-Amimi.jpg",
  "/img/images/cropped-spektakel.jpg",
];
</script>

<style scoped></style>
