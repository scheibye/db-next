import Image from 'next/image'
import { CheckIcon } from 'lucide-react'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { BaseLogo } from '@/components/ui/BaseLogo'

const listItems = [
  'Lån til køb eller i friværdi',
  'Gratis, uforpligtende og nemt',
  'Svar inden for 24 timer',
  'Billigeste boliglån uden om bankerne',
]

export function AboutSection({ className }: { className?: string }) {
  return (
    <SectionContainer className={className}>
      <SectionContainerInner>
        <div className="relative grid items-end pt-64 pb-12 lg:col-span-5 lg:min-h-dvh 2xl:py-24">
          <Image
            className="-inset-x-(--container-padding)! w-[calc(100%+var(--container-padding)*2)]! max-w-none object-cover object-top-right xl:right-0! xl:w-[calc(100%+var(--container-padding))]!"
            src="/sections/about/about-bg.jpg"
            fill
            alt=""
          />

          <div className="text-brand-card relative z-1 grid gap-10 sm:pr-8">
            <div className="text-balance">
              <p className="mb-2 text-2xl font-semibold">Billigeste boliglån uden om bankerne</p>
              <p className="text-base">
                Hos Dansk Boliglån er alt gennemsigtigt &ndash; ingen gebyrer, ingen overraskelser.
              </p>
            </div>

            <ul className="space-y-1 text-base font-medium">
              {listItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-base">
                  <CheckIcon className="text-brand-card size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <BaseLogo className="fill-brand-card hidden h-22 w-43.75 lg:block" />
          </div>
        </div>

        <div className="space-y-7 self-center sm:space-y-9 lg:col-span-6 lg:col-start-7">
          <div className="text-brand-primary text-lg font-semibold sm:text-2xl">Om os</div>

          <h2 className="text-4xl font-medium text-balance xl:text-5xl 2xl:text-6xl">
            Vi er ikke en bank
            <br />
            &ndash; og det er netop pointen
          </h2>

          <div className="text-base sm:text-2xl/normal">
            <p>
              Hos Dansk Boliglån arbejder vi under ejendomskreditlovgivningen &ndash; ikke bankens
              regler. Det giver os frihed til at tænke anderledes, vurdere bredere og handle
              hurtigere.
            </p>
          </div>

          <div className="text-sm sm:text-lg">
            <p>
              Det betyder også, at vi kan tilbyde et fleksibelt og konkurrencedygtigt alternativ til
              de traditionelle pengeinstitutter. Hvor banken ofte ser på fortiden og følger faste
              skemaer, kigger vi på det hele billede. På din situation, dine muligheder og på,
              hvordan finansieringen faktisk kan fungere i praksis. Vi tror på sund fornuft og
              skræddersyede løsninger frem for standardiserede afslag. Vi er sat i verden for at
              hjælpe &ndash; ikke for at afvise.
            </p>
          </div>

          <p className="text-xl font-semibold">
            Vi er sat i verden for at hjælpe &ndash; ikke for at afvise.
          </p>
        </div>
      </SectionContainerInner>
    </SectionContainer>
  )
}
