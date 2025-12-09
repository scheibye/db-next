import { useId, useState } from 'react'
import { RadioGroup } from '@base-ui-components/react/radio-group'
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

export function LoanFormHousingStep() {
  const id = useId()
  const { formData, nextStep, updateFormData } = useLoanFormContext()

  const [selectedHousing, setSelectedHousing] = useState<HousingCondition | null>(
    formData.housingConditions ?? null
  )

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    updateFormData({
      housingConditions: selectedHousing,
    })

    nextStep()
  }

  return (
    <>
      <LoanFormHeader>
        <LoanFormHeaderTitle id={`${id}-title`}>Hvordan bor du i dag?</LoanFormHeaderTitle>
      </LoanFormHeader>

      <form onSubmit={handleSubmit}>
        <RadioGroup
          className="grid grid-cols-2 gap-4"
          value={selectedHousing}
          onValueChange={(value) => setSelectedHousing(value as HousingCondition | null)}
          required={true}
          aria-labelledby={`${id}-title`}
        >
          {options.map((option) => (
            <LoanFormSelectionCard key={option.value} {...option} />
          ))}
        </RadioGroup>

        <LoanFormFooter isNextStepDisabled={!selectedHousing} />
      </form>
    </>
  )
}
