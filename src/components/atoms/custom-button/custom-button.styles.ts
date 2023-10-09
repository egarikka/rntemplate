import styled, { css } from 'styled-components/native';

import { Icon } from '@components/atoms/icon';

import { EButtonType, IStyledCustomButtonProps, TButtonsTypes } from './custom-button.types';

import { COLORS } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const BUTTONS = ({ height }: IStyledCustomButtonProps): TButtonsTypes => ({
  default: css`
    flex-direction: row;
    height: ${height ? `${height}px` : '48px'};
    border-radius: 8px;
    background-color: #0064fe;
  `,
  rounded: css`
    width: 78px;
    height: 32px;
    border-radius: 32px;
    background-color: #0064fe;
    flex-direction: row;
  `,
  base: css`
    flex-direction: row;
    height: ${height ? `${height}px` : '48px'};
    border-radius: 8px;
    background-color: #ededf0;
  `,
});
const TEXTS = {
  default: css`
    color: ${COLORS.mono.white};
    font-size: ${FONTS.size[16]};
  `,
  rounded: css`
    color: ${COLORS.mono.white};
    font-size: ${FONTS.size[14]};
  `,
  base: css`
    color: ${COLORS.mono.black};
    font-size: ${FONTS.size[16]};
  `,
};

export const StyledCustomButton = {
  CustomButton: styled.TouchableOpacity<IStyledCustomButtonProps>`
    width: ${({ width }) =>
      width ? `${typeof width === 'string' ? width : `${width}px`}` : '100%'};
    justify-content: center;
    align-items: center;
    ${({ disabled }) => disabled && 'opacity: 0.4'}
    ${({ type, ...props }) => type && BUTTONS(props)[type]};
  `,
  Icon: styled(Icon)<{ iconSpacingLeft?: number }>`
    margin-right: 5px;
  `,
  Text: styled.Text<{ type: EButtonType }>`
    font-weight: ${FONTS.weight[600]};
    ${({ type }) => TEXTS[type]};
  `,
};
