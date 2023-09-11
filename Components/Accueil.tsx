import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import MenuBar from "./MenuBar";
import NavigBar from "./NavigBar";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../Style/Theme.Style";
import { CentredContainer, ImageProject, ProjectContainer, ScreenContainer } from "../Style/Accueil.Style";
import { useStore } from "@nanostores/react";
import { InfoWelcomePage, updateInfoWelcomePage } from "../Store/WelcomeScreen.Store";
import { useEffect } from "react";

export default function Accueil() {

  const { numberOfDonator, sumOfInvestment, personnalInvestment} = useStore(InfoWelcomePage);

  useEffect(() => {
    updateInfoWelcomePage();
  });
 
  return (
    <ScreenContainer>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "blue",
        }}
      >
        <View style={{ flex: 1 }} />
        <ImageBackground
          source={require("../../assets/miniLogo.png")}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <MenuBar />
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>MERCI A VOUS</Text>
        <ScrollView horizontal contentContainerStyle={{ paddingRight: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{ fontSize: 60, color: "lightblue", paddingLeft: "90px" }}
            >
              {numberOfDonator}
            </Text>
            <Text style={{ fontSize: 30, color: "lightblue" }}>{sumOfInvestment}</Text>
            <Text style={{ fontSize: 30, color: "lightblue" }}>{personnalInvestment}</Text>
          </View>
        </ScrollView>
        <Text style={{ textAlign: "center" }}>Donateurs(trices)</Text>
      </View>
      <CentredContainer>
        <ProjectContainer>
          <Text>Découvrez notre sélection de projet    </Text>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
            >
              <FontAwesomeIcon icon={faHeart} size={24} color="white" />
            </TouchableOpacity>
            <ImageProject source={require("../../assets/projet_exemple.png")} />
            <LinearGradient
              colors={[theme.colors.backgroundblue, "white"]}
              start={{ x: 0.5, y: 0.7 }}
            >
              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  MY BODY ----------
                </Text>
                <Text>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 16 }}>Chiffre 1</Text>
                  <Text style={{ fontSize: 16 }}>Chiffre 2</Text>
                  <Text style={{ fontSize: 16 }}>Chiffre 3</Text>
                </View>
              </View>
            </LinearGradient>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Titre de l'image
              </Text>
              <View style={{ alignItems: "center", marginTop: 10 }}>
                {/* <Image
                  source={{ uri: "https://example.com/image.png" }}
                  style={{ width: 200, height: 200 }}
                /> */}
              </View>
            </View>
          </View>
        </ProjectContainer>
      </CentredContainer>
      
      <NavigBar></NavigBar>
    </ScreenContainer>
  );
}
