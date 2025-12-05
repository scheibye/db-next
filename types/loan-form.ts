export enum EntryPath {
  Planner = 'planner',
  Dreamer = 'dreamer',
}

export type HousingType = 'ejerbolig' | 'andelsbolig' | 'lejebolig' | 'hjemmeboende'

export type CivilStatus = 'gift' | 'samlever' | 'enlig' | 'skilt' | 'enke'

export type NumberOfBorrowers = 1 | 2 | 3 | 4

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
    civilStatus: CivilStatus | null
    numberOfBorrowers: NumberOfBorrowers | null
    childrenAges: Array<number>
  }
}
