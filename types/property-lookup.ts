export interface PropertyLookupData {
  property_input: string
  normalized_address: string
  on_market: boolean
  as_of_date: string
  current_listing_price_DKK: number | null
  price_per_sqm_DKK: number | null
  listing_source: string | null
  listing_url: string | null
  listing_last_seen: string | null
  message: 'ON_MARKET' | 'CANT_FIND_ON_LISTING'
  source_primary: {
    name: string | null
    url: string | null
    accessed: string
  }
  source_secondary: {
    name: string | null
    url: string | null
    accessed: string | null
  }
  attempts: string[]
  confidence: number
  notes: string
}

export type PropertyLookupStatus = 'idle' | 'loading' | 'success' | 'error'
