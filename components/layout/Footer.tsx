import Image from 'next/image'
import Link from 'next/link'
import { MailIcon, PhoneIcon } from 'lucide-react'
import {
  SectionContainer,
  SectionContainerInner,
} from '@/components/layout/containers/SectionContainer'
import { BaseCtaButton } from '@/components/ui/BaseCtaButton'

const aboutLinks = [
  { label: 'Om Os', href: '/om-os' },
  { label: 'Ofte stillede spørgsmål', href: '/faq' },
  { label: 'Kontakt os', href: '/kontakt-os' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/danskboliglaan', isExternal: true },
  { label: 'Facebook', href: 'https://www.facebook.com/danskboliglaan', isExternal: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/danskboliglaan',
    isExternal: true,
  },
]

const otherLinks = [
  { label: 'Andelsboliglån', href: '/andelsboliglaan' },
  { label: 'Banklån', href: '/banklaan' },
  { label: 'Bedste lån', href: '/bedste-laan' },
  { label: 'Boliglån med statsgaranti', href: '/boliglaan-med-statsgaranti' },
  { label: 'Boliglån uden om banken', href: '/boliglaan-udenom-banken' },
  { label: 'Ejendomsvurdering', href: '/ejendomsvurdering' },
  { label: 'Ejerskifteforsikring', href: '/ejerpantebrev' },
  { label: 'Erhverv', href: '/erhverv' },

  { label: 'Gældsfaktor', href: '/gaeldsfaktor' },
  { label: 'Huslån', href: '/huslaan' },
  { label: 'Håndværkertilbud', href: '/haandvaerkertilbud' },
  { label: 'Ordbog', href: '/ordbog' },
  { label: 'Lån i friværdi', href: '/laan-i-frivaerdi' },
  { label: 'Lån uden om banken', href: '/laan-uden-om-banken' },
  { label: 'Mellemfinansiering', href: '/mellemfinansiering' },
  { label: 'Nedsparingslån', href: '/nedsparingslaan' },

  { label: 'Omlægning af skattegæld', href: '/omlaegning-af-skattegaeld' },
  { label: 'Pantebrevslån', href: '/pantebrevslaan' },
  { label: 'Rådighedsbeløb', href: '/raadighedsbeloeb' },
  { label: 'Sommerhuslån', href: '/sommerhuslaan' },
  { label: 'Tillægslån', href: '/tillaegslaan' },
  { label: 'Tinglysning', href: '/tinglysning' },
  { label: 'Tvangsauktion', href: '/tvangsauktion' },
]

const legalLinks = [
  { label: 'Vilkår og ansvar', href: '/vilkaar-og-ansvar' },
  { label: 'Persondatapolitik', href: '/persondatapolitik' },
  { label: 'Cookiepolitik', href: '/cookiepolitik' },
]

export function Footer() {
  return (
    <SectionContainer noPadding={true} asChild>
      <footer>
        <SectionContainerInner className="bg-brand-dark lg:gap-gutter! gap-0!">
          {/* Light section */}
          <div className="relative pt-12 lg:col-span-4 lg:pt-30">
            <div
              className="bg-brand-card absolute -inset-x-(--container-padding) inset-y-0 w-[calc(100%+var(--container-padding)*2)] lg:right-0 lg:w-[calc(100%+var(--container-padding)+var(--spacing-gutter))]"
              role="presentation"
            />

            <div className="relative z-2">
              {/* Title */}
              <div className="mb-6 text-xl/normal font-medium text-balance lg:mb-24 lg:text-2xl/normal xl:text-3xl">
                Dansk Boliglån er Reguleret af Finanstilsynet autorisation 42007
              </div>

              {/* Info */}
              <div className="mb-6">
                <div className="mb-6 text-lg font-bold">Info</div>

                <address className="not-italic">
                  <p className="mb-2 text-lg font-medium">
                    Dansk Boliglån Ejendomskreditselskab&nbsp;ApS
                  </p>
                  <p className="text-base">Hellerupgårdvej 18, 2900 Hellerup</p>
                </address>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <div className="mb-6 text-lg font-bold">Kontakt os</div>

                <ul className="space-y-6">
                  <li className="text-xl">
                    <a
                      className="group text-brand-dark inline-flex items-center gap-2"
                      href="mail@simpelkredit.dk"
                    >
                      <MailIcon className="size-5 shrink-0" />
                      <span className="border-b-[1.5px] border-current transition-all group-hover:border-transparent">
                        Send os en e-mail
                      </span>
                    </a>
                  </li>

                  <li className="text-xl">
                    <a
                      className="group text-brand-dark inline-flex items-center gap-2"
                      href="tel:+4542440700"
                    >
                      <PhoneIcon className="size-5 shrink-0" />
                      <span className="border-b-[1.5px] border-current transition-all group-hover:border-transparent">
                        +45 4244 0700
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Logo and pattern */}
            <div className="-mx-(--container-padding) lg:absolute lg:-right-(--spacing-gutter) lg:bottom-0 lg:-left-(--container-padding) lg:mx-0 lg:w-[calc(100%+var(--container-padding)+var(--spacing-gutter))]">
              <Image
                className="size-full translate-y-px object-cover lg:translate-y-0"
                src="/layout/footer-pattern.svg"
                width={688}
                height={256}
                alt="Dansk Boliglån logo"
                draggable={false}
              />
            </div>
          </div>

          {/* Dark section */}
          <div className="text-brand-card relative flex flex-col pt-16 pb-8 lg:col-span-7 lg:col-start-6 lg:pt-30">
            <div className="mb-12 lg:mb-24 2xl:flex 2xl:items-center 2xl:justify-between 2xl:gap-20">
              <div className="mb-10 text-2xl/normal font-medium text-balance md:text-3xl 2xl:mb-0">
                Vores rådgivere sidder klar til at hjælpe dig
              </div>

              <BaseCtaButton className="w-full sm:w-auto lg:shrink-0" href="/form" variant="light">
                Beregn dit boliglån
              </BaseCtaButton>
            </div>

            <div className="mt-auto">
              {/* Navigation */}
              <div className="mb-16">
                <nav className="2xl:flex 2xl:gap-x-24">
                  <div className="xxs:grid xxs:grid-cols-2 xxs:gap-x-10 mb-12 2xl:mb-0 2xl:flex 2xl:flex-col 2xl:justify-between">
                    <div className="xxs:mb-0 mb-12">
                      <div className="mb-5 text-lg font-bold xl:mb-7">Mere om os</div>
                      <ul className="space-y-4.5">
                        {aboutLinks.map((link) => (
                          <FooterNavLink key={link.label} {...link} />
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="mb-5 text-lg font-bold xl:mb-7">Sociale Medier</div>
                      <ul className="space-y-4.5">
                        {socialLinks.map((link) => (
                          <FooterNavLink key={link.label} {...link} />
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="xxs:col-span-2">
                    <div className="mb-5 text-lg font-bold xl:mb-7">Nyttige links</div>
                    <ul className="xs:columns-2 xs:gap-x-10 space-y-4.5 md:columns-3">
                      {otherLinks.map((link) => (
                        <FooterNavLink key={link.label} {...link} />
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>

              {/* Legal */}
              <div>
                <div className="mb-5 text-lg font-bold">Det med småt</div>

                <ul className="mb-7 flex flex-wrap items-center gap-x-8 gap-y-3 text-base md:gap-12">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="text-brand-spring border-brand-spring border-b transition-all hover:border-transparent"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-4">
                  <p className="text-sm">
                    &copy; {new Date().getFullYear()} Simpel Kredit Ejendomskreditselskab ApS |
                    CVR.no 39650487
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainerInner>
      </footer>
    </SectionContainer>
  )
}

function FooterNavLink({
  label,
  href,
  isExternal,
}: {
  label: string
  href: string
  isExternal?: boolean
}) {
  return (
    <li>
      {isExternal ? (
        <a
          className="text-brand-card hover:border-brand-card border-b border-transparent transition-all"
          href={href}
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          {label}
        </a>
      ) : (
        <Link
          className="text-brand-card hover:border-brand-card border-b border-transparent transition-all"
          href={href}
        >
          {label}
        </Link>
      )}
    </li>
  )
}
