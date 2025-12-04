import { BaseSlider } from '@/components/ui/BaseSlider'
import { formatPrice } from '@/utils/money'

export function HeroFormSlider({
  id,
  label,
  value,
  onValueChange,
  min,
  max,
  step,
}: {
  id: string
  label: string
  min: number
  max: number
  step: number
  value: Array<number>
} & React.ComponentProps<typeof BaseSlider>) {
  return (
    <div className="grid gap-0.5">
      <div className="text-brand-dark flex items-center justify-between">
        <label className="text-base font-medium md:text-lg" htmlFor={id}>
          {label}
        </label>

        <span className="text-xl font-bold md:text-2xl">{formatPrice(value[0])}</span>
      </div>

      <BaseSlider
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={onValueChange}
      />

      <div className="text-brand-dark/50 flex items-center justify-between text-sm font-medium">
        <span>{formatPrice(min)}</span>
        <span>{formatPrice(max)}</span>
      </div>
    </div>
  )
}
