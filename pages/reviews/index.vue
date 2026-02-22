<template>
  <div>
    <h2>{{ $t("reviews") }}</h2>
    <Comment v-for="comment in comments" :key="comment" />

    <UButton
      class="fixed bottom-6 right-6 z-40"
      size="lg"
      icon="i-lucide-pencil-line"
      @click="showForm = true"
    >
      {{ $t("formTitle") }}
    </UButton>
  </div>

  <Teleport to="body">
    <Transition name="drawer">
      <div v-if="showForm" class="fixed inset-0 z-50 flex justify-end">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="showForm = false" />
        <div
          class="relative z-10 w-full max-w-md h-full overflow-y-auto bg-gray-950 border-l border-white/10 shadow-2xl p-6 flex flex-col gap-4"
        >
          <div class="flex items-center justify-between">
            <UButton variant="ghost" color="neutral" icon="i-lucide-x" @click="showForm = false" />
          </div>
          <CommentForm @submit="handleSubmit" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import Comment from "~/components/page-components/projects/Comment.vue";
import CommentForm from "~/components/page-components/reviews/CommentForm.vue";

const comments = ref(null);
const showForm = ref(false);

const fetchComments = async () => {
  try {
    const response = await fetch("http://localhost:8000");
    comments.value = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchComments();
});

const handleSubmit = (data: unknown) => {
  showForm.value = false;
  // TODO: send to backend
};
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.25s ease;
}
.drawer-enter-active .relative,
.drawer-leave-active .relative {
  transition: transform 0.25s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
.drawer-enter-from .relative {
  transform: translateX(100%);
}
.drawer-leave-to .relative {
  transform: translateX(100%);
}
</style>
