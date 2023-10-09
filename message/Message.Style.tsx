import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image } from "react-native";

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: white;
  width: 100%;
  height: 100%
`;

export const CentredContainer = styled.View`
  flex: 1;
  height: 100%
  width: 100%;
`;
export const NavbarContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%,
  align-items: end;
  position:sticky;
  height: 52px;
  justify-content:space-between;
`;
export const LogoContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  // border: solid 1px black;
  height: 52px;
  flex-direction:column;
`;
export const IconNav = styled(Image)`

  height: 28px !important;
  width: 28px !important;
  object-fit: cover;
  
`;

export const TextNav = styled.Text`
  color: #182f3d;
  font-family: "Montserrat-Medium";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.33px;
  line-height: normal;
  text-align: center;
  
`;
export const TitleText = styled.Text`
  color: #353745;
  font-family: "Montserrat-Bold";
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin:34px 15px;
`;
export const TextInputContainer = styled.View`
  display: flex;
  border-radius: 15px;
  height: 33px;
  width: 80%;
  background-color: red;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;

export const Input = styled.TextInput`
margin:auto;
align-item:center;
`;
export const AjoutMessage = styled.TouchableOpacity`
  width: 80%;
  height: 33px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const LabelMessage = styled.Text`
  color: #353745;
  font-family: "Montserrat-Medium";
  font-size: 13px;
  font-weight: 500;

`;
export const IconPlus = styled(FontAwesomeIcon)`
 width: 10%;
`;
export const MessageContainer = styled.View`
 display: flex;
  flex-direction: column;
  align-items: center;
`;
export const IconWhiteButton = styled(FontAwesomeIcon)`
margin:8px;
`;
export const BarreSeparaison = styled(Image)`
  height: 22px;
  width: 1px;
  postion: relative;
  top:-15px
`;
export const MessageContainer1 = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const ImageContainer = styled.View`
border-radius: 50px;
border: solid 1px black;
width: 60px;
height: 60px;
`;

export const Conversation = styled.View`
width: 80%;
flex-direction: column;
margin-left: 20px;
`;

export const Destinataire = styled.Text`
width:100%`
;
export const Information = styled.Text`
width:100%`
;

