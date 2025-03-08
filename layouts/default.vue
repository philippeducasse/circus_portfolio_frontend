<template>
  <div class="flex flex-col min-h-screen self-stretch">
    <Navbar />
    <ContentLayout>
      <slot />
    </ContentLayout>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import Footer from "~/components/layout/Footer.vue";
import ContentLayout from "~/components/layout/ContentLayout.vue";
</script>

<style scoped></style>
