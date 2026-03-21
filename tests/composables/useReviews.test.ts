import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useReviews } from '~/composables/useReviews'

// useReviews uses a module-level singleton ref — reset it before each test
beforeEach(() => {
  vi.resetAllMocks()
  const { reviews } = useReviews()
  reviews.value = []
})

describe('fetchReviews', () => {
  it('calls the /reviews API endpoint', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve([]),
      ok: true,
    })

    const { fetchReviews } = useReviews()
    await fetchReviews()

    expect(global.fetch).toHaveBeenCalledOnce()
    const [url] = vi.mocked(global.fetch).mock.calls[0]
    expect(String(url)).toContain('/reviews')
  })

  it('populates the reviews ref with the response', async () => {
    const mockReviews = [
      { id: 1, message: 'Wonderful!', date: '25-01-01 00:00:00', name: 'Alice' },
      { id: 2, message: 'Amazing!', date: '25-02-01 00:00:00', name: 'Bob' },
    ]
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockReviews),
      ok: true,
    })

    const { reviews, fetchReviews } = useReviews()
    await fetchReviews()

    expect(reviews.value).toEqual(mockReviews)
  })

  it('handles network errors gracefully without throwing', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))

    const { reviews, fetchReviews } = useReviews()
    await expect(fetchReviews()).resolves.toBeUndefined()
    expect(reviews.value).toEqual([])
  })
})

describe('submitReview', () => {
  it('sends a POST with correct body and headers', async () => {
    const reviewData = { name: 'Carol', message: 'Fantastic!', project_id: 1 }
    global.fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true })
      .mockResolvedValueOnce({ json: () => Promise.resolve([]), ok: true })

    const { submitReview } = useReviews()
    await submitReview(reviewData)

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/reviews'),
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(reviewData),
        headers: { 'Content-Type': 'application/json' },
      }),
    )
  })

  it('returns true when the request succeeds', async () => {
    global.fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true })
      .mockResolvedValueOnce({ json: () => Promise.resolve([]), ok: true })

    const { submitReview } = useReviews()
    const result = await submitReview({ message: 'Test' })

    expect(result).toBe(true)
  })

  it('returns false when the request fails', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false })

    const { submitReview } = useReviews()
    const result = await submitReview({ message: 'Test' })

    expect(result).toBe(false)
  })

  it('refreshes reviews after a successful submission', async () => {
    const updatedReviews = [{ id: 5, message: 'New review', date: '25-06-01 00:00:00' }]
    global.fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true })
      .mockResolvedValueOnce({ json: () => Promise.resolve(updatedReviews), ok: true })

    const { reviews, submitReview } = useReviews()
    await submitReview({ message: 'New review' })

    expect(reviews.value).toEqual(updatedReviews)
  })

  it('does not refresh reviews after a failed submission', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false })

    const { reviews, submitReview } = useReviews()
    reviews.value = [{ id: 1, message: 'Existing', date: '25-01-01 00:00:00' }]
    await submitReview({ message: 'Will fail' })

    // reviews should remain unchanged since POST failed
    expect(global.fetch).toHaveBeenCalledOnce()
    expect(reviews.value).toHaveLength(1)
  })
})
