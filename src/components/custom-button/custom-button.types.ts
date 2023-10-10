import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { TIconNames } from '../icon';

export interface ICustomButtonProps extends IStyledCustomButtonProps {
  text?: string;
  iconType?: TIconNames;
  activeOpacity?: number;
  isLoading?: boolean;
  activityIndicatorColor?: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export interface IStyledCustomButtonProps {
  type?: 'default' | 'rounded' | 'base' | 'delete';
  isAlignStart?: boolean;
  height?: number;
  width?: number | string;
  isDisabled?: boolean;
}
