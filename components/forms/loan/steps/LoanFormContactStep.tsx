'use client'

import { useId } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleCheckIcon } from 'lucide-react'
import { z } from 'zod'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import { LoanFormHeader } from '@/components/forms/loan/LoanFormHeader'
import { BaseAlert, BaseAlertDescription } from '@/components/ui/BaseAlert'
import { BaseField, BaseFieldError, BaseFieldLabel } from '@/components/ui/BaseField'
import { BaseInput } from '@/components/ui/BaseInput'
import { useLoanFormContext } from '@/contexts/loan-form'

const formSchema = z.object({
  name: z.string().min(1, 'Fornavn og efternavn er påkrævet').trim().toLowerCase(),
  email: z.email('Ugyldig e-mail adresse').min(1, 'E-mail adresse er påkrævet').trim(),
  phone: z.string().min(1, 'Mobilnummer er påkrævet').trim(),
})

export function LoanFormContactStep({ className }: { className?: string }) {
  const id = useId()
  const { nextStep, updateFormData } = useLoanFormContext()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  function handleSubmit(data: z.infer<typeof formSchema>) {
    updateFormData({
      contact: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    })

    nextStep()
  }

  return (
    <>
      <LoanFormHeader
        title="Hvem skal vi sende beregningen til?"
        description="Helt uforpligtende. Vi spammer aldrig."
      />

      <form className={className} onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid gap-6">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <BaseField data-invalid={fieldState.invalid}>
                <BaseFieldLabel htmlFor={`${id}-name`}>Fornavn og efternavn</BaseFieldLabel>
                <BaseInput
                  id={`${id}-name`}
                  autoComplete="name"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.invalid && <BaseFieldError errors={[fieldState.error]} />}
              </BaseField>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <BaseField data-invalid={fieldState.invalid}>
                <BaseFieldLabel htmlFor={`${id}-email`}>E-mail adresse</BaseFieldLabel>
                <BaseInput
                  id={`${id}-email`}
                  autoComplete="email"
                  inputMode="email"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.invalid && <BaseFieldError errors={[fieldState.error]} />}
              </BaseField>
            )}
          />

          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <BaseField data-invalid={fieldState.invalid}>
                <BaseFieldLabel htmlFor={`${id}-phone`}>Mobilnummer</BaseFieldLabel>
                <BaseInput
                  id={`${id}-phone`}
                  autoComplete="tel"
                  inputMode="tel"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.invalid && <BaseFieldError errors={[fieldState.error]} />}
              </BaseField>
            )}
          />

          <BaseAlert>
            <CircleCheckIcon />
            <BaseAlertDescription>
              Dine kontaktoplysninger bruges kun til at sende din låneberegning.
            </BaseAlertDescription>
          </BaseAlert>
        </div>

        <LoanFormFooter />
      </form>
    </>
  )
}
