import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';

import {
  useFonts as useInter,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import Accueil from './Components/Accueil';
import Inscription from './Components/Inscription';
import InscriptionEmail from './Components/InscriptionEmail';
import EmailValider from './Components/EmailValider';
import ConfirmationEmail from './Components/ConfirmationEmail';
import Seconnecter from './Components/Seconnecter';




export default function App() {
  const interReady = useInter({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
  });
  < NativeRouter >

    <View style={styles.container}>

      <Routes>

        <Route path="/" element={<Accueil />} />

        <Route path="Inscription" element={<Inscription />} />

        <Route path="InscriptionEmail" element={<InscriptionEmail />} />

        <Route path="EmailValider" element={<EmailValider />} />

        <Route path="ConfirmationEmail" element={<ConfirmationEmail />} />

        <Route path="Seconnecter" element={<Seconnecter />} />



      </Routes>

    </View>

  </NativeRouter >
    ;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",



  },
});
