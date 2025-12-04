'use client'

import { useRouter } from 'next/navigation'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { useLoanFormContext } from '@/contexts/loan-form'
import { cn } from '@/lib/utils'

export function LoanFormFooter({ className }: { className?: string }) {
  const router = useRouter()
  const { step, previousStep } = useLoanFormContext()

  function handleBackClick() {
    if (step === 1) {
      router.back()
    } else {
      previousStep()
    }
  }

  return (
    <div className={cn('mt-12 flex items-center justify-end gap-8 md:mt-16 md:gap-16', className)}>
      <button
        className="cursor-pointer border-b-[5px] pb-1.5 text-base sm:text-xl"
        type="button"
        onClick={handleBackClick}
      >
        Tilbage
      </button>

      <BaseCtaButton className="xs:w-auto xs:min-w-80 w-full" type="submit">
        Fortsæt
      </BaseCtaButton>
    </div>
  )
}
