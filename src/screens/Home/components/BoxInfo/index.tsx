import { TouchableOpacityProps } from 'react-native';
import { formatPercentage } from '../../../../utils/formatPercentage';
import { Container, Icon, InfoNumber, MainNumber } from './styles';


type BoxInfoProps = TouchableOpacityProps & {
  mainNumber: number;
}

export function BoxInfo({mainNumber, ...rest}: BoxInfoProps) {


  const variant = mainNumber > 0.7 ? 'win' : 'lose';
  return (
    <Container variant={variant} {...rest}>
      <MainNumber>{formatPercentage(mainNumber)}</MainNumber>
      <InfoNumber>das refeições dentro da dieta</InfoNumber>
      <Icon variant={variant}/>
    </Container>
  );
}