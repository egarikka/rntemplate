import styled, { css } from 'styled-components/native';

import { Icon } from '@components/atoms/icon';

import { IStyledCustomButtonProps } from './custom-button.types';

import { COLORS } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const BUTTONS = ({ height }: IStyledCustomButtonProps) => ({
  default: css`
    flex-direction: row;
    height: ${`${height || 48}px`};
    border-radius: 8px;
    background-color: ${COLORS.blue};
  `,
  delete: css`
    flex-direction: row;
    height: ${`${height || 48}px`};
    border-radius: 8px;
    background-color: ${COLORS.danger};
  `,
  rounded: css`
    width: auto;
    padding-horizontal: 10px;
    height: 32px;
    border-radius: 32px;
    background-color: ${COLORS.blue};
    flex-direction: row;
  `,
  base: css`
    flex-direction: row;
    height: ${`${height || 48}px`};
    border-radius: 8px;
    background-color: ${COLORS.mediumGrey};
  `,
});
const TEXTS = {
  default: css`
    color: ${COLORS.white};
    font-size: ${FONTS.size[16]};
  `,
  rounded: css`
    color: ${COLORS.white};
    font-size: ${FONTS.size[14]};
  `,
  base: css`
    color: ${COLORS.black};
    font-size: ${FONTS.size[16]};
  `,
  delete: css`
    color: ${COLORS.white};
    font-size: ${FONTS.size[16]};
  `,
};

export const StyledCustomButton = {
  CustomButton: styled.TouchableOpacity<IStyledCustomButtonProps>`
    width: ${({ width }) =>
      width ? `${typeof width === 'string' ? width : `${width}px`}` : '100%'};
    justify-content: ${({ isAlignStart }) => (isAlignStart ? 'flex-start' : 'center')};
    align-items: center;
    padding-horizontal: 12px;
    ${({ disabled }) => disabled && 'opacity: 0.4'}
    ${({ type, ...props }) => type && BUTTONS(props)[type]};
  `,
  Icon: styled(Icon)<{ iconSpacingLeft?: number }>`
    margin-right: 12px;
  `,
  Text: styled.Text<{ type: 'default' | 'rounded' | 'base' | 'delete' }>`
    ${({ type }) => TEXTS[type]};
    font-family: ${FONTS.family.medium};
  `,
};
