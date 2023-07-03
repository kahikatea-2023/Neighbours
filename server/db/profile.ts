import {
  UpdateUsersDataBackend,
  UserData,
  UsersDataBackend,
} from '../../models/user'
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
      'users.location_id as location_id',
      'pronouns',
      'bio'
    )
    .first()) as UserData[]
}

export async function upsertProfile(profile: UsersDataBackend) {
  await db('users')
    .insert({
      auth0_id: profile.auth0_id,
      name: profile.name,
      email: profile.email,
      first_name: profile.first_name,
      last_name: profile.last_name,
      location_id: profile.location_id,
      pronouns: profile.pronouns,
      bio: profile.bio,
    })
    .onConflict('auth0_id')
    .merge()
}

export async function updateProfile(profile: UpdateUsersDataBackend) {
  await db('users')
    .insert({
      auth0_id: profile.auth0_id,
      name: profile.name,
      first_name: profile.first_name,
      last_name: profile.last_name,
      location_id: profile.location_id,
      pronouns: profile.pronouns,
      bio: profile.bio,
    })
    .onConflict('auth0_id')
    .merge()
}
