<template>
  <UContainer class="w-full flex items-center justify-between">
    <div class="hidden md:flex md:justify-evenly w-full">
      <UHorizontalNavigation :links="horizontalLinks" class="w-2/3 lg:w-1/3" />
      <LogoWithName />
      <div class="hidden md:flex gap-2">
        <button @click="setLocale('en')">en</button>
        <button @click="setLocale('fr')">fr</button>
      </div>
    </div>
    <!-- Mobile Navigation -->
    <div class="flex justify-between align-middle">
      <UButton @click="toggleMenu()" class="block md:hidden mt-4 z-50 self-center flex-1 w-full" color="primary">
        <Icon :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'" class="w-4 h-4 mt-1" />
      </UButton>
      <img src="../../public/img/logo_white.avif" width="50" />
    </div>
    <div class="relative">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40">
        <div class="flex flex-col md:hidden absolute top-10 z-10 left-1/2 transform -translate-x-1/2 p-4 items-center">
          <UVerticalNavigation :links="verticalLinks" />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import LogoWithName from "./LogoWithName.vue";

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const handleLanguageSelection = (lang: string) => {
  setLocale(lang);
  toggleMenu();
};
const { setLocale } = useI18n();

const horizontalLinks = [
  { label: "Home", to: "/", click: toggleMenu },
  { label: "Projects", to: "/projects", click: toggleMenu },
  { label: "About", to: "/about", click: toggleMenu },
  { label: "Contact", to: "/contact", click: toggleMenu },
];
const verticalLinks = [
  ...horizontalLinks,
  { label: "en", click: () => handleLanguageSelection("en") },
  { label: "fr", click: () => handleLanguageSelection("fr") },
];
</script>

<style scoped></style>
