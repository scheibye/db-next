import { useId, useState } from 'react'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import {
  LoanFormHeader,
  LoanFormHeaderDescription,
  LoanFormHeaderTitle,
} from '@/components/forms/loan/LoanFormHeader'
import { BaseInput } from '@/components/ui/BaseInput'
import { useLoanFormContext } from '@/contexts/loan-form'
import type { LoanFormState } from '@/types/loan-form'

const MAX_CHILDREN_COUNT = 10

export function LoanFormChildrenStep() {
  const id = useId()
  const { formData, nextStep, updateFormData } = useLoanFormContext()

  const [childrenCount, setChildrenCount] = useState(
    formData.lifeSituation?.childrenAges?.length ?? 0
  )
  const [childrenAges, setChildrenAges] = useState<Array<number | ''>>(
    formData.lifeSituation?.childrenAges ?? []
  )

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    updateFormData({
      lifeSituation: {
        ...(formData.lifeSituation as LoanFormState['lifeSituation']),
        childrenAges: childrenAges as Array<number>,
      },
    })

    nextStep()
  }

  function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const newAges = [...childrenAges]
    newAges[index] = event.target.value && Number.parseInt(event.target.value)
    setChildrenAges(newAges)
  }

  return (
    <>
      <LoanFormHeader>
        <LoanFormHeaderTitle id={`${id}-title`}>Har du hjemmeboende børn?</LoanFormHeaderTitle>
        <LoanFormHeaderDescription>
          Børn påvirker rådighedsbeløbet &ndash; vi hjælper med beregningen.
        </LoanFormHeaderDescription>
      </LoanFormHeader>

      <form onSubmit={handleSubmit}>
        <ChildrenCounter childrenCount={childrenCount} setChildrenCount={setChildrenCount} />

        {childrenCount > 0 && (
          <div className="mt-10">
            <h3 className="text-brand-dark mb-5 text-xl font-medium">Alder på børnene</h3>
            <div className="grid gap-4">
              {Array.from({ length: childrenCount }).map((_, index) => (
                <BaseInput
                  key={index}
                  type="number"
                  inputMode="numeric"
                  placeholder={`Barn ${index + 1} alder`}
                  value={childrenAges[index] ?? ''}
                  onChange={(event) => handleAgeChange(event, index)}
                />
              ))}
            </div>
          </div>
        )}

        <LoanFormFooter
          isNextStepDisabled={childrenCount > 0 && childrenAges.some((age) => age === '')}
        />
      </form>
    </>
  )
}

function ChildrenCounter({
  childrenCount,
  setChildrenCount,
}: {
  childrenCount: number
  setChildrenCount: (count: number) => void
}) {
  return (
    <div className="flex items-center gap-8">
      <button
        className="hover:bg-brand-primary/10 border-brand-border grid size-16 cursor-pointer place-content-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50"
        disabled={childrenCount === 0}
        type="button"
        onClick={() => setChildrenCount(childrenCount - 1)}
      >
        <MinusIcon className="text-brand-dark size-6" />
      </button>

      <div className="min-w-20 text-center">
        <div className="text-brand-primary text-5xl font-bold">{childrenCount}</div>
        <div className="text-brand-dark/75 mt-1 text-sm">
          {childrenCount === 0 ? 'Ingen børn' : childrenCount === 1 ? 'Barn' : 'Børn'}
        </div>
      </div>

      <button
        className="hover:bg-brand-primary/10 border-brand-border grid size-16 cursor-pointer place-content-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50"
        disabled={childrenCount >= MAX_CHILDREN_COUNT}
        type="button"
        onClick={() => setChildrenCount(childrenCount + 1)}
      >
        <PlusIcon className="text-brand-dark size-6" />
      </button>
    </div>
  )
}
