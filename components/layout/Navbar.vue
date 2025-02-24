<template>
  <UContainer class="w-full flex items-center justify-between">
    <div>
      <ULink to="/">
        <img
          src="/img/logo_white.avif"
          alt="philocircus logo"
          class="fixed md:left-24 w-14 md:w-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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

    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const { setLocale } = useI18n();

const horizontalLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
const verticalLinks = [...horizontalLinks];
</script>

<style scoped></style>
