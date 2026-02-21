<template>
  <div class="text-center flex flex-col h-full items-center gap-y-[5vh] justify-evenly md:-mt-4">
    <h1 class="mt-16 md:mt-4">Philippe Ducasse</h1>
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full', container: 'items-center' }"
      class="w-72 md:w-2/3 mx-auto rounded-lg overflow-hidden"
      :autoplay="{ delay: 3000 }"
      loop
    >
      <NuxtImg :src="item.src" :alt="item.alt" draggable="false" class="w-full h-full" />
    </UCarousel>
    <h2>{{ $t("hero_subtitle") }}</h2>
  </div>
</template>

<script setup lang="ts">
const items = [
  { src: "/img/images/ABB3.webp", alt: "Philippe in Ah Bah Bravo show" },
  { src: "/img/images/cropped-ABB2.webp", alt: "Philippe performing Ah Bah Bravo" },
  { src: "/img/images/cropped-staff3.webp", alt: "Philippe performing with contact staff" },
  { src: "/img/images/cropped-ejc.webp", alt: "Philippe at European Juggling Convention" },
  { src: "/img/images/cropped-foot.webp", alt: "Philippe performing foot juggling" },
  { src: "/img/images/cropped-Amimi.webp", alt: "Philippe performing mime" },
  { src: "/img/images/cropped-spektakel.webp", alt: "Philippe at Spektakel festival" },
];
</script>

<style scoped></style>
