import { Plus } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  background-color: ${({theme}) => theme.colors.gray7};
`;

export const Container = styled.View`
  flex: 1;
  padding: 24px 24px 0;
  background-color: inherit;
`;

export const MealTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.lg};
    line-height: 20.8px;
    color: ${theme.colors.gray1};
    margin: 40px 0 8px; 
  `};
`;

export const AddMealButton = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 24px;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors.gray2};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const AddMealButtonText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.md};
    line-height: 18.2px;
    color: ${theme.colors.white};
    margin-left: 12px;
  `};
`;

export const AddIcon = styled(Plus).attrs(({theme}) => ({
  color: theme.colors.white,
  size: 18,
}))``;