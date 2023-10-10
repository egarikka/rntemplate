import { StyleProp, ViewStyle } from 'react-native';

export interface IGlobalMessageRef {
  show: (title: string, content: string) => void;
}

export interface IGlobalMessage {
  style?: StyleProp<ViewStyle>;
}
