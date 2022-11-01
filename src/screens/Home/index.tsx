import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { AtTheEndList } from './components/AtTheEndList';
import { BoxInfo } from './components/BoxInfo';
import { DateInfo } from './components/DateInfo';
import { Header } from './components/Header';
import { AddIcon, AddMealButton, AddMealButtonText, Container, MealTitle, Wrapper } from './styles';

export function Home() {

  const navigation = useNavigation();

  function handleNavigateStatistics() {
    navigation.navigate('statistics');
  }
  return (
    <Wrapper style={{flex: 1}}>
      <Container>
        <Header />
        <BoxInfo mainNumber={0.9086} onPress={handleNavigateStatistics}/>
        <MealTitle>Refeições</MealTitle>
        <AddMealButton>
          <AddIcon />
          <AddMealButtonText>Nova refeição</AddMealButtonText>
        </AddMealButton>
        <FlatList 
          data={[
            {
              id: '1',
              title: '30.10.2022',
              meal: [
                {
                  id: '1',
                  hour: '08:00',
                  name: 'Coxinha',
                  inDiet: false,
                },
                {
                  id: '2',
                  hour: '12:00',
                  name: 'Yakissoba',
                  inDiet: true,
                },
                {
                  id: '3',
                  hour: '12:30',
                  name: 'Chocolate',
                  inDiet: false,
                },
                {
                  id: '4',
                  hour: '15:00',
                  name: 'Lanche',
                  inDiet: true,
                },
              ]
            },
            {
              id: '2',
              title: '30.10.2022',
              meal: [
                {
                  id: '1',
                  hour: '08:00',
                  name: 'Coxinha',
                  inDiet: false,
                },
                {
                  id: '2',
                  hour: '12:00',
                  name: 'Yakissoba',
                  inDiet: true,
                },
                {
                  id: '3',
                  hour: '12:30',
                  name: 'Chocolate',
                  inDiet: false,
                },
                {
                  id: '4',
                  hour: '15:00',
                  name: 'Lanche',
                  inDiet: true,
                },
              ]
            },
          ]}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <DateInfo title={item.title} meal={item.meal}/>}
          contentContainerStyle={{ paddingBottom: 60 }}
        />
        
      </Container>
      <AtTheEndList />
    </Wrapper>
  );
}