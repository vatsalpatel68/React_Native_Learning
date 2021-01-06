import React from 'react';
import { View , Text , StyleSheet, Button } from 'react-native';


const StartGame = (props) => {
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.startTextStyle}>You selected :</Text>
            <Text style = {styles.numberStyle}>{props.number}</Text>
            <Button title = "Start" onPress = {() => props.startGame()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : '50%',
        padding : 20,
        marginTop : 50,
        borderWidth : 1.5,
        borderColor : 'grey',
        alignSelf : "center",
        alignItems : "center",
        justifyContent : 'center',
        borderRadius : 30,
    },
    startTextStyle : {
        fontSize : 20
    },
    numberStyle : {
        fontSize : 30,
        color : "#ff6666"
    }    
})

export default StartGame;