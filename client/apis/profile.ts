import request from 'superagent'
import { UpdateUsersData, UsersDataBackend } from '../../models/user'

const rootUrl = '/api/v1/'

export async function fetchProfiles(token: string): Promise<UsersDataBackend> {
  const res = await request
    .get(rootUrl + 'profile')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body.profile
}

export async function updateProfile(
  updateUser: UpdateUsersData,
  token: string
): Promise<void> {
  await request
    .patch('/api/v1/profile')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(updateUser)
  console.log('im the api, im working')
}