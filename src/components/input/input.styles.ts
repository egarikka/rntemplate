import Animated from 'react-native-reanimated';
import { css } from 'styled-components';
import styled from 'styled-components/native';

import { IInputStyles, TInput } from './input.types';

import { FONTS } from '@theme/fonts';

const INPUTS = (isError?: boolean) => ({
  default: css`
    background-color: ${({ theme }) => theme.background.primary};
    height: 48px;
    padding: 16px ${isError ? '34px' : '12px'} 16px 16px;
  `,
  search: css`
    background-color: rgba(137, 144, 156, 0.12);
    height: 36px;
    padding: 0 28px 0 32px;
  `,
  password: css`
    height: 48px;
    padding: 16px 34px 16px 16px;
    background-color: ${({ theme }) => theme.background.primary};
    flex-direction: row;
  `,
});

const getTop = (type: TInput) => {
  return {
    default: 12,
    search: 10,
    password: 12,
  }[type];
};

export const StyledInput = {
  Input: styled.TextInput<IInputStyles>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: ${({ theme }) => theme.text.primary};
    font-size: ${FONTS.size[15]};
    ${({ type, isError }) => type && INPUTS(isError)[type]};
    border-color: ${({ isFocus, isError, theme }) =>
      isError ? theme.background.danger : isFocus ? theme.background.blue : theme.border.lightGrey};
    border-width: 1px;
    border-style: solid;
  `,

  RightIcon: styled(Animated.View)<{ type: TInput }>`
    position: absolute;
    right: 8px;
    top: ${({ type }) => getTop(type)}px;
  `,

  Icon: styled.View`
    position: absolute;
    left: 5px;
    top: 5px;
  `,
};
