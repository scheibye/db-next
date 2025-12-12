import { useState } from 'react'
import { GroupIcon, InfoIcon, UserIcon, UsersIcon, UsersRoundIcon } from 'lucide-react'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import { LoanFormHeader, LoanFormHeaderTitle } from '@/components/forms/loan/LoanFormHeader'
import { LoanFormSelectionCard } from '@/components/forms/loan/steps/LoanFormSelectionCard'
import { BaseAlert, BaseAlertDescription } from '@/components/ui/BaseAlert'
import { useLoanFormContext } from '@/contexts/loan-form'
import type { LucideIcon } from 'lucide-react'
import type { NumberOfDebtors } from '@/types/loan-form'

const options: Array<{ label: string; value: NumberOfDebtors; icon: LucideIcon }> = [
  { label: 'Jeg er alene', value: 1, icon: UserIcon },
  { label: 'Vi er to', value: 2, icon: UsersIcon },
  { label: 'Vi er tre', value: 3, icon: UsersRoundIcon },
  { label: 'Vi er fire', value: 4, icon: GroupIcon },
] as const

export function LoanFormDebtorsStep({
  onNextStep,
  onPreviousStep,
}: {
  onNextStep: () => void
  onPreviousStep: () => void
}) {
  const { formData, updateFormData } = useLoanFormContext()

  const [selectedNumberOfDebtors, setSelectedNumberOfDebtors] = useState<string | null>(
    formData.numberOfDebtors?.toString() ?? null
  )

  function handleSelection(value: NumberOfDebtors) {
    setSelectedNumberOfDebtors(String(value))

    updateFormData({
      numberOfDebtors: value,
    })

    onNextStep()
  }

  return (
    <>
      <LoanFormHeader>
        <LoanFormHeaderTitle>Hvor mange skal stå på lånet?</LoanFormHeaderTitle>
      </LoanFormHeader>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <LoanFormSelectionCard
            key={option.value}
            isSelected={selectedNumberOfDebtors === String(option.value)}
            onClick={() => handleSelection(option.value)}
            {...option}
          />
        ))}
      </div>

      <BaseAlert className="mt-6">
        <InfoIcon />
        <BaseAlertDescription>
          <span>
            <strong>Tip:</strong> To ansøgere øger chancen for godkendelse markant.
          </span>
        </BaseAlertDescription>
      </BaseAlert>

      <LoanFormFooter isNextStepDisabled={!selectedNumberOfDebtors} onPrevious={onPreviousStep} />
    </>
  )
}
