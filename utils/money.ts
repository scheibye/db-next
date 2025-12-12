export function formatPrice(price: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: 'DKK',
    minimumFractionDigits: 0,
    ...options,
  }).format(price)
}
