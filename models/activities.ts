export interface ActPostData {
  user_auth0_id: string
  location_id: number
  title: string
  type: string
  image: string
  date: string
  time: string
  venue: string
  attendees: string
  description: string
}

export interface ActPostDataBackend extends ActPostData {
  id: number
}

export interface ActPostCommentData {
  name: string
}

export interface ActPostCommentDataBackend  extends ActPostCommentData {
  id: number
}
