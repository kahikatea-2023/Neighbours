import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import {
  addRequest,
  getAllAnswersByRequest,
  getAllClassificationsByLocation,
  getClassificationById,
} from './classified'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('getAllClassificationsByLocation', () => {
  it('should return an array of classifications with all required properties', async () => {
    const locationId = 4
    const classification = await getAllClassificationsByLocation(locationId)
    expect(classification).toHaveLength(3)
    classification.forEach((c) => {
      expect(c).toHaveProperty('user_auth0_id')
      expect(c).toHaveProperty('location_id')
      expect(c).toHaveProperty('title')
      expect(c).toHaveProperty('date')
      expect(c).toHaveProperty('image')
      expect(c).toHaveProperty('venue')
      expect(c).toHaveProperty('description')
    })
  })

  it('should return an array of classifications sorted by date in descending order', async () => {
    const locationId = 4
    const classifications = await getAllClassificationsByLocation(locationId)
    expect(classifications).toHaveLength(3)

    const sortedClassifications = [...classifications].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    const originalDates = classifications.map((c) => c.date)
    const sortedDates = sortedClassifications.map((c) => c.date)

    expect(originalDates).toEqual(sortedDates.reverse())
  })

  it('should return an array of classifications with the correct location_id', async () => {
    const locationId = 4
    const classification = await getAllClassificationsByLocation(locationId)
    expect(classification).toHaveLength(3)
    expect(classification.every((c) => c.location_id === locationId)).toBe(true)
  })

  it('should return an empty array when no classifications exist for the location', async () => {
    const nonExistingLocationId = 9999999999
    const classification = await getAllClassificationsByLocation(
      nonExistingLocationId
    )
    expect(classification).toHaveLength(0)
  })
})

describe('getClassificationById', () => {
  it('should return a single classification object by ID', async () => {
    const id = 1
    const classification = await getClassificationById(id)
    expect(Array.isArray(classification)).toBe(false) // Ensure classification is not an array
    expect(classification).toBeDefined()
  })

  it('should have the correct properties in the classification object', async () => {
    const id = 1
    const classification = await getClassificationById(id)
    expect(classification).toHaveProperty('id')
    expect(classification).toHaveProperty('user_auth0_id')
    expect(classification).toHaveProperty('location_id')
    expect(classification).toHaveProperty('title')
    expect(classification).toHaveProperty('type')
    expect(classification).toHaveProperty('image')
    expect(classification).toHaveProperty('date')
    expect(classification).toHaveProperty('time')
    expect(classification).toHaveProperty('venue')
    expect(classification).toHaveProperty('description')
  })
})































it('should return an array of answers', async () => {
  const requestId = 1
  const answers = await getAllAnswersByRequest(requestId)
  expect(Array.isArray(answers)).toBe(true)
})
