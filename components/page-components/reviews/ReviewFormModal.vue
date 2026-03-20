<template>
  <UModal v-model:open="open">
    <template #content>
      <div class="p-6 overflow-y-auto">
        <ReviewForm @submit="handleSubmit" :projectId="projectId" />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import ReviewForm from "~/components/page-components/reviews/ReviewForm.vue";

const open = defineModel<boolean>("open");
const { projectId } = defineProps<{ projectId?: number }>();
const { submitReview } = useReviews();
const toast = useToast();

const handleSubmit = async (data: unknown) => {
  open.value = false;
  toast.add({ title: $t("thankYou"), class: "text-center" });
  await submitReview(data);
};
</script>
