import React from "react";
import { BoutonContinuer, LogoImage, Overlap, OverlapGroup, OverlapWrapper, Phone, PhoneContainer, TextLabel, TextTitle, Textlabel2 } from "../Style/Inscription.Style";

export default function Inscription() {
  return (
    <Phone>
      <PhoneContainer>
        <BoutonContinuer>
          <OverlapGroup>
            <TextLabel>S’inscrire</TextLabel>
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
