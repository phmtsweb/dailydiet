import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const ContainerOpacity = styled(LinearGradient).attrs(({theme}) => ({
  colors: ['#ffffff55', theme.colors.gray7],
  location: [0.1, 0.5],
}))`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 72px;
  width: 100%;
`;