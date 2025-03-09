<template>
  <UContainer class="w-full flex flex-col items-center justify-center mb-8">
    <p class="text-gray-400 text-xs mb-6">info@philippeducasse.com</p>
    <div class="flex justify-center gap-4 md:gap-24 text-primary-500 w-full">
      <NuxtLink to="https://www.facebook.com/philocircus" class="hover:text-primary-400">
        <UIcon name="i-lucide-facebook" class="w-10 h-10" /> </NuxtLink
      ><NuxtLink to="https://www.youtube.com/channel/UCqjMPNrbz8uJJfWXYbT9RIQ" class="hover:text-primary-400">
        <UIcon name="i-lucide-youtube" class="w-10 h-10" /> </NuxtLink
      ><NuxtLink to="https://www.instagram.com/philocircus" class="hover:text-primary-400">
        <UIcon name="i-lucide-instagram" class="w-10 h-10" />
      </NuxtLink>
    </div>
  </UContainer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
