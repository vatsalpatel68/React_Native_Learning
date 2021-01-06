import React from 'react';
import { View , Text  , StyleSheet, Button } from 'react-native';
const First = (props) => {
    return(
        <View style = {styles.container}>
            <Text> First component </Text>
            <Button title = "second" onPress = {() => props.navigation.navigate('second')} />
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

export default First;