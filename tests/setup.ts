import { ref } from 'vue'
import { vi } from 'vitest'

const i18nTranslations: Record<string, string> = {
  anonymousAuthor: 'Anonymous',
  readMore: 'Read more',
  readLess: 'Read less',
  locale_fr_from: 'French',
  locale_en_from: 'English',
  locale_de_from: 'German',
  lulu_short: 'A wild and emotional psychedelic journey',
  abb_short: 'A celebration of the joy of life',
  stone_short: 'A powerful exploration of technical virtuosity',
  forgotten_short: 'An exploration of the depths of minimalism',
  more_info: 'See more',
}

// Shim Nuxt composables that are auto-imported in the app but absent in plain vitest
vi.stubGlobal('useRuntimeConfig', () => ({
  public: { apiUrl: 'https://test.api.example.com' },
}))

vi.stubGlobal('useI18n', () => ({
  locale: ref('en'),
  t: (key: string, params?: Record<string, string>) => {
    if (key === 'translatedFrom' && params) {
      return `Translated from ${params.locale}`
    }
    return i18nTranslations[key] ?? key
  },
}))

vi.stubGlobal('useNuxtApp', () => ({}))
