import styled from "styled-components/native";
import { Link } from "react-router-native";
export const Inscrip = styled(Link)`

    flex-direction: row;

    flex: 1;

  `;

export const Phone = styled.View`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const PhoneContainer = styled.View`
  background-color: #ffffff;
  height: 1078px;
  overflow: hidden;
  position: relative;
  width: 390px;
`;

export const Titre = styled.Text`
fontSize: 24;
fontWeight: 700;
fontFamily: Montserrat-Bold;
color: #353745;
textAlign: center;
width: 352;
`;

export const AccueilContainer = styled.View`
position:absolute;
width: 100%;
height: 29;
left:17;
top:35;
`;
export const FlecheImage = styled.Image`
top: 2;
left: -2;
borderRadius: 14;
width: 13;
height: 23;
position: absolute;

`;
export const BookmarkImage = styled.Image`
left:328;
top:0;
position: absolute;
width: 24;
height: 26;
`;
export const DesignImage = styled.Image`
borderRadius: 10;

width: 100%;
height: 191 px;
`;
export const ImageContainer = styled.View`


position: absolute;
width:100%;
height:191px;
borderRadius: 10;
left:17px;
top:82px;
`;
export const RecommandeContainer = styled.View`
borderRadius: 20;
backgroundColor: #bfd9d7;
display:flex;
align-items:center;
width: 100%;
height: 22;
overflow: hidden;
justify-content:center;
`;

export const RecommandeText = styled.Text`
position: absolute;


fontSize: 11;
fontWeight: 500px;
fontFamily: ITC Avant Garde Gothic Pro;
color: #353745;
textAlign: center;
display: flex;
alignItems: center;
justifyContent: center;
width: 89;
height: 12;
`;