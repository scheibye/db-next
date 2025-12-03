import Image from 'next/image'
import { CheckIcon } from 'lucide-react'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'

const listItems = [
  'Vi tilbyder finansiering, når banken siger nej',
  'Vi arbejder med høj hastighed og personlig kontakt',
  'Vi har gennemsigtige processer uden skjulte gebyrer',
  'Vi dækker hele Danmark – og alle boligtyper',
  'Vi er reguleret af Finanstilsynet',
]

export function CtaImageSection({ className, imageSrc }: { className?: string; imageSrc: string }) {
  return (
    <SectionContainer className={className} noPadding={true}>
      <div className="absolute inset-0">
        <Image className="pointer-events-none size-full object-cover" src={imageSrc} fill alt="" />

        {/* Gradient overlay */}
        <div
          className="after:to-brand-dark before:bg-brand-dark/20 absolute inset-0 z-1 before:absolute before:inset-0 before:z-2 after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:opacity-60"
          role="presentation"
          aria-hidden="true"
        />
      </div>

      <SectionContainerInner className="z-1 lg:min-h-dvh">
        <div className="text-brand-card grid max-w-xl gap-6 self-center py-24 md:col-span-6 md:col-start-2 lg:col-start-7 lg:max-w-none lg:gap-8">
          <div className="text-brand-primary-soft text-xl font-medium lg:text-2xl">
            Hvorfor vælge Dansk Boliglån?
          </div>

          <h2 className="text-3xl leading-tight font-medium text-balance md:text-4xl lg:text-5xl 2xl:text-6xl">
            Et moderne ejendomskreditselskab &ndash; med personlig service
          </h2>

          <ul className="space-y-1 text-base font-medium">
            {listItems.map((item) => (
              <li key={item} className="flex gap-2 text-base">
                <CheckIcon className="text-brand-card size-4 shrink-0 translate-y-1" />
                {item}
              </li>
            ))}
          </ul>

          <div className="text-sm sm:text-lg">
            <p>
              Vi kombinerer teknologi og personlig rådgivning, så du både får hurtige svar og
              kvalificeret sparring &ndash; uanset om du søger lån til boligkøb, omlægning eller
              ønsker at låne i friværdi.
            </p>
          </div>

          <div>
            <BaseCtaButton className="xs:min-w-96 xs:w-auto w-full" href="#" variant="light">
              Start låneansøgning
            </BaseCtaButton>
          </div>
        </div>
      </SectionContainerInner>
    </SectionContainer>
  )
}
