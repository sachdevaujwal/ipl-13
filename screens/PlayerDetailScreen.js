import React, {useEffect, useCallback} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {toggleFavorite} from '../store/actions/playerss'

const PlayerDetailScreen = props => {
    
    const availablePlayers = useSelector (state => state.players.players);

    const playerID = props.navigation.getParam ('playerID');

    const currentPlayerIsFavorite = useSelector(state => state.players.favoritePlayers.some(player => player.id === playerID));

    const selectedPlayer= availablePlayers.find (player => player.id === playerID);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(playerID) );
    }, [dispatch, playerID]);

    useEffect(()=> {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});      
    }, [toggleFavoriteHandler] );

    useEffect(()=> {
        props.navigation.setParams({isFav: currentPlayerIsFavorite});
    }, [currentPlayerIsFavorite]);

    return (
        <ScrollView>
            <Image source={{uri: selectedPlayer.imageURL}} style={styles.image} />

            <Text style={styles.textTitle}>MATCHES</Text>
            <Text style={styles.textSubTitle}>{selectedPlayer.matches}</Text>

            <Text style={styles.textTitle}>RUNS</Text>
            <Text style={styles.textSubTitle}>{selectedPlayer.runs}</Text>

            <Text style={styles.textTitle}>WICKETS</Text>
            <Text style={styles.textSubTitle}>{selectedPlayer.wickets}</Text>
        </ScrollView>
    );
};

PlayerDetailScreen.navigationOptions= (navigationData) => {
    //const playerID = navigationData.navigation.getParam('playerID');

    const playerTitle = navigationData.navigation.getParam('playerTitle');

    const toggleFavorite = navigationData.navigation.getParam('toggleFav');

    const isFavorite = navigationData.navigation.getParam('isFav');
    
    // const selectedPlayer= PLAYERS.find (player => player.id === playerID);
    
    return {
        headerTitle: playerTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item 
                    title='FAVORITE!' 
                    iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} 
                    onPress={toggleFavorite} 
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 300, 
    },
    textTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    },
    textSubTitle: {
        fontFamily: 'open-sans',
        fontSize: 16,
        textAlign: 'center',
    }
});

export default PlayerDetailScreen;