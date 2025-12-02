import Image from 'next/image'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import {
  FaqAccordion,
  FaqAccordionContent,
  FaqAccordionItem,
  FaqAccordionTrigger,
} from '@/components/sections/faq/FaqAccordion'
import { cn } from '@/lib/utils'

const faqItems = [
  {
    question: 'Hvad gør Dansk Boliglån unikt?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    question: 'Hvad kan jeg låne til, og hvor meget kan jeg låne?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    question: 'Hvorfor er realkreditlån ofte billigere end vores tilbud?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    question: 'Let at indfri og omlægge',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    question: 'Hvem står bag lånet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    question: 'Hvordan håndterer vi gæld til SKAT eller i RKI?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
]

export function FaqSection({ className }: { className?: string }) {
  return (
    <SectionContainer className={cn('bg-brand-dark text-brand-card', className)} noPadding={true}>
      <SectionContainerInner>
        <div className="order-2 py-4 lg:order-1 lg:col-span-5 lg:py-32 2xl:col-span-4">
          <h2 className="mb-6 text-3xl leading-[1.1] text-balance md:mb-12 md:text-4xl lg:text-5xl">
            Har banken lukket døren? Vi åbner et vindue
          </h2>

          <FaqAccordion type="single" collapsible>
            {faqItems.map((item) => (
              <FaqAccordionItem key={item.question} value={item.question}>
                <FaqAccordionTrigger>{item.question}</FaqAccordionTrigger>
                <FaqAccordionContent>{item.answer}</FaqAccordionContent>
              </FaqAccordionItem>
            ))}
          </FaqAccordion>
        </div>

        <div className="relative order-1 pb-[80%] lg:order-2 lg:col-span-7 lg:pb-0 2xl:col-start-6">
          <Image
            className="-inset-x-(--container-padding)! size-full w-[calc(100%+var(--container-padding)*2)]! max-w-none object-cover lg:left-0! lg:w-[calc(100%+var(--container-padding))]! 2xl:-left-(--spacing-gutter)! 2xl:w-[calc(100%+var(--container-padding)+var(--spacing-gutter))]!"
            src="/sections/faq/faq-bg.jpg"
            fill
            alt=""
            draggable={false}
          />
          <Image
            className="absolute -inset-x-(--container-padding) bottom-0 w-[calc(100%+var(--container-padding)*2)]! max-w-none translate-y-px lg:left-0! lg:w-[calc(100%+var(--container-padding))]! 2xl:-left-(--spacing-gutter)! 2xl:w-[calc(100%+var(--container-padding)+var(--spacing-gutter))]!"
            src="/sections/faq/faq-pattern.svg"
            width={959}
            height={275}
            alt=""
            draggable={false}
          />
        </div>
      </SectionContainerInner>
    </SectionContainer>
  )
}
