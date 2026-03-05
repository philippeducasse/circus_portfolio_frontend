<template>
  <UCard
    class="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm md:mx-0 mx-4 flex py-auto lg:min-w-sm"
  >
    <div class="flex flex-col gap-6 justify-center lg:min-w-sm">
      <p class="text-base text-left leading-relaxed text-white/90">{{ message }}</p>
      <div class="flex items-center justify-between gap-4 pt-2 border-t border-white/10 w-full">
        <span class="text-base text-white/40">{{ formattedDate }}</span>
        <span class="text-lg font-semibold text-white/80">— {{ name || "Anonymous" }}</span>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { type Review } from "~/composables/useReviews";

const props = defineProps<{
  review: Review;
  showProjectTitle?: boolean;
}>();

const { name, message, date } = props.review;

const { projects } = useProjects();

const formattedDate = computed(() =>
  new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "short" }),
);
console.log("projects", projects.value);
watch(
  projects,
  (newProjects) => {
    console.log("Projects updated:", newProjects);
  },
  { deep: true },
);
</script>
