import * as z from 'zod'

export const ActPostDataSchema = z.object({
  user_auth0_id: z.string(),
  location_id: z.number(),
  title: z.string(),
  type: z.string(),
  image: z.string(),
  date: z.string(),
  time: z.string(),
  venue: z.string(),
  attendees: z.string(),
  description: z.string(),
})

export const ActPostDataBackendSchema = ActPostDataSchema.extend({
  id: z.number(),
})

export const ActPostCommentDataSchema = z.object({
  name: z.string(),
  activity_post_id: z.number(),
  user_auth0_id: z.number(),
  user_name: z.string(),
  time: z.string(),
  comment: z.string(),
})

export const ActPostCommentDataBackendSchema = ActPostCommentDataSchema.extend({
  id: z.number(),
})

export type ActPostData = z.infer<typeof ActPostDataSchema>

export type ActPostDataBackend = z.infer<typeof ActPostDataBackendSchema>
export type ActPostCommentData = z.infer<typeof ActPostCommentDataSchema>
export type ActPostCommentDataBackend = z.infer<
  typeof ActPostCommentDataBackendSchema
>
