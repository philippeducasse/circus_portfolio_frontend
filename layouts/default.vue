<template>
  <div class="flex flex-col min-h-screen self-stretch">
    <div class="relative z-[60]">
      <Navbar />
    </div>
    <ContentLayout>
      <slot />
    </ContentLayout>
    <!-- <UButton class="absolute bottom-3 left-3 md:left-6" size="md" label="Click!" @click="showToast"
      icon="i-lucide-rocket" /> -->
    <Footer />
  </div>
  <!-- <UButton class="absolute bottom-3 left-3 md:left-6" size="md" label="Click!" @click="showToast"
    icon="i-lucide-rocket" /> -->
</template>

<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import Footer from "~/components/layout/Footer.vue";
import ContentLayout from "~/components/layout/ContentLayout.vue";
</script>

<style scoped></style>
