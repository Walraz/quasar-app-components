import { Component } from 'vue';
import { AppListItemProps } from '..';
import { QListProps } from 'quasar';
declare const _default: import("vue").DefineComponent<{
    props: {
        type: import("vue").PropType<AppListItemProps>;
        required: true;
    };
    component: {
        type: import("vue").PropType<Component>;
        required: true;
    };
    listProps: {
        type: import("vue").PropType<QListProps>;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: import("vue").PropType<AppListItemProps>;
        required: true;
    };
    component: {
        type: import("vue").PropType<Component>;
        required: true;
    };
    listProps: {
        type: import("vue").PropType<QListProps>;
        default: () => {};
    };
}>>, {
    listProps: QListProps;
}, {}>;
export default _default;
