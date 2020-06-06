import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PlayerItem from './PlayerItem';
import {useSelector} from 'react-redux';

const PlayerList = props => {
    const favoritePlayers = useSelector(state => state.players.favoritePlayers);

    const renderPlayerItem = itemData => {
        const isFavorite = favoritePlayers.some(player => player.id === itemData.item.id);
        return (
            <PlayerItem 
                title={itemData.item.title} 
                image={itemData.item.imageURL} 
                onSelectPlayer={() => {
                    props.navigation.navigate({
                        routeName: 'PlayerDetail', 
                        params: {
                            playerID: itemData.item.id,
                            playerTitle: itemData.item.title,
                            isFav: isFavorite,
                        } 
                    });
                } } 
            />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList 
                data={props.listData} 
                keyExtractor={(item, index) => item.id} 
                renderItem={renderPlayerItem} 
                style={{width: '100%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PlayerList;

