import { InjectionKey } from 'vue';
import AppModal from './AppModal.vue';
import { Dialog } from 'quasar';
import { AppModalProps, AppModalProvider } from '..';
declare const useAppModal: <T extends {}>(dialog: Dialog, componentProps: AppModalProps<T>) => import("quasar").DialogChainObject;
declare const appModalInjectionKey: InjectionKey<AppModalProvider<unknown[]>>;
export { AppModal, useAppModal, appModalInjectionKey };
