import styled from 'styled-components/native';

import { DEVICE_WIDTH } from '../../constants/device';

export const StyledCustomModal = {
  ContentWrapper: styled.View`
    width: ${DEVICE_WIDTH - 30}px;
    background: ${({ theme }) => theme.background.primary};
    border-radius: 10px;
    overflow: hidden;
  `,
  TopSection: styled.View<{ isBorder: boolean }>`
    ${({ isBorder, theme }) =>
      isBorder &&
      `
      border-bottom-color: ${theme.border.lightGrey};
      border-bottom-width: 1px;
      border-style: solid;
      `}
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 19px 16px;
  `,
  MainContent: styled.View`
    padding: 16px;
  `,
  BottomSection: styled.View`
    background-color: ${({ theme }) => theme.background.grey}70;
    justify-content: space-between;
    padding: 13px 16px;
    flex-direction: row;
  `,
};
