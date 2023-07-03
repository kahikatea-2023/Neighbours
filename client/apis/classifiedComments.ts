import request from 'superagent'
import { CommentSectionProps } from '../../models/comments'

const rootUrl = '/api/v1/'

export async function fetchClassifiedComments(
  locationId: number,
  requestId: number,
  token: string
): Promise<CommentSectionProps[]> {
  const url = `${rootUrl}locations/${locationId}/classified/${requestId}/requests`
  const res = await request
    .get(url)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  console.log('I am in the api call', res.body.classifications)
  console.log(requestId)
  return res.body.classifications
}
