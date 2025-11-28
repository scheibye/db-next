import Link from 'next/link'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'

export function CtaVideoSection() {
  return (
    <section className="relative h-dvh">
      <video
        className="pointer-events-none size-full object-cover"
        src="/sections/cta-video/bg-video.mp4"
        autoPlay={true}
        muted={true}
        playsInline={true}
        loop={true}
      />

      <div className="absolute inset-0 grid bg-black/30 xl:grid-cols-[1fr_1.7398fr]">
        <div className="bg-brand-card/15 3xl:pl-36 hidden px-5 py-32 backdrop-blur-sm xl:block xl:self-end">
          <p className="text-brand-card mb-12 text-3xl font-semibold text-balance xl:text-4xl">
            Vores rådgivere sidder klar til at hjælpe dig
          </p>
          <BaseCtaButton href="#">Beregn dit boliglån</BaseCtaButton>
        </div>

        <div className="text-brand-card mx-auto grid max-w-200 gap-7 self-end px-5 pt-24 pb-12 sm:gap-8 md:px-20 lg:self-center lg:p-12 lg:pt-0">
          <h2 className="text-4xl/snug font-medium text-balance lg:text-[60px]/[70px]">
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
            <Link
              className="border-brand-primary hover:border-brand-primary-soft hover:text-brand-primary-soft border-b-[5px] pb-1.5 text-base transition-all duration-300 sm:text-xl"
              href="#"
            >
              Læs mere om os
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
