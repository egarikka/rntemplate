import React, { createRef, forwardRef, useImperativeHandle, useState } from 'react';
import { ActivityIndicator, Modal } from 'react-native';

import { IGlobalLoading, IGlobalLoadingRef } from './global-loading.types';

import { GlobalWrapperStyles as Styled } from './global-loading.styles';

export const globalLoadingRef = createRef<IGlobalLoadingRef>();

export const globalLoading = {
  show: () => {
    globalLoadingRef?.current?.show();
  },
  hide: () => {
    globalLoadingRef?.current?.hide();
  },
};

export const GlobalLoading = forwardRef<IGlobalLoadingRef, IGlobalLoading>(({ style }, ref) => {
  const [visible, setVisible] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({ show, hide }));

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <Modal visible={visible} animationType={'none'} transparent>
      <Styled.Wrapper style={style}>
        <ActivityIndicator color={'white'} size={'large'} />
      </Styled.Wrapper>
    </Modal>
  );
});
