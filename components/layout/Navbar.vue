<template>
  <UContainer class="w-full flex items-center justify-evenly">
    <div class="hidden md:flex md:justify-evenly w-full">
      <UHorizontalNavigation :links="horizontalLinks" class="w-fit" />
      <LogoWithName />
      <div class="hidden md:flex gap-2">
        <button @click="setLocale('en')">en</button>
        <button @click="setLocale('fr')">fr</button>
      </div>
    </div>

    <div class="flex items-center justify-between w-full md:hidden place-content-center">
      <UButton @click="toggleMenu" class="my-4 z-50 flex items-center self-stretch" color="primary">
        <Icon :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'" class="w-5 h-5 flex-grow-0" />
      </UButton>

      <img src="../../public/img/logo_name.png" width="150" class="ml-auto mt-4 md:mt-0" alt="Philippe Ducasse logo" />
    </div>

    <div v-if="isMenuOpen" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" @click="closeMenu">
      <div class="flex flex-col absolute top-20 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-lg">
        <UVerticalNavigation :links="verticalLinks" @click.stop />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import LogoWithName from "./LogoWithName.vue";

const { setLocale } = useI18n();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = (event: Event) => {
  if (!event?.target?.closest(".absolute")) {
    isMenuOpen.value = false;
  }
};

const handleLanguageSelection = (lang: string) => {
  setLocale(lang);
  isMenuOpen.value = false;
};

const horizontalLinks = [
  { label: "Home", to: "/", click: () => (isMenuOpen.value = false) },
  { label: "Projects", to: "/projects", click: () => (isMenuOpen.value = false) },
  { label: "About", to: "/about", click: () => (isMenuOpen.value = false) },
  { label: "Contact", to: "/contact", click: () => (isMenuOpen.value = false) },
  { label: "Calendar", to: "/calendar", click: () => (isMenuOpen.value = false) },
  { label: "Support", to: "/support", click: () => (isMenuOpen.value = false) },
];

const verticalLinks = [
  ...horizontalLinks,
  { label: "en", click: () => handleLanguageSelection("en") },
  { label: "fr", click: () => handleLanguageSelection("fr") },
];
</script>

<style scoped>
.absolute {
  z-index: 50;
}
</style>
