import React from "react";
import { BoutonContinuer, LogoImage, Overlap, OverlapGroup, OverlapWrapper, Phone, PhoneContainer, TextLabel, TextTitle, Textlabel2, Inscrip } from "..//Style/Accueil.Style";

export default function Accueil() {
  return (
    <Phone>
      <PhoneContainer>
        <BoutonContinuer>
          <OverlapGroup>
            <Inscrip to="/email">
              <TextLabel>S’inscrire</TextLabel>
            </Inscrip>
          </OverlapGroup>
        </BoutonContinuer>
        <OverlapWrapper>
          <Overlap>
            <Textlabel2>Se connecter</Textlabel2>
          </Overlap>
        </OverlapWrapper>
        <LogoImage source={require("../assets/logoLearning.png")}></LogoImage>
        <TextTitle>Coaching, Tutoring, E-Learning</TextTitle>
      </PhoneContainer>
    </Phone>
  );
};
