export const COLORS = {
  mono: {
    white: '#FFFFFF',
    black: '#132239',
  },
};

export type ThemeType = typeof LIGHT_THEME;

export const LIGHT_THEME = {
  background: {
    primary: COLORS.mono.white,
    secondary: COLORS.mono.black,
  },
};

export const DARK_THEME: ThemeType = LIGHT_THEME;
