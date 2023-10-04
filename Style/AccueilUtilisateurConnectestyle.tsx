import styled from "styled-components/native";
import { ScrollView, SafeAreaView, Image } from "react-native";
export const Phone = styled.View`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-family: ITC Avant Garde Gothic Pro;
`;

export const PhoneContainer = styled.View`
  background-color: #ffffff;
  height: 1078px;
  overflow: hidden;
  position: relative;
  width: 390px;
`;

export const TextUtilisateur = styled.Text`
color: #000000;
font-family: "ITC Avant Garde Gothic Pro-Bold";
font-size: 18px;
font-weight: 700;
left: 20px;
letter-spacing: 0;
line-height: normal;
position: absolute;
top: 54px;
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
height: 30px ;
left: 289px ;

top: 71px ;
width: 30px ;
`;

export const Notification = styled.TouchableOpacity`
height: 30px ;
left: 335px ;

top: 71px ;
width: 30px ;
`;



export const SafeContainer = styled(SafeAreaView)`
top:-41px;
 
`;
export const StyledScrollView = styled(ScrollView)`
flex-direction: column;
top: 156px;

height:120px;

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
  align-items: center;
  justify-content: center;
  flex-direction: column;
 `;

export const TextRecommandation = styled.Text`

color: #000000;
font-family: ITC Avant Garde Gothic Pro-Bold;
font-size: 18px;
font-weight: 700;
padding:20px;
top:111px;
textAlign: left;
width: 246;
height: 29;



width: 246px;


`;

export const ContainerFrame1 = styled.View`

borderRadius: 15;
backgroundColor: #353745;
borderStyle: solid;
borderColor: #bfd9d7;
borderWidth: 1;
width:200px;
height: 202;
overflow: hidden;
left:20px;
top:141px;
marginRight: 20px;  // Ajout du marginRight ici
`;

export const FrameImage = styled.Image`
width: 195px;
height: 103px;
left: "50%";
borderRadius: 10;

`;

export const TextDesign = styled.Text`

top: 129px;
  left: 9px;
  width: 200px;
  height: 35px;
  text-align: left;
  color: #bfd9d7;
  font-weight: 700;
  font-size: 14px;
  font-family: 'ITC Avant Garde Gothic Pro';
  position: absolute;


`;

export const Text1 = styled.Text`

left: 158px;
  font-family: 'Montserrat-Bold';
  color: #ae9152;
  width: 41px;
  letter-spacing: 1px;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  height: 16px;
  top: 173px;
  position: absolute; // J'ajoute cette propriété car vous utilisez "top" et "left", ce qui nécessite généralement une position absolue.



`;

export const Text2 = styled.Text`

left: 40px;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Montserrat-SemiBold';
  width: 82px;
  letter-spacing: 1px;
  text-align: left;
  color: #bfd9d7;
  top: 173px;
  position: absolute; // J'ajoute cette propriété car vous utilisez "top" et "left", ce qui nécessite généralement une position absolue.



`;
export const IconeImage = styled.Image`
top: 173px;
left:20px;
height:16;


`;
export const RecommandeText = styled.Text`

position: absolute;
 


font-size: 11px;
font-weight: 500;
font-family: ITC Avant Garde Gothic Pro;
color: #353745;
text-align: center;
width: 246;
height: 29;





`;

export const RecommandeContainer = styled.View`
width:70px;
border-radius: 20px;
background-color: #bfd9d7;

position :absolute;
top:10px;
height: 22px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
left:10;
 



`; export const ContainerFrame2 = styled.View`

borderRadius: 15;
backgroundColor: #353745;
borderStyle: solid;
borderColor: #bfd9d7;
borderWidth: 1;
width:200px;
height: 202;
overflow: hidden;
left:20px;
top:141px;



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
top:10px;
height: 22px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
left:10;
`;

export const TextToutVoir = styled.Text`


`;

