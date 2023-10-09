import styled from 'styled-components/native';

import { ICustomTextStylesProps } from './custom-text.types';

import { FONTS } from '@theme/fonts';

export const StyledCustomText = {
  Text: styled.Text<ICustomTextStylesProps>`
    font-size: ${({ fontSize }) => FONTS.size[fontSize!]};
    ${({ color }) => color && `color: ${color}`};
    ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`};
    /* FIXME font-family: ${({ family }) =>
      family ? FONTS.family[family] : FONTS.family.regular}; */
    font-weight: ${({ weight }) => FONTS.weight[weight!]};
  `,
};
