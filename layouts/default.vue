<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <Logo />
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
import Logo from "~/components/layout/Logo.vue";
</script>

<style scoped></style>
