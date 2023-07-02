import request from 'superagent'
import { UpdateUsersDataBackend } from '../../models/user'

const rootUrl = '/api/v1/'

export async function fetchProfiles(): Promise<UpdateUsersDataBackend[]> {
  const res = await request.get(rootUrl + 'profile')
  return res.body
}
