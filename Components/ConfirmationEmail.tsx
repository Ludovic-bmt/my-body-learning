
import React from 'react'
import { CentredContainer, LogoContainer, LogoImage, LogoText, ScreenContainer, TitleText, } from '../Style/ConfirmationEmail.Style';

export default function ConfirmationEmail() {
  return (
    <ScreenContainer>
      <CentredContainer>
        
          <TitleText>Confirmation</TitleText>
          <TitleText>e-mail Validé</TitleText>
        
        <LogoContainer>
          <LogoImage source={require("../assets/pouce-en-lair.svg")} />
          <LogoText>Financement CPF ou individuel</LogoText>
        </LogoContainer>
      </CentredContainer>
    </ScreenContainer>
  );
}