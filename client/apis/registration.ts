import request from 'superagent'
import { LocationsDataBackend } from '../../models/locations'

const rootUrl = '/api/v1/'

export async function fetchLocations(): Promise<LocationsDataBackend[]> {
  const res = await request.get(rootUrl + '/locations')
  // console.log(res.body.locations, 'Iam in the apifunction')
  return res.body.locations
}
