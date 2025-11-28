'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HeroCalculatorCard } from '@/components/HeroCalculatorCard'

type Purpose = 'boligkob' | 'frivaerdi'

type HeroProps = {
  title: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
}

export function HeroSection(props: HeroProps) {
  const { title, primaryCtaLabel, primaryCtaHref } = props

  const [purpose, setPurpose] = useState<Purpose>('boligkob')
  const [loanAmount, setLoanAmount] = useState<number>(1_000_000)
  const [secondaryAmount, setSecondaryAmount] = useState<number>(100_000)

  return (
    <section className="bg-brand-dark text-brand-card relative h-[900px] overflow-hidden">
      {/* Billede + gradients i ét lag */}
      <div className="absolute inset-0">
        <Image src="/hero-image.png" alt="Dansk Boliglån" fill priority className="object-cover" />

        {/* Lodret gradient (top -> bund) */}
        <div className="from-brand-dark/45 via-brand-dark/20 to-brand-dark/0 pointer-events-none absolute inset-0 bg-gradient-to-b" />

        {/* Vandret gradient (venstre -> højre) */}
        <div className="from-brand-dark via-brand-dark/45 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent" />
      </div>

      {/* Indhold ovenpå */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1900px] px-[10px]">
          {/* venstre = form, højre = tekst */}
          <div className="grid h-full grid-cols-1 gap-16 lg:grid-cols-[420px,1fr]">
            {/* Venstre: kalkulator, forankret nede */}
            <div className="flex items-end pb-24">
              <div className="w-full max-w-[420px]">
                <HeroCalculatorCard
                  purpose={purpose}
                  onPurposeChange={setPurpose}
                  loanAmount={loanAmount}
                  onLoanAmountChange={setLoanAmount}
                  secondaryAmount={secondaryAmount}
                  onSecondaryAmountChange={setSecondaryAmount}
                  secondaryLabelForBoligkob="Din udbetaling til boligkøb"
                  secondaryLabelForFrivaerdi="Ejendommens værdi (anslået)"
                  onStart={() => {
                    const el = document.getElementById('loan-form')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                />
              </div>
            </div>

            {/* Højre: tekstmodul */}
            <div className="flex flex-col items-start justify-center space-y-4">
              <h1 className="text-5xl leading-tight font-bold">{title}</h1>

              {primaryCtaLabel && primaryCtaHref && (
                <a
                  href={primaryCtaHref}
                  className="bg-brand-primary hover:bg-brand-primary-soft inline-flex items-center rounded-full px-6 py-3 text-base font-medium text-white transition"
                >
                  {primaryCtaLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
