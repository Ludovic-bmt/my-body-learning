
import React from 'react'
import {

  ButtonContainer,
  CentredContainer,
  LabelButtonMarron,
  LabelButtonWhite,
  // LinkContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  MarronButton,
  ScreenContainer,
  WhiteButton,
} from "../Style/InscriptionScreen.style";

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