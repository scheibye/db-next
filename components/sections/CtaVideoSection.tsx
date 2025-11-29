import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { BaseLinkUnderline } from '@/components/ui/BaseLinkUnderline'
import { cn } from '@/lib/utils'

export function CtaVideoSection({ className }: { className?: string }) {
  return (
    <SectionContainer className={cn('h-dvh py-0!', className)}>
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

      <SectionContainerInner className="z-1 h-full bg-black/30" withImage="left">
        <div className="col-span-4 hidden self-end xl:block">
          <div className="relative py-32">
            {/* Blurred background */}
            <div
              className="bg-brand-card/15 absolute inset-0 -z-1 backdrop-blur-sm"
              data-slot="bg-image"
              role="presentation"
            />

            <p className="text-brand-card mb-12 text-3xl font-semibold text-balance xl:text-4xl">
              Vores rådgivere sidder klar til at hjælpe dig
            </p>
            <BaseCtaButton href="#">Beregn dit boliglån</BaseCtaButton>
          </div>
        </div>

        <div className="text-brand-card grid gap-6 self-end pt-24 pb-12 sm:gap-8 lg:col-span-6 lg:col-start-7 lg:self-center lg:py-0">
          <h2 className="text-4xl/snug font-medium text-balance lg:text-6xl">
            Et enklere alternativ til bankens afslag
          </h2>

          <div className="text-base sm:text-2xl/normal">
            <p>
              Hos Dansk Boliglån arbejder vi for dem, der falder udenfor bankens faste rammer - men
              stadig har brug for en fair og gennemskuelig finansiering.
            </p>
          </div>

          <div className="text-sm sm:text-lg">
            <p>
              Vi tilbyder et simpelt og konkurrencedygtigt alternativ til traditionel
              ejendomsfinansiering, både for private og erhverv. Uden unødvendige benspænd og lange
              processer. Hos os får du direkte kontakt, personlig behandling og en løsning, der
              tager udgangspunkt i din situation - ikke i en skabelon.
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
