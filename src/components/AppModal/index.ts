import { InjectionKey } from 'vue'
import AppModal from './AppModal.vue'
import { Dialog } from 'quasar'
import { AppModalProps, AppModalProvider } from '..'

const useAppModal = <T extends {}>(
  dialog: Dialog,
  componentProps: AppModalProps<T>,
) => {
  return dialog.create({
    component: AppModal,
    componentProps,
  })
}

const appModalInjectionKey = Symbol() as InjectionKey<AppModalProvider>

export { AppModal, useAppModal, appModalInjectionKey }
