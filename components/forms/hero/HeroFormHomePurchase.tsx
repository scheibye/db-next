'use client'

import { useId, useState } from 'react'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { BaseSlider } from '@/components/ui/BaseSlider'
import { formatPrice } from '@/utils/money'

export function HeroFormHomePurchase() {
  const id = useId()

  const [loanAmount, setLoanAmount] = useState<Array<number>>([1_000_000])
  const [payoutAmount, setPayoutAmount] = useState<Array<number>>([100_000])

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
            min={200_000}
            max={5_000_000}
            step={50_000}
            value={loanAmount}
            onValueChange={setLoanAmount}
          />

          <div className="text-brand-dark/50 flex items-center justify-between text-sm font-medium">
            <span>{formatPrice(200_000)}</span>
            <span>{formatPrice(5_000_000)}</span>
          </div>
        </div>

        <div className="grid gap-0.5">
          <div className="text-brand-dark flex items-center justify-between">
            <label className="text-base font-medium md:text-lg" htmlFor={`${id}-payout-amount`}>
              Din udbetaling til boligkøbet
            </label>
            <span className="text-xl font-bold md:text-2xl">{formatPrice(payoutAmount[0])}</span>
          </div>

          <BaseSlider
            id={`${id}-loan-amount`}
            min={0}
            max={1_250_000}
            step={25_000}
            value={payoutAmount}
            onValueChange={setPayoutAmount}
          />

          <div className="text-brand-dark/50 flex items-center justify-between text-sm font-medium">
            <span>{formatPrice(0)}</span>
            <span>{formatPrice(1_250_000)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center md:mt-8.5">
        <BaseCtaButton className="h-" type="submit">Start låneansøgning</BaseCtaButton>
      </div>
    </form>
  )
}
