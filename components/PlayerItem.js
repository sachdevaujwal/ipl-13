import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import DefaultText from './DefaultText';

const PlayerItem = props => {
    return (
        <View style={styles.playerItem}>
            <TouchableOpacity onPress={props.onSelectPlayer} >
                <View>

                    <View style= {{...styles.playerRow, ...styles.PlayerHeader}}>
                        <ImageBackground 
                            source={{uri: props.image}} 
                            style={styles.bgimage} 
                        >
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleset} >{props.title}</Text>
                        </View>
                        </ImageBackground>
                        
                    </View>

                    <View style={{...styles.playerRow, ... styles.PlayerDetail}} >

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    playerRow: {
        flexDirection: 'row',
    },
    playerItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    titleset: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
    PlayerHeader: {
        height: '90%',

    },
    PlayerDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    bgimage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.65)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
});

export default PlayerItem;