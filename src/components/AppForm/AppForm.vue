<template>
  <q-form
    @validation-error="onFormValidationError"
    @submit="onSubmit"
    greedy
    @reset="onReset"
    ref="form"
  >
    <slot name="top" />
    <component :is="fieldWrapper">
      <div :class="`row q-col-gutter-md`">
        <template v-for="column of columns" :key="column">
          <div class="col">
            <div :class="`row q-col-gutter-${colGutter}`">
              <template
                v-for="field of schema.filter((x) => {
                  const colPosition = x.column || 1
                  if (colPosition > columns) return 1 === column
                  return colPosition === column
                })"
                :key="field.scope"
              >
                <div :class="`col-${field.cols || 'auto'}`">
                  <slot
                    :name="field.scope"
                    :props="{
                      setterScope,
                      getterScope,
                      scope: field.scope,
                      ...propsAndEvent(field),
                    }"
                  >
                    <component
                      :is="field.component"
                      v-bind="propsAndEvent(field).bind"
                      v-on="propsAndEvent(field).on"
                    />
                  </slot>
                </div>
              </template>
            </div>
          </div>
          <div class="col-auto flex" v-if="column !== columns">
            <q-separator vertical />
          </div>
        </template>
      </div>
    </component>
    <slot name="bottom" />
  </q-form>
</template>

<script setup lang="ts">
import { useForm } from './useForm'
import set from 'lodash.set'
import get from 'lodash.get'
import { computed, ref, toRaw, watch } from 'vue'
import { QForm } from 'quasar'
import { AppFormProps, AppFormSchemaField } from '..'

const form = ref<QForm>()
const isDirty = ref(false)
const props = withDefaults(defineProps<AppFormProps>(), {
  colGutter: () => 'sm',
  fieldWrapper: () => 'div',
  readonly: () => false,
  disable: () => false,
  loading: () => false,
})

const columns = Math.max(...props.schema.map((x) => x.column || 1))

const setDefaultValues = (
  model: { [key: string]: unknown } = {},
  schema: AppFormSchemaField[],
) => {
  for (const field of schema) {
    const value = get(
      model,
      field.scope,
      field?.transform
        ? field?.transform(field.defaultValue)
        : field.defaultValue,
    )
    set(model, field.scope, value)
  }
  return model
}

const emit = defineEmits([
  'submit',
  'update:modelValue',
  'reset',
  'close',
  'error',
])
const { resetDefaultForm, validateForm, formData, fieldError } = useForm(
  setDefaultValues(props.modelValue, props.schema),
)

watch(
  fieldError,
  (value) => {
    emit('error', value)
  },
  {
    deep: true,
  },
)

watch(
  formData,
  (value) => {
    emit('update:modelValue', value)
  },
  {
    deep: true,
    immediate: true,
  },
)

const getterScope = (scope: string) => {
  return get(formData.value, scope)
}

const setterScope = (value: any, field: AppFormSchemaField) => {
  set(
    formData.value,
    field.scope,
    field?.transform ? field?.transform(value) : value,
  )
  if (isDirty.value) {
    validateForm(props.modelSchema)
  }
}

const onSubmit = () => {
  isDirty.value = true
  validateForm(props.modelSchema)
  if (!validateForm(props.modelSchema)) {
    return
  }
  emit('submit', toRaw(formData.value))
}

const onReset = () => {
  resetDefaultForm()
  form.value?.resetValidation()
  emit('reset')
}

const onFormValidationError = () => validateForm(props.modelSchema)

const propsAndEvent = computed(() => {
  return (field: AppFormSchemaField) => ({
    bind: {
      ...(field.componentProps || {}),
      readonly:
        field.componentProps?.readonly || field.componentProps?.readonly,
      disable: field.componentProps?.disable || props.disable,
      modelValue: getterScope(field.scope),
      error: Boolean(fieldError.value[field.scope]),
      errorMessage: fieldError.value[field.scope] || '',
    },
    on: {
      'update:modelValue': (v: any) => setterScope(v, field),
    },
  })
})
</script>
