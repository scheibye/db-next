import Image from 'next/image'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'

export function CtaTelSection({ className }: { className?: string }) {
  return (
    <div className={className}>
      <SectionContainer className="bg-brand-primary" noPadding={true}>
        <SectionContainerInner>
          <div className="text-brand-card pt-16 pb-6 font-medium lg:col-span-5 lg:col-start-2 lg:py-24 lg:pr-6">
            <h2 className="mb-8 text-2xl text-balance md:mb-12 md:text-3xl">
              Vores rådgivere sidder klar til at hjælpe dig
            </h2>

            <div className="text-4xl md:text-5xl lg:text-6xl">
              <a
                className="text-brand-card hover:border-brand-card border-b border-transparent transition-colors"
                href="tel:+4542440700"
              >
                +45 4244 0700
              </a>
            </div>
          </div>

          <div className="bg-brand-card -mx-(--container-padding) lg:col-span-6 lg:-ml-(--spacing-gutter) lg:flex lg:items-end">
            <Image
              className="object-cover lg:translate-y-px"
              src="/sections/cta-small-tel/cta-small-tel-pattern.svg"
              width={959}
              height={274}
              alt=""
              draggable={false}
            />
          </div>
        </SectionContainerInner>
      </SectionContainer>
    </div>
  )
}
