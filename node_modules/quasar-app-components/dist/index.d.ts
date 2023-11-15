import { AppForm, useForm } from './AppForm';
import AppSelect from './AppSelect/AppSelect.vue';
import { AppModal, useAppModal, appModalInjectionKey } from './AppModal';
import { AppList, AppListItem } from './AppList';
import { Component, Ref, ShallowRef } from 'vue';
import { QDialogProps, QItem } from 'quasar';
import { ZodType } from 'zod';
export { AppForm, useForm, AppSelect, AppModal, useAppModal, appModalInjectionKey, AppList, AppListItem, };
export interface AppFormSchemaField {
    scope: string;
    cols?: number;
    component: Component;
    column?: number;
    transform?: (v: any) => any;
    defaultValue: unknown;
    componentProps?: {
        [key: string]: unknown;
    };
}
export interface AppFormProps {
    modelSchema: ZodType;
    schema: AppFormSchemaField[];
    readonly?: boolean;
    disable?: boolean;
    loading?: boolean;
    fieldWrapper?: Component | string;
    colGutter?: 'lg' | 'md' | 'sm' | 'xs';
    modelValue?: {
        [key: string]: unknown;
    } & {};
}
export interface AppModalCustomProps<T extends object> {
    slot: {
        component: Component;
        componentProps?: T;
    };
    width?: number;
    title?: string;
    dependencies?: () => Promise<unknown>[];
}
export interface AppModalEmits<T = undefined> {
    (e: 'submit', d: T): void;
    (e: 'close'): void;
    (e: 'error', err: unknown): void;
}
export interface AppModalProvider<T = unknown[]> {
    pending: Ref<boolean>;
    dependencyData: ShallowRef<T>;
    onSubmit: (submitFn: () => Promise<unknown>) => void;
    onDialogOK: (payload?: unknown) => void;
    onDialogCancel: () => void;
}
export type AppModalProps<T extends object> = QDialogProps & AppModalCustomProps<T>;
export interface AppListItemProps {
    componentProps?: QItem;
    visible?: boolean;
    icon?: string;
    label?: string;
    color?: string;
    clickFn?: () => void;
    items?: AppListItemProps[];
}
