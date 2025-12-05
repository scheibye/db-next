import { useId, useState } from 'react'
import { RadioGroup } from '@base-ui-components/react/radio-group'
import { FlowerIcon, HeartIcon, HomeIcon, UserCheckIcon, UserIcon } from 'lucide-react'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import { LoanFormHeader, LoanFormHeaderTitle } from '@/components/forms/loan/LoanFormHeader'
import { LoanFormSelectionCard } from '@/components/forms/loan/steps/LoanFormSelectionCard'
import { useLoanFormContext } from '@/contexts/loan-form'
import type { LucideIcon } from 'lucide-react'
import type { CivilStatus, LoanFormState } from '@/types/loan-form'

const options: Array<{ label: string; value: CivilStatus; icon: LucideIcon }> = [
  { label: 'Gift', value: 'gift', icon: HeartIcon },
  { label: 'Samlever', value: 'samlever', icon: HomeIcon },
  { label: 'Enlig', value: 'enlig', icon: UserIcon },
  { label: 'Skilt', value: 'skilt', icon: UserCheckIcon },
  { label: 'Enke', value: 'enke', icon: FlowerIcon },
] as const

export function LoanFormCivilStatusStep() {
  const id = useId()
  const { formData, nextStep, updateFormData } = useLoanFormContext()

  const [selectedCivilStatus, setSelectedCivilStatus] = useState<CivilStatus | null>(
    formData.lifeSituation?.civilStatus ?? null
  )

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    updateFormData({
      lifeSituation: {
        ...(formData.lifeSituation as LoanFormState['lifeSituation']),
        civilStatus: selectedCivilStatus as CivilStatus,
      },
    })

    nextStep()
  }

  return (
    <>
      <LoanFormHeader>
        <LoanFormHeaderTitle id={`${id}-title`}>Hvad er din civilstatus?</LoanFormHeaderTitle>
      </LoanFormHeader>

      <form onSubmit={handleSubmit}>
        <RadioGroup
          className="grid grid-cols-3 gap-4"
          value={selectedCivilStatus}
          onValueChange={(value) => setSelectedCivilStatus(value as CivilStatus | null)}
          required={true}
          aria-labelledby={`${id}-title`}
        >
          {options.map((option) => (
            <LoanFormSelectionCard key={option.value} {...option} />
          ))}
        </RadioGroup>

        <LoanFormFooter isNextStepDisabled={!selectedCivilStatus} />
      </form>
    </>
  )
}
