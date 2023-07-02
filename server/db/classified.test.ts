import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import {
  getAllAnswersByRequest,
  getAllClassificationsByLocation,
  getClassificationById,
  
  updateRequest,
} from './classified'
import { ClassifiedRqDataBackend, ClassifiedRqDataUpdateBackend } from '../../models/classified'
//Get /api/v1/locations

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

it('should have these properties', async () => {
  const classification = await getAllClassificationsByLocation(4)
  expect(classification).toHaveLength(3)
  expect(classification[0]).toHaveProperty('user_auth0_id')
  expect(classification[0]).toHaveProperty('location_id')
  expect(classification[0]).toHaveProperty('title')
  expect(classification[0]).toHaveProperty('date')
  expect(classification[0]).toHaveProperty('image')
  expect(classification[0]).toHaveProperty('venue')
  expect(classification[0]).toHaveProperty('description')
})

it('getClassificationById', async () => {
  const classification = await getClassificationById(1)
  expect(classification).toHaveProperty('id')
  expect(classification).toHaveProperty('user_auth0_id')
  expect(classification).toHaveProperty('location_id')
  expect(classification).toHaveProperty('title')
  expect(classification).toHaveProperty('date')
  expect(classification).toHaveProperty('image')
  expect(classification).toHaveProperty('venue')
  expect(classification).toHaveProperty('description')
})

it('should return an array of answers', async () => {
  const requestId = 1
  const answers = await getAllAnswersByRequest(requestId)
  expect(Array.isArray(answers)).toBe(true)
})

// it('should update the request in the database', async () => {
//   const updatedRequest: ClassifiedRqDataUpdateBackend = {
//     id: 1,
//     user_auth0_id: 'string',
//     location_id: 4,
//     title: 'string',
//     date: 'string',
//     image: 'string',
//     venue: 'string',
//     description: 'string',
//   };
//   const id = 1;

//   await updateRequest(updatedRequest, id);

//   const fetchedRequest = await db('classified_request').where('id', id).first();
//   expect(fetchedRequest.title).toBe(updatedRequest.title);
//   expect(fetchedRequest.description).toBe(updatedRequest.description);
// });
