import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { Phone, PhoneContainer, TextUtilisateur, TextCategories, Notification, BarreRecherche } from "../Style/AccueilUtilisateurConnectestyle";

export default function AccueilUtilisateurConnecte() {
    const iconData = [
        { id: '1', source: require('../assets/art1.png') },
        { id: '2', source: require('../assets/business-model.png') },
        { id: '3', source: require('../assets/ensemble-informatique.png') },
        { id: '4', source: require('../assets/departement-it.png') },
        { id: '5', source: require('../assets/developpement.png') },
    ];

    return (
        <Phone>
            <PhoneContainer>
                <View>
                    {/* Titre avec le nom de l'utilisateur */}
                    <TextUtilisateur>Bonjour, username</TextUtilisateur>

                    {/* Barre de recherche */}
                    < BarreRecherche>
                        <Image source={require('../assets/search.svg')} />

                    </BarreRecherche>

                    {/* Bouton de notifications */}
                    <Notification>
                        <Image source={require('../assets/bell.svg')} />
                    </Notification>

                    {/* Titre "Catégories" */}
                    <TextCategories>Catégories</TextCategories>

                    {/* Divs avec icônes */}
                    <FlatList
                        data={iconData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View >
                                <Image source={item.source} />
                            </View>
                        )}
                    />
                </View>
            </PhoneContainer>
        </Phone>
    );
};