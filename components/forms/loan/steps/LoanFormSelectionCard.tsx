import { Radio } from '@base-ui-components/react/radio'
import { CheckCircle2Icon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface LoanFormSelectionCardProps extends React.ComponentProps<typeof Radio.Root> {
  icon: LucideIcon
  label: string
  isSelected: boolean
  onClick: () => void
}

export function LoanFormSelectionCard({
  icon,
  label,
  value,
  isSelected,
  onClick,
}: LoanFormSelectionCardProps) {
  const Icon = icon

  return (
    <label className="select-none">
      <Radio.Root
        className={cn(
          'border-brand-border relative flex cursor-pointer flex-col items-center gap-3 rounded-xl border p-6 transition-colors sm:p-8',
          'hover:bg-brand-primary/10 active:bg-brand-primary/10',
          isSelected && 'bg-brand-primary/15 border-brand-primary/75'
        )}
        value={value}
        onClick={onClick}
      >
        <Radio.Indicator
          className={cn(
            'pointer-events-none visible absolute top-3 left-3 opacity-100 transition-all',
            !isSelected && 'invisible opacity-0'
          )}
          keepMounted={true}
        >
          <CheckCircle2Icon className="text-brand-primary size-5 sm:size-6" />
        </Radio.Indicator>

        <Icon className="text-brand-dark size-6 stroke-[1.75px] sm:size-7" />
        <span className="text-sm font-medium sm:text-lg">{label}</span>
      </Radio.Root>
    </label>
  )
}
