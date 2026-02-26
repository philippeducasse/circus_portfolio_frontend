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

  <UModal v-model:open="showForm">
    <template #content>
      <div class="p-6">
        <CommentForm @submit="handleSubmit" />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import Comment from "~/components/page-components/projects/Comment.vue";
import CommentForm from "~/components/page-components/reviews/CommentForm.vue";

const router = useRoute();
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
  if (router.query.show) {
    showForm.value = true;
  }
});
const toast = useToast();

function showToast(message: string) {
  console.log("toasting");
  toast.add({
    title: message,
    class: "text-center",
  });
}

const handleSubmit = async (data: unknown) => {
  showForm.value = false;
  console.log({ data });

  const response = await fetch("http://localhost:8000", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    showToast("Thank you for your comment!");
  }
};
</script>
