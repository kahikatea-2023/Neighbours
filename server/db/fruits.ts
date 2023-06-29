import connection from './connection'
import { Fruit } from '../../models/user'

export function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}
export function getLocations() {
  throw new Error('Function not implemented.')
}

