import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlayerList from '../components/PlayerList';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
    
    const favPlayers = useSelector(state => state.players.favoritePlayers);

    if (favPlayers.length===0 || !favPlayers){
        return (
            <View style={styles.content}>
                <Text style={styles.favText}>No Favourites added yet! Start adding using the Star Icon!</Text>
            </View>
        );
    } 

    return <PlayerList listData={favPlayers} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
    return {

        headerTitle: 'Your Favourites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                } }/>
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    content: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    favText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 25,
    }
});

export default FavoritesScreen;