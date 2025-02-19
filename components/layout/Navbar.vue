<template>
  <UContainer class="w-full flex items-center justify-between">
    <div>
      <ULink to="/">
        <img src="/img/logo_white.avif" alt="philocircus logo" class="absolute top-4 left-4 md:left-24 w-14 md:w-20"
      /></ULink>
    </div>
    <UButton @click="toggleMenu()" class="block md:hidden mt-4">
      <Icon :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'" class="w-4 h-4 mt-1" />
    </UButton>
    <div class="hidden md:flex justify-between">
      <UHorizontalNavigation :links="horizontalLinks" />
    </div>
    <div
      v-if="isMenuOpen"
      class="flex flex-col md:hidden absolute top-10 z-10 left-1/2 transform -translate-x-1/2 p-4 items-center"
    >
      <UVerticalNavigation :links="verticalLinks" />
    </div>
    <!-- <div class="flex items-center justify-center gap-2"> -->
    <!-- <UToggle v-model="isDark" on-icon="i-heroicons-moon" off-icon="i-heroicons-sun" size="lg" /> -->
    <!-- </div> -->
  </UContainer>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
// const colorMode = useColorMode();
// const colorMode = ref("light");
// const isDark = computed({
//   get() {
//     return colorMode.value === "dark";
//   },
//   set() {
//     colorMode.value = colorMode.value === "dark" ? "light" : "dark";
//   },
// });
const horizontalLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
const verticalLinks = [...horizontalLinks];
</script>

<style scoped></style>
