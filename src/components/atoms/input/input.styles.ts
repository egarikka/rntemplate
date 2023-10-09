import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { FONTS } from '@theme/fonts';

export const StyledInput = {
  Input: styled.TextInput<{ isWithIcon: boolean; textColor: string }>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 28px 0 ${({ isWithIcon }) => (isWithIcon ? 32 : 8)}px;
    border-radius: 6px;
    background-color: rgba(95, 123, 156, 0.1);
    height: 26px;
    color: ${({ textColor }) => textColor};
    font-size: ${FONTS.size[13]};
  `,

  Clear: styled(Animated.View)`
    position: absolute;
    right: 13px;
    top: 13px;
  `,

  Icon: styled.View`
    position: absolute;
    left: 5px;
    top: 0;
  `,
};
