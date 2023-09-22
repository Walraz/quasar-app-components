<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-md">
        <q-card>
          <q-card-section class="text-h6"> Form </q-card-section>
          <AppForm
            v-model="model"
            :model-schema="User"
            :schema="schema"
            :action-button-props="buttonStyleProps"
            :action-button-wrapper="QCardActions"
            :field-wrapper="QCardSection"
            @submit="onSave"
          >
            <!-- <template #actions="{ props }">
              <q-separator />
              <q-card-actions align="right">
                <q-btn v-bind="props.bind" type="reset">Töm</q-btn>
                <q-btn v-bind="props.bind" type="submit" color="green"
                  >Spara</q-btn
                >
              </q-card-actions>
            </template> -->
          </AppForm>
        </q-card>
        <pre>
          {{ model }}
        </pre>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { QInput, QCardSection, QForm, QCardActions } from 'quasar'
import { format } from 'date-fns'
import {
  IUser,
  User,
  UserName,
  UserAge,
  UserDateFrom,
  UserDateTo,
  UserTestUuid,
} from './models/User'
import { inputStyleProps } from './common/inputStyleProps'
import { buttonStyleProps } from './common/buttonStyleProps'
import { inputFormRule } from './common/inputFormRule'
import { AppForm, AppSelect } from 'vue-app-form'

export default defineComponent({
  components: {
    AppForm,
  },

  setup() {
    const options = ref<{ label: string; value: number }[]>([])

    setTimeout(() => {
      options.value = [
        {
          label: 'Test 1',
          value: 1,
        },
        {
          label: 'Test 2',
          value: 2,
        },
      ]
    }, 5000)

    const model = ref<Partial<IUser>>({})

    const schema = computed(() => {
      return [
        {
          scope: 'name',
          cols: 6,
          component: QInput,
          defaultValue: '',
          componentProps: {
            ...inputStyleProps,
            label: 'Namn',
            rules: [inputFormRule(UserName)],
          },
        },
        {
          scope: 'vehicle_type.type',
          component: QInput,
          defaultValue: '',
          cols: 6,
          componentProps: {
            ...inputStyleProps,
            label: 'Efternamn',
          },
        },
        {
          scope: 'age',
          cols: 12,
          layoutSlot: 2,
          defaultValue: 0,
          component: QInput,
          transform: Number,
          componentProps: {
            ...inputStyleProps,
            type: 'number',
            label: 'Ålder',
            rules: [inputFormRule(UserAge)],
          },
        },
        {
          scope: 'date.from',
          component: QInput,
          cols: 6,
          defaultValue: format(+new Date(), 'yyyy-MM-dd'),
          componentProps: {
            ...inputStyleProps,
            type: 'date',
            label: 'Från datum',
            rules: [inputFormRule(UserDateFrom)],
          },
        },
        {
          scope: 'dateTo',
          component: QInput,
          cols: 6,
          defaultValue: format(+new Date() - 1440 * 60000, 'yyyy-MM-dd'),
          componentProps: {
            ...inputStyleProps,
            type: 'date',
            label: 'Till datum',
            rules: [inputFormRule(UserDateTo)],
          },
        },
        {
          scope: 'testUuid',
          component: AppSelect,
          layoutSlot: 2,
          cols: 12,
          defaultValue: [],
          componentProps: {
            ...inputStyleProps,
            label: 'Test',
            loading: !options.value.length,
            rules: [inputFormRule(UserTestUuid)],
            options: options.value,
            multiple: true,
          },
        },
      ]
    })

    const onSave = (data: IUser) => {
      console.log(data)
    }
    return {
      schema,
      onSave,
      User,
      model,
      buttonStyleProps,
      QCardActions,
      QCardSection,
      QForm,
    }
  },
})
</script>
