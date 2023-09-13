import React, { useState } from "react";
import {
  ButtonContainer,
  CentredContainer,
  LabelButtonMarron,

  // LinkContainer,
  ScreenContainer,
  WhiteButton,
  TitleText,
  TextInputContainer,
  Input,
  TextInformation,
} from "../Style/Inscription2Screen.style";

export default function Inscription2() {
  const [email, setEmail] = useState("");
  const handleEmail = (e: string) => {
    setEmail(e);
  };
  return (
    <ScreenContainer>
      <CentredContainer>
        <TitleText>S'INSCRIRE</TitleText>
        <TextInputContainer>
          <Input
            placeholder="Entreez votre Email"
            keyboardType="default"
            value={email}
            onChangeText={handleEmail}
          />
          <TextInformation style={{ fontSize: 16 }}>
            Un lien pour vous connecter à votre ancien compte, va vous être
            envoyer par e-mail
          </TextInformation>
        </TextInputContainer>
        <ButtonContainer>
          <WhiteButton>
            <LabelButtonMarron>confirmer</LabelButtonMarron>
          </WhiteButton>
        </ButtonContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
