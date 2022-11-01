import { FlatList } from 'react-native';
import { MealItemList } from '../MealItemList';
import { Container, Title } from './styles';

type DateInfoProps = {
  title: string;
  meal: {
    id: string;
    hour: string;
    name: string;
    inDiet: boolean;
  }[];
}

export function DateInfo({title, meal}: DateInfoProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <FlatList
        data={meal}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <MealItemList id={item.id} hour={item.hour} name={item.name} inDiet={item.inDiet}/>} 
      />
    </Container>
  );
}