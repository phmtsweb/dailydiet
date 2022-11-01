import { ArrowLeft } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type InfoProps = {
  variant: 'win' | 'lose';
}

export const Container = styled.View<InfoProps>`
  padding: 56px 24px;
  width: 100%;
  align-items: center;
  background-color: ${({theme, variant}) => variant === 'win' ? theme.colors.greenLight : theme.colors.redLight};
  height: 200px;
`;

export const BackButton = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const BackIcon = styled(ArrowLeft).attrs<InfoProps>(({theme, variant}) => ({
  color: variant === 'win' ? theme.colors.greenDark : theme.colors.redDark,
  size: 24
}))<InfoProps>``;

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
