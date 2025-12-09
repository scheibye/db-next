const BASE_URL = '/api/property'

export async function fetchPropertyLookup(address: string) {
  const response = await fetch(`${BASE_URL}/lookup`, {
    method: 'POST',
    body: JSON.stringify({
      address,
    }),
  })

  if (!response.ok) {
    throw new Error('API error')
  }

  return response.json()
}
