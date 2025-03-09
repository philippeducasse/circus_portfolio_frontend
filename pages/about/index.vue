<template>
  <div class="flex flex-col md:flex-row md:gap-16 items-center">
    <p class="flex-1">{{ $t("about") }}</p>
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="w-72 md:w-1/2 mx-auto rounded-lg overflow-hidden"
    >
      <img :src="item" draggable="false" class="w-full h-full" />
    </UCarousel>
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
