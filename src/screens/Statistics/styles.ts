import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray7};
`;

export const Content = styled.ScrollView`
  flex: 1;
  position: relative;
  top: -24px;
  background-color: ${({theme}) => theme.colors.gray7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px 24px 0;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.md};
    color: ${theme.colors.gray1};
    line-height: 18.2px;
    text-align: center;
    margin: 8px 0 24px;
  `};
`;

export const BoxInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.gray6};
  border-radius: 6px;
  margin-bottom: 12px;
  padding: 16px; 
`;

export const BoxMainNumber = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize['2xl']};
    color: ${theme.colors.gray1};
    line-height: 31.2px;
    margin-bottom: 8px;
  `};
`;

export const BoxInfoText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md};
    color: ${theme.colors.gray2};
    line-height: 18.2px;
    text-align: center;
  `};
`;

export const DietContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
type DietBoxProps = {
  variant: 'win'  | 'lose';
};

export const DietBox = styled.View<DietBoxProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, variant}) => variant === 'win' ? theme.colors.greenLight : theme.colors.redLight};
  border-radius: 6px;
  padding: 16px; 
`;

export const GapView = styled.View`
  width: 12px;
  background-color: transparent;
`;