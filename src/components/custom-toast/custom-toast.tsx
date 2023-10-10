import React from 'react';
import Toast, { ToastConfig } from 'react-native-toast-message';

import { Icon } from '@components/icon';
import { CustomText } from '../custom-text';

import { StyledCustomToast as Styled } from './custom-toast.styles';

const toastConfig = {
  success: ({ text1 }: { text1: string }) => (
    <Styled.Wrapper>
      <Icon type={'success'} size={18} />
      <CustomText family={'medium'} fontSize={14} style={{ marginLeft: 8 }}>
        {text1}
      </CustomText>
    </Styled.Wrapper>
  ),

  error: ({ text1 }: { text1: string }) => (
    <Styled.Wrapper>
      <Icon type={'danger'} size={18} />
      <CustomText family={'medium'} fontSize={14} style={{ marginLeft: 8 }}>
        {text1}
      </CustomText>
    </Styled.Wrapper>
  ),
};

export const CustomToast: React.FC = () => <Toast config={toastConfig as ToastConfig} />;
