import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { ACTIVE_OPACITY } from '@constants/styles';

import { EButtonType, ICustomButtonProps } from './custom-button.types';

import { StyledCustomButton as Styled } from './custom-button.styles';

import { COLORS } from '@theme/colors';

export const CustomButton: FC<ICustomButtonProps> = (props) => {
  const {
    type = EButtonType.default,
    activityIndicatorColor = COLORS.mono.white,
    activeOpacity = ACTIVE_OPACITY,
    isLoading,
    iconType,
    text,
    ...restProps
  } = props;

  return (
    <Styled.CustomButton type={type} {...restProps} activeOpacity={activeOpacity}>
      {isLoading ? (
        <ActivityIndicator color={activityIndicatorColor} />
      ) : (
        <>
          {iconType && <Styled.Icon type={iconType} />}
          {!!text && <Styled.Text type={type}>{text}</Styled.Text>}
        </>
      )}
    </Styled.CustomButton>
  );
};
