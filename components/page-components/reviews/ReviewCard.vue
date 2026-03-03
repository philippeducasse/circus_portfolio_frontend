<template>
  <UCard
    class="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm my-10 md:mx-0 mx-4"
  >
    <div class="flex flex-col gap-6">
      <h3 v-if="showName" class="w-fit text-primary-400 mb-4">{{ showName }}</h3>
      <p class="text-base text-left leading-relaxed text-white/90 -mt-4">{{ message }}</p>
      <div class="flex items-center justify-between pt-2 border-t border-white/10">
        <span class="text-base text-white/40">{{ formattedDate }}</span>
        <span class="text-lg font-semibold text-white/80">— {{ name || "Anonymous" }}</span>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
export interface Review {
  name: string;
  message: string;
  date: string;
  id?: number;
}

const props = defineProps<{
  review: Review;
}>();

const { name, message, date, id } = props.review;

const { projects } = useProjects();
console.log("REVIEW", props.review);
const showName = computed(() => (id ? projects.value.find((p) => p.id === id)?.title : null));

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
