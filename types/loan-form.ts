export enum EntryPath {
  Planner = 'planner',
  Dreamer = 'dreamer',
}

export type HousingCondition = 'ejerbolig' | 'andelsbolig' | 'lejebolig' | 'hjemmeboende'

export type MaritalStatus = 'gift' | 'samlever' | 'enlig' | 'skilt' | 'enke'

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

  property: {
    address: string
  }

  // Debtors
  numberOfDebtors: NumberOfDebtors | null
  debtors: Array<{
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    cprNumber: string | null // Could be unavailable on the first form step
  }>

  // Life situation
  maritalStatus: MaritalStatus | null
  housingConditions: HousingCondition | null

  // Children
  numberOfChildren: number | null
  agesOfChildren: Array<number>

  // Consents
  consentTerms: boolean
  consentMarketing: boolean

  // Optional comment
  comment: string | null
}
