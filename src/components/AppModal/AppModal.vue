<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card square :style="cardStyle">
      <q-card-section class="flex">
        <div v-if="title" class="text-body1 text-weight-medium">
          {{ title }}
        </div>
        <q-space />
        <q-btn
          @click="onDialogCancel"
          size="sm"
          icon="mdi-close"
          unelevated
          square
          padding="4px"
          :disable="pending"
        >
          <q-tooltip> Stäng </q-tooltip>
        </q-btn>
      </q-card-section>
      <q-slide-transition>
        <div v-if="error" class="q-pb-sm">
          <q-separator color="red-2" />
          <div class="scroll" style="max-height: 300px">
            <div class="q-px-md q-py-sm bg-red-1 text-red text-caption">
              <q-badge color="red">
                <q-icon class="q-mr-sm" name="mdi-alert-circle-outline" />
                Ett fel uppstod</q-badge
              >
              <br />
              <code style="white-space: pre-wrap">
                {{ error.message }}
              </code>
            </div>
          </div>
          <q-separator color="red-2" />
        </div>
      </q-slide-transition>
      <q-linear-progress indeterminate v-if="initLoading" />
      <q-slide-transition>
        <div v-if="!initLoading && error?.type !== 'dependecy'">
          <component
            :is="props.slot.component"
            v-bind="props.slot.componentProps"
          />
        </div>
      </q-slide-transition>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import { appModalInjectionKey } from '.'
import { provide, ref, shallowRef } from 'vue'
import { AppModalProps } from '..'

type ErrorType = 'submit' | 'dependecy'

const props = defineProps<AppModalProps<object>>()

defineEmits({
  ...useDialogPluginComponent.emitsObject,
})

const cardStyle = {
  minWidth: '360px',
  width: props.width ? `${props.width}px` : '',
  maxWidth: props.width ? `${props.width}px` : '',
}

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent()

const initLoading = ref(false)
const error = ref<{ type: ErrorType; message: string } | null>(null)

const onError = (type: ErrorType, err: unknown) => {
  error.value = {
    type,
    message: JSON.stringify(err, Object.getOwnPropertyNames(err), 2),
  }
}

const dependencyData = shallowRef<unknown[]>([])

const loadDependecies = async () => {
  if (!props.dependencies) return
  initLoading.value = true
  try {
    const data = await Promise.all(props.dependencies())
    dependencyData.value = data
  } catch (err) {
    onError('dependecy', err)
  }
  initLoading.value = false
}

loadDependecies()

const pending = ref(false)

const onSubmit = async (submitFn: () => Promise<unknown>) => {
  error.value = null
  pending.value = true
  try {
    const data = await submitFn()
    onDialogOK(data)
  } catch (err) {
    onError('submit', err)
  } finally {
    pending.value = false
  }
}

provide(appModalInjectionKey, {
  pending,
  dependencyData,
  onSubmit,
  onDialogCancel,
  onDialogOK,
})
</script>
