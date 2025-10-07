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
          arrows
        >
          <NuxtImg
            :src="item"
            draggable="false"
            class="cursor-pointer object-contain max-h-[600px] w-auto my-auto"
            @click="openImage(item)"
            :alt="item"
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
    <Teleport to="#teleports">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 dark bg-(--ui-bg) flex justify-center items-center z-50 pointer-events-auto"
      >
        <div class="relative w-fit">
          <UCarousel
            ref="carouselRef"
            v-slot="{ item }"
            :items="items"
            :ui="{ item: 'basis-full' }"
            class="md:w-4/5 mx-auto rounded-lg flex items-center"
            arrows
          >
            <NuxtImg :src="item" draggable="false" class="object-contain h-full max-h-[600px] w-full" :alt="item" />
          </UCarousel>
          <UButton @click="closeImage" label="&#x2715;" class="absolute -bottom-12 md:bottom-0 right-4 md:right-12" />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { UButton } from "#components";

const items = [
  "img/images/ABB5.webp",
  "img/images/ABB2.webp",
  "img/images/Amimi.webp",
  // "img/images/ball.webp",
  // "img/images/ball2.webp",
  "img/images/ejc.webp",
  "img/images/ejc2.webp",
  "img/images/ejc3.webp",
  // "img/images/foot.webp",
  "img/images/fusion.webp",
  "img/images/hs_ejc.webp",
  // "img/images/hs.webp",
  "img/images/kaos.webp",
  "img/images/lulu.webp",
  "img/images/maranam.webp",
  "img/images/maranam2.webp",
  "img/images/philo_rolli.webp",
  "img/images/snowlulu2.webp",
  "img/images/spektakel.webp",
  // "img/images/staff.webp",
  // "img/images/staff2.webp",
  // "img/images/staff3.webp",
];

const selectedImage = ref<undefined | string>(undefined);
const openImage = (url: string) => {
  isModalOpen.value = true;
  selectedImage.value = url;
};
const closeImage = () => {
  isModalOpen.value = false;
};

const isModalOpen = ref(false);

const handleEscKey = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isModalOpen.value === true) {
    closeImage();
  }
};

onMounted(() => window.addEventListener("keyup", handleEscKey));

onUnmounted(() => window.removeEventListener("keyup", handleEscKey));
</script>
<style scoped></style>
