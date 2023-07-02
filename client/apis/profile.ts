import request from 'superagent'
<<<<<<< HEAD
import { UpdateUsersData, UpdateUsersDataBackend } from '../../models/user'

const rootUrl = '/api/v1/'

export async function fetchProfiles(token: string): Promise<UpdateUsersDataBackend> {
=======
import { UserData, UsersDataBackend } from '../../models/user'

const rootUrl = '/api/v1/'

export async function fetchProfiles(token: string): Promise<UsersDataBackend> {
>>>>>>> 8c25fc5c9613201e01ad5832694d09bec78abdc7
  const res = await request
    .get(rootUrl + 'profile')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body.profile
}

export async function updateProfile(
<<<<<<< HEAD
  updateUser: UpdateUsersData,
=======
  updateUser: UserData,
>>>>>>> 8c25fc5c9613201e01ad5832694d09bec78abdc7
  token: string
): Promise<void> {
  await request
    .patch('/api/v1/profile')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(updateUser)
  console.log('im the api, im working')
<<<<<<< HEAD
}
=======
}
>>>>>>> 8c25fc5c9613201e01ad5832694d09bec78abdc7
