import React from 'react';
import {View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors'
import TeamGridTile from '../components/TeamGirdTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const TeamScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TeamGridTile 
                title={itemData.item.title}
                color = {itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'TeamSquad', 
                        params:{
                            TeamID: itemData.item.id,
                        }    
                    });
                } } 
            />
        );    
    };
    
    return (
        <FlatList
            keyExtractor={(item, index)=> item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

TeamScreen.navigationOptions = (navData) => {
    return {

        headerTitle: 'Indian Premier League Teams',
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
});

export default TeamScreen;