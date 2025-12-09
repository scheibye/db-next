export enum EntryPath {
  Planner = 'planner',
  Dreamer = 'dreamer',
}

export type HousingType = 'ejerbolig' | 'andelsbolig' | 'lejebolig' | 'hjemmeboende'

export type CivilStatus = 'gift' | 'samlever' | 'enlig' | 'skilt' | 'enke'

export type NumberOfDebtors = 1 | 2 | 3 | 4

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

  debtors: Array<{
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    cprNumber: string | null // Could be unavailable on the first form step
  }>

  property: {
    address: string
  }

  lifeSituation: {
    currentHousing: HousingType | null
    civilStatus: CivilStatus | null
    numberOfDebtors: NumberOfDebtors | null
  }

  numberOfChildren: number | null
  agesOfChildren: Array<number>

  // Optional comment
  comment: string | null

  // Consents
  consentTerms: boolean
  consentMarketing: boolean
}
