'use client'

import { useMemo } from 'react'

type Purpose = 'boligkob' | 'frivaerdi'

type HeroCalculatorCardProps = {
  purpose: Purpose
  onPurposeChange: (p: Purpose) => void

  loanAmount: number
  onLoanAmountChange: (value: number) => void

  secondaryAmount: number
  onSecondaryAmountChange: (value: number) => void

  secondaryLabelForBoligkob?: string // fx "Din udbetaling til boligkøb"
  secondaryLabelForFrivaerdi?: string // fx "Ejendommens værdi (anslået)"

  onStart?: () => void
}

const LOAN_MIN = 200_000
const LOAN_MAX = 5_000_000

const SECONDARY_MIN = 0
const SECONDARY_MAX = 1_250_000

export function HeroCalculatorCard({
  purpose,
  onPurposeChange,
  loanAmount,
  onLoanAmountChange,
  secondaryAmount,
  onSecondaryAmountChange,
  secondaryLabelForBoligkob = 'Din udbetaling til boligkøb',
  secondaryLabelForFrivaerdi = 'Ejendommens værdi (anslået)',
  onStart,
}: HeroCalculatorCardProps) {
  const loanPosition = useMemo(
    () => calculateSliderPosition(loanAmount, LOAN_MIN, LOAN_MAX),
    [loanAmount]
  )

  const secondaryPosition = useMemo(
    () => calculateSliderPosition(secondaryAmount, SECONDARY_MIN, SECONDARY_MAX),
    [secondaryAmount]
  )

  const secondaryLabel =
    purpose === 'boligkob' ? secondaryLabelForBoligkob : secondaryLabelForFrivaerdi

  const secondaryMinLabel = '0 kr.'
  const secondaryMaxLabel = '1.250.000 kr.'

  return (
    <div className="bg-brand-card border-brand-dark/10 w-full max-w-md overflow-hidden rounded-[30px] border shadow-lg">
      {/* Tabs */}
      <div className="grid h-[70px] grid-cols-2 text-sm font-medium md:text-base">
        <button
          type="button"
          onClick={() => onPurposeChange('boligkob')}
          className={`flex items-center justify-center rounded-tl-[30px] transition ${
            purpose === 'boligkob'
              ? 'bg-brand-dark text-brand-card'
              : 'text-brand-dark/60 bg-transparent'
          }`}
        >
          Lån til boligkøb
        </button>

        <button
          type="button"
          onClick={() => onPurposeChange('frivaerdi')}
          className={`flex items-center justify-center rounded-tr-[30px] transition ${
            purpose === 'frivaerdi'
              ? 'bg-brand-spring text-brand-dark'
              : 'text-brand-dark/60 bg-transparent'
          }`}
        >
          Lån i friværdi
        </button>
      </div>

      <div className="space-y-8 px-6 pt-4 pb-6">
        {/* Lånebeløb */}
        <SliderBlock
          label="Lånebeløb"
          value={loanAmount}
          minLabel={`${LOAN_MIN.toLocaleString('da-DK')} kr.`}
          maxLabel={`${LOAN_MAX.toLocaleString('da-DK')} kr.`}
          position={loanPosition}
          onChange={onLoanAmountChange}
          min={LOAN_MIN}
          max={LOAN_MAX}
        />

        {/* Sekundær slider (udbetaling / værdi) */}
        <SliderBlock
          label={secondaryLabel}
          value={secondaryAmount}
          minLabel={secondaryMinLabel}
          maxLabel={secondaryMaxLabel}
          position={secondaryPosition}
          onChange={onSecondaryAmountChange}
          min={SECONDARY_MIN}
          max={SECONDARY_MAX}
        />

        {/* CTA-knap */}
        <button
          type="button"
          onClick={onStart}
          className="mt-4 flex h-[64px] w-full overflow-hidden rounded-full text-sm font-medium text-white shadow-md md:text-base"
        >
          <div className="bg-brand-primary hover:bg-brand-primary-soft flex flex-1 items-center justify-center px-4 transition">
            Start låneansøgning
          </div>
          <div className="bg-brand-dusk w-[18%]" />
        </button>
      </div>
    </div>
  )
}

type SliderBlockProps = {
  label: string
  value: number
  minLabel: string
  maxLabel: string
  position: number
  onChange: (v: number) => void
  min: number
  max: number
}

function SliderBlock({
  label,
  value,
  minLabel,
  maxLabel,
  position,
  onChange,
  min,
  max,
}: SliderBlockProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <label className="text-brand-dark font-medium">{label}</label>
        <div className="text-brand-dark text-lg font-bold">{formatCurrency(value)}</div>
      </div>

      {/* Slider */}
      <div className="relative flex h-8 items-center">
        {/* Track */}
        <div className="bg-brand-primary absolute inset-x-0 top-1/2 h-[4px] -translate-y-1/2 rounded-full" />

        {/* Usynlig native slider (bruges kun til input) */}
        <input
          type="range"
          min={min}
          max={max}
          step={10_000}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="db-slider relative z-10 h-8 w-full cursor-pointer"
        />

        {/* Custom pill-thumb */}
        <div
          className="border-brand-primary bg-brand-card pointer-events-none absolute top-1/2 h-8 w-10 -translate-y-1/2 rounded-[20px] border-[3px]"
          style={{ left: `calc(${position}% - 20px)` }}
        />
      </div>

      <div className="text-brand-dark/60 flex items-center justify-between text-xs">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  )
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('da-DK').format(value) + ' kr.'
}

function calculateSliderPosition(value: number, min: number, max: number) {
  if (value <= min) return 0
  if (value >= max) return 100
  return ((value - min) / (max - min)) * 100
}
