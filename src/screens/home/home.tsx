import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { CenterContainer } from '@components/container';
import { CustomButton } from '@components/custom-button';
import { CustomModal } from '@components/custom-modal';
import { Icon } from '@components/icon';
import { Input } from '@components/input';
import { Spacer } from '@components/spacer';

import { BottomSheet } from '@components/bottom-sheet/bottom-sheet';

import { useBottomSheet } from '@services/hooks/bottom-sheet';
import { useOpenCloseModal } from '@services/hooks/open-close';

export const Home: React.FC = () => {
  const { isOpen, onToggle } = useOpenCloseModal();
  const deleteModal = useOpenCloseModal();
  const bottomModal = useOpenCloseModal();
  const sucessModal = useOpenCloseModal();
  const actionModal = useOpenCloseModal();

  const { ref, open } = useBottomSheet();

  const [value, setValue] = useState('');

  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Couldnt log in. Please check your email and password and try again.',
    });
  };
  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Couldnt log in. Please check your email and password and try again.',
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'handled'}>
        <Spacer gap={10} />

        <CustomModal
          cancelText={'Cancel'}
          actionText={'Save'}
          isOpen={isOpen}
          modalTitle={'Invite your '}
          onClose={onToggle}
          onAction={onToggle}>
          <View />
        </CustomModal>
        <CustomModal
          cancelText={'Cancel'}
          actionText={'Delete'}
          isOpen={deleteModal.isOpen}
          modalTitle={'Invite your '}
          onClose={deleteModal.onToggle}
          onAction={deleteModal.onToggle}
          isDelete>
          <View />
        </CustomModal>
        <CustomModal
          cancelText={'Cancel'}
          actionText={'Save'}
          isOpen={bottomModal.isOpen}
          modalTitle={'Invite your '}
          onClose={bottomModal.onToggle}
          onAction={bottomModal.onToggle}
          isBottom>
          <View />
        </CustomModal>

        <CustomModal
          cancelText={'Cancel'}
          isOpen={sucessModal.isOpen}
          onClose={sucessModal.onToggle}>
          <View />
          <Icon type={'success'} />
        </CustomModal>

        <CustomModal
          cancelText={'Cancel'}
          isOpen={actionModal.isOpen}
          modalTitle={'Action'}
          onClose={actionModal.onToggle}
          isBottom>
          <View />
        </CustomModal>
        <BottomSheet sheetRef={ref} renderHeader={<Text>header</Text>} snapPoints={['80%']}>
          <CustomButton onPress={onToggle} text={'save'} type={'rounded'} />
        </BottomSheet>

        <CenterContainer>
          <CustomButton onPress={onToggle} text={'modal'} type={'rounded'} />
          <Spacer gap={10} />
          <CustomButton onPress={sucessModal.onToggle} text={'Success modal'} type={'rounded'} />
          <Spacer gap={10} />
          <CustomButton onPress={actionModal.onToggle} text={'Action Modal'} type={'rounded'} />
          <Spacer gap={10} />
          <CustomButton onPress={showErrorToast} text={'Toast error button'} type={'rounded'} />
          <Spacer gap={10} />
          <CustomButton onPress={showSuccessToast} text={'Toast sucess button'} type={'rounded'} />
          <Spacer gap={10} />

          <Spacer gap={10} />
          <CustomButton onPress={bottomModal.onToggle} text={'Bottom modal'} type={'rounded'} />
          <Spacer gap={10} />
          <CustomButton onPress={deleteModal.onToggle} text={'delete modal'} type={'rounded'} />
          <Spacer gap={10} />
          <CustomButton onPress={open} text={'bottom sheet'} type={'rounded'} />
        </CenterContainer>

        <View style={{ paddingHorizontal: 10 }}>
          <Spacer gap={10} />
          <Input
            value={value}
            setValue={setValue}
            isClearable
            type={'search'}
            placeholder={'search'}
          />
          <Spacer gap={10} />
          <Input
            value={value}
            setValue={setValue}
            isClearable
            type={'password'}
            placeholder={'Password'}
          />
          <Spacer gap={10} />
          <Input value={value} setValue={setValue} isClearable placeholder={'Add users'} />
          <Spacer gap={10} />
          <Input
            value={value}
            setValue={setValue}
            isClearable
            type={'password'}
            placeholder={'Password'}
            isError
          />
          <Spacer gap={10} />
          <Input
            value={value}
            setValue={setValue}
            isClearable
            placeholder={'Danger error'}
            isError
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
