/* eslint-disable camelcase */
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import themes from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })
  return (
    <ThemeProvider theme={themes}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}