<template>
  <div class="flex flex-col min-h-screen self-stretch">
    <Navbar />
    <ContentLayout>
      <slot />
    </ContentLayout>
    <UButton class="absolute bottom-3 left-3 md:left-6" size="md" label="Click!" @click="showToast"
      icon="i-lucide-rocket" />
    <Footer />
  </div>
</template>

<script setup lang="ts">

const toast = useToast()

function showToast() {
  toast.add({
    title: 'Bravo!',
    class: "text-center"
  })
}

import Navbar from "~/components/layout/Navbar.vue";
import Footer from "~/components/layout/Footer.vue";
import ContentLayout from "~/components/layout/ContentLayout.vue";
</script>

<style scoped></style>
