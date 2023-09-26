import React from "react";
import { BoutonEmail, BoutonNum, ImageArroba, ImageLigne, ImageTel, LogoImage, OverlapGroup, OverlapGroupWrapper, Phone, PhoneContainer, TextLabel, TextLabel2, TextTitle, TextWrapper, TextWrapper2 } from "../Style/InscriptionEmail.Style";



export default function InscriptionEmail() {
  return (
    <Phone>
      <PhoneContainer>
        <TextWrapper>Vous avez déjà un compte ?</TextWrapper>
        <TextWrapper2>Se connecter</TextWrapper2>
        <BoutonEmail>
          <OverlapGroupWrapper>
            <OverlapGroup>
              <TextLabel>S’inscrire par mail</TextLabel>
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
