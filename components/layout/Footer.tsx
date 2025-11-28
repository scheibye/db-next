import Image from 'next/image'
import Link from 'next/link'
import { MailIcon, PhoneIcon } from 'lucide-react'
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
  { label: 'Lån uden om banken', href: 'http://laan-uden-om-banken/' },
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
    <footer className="max-w-container mx-auto lg:grid lg:grid-cols-[1fr_1.7398fr]">
      {/* Light section */}
      <div className="bg-brand-card text-brand-dark flex flex-col pt-12 lg:pt-24">
        <div className="3xl:pl-36 px-5 md:px-20 lg:px-5">
          {/* Title */}
          <div className="mb-6 text-xl/normal font-medium text-balance lg:mb-24 lg:text-2xl/normal xl:text-[30px]/[40px]">
            Dansk Boliglån er Reguleret af Finanstilsynet autorisation 42007
          </div>

          {/* Info */}
          <div className="mb-6">
            <div className="mb-6 text-lg font-bold">Info</div>

            <address className="not-italic">
              <p className="mb-2 text-lg font-medium">
                Simpel Kredit Ejendomskreditselskab&nbsp;ApS
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
        <Image
          className="mt-auto translate-y-px lg:translate-y-0"
          src="/layout/footer-pattern.svg"
          width={688}
          height={256}
          alt=""
          draggable={false}
        />
      </div>

      {/* Dark section */}
      <div className="bg-brand-dark text-brand-card 3xl:px-36 flex flex-col px-5 pt-16 pb-8 md:px-16 lg:pt-24 xl:px-20">
        <div className="mb-12 lg:mb-24 2xl:flex 2xl:items-center 2xl:justify-between 2xl:gap-20">
          <div className="mb-10 text-2xl/normal font-medium text-balance md:text-[30px]/[40px] 2xl:mb-0">
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
              <div className="xxs:grid xxs:grid-cols-2 xxs:gap-x-10 mb-12 2xl:grid-cols-1">
                <div className="xxs:mb-0 mb-12 2xl:mb-9">
                  <div className="mb-5 text-lg font-bold">Mere om os</div>
                  <ul className="space-y-3">
                    {aboutLinks.map((link) => (
                      <FooterNavLink key={link.label} {...link} />
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-5 text-lg font-bold">Sociale Medier</div>
                  <ul className="space-y-3">
                    {socialLinks.map((link) => (
                      <FooterNavLink key={link.label} {...link} />
                    ))}
                  </ul>
                </div>
              </div>

              <div className="xxs:col-span-2">
                <div className="mb-5 text-lg font-bold">Nyttige links</div>
                <ul className="xs:columns-2 xs:gap-x-10 space-y-3 md:columns-3">
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
                &copy; {new Date().getFullYear()} Simpel Kredit Ejendomskreditselskab ApS | CVR.no
                39650487
              </p>

              <a
                className="text-brand-spring border-brand-spring border-b text-sm font-medium transition-colors hover:border-transparent"
                href="https://createdbyblack.com"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                Created by Black
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
