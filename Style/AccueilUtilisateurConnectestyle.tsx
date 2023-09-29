import styled from "styled-components/native";

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
left: 20px;
letter-spacing: 0;
line-height: normal;
position: absolute;
top: 156px;
height: 28px;
width: 175px;
`;

export const BarreRecherche = styled.TouchableOpacity`
height: 30px ;
left: 289px ;
position: absolute ;
top: 71px ;
width: 30px ;
`;

export const Notification = styled.TouchableOpacity`
height: 30px ;
left: 335px ;
position: absolute ;
top: 71px ;
width: 30px ;
`;


// Stylisé FlatList
export const FlatList = styled.FlatList`
  margin-top: 190px; // décalage en dessous du titre "Catégories"
  height: 300px; // hauteur fixe pour la démonstration, ajustez selon vos besoins
`;

