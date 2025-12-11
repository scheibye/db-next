import { LoanForm } from '@/components/forms/loan/LoanForm'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { SimpleHero } from '@/components/sections/heros/SimpleHero'

export default function FormPage() {
  return (
    <>
      <SimpleHero
        className="hidden xl:block xl:h-120 2xl:h-144"
        label="Dansk Boliglån"
        title="Få et gratis tilbud"
        withTrustpilot={true}
      />

      {/* Z-index is to be above the hero */}
      <SectionContainer className="z-10 xl:pb-24" noPadding={true}>
        <SectionContainerInner>
          <LoanForm className="lg:col-span-12 xl:col-start-2 xl:col-end-12 xl:-mt-32" />
        </SectionContainerInner>
      </SectionContainer>
    </>
  )
}
