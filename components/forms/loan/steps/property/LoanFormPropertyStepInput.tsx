'use client'

import { useEffect } from 'react'
import { Autocomplete } from '@base-ui-components/react/autocomplete'
import { useQuery } from '@tanstack/react-query'
import { Loader2Icon, MapPinIcon } from 'lucide-react'
import { useDebounce } from 'use-debounce'
import { BaseInput } from '@/components/ui/BaseInput'
import { BaseLabel } from '@/components/ui/BaseLabel'
import { fetchDawaAddressAutocomplete } from '@/services/dawa'
import type { DawaAddressAutocompleteResult } from '@/types/dawa'

export default function LoanFormPropertyStepInput({
  id,
  searchValue,
  setSearchValue,
  selectedValue,
  setSelectedValue,
}: {
  id: string
  searchValue: string
  setSearchValue: (value: string) => void
  selectedValue: DawaAddressAutocompleteResult | null
  setSelectedValue: (value: DawaAddressAutocompleteResult | null) => void
}) {
  const [debouncedSearchValue] = useDebounce(searchValue, 500)

  const isSelectedValue = debouncedSearchValue === selectedValue?.tekst
  const shouldRenderPopup = debouncedSearchValue !== '' && !isSelectedValue

  const {
    data: searchResults = [],
    isLoading,
    error,
  } = useQuery<Array<DawaAddressAutocompleteResult>>({
    queryKey: ['dawa-autocomplete', debouncedSearchValue],
    queryFn: () => fetchDawaAddressAutocomplete(debouncedSearchValue),
    enabled: searchValue.trim().length > 0 && !isSelectedValue,
  })

  const isEmpty = !isLoading && !error && !searchResults.length

  // Reset selected value when search value is cleared
  useEffect(() => {
    if (!searchValue) {
      setSelectedValue(null)
    }
  }, [searchValue, setSelectedValue])

  return (
    <Autocomplete.Root
      items={searchResults}
      value={searchValue}
      onValueChange={setSearchValue}
      itemToStringValue={(item) => item.tekst}
      filter={null}
    >
      <div className="flex flex-col gap-2">
        <BaseLabel htmlFor={id}>Adresse</BaseLabel>
        <Autocomplete.Input
          render={
            <BaseInput
              id={id}
              className="pr-15"
              placeholder="Indtast adresse, postnummer og by"
              autoComplete="off"
            />
          }
        />
      </div>

      {shouldRenderPopup && (
        <Autocomplete.Portal>
          <Autocomplete.Positioner className="outline-none" sideOffset={8} align="start">
            <Autocomplete.Popup
              className="bg-brand-card border-brand-border max-h-[min(var(--available-height),20.25rem)] w-(--anchor-width) max-w-(--available-width) scroll-py-2 overflow-y-auto overscroll-contain rounded-xl border py-1.5 text-base font-medium shadow-lg"
              aria-busy={isLoading || undefined}
            >
              {isLoading && (
                <Autocomplete.Status className="text-brand-dark flex items-center gap-2.5 px-4 py-2 text-base">
                  <Loader2Icon className="text-brand-dark/75 size-5 shrink-0 animate-spin" />
                  Søger...
                </Autocomplete.Status>
              )}

              {error && (
                <Autocomplete.Status className="text-brand-dark flex items-center gap-2.5 px-4 py-2 text-base">
                  {error.message}
                </Autocomplete.Status>
              )}

              {isEmpty && (
                <Autocomplete.Empty className="text-brand-dark flex items-center gap-2.5 px-4 py-2 text-base">
                  Ingen adresser fundet. Prøv at søge anderledes.
                </Autocomplete.Empty>
              )}

              <Autocomplete.List>
                {(item: DawaAddressAutocompleteResult) => (
                  <Autocomplete.Item
                    key={item.tekst}
                    className="border-brand-border/50 data-highlighted:bg-brand-spring/35 flex cursor-pointer items-start gap-2.5 border-b px-4 py-2 outline-none select-none last:border-b-0"
                    value={item}
                    onClick={() => setSelectedValue(item)}
                  >
                    <MapPinIcon className="text-brand-dark/50 size-5 shrink-0 translate-y-1" />
                    <div className="flex w-full flex-col gap-0.25">
                      <div className="font-medium">{item.tekst}</div>
                      <div className="text-brand-dark/65 text-sm">
                        {item.adresse.postnr} {item.adresse.postnrnavn}
                      </div>
                    </div>
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      )}
    </Autocomplete.Root>
  )
}
