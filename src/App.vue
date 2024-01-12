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

        <template v-for="nav of navigation" :key="nav.label">
          <q-btn-dropdown
            stretch
            flat
            :label="nav.label"
            v-if="nav.items"
            content-class="no-border-radius"
          >
            <AppList :component="QMenu" :items="nav.items" />
          </q-btn-dropdown>
          <q-route-tab v-else :label="nav.label" v-bind="nav.componentProps" />
        </template>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import {
  QInput,
  QCardSection,
  QForm,
  QCardActions,
  Dialog,
  QMenu,
} from 'quasar'
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
import { AppList } from 'quasar-app-components'
import AppForm from './components/AppForm/AppForm.vue'
import { useAppModal } from './components/AppModal'
import TestModal from './TestModal.vue'
import { AppListItemProps } from './components'
import AppSelect from './components/AppSelect/AppSelect.vue'

export default defineComponent({
  components: {
    AppForm,
    AppList,
    AppSelect,
  },

  setup() {
    const options = ref<{ label: string; value: number }[]>([])

    // useAppModal(Dialog, {
    //   persistent: true,
    //   slot: {
    //     component: TestModal,
    //     componentProps: {},
    //   },
    // })

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
          defaultValue: '',
          componentProps: {
            ...inputStyleProps,
            label: 'Test',
            loading: !options.value.length,
            rules: [inputFormRule(UserTestUuid)],
            options: options.value,
          },
        },
      ]
    })

    const navigation = computed(() => {
      return [
        {
          label: 'Ersättningstrafik',
          visible: true,
          componentProps: {},
          items: [
            {
              label: 'Överblick',
              componentProps: {
                to: '/replacement-traffic/overview',
              },
              visible: true,
            },
            {
              label: 'Händelser',
              componentProps: {
                to: '/replacement-traffic/event',
              },
              visible: true,
            },
            {
              label: 'Rapporter',
              visible: true,
              items: [
                {
                  label: 'Ersättningstrafik',
                  componentProps: {
                    to: '/replacement-traffic/report/replacement',
                  },
                  visible: true,
                },
              ],
            },
            {
              label: 'Masterdata',
              visible: true,
              items: [
                {
                  label: 'Paketmallar',
                  visible: true,
                  clickFn: () => {
                    console.log('test')
                  },
                  componentProps: {
                    to: '/replacement-traffic/masterdata/template',
                  },
                },
              ],
            },
          ],
        },
      ] as AppListItemProps[]
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
      navigation,
      QCardActions,
      QCardSection,
      QMenu,
      QForm,
    }
  },
})
</script>
