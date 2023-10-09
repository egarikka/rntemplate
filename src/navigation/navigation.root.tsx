import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens/home';

import { WITHOUT_HEADER } from './navigation.constants';
import { APP_ROUTES } from '@constants/routes';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={WITHOUT_HEADER}>
      <RootStack.Screen name={APP_ROUTES.home.main} component={Home} />
    </RootStack.Navigator>
  );
};
