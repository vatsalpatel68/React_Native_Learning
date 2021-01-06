import React from 'react';
import { View , Text , StyleSheet , Platform , Dimensions } from 'react-native';

const PlatFormApi = (props) => {
    
    return(
        <View style = {{ ...styles.sample , ...Platform.select({
            android : styles.android,
            ios : styles.ios
        })}}>
            <Text>this is in the android phone.</Text>
        </View>
    )

}

//If you want to change small css.
const styles = StyleSheet.create({
    sample : {
        backgroundColor : "yellow",
    },
    android : {
        height : '30%',
        width : '100%',
        
        justifyContent : 'center',
        alignItems : "center"
    },
    ios : {
        height : '30%',
        width : '100%',
        backgroundColor : "skyblue",
        justifyContent : 'center',
        alignItems : "center"
    }
})

export default PlatFormApi;