import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistCombineReducers, persistStore } from 'redux-persist';

import { appReducer } from './app';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const reducer = persistCombineReducers(config, {
  app: appReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type TStore = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
