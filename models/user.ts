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

export const UserEditSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  name: z.string(),
  location: z.string(),
  location_id: z.number(),
  pronouns: z.string(),
  bio: z.string(),
})

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

export const usersDataBackendSchema = userDraftSchema.extend({
  auth0_id: z.string(),
})

export type UserData = z.infer<typeof userDraftSchema>
export type UsersDataBackend = z.infer<typeof usersDataBackendSchema>
export type UpdateUsersData = z.infer<typeof updateUserSchema>
export type UpdateUsersDataBackend = z.infer<typeof updateProfileBackendSchema>
export type UserEditData = z.infer<typeof UserEditSchema>
