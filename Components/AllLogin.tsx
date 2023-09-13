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
  MarronButton,
  MarronText,
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
      <ScreenContainer>
        <CentredContainer>
          <LogoContainer>
            <LogoImage source={require("../assets/pouce-en-lair.svg")} />
            <LogoText>Caotching, Tutoring, E-learning</LogoText>
          </LogoContainer>

          <ButtonContainer>
            <BlackButton>
              <IconWhiteButton icon={faFacebook} />

              <LabelButtonWhite>Connexion Facebook</LabelButtonWhite>
            </BlackButton>

            <BlackButton>
              <IconGoogleButton icon={faGoogle} color="white" />

              <LabelButtonWhite>Connexion Google </LabelButtonWhite>
            </BlackButton>

            <BlackButton>
              <IconWhiteButton icon={faApple} />

              <LabelButtonWhite>Connexion Apple</LabelButtonWhite>
            </BlackButton>
          </ButtonContainer>
          <Ligne></Ligne>
          <ButtonContainer>
            <MarronButton>
              {/* <LinkContainer to="/loginEmail"> */}

              <>
                <IconWhiteButton icon={faEnvelope} />

                <LabelButtonWhite>Connexion E-mail</LabelButtonWhite>
              </>
              {/* </LinkContainer> */}
            </MarronButton>

            <MarronButton>
              <IconWhiteButton icon={faPhone} />

              <LabelButtonWhite>Connexion Téléphone</LabelButtonWhite>
            </MarronButton>
          </ButtonContainer>

          <CreateCompteText>Pas encore de compte ?</CreateCompteText>

          <CreateCompteLink onPress={() => alert("bj")}>
            creer un
          </CreateCompteLink>

          <Ligne></Ligne>

          <MarronText>Recupérer mon compte</MarronText>
        </CentredContainer>
      </ScreenContainer>
    </ScreenContainer>
  );
}
