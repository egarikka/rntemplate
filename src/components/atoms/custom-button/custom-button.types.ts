import { StyleProp, ViewStyle } from 'react-native';

import { TIconNames } from '../icon';

import { TStyles } from '@typings/styles';

export enum EButtonType {
  default = 'default',
  rounded = 'rounded',
  base = 'base',
}

export interface ICustomButtonProps extends IStyledCustomButtonProps {
  text?: string;
  iconType?: TIconNames;
  activeOpacity?: number;
  isLoading?: boolean;
  activityIndicatorColor?: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export interface IStyledCustomButtonProps {
  type?: EButtonType;
  height?: number;
  width?: number | string;
  isDisabled?: boolean;
}

export type TButtonsTypes = {
  [key in EButtonType]: TStyles;
};
