import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { TIconNames } from '@components/atoms/icon';

export interface ICustomHeaderProps {
  title?: string;
  titleColor?: string;
  style?: StyleProp<ViewStyle>;
  actions?: ReactNode;
  children?: ReactNode;
  iconColor?: string;
  iconType?: TIconNames;
  isWithBackArrow?: boolean;
  isWithoutIcon?: boolean;
  isBackArrowWithSpace?: boolean;
}

export interface IStyledTitleProps {
  isBackArrowWithSpace?: boolean;
  isWithIcon: boolean;
}
