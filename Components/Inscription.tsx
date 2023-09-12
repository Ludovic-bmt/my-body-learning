

import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// import { useStore } from "@nanostores/react";
// import { LoginScreenStore, initLoginScreen } from "../Store/LoginScreen.Store";
// import { Outlet, useNavigate } from "react-router-native";


import React from 'react'
import {
  BlackButton,
  ButtonContainer,
  CentredContainer,
  CreateCompteLink,
  CreateCompteText,
  FbButton,
  GoogleButton,
  IconGoogleButton,
  IconWhiteButton,
  ImageBackground,
  LabelButtonBlack,
  LabelButtonMarron,
  LabelButtonWhite,
  Ligne,
  // LinkContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  MarronButton,
  MarronText,
  ScreenContainer,
  WhiteButton,
} from "../Style/inscriptionScreen.style";

export default function Inscription() {
  return (
    <ScreenContainer>
      <ScreenContainer>
        <CentredContainer>
          <LogoContainer>
            <LogoImage source={require("../assets/logoLearning.png")} />
            <LogoText>Caotching, Tutoring, E-learning</LogoText>
          </LogoContainer>

 

          <ButtonContainer>
            <MarronButton>
              {/* <LinkContainer to="/loginEmail"> */}

              <>
                <LabelButtonWhite>S'inscrire</LabelButtonWhite>
              </>
              {/* </LinkContainer> */}
            </MarronButton>

            <WhiteButton>
              <LabelButtonMarron>Se connecter</LabelButtonMarron>
            </WhiteButton>
          </ButtonContainer>
        </CentredContainer>
      </ScreenContainer>
    </ScreenContainer>
  );
}