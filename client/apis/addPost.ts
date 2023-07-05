import request from 'superagent'
import { AddClaRequest } from '../../models/classified'
const rootUrl = '/api/v1/'

export async function addClassifiedReqest(
  locationId: number,
  newPost: AddClaRequest,
  token: string
): Promise<void> {
  const url = `${rootUrl}locations/${locationId}/classified`
  await request
    .post(url)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newPost)

  //need to fixed the console.log
}
