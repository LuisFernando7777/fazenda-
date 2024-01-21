import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/cesta';
import mocks from "./src/mocks/Cesta";

import AppLoading from 'expo-app-loading';


export default function App() {
  const [fonteCarregada] = useFonts ({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada) {
    return <AppLoading />
  };

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mocks}/>
    </SafeAreaView>
  );
}