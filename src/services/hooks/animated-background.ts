import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

//TODO import { THEME_LIGHT } from '@theme/colors';

//TODO type TBackground = keyof typeof THEME.background;
//TODO type TBackground = keyof typeof THEME_LIGHT.background;

//TODO type: TBackground = 'primary'
export const useThemedBackgroundColor = (isDark?: boolean) => {
  const isDarkTheme = isDark; //TODO get from store

  const progress = useDerivedValue(() => withTiming(isDarkTheme ? 1 : 0), [isDarkTheme]);

  const backgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [
        '#FFF', //TODO THEME_LIGHT.background[type],
        '#000', //TODO THEME_DARK.background[type],
      ],
    );

    return {
      backgroundColor,
    };
  });

  return { backgroundStyle };
};
