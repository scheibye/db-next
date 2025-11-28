import Image from 'next/image'
import { CheckIcon } from 'lucide-react'
import { BaseLogo } from '@/components/ui/BaseLogo'
import { cn } from '@/lib/utils'

const listItems = [
  'Lån til køb eller i friværdi',
  'Gratis, uforpligtende og nemt',
  'Svar inden for 24 timer',
  'Billigeste boliglån uden om bankerne',
]

export function AboutSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'max-w-container mx-auto grid py-8 md:py-18 lg:grid-cols-[1fr_1.35fr]',
        className
      )}
    >
      <div className="relative grid items-end pt-64 pb-12 lg:h-dvh lg:py-24">
        <Image
          className="object-cover object-top-right"
          src="/sections/about/about-bg.jpg"
          fill
          alt=""
        />

        <div className="text-brand-card 3xl:pl-33.25 relative z-1 grid gap-10 px-5 md:px-20 lg:px-5">
          <div className="text-balance">
            <p className="mb-2 text-2xl font-semibold">Billigeste boliglån uden om bankerne</p>
            <p className="text-base">
              Hos Dansk Boliglån er alt gennemsigtigt - ingen gebyrer, ingen overraskelser.
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

      <div className="text-brand-dark mx-auto grid max-w-210 gap-7 self-center px-5 pt-10 sm:gap-8 md:px-20 lg:p-12 lg:pt-0">
        <div className="text-brand-primary text-lg font-semibold sm:text-2xl">Om os</div>

        <h2 className="text-4xl font-medium text-balance lg:text-6xl">
          Vi er ikke en bank
          <br /> - og det er netop pointen
        </h2>

        <div className="text-base sm:text-2xl/normal">
          <p>
            Hos Dansk Boliglån arbejder vi under ejendomskreditlovgivningen - ikke bankens regler.
            Det giver os frihed til at tænke anderledes, vurdere bredere og handle hurtigere.
          </p>
        </div>

        <div className="text-sm sm:text-lg">
          <p>
            Det betyder også, at vi kan tilbyde et fleksibelt og konkurrencedygtigt alternativ til
            de traditionelle pengeinstitutter. Hvor banken ofte ser på fortiden og følger faste
            skemaer, kigger vi på det hele billede. På din situation, dine muligheder og på, hvordan
            finansieringen faktisk kan fungere i praksis. Vi tror på sund fornuft og skræddersyede
            løsninger frem for standardiserede afslag. Vi er sat i verden for at hjælpe - ikke for
            at afvise.
          </p>
        </div>

        <p className="text-xl font-semibold">
          Vi er sat i verden for at hjælpe - ikke for at afvise.
        </p>
      </div>
    </section>
  )
}
