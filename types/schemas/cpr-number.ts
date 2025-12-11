import z from 'zod'

// CPR validation schema
// Matches format XXXXXX-XXXX (10 digits with hyphen)
export const cprSchema = z
  .string()
  .min(1, 'CPR er påkrævet')
  .regex(/^\d{6}-\d{4}$/, 'CPR skal være i formatet XXXXXX-XXXX (10 cifre)')
  .trim()
