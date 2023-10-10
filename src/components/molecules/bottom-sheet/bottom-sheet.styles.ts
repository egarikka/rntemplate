import styled from 'styled-components/native';

export const StyledBottomSheet = {
  Content: styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background.primary};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `,
  HandleContainer: styled.View`
    background-color: ${({ theme }) => theme.background.primary};
    height: 20px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `,
  Handle: styled.View`
    background-color: rgba(19, 34, 57, 0.2);
    height: 5px;
    width: 36px;
    border-radius: 100px;
  `,
  Header: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 16px;
  `,
};
