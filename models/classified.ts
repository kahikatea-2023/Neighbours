import * as z from 'zod'

export const updateClaRequestSchema = z.object({
  title: z.string(),
  date: z.string(),
  venue: z.string(),
  description: z.string(),
  image: z.string(),
})

export const addClaRequestSchema = updateClaRequestSchema.extend({
  user_name: z.string(),
  location: z.string(),
})

export const claRequestDataBackendSchema = addClaRequestSchema.extend({
  id: z.number(),
})

export const newRequestToBackend = updateClaRequestSchema.extend({
  user_auth0_id: z.string(),
  location_id: z.number(),
})

export type UpdateClaRequest = z.infer<typeof updateClaRequestSchema>
export type AddClaRequest = z.infer<typeof addClaRequestSchema>

export type ClaRequestDataBackend = z.infer<typeof claRequestDataBackendSchema>
export type newRequestToBackend = z.infer<typeof newRequestToBackend>
