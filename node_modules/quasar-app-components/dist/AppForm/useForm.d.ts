import { ZodType } from 'zod';
interface FieldError {
    [key: string]: string;
}
export declare const useForm: <T>(defaultForm: T & {}) => {
    formData: import("vue").Ref<{} | import("vue").UnwrapRef<T & {}>>;
    fieldError: import("vue").Ref<FieldError>;
    fieldErrorTexts: import("vue").ComputedRef<string[]>;
    resetDefaultForm: () => void;
    validateForm: (validatorModel: ZodType) => boolean;
    setFormData: (data: {} | Partial<T & {}>) => void;
};
export {};
