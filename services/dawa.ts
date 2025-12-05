const BASE_URL = 'https://api.dataforsyningen.dk'

export async function fetchDawaAddressAutocomplete(searchQuery: string, perSide: number = 10) {
  const q = encodeURIComponent(searchQuery)

  const response = await fetch(`${BASE_URL}/adresser/autocomplete?q=${q}&per_side=${perSide}`)

  if (!response.ok) {
    throw new Error('API error')
  }

  return response.json()
}
