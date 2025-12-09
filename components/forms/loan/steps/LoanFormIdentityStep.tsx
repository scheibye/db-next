import { useId } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LockIcon } from 'lucide-react'
import z from 'zod'
import { LoanFormFooter } from '@/components/forms/loan/LoanFormFooter'
import {
  LoanFormHeader,
  LoanFormHeaderDescription,
  LoanFormHeaderTitle,
} from '@/components/forms/loan/LoanFormHeader'
import { BaseAlert, BaseAlertDescription } from '@/components/ui/BaseAlert'
import { BaseField, BaseFieldError, BaseFieldLabel } from '@/components/ui/BaseField'
import { BaseInput } from '@/components/ui/BaseInput'
import { useLoanFormContext } from '@/contexts/loan-form'
import type { LoanFormState } from '@/types/loan-form'

const additionalDebtorSchema = z.object({
  firstName: z.string().min(1, 'Fornavn er påkrævet').trim(),
  lastName: z.string().min(1, 'Efternavn er påkrævet').trim(),
  email: z.email('Ugyldig e-mail adresse').min(1, 'E-mail adresse er påkrævet').trim(),
  phone: z.string().min(1, 'Mobilnummer er påkrævet').trim(),
  cprNumber: z.string().min(1, 'CPR er påkrævet').trim(),
})

type AdditionalDebtor = z.infer<typeof additionalDebtorSchema>

function createFormSchema(numberOfDebtors: number) {
  const schema: Record<string, z.ZodTypeAny> = {
    mainDebtorCprNumber: z.string().min(1, 'CPR er påkrævet').trim(),
  }

  // Add schema for additional debtors (starting from debtor 2)
  for (let i = 1; i < numberOfDebtors; i++) {
    schema[`additionalDebtor${i}`] = additionalDebtorSchema
  }

  return z.object(schema)
}

