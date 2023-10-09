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

export default function Message() {
  const [recherche, setRecherche] = useState("");
  const handleRecherche = (e: string) => {
    setRecherche(e);
  };
  return (
    <ScreenContainer>
      <CentredContainer>
        <TitleText>MESSAGE</TitleText>

        <TextInputContainer>
          <IconWhiteButton icon={faMicrophone} />
          <Input
            placeholder="Message"
            keyboardType="default"
            value={recherche}
            onChangeText={handleRecherche}
          />
          <IconWhiteButton icon={faMicrophone} />
        </TextInputContainer>
        <MessageContainer>
          <AjoutMessage>
            <IconPlus icon={faPlus} />
            <LabelMessage>nouveau message</LabelMessage>
          </AjoutMessage>
          <AjoutMessage>
            <IconPlus icon={faPlus} />
            <LabelMessage>nouveau groupe</LabelMessage>
          </AjoutMessage>
        </MessageContainer>
        <MessageContainer>
          <MessageContainer1>
            <ImageContainer></ImageContainer>
            <Conversation>
              <Destinataire>Kolia eed</Destinataire>
              <Information>
                Lorem ipsum dolor s a blanditiis distinctio.
              </Information>
            </Conversation>
          </MessageContainer1>
          <MessageContainer1>
            <ImageContainer></ImageContainer>
            <Conversation>
              <Destinataire>Kolia eed</Destinataire>
              <Information>
                Lorem ipsum dolor s a blanditiis distinctio.
              </Information>
            </Conversation>
          </MessageContainer1>
        </MessageContainer>

        <NavbarContainer>
          <LogoContainer>
            <IconNav source={require("../assets/home-alt.svg")}></IconNav>
            <TextNav>Home</TextNav>
          </LogoContainer>
          <BarreSeparaison
            source={require("../assets/line1.png")}
          ></BarreSeparaison>
          <LogoContainer>
            <IconNav source={require("../assets/Chat.svg")}></IconNav>
            <TextNav>message</TextNav>
          </LogoContainer>
          <BarreSeparaison
            source={require("../assets/line1.png")}
          ></BarreSeparaison>
          <LogoContainer>
            <IconNav source={require("../assets/appelvideo.svg")}></IconNav>
            <TextNav>Visio</TextNav>
          </LogoContainer>

          <BarreSeparaison
            source={require("../assets/line1.png")}
          ></BarreSeparaison>

          <LogoContainer>
            <IconNav source={require("../assets/Enregistrer.svg")}></IconNav>
            <TextNav>Enregistré</TextNav>
          </LogoContainer>
          <BarreSeparaison
            source={require("../assets/line1.png")}
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
