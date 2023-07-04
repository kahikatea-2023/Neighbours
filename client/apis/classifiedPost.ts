import request from 'superagent'
import { ClaRequestDataBackend } from '../../models/classified'

const rootUrl = '/api/v1/'

//Sarah's fetchClassified
export async function fetchClassifiedPost(
  locationId: number,
  token: string
): Promise<ClaRequestDataBackend[]> {
  const url = `${rootUrl}locations/${locationId}/classified`
  const res = await request
    .get(url)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body.classifications
}
