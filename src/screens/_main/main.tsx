import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';

import { GlobalLoading, globalLoadingRef } from '@components/organisms/global-loading';
import { GlobalMessage, globalMessageRef } from '@components/organisms/global-message';

import { RootNavigator } from '@navigation/navigation.root';

import { persistor, store } from '@services/store';

import { LIGHT_THEME } from '@theme/colors';
import { NativeModules, Platform } from 'react-native';

if (__DEV__ && Platform.OS === 'ios') {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

export const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <ThemeProvider theme={LIGHT_THEME}>
              <RootNavigator />
              <GlobalLoading ref={globalLoadingRef} />
              <GlobalMessage ref={globalMessageRef} />
            </ThemeProvider>
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
