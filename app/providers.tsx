'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { LoanFormProvider } from '@/contexts/loan-form'
import { getQueryClient } from '@/lib/get-query-client'
import type * as React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <LoanFormProvider>{children}</LoanFormProvider>
    </QueryClientProvider>
  )
}
