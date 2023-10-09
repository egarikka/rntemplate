import styled from 'styled-components/native';

import { CustomText } from '@components/atoms/custom-text';

import { borderBottom } from '@constants/styles';

import { IStyledTitleProps } from './custom-header.types';

export const StyledCustomHeader = {
  CustomHeader: styled.View`
    padding: 12px 24px 16px;
    ${borderBottom('#333')}
  `,

  Wrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,

  Main: styled.View`
    height: 32px;
    flex-direction: row;
    align-items: center;
  `,

  Title: styled(CustomText)<IStyledTitleProps>`
    ${({ isBackArrowWithSpace }) => isBackArrowWithSpace && 'padding-left: 15px'};
    ${({ isWithIcon }) => isWithIcon && 'margin-left: 8px'};
  `,

  Children: styled.View`
    margin-top: 16px;
  `,
};
