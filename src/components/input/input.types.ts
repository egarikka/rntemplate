export interface IInputProps {
  value: string;
  placeholder?: string;
  isAutoFocus?: boolean;
  isClearable?: boolean;
  isError?: boolean;
  setValue: (value: string) => void;
  textColor?: string;
  type?: TInput;
}

export interface IInputStyles {
  type: TInput;
  isFocus: boolean;
  isError?: boolean;
}

export type TInput = 'default' | 'password' | 'search';
