import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProjectOverview from '~/components/page-components/projects/ProjectOverview.vue'

const i18nTranslations: Record<string, string> = {
  more_info: 'See more',
  lulu_short: 'A wild and emotional psychedelic journey',
  abb_short: 'A celebration of the joy of life',
  stone_short: 'A powerful exploration of technical virtuosity',
  forgotten_short: 'An exploration of the depths of minimalism',
}

const globalConfig = {
  stubs: {
    UButton: { template: '<a :href="to"><slot /></a>', props: ['to'] },
    YoutubeEmbedding: { template: '<div data-stub="YoutubeEmbedding" />' },
  },
  mocks: {
    $t: (key: string) => i18nTranslations[key] ?? key,
  },
}

const baseProject = {
  id: 1,
  title: 'Lulu',
  videoId: 'mRTKk2jQAa0',
  length: '45-60',
  stage: 'indoor',
}

describe('ProjectOverview', () => {
  describe('layout', () => {
    it('uses flex-row for even index', () => {
      const wrapper = mount(ProjectOverview, {
        props: { project: baseProject, index: 0 },
        global: globalConfig,
      })
      expect(wrapper.html()).toContain('flex-row')
      expect(wrapper.html()).not.toContain('flex-row-reverse')
    })

    it('uses flex-row-reverse for odd index', () => {
      const wrapper = mount(ProjectOverview, {
        props: { project: baseProject, index: 1 },
        global: globalConfig,
      })
      expect(wrapper.html()).toContain('flex-row-reverse')
    })

    it('hides the divider for the first project (index 0)', () => {
      const wrapper = mount(ProjectOverview, {
        props: { project: baseProject, index: 0 },
        global: globalConfig,
      })
      expect(wrapper.find('hr').exists()).toBe(false)
    })

    it('shows a divider for subsequent projects (index > 0)', () => {
      const wrapper = mount(ProjectOverview, {
        props: { project: baseProject, index: 2 },
        global: globalConfig,
      })
      expect(wrapper.find('hr').exists()).toBe(true)
    })
  })

  describe('content', () => {
    it('renders the project title', () => {
      const wrapper = mount(ProjectOverview, {
        props: { project: baseProject, index: 0 },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('Lulu')
    })

    it('links to the correct project anchor', () => {
      const wrapper = mount(ProjectOverview, {
        props: { project: baseProject, index: 0 },
        global: globalConfig,
      })
      const link = wrapper.find('a')
      expect(link.exists()).toBe(true)
      expect(link.attributes('href')).toContain('/projects')
      expect(link.attributes('href')).toContain('Lulu')
    })

    it('renders Ah Bah Bravo short description via abb_short key', () => {
      const abbProject = {
        id: 2,
        title: 'Ah Bah Bravo!',
        videoId: 'nIY84br9loQ',
        length: '25',
        stage: 'outdoor',
      }
      const wrapper = mount(ProjectOverview, {
        props: { project: abbProject, index: 0 },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('celebration of the joy')
    })

    it('renders other project short descriptions via title-based key', () => {
      const wrapper = mount(ProjectOverview, {
        props: { project: baseProject, index: 0 },
        global: globalConfig,
      })
      expect(wrapper.text()).toContain('wild and emotional')
    })
  })
})
