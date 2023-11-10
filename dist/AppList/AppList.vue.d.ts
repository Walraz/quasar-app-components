import { AppListItemProps } from '..';
import { QListProps } from 'quasar';
declare const _default: import("vue").DefineComponent<{
    props: {
        type: import("vue").PropType<QListProps>;
        default: () => {};
    };
    items: {
        type: import("vue").PropType<AppListItemProps[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: import("vue").PropType<QListProps>;
        default: () => {};
    };
    items: {
        type: import("vue").PropType<AppListItemProps[]>;
        required: true;
    };
}>>, {
    props: QListProps;
}, {}>;
export default _default;
