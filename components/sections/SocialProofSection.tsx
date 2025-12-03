import Image from 'next/image'
import { IconCustomQuote } from '@/components/icons/IconCustomQuote'
import { IconCustomTrustpilotStar } from '@/components/icons/IconCustomTrustpilotStar'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'
import { cn } from '@/lib/utils'

export function SocialProofSection({
  className,
  withUnderline,
}: {
  className?: string
  withUnderline?: boolean
}) {
  return (
    <SectionContainer className={className}>
      <SectionContainerInner className={cn('lg:min-h-175', withUnderline && 'pb-12 lg:pb-0')}>
        {withUnderline && (
          <div
            className="absolute inset-x-0 bottom-0 px-(--container-padding)"
            role="presentation"
            aria-hidden="true"
          >
            <div className="bg-brand-dark/50 h-[1.5px]" />
          </div>
        )}

        <div className="order-2 space-y-6 self-center lg:order-1 lg:col-span-5 lg:py-12 xl:space-y-10">
          {/* Trustpilot rating */}
          <div className="text-brand-card xs:gap-5 xs:text-sm relative z-1 -mt-20 mb-16 flex items-center gap-3 text-xs font-bold sm:-mt-24 sm:mb-20 sm:text-lg lg:mt-0 lg:mb-6 lg:flex-wrap lg:text-black xl:mb-10 xl:flex-nowrap xl:whitespace-nowrap">
            <div className="xs:gap-5 flex gap-3">
              <span className="xs:inline hidden">Excellent</span>
              <span className="inline-flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className="bg-trustpilot grid size-5 place-content-center md:size-7.5"
                  >
                    <IconCustomTrustpilotStar className="size-4 shrink-0 fill-white md:size-5.25" />
                  </span>
                ))}
              </span>
            </div>

            <div className="xs:gap-5 flex gap-3">
              <span className="xxs:inline hidden">
                436 <span className="font-[450]">reviews on</span>
              </span>

              <span className="inline-flex items-center gap-2">
                <IconCustomTrustpilotStar className="fill-trustpilot size-4 shrink-0 md:size-5.25" />
                Trustpilot
              </span>
            </div>
          </div>

          <IconCustomQuote className="fill-brand-primary size-8 lg:size-14" />

          <h2 className="text-brand-primary text-5xl text-balance italic xl:text-6xl 2xl:text-6xl">
            Hjælper når alle andre siger nej!
          </h2>

          <div className="italic sm:text-xl">
            <p>
              Utrolig kompetente mennesker hos Dansk Boliglån. Brian og Marrica hjalp med indfrielse
              af gammel gæld &ndash; herunder skattegæld, så vores økonomi igen er kommet på rette
              spor. Vi er meget taknemmelige for deres hjælp og helt igennem profesionelle måde, at
              gøre tingene på.
            </p>
          </div>

          <BaseCtaButton className="xs:min-w-96 xs:w-auto mt-2 w-full" href="/kontakt-os">
            Kontakt os nu
          </BaseCtaButton>
        </div>

        <div className="relative order-1 pb-[80%] lg:order-2 lg:col-span-6 lg:col-start-7 lg:pb-0">
          <Image
            className="-inset-x-(--container-padding)! w-[calc(100%+var(--container-padding)*2)]! max-w-none object-cover object-center xl:left-0! xl:w-[calc(100%+var(--container-padding))]!"
            src="/sections/social-proof/social-proof-bg.jpg"
            fill
            alt=""
          />
        </div>
      </SectionContainerInner>
    </SectionContainer>
  )
}
