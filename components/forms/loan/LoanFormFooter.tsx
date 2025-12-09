'use client'

import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { cn } from '@/lib/utils'

export function LoanFormFooter({
  className,
  isOptional = false,
  isNextStepDisabled = false,
  onNext,
  onPrevious,
}: {
  className?: string
  isOptional?: boolean
  isNextStepDisabled?: boolean
  onNext?: () => void
  onPrevious?: () => void
}) {
  return (
    <div className={cn('mt-12 flex items-center justify-end gap-8 md:mt-16 md:gap-16', className)}>
      <button
        className="cursor-pointer border-b-[5px] pb-1.5 text-base sm:text-xl"
        type="button"
        onClick={onPrevious}
      >
        Tilbage
      </button>

      <BaseCtaButton
        className="xs:w-auto xs:min-w-80 w-full"
        disabled={isNextStepDisabled}
        type={onNext ? 'button' : 'submit'}
        onClick={onNext || undefined}
      >
        {isOptional ? 'Spring over' : 'Fortsæt'}
      </BaseCtaButton>
    </div>
  )
}
