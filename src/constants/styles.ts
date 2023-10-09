import { css } from 'styled-components/native';

export const Z_INDEX = {
  normal: 0,
  hidden: -1,
  visible: 1,
  alwaysTop: 20,
} as const;

export const INDENT = {
  big: 20,
  normal: 16,
  small: 14,
  minimum: 10,
} as const;

export const HIT_SLOP_BIG = { left: 15, right: 15, bottom: 15, top: 15 } as const;
export const HIT_SLOP_REGULAR = { left: 10, right: 10, bottom: 10, top: 10 } as const;
export const HIT_SLOP_SMALL = { bottom: 5, top: 5, left: 5, right: 5 } as const;

export const ACTIVE_OPACITY = 0.7;

type TCorner = 'bottom' | 'top' | 'left' | 'right';
export const borderBottom = (corner: TCorner, color: string, width?: number) => {
  const border = `
    border-${corner}-color: ${color};
    border-${corner}-width: ${width || 1}px;
    border-${corner}-style: solid;
  `;

  return css`
    ${border}
  `;
};
