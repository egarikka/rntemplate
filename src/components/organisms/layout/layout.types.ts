import { ReactNode } from 'react';

import { ICustomHeaderProps } from '@components/atoms/custom-header';

export enum EElasticScrollPosition {
  top = 'top',
  bottom = 'bottom',
}

export interface ILayoutProps
  extends IStyledContainerProps,
    IElasticScrollViewProps,
    ICustomHeaderProps {
  isWithScroll?: boolean;
  isScrollVisible?: boolean;
  isWithVerticalIndents?: boolean;
  bgColor?: string;
  headerChildren?: ReactNode;
  isWithoutHeader?: boolean;
}

export interface IStyledContainerProps {
  isWithoutMargin?: boolean;
}

export interface IElasticScrollViewProps {
  elasticScrollColor?: string;
  elasticScrollPosition?: EElasticScrollPosition;
}

export type TLayoutProps = { children: Element; bgColor?: string };
