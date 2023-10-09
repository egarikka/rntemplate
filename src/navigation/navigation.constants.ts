import { TScreenOptions } from '@typings/common';

export const WITHOUT_HEADER: TScreenOptions = {
  headerShown: false,
};

export const WITHOUT_GESTURES: TScreenOptions = {
  gestureEnabled: false,
};

export const WITHOUT_GESTURES_AND_HEADER = {
  ...WITHOUT_GESTURES,
  ...WITHOUT_HEADER,
};
