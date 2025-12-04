export enum CreditPurpose {
  Purchase = 'purchase',
  Supplement = 'supplement',
}

export interface LoanFormState {
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
}
