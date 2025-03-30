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
          <img
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
            <img :src="item" draggable="false" class="object-contain h-full max-h-[600px] w-full" :alt="item" />
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
  "img/images/ABB.jpg",
  "img/images/ABB2.jpg",
  "img/images/Amimi.jpg",
  // "img/images/ball.jpg",
  // "img/images/ball2.jpg",
  "img/images/ejc.jpg",
  "img/images/ejc2.jpg",
  "img/images/ejc3.jpg",
  // "img/images/foot.jpg",
  "img/images/fusion.jpg",
  "img/images/hs_ejc.jpg",
  // "img/images/hs.jpg",
  "img/images/kaos.jpeg",
  "img/images/lulu.jpg",
  "img/images/maranam.jpg",
  "img/images/maranam2.jpg",
  "img/images/philo_rolli.jpeg",
  "img/images/snowlulu2.jpg",
  "img/images/spektakel.jpg",
  // "img/images/staff.jpg",
  // "img/images/staff2.jpg",
  // "img/images/staff3.jpg",
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
