'use client'

import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { cn } from '@/lib/utils'

export function LoanFormFooter({
  className,
  isNextButtonDimmed = false,
  isNextStepDisabled = false,
  previousButtonText = 'Tilbage',
  nextButtonText = 'Fortsæt',
  onNext,
  onPrevious,
}: {
  className?: string
  isNextButtonDimmed?: boolean
  isNextStepDisabled?: boolean
  previousButtonText?: string
  nextButtonText?: string
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
        {previousButtonText}
      </button>

      <BaseCtaButton
        className="xs:w-auto xs:min-w-80 w-full"
        disabled={isNextStepDisabled}
        type={onNext ? 'button' : 'submit'}
        variant={isNextButtonDimmed ? 'ghost' : 'default'}
        onClick={onNext || undefined}
      >
        {nextButtonText}
      </BaseCtaButton>
    </div>
  )
}
