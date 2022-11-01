import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type BoxInfoProps = {
  variant: 'win' | 'lose';
}

export const Container = styled(TouchableOpacity)<BoxInfoProps>`
  width: 100%;
  padding: 20px 16px;
  background-color: ${({theme, variant}) => variant === 'win' ? theme.colors.greenLight : theme.colors.redLight};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
`;


export const MainNumber = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize['3xl']};
    color: ${theme.colors.gray1};
    line-height: 41.6px;
  `};
`;

export const InfoNumber = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md};
    color: ${theme.colors.gray2};
    line-height: 18.2px;
  `};
`;

export const Icon = styled(ArrowUpRight).attrs<BoxInfoProps>(({theme, variant}) => ({
  color: variant === 'win' ? theme.colors.greenDark :  theme.colors.redDark,
  size: 24,
}))<BoxInfoProps>`
  position: absolute;
  top: 8px;
  right: 8px;
`;

