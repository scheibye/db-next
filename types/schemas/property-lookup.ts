import z from 'zod'

export const propertyLookupSchema = z.object({
  isOnMarket: z.boolean(),
  currentListingPrice: z.number().nullable(),
  pricePerSqm: z.number().nullable(),
})

export type PropertyLookupData = z.infer<typeof propertyLookupSchema>
