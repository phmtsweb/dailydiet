import { Container, Divider, HourText, MealName, MealTag } from './styles';

type MealItemListProps = {
  id: string;
  hour: string;
  name: string;
  inDiet: boolean;
}

export function MealItemList({id, hour, name, inDiet}: MealItemListProps) {
  return (
    <Container>
      <HourText>{hour}</HourText>
      <Divider />
      <MealName>{name}</MealName>
      <MealTag inDiet={inDiet}/>
    </Container>
  );
}