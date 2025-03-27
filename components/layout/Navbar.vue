<template>
  <UContainer class="w-full flex items-center justify-evenly mt-4">
    <LogoWithName />
    <div class="hidden md:flex md:justify-evenly w-full">
      <UNavigationMenu
        :items="horizontalLinks"
        class="w-fit relative"
        arrow
        content-orientation="vertical"
        :ui="{
          childList: 'w-fit cursor-pointer',
        }"
      />
    </div>
    <div class="flex items-center justify-between w-full md:hidden place-content-center">
      <img
        src="../../public/img/logos/philo.png"
        width="60"
        class="mr-auto md:mt-0 -mb-16"
        alt="Philippe Ducasse logo"
      />
      <UButton @click="toggleMenu" class="my-4 z-50 flex items-center" color="primary">
        <Icon :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'" class="w-5 h-5 flex-grow-0" />
      </UButton>
    </div>

    <div v-if="isMenuOpen" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" @click="closeMenu">
      <div class="flex flex-col absolute top-20 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-lg">
        <UNavigationMenu :items="verticalLinks" @click.stop orientation="vertical" class="text-center" />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import LogoWithName from "./LogoWithName.vue";
import { UNavigationMenu } from "#components";

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

const baseLinks = computed(() => [
  { label: t("home"), to: "/", onSelect: () => (isMenuOpen.value = false) },
  { label: t("projects"), to: "/projects", onSelect: () => (isMenuOpen.value = false) },
  { label: t("about_title"), to: "/about", onSelect: () => (isMenuOpen.value = false) },
  { label: t("contact"), to: "/contact", onSelect: () => (isMenuOpen.value = false) },
  { label: t("calendar"), to: "/calendar", onSelect: () => (isMenuOpen.value = false) },
  { label: t("support"), to: "/support", onSelect: () => (isMenuOpen.value = false) },
]);
const horizontalLinks = computed(() => [
  ...baseLinks.value,
  {
    label: currentLocale.value.toUpperCase(),
    click: () => toggleLocaleDropdown(),
    class: "hover:cursor-pointer",
    children: availableLocales
      .filter((l) => l !== currentLocale.value)
      .map((lang) => ({
        label: lang.toUpperCase(),
        onSelect: () => handleLanguageSelection(lang),
        class: "hover:cursor-pointer",
      })),
  },
]);

const verticalLinks = computed(() => [
  ...baseLinks.value,
  {
    label: availableLocales.find((l) => l !== currentLocale.value)?.toUpperCase(),
    onSelect: () => handleLanguageSelection(availableLocales.find((l) => l !== currentLocale.value) || ""),
    class: "hover:cursor-pointer",
  },
]);
console.log(baseLinks, horizontalLinks, verticalLinks);
</script>
