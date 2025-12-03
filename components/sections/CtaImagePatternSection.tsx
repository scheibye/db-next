import Image from 'next/image'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'

export function CtaImagePatternSection({
  className,
  imageSrc,
}: {
  className?: string
  imageSrc: string
}) {
  return (
    <SectionContainer className={className} noPadding={true}>
      <div className="absolute inset-0">
        <Image className="pointer-events-none size-full object-cover" src={imageSrc} fill alt="" />
      </div>

      <SectionContainerInner className="z-1 lg:min-h-dvh">
        <div className="text-brand-card grid max-w-xl gap-6 self-center py-24 lg:col-span-6 lg:col-start-2 lg:max-w-none">
          <div className="text-brand-primary-soft text-xl font-medium lg:text-2xl">
            Hvad vi gør – og hvordan vi gør det
          </div>

          <h2 className="text-3xl leading-tight font-medium text-balance md:text-4xl lg:text-5xl 2xl:text-6xl">
            Skræddersyede løsninger, når banken siger nej
          </h2>

          <div className="text-base sm:text-2xl/normal">
            <p>
              Vi tilbyder alternative låneløsninger - både med egne midler og i samarbejde med
              erfarne investorer.
            </p>
          </div>

          <div className="text-sm sm:text-lg">
            <p>
              Hos Dansk Boliglån er ingen sager ens. Derfor vurderer vi altid ud fra mennesket og
              mulighederne, ikke blot ud fra skabeloner og tal. Vi lytter. Vi handler. - Og vi gør
              det komplekse simpelt.
            </p>
          </div>

          <div>
            <BaseCtaButton className="xs:min-w-96 xs:w-auto w-full" href="#">
              Kontakt os nu
            </BaseCtaButton>
          </div>
        </div>
      </SectionContainerInner>

      <Image
        className="pointer-events-none absolute right-0 bottom-0 z-1 hidden translate-y-px xl:block"
        src="/shared/pattern-right.svg"
        width={938}
        height={228}
        alt=""
      />
    </SectionContainer>
  )
}
