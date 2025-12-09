import { useId, useState } from 'react'
import { RadioGroup } from '@base-ui-components/react/radio-group'
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
  const id = useId()
  const { formData, updateFormData } = useLoanFormContext()

  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState<MaritalStatus | null>(
    formData.maritalStatus ?? null
  )

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    updateFormData({
      maritalStatus: selectedMaritalStatus,
    })

    onNextStep()
  }

  return (
    <>
      <LoanFormHeader>
        <LoanFormHeaderTitle id={`${id}-title`}>Hvad er din civilstatus?</LoanFormHeaderTitle>
      </LoanFormHeader>

      <form onSubmit={handleSubmit}>
        <RadioGroup
          className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          value={selectedMaritalStatus}
          onValueChange={(value) => setSelectedMaritalStatus(value as MaritalStatus | null)}
          required={true}
          aria-labelledby={`${id}-title`}
        >
          {options.map((option) => (
            <LoanFormSelectionCard key={option.value} {...option} />
          ))}
        </RadioGroup>

        <LoanFormFooter isNextStepDisabled={!selectedMaritalStatus} onPrevious={onPreviousStep} />
      </form>
    </>
  )
}
