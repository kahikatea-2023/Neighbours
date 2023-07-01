export interface ClassifiedPostRqData {
  user_auth0_id: string
  location_id: number
  title: string
  date: string
  image: string
  venue: string
  description: string
}

export interface ClassifiedRqDataUpdateBackend extends ClassifiedPostRqData {
  id: number
}

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
  classified_request_id: number
  user_auth0_id: number
  time: string
  comment: string
}

export interface ClassifiedRqCommentDataBackend {
  id: number
}
