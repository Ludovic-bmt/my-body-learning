import React from "react";
import { BoutonContinuer, FlexContainer, ImageArroba, ImageEnvoye, Overlap, OverlapGroup, Phone, PhoneContainer, TextConfirmation, TextEmail, TextLabel, Textpara, Textpara2 } from "../Style/ConfirmationEmail.Style";


export default function ConfirmationEmail () {
  return (
    <Phone>
      <PhoneContainer>
        <Overlap>
          <FlexContainer>
            <TextConfirmation>Confirmation</TextConfirmation>
            <TextEmail>e-mail</TextEmail>
          </FlexContainer>
          <ImageEnvoye source={require("../assets/envoye.png")}></ImageEnvoye>
        </Overlap>
        <Textpara>
          Si vous n’avez pas reçu d’email, consultez vos spams, ou reessayez.
        </Textpara>
        <Textpara2>Utiliser un autre moyen de connexion.</Textpara2>
        <BoutonContinuer>
          <OverlapGroup>
            <TextLabel>Utiliser un autre e-mail</TextLabel>
            <ImageArroba source={require("../assets/arroba.png")}></ImageArroba>
          </OverlapGroup>
        </BoutonContinuer>
      </PhoneContainer>
    </Phone>
  );
};
