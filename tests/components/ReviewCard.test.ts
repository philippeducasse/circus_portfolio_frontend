import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { describe, it, expect } from 'vitest'
import ReviewCard from '~/components/page-components/reviews/ReviewCard.vue'

const i18nTranslations: Record<string, string> = {
  anonymousAuthor: 'Anonymous',
  readMore: 'Read more',
  readLess: 'Read less',
  locale_fr_from: 'French',
  locale_en_from: 'English',
  locale_de_from: 'German',
}

const mockT = (key: string, params?: Record<string, string>) => {
  if (key === 'translatedFrom' && params) return `Translated from ${params.locale}`
  return i18nTranslations[key] ?? key
}

// Global config for all mounts in this file
const globalConfig = {
  stubs: {
    UCard: { template: '<div data-stub="UCard"><slot /></div>' },
  },
  mocks: {
    $t: mockT,
  },
  // Provide useI18n so the script setup side works too
  provide: {
    i18n: { locale: ref('en'), t: mockT },
  },
}

const baseReview = {
  id: 1,
  message: 'Great performance!',
  date: '25-03-15 12:00:00',
}

describe('ReviewCard', () => {
  describe('message display', () => {
    it('renders the review message', () => {
      const wrapper = mount(ReviewCard, {
        props: { review: baseReview },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('Great performance!')
    })

    it('shows locale-specific message when available for the current locale', () => {
      const wrapper = mount(ReviewCard, {
        props: {
          review: {
            ...baseReview,
            message: 'Original message',
            message_en: 'English translation',
          },
        },
        global: globalConfig,
      })
      // default locale is 'en', so message_en should be shown
      expect(wrapper.text()).toContain('English translation')
      expect(wrapper.text()).not.toContain('Original message')
    })

    it('falls back to base message when no locale-specific message exists', () => {
      const wrapper = mount(ReviewCard, {
        props: {
          review: {
            ...baseReview,
            message: 'Original message',
            message_fr: 'French translation',
            // no message_en
          },
        },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('Original message')
      expect(wrapper.text()).not.toContain('French translation')
    })
  })

  describe('translation indicator', () => {
    it('shows a "translated from" note when original language differs from locale', () => {
      const wrapper = mount(ReviewCard, {
        props: {
          review: {
            ...baseReview,
            original_message_language: 'fr',
            message_en: 'English translation',
          },
        },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('Translated from French')
    })

    it('does not show translation indicator when original language matches locale', () => {
      const wrapper = mount(ReviewCard, {
        props: {
          review: {
            ...baseReview,
            original_message_language: 'en',
            message_en: 'English message',
          },
        },
        global: globalConfig,
      })
      expect(wrapper.text()).not.toContain('Translated from')
    })

    it('does not show translation indicator when original_message_language is absent', () => {
      const wrapper = mount(ReviewCard, {
        props: { review: baseReview },
        global: globalConfig,
      })
      expect(wrapper.text()).not.toContain('Translated from')
    })
  })

  describe('author display', () => {
    it('renders the author name', () => {
      const wrapper = mount(ReviewCard, {
        props: { review: { ...baseReview, name: 'Alice' } },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('Alice')
    })

    it('shows "Anonymous" fallback when name is absent', () => {
      const wrapper = mount(ReviewCard, {
        props: { review: baseReview },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('Anonymous')
    })

    it('renders the organisation when provided', () => {
      const wrapper = mount(ReviewCard, {
        props: {
          review: { ...baseReview, name: 'Bob', organisation: 'Cirque du Soleil' },
        },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('Cirque du Soleil')
    })

    it('replaces ", " with newline in organisation display', () => {
      const wrapper = mount(ReviewCard, {
        props: {
          review: {
            ...baseReview,
            name: 'Bob',
            organisation: 'Artistic Director, Cirque du Soleil',
          },
        },
        global: globalConfig,
      })
      const orgEl = wrapper.find('span.whitespace-pre-line')
      expect(orgEl.text()).toContain('Artistic Director')
      expect(orgEl.text()).toContain('Cirque du Soleil')
      expect(orgEl.element.textContent).not.toContain(', ')
    })
  })

  describe('date formatting', () => {
    it('formats a 2-digit year date and shows the full year', () => {
      const wrapper = mount(ReviewCard, {
        props: { review: { ...baseReview, date: '25-03-15 12:00:00' } },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('2025')
    })

    it('formats a 4-digit year date correctly', () => {
      const wrapper = mount(ReviewCard, {
        props: { review: { ...baseReview, date: '2024-07-20 09:00:00' } },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('2024')
    })

    it('shows "Invalid Date" for a missing date', () => {
      const wrapper = mount(ReviewCard, {
        props: { review: { ...baseReview, date: '' } },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('Invalid Date')
    })

    it('shows "Invalid Date" for a malformed date string', () => {
      const wrapper = mount(ReviewCard, {
        props: { review: { ...baseReview, date: 'not-a-date' } },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('Invalid Date')
    })
  })
})
