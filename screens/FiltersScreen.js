import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/playerss';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.textfiltercontent}>{props.label}</Text>            
            <Switch 
                trackColor={{true: Colors.primaryColor}}
                thumbColor= {Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={props.state} 
                onValueChange={props.onChange} 
            />
        </View>
    );
};

const FiltersScreen = props => {
    const { navigation } = props;

    const [isIndian, setIsIndian] = useState (false);
    const [isInternational, setIsInternational] = useState (false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            indian: isIndian,
            international: isInternational,
        };

        dispatch(setFilters(appliedFilters));
    }, [isIndian, isInternational, dispatch]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters] );

    return (
        <View style={styles.screen}>
            <Text style={styles.Texttitle}>Available Filters</Text>
            
            <FilterSwitch 
                label="INDIAN PLAYERS" 
                state={isIndian} 
                onChange={newValue => setIsIndian(newValue)} 
            />

            <FilterSwitch 
                label="INTERNATIONAL PLAYERS" 
                state={isInternational} 
                onChange={newValue => setIsInternational(newValue)} 
            />      

        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filters',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    } }
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Save"
                    iconName="ios-save"
                    onPress={navData.navigation.getParam('save')} 
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15,
    },
    Texttitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
    },
    textfiltercontent: {
        fontFamily: 'open-sans-bold',
        fontSize: 15,
        textAlign: 'left',
    }
});

export default FiltersScreen;