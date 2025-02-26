<template>
  <UContainer class="w-full flex items-center justify-between">
    <UButton @click="toggleMenu()" class="block md:hidden mt-4 z-50" color="primary">
      <Icon :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'" class="w-4 h-4 mt-1" />
    </UButton>
    <div class="hidden md:flex justify-between">
      <UHorizontalNavigation :links="horizontalLinks" />
    </div>
    <div v-if="isMenuOpen" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40">
      <div class="flex flex-col md:hidden absolute top-10 z-10 left-1/2 transform -translate-x-1/2 p-4 items-center">
        <UVerticalNavigation :links="verticalLinks" />
      </div>
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
