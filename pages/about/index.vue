<template>
  <div class="px-4 mb-16">
    <h2 class="pb-8 md:pb-16">{{ $t("about_title") }}</h2>
    <div class="flex flex-col md:flex-row md:gap-16 gap-y-10 items-center">
      <p class="flex-1 text-left">{{ $t("about") }}</p>
      <div class="relative flex flex-col w-4/5 md:w-1/2 items-center">
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="items"
          class="w-full mx-auto rounded-lg flex items-center place-items-center h-full"
          :ui="{ container: 'items-center' }"
          arrows
        >
          <NuxtImg
            :src="item.src"
            draggable="false"
            class="cursor-pointer object-contain max-h-[600px] w-auto my-auto"
            @click="isModalOpen = true"
            :alt="item.alt"
          />
        </UCarousel>
        <UButton
          :label="$t('full_screen')"
          @click="isModalOpen = true"
          variant="link"
          class="absolute -bottom-22 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition"
        />
      </div>
    </div>
    <ImageCarouselModal v-model="isModalOpen" :items="items" />
  </div>
</template>

<script setup lang="ts">
import { UButton } from "#components";

const items = [
  { src: "img/images/ABB2.webp", alt: "ABB2" },
  { src: "img/images/ABB3.webp", alt: "ABB3" },
  { src: "img/images/ABB4.webp", alt: "ABB4" },
  { src: "img/images/ABB5.webp", alt: "ABB5" },
  { src: "img/images/ABB6.webp", alt: "ABB6" },
  { src: "img/images/ABB7.webp", alt: "ABB7" },
  { src: "img/images/ABB8.webp", alt: "ABB8" },
  { src: "img/images/Amimi.webp", alt: "Amimi" },
  { src: "img/images/ejc.webp", alt: "ejc" },
  { src: "img/images/ejc2.webp", alt: "ejc2" },
  { src: "img/images/ejc3.webp", alt: "ejc3" },
  { src: "img/images/fusion.webp", alt: "fusion" },
  { src: "img/images/hs.webp", alt: "hs" },
  { src: "img/images/hs_ejc.webp", alt: "hs_ejc" },
  { src: "img/images/kaos.webp", alt: "kaos" },
  { src: "img/images/lulu.webp", alt: "lulu" },
  { src: "img/images/lulu_smoke.webp", alt: "lulu_smoke" },
  { src: "img/images/lulu_stare.webp", alt: "lulu_stare" },
  { src: "img/images/maranam.webp", alt: "maranam" },
  { src: "img/images/maranam2.webp", alt: "maranam2" },
  { src: "img/images/philo_rolli.webp", alt: "philo_rolli" },
  { src: "img/images/snowlulu2.webp", alt: "snowlulu2" },
  { src: "img/images/spektakel.webp", alt: "spektakel" },
];

const isModalOpen = ref(false);
</script>
<style scoped></style>
