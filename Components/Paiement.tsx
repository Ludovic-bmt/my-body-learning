import React from "react";
import { View, Image, Text, TouchableOpacity, } from "react-native";
import { Phone, ViewContainer,GlobalFormation,ViewBienvenue, TextUtilisateur, TextCategories, Notification, BarreRecherche, SafeContainer, StyledScrollView, ImageWrapper, StyledImage, StyledText, ContainerText, ItemContainer, TextRecommandation, ContainerFrame1, FrameImage, TextDesign, Text1, Text2, IconeImage, RecommandeContainer, RecommandeText, ContainerFrame2, GratuitText, GratuitContainer, TextToutVoir, StyledScrollView1, SafeContainer1, TextFormationsPopulaires, FormationsPopulairesContainer1, FormationsPopulairesContainer2, Image1, Image2, PopulaireContainer, PopulaireText, Text3, Text4, IconeImage1, Textux, Textmotion, Text5, IconeImage2, BellImage, SearchImage, NouveautéContainer, NouveautéText, ContainerIcone, InfoContainer, PrixEtoileContainer, ViewEtoile, DesignContainer,} from "../Style/AccueilUtilisateurConnectestyle";
import { AccueilContainer, ElementAccueil, ElementAccueil2, FlecheImage, Inscrip, Titre } from "../Style/ProductDesign.style";


export default function Paiment() {


    return (
        <Phone>

<AccueilContainer>
               
               <ElementAccueil>
                  
                <ElementAccueil2> 
                <Inscrip to="ProductDesign">
                     <FlecheImage source={require('../assets/flèche.png')} />
                     </Inscrip>
                   <Titre>Options de paiement</Titre>
                   </ElementAccueil2>
                  
               </ElementAccueil>

           </AccueilContainer>
           
        </Phone>
    );
};