export function LoanFormIdentityStep() {
  const id = useId()
  const { formData, nextStep, updateFormData } = useLoanFormContext()

  // Always available on this step
  const mainDebtorInfo = formData.debtors?.[0] as LoanFormState['debtors'][0]
  const numberOfDebtors = formData.lifeSituation?.numberOfDebtors ?? 1

  function getDefaultValues() {
    const values: Record<string, any> = {
      mainDebtorCprNumber: mainDebtorInfo?.cprNumber ?? '',
    }

    // Add default values for additional debtors
    // 0 index is a main debtor, it's skipped here
    for (let i = 1; i < numberOfDebtors; i++) {
      const existingDebtor = formData.debtors?.[i]

      values[`additionalDebtor${i}`] = {
        firstName: existingDebtor?.firstName ?? '',
        lastName: existingDebtor?.lastName ?? '',
        email: existingDebtor?.email ?? '',
        phone: existingDebtor?.phoneNumber ?? '',
        cprNumber: existingDebtor?.cprNumber ?? '',
      }
    }

    return values
  }

  const form = useForm<Record<string, any>>({
    resolver: zodResolver(createFormSchema(numberOfDebtors)),
    defaultValues: getDefaultValues(),
  })

  function handleSubmit(data: Record<string, any>) {
    const updatedDebtors = [...(formData.debtors ?? [])]

    // Update main debtor's CPR
    if (updatedDebtors[0]) {
      updatedDebtors[0] = {
        ...updatedDebtors[0],
        cprNumber: data.mainDebtorCprNumber as string,
      }
    }

    // Add/update additional debtors
    for (let i = 1; i < numberOfDebtors; i++) {
      const additionalDebtorData = data[`additionalDebtor${i}`] as AdditionalDebtor

      if (additionalDebtorData) {
        updatedDebtors[i] = {
          firstName: additionalDebtorData.firstName,
          lastName: additionalDebtorData.lastName,
          email: additionalDebtorData.email,
          phoneNumber: additionalDebtorData.phone,
          cprNumber: additionalDebtorData.cprNumber,
        }
      }
    }

    updateFormData({
      debtors: updatedDebtors,
    })

    nextStep()
  }

  return (
    <>
      <LoanFormHeader>
        <LoanFormHeaderTitle>Sikkerhed & Identitet</LoanFormHeaderTitle>
        <LoanFormHeaderDescription>
          Vi skal bruge dit CPR til at hente dine skatteoplysninger automatisk. Så slipper du for
          papirarbejdet.
        </LoanFormHeaderDescription>
      </LoanFormHeader>

      <div className="mb-6">
        <h3 className="mb-6 text-xl font-semibold">
          Hej {mainDebtorInfo?.firstName}, vi mangler kun dit CPR for at tjekke skat.
        </h3>

        <dl className="bg-brand-primary/25 grid max-w-lg gap-3 rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <dt className="text-brand-dark/75 font-medium">Navn</dt>
            <dd className="text-lg font-semibold">
              {mainDebtorInfo.firstName} {mainDebtorInfo.lastName}
            </dd>
          </div>

          <div className="flex items-center justify-between gap-6">
            <dt className="text-brand-dark/75 font-medium">Email</dt>
            <dd className="text-lg font-semibold">{mainDebtorInfo.email}</dd>
          </div>

          <div className="flex items-center justify-between gap-6">
            <dt className="text-brand-dark/75 font-medium">Telefon</dt>
            <dd className="text-lg font-semibold">{mainDebtorInfo.phoneNumber}</dd>
          </div>
        </dl>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid gap-6">
          <Controller
            name="mainDebtorCprNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <BaseField data-invalid={fieldState.invalid}>
                <BaseFieldLabel htmlFor={`${id}-mainDebtorCprNumber`}>CPR nummer</BaseFieldLabel>
                <BaseInput
                  id={`${id}-mainDebtorCprNumber`}
                  placeholder="DDMMÅÅ-XXXX"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.invalid && <BaseFieldError errors={[fieldState.error]} />}
              </BaseField>
            )}
          />

          <BaseAlert>
            <LockIcon />
            <BaseAlertDescription>
              Dine data sendes krypteret direkte til CPR-registret.
            </BaseAlertDescription>
          </BaseAlert>
        </div>

        {numberOfDebtors > 1 && (
          <>
            {Array.from({ length: numberOfDebtors - 1 }, (_, index) => {
              const debtorNumber = index + 2 // Start from 2 (debtor 2, 3, 4...)
              const fieldPrefix = `additionalDebtor${index + 1}` as const

              return (
                <div key={debtorNumber}>
                  <hr className="bg-brand-dark/10 my-12 h-px w-full border-0" />

                  <div className="grid gap-6">
                    <h3 className="text-xl font-semibold">Låntager nr. {debtorNumber}</h3>

                    <Controller
                      name={`${fieldPrefix}.firstName`}
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <BaseField data-invalid={fieldState.invalid}>
                          <BaseFieldLabel htmlFor={`${id}-${fieldPrefix}-firstName`}>
                            Fornavn
                          </BaseFieldLabel>
                          <BaseInput
                            id={`${id}-${fieldPrefix}-firstName`}
                            autoComplete="given-name"
                            aria-invalid={fieldState.invalid}
                            {...field}
                          />
                          {fieldState.invalid && <BaseFieldError errors={[fieldState.error]} />}
                        </BaseField>
                      )}
                    />

                    <Controller
                      name={`${fieldPrefix}.lastName`}
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <BaseField data-invalid={fieldState.invalid}>
                          <BaseFieldLabel htmlFor={`${id}-${fieldPrefix}-lastName`}>
                            Efternavn
                          </BaseFieldLabel>
                          <BaseInput
                            id={`${id}-${fieldPrefix}-lastName`}
                            autoComplete="family-name"
                            aria-invalid={fieldState.invalid}
                            {...field}
                          />
                          {fieldState.invalid && <BaseFieldError errors={[fieldState.error]} />}
                        </BaseField>
                      )}
                    />

                    <Controller
                      name={`${fieldPrefix}.email`}
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <BaseField data-invalid={fieldState.invalid}>
                          <BaseFieldLabel htmlFor={`${id}-${fieldPrefix}-email`}>
                            E-mail adresse
                          </BaseFieldLabel>
                          <BaseInput
                            id={`${id}-${fieldPrefix}-email`}
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
                      name={`${fieldPrefix}.phone`}
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <BaseField data-invalid={fieldState.invalid}>
                          <BaseFieldLabel htmlFor={`${id}-${fieldPrefix}-phone`}>
                            Mobilnummer
                          </BaseFieldLabel>
                          <BaseInput
                            id={`${id}-${fieldPrefix}-phone`}
                            autoComplete="tel"
                            inputMode="tel"
                            aria-invalid={fieldState.invalid}
                            {...field}
                          />
                          {fieldState.invalid && <BaseFieldError errors={[fieldState.error]} />}
                        </BaseField>
                      )}
                    />

                    <Controller
                      name={`${fieldPrefix}.cprNumber`}
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <BaseField data-invalid={fieldState.invalid}>
                          <BaseFieldLabel htmlFor={`${id}-${fieldPrefix}-cprNumber`}>
                            CPR nummer
                          </BaseFieldLabel>
                          <BaseInput
                            id={`${id}-${fieldPrefix}-cprNumber`}
                            placeholder="DDMMÅÅ-XXXX"
                            aria-invalid={fieldState.invalid}
                            {...field}
                          />
                          {fieldState.invalid && <BaseFieldError errors={[fieldState.error]} />}
                        </BaseField>
                      )}
                    />
                  </div>
                </div>
              )
            })}
          </>
        )}

        <LoanFormFooter />
      </form>
    </>
  )
}
