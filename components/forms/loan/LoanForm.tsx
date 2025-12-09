'use client'

import { LoanFormChildrenStep } from '@/components/forms/loan/steps/LoanFormChildrenStep'
import { LoanFormCivilStatusStep } from '@/components/forms/loan/steps/LoanFormCivilStatusStep'
import { LoanFormContactStep } from '@/components/forms/loan/steps/LoanFormContactStep'
import { LoanFormDebtorsStep } from '@/components/forms/loan/steps/LoanFormDebtorsStep'
import { LoanFormHousingStep } from '@/components/forms/loan/steps/LoanFormHousingStep'
import { LoanFormIdentityStep } from '@/components/forms/loan/steps/LoanFormIdentityStep'
import { LoanFormPropertyReviewStep } from '@/components/forms/loan/steps/LoanFormPropertyReviewStep'
import { LoanFormSubmissionStep } from '@/components/forms/loan/steps/LoanFormSubmissionStep'
import { LoanFormPropertyStep } from '@/components/forms/loan/steps/property/LoanFormPropertyStep'
import { useLoanFormContext } from '@/contexts/loan-form'
import { cn } from '@/lib/utils'

export function LoanForm({ className }: { className?: string }) {
  const { formData, step } = useLoanFormContext()

  return (
    <div
      className={cn('bg-brand-card rounded-4xl py-12 lg:px-12 lg:py-24 xl:shadow-2xl', className)}
    >
      <div className="xl:mx-auto xl:max-w-200">
        {step === 0 && <LoanFormContactStep />}
        {step === 1 && <LoanFormPropertyStep isOptional={true} />}
        {/* Only show if address was provided */}
        {/* {step === 2 && formData.property?.address && <LoanFormPropertyReviewStep />} */}

        {/* Shared steps */}
        {step === 2 && <LoanFormHousingStep />}
        {step === 3 && <LoanFormCivilStatusStep />}
        {step === 4 && <LoanFormDebtorsStep />}
        {step === 5 && <LoanFormChildrenStep />}
        {step === 6 && <LoanFormIdentityStep />}
        {step === 7 && <LoanFormSubmissionStep />}
      </div>
    </div>
  )
}
