declare const _default: import("vue").DefineComponent<{
    transitionShow: {
        type: import("vue").PropType<string>;
    };
    transitionHide: {
        type: import("vue").PropType<string>;
    };
    transitionDuration: {
        type: import("vue").PropType<string | number>;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
    };
    persistent: {
        type: import("vue").PropType<boolean>;
    };
    noEscDismiss: {
        type: import("vue").PropType<boolean>;
    };
    noBackdropDismiss: {
        type: import("vue").PropType<boolean>;
    };
    noRouteDismiss: {
        type: import("vue").PropType<boolean>;
    };
    autoClose: {
        type: import("vue").PropType<boolean>;
    };
    seamless: {
        type: import("vue").PropType<boolean>;
    };
    maximized: {
        type: import("vue").PropType<boolean>;
    };
    fullWidth: {
        type: import("vue").PropType<boolean>;
    };
    fullHeight: {
        type: import("vue").PropType<boolean>;
    };
    position: {
        type: import("vue").PropType<"standard" | "top" | "right" | "bottom" | "left">;
    };
    square: {
        type: import("vue").PropType<boolean>;
    };
    noRefocus: {
        type: import("vue").PropType<boolean>;
    };
    noFocus: {
        type: import("vue").PropType<boolean>;
    };
    noShake: {
        type: import("vue").PropType<boolean>;
    };
    allowFocusOutside: {
        type: import("vue").PropType<boolean>;
    };
    "onUpdate:modelValue": {
        type: import("vue").PropType<(value: boolean) => void>;
    };
    onShow: {
        type: import("vue").PropType<(evt: Event) => void>;
    };
    onBeforeShow: {
        type: import("vue").PropType<(evt: Event) => void>;
    };
    onHide: {
        type: import("vue").PropType<(evt: Event) => void>;
    };
    onBeforeHide: {
        type: import("vue").PropType<(evt: Event) => void>;
    };
    onShake: {
        type: import("vue").PropType<() => void>;
    };
    onEscapeKey: {
        type: import("vue").PropType<() => void>;
    };
    slot: {
        type: import("vue").PropType<{
            component: import("vue").Component;
            componentProps?: {} | undefined;
        }>;
        required: true;
    };
    title: {
        type: import("vue").PropType<string>;
    };
    dependencies: {
        type: import("vue").PropType<() => Promise<any>[]>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    ok: (payload?: any) => true;
    hide: () => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    transitionShow: {
        type: import("vue").PropType<string>;
    };
    transitionHide: {
        type: import("vue").PropType<string>;
    };
    transitionDuration: {
        type: import("vue").PropType<string | number>;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
    };
    persistent: {
        type: import("vue").PropType<boolean>;
    };
    noEscDismiss: {
        type: import("vue").PropType<boolean>;
    };
    noBackdropDismiss: {
        type: import("vue").PropType<boolean>;
    };
    noRouteDismiss: {
        type: import("vue").PropType<boolean>;
    };
    autoClose: {
        type: import("vue").PropType<boolean>;
    };
    seamless: {
        type: import("vue").PropType<boolean>;
    };
    maximized: {
        type: import("vue").PropType<boolean>;
    };
    fullWidth: {
        type: import("vue").PropType<boolean>;
    };
    fullHeight: {
        type: import("vue").PropType<boolean>;
    };
    position: {
        type: import("vue").PropType<"standard" | "top" | "right" | "bottom" | "left">;
    };
    square: {
        type: import("vue").PropType<boolean>;
    };
    noRefocus: {
        type: import("vue").PropType<boolean>;
    };
    noFocus: {
        type: import("vue").PropType<boolean>;
    };
    noShake: {
        type: import("vue").PropType<boolean>;
    };
    allowFocusOutside: {
        type: import("vue").PropType<boolean>;
    };
    "onUpdate:modelValue": {
        type: import("vue").PropType<(value: boolean) => void>;
    };
    onShow: {
        type: import("vue").PropType<(evt: Event) => void>;
    };
    onBeforeShow: {
        type: import("vue").PropType<(evt: Event) => void>;
    };
    onHide: {
        type: import("vue").PropType<(evt: Event) => void>;
    };
    onBeforeHide: {
        type: import("vue").PropType<(evt: Event) => void>;
    };
    onShake: {
        type: import("vue").PropType<() => void>;
    };
    onEscapeKey: {
        type: import("vue").PropType<() => void>;
    };
    slot: {
        type: import("vue").PropType<{
            component: import("vue").Component;
            componentProps?: {} | undefined;
        }>;
        required: true;
    };
    title: {
        type: import("vue").PropType<string>;
    };
    dependencies: {
        type: import("vue").PropType<() => Promise<any>[]>;
    };
}>> & {
    onHide?: (() => any) | undefined;
    onOk?: ((payload?: any) => any) | undefined;
}, {}, {}>;
export default _default;
