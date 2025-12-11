'use client'

import { CircleCheckIcon, ClockIcon, FileCheckIcon, ShieldIcon } from 'lucide-react'
import {
  LoanFormHeader,
  LoanFormHeaderDescription,
  LoanFormHeaderTitle,
} from '@/components/forms/loan/LoanFormHeader'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { BaseSeparator } from '@/components/ui/BaseSeparator'

export function LoanFormSuccessStep() {
  return (
    <>
      <div className="mb-6 flex justify-center">
        <CircleCheckIcon className="text-brand-primary size-12" />
      </div>

      <LoanFormHeader className="text-center">
        <LoanFormHeaderTitle className="justify-center">Fuldført! 🎉</LoanFormHeaderTitle>
        <LoanFormHeaderDescription>Du er godt på vej til dit nye hjem</LoanFormHeaderDescription>
      </LoanFormHeader>

      <div className="bg-brand-primary/10 space-y-6 rounded-xl p-8 text-center">
        <div className="text-balance">
          <h3 className="mb-2 text-2xl font-medium">Fortsæt med budget og MitID</h3>

          <p>Færdiggør din ansøgning og få et mere præcist tilbud</p>
        </div>

        <ul className="xs:*:flex-row space-y-4 text-sm text-balance *:flex *:flex-col *:items-center *:justify-center *:gap-2">
          <li>
            <ClockIcon className="text-brand-primary size-4.5 shrink-0" />
            Få svar inden for få timer i stedet for 24 timer
          </li>

          <li>
            <FileCheckIcon className="text-brand-primary size-4.5 shrink-0" />
            Få et mere præcist og personligt lånetilbud
          </li>

          <li>
            <ShieldIcon className="text-brand-primary size-4.5 shrink-0" />
            Sikker login med MitID • Tager kun 3-5 minutter
          </li>
        </ul>

        <BaseCtaButton className="xs:w-auto w-full" href="/">
          Fortsæt <span className="xs:inline hidden">til budget med MitID</span>
        </BaseCtaButton>

        <p className="text-xs leading-relaxed text-balance">
          Åbnes i et nyt vindue så du kan henvise til dine oplysninger
        </p>
      </div>

      <BaseSeparator className="my-8" />

      <div className="[&_a]:text-brand-primary text-center text-balance [&_a]:underline [&_a]:hover:no-underline">
        <p>
          Har du spørgsmål? Kontakt os på <a href="tel:+4535953500">+45&nbsp;3595&nbsp;3500</a>{' '}
          eller <a href="mailto:soren@danskboliglaan.dk">soren@danskboliglaan.dk</a>
        </p>
      </div>
    </>
  )
}
