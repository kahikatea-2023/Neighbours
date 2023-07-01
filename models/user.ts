import * as z from 'zod'

export const usersDataSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  name: z.string(),
  email: z.string().email(),
  location_id: z.number(),
  pronouns: z.string(),
  bio: z.string(),
})
export type UsersData = z.infer<typeof usersDataSchema>

export const usersDataBackendSchema = usersDataSchema.extend({
  auth0_id: z.string(),
})

export type UsersDataBackend = z.infer<typeof usersDataBackendSchema>
