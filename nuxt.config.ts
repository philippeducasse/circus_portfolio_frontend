// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL ?? "http://localhost:8000", // server-side only (internal Docker network)
    public: {
      // apiUrl: process.env.NUXT_PUBLIC_API_URL ?? "http://localhost:8000", // client-side (public URL)
      apiUrl: "https://philippeducasse.com/api", // client-side (public URL)
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxtjs/google-fonts", "@nuxt/image"],
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
    locales: [
      { code: "en", language: "en-US" },
      { code: "fr", language: "fr-FR" },
    ],
    strategy: "no_prefix",
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
      title: "Philippe Ducasse - Contemporary Circus Artist",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Philippe Ducasse is a contemporary circus artist specializing in contact staff and contact ball juggling, mime, and theatrical performance. Based in Berlin.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
