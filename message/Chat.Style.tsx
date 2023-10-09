import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image } from "react-native";

export const ScreenContainer = styled.View`
  background-color: #ffffff;
  flex: 1;
  flex-direction: column;
  width: 100%;
  font-family: ITC Avant Garde Gothic Pro;
  
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
  height: 40px;
  align-items: center;
  margin: 15px;
`;
export const ContainerRetour = styled.View`
  width: 20%;
 color:black; 
`;
export const Retour = styled(Image)`
  width: 23px;
  height: 25px;
`;
export const ProfilTiers = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
`;
export const ImageProfil = styled(Image)`
  border-radius: 40px;
  width: 40px;
  height: 40px;
`;
export const NomProfil = styled.View`
  width: 50%;
  color: #353745;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align:center;
`;
export const ContainerMsg = styled.View`
  flex-direction: column;
  gap: 30px;
  margin: 15px;
`;
export const ContainerMessageRecu = styled.View`
  width: 265px;
  height: 93px;
  border-radius: 15px;
  border: 1px solid #353745;
  background: #353745;
`;
export const ContainerMessageEnvoyer = styled.View`
  width: 315px;
  height: 53px;
  border-radius: 10px;
  background: #bfd9d7;
  
`;
export const InfoRecu = styled.Text`
 
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const InfoDateRecu = styled.Text`
  color: #fff;
  text-align: right;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const InfoDateEnvoyer = styled.Text`

  color: #353745;
  text-align: right;
  font-family: Comfortaa;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const InfoEnvoyer = styled.Text`

  color: #353745;
  text-align: right;
  font-family: Comfortaa;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ContainerPieceJointe = styled.View`
  width: 315px;
  height: 161px;
  flex-direction: column;
  justify-content:space-arround;
  border-radius: 10px;
  border: 1px solid #353745;
  background: #353745;
  position: absolue;
  top: 250px;
  left: 40px;
`;
export const ContainerIconFermer = styled.View`
flex-direction:row
justify-content:flex-end;
width: 100%;
height: 20%;

`;
export const IconFermer = styled(Image)`
  width: 24px;
  height: 24px;
`;
export const ContainerImageTitre = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-arround;
  height: 80%;
  width: 100%;
`;
export const ImageTitre = styled.View`

  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33.33%
  height:100%;
`;

export const ContainerImageFile = styled.View`
  width: 80%;
  height: 75%;
  border-radius: 50%;
  background: #bfd9d7;
  align-items:center;
  justify-content: center;
`;
export const ImageFile = styled(Image)`
  width: 65px;
  height: 65px;

`;
export const InfoFile = styled.Text`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  width: 100%;
  height: 25%;
  vertical-align: middle;
`;
export const ContainerFooter = styled.View`
  position: sticky;
  top: 880px;  
 
`;
export const ContainerInputfile = styled.View`

  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  width:90%
  margin:0px 0px 50px 10px;
 
`;
export const InputMessage = styled.TextInput`
  border-radius: 15px;
  border: 1px solid #000;
  width: 60%;
`;

export const ContainerIcon = styled.View`

  
  
`;
export const Icon = styled(Image)`

  width: 25px;
  height: 25px;
`;
export const Touche = styled.TouchableOpacity`
  width: 10%;
  align-items: center;
  justify-content:center;
`;
export const NavbarContainer = styled.View`
 display:flex;
  flex-direction: row;
  width:100%;
  align-items: end;
  position:sticky;
  height: 52px;
  justify-content:space-arround;
`;
export const LogoContainer = styled.TouchableOpacity`
  align-items: center;
  height: 52px;
  flex-direction: column;
  width: 20%;
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
  margin: 34px 15px;
`;
export const BarreSeparaison = styled(Image)`
  height: 22px;
  width: 1px;
  postion: relative;
  top: -15px;
`;
