import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  padding: 14px 16px 14px 12px;
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.colors.gray5};
  align-items: center;
  margin-bottom: 8px;
`;

export const HourText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm};
    line-height: 15.6px;
    color: ${theme.colors.gray1};
  `};
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({theme}) => theme.colors.gray4};
  margin: 0 12px; 
`;

export const MealName = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.lg};
    line-height: 20.8px;
    color: ${theme.colors.gray2};
  `};
`;

type MealTagProps = {
  inDiet: boolean;
};

export const MealTag = styled.View<MealTagProps>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({theme, inDiet}) => inDiet ? theme.colors.greenMid :  theme.colors.redMid};
  margin-left: auto;
`;