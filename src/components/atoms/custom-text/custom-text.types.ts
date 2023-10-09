import { ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, TextProps, TextStyle } from 'react-native';

import { TFontFamilies, TFontSizes, TFontWeights } from '@theme/fonts';

export interface ICustomTextProps extends ICustomTextStylesProps, TextProps {
  children: ReactNode;
  fontSize?: TFontSizes;
  style?: StyleProp<TextStyle>;
  url?: string;
  numberOfLines?: number;
  onPress?: (event: GestureResponderEvent) => void;
  isTitle?: boolean;
}

export interface ICustomTextStylesProps {
  color?: string;
  alignSelf?: 'center' | 'flex-end' | 'flex-start';
  family?: TFontFamilies;
  weight?: TFontWeights;
  fontSize?: TFontSizes;
}

export interface ITextType {
  [key: string]: {
    defaultSize: TFontSizes;
    defaultWeight: TFontWeights;
  };
}
