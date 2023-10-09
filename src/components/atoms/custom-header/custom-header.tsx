import React, { FC } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '@components/atoms/icon';

import { ICustomHeaderProps } from './custom-header.types';

import { StyledCustomHeader as Styled } from './custom-header.styles';

export const CustomHeader: FC<ICustomHeaderProps> = (props) => {
  const {
    title,
    titleColor,
    style,
    iconType,
    iconColor,
    actions,
    children,
    isWithBackArrow,
    isWithoutIcon,
    isBackArrowWithSpace,
  } = props;

  const { goBack, canGoBack } = useNavigation();

  const navigateBack = () => {
    Keyboard.dismiss();
    setTimeout(goBack, 300);
    return;
  };

  return (
    <Styled.CustomHeader>
      <Styled.Wrapper style={style}>
        <Styled.Main>
          {isWithBackArrow && canGoBack() && <Icon type="back" onPress={navigateBack} />}
          {iconType && !isWithoutIcon && <Icon type={iconType} color={iconColor} />}
          {title && (
            <Styled.Title
              isTitle
              color={titleColor}
              isBackArrowWithSpace={isBackArrowWithSpace}
              isWithIcon={!!iconType}>
              {title}
            </Styled.Title>
          )}
        </Styled.Main>
        {actions}
      </Styled.Wrapper>
      {children && <Styled.Children>{children}</Styled.Children>}
    </Styled.CustomHeader>
  );
};
