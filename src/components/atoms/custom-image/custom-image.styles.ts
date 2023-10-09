import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

import { IStyledCustomImageProps } from './custom-image.typings';

export const StyledCustomImage = {
  Image: styled(FastImage)<IStyledCustomImageProps>`
    align-items: center;
    justify-content: center;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: ${({ borderRadius }) => borderRadius}px;
    ${({ styles }) => styles}
  `,
};
