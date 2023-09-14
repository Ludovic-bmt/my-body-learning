import { faBookmark, faComment, faHouse, faMicrophone, faPlus, faUser, faVideo } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/react-native-fontawesome";

import React, { useState } from 'react'
import { CentredContainer, LogoContainer, IconNav, TextNav, NavbarContainer, ScreenContainer, TitleText, TextInputContainer, Input, MessageContainer, IconPlus, LabelMessage, AjoutMessage, IconWhiteButton} from "./Message.Style";

export default function Message() {
  const [recherche, setRecherche] = useState("")
  const handleRecherche = (e:string) =>{
    setRecherche(e)
  }
  return (
    <ScreenContainer>
      <CentredContainer>
        <TitleText>MESSAGESfsfd</TitleText>
        <IconWhiteButton icon={faMicrophone} />
        <TextInputContainer>
          <Input
            placeholder="Message"
            keyboardType="default"
            value={recherche}
            onChangeText={handleRecherche}
          />
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
        <NavbarContainer>
          <LogoContainer>
            <IconNav icon={faBookmark}></IconNav>
            <TextNav>message</TextNav>
          </LogoContainer>
          <LogoContainer>
            <IconNav icon={faUser}></IconNav>
            <TextNav>Visio</TextNav>
          </LogoContainer>
          <LogoContainer>
            <IconNav icon={faHouse}></IconNav>
            <TextNav>Enregistré</TextNav>
          </LogoContainer>
          <LogoContainer>
            <IconNav icon={faVideo}></IconNav>
            <TextNav>Profil</TextNav>
          </LogoContainer>
        </NavbarContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}
