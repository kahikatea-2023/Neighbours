import connection from './connection'
import { Fruit } from '../../models/user'

export function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}
