export interface ClassifiedRqData {
  user_auth0_id: string
  location_id: number
  title: string
  type: string
  image: string
  date: string
  time: string
  venue: string
  description: string
}
export interface ClassifiedRqDataBackend extends ClassifiedRqData {
  id: number
}

export interface ClassifiedRqCommentData {
  name: string
  classified_request_id: number
  user_auth0_id: number
  user_name: string
  time: string
  comment: string
}

export interface ClassifiedRqCommentDataBackend
  extends ClassifiedRqCommentData {
  id: number
}
