import db from './connection'
import {
  ClassifiedRqCommentDataBackend,
  ClassifiedRqDataBackend,
  ClassifiedPostRqData,
  ClassifiedRqDataUpdateBackend,
} from '../../models/classified'

export async function getAllClassificationsByLocation(locationId: number) {
  return (await db('classified_request')
    .join('locations', 'locations.id', 'classified_request.location_id')
    .join('users', 'users.auth0_id', 'classified_request.user_auth0_id')
    .where('locations.id', locationId)
    .select(
      'classified_request.id',
      'classified_request.user_auth0_id',
      'classified_request.location_id',
      'classified_request.title',
      'classified_request.type',
      'classified_request.image',
      'classified_request.date',
      'classified_request.time',
      'classified_request.venue',
      'classified_request.description'
    )) as ClassifiedRqDataBackend[]
}

export async function getClassificationById(id: number) {
  return (await db('classified_request')
    .where('id', id)
    .select(
      'id',
      'user_auth0_id',
      'location_id',
      'title',
      'type',
      'image',
      'date',
      'time',
      'venue',
      'description'
    )
    .first()) as ClassifiedRqDataBackend[]
}

export async function getAllAnswersByRequest(requestId: number) {
  return (await db('classified_request_answers')
    .join(
      'classified_request',
      'classified_request.id',
      'classified_request_id'
    )
    .where('classified_request_answers.classified_request_id', requestId)
    .select(
      'classified_request.id as answers_id',
      'classified_request_answers.user_auth0_id',
      'classified_request_answers.time',
      'classified_request_answers.comment'
    )) as ClassifiedRqCommentDataBackend[]
}

// added answer
// export

export function addRequest(request: ClassifiedPostRqData) {
  const newRequest = {
    user_auth0_id: request.user_auth0_id,
    location_id: request.location_id,
    title: request.title,
    image: request.image,
    date: request.date,
    venue: request.venue,
    description: request.description,
  }
  return db('classified_request')
    .join('locations', 'locations.id', 'classified_request.location_id')
    .join('users', 'users.auth0_id', 'classified_request.user_auth0_id')
    .where('locations.id', request.location_id)
    .select(
      'classified_request.user_auth0_id',
      'classified_request.location_id',
      'classified_request.title',
      'classified_request.image',
      'classified_request.date',
      'classified_request.time',
      'classified_request.venue',
      'classified_request.description'
    )
    .insert(newRequest)
}

export function updateRequest(
  Updatedrequest: ClassifiedRqDataUpdateBackend,
  id: number
) {
  const newObj = { ...Updatedrequest }

  return db('classified_request').where('id', id).update(newObj)
}

export function deleteRequestById(requestId: number, userAuth0Id: string) {
  return db('classified_request')
    .where('id', requestId)
    .where('user_auth0_id', userAuth0Id)
    .delete()
}
