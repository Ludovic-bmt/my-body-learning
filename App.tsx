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
import Inscription2 from './Components/inscription2';
import ConfirmationEmail from './Components/ConfirmationEmail';
import Message from './message/Message';

export default function App() {
     const interReady = useInter({
       Inter_400Regular,
       Inter_700Bold,
       Inter_600SemiBold,
       Inter_500Medium,
     });
  return (
    <View style={styles.container}>
      {/* <Inscription></Inscription> */}
      {/* <AboutUsScreen></AboutUsScreen> */}
      {/* <AllLogin></AllLogin> */}
      {/* <Inscription2></Inscription2> */}
      {/* <StatusBar style="auto" />   */}
      {/* <ConfirmationEmail></ConfirmationEmail> */}
      <Message></Message>
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
