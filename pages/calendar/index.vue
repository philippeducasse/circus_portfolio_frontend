<template>
  <div class="px-4">
    <h2 class="pb-8 md:pb-16">{{ $t("calendar_title") }}</h2>
    <!-- Upcoming -->
    <div class="flex flex-col md:gap-16 gap-y-10 pb-8 md:pb-16 text-left">
      <h3>{{ $t("calendar_upcoming_title") }}</h3>
      <p>{{ $t("calendar_dates_upcoming") }}</p>
    </div>
    <!-- past -->
    <div class="flex flex-col gap-y-10 text-left">
      <h3>{{ $t("calendar_past_title") }}</h3>
      <ul class="">
        <li class="preformatted-text">
          <h3 class="mb-8">2024</h3>
          <p>{{ $t("calendar_2024") }}</p>
        </li>
        <li class="preformatted-text">
          <h3 class="my-8">2023</h3>
          <p>{{ $t("calendar_2023") }}</p>
        </li>
        <li class="preformatted-text">
          <h3 class="my-8">2022</h3>
          <p>{{ $t("calendar_2022") }}</p>
        </li>
        <li class="preformatted-text">
          <h3 class="my-8">2021</h3>
          <p>{{ $t("calendar_2021") }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
