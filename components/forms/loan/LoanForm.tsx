'use client'

import { LoanFormContactStep } from '@/components/forms/loan/steps/LoanFormContactStep'
import { useLoanFormContext } from '@/contexts/loan-form'
import { cn } from '@/lib/utils'

export function LoanForm({ className }: { className?: string }) {
  const { step } = useLoanFormContext()

  return (
    <div
      className={cn('bg-brand-card rounded-4xl py-12 lg:px-12 lg:py-24 xl:shadow-2xl', className)}
    >
      <div className="xl:mx-auto xl:max-w-200">
        {step === 1 && <LoanFormContactStep />}
        {step === 2 && <div>Step 2</div>}
        {step === 3 && <div>Step 3</div>}
      </div>
    </div>
  )
}
