export interface MarketAdData {
  user_auth0_id: string
  location_id: number
  title: string
  venue: string
  price: number
  sale_completion: boolean
  description: string
}

export interface MarketAdDataBackend extends MarketAdData {
  id: number
}

export interface MarketAdOffersData {
  market_advertisement_id: number
  user_auth0_id: string
  user_name: string
  time: string
  comment: string
}

export interface MarketAdOffersDataBackend {
  id: number
}
