import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

import { TIconNames } from './icon';

export interface IIconProps {
  type: TIconNames;
  color?: string;
  size?: number;
  width?: number;
  height?: number;
  activeOpacity?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
}
