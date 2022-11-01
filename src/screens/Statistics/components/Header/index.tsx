import { useNavigation } from '@react-navigation/native';
import { formatPercentage } from '../../../../utils/formatPercentage';
import { BackButton, BackIcon, Container, InfoNumber, MainNumber } from './styles';



export function Header() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.navigate('home');
  }
  return (
    <Container variant="win">
      <BackButton onPress={handleBack}>
        <BackIcon variant="win"/>
      </BackButton>
      <MainNumber>{formatPercentage(0.9086)}</MainNumber>
      <InfoNumber>das refeiçoes da dieta</InfoNumber>
    </Container>
  );
}