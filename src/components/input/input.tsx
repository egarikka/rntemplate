import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';

import { Icon } from '@components/icon';

import { IInputProps } from './input.types';

import { StyledInput as Styled } from './input.styles';

import { COLORS } from '@theme/colors';

export const Input: FC<IInputProps> = (props) => {
  const {
    value,
    placeholder,
    setValue: setValue,
    isAutoFocus,
    type = 'default',
    isClearable,
    isError,
  } = props;
  const [isHide, setIsHide] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const clearInput = () => isClearable && setValue('');

  const toggleVisible = () => {
    setIsHide(!isHide);
  };

  const onFocus = () => setIsFocus(true);

  const onBlur = () => setIsFocus(false);

  const iconsMap = {
    search: (
      <Styled.RightIcon type={'search'} entering={FadeIn} exiting={FadeOut}>
        <Icon type={'roundCross'} onPress={clearInput} />
      </Styled.RightIcon>
    ),
    password: (
      <Styled.RightIcon type={'password'} entering={FadeIn} exiting={FadeOut}>
        <Icon type={isHide ? 'passwordHide' : 'passwordShow'} onPress={toggleVisible} />
      </Styled.RightIcon>
    ),
    default: isError ? (
      <Styled.RightIcon type={'default'} entering={FadeIn} exiting={FadeOut}>
        <Icon type={'danger'} />
      </Styled.RightIcon>
    ) : null,
  };

  return (
    <View>
      {type === 'search' && (
        <Styled.Icon>
          <Icon type={'search'} onPress={clearInput} size={26} />
        </Styled.Icon>
      )}

      <Styled.Input
        type={type}
        value={value}
        isFocus={type !== 'search' && isFocus}
        isError={type !== 'search' && isError}
        autoFocus={isAutoFocus}
        placeholder={placeholder}
        onChangeText={setValue}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={type === 'password' && isHide}
        placeholderTextColor={COLORS.placeholder}
      />
      {value && isClearable && iconsMap[type]}
    </View>
  );
};
