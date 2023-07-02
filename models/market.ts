import * as z from 'zod'

export const MarketAdSchema = z.object({
  user_auth0_id: z.string(),
  location_id: z.number(),
  title: z.string(),
  venue: z.string(),
  price: z.number(),
  sale_completion: z.boolean(),
  description: z.string(),
})

export const MarketAdDataBackendSchema = MarketAdSchema.extend({
  id: z.number(),
})

export const MarketAdOffersDataSchema = z.object({
  market_advertisement_id: z.number(),
  user_auth0_id: z.string(),
  user_name: z.string(),
  time: z.string(),
  comment: z.string(),
})

export const MarketAdOffersDataBackendSchema = MarketAdOffersDataSchema.extend({
  id: z.number(),
})

export type MarketAdData = z.infer<typeof MarketAdSchema>
export type MarketAdDataBackend = z.infer<typeof MarketAdDataBackendSchema>
export type MarketAdOffersData = z.infer<typeof MarketAdOffersDataSchema>
export type MarketAdOffersDataBackend = z.infer<
  typeof MarketAdOffersDataBackendSchema
>
