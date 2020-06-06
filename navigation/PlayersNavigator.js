import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Platform, Text} from 'react-native';
import TeamScreen from '../screens/TeamScreen';
import TeamSquadScreen from '../screens/TeamSquadScreen';
import PlayerDetailScreen from '../screens/PlayerDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold',
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor ,

};

const PlayersNavigator = createStackNavigator({
    Teams: {
        screen: TeamScreen,
        navigationOptions: {
            headerTitle: 'Indian Premier League Teams',
        },
    },
    TeamSquad: {
        screen: TeamSquadScreen,
    },
    PlayerDetail: PlayerDetailScreen,
}, {
    defaultNavigationOptions: defaultStackNavOptions,
}, 
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        PlayerDetail: PlayerDetailScreen,
    }, 
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }, 
);

const tabScreenConfig = {
        Players: {
            screen: PlayersNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <MaterialCommunityIcons name="cricket" size={24} color={tabInfo.tintColor} />;
                },
                tabBarColor: Colors.accentColor,
                tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Teams</Text> : 'Teams'
            }
        },
        Favorites: {
            screen: FavNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />;
                },
                tabBarColor: Colors.primaryColor,
                tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favourites</Text> : 'Favourites'
            }
        },
};


const PlayersFavTabNavigator = 
    Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
        } ) 
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'open-sans',
                },
                activeTintColor: 'white',
            }
        });

        const FiltersNavigator = createStackNavigator({
            Filters: FiltersScreen,
        }, {
                defaultNavigationOptions: defaultStackNavOptions,
        });

const MainNavigator = createDrawerNavigator({
    PlayersFavs: {
        screen: PlayersFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Home",
        }
    },
    Filters: FiltersNavigator,
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
        }
    }
});

export default createAppContainer(MainNavigator);