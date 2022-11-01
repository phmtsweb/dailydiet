import styled, { css } from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xl};
    color: ${theme.colors.gray1};
    line-height: 23.4px;
    margin-bottom: 8px;
    margin-top: 20px;
  `};
`;