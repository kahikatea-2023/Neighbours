import * as z from 'zod'

export const userDraftSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  name: z.string(),
  email: z.string().email(),
  location_id: z.number(),
  pronouns: z.string(),
  bio: z.string(),
})
export type UsersData = z.infer<typeof userDraftSchema>

export const updateUserSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  name: z.string(),
  location_id: z.number(),
  pronouns: z.string(),
  bio: z.string(),
})
export const updateProfileBackendSchema = updateUserSchema.extend({
  auth0_id: z.string(),
})

export type UpdateUsersData = z.infer<typeof updateUserSchema>

export const usersDataBackendSchema = userDraftSchema.extend({
  auth0_id: z.string(),
})

export type UserData = z.infer<typeof userDraftSchema>
export type UsersDataBackend = z.infer<typeof usersDataBackendSchema>
export type UpdateUsersDataBackend = z.infer<typeof updateProfileBackendSchema>
