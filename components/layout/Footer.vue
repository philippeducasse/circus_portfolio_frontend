<template>
  <UContainer class="w-full flex items-center justify-center">
    <div class="flex justify-center text-white w-full">
      <UHorizontalNavigation :links="horizontalLinks" class="w-full max-w-lg justify-evenly" size="lg" />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const horizontalLinks = [
  {
    label: "",
    icon: "i-lucide-facebook",
    to: "https://www.facebook.com/philocircus",
    target: "_blank",
    iconClass: "w-8",
  },
  {
    label: "",
    icon: "i-lucide-youtube",
    to: "https://www.youtube.com/channel/UCqjMPNrbz8uJJfWXYbT9RIQ",
    target: "_blank",
    iconClass: "text-3xl",
  },
  { label: "", icon: "i-lucide-instagram", to: "https://www.instagram.com/philocircus", target: "_blank" },
];
</script>

<style scoped></style>
