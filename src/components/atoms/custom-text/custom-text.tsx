import React, { FC } from 'react';
import { GestureResponderEvent, Linking, TouchableOpacity } from 'react-native';

import { COLORS } from '@theme/colors';

import { ACTIVE_OPACITY, HIT_SLOP_SMALL } from '@constants/styles';

import { ICustomTextProps } from './custom-text.types';

import { StyledCustomText as Styled } from './custom-text.styles';

export const CustomText: FC<ICustomTextProps> = (props) => {
  const {
    url,
    style,
    children,
    numberOfLines,
    alignSelf,
    family = 'regular',
    ellipsizeMode,
    onPress,
    fontSize = 15,
    color = COLORS.black,
    ...textProps
  } = props;

  const onTextPress = (event: GestureResponderEvent) => {
    if (url) {
      return Linking.openURL(url);
    }
    onPress?.(event);
  };

  const text = (
    <Styled.Text
      alignSelf={alignSelf}
      fontSize={fontSize}
      color={color}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      family={family}
      style={style}
      ellipsizeMode={ellipsizeMode}
      {...textProps}>
      {children}
    </Styled.Text>
  );

  if (url || onPress) {
    return (
      <TouchableOpacity
        hitSlop={HIT_SLOP_SMALL}
        activeOpacity={ACTIVE_OPACITY}
        onPress={onTextPress}>
        {text}
      </TouchableOpacity>
    );
  }

  return text;
};
