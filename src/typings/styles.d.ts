import { StyleProp, ViewStyle } from 'react-native';
import { SimpleInterpolation } from 'styled-components';

import 'styled-components/native';

import { ThemeType } from '@theme/colors';

declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}

export type TStyles = SimpleInterpolation;
export type TViewStyles = StyleProp<ViewStyle>;
