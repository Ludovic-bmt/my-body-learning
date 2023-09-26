import React from "react";
import {
  Phone,
  PhoneContainer,
  TextTitle,
  InputSearch,
  Group,
  TextWrapper3,
  ImageKolia,
  TextPara,
  Group2,
  ImageGroup,
  BoutonAddMessage,
  BoutonAddGroup,
  Menu,
  CarteGrpWrapper,
  TextWrapper6,
  ImageHome,
  MessageWrapper,
  ImageChat,
  TextWrapper7,
  ImageBarre1,
  ImageBarre2,
  Overlap3,
  TextWrapper8,
  ImageBookmark,
  OverlapGroup2,
  TextWrapper9,
  ImageVisio,
  ProfilGrpWrapper,
  TextWrapper10,
  ImageProfile,
  ImageBarre3,
  LabelMessage,
} from "../Style/Message1.Style";
  



export default function Message1 () {
  return (
    <Phone>
      <PhoneContainer>
        <TextTitle>Messages</TextTitle>
        <InputSearch placeholder="Message"></InputSearch>
        <Group>
          <TextWrapper3></TextWrapper3>
          <ImageKolia source={require("../assets/Profile.svg")}></ImageKolia>
          <TextPara></TextPara>
        </Group>
        <Group2>
          <TextWrapper3></TextWrapper3>
          <ImageGroup source={require("../assets/Profile.svg")}></ImageGroup>
          <TextPara></TextPara>
        </Group2>
        <BoutonAddMessage>
          <LabelMessage>k,Nouveau message</LabelMessage>
        </BoutonAddMessage>
        <BoutonAddGroup>
          <LabelMessage>Nouveau groupe</LabelMessage>
        </BoutonAddGroup>
        <Menu>
          <CarteGrpWrapper>
            {/* <CartGrp> */}
            <TextWrapper6></TextWrapper6>
            <ImageHome source={require("../assets/Profile.svg")}></ImageHome>
            {/* </CartGrp> */}
          </CarteGrpWrapper>
          <MessageWrapper>
            {/* <Message> */}
            <TextWrapper7></TextWrapper7>
            <ImageChat source={require("../assets/Profile.svg")}></ImageChat>
            {/* </Message> */}
          </MessageWrapper>
          <ImageBarre1 source={require("../assets/Profile.svg")}></ImageBarre1>
          <ImageBarre2 source={require("../assets/Profile.svg")}></ImageBarre2>
          <Overlap3>
            {/* <AmisGrp> */}
            <TextWrapper8></TextWrapper8>
            <ImageBookmark
              source={require("../assets/Profile.svg")}
            ></ImageBookmark>
            {/* </AmisGrp> */}
          </Overlap3>
          <ImageBarre2 source={require("../assets/Profile.svg")}></ImageBarre2>
          {/* <OverlapGroupWrapper> */}
          <OverlapGroup2>
            <TextWrapper9></TextWrapper9>
            <ImageVisio source={require("../assets/Profile.svg")}></ImageVisio>
          </OverlapGroup2>
          {/* </OverlapGroupWrapper> */}
          <ProfilGrpWrapper>
            {/* <ProfilGrp> */}
            <TextWrapper10></TextWrapper10>
            <ImageProfile
              source={require("../assets/Profile.svg")}
            ></ImageProfile>
            {/* </ProfilGrp> */}
          </ProfilGrpWrapper>
          <ImageBarre3 source={require("../assets/Profile.svg")}></ImageBarre3>
        </Menu>
      </PhoneContainer>
    </Phone>
  );
};

