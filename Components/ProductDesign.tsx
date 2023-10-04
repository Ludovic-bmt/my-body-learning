import React from "react";
import { View, Image, Text, TouchableOpacity, } from "react-native";
import { Phone, PhoneContainer } from "../Style/AccueilUtilisateurConnectestyle";

import { AccueilContainer, FlecheImage, BookmarkImage, Titre, Inscrip, DesignImage, ImageContainer, RecommandeContainer, RecommandeText } from "../Style/ProductDesign.style";

export default function ProductDesign() {


    return (
        <Phone>
            <PhoneContainer>
                <AccueilContainer>
                    <>
                        {/* <Inscrip to="/"> */}
                        <FlecheImage source={require('../assets/flèche.png')} />
                        {/* </Inscrip> */}
                        <Titre>Product Design </Titre>
                        <BookmarkImage source={require('../assets/bookmark.png')} />
                    </>
                </AccueilContainer>
                <ImageContainer>
                    <DesignImage source={require('../assets/ProductDesignGrand.png')} />
                    <RecommandeContainer>
                        <RecommandeText>Recommandé</RecommandeText>
                    </RecommandeContainer>
                </ImageContainer>
            </PhoneContainer>
        </Phone>

    );
};