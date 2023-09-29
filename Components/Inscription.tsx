import React from "react";
import { BoutonEmail, BoutonNum, ImageArroba, ImageLigne, ImageTel, LogoImage, OverlapGroup, OverlapGroupWrapper, Phone, PhoneContainer, TextLabel, TextLabel2, TextTitle, TextWrapper, TextWrapper2, Inscrip } from "../Style/Inscription.Style";
import { Link } from "react-router-native";


export default function Inscription() {
  return (
    <Phone>
      <PhoneContainer>
        <TextWrapper>Vous avez déjà un compte ?</TextWrapper>
        <TextWrapper2>Se connecter</TextWrapper2>
        <BoutonEmail>
          <OverlapGroupWrapper>
            <OverlapGroup>
              <Inscrip to="/InscriptionEmail">
                <TextLabel>S’inscrire par mail</TextLabel>
              </Inscrip>
            </OverlapGroup>
          </OverlapGroupWrapper>
          <ImageArroba source={require("../assets/arroba.png")}></ImageArroba>
        </BoutonEmail>
        <BoutonNum>
          <OverlapGroupWrapper>
            <OverlapGroup>
              <TextLabel2>S’inscrire avec son n°</TextLabel2>
            </OverlapGroup>
          </OverlapGroupWrapper>
          <ImageTel source={require("../assets/telephone.png")}></ImageTel>
        </BoutonNum>
        <ImageLigne source={require("../assets/ligne.svg")}></ImageLigne>
        <LogoImage source={require("../assets/logoLearning.png")}></LogoImage>
        <TextTitle>Coaching, Tutoring, E-Learning</TextTitle>
      </PhoneContainer>
    </Phone>
  );
};
