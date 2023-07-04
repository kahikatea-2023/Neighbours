import request from 'superagent'
import { answersDataBackendSchema } from '../../models/comments'

const rootUrl = '/api/v1/'

export async function fetchClassifiedComments(
  locationId: number,
  id: number,
  token: string
): Promise<answersDataBackendSchema[]> {
  const url = ${rootUrl}locations/${locationId}/classified/${id}/requests
  const res = await request
    .get(url)
    .set('Authorization', Bearer ${token})
    .set('Content-Type', 'application/json')
  console.log('I am in the api call', res.body.classifications)
  console.log(id)
  return res.body.classifications
}
