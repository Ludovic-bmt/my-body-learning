import styled from "styled-components/native";
import { ScrollView, SafeAreaView, Image } from "react-native";
export const Phone = styled.View`
  background-color: #ffffff;
  flex:1;
  flex-direction: column;
 
  width: 100%;
  font-family: ITC Avant Garde Gothic Pro;
`;

// export const PhoneContainer = styled.View`
//   background-color: #ffffff;
//   height: 1078px;
//   overflow: hidden;
//   position: relative;
//   width: 390px;
// `;

export const TextUtilisateur = styled.Text`
color: #000000;
font-family: "ITC Avant Garde Gothic Pro-Bold";
font-size: 18px;
font-weight: 700;

letter-spacing: 0;
line-height: normal;


width: 175px;
`;

export const TextCategories = styled.Text`
color: #000000;
font-family: "ITC Avant Garde Gothic Pro-Bold";
font-size: 18px;
font-weight: 700;
// left: 20px;
letter-spacing: 0;
line-height: normal;
// position: absolute;
// top: 97px;
// height: 28px;
// width: 175px;
`;

export const BarreRecherche = styled.TouchableOpacity`
width:10%;
`;

export const Notification = styled.TouchableOpacity`
width:10%;
`;



export const SafeContainer = styled(SafeAreaView)`

 
`;
export const StyledScrollView = styled(ScrollView)`
margin-left:20px;

`;

export const ImageWrapper = styled.View`
  border-width: 1px;
  border-color: #353745;
  border-radius: 10px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  height: 63px;
  width: 63px;
  

`;

export const ImageContainer = styled.View`
 
flex-direction: column;
align-items: center; // Si vous voulez centrer les ImageWrapper horizontalement

`;

export const StyledImage = styled(Image)`
height: 35px;
width: 35px;

`;

export const StyledText = styled.Text`
color: #000000;
font-family: ITC Avant Garde Gothic Pro-Medium;
font-size: 10px;
font-weight: 500;

letter-spacing: 0;
line-height: normal;

  
text-align: center;

width: 60px;
`;

export const ContainerText = styled.View`
  align-items: center;
  justify-content: center;

`;

export const ItemContainer = styled.View`
  
  flex-direction: column;
 `;

export const TextRecommandation = styled.Text`

color: #000000;
font-family: ITC Avant Garde Gothic Pro-Bold;
font-size: 18px;
font-weight: 700;


`;

export const ContainerFrame1 = styled.View`

borderRadius: 15;
backgroundColor: #353745;
borderStyle: solid;
borderColor: #bfd9d7;
borderWidth: 1;
width:200px;
height: 202px;
overflow: hidden;
margin-right:20px;
margin-left:20px;


`;

export const FrameImage = styled.Image`
width: 195px;
height: 103px;

borderRadius: 10;

`;

export const TextDesign = styled.Text`



  width: 200px;
  height: 35px;
  text-align: left;
  color: #bfd9d7;
  font-weight: 700;
  font-size: 14px;
  font-family: 'ITC Avant Garde Gothic Pro';
  


`;

export const Text1 = styled.Text`


  font-family: 'Montserrat-Bold';
  color: #ae9152;
  width: 41px;
  letter-spacing: 1px;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  height: 16px;

  



`;

export const Text2 = styled.Text`


  font-size: 13px;
  font-weight: 600;
  font-family: 'Montserrat-SemiBold';
  width: 82px;
  letter-spacing: 1px;
  text-align: left;
  color: #bfd9d7;
  
  


`;
export const IconeImage = styled(Image)`

height:16px;
width:16px;
align-items:center;


`;
export const RecommandeText = styled.Text`

position: absolute;
 


font-size: 11px;
font-weight: 500;
font-family: ITC Avant Garde Gothic Pro;
color: #353745;
text-align: center;

height: 29 px;





`;

export const RecommandeContainer = styled.View`
width:70px;
border-radius: 20px;
background-color: #bfd9d7;

position :absolute;
top:16px;
height: 22px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
left:36px;



z-index:1;



`; export const ContainerFrame2 = styled.View`

borderRadius: 15;
backgroundColor: #353745;
borderStyle: solid;
borderColor: #bfd9d7;
borderWidth: 1;
width:200px;
height: 202;
overflow: hidden;
display:flex;
flex-direction:column;




`;

export const GratuitText = styled.Text`

position: absolute;
 

font-size: 11px;
font-weight: 500;
font-family: 'ITC Avant Garde Gothic Pro';
color: #ffffff;
text-align: center;


height: 12px;

`;

export const GratuitContainer = styled.View`

width:70px;
border-radius: 20px;
background-color: #5f7ce8;

position :absolute;
top:16px;
height: 22px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
left:266px;
z-index:1
`;

export const TextToutVoir = styled.Text`

fontSize: 14;
textDecoration: underline;
fontWeight: 700;
fontFamily: Montserrat-Bold;
color: #ae9152;
textAlign: left;
width: 76,;
height: 16;
`;

