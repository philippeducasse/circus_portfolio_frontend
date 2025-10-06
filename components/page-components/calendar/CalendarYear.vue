<template>
  <li class="preformatted-text">
    <h3 class="my-8">{{ year }}</h3>
    <p>{{ $t(`calendar_${year}`) }}</p>
  </li>
</template>

<script setup lang="ts">
const { year } = defineProps({
  year: Number,
});
</script>

<style scoped></style>