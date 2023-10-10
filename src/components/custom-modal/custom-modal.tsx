import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { CustomButton } from '@components/custom-button/custom-button';
import { Icon } from '@components/icon';
import { CustomText } from '../custom-text';

import { ICustomModalProps } from './custom-modal.types';

import { StyledCustomModal as Styled } from './custom-modal.styles';

export const CustomModal: React.FC<ICustomModalProps> = (props) => {
  const {
    isOpen,
    isDelete,
    isBottom,
    modalTitle,
    swipeDirection,
    animationIn = isBottom ? 'slideInUp' : 'zoomIn',
    animationOut = isBottom ? 'slideOutDown' : 'zoomOut',
    positionVertical = isBottom ? 'flex-end' : 'center',
    positionHorizontal = 'center',
    avoidKeyboard = true,
    animationInTiming = 300,
    animationOutTiming = 300,
    isBackdropBlocked,
    modalStyle,
    cancelText,
    actionText,
    children,
    onClose,
    onAction,
    onModalHide,
    onModalWillShow,
    onSwipeComplete,
  } = props;

  const onBackdropPress = () => !isBackdropBlocked && onClose?.();

  return (
    <Modal
      onModalHide={onModalHide}
      swipeThreshold={50}
      isVisible={isOpen}
      avoidKeyboard={avoidKeyboard}
      swipeDirection={swipeDirection}
      backdropOpacity={0.5}
      backdropTransitionInTiming={500}
      animationIn={animationIn}
      animationOut={animationOut}
      animationInTiming={animationInTiming}
      animationOutTiming={animationOutTiming}
      onSwipeComplete={onSwipeComplete}
      onBackdropPress={onBackdropPress}
      onModalWillShow={onModalWillShow}
      useNativeDriver={false}
      useNativeDriverForBackdrop={false}
      style={[
        styles.modal,
        {
          justifyContent: positionVertical,
          alignItems: positionHorizontal || 'stretch',
        },
        modalStyle,
      ]}>
      <SafeAreaView>
        <Styled.ContentWrapper>
          <Styled.TopSection isBorder={!!modalTitle}>
            <CustomText family="medium" fontSize={16}>
              {modalTitle}
            </CustomText>
            <Icon type="roundCross" onPress={onClose} />
          </Styled.TopSection>
          <Styled.MainContent>{children}</Styled.MainContent>
          {onAction && actionText && cancelText && (
            <Styled.BottomSection>
              <CustomButton onPress={onClose} text={cancelText} type="base" width="47%" />
              <CustomButton
                onPress={onAction}
                text={actionText}
                type={isDelete ? 'delete' : 'default'}
                width="47%"
              />
            </Styled.BottomSection>
          )}
        </Styled.ContentWrapper>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
  },
});
