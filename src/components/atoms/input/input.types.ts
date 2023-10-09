import { TIconNames } from 'components/atoms/icon';

export interface IInputProps {
  value: string;
  placeholder?: string;
  isAutoFocus?: boolean;
  isClearable?: boolean;
  setValue: (value: string) => void;
  iconColor?: string;
  textColor?: string;
  iconType?: TIconNames;
}
