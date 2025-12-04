'use client'

import { useId } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InfoIcon } from 'lucide-react'
import { z } from 'zod'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import { LoanFormHeader } from '@/components/forms/loan/LoanFormHeader'
import { BaseAlert, BaseAlertDescription } from '@/components/ui/BaseAlert'
import { BaseField, BaseFieldError, BaseFieldLabel } from '@/components/ui/BaseField'
import { BaseInput } from '@/components/ui/BaseInput'
import { useLoanFormContext } from '@/contexts/loan-form'

const formSchema = z.object({
  address: z.string().min(1, 'Adresse er påkrævet').trim(),
})

const formSchemaOptional = z.object({
  address: z.string().trim().optional(),
})

export function LoanFormPropertyStep({
  className,
  isOptional = false,
}: {
  className?: string
  isOptional?: boolean
}) {
  const id = useId()
  const { formData, nextStep, updateFormData } = useLoanFormContext()

  const schema = isOptional ? formSchemaOptional : formSchema

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      address: formData.property?.address ?? '',
    },
  })

  function handleSubmit(data: z.infer<typeof schema>) {
    updateFormData({
      property: {
        address: data.address ?? '',
      },
    })

    nextStep()
  }

  return (
    <>
      <LoanFormHeader
        title="Hvilken bolig kigger du på?"
        description="Vi henter automatisk oplysninger om boligen."
        isOptional={isOptional}
      />

      <form className={className} onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid gap-6">
          <Controller
            name="address"
            control={form.control}
            render={({ field, fieldState }) => (
              <BaseField data-invalid={fieldState.invalid}>
                <BaseFieldLabel htmlFor={`${id}-address`}>Adresse</BaseFieldLabel>
                <BaseInput
                  id={`${id}-address`}
                  placeholder="Indtast adresse, postnummer og by"
                  autoComplete="off"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.invalid && <BaseFieldError errors={[fieldState.error]} />}
              </BaseField>
            )}
          />

          <BaseAlert>
            <InfoIcon />
            <BaseAlertDescription>
              <span>
                <strong>Tip:</strong> Ved at indtaste adressen kan vi give dig et mere præcist
                lånetilbud.
              </span>
            </BaseAlertDescription>
          </BaseAlert>
        </div>

        <LoanFormFooter isOptional={isOptional} />
      </form>
    </>
  )
}
