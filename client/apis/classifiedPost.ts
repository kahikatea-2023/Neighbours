import request from 'superagent'
import { ClassifiedRqDataBackend } from '../../models/classified'

const rootUrl = '/api/v1/'

export async function fetchClassifiedPost(
  locationId: number
): Promise<ClassifiedRqDataBackend[]> {
  const url = `${rootUrl}locations/${locationId}}/classified`
  const res = await request.get(url)
  return res.body.classifications
}
