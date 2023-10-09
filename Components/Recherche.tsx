import {  ContainerEnsembleIcone, ContainerTraitIconeHome, ImageIcone, Phone1, RectangleIcone, TextLecon, TraitIcone } from "../Style/Details.style";
import React from "react";
import { AccueilContainer, BarreControle, ContainerBarreMicrophone, ContainerRecherche, ContainerRecherche2, ContainerRechercheGlobal, Microphone, Recherche, TextRecherche, TextRecherche2 } from "../Style/Recherche.style";
import { FlecheImage, Inscrip } from "../Style/ProductDesign.style";
import { Link } from "react-router-native";


export default function Details() {


    return (
 <Phone1>
    <AccueilContainer>
                          <Link to="/">
                          <FlecheImage source={require('../assets/flèche.png')} />
                          </Link>
    <ContainerRecherche>

    <Recherche source={require('../assets/search1.png')} />
        
    <ContainerBarreMicrophone>
                          <BarreControle source={require('../assets/controls-alt.png')} />
                          <Microphone source={require('../assets/microphone.png')} />
    </ContainerBarreMicrophone>  
    

    </ContainerRecherche>

    </AccueilContainer>

    <TextRecherche>Top Recherche</TextRecherche>
 <ContainerRechercheGlobal>
    <ContainerRecherche2>
                           <TextRecherche2>Design</TextRecherche2>
    </ContainerRecherche2>

    <ContainerRecherche2>
                           <TextRecherche2>Java</TextRecherche2>
    </ContainerRecherche2>

    <ContainerRecherche2>
                           <TextRecherche2>Design</TextRecherche2>
    </ContainerRecherche2>

    <ContainerRecherche2>
                           <TextRecherche2>Java</TextRecherche2>
    </ContainerRecherche2>
</ContainerRechercheGlobal>

<ContainerEnsembleIcone>
<ContainerTraitIconeHome>
<RectangleIcone secondary>
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
<RectangleIcone >
                            <ImageIcone source={require('../assets/iconeprofil.png')} />
                            <TextLecon>Profil</TextLecon>

</RectangleIcone>

                            <TraitIcone source={require('../assets/TraitIcone.png')} />
</ContainerTraitIconeHome>

</ContainerEnsembleIcone>


</Phone1>


       
        );
    };