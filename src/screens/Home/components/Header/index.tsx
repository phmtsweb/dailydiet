import logoImg from '../../../../assets/Logo.png';
import { Avatar, Container, LogoImage } from './styles';

export function Header() {
  return (
    <Container>
      <LogoImage source={logoImg}/>
      <Avatar source={{uri: 'https://github.com/phmtsweb.png'}}/>
    </Container>
  )
}