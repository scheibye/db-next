'use client'

import { createContext, useContext, useState } from 'react'
import type { LoanFormState } from '@/types/loan-form'

interface LoanFormContextType {
  step: number
  formData: Partial<LoanFormState>
  previousStep: () => void
  nextStep: () => void
  updateFormData: (updates: Partial<LoanFormState>) => void
}

const LoanFormContext = createContext<LoanFormContextType | null>(null)

export function useLoanFormContext() {
  const context = useContext(LoanFormContext)

  if (!context) {
    throw new Error('useLoanFormContext must be used within a LoanFormProvider')
  }

  return context
}

export function LoanFormProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState<Partial<LoanFormState>>({
    base: {
      creditPurpose: null,
      loanAmount: null,
      payout: null,
      equity: null,
    },
    contact: {
      name: '',
      email: '',
      phone: '',
    },
  })

  function previousStep() {
    setStep((prevStep) => Math.max(0, prevStep - 1))
  }

  function nextStep() {
    setStep((prevStep) => prevStep + 1)
  }

  function updateFormData(updates: Partial<LoanFormState>) {
    setFormData((prevState) => ({
      ...prevState,
      ...updates,
    }))
  }

  return (
    <LoanFormContext value={{ step, formData, previousStep, nextStep, updateFormData }}>
      {children}
    </LoanFormContext>
  )
}
