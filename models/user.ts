export interface UsersData {
  first_name: string
  last_name: string
  name: string
  email: string
  location_id: number
  pronouns: string
  bio: string
}

export interface UsersDataBackend extends UsersData {
  auth0_id: string
}
