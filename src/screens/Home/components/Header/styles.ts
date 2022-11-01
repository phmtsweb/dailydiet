import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

export const LogoImage = styled.Image`
  max-width: 85px;
  max-height: 40px;
`;

export const Avatar = styled.Image`
  border-radius: 999px;
  width: 40px;
  height: 40px;
  border: 2px solid ${({theme}) => theme.colors.gray2};
`;