<template>
  <div class="px-4">
    <h2 class="pb-8 md:pb-16">{{ $t("calendar_title") }}</h2>
    <!-- Upcoming -->
    <div class="flex flex-col md:gap-16 gap-y-10 pb-8 md:pb-16 text-left">
      <ul class="">
        <li class="preformatted-text decoration-none">
          <h3 class="my-8">{{ $t("calendar_upcoming_title") }}</h3>
          <p>{{ $t("calendar_2025") }}</p>
        </li>
      </ul>
    </div>
    <!-- past -->
    <div class="flex flex-col gap-y-10 text-left">

      <h3>{{ $t("calendar_past_title") }}</h3>
      <ul v-for="year in years.reverse()" :key="year">
        <CalendarYear :year="year" />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import CalendarYear from '~/components/page-components/calendar/CalendarYear.vue';

const years = [2021, 2022, 2023, 2024]
</script>

<style scoped></style>
