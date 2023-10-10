import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { ACTIVE_OPACITY } from '@constants/styles';

import { ICustomButtonProps } from './custom-button.types';

import { StyledCustomButton as Styled } from './custom-button.styles';

import { COLORS } from '@theme/colors';

export const CustomButton: FC<ICustomButtonProps> = (props) => {
  const {
    type = 'default',
    activityIndicatorColor = COLORS.white,
    activeOpacity = ACTIVE_OPACITY,
    isLoading,
    iconType,
    textStyle,
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
          {!!text && (
            <Styled.Text style={textStyle} type={type}>
              {text}
            </Styled.Text>
          )}
        </>
      )}
    </Styled.CustomButton>
  );
};
