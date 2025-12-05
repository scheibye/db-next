export interface DawaAddressAutocompleteResult {
  tekst: string
  adresse: {
    id: string
    href: string
    postnr: string
    postnrnavn: string
    x: number
    y: number
  }
}
