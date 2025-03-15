<template class="px-4">
  <div class="px-4">
    <h2 class="pb-8 md:pb-16">{{ $t("about_title") }}</h2>
    <div class="flex flex-col md:flex-row md:gap-16 gap-y-10 items-center">
      <p class="flex-1 text-left">{{ $t("about") }}</p>
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="w-full md:w-1/2 mx-auto rounded-lg"
        arrows
      >
        <img :src="item" draggable="false" class="w-full h-full" />
      </UCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
</script>

<style scoped></style>
