import * as z from 'zod'

export const updateAnswerSchema = z.object({
  comment: z.string(),
})

export const addAnswerSchema = updateAnswerSchema.extend({
  classified_request_id: z.number(),
  user_name: z.string(),
})

export const answersDataBackend = addAnswerSchema.extend({
  id: z.number(),
})

export type UpdateAnswer = z.infer<typeof updateAnswerSchema>
export type AddAnswer = z.infer<typeof addAnswerSchema>
export type AnswerDataBackend = z.infer<typeof answersDataBackend>
