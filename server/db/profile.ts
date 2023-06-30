import { UsersDataBackend } from '../../models/user'
import db from './connection'

//join the table user and
export async function getUserById(auth0_id: string) {
  return (await db('users')
    .join('locations', 'locations.id', 'users.location_id')
    .where('users.auth0_id', auth0_id)
    .select(
      'first_name',
      'last_name',
      'users.name as users_name',
      'email',
      'locations.name as location',
      'pronouns',
      'bio'
    )
    .first()) as UsersDataBackend[]
}
