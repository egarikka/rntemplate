import React, { FC } from 'react';
import { GestureResponderEvent, Linking, TouchableOpacity } from 'react-native';

import { TEXT_TYPE } from './custom-text.constants';
import { ACTIVE_OPACITY, HIT_SLOP_SMALL } from '@constants/styles';

import { ICustomTextProps } from './custom-text.types';

import { StyledCustomText as Styled } from './custom-text.styles';

export const CustomText: FC<ICustomTextProps> = (props) => {
  const {
    url,
    style,
    weight,
    children,
    numberOfLines,
    alignSelf,
    family,
    ellipsizeMode,
    onPress,
    fontSize,
    color,
    isTitle,
  } = props;

  const onTextPress = (event: GestureResponderEvent) => {
    if (url) {
      return Linking.openURL(url);
    }
    onPress?.(event);
  };

  const { defaultSize, defaultWeight } = TEXT_TYPE[isTitle ? 'title' : 'text'];

  const text = (
    <Styled.Text
      alignSelf={alignSelf}
      weight={weight || defaultWeight}
      fontSize={fontSize || defaultSize}
      color={color}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      family={family}
      style={style}
      ellipsizeMode={ellipsizeMode}>
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
