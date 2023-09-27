<template>
  <q-select
    :model-value="modelValue"
    @update:model-value="setterModelValue"
    clearable
    use-input
    map-options
    options-dense
    :multiple="multiple"
    :use-chips="multiple"
    emit-value
    input-debounce="0"
    popup-content-class="no-border-radius"
    :options="filteredOptions"
    :virtual-scroll-item-size="virtualScrolltemSize"
    @filter="filterFnAutoselect"
    @clear="onClear"
    @new-value="createValue"
  >
    <template #option="{ itemProps, opt, selected, toggleOption }">
      <q-separator />
      <q-item v-bind="itemProps" :disable="opt.disable">
        <q-item-section side>
          <q-checkbox
            dense
            :model-value="selected"
            @update:model-value="toggleOption(opt)"
          >
          </q-checkbox>
        </q-item-section>

        <q-item-section>
          <q-item-label v-html="opt.label" />
          <q-item-label caption v-if="opt.caption" v-html="opt.caption" />
        </q-item-section>
      </q-item>
    </template>

    <template #no-option>
      <q-item>
        <q-item-section class="text-grey"> Inget resultat </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import { QSelectProps } from 'quasar'
import { computed, ref } from 'vue'

type ModelValue = any

type Options = {
  label: string
  value: any
  caption?: string | number
  disable?: boolean
}[]

const props = withDefaults(
  defineProps<{
    modelValue: ModelValue | ModelValue[]
    multiple?: boolean
    newValue?: boolean
    options: Options
    virtualScrolltemSize?: number
    transformNewValueFn?: (v: string) => string
    exactFilterMatch?: boolean
  }>(),
  {
    multiple: () => false,
    virtualScrolltemSize: () => 24,
    transformNewValueFn: (v: string) => v,
    exactFilterMatch: false,
  },
)

const emit = defineEmits(['update:modelValue'])

const setterModelValue = (value: string) => {
  emit('update:modelValue', value)
}

const filterVal = ref('')

const customOptions = ref<Options>([])

const filteredOptions = computed(() => {
  return [...customOptions.value, ...props.options].filter(
    (x) =>
      !filterVal.value ||
      (props.exactFilterMatch
        ? `${x.label}`.toLowerCase() === `${filterVal.value}`.toLowerCase()
        : `${x.label}`
            .toLowerCase()
            .includes(`${filterVal.value}`.toLowerCase())),
  )
})

const filterFnAutoselect: QSelectProps['onFilter'] = (val, update) => {
  filterVal.value = val.toLowerCase()
  update(
    () => {
      filterVal.value = val.toLowerCase()
    },
    (ref) => {
      if (val !== '' && ref.options && ref.options.length > 0) {
        ref.setOptionIndex(-1) // reset optionIndex in case there is something selected
        ref.moveOptionSelection(1, true) // focus the first selectable option and do not update the input-value
      }
    },
  )
}

const onClear = () => {
  emit('update:modelValue', props.multiple ? [] : null)
}

const createValue: QSelectProps['onNewValue'] = (val, done) => {
  if (!props.newValue) return
  customOptions.value.push({
    value: props.transformNewValueFn(val),
    label: props.transformNewValueFn(val),
  })
  done(val, 'add-unique')
}
</script>