export const SafeContainer1 = styled(SafeAreaView)`


 
`;
export const StyledScrollView1 = styled(ScrollView)`
flex-direction: column;
height:350;


`;

export const TextFormationsPopulaires = styled.Text`

fontSize: 18;
fontWeight: 700;
fontFamily: ITC Avant Garde Gothic Pro;
color: #000;
textAlign: left;
width: 246;
height: 29;
padding:20px;
`;

export const FormationsPopulairesContainer1 = styled.View`
// top :20px;
borderRadius: 15px;
borderStyle: solid;
borderColor: rgba(53, 55, 69, 0.5);
borderWidth: 1px;
height: 106;
overflow: hidden;
width:350;
// left:20px;
`;

export const FormationsPopulairesContainer2 = styled.View`
top :20px;
borderRadius: 15px;
borderStyle: solid;
borderColor: rgba(53, 55, 69, 0.5);
borderWidth: 1px;
height: 106;
overflow: hidden;
width:350;
left:20px;
margin-top:20px;
`;

export const Image1 = styled.Image`
width:122px;
height:81px;
left:7px;
top:13px;
`;
export const Image2 = styled.Image`
width:122px;
height:81px;
left:7px;
top:13px;
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
width: 43;
height: 16;




`;

export const PopulaireContainer = styled.View`
borderRadius: 20;
backgroundColor: "rgba(174, 145, 82, 0.97)";
flex: 1;
width: 60px;
height: 22;
overflow: "hidden";
position:absolute;
top:16px;
textAlign: center;
display: flex;
alignItems: center;
justifyContent: center;

left:10;
`;

export const Text3 = styled.Text`
position:absolute;
right:19,2;
top:62px;
fontSize: 14;
letterSpacing: 1;
fontWeight: 700;
fontFamily: Montserrat-Bold;
color: #ae9152;
textAlign: left;
width: 41;
height: 16;
left:307;

`;

export const Text4 = styled.Text`
position:absolute;
left:167;
top:62;
fontSize: 13;
letterSpacing: 1;
fontWeight: 600;
fontFamily: Montserrat-SemiBold;
color: #353745;
textAlign: left;
width: 82;
height: 16;

`;

export const IconeImage1 = styled.Image`
position:absolute;
left:239;
top:18;
color:#353745;

`;

export const Textux = styled.Text`
fontSize: 14;
fontWeight: 700;
fontFamily: ITC Avant Garde Gothic Pro;
color: #000;
textAlign: left;
width: 200;
height: 14;
top:18;
position:absolute;
left:154;
`;

export const Textmotion = styled.Text`

fontSize: 14;
fontWeight: 700;
fontFamily: ITC Avant Garde Gothic Pro;
color: #000;
textAlign: left;
width: 200;
height: 14;
top:18;
position:absolute;
left:154;

`;

export const Text5 = styled.Text`
position:absolute;
fontSize: 14;
fontWeight: 700;
fontFamily: ITC Avant Garde Gothic Pro;
color: #353745;
textAlign: left;
width: 200;
height: 14;
left:181px
top:41;



`;

export const IconeImage2 = styled.Image`
position:relative;
left:151;
top:38;


`;

export const BellImage = styled.Image`

left:335;
top:71;
color:blue;


`;
export const SearchImage = styled.Image`

left:289;
top:71;
color:red;


`;

export const NouveautéText = styled.Text`

position: absolute;
 

font-size: 11px;
font-weight: 500;
font-family: 'ITC Avant Garde Gothic Pro';
color: #ffffff;
text-align: center;
height: 12px;
align-items:center



`;

export const NouveautéContainer = styled.View`

width:70px;
border-radius: 20px;
background-color: #353745;
position:absolute;
top:16px;
left:10;

height: 22px;



`;

export const ContainerView = styled.View`
background-color:#303134;
width:85%;
height:100px;

`;

export const CategorieView = styled.View`
background-color:red;
width:85%;
height:100px;

`;