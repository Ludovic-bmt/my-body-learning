import {
  faBookmark,
  faComment,
  faHouse,
  faMicrophone,
  faPlus,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/react-native-fontawesome";

import React, { useState } from "react";
import {
  CentredContainer,
  LogoContainer,
  IconNav,
  TextNav,
  NavbarContainer,
  ScreenContainer,
  TitleText,
  TextInputContainer,
  Input,
  MessageContainer,
  IconPlus,
  LabelMessage,
  AjoutMessage,
  IconWhiteButton,
  BarreSeparaison,
  MessageContainer1,
  ImageContainer,
  Conversation,
  Destinataire,
  Information,
} from "./Message.Style";

export default function MessageKolia() {

  return (
    <ScreenContainer>
      <CentredContainer>
        <Entete>
          <Touche>
            <ImageFleche source={require("../assets/fleche.svg")}></ImageFleche>
          </Touche>
          <ImageContainer></ImageContainer>
          <Destinataire>Kolia</Destinataire>
        </Entete>
        <Corp>
            <MessageRecu></MessageRecu>
            <MessageEnvoye></MessageEnvoye>
        </Corp>
        <ContainerSaisie>
          <Touche>
            <Input
              placeholder="Message"
              keyboardType="default"
              value={recherche}
              onChangeText={handleRecherche}
            />
          </Touche>
          <Touche>
            <Icone></Icone>
          </Touche>
          <Touche>
            <Icone></Icone>
          </Touche>
          <Touche>
            <Icone></Icone>
          </Touche>
        </ContainerSaisie>

        <NavbarContainer>
          <LogoContainer>
            <IconNav source={require("../assets/home-alt.svg")}></IconNav>
            <TextNav>Home</TextNav>
          </LogoContainer>
          <BarreSeparaison
            source={require("../assets/ligne.svg")}
          ></BarreSeparaison>
          <LogoContainer>
            <IconNav source={require("../assets/Chat.svg")}></IconNav>
            <TextNav>message</TextNav>
          </LogoContainer>
          <BarreSeparaison
            source={require("../assets/ligne.svg")}
          ></BarreSeparaison>
          <LogoContainer>
            <IconNav source={require("../assets/Profil.svg")}></IconNav>
            <TextNav>Visio</TextNav>
          </LogoContainer>
          <BarreSeparaison
            source={require("../assets/ligne.svg")}
          ></BarreSeparaison>
          <LogoContainer>
            <IconNav source={require("../assets/Enregistrer.svg")}></IconNav>
            <TextNav>Enregistré</TextNav>
          </LogoContainer>
          <BarreSeparaison
            source={require("../assets/ligne.svg")}
          ></BarreSeparaison>
          <LogoContainer>
            <IconNav source={require("../assets/Profil.svg")}></IconNav>
            <TextNav>Profil</TextNav>
          </LogoContainer>
        </NavbarContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
