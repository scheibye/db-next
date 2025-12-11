import { useState } from 'react'
import { Building2Icon, HomeIcon, KeyIcon, UsersIcon } from 'lucide-react'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import { LoanFormHeader, LoanFormHeaderTitle } from '@/components/forms/loan/LoanFormHeader'
import { LoanFormSelectionCard } from '@/components/forms/loan/steps/LoanFormSelectionCard'
import { useLoanFormContext } from '@/contexts/loan-form'
import type { LucideIcon } from 'lucide-react'
import type { HousingCondition } from '@/types/loan-form'

const options: Array<{ label: string; value: HousingCondition; icon: LucideIcon }> = [
  { label: 'Ejerbolig', value: 'ejerbolig', icon: HomeIcon },
  { label: 'Andelsbolig', value: 'andelsbolig', icon: Building2Icon },
  { label: 'Lejebolig', value: 'lejebolig', icon: KeyIcon },
  { label: 'Hjemmeboende', value: 'hjemmeboende', icon: UsersIcon },
] as const

export function LoanFormHousingStep({
  onNextStep,
  onPreviousStep,
}: {
  onNextStep: () => void
  onPreviousStep: () => void
}) {
  const { formData, updateFormData } = useLoanFormContext()

  const [selectedHousing, setSelectedHousing] = useState<HousingCondition | null>(
    formData.housingConditions ?? null
  )

  function handleSelection(value: HousingCondition) {
    setSelectedHousing(value)

    updateFormData({
      housingConditions: value,
    })

    onNextStep()
  }

  return (
    <>
      <LoanFormHeader>
        <LoanFormHeaderTitle>Hvordan bor du i dag?</LoanFormHeaderTitle>
      </LoanFormHeader>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <LoanFormSelectionCard
            key={option.value}
            isSelected={selectedHousing === option.value}
            onClick={() => handleSelection(option.value)}
            {...option}
          />
        ))}
      </div>

      <LoanFormFooter isNextButtonHidden={true} onPrevious={onPreviousStep} />
    </>
  )
}
