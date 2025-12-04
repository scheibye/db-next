import { LoanForm } from '@/components/forms/loan/LoanForm'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { SimpleHero } from '@/components/sections/heros/SimpleHero'

export default function FormPage() {
  return (
    <>
      <SimpleHero label="Dansk Boliglån" title="Få et gratis tilbud" withTrustpilot={true} />

      {/* Z-index to be above the hero */}
      <SectionContainer className="z-10 xl:pb-50" noPadding={true}>
        <SectionContainerInner>
          <LoanForm className="lg:col-start-2 lg:col-end-12 xl:-mt-32" />
        </SectionContainerInner>
      </SectionContainer>
    </>
  )
}
