<template>
  <UCard>
    <div class="">{{ name }}</div>
    <div class="">{{ message }}</div>
    <div class="">{{ date }}</div>
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
console.log({ name, message, date, projectId });
</script>
