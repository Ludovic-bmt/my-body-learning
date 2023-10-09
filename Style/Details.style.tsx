import styled from 'styled-components/native';
import React from 'react';
import { ViewProps } from 'react-native';

interface RectangleIconeProps extends ViewProps {
  secondary?: boolean;
}





export const Phone1 = styled.View`


  
  
  
  background-color: #ffffff;
  
`;

export const ContainerImageTitre = styled.View`

 margin-top:102px;
margin-left:18px;

`;

export const SousTitre = styled.Text`

font-size: 20px;
font-weight: 700;
font-family: 'ITC Avant Garde Gothic Pro';
color: #353745;


`;

export const TitreDetails = styled.Text`

font-size: 24px;
font-weight: 700;
font-family: 'ITC Avant Garde Gothic Pro';
color: #353745;
margin-left:150px;

`;


export const ElementDetails = styled.View`
margin-left:18px;
margin-top:35px;
 

`;

export const DetailsImage= styled.Image`
margin-left:18px;
width:129px;
height:102px;
 

`;

export const BlocDesign = styled.View`
border-radius: 33px;
  background-color: #ededed;
 
 width:129px;
  height: 30px;
 

`;

export const SousTitreImage = styled.View`

 flex-direction:row;
margin-top:22px;
`;
export const SousTitreDesign = styled.View`

 flex-direction:column;
margin-left:15px;
`;

export const ContainerSousTitre = styled.View`

flex-direction:column;


`;

export const TexteLorem = styled.Text`

font-size: 16px;
font-family: 'Montserrat-Regular';
color: #353745;
margin-top:21px;
margin-left:18px;

`;

export const ContainerText3et2= styled.View`

flex-direction:column;
margin-left:18px;


`;

export const Text5 = styled.Text`

font-size: 14px;
font-weight: 700;
font-family: 'Montserrat-Bold';
color: #353745;


`;


export const ContainerEllipseText= styled.View`

flex-direction:row;



`;


export const ContainerEtoileText3= styled.View`

border-radius: 5px;
background-color: #ae9152;
width: 50px;
height: 20px;
justify-content:space-between;
flex-direction:row;
margin-right:25px;

`;

export const ContainerFlecheEtoile= styled.View`



flex-direction:row;
margin-right:16px;



`;

export const TextModule = styled.Text`


font-size: 18px;
  font-weight: 700;
  font-family: 'ITC Avant Garde Gothic Pro';
  color: #353745;
 
  height: 29px;
  margin-left:20px;
margin-top:20px;
`;

export const BarreModule = styled.Image`



width: 300px;
height: 10px;


`;
export const RondBarreModule = styled.Image`



width:8px;
height: 10px;



`;

export const ContainerModule = styled.View`

margin-left:46px;
margin-top:18px;
flex-direction:row;

`;

export const TraitDetails = styled.Image`


border-style: solid;
border-color: #353745;
border-top-width: 3px;

width: 195px;


`;

export const TraitDetails2 = styled.Image`


border-style: solid;
border-color: #353745;
border-top-width: 1px;

width: 195px;
`;

export const ContainerVideo= styled.View`

flex-direction:column;


`;


export const ContainerLorem= styled.View`


flex-direction:column;

`;

export const ContainerVideoLorem= styled.View`

flex-direction:row;
width:100%;
margin-top:26px;
`;

export const ContainerLecon= styled.View`
border-radius: 15px;
shadow-color: #000;
shadow-offset: {
  width: 0;
  height: 4px;
};
shadow-radius: 8px;
elevation: 8;
shadow-opacity: 1;
border-style: solid;
border-color: rgba(53, 55, 69, 0.5);
border-width: 1px;

width: 355px;
height: 68px;
overflow: hidden;
margin-left:20px;
margin-top:15px;
flex-direction:row;
`;

export const RectangleBleuCiel= styled.View`
width:87px;
height:58px;
border-radius: 10px;
background-color:#BFD9D7;
  width: 87px;
  height: 58px;
  align-items:center;
  justify-content:center;
  margin-left:5px;
  margin-top:5px;
`;

export const Imageplay= styled.Image`

width:24px;
height:24px;
`;

export const TextLecon= styled.Text`

font-size: 12px;
font-weight: 500;
font-family: 'Montserrat-Medium';
color: #353745;


align-text:center;
`;

export const ContainerTextLecon= styled.View`
flex-direction:column;
margin-left:7px;
margin-top:15px;

`;

export const TextHeure= styled.Text`

font-size: 12px;
font-weight: 500;
font-family: 'Montserrat-Medium';
color: #353745;


`;

export const RectangleIcone= styled.View<RectangleIconeProps>`
background-color: ${props => props.secondary ? '#BFD9D7' : '#fff'};
  width: 78px;
  height: 52px;
  align-items: center;
  justify-content: center;
`;

export const ImageIcone= styled.Image`


width: 24px;
height: 24px;

`;

export const TraitIcone =styled.Image`


width: 10px;


`;

export const ContainerTraitIconeHome =styled.View`


flex-direction:row;


`;

export const ContainerEnsembleIcone =styled.View`


flex-direction:row;
margin-top:15px;
width:100%;
`;

export const TextModule1= styled.Text`

font-size: 11px;
  font-weight: 500;
  font-family: 'ITC Avant Garde Gothic Pro';
  color: #353745;
  margin-left:75%;
  margin-top:8px;


`;