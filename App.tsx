import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
  import {
    useFonts as useInter,
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
  } from "@expo-google-fonts/inter";
import Inscription from './Components/Inscription';
import VerificationScreen from './Components/VerificationScreen';
import AboutUsScreen from './Components/AboutUsScreen';
import AllLogin from './Components/AllLogin';

export default function App() {
     const interReady = useInter({
       Inter_400Regular,
       Inter_700Bold,
       Inter_600SemiBold,
       Inter_500Medium,
     });
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <Inscription></Inscription>
      {/* <VerificationScreen />
      <AboutUsScreen></AboutUsScreen>
      <AllLogin></AllLogin> */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width:'100%',height:'100%',
    flex: 1,
    backgroundColor: "#353745",
    alignItems: "center",
    justifyContent: "center",
  },
});
