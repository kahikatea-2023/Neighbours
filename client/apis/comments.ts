import request from 'superagent'
import { AnswerDataBackend } from '../../models/comments'

const rootUrl = '/api/v1/'

export async function fetchComments(
  locationId: number,
  postId: number,
  token: string
): Promise<AnswerDataBackend[]> {
  return Promise.resolve([
    {
      userId: '1',
      id: '1',
      user_name: 'John Doe',
      comment: 'This is the first comment.',
      avatarUrl: '',
      replies: [],
    },
    {
      userId: '2',
      id: '2',
      user_name: 'Jane',
      comment: 'Here is another comment.',
      avatarUrl: '',
      replies: [],
    },
  ])
  // const url = `${rootUrl}locations/${locationId}/classifieds/${postId}`
  // const res = await request
  //   .get(url)
  //   .set('Authorization', `Bearer ${token}`)
  //   .set('Content-Type', 'application/json')
  // console.log('I am in the api call', res.body.comments)
  //   return res.body.comments
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