export const SafeContainer1 = styled(SafeAreaView)`


 
`;
export const StyledScrollView1 = styled(ScrollView)`
flex-direction: row;
height:100%;

margin-top:20px;
`;

export const TextFormationsPopulaires = styled.Text`

fontSize: 18;
fontWeight: 700;
fontFamily: ITC Avant Garde Gothic Pro;
color: #000;
textAlign: left;

height: 29;

`;

export const FormationsPopulairesContainer1 = styled.View`

borderRadius: 15px;
borderStyle: solid;
borderColor: rgba(53, 55, 69, 0.5);
borderWidth: 1px;
height: 106;
overflow: hidden;
width:90%;
margin-left:20px;
margin-bottom:17px;


`;

export const FormationsPopulairesContainer2 = styled.View`

borderRadius: 15px;
borderStyle: solid;
borderColor: rgba(53, 55, 69, 0.5);
borderWidth: 1px;
height: 106;
overflow: hidden;
width:90%;
// left:20px;
margin-top:20px;
`;

export const Image1 = styled.Image`
width:122px;
height:81px;
l
`;
export const Image2 = styled.Image`
width:122px;
height:81px;

`;

export const PopulaireText = styled.Text`

fontSize: 11;
fontWeight: 500;
fontFamily: ITC Avant Garde Gothic Pro;
color: #fff;
textAlign: center;
display: flex;
alignItems: center;
justifyContent: center;





`;

export const PopulaireContainer = styled.View`
borderRadius: 20;
backgroundColor: "rgba(174, 145, 82, 0.97)";
flex: 1;
width: 60px;
height: 22;
position:absolute;

top:16px;
textAlign: center;
display: flex;

justifyContent: center;
align-items:center;

`;

export const Text3 = styled.Text`

right:19,2;

fontSize: 14;
letterSpacing: 1;
fontWeight: 700;
fontFamily: Montserrat-Bold;
color: #ae9152;



`;

export const Text4 = styled.Text`

fontSize: 13;
letterSpacing: 1;
fontWeight: 600;
fontFamily: Montserrat-SemiBold;
color: #353745;


`;

export const IconeImage1 = styled.Image`
width:13px;
height:20px;
color:#353745;

`;

export const Textux = styled.Text`
fontSize: 14;
fontWeight: 700;
fontFamily: ITC Avant Garde Gothic Pro;
color: #000;




`;

export const Textmotion = styled.Text`

fontSize: 14;
fontWeight: 700;
fontFamily: ITC Avant Garde Gothic Pro;
color: #000;
textAlign: left;
width: 200;
height: 14;


`;

export const Text5 = styled.Text`

fontSize: 14;
fontWeight: 700;
fontFamily: ITC Avant Garde Gothic Pro;
color: #353745;





`;

export const IconeImage2 = styled(Image)`


height: 16px;
width: 16px;


`;

export const BellImage = styled(Image)`

height: 35px;
width: 35px;




`;
export const SearchImage = styled(Image)`


height: 35px;
width: 35px;



`;

export const NouveautéText = styled.Text`

position:absolute;
 

font-size: 11px;
font-weight: 500;
font-family: 'ITC Avant Garde Gothic Pro';
color: #ffffff;
justify-content:center;
text-align: center;
height: 12px;




`;

export const NouveautéContainer = styled.View`

width:70px;
border-radius: 20px;
background-color: #353745;
position:absolute;
top:16px;

display:flex;
align-items:center;
justify-content:center
height: 22px;



`;

export const ViewContainer = styled.View`
display:flex;
flex-direction:row;
width:90%;
justify-content:space-between;
margin-left:20px;
margin-top:20px;
`;

export const ViewBienvenue = styled.View`
display:flex;
flex-direction:column;
width:80%;
justify-content:space-between;
margin:55px 0px 0px 13px;

`;

export const ContainerIcone = styled.View`
display:flex;
flex-direction:row;
width:95%;
justify-content:flex-end;


`;

export const GlobalFormation = styled.View`
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;

`;

export const InfoContainer = styled.View`
display:flex;
flex-direction:column;
margin-left:10px;
margin-top:20px;
`;
export const PrixEtoileContainer = styled.View`
display:flex;
flex-direction:row;
justify-content:space-between
width:100%;

`;

export const ViewEtoile = styled.View`

display:flex;
flex-direction:row;
width:60%;
gap:10px;
`;

export const DesignContainer= styled.View`

display:flex;
flex-direction:row;


margin-left:152px;
width:50%;
justify-content:space-between;
`;

export const InfoContainer2 = styled.View`

display:flex;
flex-direction:row;
width:80%;
gap:10px;
margin-left:152px;
margin-top:9px;
`;

export const PrixEtoileContainer2 = styled.View`

display:flex;
flex-direction:row;
width:50%;
margin-left:152px;
justify-content:space-between;
margin-top:7px;
`;

export const ViewEtoile2 = styled.View`

display:flex;
flex-direction:row;
width:60%;

`;

export const ContainerImage = styled.View`
width:0px;
height:0px;
margin-top:13px;
margin-left:3px;
`;

export const TextuxContainer = styled.View`
flex-direction:column;

`;

