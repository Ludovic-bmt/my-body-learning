import React from "react";

import { Phone} from "../Style/AccueilUtilisateurConnectestyle";
import { AccueilContainer, Containerfinal, ElementAccueil, ElementAccueil2, FlecheImage, Inscrip, Text85, TextBouton, Titre, Trait2 } from "../Style/ProductDesign.style";
import { BoutonContainer, BoutonPaiement, ContainerAutre, ContainerBoutonPaiement, ContainerCarte, ContainerCarteInput, ContainerCvvDate, ContainerExpiration, ContainerInput, ContainerText, ContainerText1, ContainerTextTotal, ContainerfinalPaiement, EnsembleElement, GlobalAcccueil,  PaiementAutre, PaiementContainer, PaiementIcone, PaiementImage, StyledTCarteInput, StyledTextInput, Text1, Text2, TextPaiement, TextPlusieursfois, TextTotal } from "../Style/Paiement.style";


export default function Paiement() {


    return (
        <Phone>

            <GlobalAcccueil>
                <ElementAccueil>
                  
                   <ElementAccueil2> 
                        <Inscrip to="/ProductDesign">
                          <FlecheImage source={require('../assets/flèche.png')} />
                        </Inscrip>
                           <Titre>Options de paiement</Titre>
                   </ElementAccueil2>
                   
               </ElementAccueil>
            </GlobalAcccueil>
            <EnsembleElement>
                     <PaiementImage source={require('../assets/PhotoPaiement.png')} />
               <ContainerText1>
                              <Text1>Product design - Lorem lorem </Text1>
                              <Text2>Instructeur </Text2>
                   

               </ContainerText1>
            </EnsembleElement>
            <PaiementContainer>
                  <ContainerText>
                                 <TextPaiement>Choisissez votre mode de paiement</TextPaiement>
                  </ContainerText>
                              
                  <BoutonContainer>
                                <PaiementIcone source={require('../assets/PaiementApple.png')}></PaiementIcone>
                                <PaiementIcone source={require('../assets/PaiementPaypal.png')}></PaiementIcone>
                                <PaiementIcone source={require('../assets/PaiementVisa.png')}></PaiementIcone>
                         <ContainerAutre>
                                <PaiementAutre>+</PaiementAutre>
                         </ContainerAutre>
                  </BoutonContainer>
                                <TextPlusieursfois>Payer en 2x ou 5x avec Klarna</TextPlusieursfois>
            </PaiementContainer>
            <ContainerCarte>
                                <TextPaiement>Numéro de la carte </TextPaiement>

                <ContainerInput>
                              <StyledTextInput placeholder="6543 6543 4333"/>
                </ContainerInput>
                    <ContainerCvvDate>
                        <ContainerExpiration>
                              <TextPaiement>Date d'expiration</TextPaiement>
                               <ContainerCarteInput>
                              <StyledTCarteInput placeholder="" />
                              </ContainerCarteInput>
                        </ContainerExpiration>     
                              
                        <ContainerExpiration>      
                              <TextPaiement>CVV </TextPaiement>
                              <ContainerCarteInput>
                              <StyledTCarteInput placeholder=""/>
                              </ContainerCarteInput>
                        </ContainerExpiration> 
                     </ContainerCvvDate>          
                              
                 
             </ContainerCarte>

             <Trait2  source={require('../assets/Line1.png')} />
           <ContainerfinalPaiement> 
                     <ContainerTextTotal>
                              <TextTotal>Total</TextTotal>
                              <Text85>85 € </Text85>
                     </ContainerTextTotal>
                              <Inscrip to="">
                          <ContainerBoutonPaiement>       <BoutonPaiement>
                                    <>
                              <TextBouton>Confirmer le  paiement</TextBouton>
                              </>
                              </BoutonPaiement>
                              </ContainerBoutonPaiement>
                              </Inscrip>
             </ContainerfinalPaiement> 

        </Phone>
    );
};