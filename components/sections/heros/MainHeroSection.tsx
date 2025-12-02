import Image from 'next/image'
import { HeroForm } from '@/components/forms/hero/HeroForm'
import { IconCustomArrowRight } from '@/components/icons/IconCustomArrowRight'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'

export function MainHeroSection() {
  return (
    <div className="-mt-(--spacing-global-padding) lg:mt-0 lg:mb-8 lg:grid lg:h-[calc(100dvh-var(--spacing-global-padding)*2)] lg:min-h-200 lg:grid-rows-[1fr_auto]">
      <SectionContainer className="lg:w-full" noPadding={true}>
        <SectionContainerInner className="lg:gap-gutter! gap-0! lg:h-full">
          <HeroForm className="relative z-1 -mt-14 md:-mt-17 lg:static lg:col-span-5 lg:mt-0 lg:self-end xl:col-span-4 xl:col-start-2" />

          <div className="relative -order-1 pb-[80%] md:pb-[50%] lg:static lg:order-2 lg:col-span-7 lg:col-start-7 lg:self-end lg:pb-12 2xl:col-span-5 2xl:col-start-7">
            <Image
              className="-inset-x-[calc(var(--container-padding)+var(--spacing-global-padding))]! -z-1 w-[calc(100%+var(--container-padding)*2+var(--spacing-global-padding)*2)]! max-w-none object-cover lg:inset-x-0! lg:size-full!"
              src="/sections/hero/main-hero-bg.jpg"
              preload={true}
              fill
              alt=""
            />

            <h1 className="text-brand-card xs:text-5xl absolute bottom-[35%] text-4xl leading-tight font-medium md:text-6xl lg:static lg:mb-6 2xl:text-8xl">
              Uden bøvl
              <br />
              &ndash; og uden banken
            </h1>

            {/* Trustpilot widget */}
            <div className="hidden xl:block">
              <div
                className="trustpilot-widget"
                data-locale="da-DK"
                data-template-id="53aa8807dec7e10d38f59f32"
                data-businessunit-id="5ed6a20389c572000158ee34"
                data-token="1a6834da-1b77-4f9f-98e8-bac56ad3f87e"
                data-style-width="255px"
                data-style-height="120px"
                data-theme="dark"
              />
            </div>
          </div>
        </SectionContainerInner>
      </SectionContainer>

      <SectionContainer className="w-full" noPadding={true}>
        <SectionContainerInner noColumns={true}>
          <div className="border-brand-dark bg-brand-spring -mx-[calc(var(--container-padding)+var(--spacing-global-padding))] w-[calc(100%+var(--container-padding)*2+var(--spacing-global-padding)*2)] border-t-2 py-4 text-center md:-mx-(--container-padding) md:grid md:w-[calc(100%+var(--container-padding)*2)] md:grid-cols-12 md:py-2.5">
            <div className="text-[0.9375rem] md:col-span-10 md:col-start-2 md:flex md:items-center md:justify-between lg:text-xl">
              <p className="mb-4 md:mb-0">
                <strong className="font-medium">Gratis, uforpligtende og nemt</strong>
                <br className="md:hidden" /> &ndash; Ring nu på{' '}
                <a className="text-brand-dark underline hover:no-underline" href="tel:+4542440700">
                  42&nbsp;44&nbsp;07&nbsp;00
                </a>
              </p>

              <div>
                <button
                  className="group text-brand-dark inline-flex cursor-pointer items-center gap-2 font-medium lg:gap-5"
                  type="button"
                >
                  <span className="underline group-hover:no-underline">Ring mig op</span>
                  <IconCustomArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1 lg:size-6" />
                </button>
              </div>
            </div>
          </div>
        </SectionContainerInner>
      </SectionContainer>
    </div>
  )
}
