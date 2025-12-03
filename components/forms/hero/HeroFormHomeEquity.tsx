'use client'

import { useId, useState } from 'react'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { BaseSlider } from '@/components/ui/BaseSlider'
import { formatPrice } from '@/utils/money'

export function HeroFormHomeEquity() {
  const id = useId()

  const [loanAmount, setLoanAmount] = useState<Array<number>>([500_000])
  const [freeValue, setFreeValue] = useState<Array<number>>([1_000_000])

  return (
    <form>
      <div className="space-y-6 md:space-y-12">
        <div className="grid gap-0.5">
          <div className="text-brand-dark flex items-center justify-between">
            <label className="text-base font-medium md:text-lg" htmlFor={`${id}-loan-amount`}>
              Lånebeløb
            </label>
            <span className="text-xl font-bold md:text-2xl">{formatPrice(loanAmount[0])}</span>
          </div>

          <BaseSlider
            id={`${id}-loan-amount`}
            min={100_000}
            max={5_000_000}
            step={50_000}
            value={loanAmount}
            onValueChange={setLoanAmount}
          />

          <div className="text-brand-dark/50 flex items-center justify-between text-sm font-medium">
            <span>{formatPrice(100_000)}</span>
            <span>{formatPrice(5_000_000)}</span>
          </div>
        </div>

        <div className="grid gap-0.5">
          <div className="text-brand-dark flex items-center justify-between">
            <label className="text-base font-medium md:text-lg" htmlFor={`${id}-free-value`}>
              Friværdi i boligen
            </label>
            <span className="text-xl font-bold md:text-2xl">{formatPrice(freeValue[0])}</span>
          </div>

          <BaseSlider
            id={`${id}-free-value`}
            min={200_000}
            max={5_000_000}
            step={50_000}
            value={freeValue}
            onValueChange={setFreeValue}
          />

          <div className="text-brand-dark/50 flex items-center justify-between text-sm font-medium">
            <span>{formatPrice(200_000)}</span>
            <span>{formatPrice(5_000_000)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center md:mt-8.5">
        <BaseCtaButton type="submit">Start låneansøgning</BaseCtaButton>
      </div>
    </form>
  )
}
