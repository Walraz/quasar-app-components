import { ValidationRule } from 'quasar'
import { ZodType } from 'zod'

export const inputFormRule =
  (z: ZodType): ValidationRule =>
  (val: unknown) => {
    const validation = z.safeParse(val)
    return validation.success || validation.error.formErrors.formErrors[0]
  }
