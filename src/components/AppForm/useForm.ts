import { computed, ref } from 'vue'
import { ZodType } from 'zod'

interface FieldError {
  [key: string]: string
}

const clone = (o: unknown) => JSON.parse(JSON.stringify(o))

export const useForm = <T>(defaultForm: T & {}) => {
  const formData = ref<(T & {}) | {}>(defaultForm)
  const fieldError = ref<FieldError>({})
  const defaultFormRaw = window.structuredClone(clone(defaultForm))
  const fieldErrorTexts = computed(() => Object.values(fieldError.value))

  const setFormData = (data: Partial<T & {}> | {}) => {
    formData.value = { ...data }
  }

  setFormData(defaultForm)

  const resetDefaultForm = () => {
    setFormData(window.structuredClone(defaultFormRaw))
  }

  const validateForm = (validatorModel: ZodType) => {
    fieldError.value = {}
    const validatedForm = validatorModel.safeParse(formData.value)
    if (!validatedForm.success) {
      fieldError.value = validatedForm.error.errors.reduce<FieldError>(
        (acc, error) => {
          acc[error.path.join('.')] = error.message
          return acc
        },
        {},
      )
      return false
    }
    setFormData(validatedForm.data)
    return true
  }

  return {
    formData,
    fieldError,
    fieldErrorTexts,
    resetDefaultForm,
    validateForm,
    setFormData,
  }
}
