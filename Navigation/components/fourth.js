import React from 'react';
import { View , Text  , StyleSheet } from 'react-native';
const Fourth = (props) => {
    return(
        <View style = {styles.container}>
            <Text> Fourth component </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    }
})

export default Fourth;