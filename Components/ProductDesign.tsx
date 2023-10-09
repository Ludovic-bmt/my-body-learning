import React from "react";

import { Phone, RecommandeContainer, RecommandeText } from "../Style/AccueilUtilisateurConnectestyle";

import { AccueilContainer, FlecheImage, BookmarkImage, Titre, Inscrip, DesignImage, ImageContainer,  ElementAccueil, ElementAccueil2, GlobalContainer, ViewEtoile1, TextNombre, IconeImageDesign, TextPrix, GlobalContainer2, ImageDesign, TextTitre, ContainerTitre, Trait, GlobalContainer3, Ellipse, ContainerText, Text1,  ContainerIcone, Etoile, Fleche, ContainerEtoile, Text3, Text2, EnsembleContainer, IconeEmplacement, TextAdresse, TextCarte, ContainerEmplacementGlobal, ContainerEmplacement, TextDetail, ContainerDetail, Trait2, Text85, BoutonContainer, TextBouton, Containerfinal } from "../Style/ProductDesign.style";
import { Link } from "react-router-native";

export default function ProductDesign() {


    return (
        <Phone>
          
           <GlobalContainer>
          
                <AccueilContainer>
               
                    <ElementAccueil>
                       
                     <ElementAccueil2> 
                     <Inscrip to="/">
                          <FlecheImage source={require('../assets/flèche.png')} />
                          </Inscrip>
                        <Titre>Product Design </Titre>
                        </ElementAccueil2>
                        <BookmarkImage source={require('../assets/bookmark.png')} />
                    </ElementAccueil>

                </AccueilContainer>
               
                
          <ImageContainer>
          <RecommandeContainer>
                                    <RecommandeText>Recommandé</RecommandeText>
                                </RecommandeContainer> 
                    <DesignImage source={require('../assets/ProductDesignGrand.png')} />
                    
          </ImageContainer>
     </GlobalContainer> 
     <ContainerTitre><TextTitre>Product design - Lorem lorem</TextTitre></ContainerTitre>
<GlobalContainer2>

     <ViewEtoile1> 
     <TextNombre>4.1 </TextNombre>  
     <IconeImageDesign source={require('../assets/Star1.png')} />
     <IconeImageDesign source={require('../assets/Star1.png')} />
     <IconeImageDesign source={require('../assets/Star1.png')} />
     <IconeImageDesign source={require('../assets/Star1.png')} />
     <IconeImageDesign source={require('../assets/Star2.png')} />
                                
                                <TextPrix> (89)</TextPrix>
                                </ViewEtoile1>
                              
                               <ImageDesign source={require('../assets/Rectangledesign.png')} />      
                                
                              </GlobalContainer2>
<GlobalContainer3>
    
                              <Trait source={require('../assets/Line1.png')} />
                              <EnsembleContainer>  <Ellipse source={require('../assets/Ellipse2.png')} />
                              <ContainerText>
                              <Text1>Instructeur </Text1>
                              <Text2>Programmeur, lecteur </Text2>
                   

                              </ContainerText>
                          

                              <ContainerIcone>
<ContainerEtoile>
                              <Etoile source={require('../assets/Star4.png')} />
                              <Text3>4,4</Text3>
                              </ContainerEtoile>
                              <Fleche source={require('../assets/Fleche1.png')} />

                              </ContainerIcone>
                              </EnsembleContainer>
                              <Trait source={require('../assets/Line1.png')} />
                              </GlobalContainer3>
                              <ContainerEmplacementGlobal>
<ContainerEmplacement>
                              <IconeEmplacement source={require('../assets/icon-emplacement.png')} />
                              <TextAdresse>1.9 km - 10 rue du chemin vert, 75019 Paris</TextAdresse>
                              </ContainerEmplacement>
                             
                              <TextCarte>Voir la carte</TextCarte>

                              <TextAdresse secondary>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit tempus justo. Mauris ut mi id libero ullamcorper pharetra faucibus nec leo.</TextAdresse>
                              <Link to="/Details">
                              <TextCarte>Details du cours </TextCarte>
                              </Link>
                              </ContainerEmplacementGlobal>

                              <ContainerDetail>
                              <TextDetail>Langue : Français</TextDetail>
                              <TextDetail>24 leçons vidéos, 35 heures de matériels</TextDetail>
                              <TextDetail>25 support PDF</TextDetail>
                              <TextDetail>8 modules pratiques</TextDetail>
                              <TextDetail>100% en ligne</TextDetail>
                              </ContainerDetail>

                              <Trait2  source={require('../assets/Line1.png')} />
                              <Containerfinal> 
                              <Text85>85 € </Text85>

                              <Inscrip to="/Paiement">
                                 <BoutonContainer>
                                    <>
                              <TextBouton>Options de paiement</TextBouton>
                              </>
                              </BoutonContainer>
                              </Inscrip>
                              </Containerfinal> 
        </Phone>

    );
};