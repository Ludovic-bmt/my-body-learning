import React from "react";
import { BoutonConfimer, ContainerRetour, ImageFleche, InputEmail, Overlap, Phone, PhoneContainer, TextConfirmer, TextInfo, TextRetour, TextTitle, Inscrip } from "../Style/InscriptionEmail.Style";


export default function InscriptionEmail() {
  return (
    <Phone>
      <PhoneContainer>
        <TextTitle>S’INSCRIRE</TextTitle>
        <InputEmail placeholder="Entrez votre Email "></InputEmail>
        <TextInfo>
          Un lien pour vous connecter a votre ancien compte, va vous être envoyé
          par e-mail.
        </TextInfo>
        <ContainerRetour>
          <ImageFleche source={require("../assets/fleche.svg")}></ImageFleche>
          <TextRetour>Retour</TextRetour>
        </ContainerRetour>
        <BoutonConfimer>
          <Overlap>
            <Inscrip to="/ConfirmationEmail">
              <TextConfirmer>Confirmer</TextConfirmer>
            </Inscrip>
          </Overlap>
        </BoutonConfimer>
      </PhoneContainer>
    </Phone>
  );
};
