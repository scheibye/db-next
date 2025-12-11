// Format CPR number: converts raw digits to XXXXXX-XXXX format
export function formatCprNumber(value: string): string {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '')

  // Limit to 10 digits
  const limitedDigits = digits.slice(0, 10)

  // Add hyphen after 6th digit
  if (limitedDigits.length > 6) {
    return `${limitedDigits.slice(0, 6)}-${limitedDigits.slice(6)}`
  }

  return limitedDigits
}

// Remove CPR formatting: converts XXXXXX-XXXX back to raw digits
export function unformatCprNumber(value: string): string {
  return value.replace(/\D/g, '')
}
