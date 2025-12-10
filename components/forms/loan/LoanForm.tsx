'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
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
        'bg-brand-card rounded-4xl py-12 lg:px-12 lg:pt-20 lg:pb-18 xl:shadow-2xl',
        className
      )}
    >
      <div className="xl:mx-auto xl:max-w-200">
        {step === 0 && (
          <LoanFormContactStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
        )}

        {step === 1 && (
          <LoanFormPropertyStep
            isOptional={true}
            onNextStep={handlePropertyNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}

        {step === 2 && (
          <LoanFormPropertyReviewStep
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}

        {/* Shared steps */}
        {step === 3 && (
          <LoanFormHousingStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
        )}

        {step === 4 && (
          <LoanFormMaritalStatusStep
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}

        {step === 5 && (
          <LoanFormDebtorsStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
        )}

        {step === 6 && (
          <LoanFormChildrenStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
        )}

        {step === 7 && (
          <LoanFormIdentityStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
        )}

        {step === 8 && (
          <LoanFormSubmissionStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
        )}

        {step === 9 && <LoanFormSuccessStep />}
      </div>

      {/* Trustpilot widget */}
      <div className="xl:hidden">
        <BaseSeparator className="my-12" />

        <div className="flex justify-center">
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
