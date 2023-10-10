import React, { useImperativeHandle, useState } from 'react';
import { StatusBar, TouchableWithoutFeedback } from 'react-native';

import { IGlobalMessage, IGlobalMessageRef } from './global-message.types';

import { GlobalMessageStyles as Styled } from './global-message.styles';

export const globalMessageRef = React.createRef<any>();

export const globalMessage = {
  show: (title: string, content: string) => {
    globalMessageRef?.current?.show(title, content);
  },
};

export const GlobalMessage = React.forwardRef<IGlobalMessageRef, IGlobalMessage>(
  ({ style }, ref) => {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useImperativeHandle(ref, () => ({ show }));

    const show = (newTitle: string, newContent: string) => {
      setVisible(true);
      setTitle(newTitle);
      setContent(newContent);
    };

    const onPressAction = () => setVisible(false);

    return (
      <Styled.Modal transparent visible={visible} animationType={'none'}>
        <StatusBar backgroundColor={'rgba(0,0,0,0.6)'} barStyle={'light-content'} />
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <Styled.Wrapper style={style}>
            <Styled.BoxContent>
              <Styled.Content>
                <Styled.TitleWrapper>
                  <Styled.Text weight={700} fontSize={17} color={'#000'}>
                    {title}
                  </Styled.Text>
                </Styled.TitleWrapper>
                <Styled.Message>
                  <Styled.Text fontSize={15} color={'#000'}>
                    {content}
                  </Styled.Text>
                </Styled.Message>
                <Styled.Button text={'Ok'} onPress={onPressAction} />
              </Styled.Content>
            </Styled.BoxContent>
          </Styled.Wrapper>
        </TouchableWithoutFeedback>
      </Styled.Modal>
    );
  },
);
