import { ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, TextProps, TextStyle } from 'react-native';

import { TFontFamilies, TFontSizes } from '@theme/fonts';

export interface ICustomTextProps extends ICustomTextStylesProps, TextProps {
  children: ReactNode;
  fontSize?: TFontSizes;
  style?: StyleProp<TextStyle>;
  url?: string;
  numberOfLines?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface ICustomTextStylesProps {
  color?: string;
  alignSelf?: 'center' | 'flex-end' | 'flex-start';
  family?: TFontFamilies;
  fontSize?: TFontSizes;
}
