import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'

import { getAllLocations, getLocationById } from './locations'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

it('should have the property id', async () => {
  const locations = await getAllLocations()
  expect(locations[0]).toHaveProperty('id')
})

it('should have the property name', async () => {
  const locations = await getAllLocations()
  expect(locations[0]).toHaveProperty('name')
})

it('should show all locations', async () => {
  const locations = await getAllLocations()
  expect(locations).toBeDefined()
})

it('should return an array of locations', async () => {
  const locations = await getAllLocations()
  expect(Array.isArray(locations)).toBe(true)
})

it('should retrieve at least one location', async () => {
  const locations = await getAllLocations()
  expect(locations.length).toBeGreaterThan(0)
})

it('should retrieve a location by ID', async () => {
  const id = 1
  const location = await getLocationById(id)
  expect(location).toBeDefined()
})

it('should have the correct ID when retrieving a location by ID', async () => {
  const id = 1
  const location = await getLocationById(id)
  expect(Array.isArray(location)).toBe(false) // Ensure location is not an array
  expect(location).toHaveProperty('id', id)
})

it('should return undefined for non-existent location ID', async () => {
  const id = 999999999999999
  const location = await getLocationById(id)
  expect(location).toBeUndefined()
})

it('should return an array of locations when querying with multiple IDs', async () => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Replace with an array of valid location IDs
  const locations = await Promise.all(ids.map((id) => getLocationById(id)))
  expect(Array.isArray(locations)).toBe(true)
  expect(locations.length).toBe(ids.length)
})

it('should return an empty array when querying with an empty array of IDs', async () => {
  const ids: number[] = []
  const locations = await Promise.all(ids.map((id) => getLocationById(id)))
  expect(Array.isArray(locations)).toBe(true)
  expect(locations.length).toBe(0)
})

it('should retrieve the correct location name', async () => {
  const id = 1
  const expectedName = 'Auckland Central' // Update with the correct expected name
  const location = await getLocationById(id)
  expect(location).toBeDefined()
  expect(location).toHaveProperty('name', expectedName)
})
