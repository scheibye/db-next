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
          <div className="text-center lg:flex lg:items-center lg:justify-between lg:gap-8">
            <h2 className="mb-12 text-3xl text-balance lg:mb-0 lg:text-left">
              <strong className="font-semibold underline">Ansøg nu</strong>{' '}
              <span className="mt-2 block text-2xl lg:mt-0 lg:inline lg:text-3xl">
                &ndash; Vi tager personligt hånd om dit boliglån.
              </span>
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
