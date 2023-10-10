import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Animation, CustomAnimation } from 'react-native-animatable';
import { Direction } from 'react-native-modal';

type TPositionHorizontal = 'center' | 'flex-end' | 'flex-start' | 'stretch';

type TPositionVertical =
  | 'flex-end'
  | 'flex-start'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface ICustomModalProps {
  isOpen: boolean;
  modalTitle?: string;
  cancelText?: string;
  actionText?: string;
  avoidKeyboard?: boolean;
  isDelete?: boolean;
  isBottom?: boolean;
  isBackdropBlocked?: boolean;
  children: React.ReactNode;
  swipeDirection?: Direction[];
  positionVertical?: TPositionVertical;
  animationInTiming?: number;
  animationOutTiming?: number;
  positionHorizontal?: TPositionHorizontal;
  modalStyle?: StyleProp<ViewStyle>;
  animationIn?: Animation | CustomAnimation;
  animationOut?: Animation | CustomAnimation;
  onClose: () => void;
  onAction?: () => void;
  onModalHide?: () => void;
  onModalWillShow?: () => void;
  onSwipeComplete?: () => void;
}
