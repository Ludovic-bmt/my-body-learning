import styled from "styled-components/native";
import { Link } from "react-router-native";

interface TextProps {
  secondary?: boolean;
}

export const Inscrip = styled(Link)`

    flex-direction: row;

    flex: 1;

  `;

  export const RecommandeContainer= styled.View`
 
  width:70px;
border-radius: 20px;
background-color: #bfd9d7;

position :absolute;
top:92px;
height: 22px;
overflow: hidden;
display: flex;

left:31px;



z-index:1;
`;

export const RecommandeText= styled.Text`

 


font-size: 11px;
font-weight: 500;
font-family: ITC Avant Garde Gothic Pro;
color: #353745;
text-align: center;

height: 29 px;

`;

export const Phone = styled.View`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;


export const Titre = styled.Text`
fontSize: 24;
fontWeight: 700;
fontFamily: Montserrat-Bold;
color: #353745;
textAlign: center;
width: 352px;
`;

export const AccueilContainer = styled.View`

width: 100%;
height: 29px;


`;
export const FlecheImage = styled.Image`

borderRadius: 14px;
width: 13px;
height: 23px;


`;
export const BookmarkImage = styled.Image`

width:26px;

height: 26px;
`;
export const DesignImage = styled.Image`


width: 357px;
height:191px;
`;
export const ImageContainer = styled.View`

 
margin-top:18px;
width:100%;
height:191px;


`;


export const ElementAccueil = styled.View`
display:flex;
flex-direction:row;


justify-content:space-between;
width:100%;


`;
export const ElementAccueil2 = styled.View`
display:flex;
flex-direction:row;
`;

export const GlobalContainer = styled.View`

display:flex;
flex-direction:column;
width:100%;
align-items:center;
margin-left:17px;
margin-top:35px;

`;

export const TextPrix = styled.Text`

font-family: 'Montserrat';
font-size: 13px;
font-weight: 600;
line-height: 16px;
letter-spacing: 1px;


`;
export const IconeImageDesign = styled.Image`

height;16px;
width:16px;
`;
export const ViewEtoile1 = styled.View`

display:flex;
flex-direction:row;
margin-left:31px;

`;
export const TextNombre = styled.Text`

font-family: 'Montserrat';
font-size: 13px;
font-weight: 600;
line-height: 16px;
letter-spacing: 1px;

`;

export const ImageDesign = styled.Image`

width:129px;
height:30px;
margin-right:5px;

`;

export const GlobalContainer2 = styled.View`

display:flex;
flex-direction:row;

align-items:center;
justify-content:space-between;
width:100%;
margin-top:12px;

`;

export const TextTitre = styled.Text`

font-family: 'ITC Avant Garde Gothic Pro';
font-size: 20px;
font-weight: 700;
line-height: 24px;
margin-top:19px;

`;

export const ContainerTitre = styled.View`

margin-top:18px;
margin-left:76px;

`;


export const Trait= styled.Image`

border-color: rgba(53, 55, 69, 0.3);
border-top-width: 1px;

width: 90%;
height: 1px;
margin-left:22px;
margin-bottom:11px;



`;
export const GlobalContainer3 = styled.View`

display:flex;



width:100%;
margin-top:16px;

`;
export const Ellipse = styled.Image`

height:30px;
width:30px;
margin-left:28px;


`;

export const ContainerText = styled.View`






`;
export const Text3 = styled.Text`

font-size: 14px;
font-weight: 600;
font-family: 'Montserrat-SemiBold';
color: #fff;
text-align: center;
width: 34px;
height: 16px;

`;
export const Text1 = styled.Text`

font-size: 14px;
font-weight: 700;
font-family: 'Montserrat-Bold';
color: #353745;


`;
export const Text2 = styled.Text`

font-size: 14px;
font-family: 'Montserrat-Regular';
color: #353745;



`;


export const ContainerIcone = styled.View`
display:flex;
flex-direction:row;
margin-right:16px;
justify-content:flex-end;



`;

export const Etoile = styled.Image`

height:16px;
width:16px;


`;

export const Fleche = styled.Image`

height:16px;
width:16px;

`;
export const ContainerEtoile  = styled.View`
display:flex;
flex-direction:row;
border-radius: 5px;
background-color: #ae9152;
justify-content:space-between;
width: 50px;
height: 20px;
align-items:center;
margin-right:35px;




`;


export const EnsembleContainer = styled.View`


flex-direction:row;
justify-content:space-between;



`;


export const IconeEmplacement = styled.Image`

width:10px;
height:15px;

`;

export const TextAdresse = styled.Text<TextProps>`
font-size: 14px;
font-weight: 700;
font-family: 'Montserrat-Bold';
color: #353745;
margin-bottom: 15px;
${props => props.secondary && `
font-size: 16px;
font-family: 'Montserrat-Regular';
color: #353745;

width: 347px;
  /* Ajoutez ou modifiez d'autres propriétés de style ici */
`}
`;
export const TextCarte = styled.Text`

font-size: 14px;
font-weight: 700;
font-family: 'Montserrat-Bold';
color: #353745;
margin-bottom:15px;

`;

export const ContainerEmplacement = styled.View`


flex-direction:row;




`;
export const ContainerEmplacementGlobal = styled.View`

margin-left:23px;
flex-direction:column;



`;

export const TextDetail = styled.Text`

font-size: 12px;
font-weight: 500;
font-family: 'Montserrat-Medium';
color: #353745;

width: 316px;
height: 16px;


`;

export const ContainerDetail = styled.View`

margin-left:38px;
flex-direction:column;



`;

export const Trait2= styled.Image`

border-color: rgba(53, 55, 69, 0.3);
border-top-width: 1px;

width: 100%;
height: 1px;

margin-top:11px;



`;


export const Text85 = styled.Text`

font-size: 24px;
  font-weight: 700;
  font-family: 'Montserrat-Bold';
  color: #ae9152;
  
  width: 58px;
  height: 35px;
 


`;

export const BoutonContainer = styled.View`


border-radius: 15px;
background-color: #353745;
border-style: solid;
border-color: #353745;
border-width: 1px;
align-items:center;
justify-content:center;
width:287px;
display:flex;



`;
export const TextBouton = styled.Text`

font-size: 18px;
font-weight: 500;
font-family: 'Montserrat-Medium';
color: #fff;
text-align: center;
width: 264px;
height: 56px;
display:flex;
align-items:center;
justify-content:center;




`;
export const Containerfinal= styled.View`
 
flex-direction:row
justify-content:space-between;
margin-top:25px;
margin-left:27px;
margin-right:20px;



`;