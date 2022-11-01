import { MainNumber } from '../Home/components/BoxInfo/styles';
import { Header } from './components/Header';
import { BoxInfo, BoxInfoText, Container, Content, DietBox, DietContainer, GapView, Title } from './styles';

export function Statistics() {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Estatísticas gerais</Title>
        <BoxInfo>
          <MainNumber>22</MainNumber>
          <BoxInfoText>melhor sequência de pratos dentro da dieta</BoxInfoText>
        </BoxInfo>
        <BoxInfo>
          <MainNumber>109</MainNumber>
          <BoxInfoText>refeições registradas</BoxInfoText>
        </BoxInfo>
        <DietContainer>
          <DietBox variant='win'>
            <MainNumber>99</MainNumber>
            <BoxInfoText>refeições dentro da dieta</BoxInfoText>
          </DietBox>
          <GapView />
          <DietBox variant='lose'>
            <MainNumber>10</MainNumber>
            <BoxInfoText>refeições fora da dieta</BoxInfoText>
          </DietBox>
        </DietContainer>
      </Content>
    </Container>
  );
}