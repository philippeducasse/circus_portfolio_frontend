<template>
  <UContainer class="w-full flex items-center justify-evenly relative">
    <LogoWithName />
    <div class="hidden md:flex md:justify-evenly w-full">
      <UHorizontalNavigation :links="horizontalLinks" class="w-fit relative" />
      <div class="hidden md:flex gap-2">
        <button @click="toggleLocaleDropdown" class="flex items-center gap-1 text-gray-400">
          {{ currentLocale.toUpperCase() }}
          <Icon name="mdi:chevron-down" class="w-4 h-4" />
        </button>
        <div
          v-if="isLocaleDropdownOpen"
          class="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 p-2 flex flex-col text-black"
        >
          <button
            v-for="lang in availableLocales.filter((l) => l !== currentLocale)"
            :key="lang"
            @click="handleLanguageSelection(lang)"
            class="hover:bg-gray-100 p-1"
          >
            {{ lang.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between w-full md:hidden place-content-center">
      <img src="../../public/img/philo.png" width="60" class="mr-auto md:mt-0 -mb-16" alt="Philippe Ducasse logo" />
      <UButton @click="toggleMenu" class="my-4 z-50 flex items-center" color="primary">
        <Icon :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'" class="w-5 h-5 flex-grow-0" />
      </UButton>
    </div>

    <div v-if="isMenuOpen" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" @click="closeMenu">
      <div class="flex flex-col absolute top-20 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-lg">
        <UVerticalNavigation :links="verticalLinks" @click.stop />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import LogoWithName from "./LogoWithName.vue";

const { locale, setLocale } = useI18n();
const isMenuOpen = ref(false);
const isLocaleDropdownOpen = ref(false);
const { t } = useI18n();

const availableLocales = ["en", "fr"];

const currentLocale = computed(() => locale.value);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = (event: Event) => {
  if (!event?.target?.closest(".absolute")) {
    isMenuOpen.value = false;
  }
};

const toggleLocaleDropdown = () => {
  isLocaleDropdownOpen.value = !isLocaleDropdownOpen.value;
};

const handleLanguageSelection = (lang: string) => {
  isMenuOpen.value = false;
  setLocale(lang);
  isLocaleDropdownOpen.value = false;
};

const horizontalLinks = computed(() => [
  { label: t("projects"), to: "/projects", click: () => (isMenuOpen.value = false) },
  { label: t("about_title"), to: "/about", click: () => (isMenuOpen.value = false) },
  { label: t("contact"), to: "/contact", click: () => (isMenuOpen.value = false) },
  { label: t("calendar"), to: "/calendar", click: () => (isMenuOpen.value = false) },
  { label: t("support"), to: "/support", click: () => (isMenuOpen.value = false) },
  {
    label: currentLocale.value.toUpperCase(),
    icon: "i-lucide-chevron-down",
    class: "relative",
    click: () => toggleLocaleDropdown(),
    children: availableLocales
      .filter((l) => l !== currentLocale.value)
      .map((lang) => ({
        label: lang.toUpperCase(),
        click: () => handleLanguageSelection(lang),
        class: "absolute",
      })),
  },
]);

const verticalLinks = computed(() => [
  ...horizontalLinks.value,
  {
    label: availableLocales.find((l) => l !== currentLocale.value)?.toUpperCase(),
    click: () => handleLanguageSelection(availableLocales.find((l) => l !== currentLocale.value) || ""),
  },
]);
</script>
