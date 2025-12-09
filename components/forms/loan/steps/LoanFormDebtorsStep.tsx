import { useId, useState } from 'react'
import { RadioGroup } from '@base-ui-components/react/radio-group'
import { GroupIcon, InfoIcon, UserIcon, UsersIcon, UsersRoundIcon } from 'lucide-react'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import { LoanFormHeader, LoanFormHeaderTitle } from '@/components/forms/loan/LoanFormHeader'
import { LoanFormSelectionCard } from '@/components/forms/loan/steps/LoanFormSelectionCard'
import { BaseAlert, BaseAlertDescription } from '@/components/ui/BaseAlert'
import { useLoanFormContext } from '@/contexts/loan-form'
import type { LucideIcon } from 'lucide-react'
import type { LoanFormState, NumberOfDebtors } from '@/types/loan-form'

const options: Array<{ label: string; value: NumberOfDebtors; icon: LucideIcon }> = [
  { label: 'Jeg er alene', value: 1, icon: UserIcon },
  { label: 'Vi er to', value: 2, icon: UsersIcon },
  { label: 'Vi er tre', value: 3, icon: UsersRoundIcon },
  { label: 'Vi er fire', value: 4, icon: GroupIcon },
] as const

export function LoanFormDebtorsStep() {
  const id = useId()
  const { formData, nextStep, updateFormData } = useLoanFormContext()

  const [selectedNumberOfDebtors, setSelectedNumberOfDebtors] = useState<string | null>(
    formData.lifeSituation?.numberOfDebtors?.toString() ?? null
  )

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    updateFormData({
      lifeSituation: {
        ...(formData.lifeSituation as LoanFormState['lifeSituation']),
        numberOfDebtors: Number.parseInt(selectedNumberOfDebtors as string) as NumberOfDebtors,
      },
    })

    nextStep()
  }

  return (
    <>
      <LoanFormHeader>
        <LoanFormHeaderTitle id={`${id}-title`}>Hvor mange skal stå på lånet?</LoanFormHeaderTitle>
      </LoanFormHeader>

      <form onSubmit={handleSubmit}>
        <RadioGroup
          className="grid grid-cols-2 gap-4"
          value={selectedNumberOfDebtors}
          onValueChange={(value) => setSelectedNumberOfDebtors(value as string)}
          required={true}
          aria-labelledby={`${id}-title`}
        >
          {options.map((option) => (
            <LoanFormSelectionCard
              key={option.value}
              icon={option.icon}
              label={option.label}
              value={option.value.toString()}
            />
          ))}
        </RadioGroup>

        <BaseAlert className="mt-6">
          <InfoIcon />
          <BaseAlertDescription>
            <span>
              <strong>Tip:</strong> To ansøgere øger chancen for godkendelse markant.
            </span>
          </BaseAlertDescription>
        </BaseAlert>

        <LoanFormFooter isNextStepDisabled={!selectedNumberOfDebtors} />
      </form>
    </>
  )
}
