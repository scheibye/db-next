'use client'

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

export function LoanForm({ className }: { className?: string }) {
  const { formData, step } = useLoanFormContext()

  return (
    <div
      className={cn('bg-brand-card rounded-4xl py-12 lg:px-12 lg:py-24 xl:shadow-2xl', className)}
    >
      <div className="xl:mx-auto xl:max-w-200">
        {/* EntryPath.Planner only steps */}
        {step === 0 && <LoanFormContactStep />}
        {step === 1 && <LoanFormPropertyStep isOptional={true} />}

        {/* Only show if address was provided */}
        {step === 2 && formData.property?.address && <LoanFormPropertyReviewStep />}

        {/* Shared steps */}
        {step === 3 && <LoanFormHousingStep />}
        {step === 4 && <LoanFormMaritalStatusStep />}
        {step === 5 && <LoanFormDebtorsStep />}
        {step === 6 && <LoanFormChildrenStep />}
        {step === 7 && <LoanFormIdentityStep />}
        {step === 8 && <LoanFormSubmissionStep />}
        {step === 9 && <LoanFormSuccessStep />}
      </div>
    </div>
  )
}
