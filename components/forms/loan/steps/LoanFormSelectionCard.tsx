import { Radio } from '@base-ui-components/react/radio'
import { CheckCircle2Icon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface LoanFormSelectionCardProps {
  value: string
  label: string
  icon: LucideIcon
}

export function LoanFormSelectionCard({ icon, label, value }: LoanFormSelectionCardProps) {
  const Icon = icon

  return (
    <label className="select-none">
      <Radio.Root
        className="data-checked:bg-brand-primary/15 hover:bg-brand-primary/10 data-checked:border-brand-primary/75 border-brand-border relative flex cursor-pointer flex-col items-center gap-3 rounded-xl border p-8 transition-colors"
        value={value}
      >
        <Radio.Indicator className="pointer-events-none visible absolute top-3 left-3 opacity-100 transition-all data-unchecked:invisible data-unchecked:opacity-0">
          <CheckCircle2Icon className="text-brand-primary size-6" />
        </Radio.Indicator>

        <Icon className="text-brand-dark size-7 stroke-[1.75px]" />
        <span className="text-lg font-medium">{label}</span>
      </Radio.Root>
    </label>
  )
}
