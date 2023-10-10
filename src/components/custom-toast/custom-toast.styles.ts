import styled from 'styled-components/native';

import { DEVICE_WIDTH } from '../../constants/device';

export const StyledCustomToast = {
  Wrapper: styled.View`
    background-color: ${({ theme }) => theme.background.primary};
    padding: 8px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 8;
    width: ${DEVICE_WIDTH - 40}px;
    min-height: 56px;
    elevation: 4;
    shadow-color: '#132239';
    shadow-opacity: 0.15;
    shadow-radius: 16;
  `,
};
