import React from 'react';
import {View, Text, Button, FlatList, StyleSheet, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {CATEGORIES} from '../data/dummy-data';
import TeamScreen from './TeamScreen';
import Colors from '../constants/Colors';
import PlayerItem from '../components/PlayerItem';
import PlayerList from '../components/PlayerList';

const TeamSquadScreen = props => {

    const teamid = props.navigation.getParam('TeamID');

    const availablePlayers= useSelector(state => state.players.filteredPlayers);

    const displayedPlayers = availablePlayers.filter (
        player => player.teamids.indexOf(teamid)>= 0
    );

    return <PlayerList listData={displayedPlayers} navigation={props.navigation} />;
};

TeamSquadScreen.navigationOptions = (navigationData) => {
    const teamid = navigationData.navigation.getParam ('TeamID');
    const SelectedTeam = CATEGORIES.find(team => team.id === teamid);
    return {
        headerTitle: SelectedTeam.title,        
    };
};

export default TeamSquadScreen;