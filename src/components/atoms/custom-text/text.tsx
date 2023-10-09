import React, { FC } from 'react';
import { GestureResponderEvent, Linking, TextProps, TouchableOpacity } from 'react-native';

import { ACTIVE_OPACITY, HIT_SLOP_SMALL } from '@constants/styles';

import { ICustomTextProps } from './custom-text.types';

import { StyledCustomText as Styled } from './custom-text.styles';

import { COLORS } from '@theme/colors';

export const CustomText: FC<ICustomTextProps & TextProps> = (props) => {
  const {
    url,
    style,
    color = COLORS.mono.black,
    weight,
    children,
    fontSize = 14,
    numberOfLines,
    ellipsizeMode,
    onPress,
  } = props;

  const onTextPress = (event: GestureResponderEvent) => {
    if (url) {
      return Linking.openURL(url);
    }
    onPress?.(event);
  };

  const text = (
    <Styled.Text
      weight={weight}
      color={color}
      fontSize={fontSize}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {children}
    </Styled.Text>
  );

  if (url || onPress) {
    return (
      <TouchableOpacity
        style={style}
        hitSlop={HIT_SLOP_SMALL}
        activeOpacity={ACTIVE_OPACITY}
        onPress={onTextPress}>
        {text}
      </TouchableOpacity>
    );
  }

  return text;
};
