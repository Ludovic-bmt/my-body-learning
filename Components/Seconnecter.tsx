import React from "react";
import { BoutonApple, BoutonFacebook, BoutonGoogle, ContainerEmail, ImageApple, ImageArroba, ImageFacebook, ImageGoogle, ImageLogo, ImageTel, LabelApple, LabelFacebook, LabelGoogle, Ligne1, Ligne2, Numero, Overlap, Overlap2, Overlap3, Overlap4, OverlapGroup, Phone, PhoneContainer, TextLabel, TextTitle, TextWrapper, TextWrapper2, TextWrapper3 } from "../Style/Seconnecter.style";


export default function Seconnecter() {
  return (
    <Phone>
      <PhoneContainer>
        <TextWrapper>Vous n’avez pas de compte ?</TextWrapper>
        <TextWrapper2>Rejoignez-nous !</TextWrapper2>
        <ContainerEmail>
          <OverlapGroup>
            <TextWrapper3>Se connecter par mail</TextWrapper3>
            <ImageArroba source={require("../assets/arroba.png")}></ImageArroba>
          </OverlapGroup>
        </ContainerEmail>
        <Overlap>
          <Numero>
            <OverlapGroup>
              <TextLabel>Se connecter avec son n°</TextLabel>
            </OverlapGroup>
          </Numero>
          <ImageTel source={require("../assets/telephone.png")}></ImageTel>
        </Overlap>
        <BoutonGoogle>
          <Overlap2>
            <LabelGoogle>Connexion avec Google</LabelGoogle>
            <ImageGoogle source={require("../assets/google.png")}></ImageGoogle>
          </Overlap2>
        </BoutonGoogle>
        <BoutonFacebook>
          <Overlap3>
            <LabelFacebook>Connexion avec Facebook</LabelFacebook>
            <ImageFacebook
              source={require("../assets/facebook.png")}
            ></ImageFacebook>
          </Overlap3>
        </BoutonFacebook>
        <BoutonApple>
          <Overlap4>
            <LabelApple>Connexion avec Apple</LabelApple>
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
