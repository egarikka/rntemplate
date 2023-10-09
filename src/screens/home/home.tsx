import React, { useState } from 'react';
import { View } from 'react-native';

import { CenterContainer, RowContainer } from '@components/atoms/container';
import { CustomButton } from '@components/atoms/custom-button';
import { Input } from '@components/atoms/input';
import { Spacer } from '@components/atoms/spacer';
import { globalLoadingRef } from '@components/organisms/global-loading';
import { globalMessageRef } from '@components/organisms/global-message';
import { Layout } from '@components/organisms/layout';

import { useThemedBackgroundColor } from '@services/hooks/animated-background';

import { EButtonType } from '../../components/atoms/custom-button/custom-button.types';

export const Home: React.FC = () => {
  const [value, setValue] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const { backgroundStyle } = useThemedBackgroundColor(isDarkTheme);

  const showLoading = () => {
    globalLoadingRef.current?.show();

    setTimeout(() => {
      globalLoadingRef.current?.hide();
    }, 2500);
  };

  const showMessage = () => {
    globalMessageRef.current?.show('Global Message', 'Content');
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <Layout
      isWithVerticalIndents
      isWithScroll
      bgColor={'#333'}
      titleColor={'blue'}
      title={'Home'}
      iconType={'cross'}
      iconColor={'darkgray'}
      isWithBackArrow
      elasticScrollColor={'lightblue'}
      actions={
        <RowContainer>
          {/* <CustomButton textColor='#FFF' text='a' onPress={showLoading} />
          <Spacer isHorizontal gap={10} />
          <CustomButton textColor='#FFF' text='b' onPress={showMessage} /> */}
        </RowContainer>
      }
      headerChildren={
        <Input
          value={value}
          setValue={setValue}
          textColor={'#000'}
          placeholder={'In header!'}
          iconType={'search'}
          isClearable
        />
      }>
      <Spacer gap={20} />

      <CenterContainer>
        <CustomButton
          onPress={() => { }}
          text={'save'}
          type={EButtonType.rounded}
          iconType={'cross'}
        />
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomButton onPress={() => { }} text={'cancel'} type={EButtonType.base} width={150} />
          <CustomButton onPress={() => { }} text={'save'} type={EButtonType.default} width={150} />
        </View>
        {/* <Animated.View style={[backgroundStyle]}>
          <CustomImage
            resizeMode='contain'
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            }}
            width={150}
            height={150}
          />
        </Animated.View> */}
      </CenterContainer>
      <Spacer gap={50} />
    </Layout>
  );
};
