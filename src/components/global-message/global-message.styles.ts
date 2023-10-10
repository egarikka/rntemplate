import styled from 'styled-components/native';

import { CustomButton } from '@components/custom-button';
import { CustomText } from '@components/custom-text';

export const GlobalMessageStyles = {
  Modal: styled.Modal`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
  `,
  Wrapper: styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
  `,
  Button: styled(CustomButton)`
    width: 80px;
    height: 40px;
  `,
  Message: styled.View`
    margin-bottom: 16px;
  `,
  TitleWrapper: styled.View`
    margin: 16px 0;
  `,
  BoxContent: styled.View`
    width: 80%;
    background-color: #fff;
    border-radius: 10px;
    align-items: center;
  `,
  Content: styled.View`
    align-items: center;
    padding: 16px;
    justify-content: center;
  `,
  Text: styled(CustomText)`
    text-align: center;
  `,
};
