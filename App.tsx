import { StyleSheet, Text, View } from 'react-native';
  import {
    useFonts as useInter,
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
  } from "@expo-google-fonts/inter";

import Authentification from './Components/Authentification';
import ConfirmationEmail from './Components/ConfirmationEmail';
import EmailValider from './Components/EmailValider';
import InscriptionEmail from './Components/InscriptionEmail';
import InscriptionEmail2 from './Components/InscriptionEmail2';
import Inscription from './Components/Inscription';
import Message1 from './Components/Message1';
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
      {/* <Authentification></Authentification> */}
      {/* <ConfirmationEmail></ConfirmationEmail> */}
      {/* <EmailValider></EmailValider> */}
      {/* <InscriptionEmail></InscriptionEmail> */}
      {/* <InscriptionEmail2></InscriptionEmail2> */}
      {/* <Inscription></Inscription> */}
      <Message1></Message1>
      {/* <Message></Message> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: "100%",
height: "100%",


  
  },
});
