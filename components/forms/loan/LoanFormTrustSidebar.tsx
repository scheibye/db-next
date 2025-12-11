import Image from 'next/image'
import { CheckCircle2Icon, ClockIcon, MailIcon, PhoneIcon, ShieldIcon } from 'lucide-react'
import { IconCustomTrustpilotStar } from '@/components/icons/IconCustomTrustpilotStar'
import { BaseSeparator } from '@/components/ui/BaseSeparator'
import { cn } from '@/lib/utils'

export function LoanFormTrustSidebar({ className }: { className?: string }) {
  return (
    <div className={cn('border-brand-dark/10 border-l px-7 py-12', className)}>
      {/* Advisor Profile */}
      <div className="space-y-8 text-center">
        <div>
          <div className="border-brand-border mx-auto mb-4 size-24 overflow-hidden rounded-full border-2">
            <Image
              className="size-full object-cover"
              src="/form/advisor-soren.png"
              width={250}
              height={250}
              alt="Søren - Din personlige rådgiver"
            />
          </div>

          <div className="space-y-0.75">
            <h2 className="text-2xl font-bold">Søren</h2>
            <p className="text-brand-dark/75 text-lg font-medium">Din personlige rådgiver</p>
            <p className="text-brand-dark/75">15+ års erfaring med boliglån</p>
          </div>
        </div>

        <div className="bg-brand-spring/25 border-brand-dark/25 mx-auto max-w-md rounded-xl border p-6">
          <p className="italic">
            &quot;Jeg står klar til at hjælpe dig gennem hele processen. Ring endelig, hvis du har
            spørgsmål!&quot;
          </p>
        </div>
      </div>

      <BaseSeparator className="my-8" />

      {/* Contact Information */}
      <div className="-mt-2 space-y-4">
        <h3 className="font-semibold tracking-wide uppercase">Kontakt Søren</h3>

        <a
          className="bg-brand-spring/75 border-brand-dark/25 text-brand-dark flex items-center gap-4 rounded-lg border-2 p-4"
          href="tel:+4535953500"
        >
          <div className="bg-brand-dark/10 flex size-10 shrink-0 items-center justify-center rounded-full">
            <PhoneIcon className="size-5" />
          </div>

          <div>
            <p className="mb-0.25 font-medium">Ring direkte</p>
            <p className="font-bold">+45 3595 3500</p>
          </div>
        </a>

        <a
          href="mailto:soren@danskboliglaan.dk"
          className="border-brand-border flex items-center gap-4 rounded-lg border-2 bg-transparent p-4"
        >
          <div className="bg-brand-border/35 flex size-10 shrink-0 items-center justify-center rounded-full">
            <MailIcon className="size-5" />
          </div>

          <div>
            <p className="mb-0.25 font-medium">Send en email</p>
            <p className="font-semibold">soren@danskboliglaan.dk</p>
          </div>
        </a>
      </div>

      <BaseSeparator className="my-8" />

      {/* Trust Signals */}
      <div className="-mt-2 space-y-3">
        <div className="flex items-start gap-3">
          <CheckCircle2Icon className="text-brand-primary mt-0.5 size-5 shrink-0" />
          <div>
            <p className="font-medium">Svar inden 24 timer</p>
            <p className="text-sm">Vi behandler din sag med det samme</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ShieldIcon className="text-brand-primary mt-0.5 size-5 shrink-0" />
          <div>
            <p className="font-medium">100% fortroligt</p>
            <p className="text-sm">Krypteret og sikker datahåndtering</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ClockIcon className="text-brand-primary mt-0.5 size-5 shrink-0" />
          <div>
            <p className="font-medium">Helt uforpligtende</p>
            <p className="text-sm">Ingen skjulte gebyrer eller forpligtelser</p>
          </div>
        </div>
      </div>

      <BaseSeparator className="my-8" />

      {/* Social Proof */}
      <div className="mb-8">
        <div className="mb-8 grid grid-cols-[1fr_auto_1fr] text-center">
          <div>
            <p className="mb-1 text-3xl font-bold">10.000+</p>
            <p className="text-sm">Tilfredse kunder</p>
          </div>

          <BaseSeparator orientation="vertical" className="shrink-0" />

          <div>
            <p className="mb-1 text-3xl font-bold">4.8/5</p>
            <p className="text-sm">Trustpilot rating</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className="bg-trustpilot grid size-5 place-content-center md:size-6"
              >
                <IconCustomTrustpilotStar className="size-4 shrink-0 fill-white md:size-4.5" />
              </span>
            ))}
          </div>
          på Trustpilot
        </div>
      </div>

      {/* Security Badges */}
      <div className="space-y-4">
        <div className="bg-brand-spring/10 border-brand-dark/25 rounded-lg border p-4 text-center">
          <div className="mb-1 flex items-center justify-center gap-2 font-medium">
            <ShieldIcon className="text-brand-primary size-5" />
            Finanstilsynet godkendt
          </div>
          <div className="text-brand-dark/75">Autorisation nr. 42007</div>
        </div>
      </div>
    </div>
  )
}
