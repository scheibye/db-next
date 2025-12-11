import { Collapsible } from '@base-ui/react/collapsible'
import { Progress } from '@base-ui/react/progress'
import {
  ChevronDownIcon,
  CreditCardIcon,
  HomeIcon,
  RulerIcon,
  TrendingUpIcon,
  WalletIcon,
} from 'lucide-react'
import { BaseSeparator } from '@/components/ui/BaseSeparator'
import { cn } from '@/lib/utils'
import { formatPrice } from '@/utils/money'
import type { LucideIcon } from 'lucide-react'

interface LoanFormProgressProps {
  className?: string
  currentStep: number
  totalSteps: number
  address: string | null
  loanAmount: number | null
  downPayment: number | null
  currentListingPrice: number | null
  pricePerSqm: number | null
}

export function LoanFormProgress({
  className,
  currentStep,
  totalSteps,
  loanAmount,
  downPayment,
  address,
  currentListingPrice,
  pricePerSqm,
}: LoanFormProgressProps) {
  const progress = (currentStep / totalSteps) * 100

  function getMotivationalText() {
    if (progress < 25) return 'Lad os komme i gang 💪'
    if (progress < 50) return 'Du klarer det godt 🎯'
    if (progress < 75) return 'Du er godt på vej 🚀'
    if (progress < 90) return 'Næsten i mål 🎉'
    return 'Sidste trin! 🏁'
  }

  const shortAddress = address ? address.split(',')[0] : null
  const hasData = !!(loanAmount || address || currentListingPrice)

  return (
    <div
      className={cn(
        '-mx-[calc(var(--spacing-global-padding)+var(--container-padding))] w-[calc(100%+var(--spacing-global-padding)*2+var(--container-padding)*2)]',
        'lg:-mx-(--container-padding) lg:w-[calc(100%+var(--container-padding)*2)]',
        'xl:mx-0 xl:w-full',
        className
      )}
    >
      {/* Progress bar indicator */}
      <Progress.Root className="relative h-3 w-full" value={progress}>
        <Progress.Track className="h-full">
          <Progress.Indicator className="bg-brand-spring h-full transition-all" />
        </Progress.Track>
      </Progress.Root>

      <Collapsible.Root defaultOpen={false}>
        <Collapsible.Trigger className="group border-brand-dark/10 focus-visible:bg-brand-border/25 flex w-full cursor-pointer items-center justify-between gap-8 border-b px-8 py-5 whitespace-nowrap transition-colors outline-none">
          <span className="flex items-center gap-3 overflow-hidden font-medium">
            <span>
              Trin {currentStep} af {totalSteps}
            </span>

            {hasData && (
              <span className="hidden xl:flex xl:items-center xl:gap-3">
                <span className="text-brand-dark/25">•</span>
                <span className="flex min-w-0 items-center gap-2">
                  {loanAmount && (
                    <span className="flex items-center gap-1.5">
                      <WalletIcon className="size-4 shrink-0" />
                      {formatPrice(loanAmount, { notation: 'compact' })}
                    </span>
                  )}

                  {shortAddress && (
                    <>
                      <span className="text-brand-dark/25">•</span>
                      <span className="flex min-w-0 items-center gap-1.5">
                        <HomeIcon className="size-4 shrink-0" />
                        <span className="truncate">{shortAddress}</span>
                      </span>
                    </>
                  )}

                  {currentListingPrice && (
                    <>
                      <span className="text-brand-dark/25">•</span>
                      <span className="flex items-center gap-1.5">
                        <TrendingUpIcon className="size-4 shrink-0" />
                        {formatPrice(currentListingPrice, { notation: 'compact' })}
                      </span>
                    </>
                  )}
                </span>
              </span>
            )}
          </span>

          <span className="flex items-center gap-2">
            <span>{getMotivationalText()}</span>

            {hasData && (
              <ChevronDownIcon className="size-4.5 shrink-0 transition-transform group-data-panel-open:rotate-180" />
            )}
          </span>
        </Collapsible.Trigger>

        {hasData && (
          <Collapsible.Panel className="border-brand-dark/10 flex h-(--collapsible-panel-height) w-full transform-gpu flex-col justify-end gap-2.5 overflow-hidden border-b px-8 py-4 transition-all duration-150 ease-out data-ending-style:h-0 data-starting-style:h-0">
            {loanAmount && (
              <LoanFormProgressItem
                label="Ønsket lån"
                value={formatPrice(loanAmount)}
                icon={WalletIcon}
              />
            )}

            {downPayment && (
              <LoanFormProgressItem
                label="Udbetaling"
                value={formatPrice(downPayment)}
                icon={CreditCardIcon}
              />
            )}

            {(loanAmount || downPayment) && (address || currentListingPrice) && (
              <BaseSeparator className="my-1.5" />
            )}

            {address && <LoanFormProgressItem label="Bolig" value={address} icon={HomeIcon} />}

            {currentListingPrice && (
              <LoanFormProgressItem
                label="Udbudspris"
                value={formatPrice(currentListingPrice)}
                icon={TrendingUpIcon}
              />
            )}

            {pricePerSqm && (
              <LoanFormProgressItem
                label="Kr. pr. m²"
                value={formatPrice(pricePerSqm)}
                icon={RulerIcon}
              />
            )}
          </Collapsible.Panel>
        )}
      </Collapsible.Root>
    </div>
  )
}

function LoanFormProgressItem({
  label,
  value,
  icon,
}: {
  label: string
  value: string
  icon: LucideIcon
}) {
  const Icon = icon
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-8 font-medium whitespace-nowrap">
      <div className="flex items-center gap-2">
        <Icon className="text-brand-primary size-4 shrink-0" />
        <span>{label}</span>
      </div>
      <span className="truncate font-medium">{value}</span>
    </div>
  )
}
