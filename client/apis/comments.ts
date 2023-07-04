import request from 'superagent'
import { AnswerDataBackend } from '../../models/comments'

const rootUrl = '/api/v1/'

export async function fetchComments(
  locationId: number,
  request: number,
  token: string
): Promise<AnswerDataBackend[]> {
  const url = `${rootUrl}locations/${locationId}/classifieds/${request}`
  const res = await request
    .get(url)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  console.log('I am in the api call', res.body.comments)
    return res.body.comments
}

// comment: string;
// classified_request_id: number;
// user_name: string;
// id: number;


// export async function fetchComments(token: string,locationId:number, request:number) {
//   const res = await request
//   res.get(`/api/v1/${locationId}/classifieds/${request}`)
//     .set('Authorization', `Bearer ${token}`)
//     .set('Content-Type', 'application/json')

//   return res.body.comments as []
// }