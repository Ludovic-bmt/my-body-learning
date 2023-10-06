import React from "react";
import { View, Image, Text, TouchableOpacity, } from "react-native";
import { Phone, ViewContainer,GlobalFormation,ViewBienvenue, TextUtilisateur, TextCategories, Notification, BarreRecherche, SafeContainer, StyledScrollView, ImageWrapper, StyledImage, StyledText, ContainerText, ItemContainer, TextRecommandation, ContainerFrame1, FrameImage, TextDesign, Text1, Text2, IconeImage, RecommandeContainer, RecommandeText, ContainerFrame2, GratuitText, GratuitContainer, TextToutVoir, StyledScrollView1, SafeContainer1, TextFormationsPopulaires, FormationsPopulairesContainer1, FormationsPopulairesContainer2, Image1, Image2, PopulaireContainer, PopulaireText, Text3, Text4, IconeImage1, Textux, Textmotion, Text5, IconeImage2, BellImage, SearchImage, NouveautéContainer, NouveautéText, ContainerIcone, InfoContainer, PrixEtoileContainer, ViewEtoile, DesignContainer,} from "../Style/AccueilUtilisateurConnectestyle";
import { Inscrip } from "../Style/ProductDesign.style";


export default function AccueilUtilisateurConnecte() {


    return (
        <Phone>
            {/* <PhoneContainer> */}
                
                    {/* Titre avec le nom de l'utilisateur */}
                   <ViewBienvenue> 
                    <TextUtilisateur>Bonjour, username !</TextUtilisateur>
                    </ViewBienvenue>
                    
                    {/* Barre de recherche */}
                    <ContainerIcone>
                        < BarreRecherche>
                            <SearchImage source={require('../assets/search.png')} />
                        </BarreRecherche>
                           
                        {/* Bouton de notifications */}
                        <Notification>
                            <BellImage source={require('../assets/bell.png')} />
                        </Notification>
                    </ContainerIcone>

                    {/* Titre "Catégories" */}
                   <ViewContainer>
                     <TextCategories>Catégories</TextCategories>
                    <TextToutVoir >Tout voir</TextToutVoir>
                    </ViewContainer>
                    <SafeContainer>
                        <StyledScrollView horizontal={true}>
                            <ItemContainer>
                                <ImageWrapper>
                                    <StyledImage source={require('../assets/art1.png')} />
                                </ImageWrapper>
                                <ContainerText>
                                    <StyledText>Art & Humanité</StyledText>
                                </ContainerText>
                            </ItemContainer>

                            <ItemContainer>
                                <ImageWrapper>
                                    <StyledImage source={require('../assets/business-model.png')} />
                                </ImageWrapper>
                                <ContainerText>
                                    <StyledText>Business</StyledText>
                                </ContainerText>
                            </ItemContainer>

                            <ItemContainer>
                                <ImageWrapper>
                                    <StyledImage source={require('../assets/ensemble-informatique.png')} />
                                </ImageWrapper>
                                <ContainerText>
                                    <StyledText>Sciences des données</StyledText>
                                </ContainerText>
                            </ItemContainer>

                            <ItemContainer>
                                <ImageWrapper>
                                    <StyledImage source={require('../assets/departement-it.png')} />
                                </ImageWrapper>
                                <ContainerText>
                                    <StyledText>IT</StyledText>
                                </ContainerText>
                            </ItemContainer>

                            <ItemContainer>
                                <ImageWrapper>
                                    <StyledImage source={require('../assets/developpement.png')} />
                                </ImageWrapper>
                                <ContainerText>
                                    <StyledText>Développement personnel</StyledText>
                                </ContainerText>
                            </ItemContainer>
                        </StyledScrollView>
                    </SafeContainer>
                   <ViewContainer> 
                    <TextRecommandation>Recommandé pour vous</TextRecommandation>
                    <TextToutVoir>Tout Voir </TextToutVoir>
                    </ViewContainer>
                    <SafeContainer1>
                        <StyledScrollView1 horizontal={true}>
                        <RecommandeContainer>
                                    <RecommandeText>Recommandé</RecommandeText>
                                </RecommandeContainer>
                                <Inscrip to="/ProductDesign">
                            <ContainerFrame1>
                            <FrameImage source={require('../assets/uxdesign.png')} />
                               
                               <InfoContainer>
                              
                              
                              <TextDesign>Product Design - Lorem lorem</TextDesign>
                                
                                <PrixEtoileContainer>
                               
                                <ViewEtoile> 
                                <IconeImage source={require('../assets/Star1.png')} />
                                <Text2>4.1 (89)</Text2> </ViewEtoile>
                               
                                <Text1>85 €</Text1>
                                </PrixEtoileContainer>
                                </InfoContainer>
                            </ContainerFrame1>
                            </Inscrip>
                            <GratuitContainer>
                                    <GratuitText>Gratuit</GratuitText>
                                </GratuitContainer>
                            <ContainerFrame2>
                                <FrameImage source={require('../assets/illustration.png')} />
                               
                               <InfoContainer>
                              
                              
                              <TextDesign>Illustration - Initiation,</TextDesign>
                                
                                <PrixEtoileContainer>
                               
                                <ViewEtoile> 
                                <IconeImage source={require('../assets/Star1.png')} />
                                <Text2>4.1 (89)</Text2> </ViewEtoile>
                               
                                <Text1>85 €</Text1>
                                </PrixEtoileContainer>
                                </InfoContainer>
                            </ContainerFrame2>
                        </StyledScrollView1>
                    </SafeContainer1>
                   <ViewContainer>
                    <TextFormationsPopulaires>Formations Populaire</TextFormationsPopulaires>
                    <TextToutVoir>Tout Voir </TextToutVoir>
                   </ViewContainer> 
                   <GlobalFormation>
                   <PopulaireContainer>
                            <PopulaireText>Populaire</PopulaireText>
                        </PopulaireContainer>
                    <FormationsPopulairesContainer1>
                    <Image1 source={require('../assets/uxdesign.png')} />
                    <DesignContainer>
                        <Textux>UI/UX Design</Textux>
                        <IconeImage1 source={require('../assets/Rectangle2.png')} />
                        </DesignContainer>

                        <PrixEtoileContainer>
                      <ViewEtoile> 
                      <IconeImage2 source={require('../assets/Star1.png')} />
                        <Text4>4.1 (89)</Text4>
                        
                        </ViewEtoile>
                        <Text3>85 €</Text3>
                        </PrixEtoileContainer>
                     <InfoContainer> 
                     <IconeImage2 source={require('../assets/Ellipse1.png')} />
                          <Text5>Alain</Text5>
                 
                        </InfoContainer>

                        
                    </FormationsPopulairesContainer1>

                    <FormationsPopulairesContainer2>

                        <Image2 source={require('../assets/motiondesign.png')} />
                        <PopulaireContainer>
                            <PopulaireText>Populaire</PopulaireText>
                        </PopulaireContainer>
                        <Text3>85 €</Text3>
                        <Text4>4.1 (89)</Text4>
                        <Text5>Bain </Text5>
                        <Textmotion>Motion Design</Textmotion>
                        <IconeImage2 source={require('../assets/Star1.png')} />
                        <IconeImage1 source={require('../assets/Rectangle2.png')} />
                    </FormationsPopulairesContainer2>
                    </GlobalFormation>
                  <ViewContainer> 
                    <TextFormationsPopulaires>Formations Récentes</TextFormationsPopulaires>
                    <TextToutVoir>Tout Voir </TextToutVoir>
                  </ViewContainer> 
                  <GlobalFormation>
                    <FormationsPopulairesContainer1>

                        <Image1 source={require('../assets/illustrator.png')} />
                        <NouveautéContainer>
                            <NouveautéText>Nouveauté</NouveautéText>
                        </NouveautéContainer>
                        <Text3>85 €</Text3>
                        <Text4>4.1 (89)</Text4>
                        <Textux>Illustrator -
                            CV graphique</Textux>
                        <Text5>Aline</Text5>
                        <IconeImage2 source={require('../assets/Ellipse1.png')} />

                        <IconeImage1 source={require('../assets/Rectangle2.png')} />
                    </FormationsPopulairesContainer1>

                    <FormationsPopulairesContainer2>

                        <Image2 source={require('../assets/javascript.png')} />
                        <NouveautéContainer>
                            <NouveautéText>Nouveauté</NouveautéText>
                        </NouveautéContainer>
                        <Text3>85 €</Text3>
                        <Text4>4.1 (89)</Text4>
                        <Text5>Bessom</Text5>
                        <Textmotion>Javascript-Les,bases</Textmotion>
                        <IconeImage2 source={require('../assets/Star1.png')} />
                        <IconeImage1 source={require('../assets/Rectangle2.png')} />
                    </FormationsPopulairesContainer2>
                    </GlobalFormation>
                
            {/* </PhoneContainer> */}
        </Phone>
    );
};