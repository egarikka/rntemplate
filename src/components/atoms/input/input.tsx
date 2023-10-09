import React, { FC } from 'react';
import { View } from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';

import { Icon } from '@components/atoms/icon';

import { IInputProps } from './input.types';

import { StyledInput as Styled } from './input.styles';

import { COLORS } from '@theme/colors';

export const Input: FC<IInputProps> = (props) => {
  const {
    value,
    placeholder,
    setValue: setValue,
    isAutoFocus,
    iconColor,
    iconType,
    textColor = '#FFF',
    isClearable,
  } = props;

  const clearInput = () => isClearable && setValue('');

  return (
    <View>
      {iconType && (
        <Styled.Icon>
          <Icon type={iconType} onPress={clearInput} size={26} color={iconColor} />
        </Styled.Icon>
      )}

      <Styled.Input
        textColor={textColor}
        isWithIcon={!!iconType}
        value={value}
        autoFocus={isAutoFocus}
        placeholder={placeholder}
        onChangeText={setValue}
        placeholderTextColor={COLORS.mono.black}
      />

      {value && isClearable && (
        <Styled.Clear entering={FadeIn} exiting={FadeOut}>
          <Icon type={'cross'} onPress={clearInput} size={1} color={iconColor} />
        </Styled.Clear>
      )}
    </View>
  );
};
