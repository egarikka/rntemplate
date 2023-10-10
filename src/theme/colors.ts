export const COLORS = {
  white: '#FFFFFF',
  black: '#132239',
  lightGrey: '#EDEDEE',
  grey: '#F3F4F5',
  mediumGrey: '#EDEDF0',
  darkGrey: '#5A6474',
  greyDarker: '#BCBCC0',
  danger: '#FD3E5B',
  blue: '#0064FE',
  placeholder: '#89909C',
  whiteGray: '#F8F8F9',
  dangerOpacity: 'rgba(253, 62, 91, 0.08)',
};

export type ThemeType = typeof LIGHT_THEME;

export const LIGHT_THEME = {
  background: {
    primary: COLORS.white,
    secondary: COLORS.black,
    mediumGrey: COLORS.mediumGrey,
    grey: COLORS.grey,
    danger: COLORS.danger,
    blue: COLORS.blue,
    whiteGray: COLORS.whiteGray,
    dangerOpacity: COLORS.dangerOpacity,
  },
  text: {
    secondary: COLORS.white,
    primary: COLORS.black,
    darkGrey: COLORS.darkGrey,
    disabled: COLORS.greyDarker,
    placeholder: COLORS.placeholder,
  },
  border: {
    lightGrey: COLORS.lightGrey,
  },
};

export const DARK_THEME: ThemeType = LIGHT_THEME;
