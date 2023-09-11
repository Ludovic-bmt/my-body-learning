// import React, { useEffect, useState } from "react";

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
  LabelButtonWhite,
  Ligne,
  // LinkContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  RedText,
  ScreenContainer,
} from "../Style/AllLogin.Style";

import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-native";
// import { useStore } from "@nanostores/react";
// import { LoginScreenStore, initLoginScreen } from "../Store/LoginScreen.Store";
// import { Outlet, useNavigate } from "react-router-native";

export default function AllLogin() {
  return (
    <ScreenContainer>
      <ImageBackground source={require("../assets/icon.png")} />

      <ScreenContainer>
        <CentredContainer>
          <LogoContainer>
            <LogoImage source={require("../assets/icon.png")} />

            <LogoText>Financement participatif</LogoText>
          </LogoContainer>

          <ButtonContainer>
            <FbButton>
              <IconWhiteButton icon={faFacebook} />

              <LabelButtonWhite>Connexion Facebook</LabelButtonWhite>
            </FbButton>

            <GoogleButton>
              <IconGoogleButton icon={faGoogle} color="red" />

              <LabelButtonBlack>Connexion Google </LabelButtonBlack>
            </GoogleButton>

            <BlackButton>
              <IconWhiteButton icon={faApple} />

              <LabelButtonWhite>Connexion Apple</LabelButtonWhite>
            </BlackButton>

            <BlackButton>
              {/* <LinkContainer to="/loginEmail"> */}
              
              <>
                <IconWhiteButton icon={faEnvelope} />

                <LabelButtonWhite>Connexion E-mail</LabelButtonWhite>
              </>
              {/* </LinkContainer> */}
            </BlackButton>

            <BlackButton>
              <IconWhiteButton icon={faPhone} />

              <LabelButtonWhite>Connexion Téléphone</LabelButtonWhite>
            </BlackButton>
          </ButtonContainer>

          <CreateCompteText>Pas encore de compte ?</CreateCompteText>

          <CreateCompteLink onPress={() => alert("bj")}>
            creer un
          </CreateCompteLink>

          <Ligne></Ligne>

          <RedText>Recupérer mon compte</RedText>
        </CentredContainer>
      </ScreenContainer>
    </ScreenContainer>
  );
}
