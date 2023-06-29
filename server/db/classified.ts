import db from './connection'
import { ClassifiedRqDataBackend } from '../../models/classified'

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
