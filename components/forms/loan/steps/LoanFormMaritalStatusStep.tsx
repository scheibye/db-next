import { useState } from 'react'
import { FlowerIcon, HeartIcon, HomeIcon, UserCheckIcon, UserIcon } from 'lucide-react'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import { LoanFormHeader, LoanFormHeaderTitle } from '@/components/forms/loan/LoanFormHeader'
import { LoanFormSelectionCard } from '@/components/forms/loan/steps/LoanFormSelectionCard'
import { useLoanFormContext } from '@/contexts/loan-form'
import type { LucideIcon } from 'lucide-react'
import type { MaritalStatus } from '@/types/loan-form'

const options: Array<{ label: string; value: MaritalStatus; icon: LucideIcon }> = [
  { label: 'Gift', value: 'gift', icon: HeartIcon },
  { label: 'Samlever', value: 'samlever', icon: HomeIcon },
  { label: 'Enlig', value: 'enlig', icon: UserIcon },
  { label: 'Skilt', value: 'skilt', icon: UserCheckIcon },
  { label: 'Enke', value: 'enke', icon: FlowerIcon },
] as const

export function LoanFormMaritalStatusStep({
  onNextStep,
  onPreviousStep,
}: {
  onNextStep: () => void
  onPreviousStep: () => void
}) {
  const { formData, updateFormData } = useLoanFormContext()

  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState<MaritalStatus | null>(
    formData.maritalStatus ?? null
  )

  function handleSelection(value: MaritalStatus) {
    setSelectedMaritalStatus(value)

    updateFormData({
      maritalStatus: value,
    })

    onNextStep()
  }

  return (
    <>
      <LoanFormHeader>
        <LoanFormHeaderTitle>Hvad er din civilstatus?</LoanFormHeaderTitle>
      </LoanFormHeader>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {options.map((option) => (
          <LoanFormSelectionCard
            key={option.value}
            isSelected={selectedMaritalStatus === option.value}
            onClick={() => handleSelection(option.value)}
            {...option}
          />
        ))}
      </div>

      <LoanFormFooter isNextButtonHidden={true} onPrevious={onPreviousStep} />
    </>
  )
}
