export const FONTS = {
  weight: {
    [400]: 400,
    [500]: 500,
    [600]: 600,
    [700]: 700,
    [800]: 800,
  },
  size: {
    [7]: '7px',
    [11]: '11px',
    [12]: '12px',
    [13]: '13px',
    [14]: '14px',
    [15]: '15px',
    [16]: '16px',
    [17]: '17px',
    [18]: '18px',
    [20]: '20px',
    [22]: '22px',
    [24]: '24px',
    [28]: '28px',
    [32]: '32px',
    [40]: '40px',
  },
  family: {
    regular: 'Sans',
  },
} as const;

export type TFontSizes = keyof typeof FONTS.size;
export type TFontWeights = keyof typeof FONTS.weight;
export type TFontFamilies = keyof typeof FONTS.family;
