'use client'

import { useEffect, useState } from 'react'
import { Loader2Icon } from 'lucide-react'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import {
  LoanFormHeader,
  LoanFormHeaderDescription,
  LoanFormHeaderTitle,
} from '@/components/forms/loan/LoanFormHeader'
import { useLoanFormContext } from '@/contexts/loan-form'

const loadingMessages = [
  'Søger efter ejendommen i offentlige databaser...',
  'Analyserer aktuelle udbudspriser...',
  'Henter salgshistorik og priser...',
  'Krydstjekker data fra flere kilder...',
  'Beregner markedsværdi og tendenser...',
  'Validerer ejendomsoplysninger...',
]

export function LoanFormPropertyReviewStep({ className }: { className?: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0)

  const { formData, nextStep } = useLoanFormContext()

  // Show loading messages for 5 seconds each
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isLoading])

  return (
    <>
      <LoanFormHeader>
        <LoanFormHeaderTitle>Henter boligoplysninger</LoanFormHeaderTitle>
        <LoanFormHeaderDescription>
          {loadingMessages[loadingMessageIndex]}
        </LoanFormHeaderDescription>
      </LoanFormHeader>

      <div className="bg-brand-spring grid size-24 place-content-center rounded-full">
        <Loader2Icon className="text-brand-dark size-12 animate-spin" />
      </div>
    </>
  )
}
