<template>
  <UCard
    class="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm md:mx-0 mx-4 flex py-auto w-full break-inside-avoid"
    :ui="{ body: 'w-full' }"
  >
    <div class="flex flex-col gap-6 justify-center">
      <div class="pb-4 border-b border-white/10 w-full">
        <div
          ref="messageEl"
          :class="['overflow-hidden transition-all duration-300', expanded ? '' : 'max-h-[13rem]']"
        >
          <p class="text-base text-left leading-relaxed text-white/90">
            {{ message }}
          </p>
        </div>
        <button
          v-if="isTall"
          class="mt-2 text-sm text-white/50 hover:text-white/80 transition-colors"
          @click="expanded = !expanded"
        >
          {{ expanded ? $t("readLess") : $t("readMore") }}
        </button>
      </div>
      <div class="flex">
        <span class="text-base text-white/40 h-auto my-auto">{{ formattedDate }}</span>
        <div class="flex flex-col ml-auto align-middle">
          <span class="text-lg font-semibold text-white/80">— {{ name || "Anonymous" }}</span>
          <span v-if="organisation" class="text-base text-white/80">{{ organisation }}</span>
        </div>
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

const { name, message, date, organisation } = props.review;

const formattedDate = computed(() =>
  new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "short" }),
);

const messageEl = ref<HTMLElement | null>(null);
const expanded = ref(false);
const isTall = ref(false);

onMounted(() => {
  if (messageEl.value) {
    isTall.value = messageEl.value.scrollHeight > 208;
  }
});
</script>
