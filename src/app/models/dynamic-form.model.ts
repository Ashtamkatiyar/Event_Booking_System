export type FormFieldType =
  | 'text'
  | 'email'
  | 'number'
  | 'date'
  | 'select'
  | 'checkbox';

export interface DynamicFormField {
  key: string;
  label: string;
  type: FormFieldType;
  required: boolean;
  options?: string[];
  min?: number;
  max?: number;
}