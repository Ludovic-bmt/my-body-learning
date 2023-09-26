import React from "react";
import { FlexContainer, ImagePoucebleu, OverlapGroup, Phone, PhoneContainer, TextCPF, TextTitle } from "../Style/EmailValider.Style";


export default function EmailValider() {
  return (
    <Phone>
      <PhoneContainer>
        <FlexContainer>
          <TextTitle>Confirmation </TextTitle>
          <TextTitle>e-mail Validé </TextTitle>
        </FlexContainer>
        <OverlapGroup>
          <ImagePoucebleu
            source={require("../assets/pouce-en-lair.svg")}
          ></ImagePoucebleu>
        </OverlapGroup>
        <TextCPF>Financement CPF ou individuel</TextCPF>
      </PhoneContainer>
    </Phone>
  );
};
