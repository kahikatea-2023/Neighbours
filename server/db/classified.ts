import db from './connection'
import {
  ClassifiedRqCommentDataBackend,
  ClassifiedRqDataBackend,
} from '../../models/classified'

export async function getAllClassifications() {
  return (await db('classified_request').select(
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

export async function getAllAnswers(requestId: number) {
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
      'classified_request_answers.user_name',
      'classified_request_answers.time',
      'classified_request_answers.comment'
    )) as ClassifiedRqCommentDataBackend[]
}
