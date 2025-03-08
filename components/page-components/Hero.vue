<template>
  <div class="text-center flex flex-col h-full items-center gap-y-[10vh] justify-evenly mt-4">
    <h1>Philippe Ducasse</h1>
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="w-72 md:w-96 mx-auto rounded-lg overflow-hidden"
    >
      <img :src="item" draggable="false" class="w-full h-full" />
    </UCarousel>
    <h2>{{ $t("hero_subtitle") }}</h2>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<style scoped></style>
