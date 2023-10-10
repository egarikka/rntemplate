import React, { FC } from 'react';

import { ICON_MAP } from './icon.map';

import { ACTIVE_OPACITY, HIT_SLOP_BIG } from '@constants/styles';

import { IIconProps } from './icon.types';

import { StyledIcon as Styled } from './icon.styles';

export type TIconNames = keyof typeof ICON_MAP;

export const Icon: FC<IIconProps> = (props) => {
  const {
    type,
    size,
    style,
    height,
    width,
    color,
    activeOpacity = ACTIVE_OPACITY,
    onPress,
    onLongPress,
  } = props;

  const SelectedIcon = ICON_MAP[type];

  const iconHeight = size ?? height ?? props.height;
  const iconWidth = size ?? width ?? props.width;

  const wrapperStyle = [{ height: iconHeight, width: iconWidth }, style];

  const icon = color ? (
    <SelectedIcon fill={color} color={color} style={{ height: iconHeight, width: iconWidth }} />
  ) : (
    <SelectedIcon style={{ height: iconHeight, width: iconWidth }} />
  );

  return onPress || onLongPress ? (
    <Styled.Press
      onPress={onPress}
      onLongPress={onLongPress}
      hitSlop={HIT_SLOP_BIG}
      activeOpacity={activeOpacity}
      style={wrapperStyle}>
      {icon}
    </Styled.Press>
  ) : (
    <Styled.Wrapper style={wrapperStyle}>{icon}</Styled.Wrapper>
  );
};
