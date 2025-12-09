import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { BaseLinkUnderline } from '@/components/ui/BaseLinkUnderline'
import { cn } from '@/lib/utils'

export function CtaVideoSection({ className }: { className?: string }) {
  return (
    <SectionContainer className={cn('h-dvh', className)} noPadding={true}>
      <div className="absolute inset-0">
        <video
          className="pointer-events-none size-full object-cover"
          src="/sections/cta-video/bg-video.mp4"
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
        />
      </div>

      <SectionContainerInner className="z-1 h-full bg-black/30">
        <div className="col-span-4 hidden self-end xl:block">
          <div className="relative py-32">
            {/* Blurred background */}
            <div
              className="bg-brand-card/15 absolute -inset-x-(--container-padding) inset-y-0 -z-1 w-[calc(100%+var(--container-padding)+var(--spacing-gutter))] backdrop-blur-sm"
              role="presentation"
            />

            <p className="text-brand-card mb-12 text-3xl font-semibold text-balance xl:text-4xl">
              Vores rådgivere sidder klar til at hjælpe dig
            </p>
            <BaseCtaButton href="#">Beregn dit boliglån</BaseCtaButton>
          </div>
        </div>

        <div className="text-brand-card grid gap-6 self-end pt-24 pb-12 sm:gap-8 lg:col-span-6 lg:col-start-7 lg:self-center lg:py-0">
          <h2 className="text-4xl leading-tight font-medium text-balance lg:text-5xl 2xl:text-6xl">
            Et enklere alternativ til bankens afslag
          </h2>

          <div className="space-y-6 text-sm *:first:text-base sm:space-y-8 sm:text-lg *:first:sm:text-2xl/normal">
            <p>
              Hos Dansk Boliglån arbejder vi for dem, der falder udenfor bankens faste rammer
              &ndash; men stadig har brug for en fair og gennemskuelig finansiering.
            </p>

            <p>
              Vi tilbyder et simpelt og konkurrencedygtigt alternativ til traditionel
              ejendomsfinansiering, både for private og erhverv. Uden unødvendige benspænd og lange
              processer. Hos os får du direkte kontakt, personlig behandling og en løsning, der
              tager udgangspunkt i din situation &ndash; ikke i en skabelon.
            </p>
          </div>

          <div>
            <BaseLinkUnderline className="border-brand-primary" href="#">
              Læs mere om os
            </BaseLinkUnderline>
          </div>
        </div>
      </SectionContainerInner>
    </SectionContainer>
  )
}
