import { InjectionKey } from 'vue'
import AppModal from './AppModal.vue'
import { Dialog } from 'quasar'
import { AppModalProps, AppModalProvider } from '..'

const useAppModal = <T extends {}>(componentProps: AppModalProps<T>) => {
  return Dialog.create({
    component: AppModal,
    componentProps,
  })
}

const appModalInjectionKey = Symbol() as InjectionKey<AppModalProvider>

export { AppModal, useAppModal, appModalInjectionKey }
