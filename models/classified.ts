import * as z from 'zod'

export const ClassifiedPostRqDataSchema = z.object({
  user_auth0_id: z.string(),
  location_id: z.number(),
  title: z.string(),
  date: z.string(),
  image: z.string(),
  venue: z.string(),
  description: z.string(),
})

export const ClassifiedRqDataUpdateBackendSchema =
  ClassifiedPostRqDataSchema.extend({
    id: z.number(),
  })

export const ClassifiedRqDataSchema = z.object({
  user_auth0_id: z.string(),
  location_id: z.number(),
  title: z.string(),
  type: z.string(),
  image: z.string(),
  date: z.string(),
  time: z.string(),
  venue: z.string(),
  description: z.string(),
})

export const ClassifiedRqDataBackendSchema = ClassifiedRqDataSchema.extend({
  id: z.number(),
})

export const ClassifiedRqCommentDataSchema = z.object({
  classified_request_id: z.number(),
  user_auth0_id: z.number(),
  time: z.string(),
  comment: z.string(),
})

export const ClassifiedRqCommentDataBackendSchema =
  ClassifiedRqCommentDataSchema.extend({
    id: z.number(),
  })

export const PostRequestSchema = z.object({
  location_id: z.number(),
  title: z.string(),
  date: z.string(),
  image: z.string(),
  venue: z.string(),
  description: z.string(),
})

export const PostRequestBackendSchema = PostRequestSchema.extend({
  id: z.number(),
})

export const PostAnswersSchema = z.object({
  classified_request_id: z.number(),
  time: z.string(),
  comment: z.string(),
})

export const PostAnswersBackendSchema = PostAnswersSchema.extend({
  id: z.number(),
})


export type ClassifiedPostRqData = z.infer<typeof ClassifiedPostRqDataSchema>
export type ClassifiedRqDataUpdateBackend = z.infer<
  typeof ClassifiedRqDataUpdateBackendSchema
>
export type ClassifiedRqData = z.infer<typeof ClassifiedRqDataSchema>
export type ClassifiedRqDataBackend = z.infer<
  typeof ClassifiedRqDataBackendSchema
>
export type ClassifiedRqCommentData = z.infer<
  typeof ClassifiedRqCommentDataSchema
>
export type ClassifiedRqCommentDataBackend = z.infer<
  typeof ClassifiedRqCommentDataSchema
>

export type PostRequest = z.infer<typeof PostRequestSchema>
export type postRequestBackend = z.infer<typeof PostRequestBackendSchema>
export type PostAnswers = z.infer<typeof PostAnswersSchema>
export type PostAnswersBackend = z.infer<typeof PostAnswersBackendSchema>
