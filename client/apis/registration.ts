import request from 'superagent'
import { LocationsDataBackend } from '../../models/locations'
import { UserData } from '../../models/user'

const rootUrl = '/api/v1/'

export async function fetchLocations(): Promise<LocationsDataBackend[]> {
  const res = await request.get(rootUrl + 'locations')
  return res.body.locations
}

export async function upsertProfile(
  newUser: UserData,
  token: string
): Promise<void> {
  await request
    .post('/api/v1/profile')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(newUser)
}
