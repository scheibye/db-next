import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'

export function CtaSmallSection({ className }: { className?: string }) {
  return (
    <div className={className}>
      <SectionContainer className="border-brand-dark border-b-2 py-12 md:py-22" noPadding={true}>
        <SectionContainerInner noColumns={true}>
          <div className="text-center lg:flex lg:items-center lg:justify-between lg:gap-8 lg:text-left">
            <h2 className="mb-12 text-2xl text-balance lg:mb-0 [&_strong]:mb-2 [&_strong]:block [&_strong]:text-3xl [&_strong]:font-semibold [&_strong]:underline [&_strong]:lg:mb-0 [&_strong]:lg:inline [&_strong]:lg:text-3xl">
              <strong>Ansøg nu</strong> – Vi tager personligt hånd om dit boliglån.
            </h2>

            <BaseCtaButton className="xs:w-auto w-full shrink-0" href="/form">
              Beregn dit boliglån
            </BaseCtaButton>
          </div>
        </SectionContainerInner>
      </SectionContainer>
    </div>
  )
}
