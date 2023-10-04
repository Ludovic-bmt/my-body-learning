import React from "react";
import { View, Image, Text, TouchableOpacity, } from "react-native";
import { Phone, PhoneContainer, TextUtilisateur, TextCategories, Notification, BarreRecherche, SafeContainer, StyledScrollView, ImageWrapper, StyledImage, StyledText, ContainerText, ItemContainer, TextRecommandation, ContainerFrame1, FrameImage, TextDesign, Text1, Text2, IconeImage, RecommandeContainer, RecommandeText, ContainerFrame2, GratuitText, GratuitContainer, TextToutVoir, StyledScrollView1, SafeContainer1, TextFormationsPopulaires, FormationsPopulairesContainer1, FormationsPopulairesContainer2, Image1, Image2, PopulaireContainer, PopulaireText, Text3, Text4, IconeImage1, Textux, Textmotion, Text5, IconeImage2, BellImage, SearchImage, NouveautéContainer, NouveautéText, ContainerView,CategorieView } from "../Style/AccueilUtilisateurConnectestyle";
import { Inscrip } from "../Style/ProductDesign.style";


export default function AccueilUtilisateurConnecte() {


    return (
        <Phone>
            <PhoneContainer>
                <View>
                    {/* Titre avec le nom de l'utilisateur */}
                    <TextUtilisateur>Bonjour, username</TextUtilisateur>
                    
                    {/* Barre de recherche */}
                    <ContainerView>
                        < BarreRecherche>
                            <SearchImage source={require('../assets/search.png')} />
                        </BarreRecherche>

                        {/* Bouton de notifications */}
                        <Notification>
                            <BellImage source={require('../assets/bell.png')} />
                        </Notification>
                    </ContainerView>

                    {/* Titre "Catégories" */}
                   <CategorieView>
                     <TextCategories>Catégories</TextCategories>
                    <TextToutVoir >Tout voir</TextToutVoir>
                    </CategorieView>
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
                    <TextRecommandation>Recommandé pour vous</TextRecommandation>
                    <SafeContainer1>
                        <StyledScrollView1 horizontal={true}>

                            <ContainerFrame1>
                                <>
                                    <FrameImage source={require('../assets/rectangle48.png')} />
                                    <Inscrip to="/ProductDesign">
                                        <TextDesign>Product Design - Lorem lorem</TextDesign>
                                    </Inscrip>
                                    <Text1>85 €</Text1>
                                    <Text2>4.1 (89)</Text2>
                                    <IconeImage source={require('../assets/Star1.png')} />
                                    <RecommandeContainer>
                                        <RecommandeText>Recommandé</RecommandeText>
                                    </RecommandeContainer>
                                </>
                            </ContainerFrame1>

                            <ContainerFrame2>
                                <FrameImage source={require('../assets/illustration.png')} />
                                <TextDesign>Illustration - Initiation,</TextDesign>
                                <Text1>85 €</Text1>
                                <Text2>4.1 (89)</Text2>
                                <IconeImage source={require('../assets/Star1.png')} />
                                <GratuitContainer>
                                    <GratuitText>Gratuit</GratuitText>
                                </GratuitContainer>
                            </ContainerFrame2>
                        </StyledScrollView1>
                    </SafeContainer1>
                    <TextFormationsPopulaires>Formations Populaire</TextFormationsPopulaires>
                    <FormationsPopulairesContainer1>

                        <Image1 source={require('../assets/uxdesign.png')} />
                        <PopulaireContainer>
                            <PopulaireText>Populaire</PopulaireText>
                        </PopulaireContainer>
                        <Text3>85 €</Text3>
                        <Text4>4.1 (89)</Text4>
                        <Textux>UI/UX Design</Textux>
                        <Text5>Alain</Text5>
                        <IconeImage2 source={require('../assets/Ellipse1.png')} />

                        <IconeImage1 source={require('../assets/Rectangle2.png')} />
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
                    <TextFormationsPopulaires>Formations Récentes</TextFormationsPopulaires>
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
                </View>
            </PhoneContainer>
        </Phone>
    );
};