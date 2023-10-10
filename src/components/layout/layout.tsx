import React from 'react';

import { CustomHeader } from '@components/custom-header';
import { CustomStatusBar } from '@components/custom-status-bar';

import { isIOS } from '@constants/device';

import { EElasticScrollPosition, ILayoutProps } from './layout.types';

import { contentContainerStyle, StyledLayout as Styled } from './layout.styles';

export const Layout: React.FC<ILayoutProps> = (props) => {
  const {
    children,
    bgColor,
    isWithoutMargin,
    isWithScroll,
    elasticScrollColor,
    elasticScrollPosition = EElasticScrollPosition.top,
    isScrollVisible = false,
    isWithVerticalIndents,
    headerChildren,
    isWithoutHeader,
    ...headerProps
  } = props;

  const container = (
    <Styled.Container isWithoutMargin={isWithoutMargin}>{children}</Styled.Container>
  );

  return (
    <>
      <CustomStatusBar />
      {!isWithoutHeader && <CustomHeader {...headerProps}>{headerChildren}</CustomHeader>}
      <Styled.Layout bgColor={bgColor}>
        {isWithScroll ? (
          <Styled.ScrollContainer
            contentContainerStyle={contentContainerStyle(isWithVerticalIndents)}
            showsVerticalScrollIndicator={isScrollVisible}>
            {isIOS && elasticScrollColor && (
              <Styled.ElasticScrollView
                elasticScrollColor={elasticScrollColor}
                elasticScrollPosition={elasticScrollPosition}
              />
            )}
            {container}
          </Styled.ScrollContainer>
        ) : (
          <Styled.StaticContainer>{container}</Styled.StaticContainer>
        )}
      </Styled.Layout>
    </>
  );
};
