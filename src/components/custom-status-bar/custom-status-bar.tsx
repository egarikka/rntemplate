import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { ICustomStatusBar } from './custom-status-bar.types';

import { COLORS } from '@theme/colors';

export const CustomStatusBar: FC<ICustomStatusBar> = ({ background, ...props }) => {
  const barStyle = props.barStyle || 'dark-content';
  const bg = background || COLORS.white;

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={bg} {...props} barStyle={barStyle} />
    </SafeAreaView>
  );
};
