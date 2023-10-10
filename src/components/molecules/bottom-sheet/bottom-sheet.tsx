import React from 'react';
import { View } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';

import { Icon } from '@components/atoms/icon';

import { IBottomSheetProps } from './bottom-sheet.types';

import { StyledBottomSheet as Styled } from './bottom-sheet.styles';

const CustomBottomSheetBackdrop: React.FC<BottomSheetBackdropProps> = (props) => {
  return <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />;
};

export const BottomSheet: React.FC<IBottomSheetProps> = (props) => {
  const { children, sheetRef, snapPoints, renderHeader } = props;

  const close = () => {
    sheetRef.current?.dismiss();
  };

  const { animatedSnapPoints, animatedHandleHeight, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(['CONTENT_HEIGHT']);

  return (
    <BottomSheetModal
      ref={sheetRef}
      enablePanDownToClose
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      snapPoints={snapPoints || animatedSnapPoints}
      handleComponent={() => (
        <Styled.HandleContainer>
          <Styled.Handle />
        </Styled.HandleContainer>
      )}
      backdropComponent={(backdropProps) => <CustomBottomSheetBackdrop {...backdropProps} />}>
      <Styled.Content onLayout={handleContentLayout}>
        <Styled.Header>
          <View>{renderHeader}</View>
          <Icon type={'roundCross'} onPress={close} />
        </Styled.Header>
        {children}
      </Styled.Content>
    </BottomSheetModal>
  );
};
