<template>
  <Teleport to="#teleports">
    <div
      v-if="modelValue"
      class="fixed inset-0 dark bg-(--ui-bg) flex justify-center items-center z-50 pointer-events-auto"
    >
      <div class="relative w-full md:w-4/5 max-w-5xl">
        <UCarousel
          :key="startIndex"
          v-slot="{ item }"
          :items="items"
          :embla-options="{ startIndex }"
          :ui="{ item: 'basis-full', container: 'place-items-center' }"
          class="mx-auto rounded-lg flex items-center"
          arrows
        >
          <NuxtImg
            :src="item.src"
            :alt="item.alt"
            draggable="false"
            class="object-contain max-h-[80vh] w-full"
          />
        </UCarousel>
        <UButton
          @click="$emit('update:modelValue', false)"
          label="&#x2715;"
          class="absolute -bottom-12 md:bottom-0 right-4 md:right-0"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Item {
  src: string;
  alt: string;
}

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    items: Item[];
    startIndex?: number;
  }>(),
  { startIndex: 0 },
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const handleEscKey = (e: KeyboardEvent) => {
  if (e.key === "Escape" && props.modelValue) emit("update:modelValue", false);
};

onMounted(() => window.addEventListener("keyup", handleEscKey));
onUnmounted(() => window.removeEventListener("keyup", handleEscKey));
</script>
