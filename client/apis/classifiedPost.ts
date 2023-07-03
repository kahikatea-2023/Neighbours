import request from 'superagent'
import { ClassifiedRqDataBackend } from '../../models/classified'

const rootUrl = '/api/v1/'

export async function fetchClassifiedPost(
  locationId: number,
  token: string
): Promise<ClassifiedRqDataBackend[]> {
  const url = `${rootUrl}locations/${locationId}/classified`
  const res = await request
    .get(url)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  console.log('I am in the api call', res.body.classifications)

  return res.body.classifications
}
