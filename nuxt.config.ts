// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "", // Prevents adding dark-mode classes
  },
  googleFonts: {
    families: {
      "Amatic SC": true,
      Sen: true,
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  ui: {
    fonts: true,
  },
  devServer: {
    host: "0.0.0.0", // listens on all servers
    port: 3000,
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
