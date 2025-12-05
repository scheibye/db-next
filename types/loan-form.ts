export enum EntryPath {
  Planner = 'planner',
  Dreamer = 'dreamer',
}

export type HousingType = 'ejerbolig' | 'andelsbolig' | 'lejebolig' | 'hjemmeboende'

export enum CreditPurpose {
  Purchase = 'purchase',
  Supplement = 'supplement',
}

export interface LoanFormState {
  entryPath: EntryPath | null

  base: {
    creditPurpose: CreditPurpose | null
    loanAmount: number | null
    payout: number | null
    equity: number | null
  }

  contact: {
    name: string
    email: string
    phone: string
  }

  property: {
    address: string
  }

  lifeSituation: {
    currentHousing: HousingType | null
  }
}
