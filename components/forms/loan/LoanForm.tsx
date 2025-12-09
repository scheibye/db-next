'use client'

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
import { useLoanFormContext } from '@/contexts/loan-form'
import { cn } from '@/lib/utils'
import { EntryPath } from '@/types/loan-form'

export function LoanForm({ className }: { className?: string }) {
  const router = useRouter()
  const { formData, step, nextStep, previousStep } = useLoanFormContext()

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
      className={cn('bg-brand-card rounded-4xl py-12 lg:px-12 lg:py-24 xl:shadow-2xl', className)}
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
    </div>
  )
}
