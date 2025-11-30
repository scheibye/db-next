'use client'

import { HeroFormHomeEquity } from '@/components/forms/hero/HeroFormHomeEquity'
import { HeroFormHomePurchase } from '@/components/forms/hero/HeroFormHomePurchase'
import {
  HeroFormTabs,
  HeroFormTabsContent,
  HeroFormTabsList,
  HeroFormTabsTrigger,
} from '@/components/forms/hero/HeroFormTabs'
import { cn } from '@/lib/utils'

const enum LoanType {
  HomePurchase = 'home-purchase',
  HomeEquity = 'home-equity',
}

export function HeroForm({ className }: { className?: string }) {
  return (
    <div className={cn('', className)}>
      <HeroFormTabs
        className="-mx-[calc(var(--container-padding))] w-[calc(100%+var(--container-padding)*2)] lg:mx-0 lg:w-auto"
        defaultValue={LoanType.HomePurchase}
      >
        <HeroFormTabsList>
          <HeroFormTabsTrigger value={LoanType.HomePurchase}>Lån til Boligkøb</HeroFormTabsTrigger>
          <HeroFormTabsTrigger value={LoanType.HomeEquity}>Lån i Friværdi</HeroFormTabsTrigger>
        </HeroFormTabsList>

        <HeroFormTabsContent value={LoanType.HomePurchase}>
          <HeroFormHomePurchase />
        </HeroFormTabsContent>

        <HeroFormTabsContent value={LoanType.HomeEquity}>
          <HeroFormHomeEquity />
        </HeroFormTabsContent>
      </HeroFormTabs>
    </div>
  )
}
