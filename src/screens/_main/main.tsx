import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';

import { CustomToast } from '@components/atoms/custom-toast';
import { GlobalLoading, globalLoadingRef } from '@components/organisms/global-loading';
import { GlobalMessage, globalMessageRef } from '@components/organisms/global-message';

import { RootNavigator } from '@navigation/navigation.root';

import { persistor, store } from '@services/store';

import { LIGHT_THEME } from '@theme/colors';
import { NativeModules, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const hideSplashScreen = () => {
  SplashScreen.hide();
};
if (__DEV__ && Platform.OS === 'ios') {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

export const Main = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer onReady={hideSplashScreen}>
            <SafeAreaProvider>
              <ThemeProvider theme={LIGHT_THEME}>
                <BottomSheetModalProvider>
                  <RootNavigator />
                  <GlobalLoading ref={globalLoadingRef} />
                  <GlobalMessage ref={globalMessageRef} />
                </BottomSheetModalProvider>
                <CustomToast />
              </ThemeProvider>
            </SafeAreaProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};
