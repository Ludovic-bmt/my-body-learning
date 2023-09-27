import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts as useInter,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import Authentification from './Components/Seconnecter';
import ConfirmationEmail from './Components/ConfirmationEmail';
import EmailValider from './Components/EmailValider';
import InscriptionEmail from './Components/Inscription';
import InscriptionEmail2 from './Components/InscriptionEmail';
import Inscription from './Components/Accueil';
// import Message1 from './Components/Message1';
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
      {/* <Accueil></Accueil> */}

      {/* <Message></Message> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",



  },
});
