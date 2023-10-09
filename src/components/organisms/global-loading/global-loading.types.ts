import { StyleProp, ViewStyle } from 'react-native';

export interface IGlobalLoadingRef {
  show: () => void;
  hide: () => void;
}

export interface IGlobalLoading {
  style?: StyleProp<ViewStyle>;
}
