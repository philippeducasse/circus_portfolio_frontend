import { describe, it, expect } from 'vitest'
import { useProjects } from '~/composables/useProjects'

describe('useProjects', () => {
  it('returns a reactive ref containing 4 projects', () => {
    const { projects } = useProjects()
    expect(projects.value).toHaveLength(4)
  })

  it('returns projects in expected order', () => {
    const { projects } = useProjects()
    const titles = projects.value.map((p) => p.title)
    expect(titles).toEqual(['Lulu', 'Ah Bah Bravo!', 'Stone', 'Forgotten'])
  })

  it('all projects have required fields', () => {
    const { projects } = useProjects()
    for (const project of projects.value) {
      expect(typeof project.id).toBe('number')
      expect(typeof project.title).toBe('string')
      expect(typeof project.videoId).toBe('string')
      expect(typeof project.length).toBe('string')
      expect(typeof project.stage).toBe('string')
    }
  })

  it('all project ids are unique', () => {
    const { projects } = useProjects()
    const ids = projects.value.map((p) => p.id)
    expect(new Set(ids).size).toBe(4)
  })

  it('stage values are valid', () => {
    const { projects } = useProjects()
    const validStages = ['indoor', 'outdoor', 'flexible']
    for (const project of projects.value) {
      expect(validStages).toContain(project.stage)
    }
  })

  it('Lulu has images and a dossier path', () => {
    const { projects } = useProjects()
    const lulu = projects.value.find((p) => p.title === 'Lulu')
    expect(lulu?.images).toHaveLength(4)
    expect(lulu?.dossierPath).toMatch(/\.pdf$/)
  })

  it('Ah Bah Bravo has images and a dossier path', () => {
    const { projects } = useProjects()
    const abb = projects.value.find((p) => p.title === 'Ah Bah Bravo!')
    expect(abb?.images).toHaveLength(4)
    expect(abb?.dossierPath).toMatch(/\.pdf$/)
  })
})
