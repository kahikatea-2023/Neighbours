import db from './connection'
import { LocationsDataBackend } from '../../models/locations'

export async function getLocations() {
  return (await db('locations').select('id', 'name')) as LocationsDataBackend[]
}
