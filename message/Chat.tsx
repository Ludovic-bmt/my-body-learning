import { BarreSeparaison, ContainerFooter, ContainerHeader, ContainerIcon, ContainerIconFermer, ContainerImageTitre, ContainerInputfile, ContainerMessageEnvoyer, ContainerMessageRecu, ContainerMsg, ContainerPieceJointe, ContainerRetour, Icon, IconFermer, IconNav, ImageFile, ImageProfil, ImageTitre, InfoDateRecu,InfoDateEnvoyer, InfoEnvoyer, InfoFile, InfoRecu, InputMessage, LogoContainer, NavbarContainer, NomProfil, ProfilTiers, Retour, ScreenContainer, TextNav, Touche, ContainerImageFile } from "./Chat.Style";


export function Chat (){
  return (
    <ScreenContainer>
      <ContainerHeader>
        <ContainerRetour>
          <Retour source={require("../assets/flecheNoir.svg")}></Retour>
        </ContainerRetour>

        <ProfilTiers>
          <ImageProfil
            source={require("../assets/Ellipse 47.png")}
          ></ImageProfil>
          <NomProfil>LOUISON K</NomProfil>
        </ProfilTiers>
      </ContainerHeader>

      <ContainerMsg>
        <ContainerMessageRecu>
          <InfoRecu>LOUISON Kolia</InfoRecu>
          <InfoRecu>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </InfoRecu>
          <InfoDateRecu>20:45</InfoDateRecu>
        </ContainerMessageRecu>
        <ContainerMessageEnvoyer>
          <InfoEnvoyer>Lorem</InfoEnvoyer>
          <InfoDateEnvoyer>20:50</InfoDateEnvoyer>
        </ContainerMessageEnvoyer>
      </ContainerMsg>

      <ContainerPieceJointe>
        <ContainerIconFermer>
          <IconFermer source={require("../assets/home-alt.svg")}></IconFermer>
        </ContainerIconFermer>
        <ContainerImageTitre>
          <ImageTitre>
            <ContainerImageFile>
              <ImageFile source={require("../assets/file.svg")}></ImageFile>
            </ContainerImageFile>

            <InfoFile>Document</InfoFile>
          </ImageTitre>

          <ImageTitre>
            <ContainerImageFile>
              <ImageFile source={require("../assets/camera.svg")}></ImageFile>
            </ContainerImageFile>
            <InfoFile>Appareil photo</InfoFile>
          </ImageTitre>

          <ImageTitre>
            <ContainerImageFile>
              <ImageFile source={require("../assets/image.svg")}></ImageFile>
            </ContainerImageFile>
            <InfoFile>Galerie</InfoFile>
          </ImageTitre>
        </ContainerImageTitre>
      </ContainerPieceJointe>

      <ContainerFooter>
        <ContainerInputfile>
          <InputMessage placeholder="Entrez votre message..."></InputMessage>
          <Touche>
            <ContainerIcon>
              <Icon source={require("../assets/home-alt.svg")}></Icon>
            </ContainerIcon>
          </Touche>
          <Touche>
            <ContainerIcon>
              <Icon source={require("../assets/home-alt.svg")}></Icon>
            </ContainerIcon>
          </Touche>
          <Touche>
            <ContainerIcon>
              <Icon source={require("../assets/home-alt.svg")}></Icon>
            </ContainerIcon>
          </Touche>
        </ContainerInputfile>

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
      </ContainerFooter>
    </ScreenContainer>
  );
};
   