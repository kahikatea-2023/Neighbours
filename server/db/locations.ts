import db from './connection'
import { LocationsDataBackend } from '../../models/locations'

export async function getAllLocations() {
  return (await db('locations').select('id', 'name')) as LocationsDataBackend[]
}

export async function getLocationById(id: number) {
  return await db('locations').where('id', id).select('id', 'name').first() as LocationsDataBackend[]
}
