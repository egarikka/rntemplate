import { createSlice } from '@reduxjs/toolkit';

import { appInitialState } from './app.constants';

export const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {},
});

const { actions, reducer } = appSlice;
export const {} = actions;
export { reducer as appReducer };
