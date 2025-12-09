'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CircleXIcon, Loader2Icon, MapPinCheckIcon } from 'lucide-react'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import {
  LoanFormHeader,
  LoanFormHeaderDescription,
  LoanFormHeaderTitle,
} from '@/components/forms/loan/LoanFormHeader'
import { BaseAlert, BaseAlertDescription, BaseAlertTitle } from '@/components/ui/BaseAlert'
import { useLoanFormContext } from '@/contexts/loan-form'
import { fetchPropertyLookup } from '@/services/property'
import { formatPrice } from '@/utils/money'
import type { PropertyLookupData } from '@/types/schemas/property-lookup'

const loadingMessages = [
  'Søger efter ejendommen i offentlige databaser...',
  'Analyserer aktuelle udbudspriser...',
  'Henter salgshistorik og priser...',
  'Krydstjekker data fra flere kilder...',
  'Beregner markedsværdi og tendenser...',
  'Validerer ejendomsoplysninger...',
]

export function LoanFormPropertyReviewStep({
  onNextStep,
  onPreviousStep,
}: {
  onNextStep: () => void
  onPreviousStep: () => void
}) {
  const { formData } = useLoanFormContext()

  const { data, isLoading, error } = useQuery<PropertyLookupData>({
    queryKey: ['property-lookup', formData.property?.address],
    queryFn: () => fetchPropertyLookup(formData.property!.address),
  })

  if (isLoading) {
    return <LoadingState isLoading={isLoading} />
  }

  if (error) {
    return <ErrorState />
  }

  return (
    <>
      <LoanFormHeader className="text-center">
        <LoanFormHeaderTitle className="justify-center">
          {data?.isOnMarket ? 'Boligoplysninger' : 'Adresse bekræftet'}
        </LoanFormHeaderTitle>

        <LoanFormHeaderDescription>
          {data?.isOnMarket
            ? 'Vi bruger disse oplysninger til at beregne din lånemuligheder og give dig det bedste tilbud'
            : 'Lad os fortsætte med din ansøgning'}
        </LoanFormHeaderDescription>
      </LoanFormHeader>

      <div className="grid gap-8">
        <div className="bg-brand-spring/25 rounded-xl p-8 text-center text-2xl font-semibold">
          <h3 className="flex flex-col items-center gap-4 underline">
            <MapPinCheckIcon className="text-brand-primary size-8 shrink-0" />
            {formData.property?.address}
          </h3>

          {/* Show price if the property is on the market */}
          {data?.isOnMarket && data?.currentListingPrice && (
            <div className="mt-6 space-y-3">
              <h4 className="text-lg font-medium">Udbudspris:</h4>

              <p className="text-foreground mb-2 text-3xl font-bold">
                {formatPrice(data.currentListingPrice)}
              </p>

              {data?.pricePerSqm && (
                <p className="text-muted-foreground text-sm">
                  {formatPrice(data.pricePerSqm)} pr. m<sup>2</sup>
                </p>
              )}
            </div>
          )}
        </div>

        {/* Show warning if the property is not on the market */}
        {!data?.isOnMarket && (
          <BaseAlert variant="warning">
            <CircleXIcon className="size-5 shrink-0" />
            <BaseAlertTitle>Vi kunne ikke finde en aktiv salgsliste</BaseAlertTitle>
            <BaseAlertDescription>
              Det er helt okay! Vi har bekræftet adressen, og du kan fortsætte med din ansøgning.
              Vores rådgivere vil hjælpe dig videre i processen.
            </BaseAlertDescription>
          </BaseAlert>
        )}
      </div>

      <LoanFormFooter onNext={onNextStep} onPrevious={onPreviousStep} />
    </>
  )
}

function LoadingState({ isLoading }: { isLoading: boolean }) {
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0)

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
      <div className="mb-6 flex justify-center">
        <Loader2Icon className="text-brand-primary size-12 animate-spin" />
      </div>

      <LoanFormHeader className="text-center">
        <LoanFormHeaderTitle className="justify-center">
          Henter boligoplysninger
        </LoanFormHeaderTitle>

        <LoanFormHeaderDescription>
          {loadingMessages[loadingMessageIndex]}
        </LoanFormHeaderDescription>
      </LoanFormHeader>
    </>
  )
}

function ErrorState() {
  return (
    <>
      <div className="mb-6 flex justify-center">
        <CircleXIcon className="text-brand-destructive size-12" />
      </div>

      <LoanFormHeader className="text-center">
        <LoanFormHeaderTitle className="justify-center">
          Kunne ikke hente boligdata
        </LoanFormHeaderTitle>

        <LoanFormHeaderDescription>
          Der opstod en fejl. Du kan fortsætte uden de udvidede boligoplysninger.
        </LoanFormHeaderDescription>
      </LoanFormHeader>

      <LoanFormFooter />
    </>
  )
}
