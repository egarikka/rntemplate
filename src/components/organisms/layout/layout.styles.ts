import { StyleProp, ViewStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

import { INDENT, Z_INDEX } from '@constants/styles';

import {
  EElasticScrollPosition,
  IElasticScrollViewProps,
  IStyledContainerProps,
  TLayoutProps,
} from './layout.types';

export const contentContainerStyle = (isWithVerticalIndents?: boolean): StyleProp<ViewStyle> => ({
  flexGrow: 1,
  paddingVertical: isWithVerticalIndents ? INDENT.big : 0,
});

const spacerHeight = 1000;

export const StyledLayout = {
  Layout: styled.SafeAreaView<TLayoutProps>`
    z-index: ${Z_INDEX.visible};
    flex: 1;
    background-color: ${({ bgColor }) => bgColor || 'transparent'};
  `,

  ScrollContainer: styled.ScrollView`
    flex: 1;
    flex-grow: 1;
  `,

  StaticContainer: styled.View`
    flex: 1;
  `,

  ElasticScrollView: styled.View<IElasticScrollViewProps>`
    background-color: ${({ elasticScrollColor }) => elasticScrollColor || '#FFF'};
    height: ${spacerHeight}px;
    position: absolute;
    left: 0;
    right: 0;

    ${({ elasticScrollPosition }) =>
      elasticScrollPosition === EElasticScrollPosition.top
        ? css`
            top: ${-spacerHeight}px;
          `
        : css`
            bottom: ${-spacerHeight}px;
          `}
  `,

  Container: styled.View<IStyledContainerProps>`
    flex: 1;
    margin-horizontal: ${({ isWithoutMargin }) => (isWithoutMargin ? 0 : INDENT.big)}px;
  `,
};
