import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { PropertyLookupData, PropertyLookupStatus } from '@/types/property-lookup'

export function usePropertyLookup() {
  const [status, setStatus] = useState<PropertyLookupStatus>('idle')
  const [data, setData] = useState<PropertyLookupData | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function fetchPropertyData(address: string, leadId?: string | null) {
    if (!address) {
      setError('Address is required')
      return
    }

    setStatus('loading')
    setError(null)

    try {
      const { data: result, error: functionError } = await supabase.functions.invoke(
        'property-lookup',
        {
          body: { address, leadId },
        }
      )

      if (functionError) {
        throw functionError
      }

      if (!result) {
        throw new Error('No data returned from property lookup')
      }

      setData(result as PropertyLookupData)
      setStatus('success')
      return result as PropertyLookupData
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch property data'
      setError(errorMessage)
      setStatus('error')
      return null
    }
  }

  return {
    fetchPropertyData,
    status,
    data,
    error,
  }
}
