'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { LoanFormProgress } from '@/components/forms/loan/LoanFormProgress'
import { LoanFormChildrenStep } from '@/components/forms/loan/steps/LoanFormChildrenStep'
import { LoanFormContactStep } from '@/components/forms/loan/steps/LoanFormContactStep'
import { LoanFormDebtorsStep } from '@/components/forms/loan/steps/LoanFormDebtorsStep'
import { LoanFormHousingStep } from '@/components/forms/loan/steps/LoanFormHousingStep'
import { LoanFormIdentityStep } from '@/components/forms/loan/steps/LoanFormIdentityStep'
import { LoanFormMaritalStatusStep } from '@/components/forms/loan/steps/LoanFormMaritalStatusStep'
import { LoanFormPropertyReviewStep } from '@/components/forms/loan/steps/LoanFormPropertyReviewStep'
import { LoanFormSubmissionStep } from '@/components/forms/loan/steps/LoanFormSubmissionStep'
import { LoanFormSuccessStep } from '@/components/forms/loan/steps/LoanFormSuccessStep'
import { LoanFormPropertyStep } from '@/components/forms/loan/steps/property/LoanFormPropertyStep'
import { BaseSeparator } from '@/components/ui/BaseSeparator'
import { useLoanFormContext } from '@/contexts/loan-form'
import { cn } from '@/lib/utils'
import { EntryPath } from '@/types/loan-form'

const TOTAL_STEPS = 9

export function LoanForm({ className }: { className?: string }) {
  const formRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const { formData, step, nextStep, previousStep } = useLoanFormContext()

  // Scroll to top of form when step changes
  useEffect(() => {
    // Don't scroll on initial load
    if (step === 0) {
      return
    }

    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [step])

  function handleNextStep() {
    nextStep()
  }

  function handlePropertyNextStep(address: string) {
    if (!address) {
      // Skip property review step if address is not provided
      nextStep(3)
    } else {
      handleNextStep()
    }
  }

  function handlePreviousStep() {
    if (formData.entryPath === EntryPath.Planner) {
      // Skip property review step if address is not provided
      if (step === 3 && !formData.property?.address) {
        previousStep(1)
        return
      }

      if (step === 0) {
        router.back()
        return
      }

      previousStep()
    }
  }

  return (
    <div
      ref={formRef}
      className={cn(
        'bg-brand-card relative xl:overflow-hidden xl:rounded-3xl xl:shadow-2xl',
        className
      )}
    >
      {step <= TOTAL_STEPS && (
        <LoanFormProgress
          currentStep={step}
          totalSteps={TOTAL_STEPS}
          address={formData.property?.address ?? null}
          loanAmount={formData.base?.loanAmount ?? null}
          downPayment={formData.base?.payout ?? null}
          currentListingPrice={formData.aiPricing?.currentListingPrice ?? null}
          pricePerSqm={formData.aiPricing?.pricePerSqm ?? null}
        />
      )}

      <div className="pt-8 lg:px-12 lg:pt-12 lg:pb-18">
        <div className="xl:mx-auto xl:max-w-200">
          {step === 1 && (
            <LoanFormContactStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
          )}

          {step === 2 && (
            <LoanFormPropertyStep
              isOptional={true}
              onNextStep={handlePropertyNextStep}
              onPreviousStep={handlePreviousStep}
            />
          )}

          {step === 3 && (
            <LoanFormPropertyReviewStep
              onNextStep={handleNextStep}
              onPreviousStep={handlePreviousStep}
            />
          )}

          {/* Shared steps */}
          {step === 4 && (
            <LoanFormHousingStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
          )}

          {step === 5 && (
            <LoanFormMaritalStatusStep
              onNextStep={handleNextStep}
              onPreviousStep={handlePreviousStep}
            />
          )}

          {step === 6 && (
            <LoanFormDebtorsStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
          )}

          {step === 7 && (
            <LoanFormChildrenStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
          )}

          {step === 8 && (
            <LoanFormIdentityStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
          )}

          {step === 9 && (
            <LoanFormSubmissionStep
              onNextStep={handleNextStep}
              onPreviousStep={handlePreviousStep}
            />
          )}

          {/* Success step */}
          {step === TOTAL_STEPS + 1 && <LoanFormSuccessStep />}
        </div>
      </div>

      {/* Trustpilot widget */}
      <div className="mt-12 xl:hidden">
        <BaseSeparator />

        <div className="my-8 flex justify-center">
          <div
            className="trustpilot-widget"
            data-locale="da-DK"
            data-template-id="53aa8807dec7e10d38f59f32"
            data-businessunit-id="5ed6a20389c572000158ee34"
            data-token="1a6834da-1b77-4f9f-98e8-bac56ad3f87e"
            data-style-width="255px"
            data-style-height="120px"
          />
        </div>
      </div>
    </div>
  )
}
