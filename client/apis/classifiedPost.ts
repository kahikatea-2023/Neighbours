import request from 'superagent'
import { ClaRequestDataBackend } from '../../models/classified'
import ClassifiedPage from '../Pages/ClassifiedsPage/ClassifiedsPage'

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

export async function fetchClassifiedPostDetails(
  locationId: number,
  postId: number,
  token: string
): Promise<ClaRequestDataBackend> {
  const url = `${rootUrl}locations/${locationId}/classified/${postId}`
  const res = await request
    .get(url)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body
}

export async function fetchUserClassifiedPost(
  auth0Id: string,
  token: string
): Promise<ClaRequestDataBackend[]> {
  const url = `${rootUrl}locations/${auth0Id}/classifiedposts`
  const res = await request
    .get(url)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body.classificationDetails
}
// export async function addClassifiedPost(
//   locationId: number,
//   newPost: AddPostDataDraft,
//   token: string
// ): Promise<ClassifiedRqDataBackend[]> {
//   const url = `${rootUrl}locations/${locationId}/classified`
//   const res = await request
//     .post(url)
//     .set('Authorization', `Bearer ${token}`)
//     .set('Content-Type', 'application/json')
//     .send(newPost)
//   res.sendStatus(201)
// }
