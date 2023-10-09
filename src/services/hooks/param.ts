import { Route, useRoute } from '@react-navigation/native';

export const useParam = <T extends object | undefined = object | undefined>() => {
  const { params } = useRoute<Route<string, T>>();
  return params;
};
