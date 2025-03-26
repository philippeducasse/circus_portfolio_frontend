<template>
  <div class="px-4">
    <h2 class="pb-8 md:pb-16">{{ $t("about_title") }}</h2>
    <div class="flex flex-col md:flex-row md:gap-16 gap-y-10 items-center relative">
      <p class="flex-1 text-left">{{ $t("about") }}</p>
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="w-full md:w-1/2 mx-auto rounded-lg relative"
        arrows
        dots
      >
        <img :src="item" draggable="false" class="w-full h-full cursor-pointer" @click="openImage(item)" />
      </UCarousel>
      <UButton
        :label="$t('full_screen')"
        @click="isModalOpen = true"
        variant="link"
        class="absolute bottom-0 right-46 transition"
      />
    </div>
    <Teleport to="#teleports">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 dark bg-(--ui-bg) flex justify-center items-center z-50 pointer-events-auto"
      >
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="w-full md:w-1/2 mx-auto rounded-lg"
          arrows
          dots
        >
          <img :src="item" draggable="false" class="w-full h-full cursor-pointer" />
        </UCarousel>
        <UButton @click="closeImage" label="&#x2715;" class="absolute top-10 right-10" />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { UButton } from "#components";

const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
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
