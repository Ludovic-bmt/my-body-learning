import React from "react";
import { BoutonApple, BoutonFacebook, BoutonGoogle, ContainerEmail, ImageApple, ImageArroba, ImageFacebook, ImageGoogle, ImageLogo, ImageTel, LabelApple, LabelFacebook, LabelGoogle, Ligne1, Ligne2, Numero, Overlap, Overlap2, Overlap3, Overlap4, OverlapGroup, Phone, PhoneContainer, TextLabel, TextTitle, TextWrapper, TextWrapper2, TextWrapper3, Inscrip } from "../Style/Seconnecter.style";


export default function Seconnecter() {
  return (
    <Phone>
      <PhoneContainer>
        <TextWrapper>Vous n’avez pas de compte ?</TextWrapper>
        <TextWrapper2>Rejoignez-nous !</TextWrapper2>
        <ContainerEmail>
          <OverlapGroup>
            <Inscrip to="/InscriptionEmail">
              <TextWrapper3>Se connecter par mail</TextWrapper3>
            </Inscrip>
            <ImageArroba source={require("../assets/arroba.png")}></ImageArroba>
          </OverlapGroup>
        </ContainerEmail>
        <Overlap>
          <Numero>
            <OverlapGroup>
              <Inscrip to="/Inscription">
                <TextLabel>Se connecter avec son n°</TextLabel>
              </Inscrip>
            </OverlapGroup>
          </Numero>
          <ImageTel source={require("../assets/telephone.png")}></ImageTel>
        </Overlap>
        <BoutonGoogle>
          <Overlap2>

            <Inscrip to="/Inscription">
              <LabelGoogle>Connexion avec Google</LabelGoogle>
            </Inscrip>
            <ImageGoogle source={require("../assets/google.png")}></ImageGoogle>
          </Overlap2>
        </BoutonGoogle>
        <BoutonFacebook>
          <Overlap3>
            <Inscrip to="/Inscription">
              <LabelFacebook>Connexion avec Facebook</LabelFacebook>
            </Inscrip>
            <ImageFacebook
              source={require("../assets/facebook.png")}
            ></ImageFacebook>
          </Overlap3>
        </BoutonFacebook>
        <BoutonApple>
          <Overlap4>
            <Inscrip to="/Inscription">
              <LabelApple>Connexion avec Apple</LabelApple>
            </Inscrip>
            <ImageApple source={require("../assets/Apple.png")}></ImageApple>
          </Overlap4>
        </BoutonApple>
        <Ligne1 source={require("../assets/ligne.svg")}></Ligne1>
        <Ligne2 source={require("../assets/ligne.svg")}></Ligne2>
        <ImageLogo source={require("../assets/logoLearning.png")}></ImageLogo>
        <TextTitle>Coaching, Tutoring, E-Learning</TextTitle>
      </PhoneContainer>
    </Phone>
  );
};
