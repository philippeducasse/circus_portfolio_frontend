// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "", // Prevents adding dark-mode classes
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
