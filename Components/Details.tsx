import React from "react";
import { ContainerEtoile, ContainerIcone, ContainerText, ElementAccueil, ElementAccueil2, Ellipse, EnsembleContainer, Etoile, Fleche, FlecheImage, GlobalContainer3, Inscrip, Phone, Text2, Text3, Titre, Trait } from "../Style/ProductDesign.style";
import { ContainerText1, EnsembleElement, GlobalAcccueil, PaiementImage, Text1 } from "../Style/Paiement.style";
import {  BarreModule, BlocDesign, ContainerEllipseText, ContainerEnsembleIcone, ContainerEtoileText3, ContainerFlecheEtoile,  ContainerLecon,  ContainerLorem,  ContainerModule,  ContainerSousTitre,  ContainerText3et2, ContainerTextLecon, ContainerTraitIconeHome, ContainerVideo, ContainerVideoLorem, DetailsImage, ElementDetails, ImageIcone, Imageplay, Phone1, RectangleBleuCiel, RectangleIcone, RondBarreModule, SousTitre, SousTitreDesign,  SousTitreImage, Text5, TextHeure, TextLecon, TextModule,  TexteLorem, TitreDetails, TraitDetails, TraitDetails2, TraitIcone } from "../Style/Details.style";
import { Link } from "react-router-native";
import { TextModule1 } from "../Style/Details.style";


export default function Details() {


    return (
        <Phone1>

                 <ElementDetails> 
                          <Inscrip to="/ProductDesign">
                          <FlecheImage source={require('../assets/flèche.png')} />
                          </Inscrip>
                          <TitreDetails>Details</TitreDetails>
                </ElementDetails>

                <SousTitreImage>
                          <DetailsImage source={require('../assets/PhotoPaiement.png')} />
                <SousTitreDesign> 
                <ContainerSousTitre>        
                          <SousTitre>Product design - </SousTitre>
                          <SousTitre>Lorem lorem</SousTitre>
                </ContainerSousTitre> 
                          <BlocDesign></BlocDesign>
                </SousTitreDesign>           
                </SousTitreImage>         
                         
                           <TexteLorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit tempus justo. Mauris ut mi id libero ullamcorper pharetra faucibus nec leo.</TexteLorem>

              
    
                            <Trait source={require('../assets/Line1.png')} />
               

                <ContainerEllipseText>
                            <Ellipse source={require('../assets/Ellipse2.png')} />
                     
                <ContainerText3et2>
                            <Text5>Instructeur </Text5>
                            <Text2>Programmeur, lecteur </Text2>
                </ContainerText3et2>
                
                </ContainerEllipseText>
                <ContainerFlecheEtoile>

                <ContainerEtoileText3>
                              <Etoile source={require('../assets/Star4.png')} />
                              <Text3>4,4</Text3>
                </ContainerEtoileText3> 
                              <Fleche source={require('../assets/Fleche1.png')} />

                 </ContainerFlecheEtoile>
                 
                            <Trait source={require('../assets/Line1.png')} />
                 
                          
                            <TextModule>Votre avancé sur ce module</TextModule>
<ContainerModule>
<RondBarreModule source={require('../assets/rondmodule.png')} />
<BarreModule source={require('../assets/barremodule.png')} />

                                 
</ContainerModule>
                             <TextModule1>1% terminé</TextModule1>
<ContainerVideoLorem>
<ContainerVideo>

                             <TextModule>Video</TextModule>
                             <TraitDetails source={require('../assets/LigneDetails.png')} />           
</ContainerVideo> 
<ContainerLorem>                    
                             <TextModule>Lorem</TextModule>
                             <TraitDetails2 source={require('../assets/Ligne2Details.jpg')} />    
</ContainerLorem> 
</ContainerVideoLorem>

                             <TextModule>24 Leçons</TextModule>
<ContainerLecon>
<RectangleBleuCiel>
                             <Imageplay source={require('../assets/Play.png')} />
</RectangleBleuCiel>
<ContainerTextLecon>
                             <TextLecon>Introduction Lorem ipsum dolor</TextLecon>
                             <TextHeure>45.30</TextHeure>
</ContainerTextLecon>
</ContainerLecon>

<ContainerLecon>
<RectangleBleuCiel>
                             <Imageplay source={require('../assets/Play.png')} />
</RectangleBleuCiel>
<ContainerTextLecon>
                             <TextLecon>Introduction Lorem ipsum dolor</TextLecon>
                             <TextHeure>45.30</TextHeure>
</ContainerTextLecon>
</ContainerLecon>

<ContainerLecon>
<RectangleBleuCiel>
                             <Imageplay source={require('../assets/Play.png')} />
</RectangleBleuCiel>
<ContainerTextLecon>
                             <TextLecon>Introduction Lorem ipsum dolor</TextLecon>
                             <TextHeure>45.30</TextHeure>
</ContainerTextLecon>
</ContainerLecon>

<ContainerEnsembleIcone>
<ContainerTraitIconeHome>
<RectangleIcone>
                            <ImageIcone source={require('../assets/home.png')} />
                            <TextLecon>Accueil</TextLecon>

</RectangleIcone>

                            <TraitIcone source={require('../assets/TraitIcone.png')} />
</ContainerTraitIconeHome>

<ContainerTraitIconeHome>
<RectangleIcone>
                            <ImageIcone source={require('../assets/chat.png')} />
                            <TextLecon>Chat</TextLecon>

</RectangleIcone>

                            <TraitIcone source={require('../assets/TraitIcone.png')} />
</ContainerTraitIconeHome>

<ContainerTraitIconeHome>
<RectangleIcone>
                            <ImageIcone source={require('../assets/visioicone.png')} />
                            <TextLecon>Visio</TextLecon>

</RectangleIcone>

                            <TraitIcone source={require('../assets/TraitIcone.png')} />
</ContainerTraitIconeHome>


<ContainerTraitIconeHome>
<RectangleIcone>
                            <ImageIcone source={require('../assets/bookmarkicone.png')} />
                            <TextLecon>Enregistré</TextLecon>

</RectangleIcone>

                            <TraitIcone source={require('../assets/TraitIcone.png')} />
</ContainerTraitIconeHome>

<ContainerTraitIconeHome>
<RectangleIcone secondary>
                            <ImageIcone source={require('../assets/iconeprofil.png')} />
                            <TextLecon>Profil</TextLecon>

</RectangleIcone>

                            <TraitIcone source={require('../assets/TraitIcone.png')} />
</ContainerTraitIconeHome>

</ContainerEnsembleIcone>
        </Phone1>
    );
};