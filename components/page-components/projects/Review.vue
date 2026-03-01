<template>
  <UCard class="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
    <div class="flex flex-col gap-4">
      <span class="font-['Amatic_SC'] text-6xl leading-none text-primary-400 select-none">"</span>
      <p class="text-base leading-relaxed text-white/90 -mt-4">{{ message }}</p>
      <div class="flex items-center justify-between pt-2 border-t border-white/10">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-semibold text-white/80">— {{ name || "Anonymous" }}</span>
          <UBadge v-if="showName" variant="subtle" size="sm" class="w-fit">{{ showName }}</UBadge>
        </div>
        <span class="text-xs text-white/40">{{ formattedDate }}</span>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
interface Review {
  name: string;
  message: string;
  date: string;
  projectId?: number;
}

const props = defineProps<{
  review: Review;
}>();

const { name, message, date, projectId } = props.review;

const { projects } = useProjects();

const showName = computed(() =>
  projectId ? projects.value.find((p) => p.id === projectId)?.title : null,
);

const formattedDate = computed(() =>
  new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "short" }),
);
</script>
