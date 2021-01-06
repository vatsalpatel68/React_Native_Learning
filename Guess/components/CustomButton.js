import React from 'react';
import { View , Text , StyleSheet, TouchableOpacity } from 'react-native';


const CustomButton = (props) => {
    return(
        <TouchableOpacity style = {styles.mainContainer} onPress = {props.onPress} >
        <View style = {{...styles.buttonContainer , ...props.style}} >
            <Text style = {styles.buttonText}>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    mainContainer : {
        width : '35%'
    },
    buttonContainer : {
        padding : 5,
        borderWidth : 1,
        borderColor : "black",
        borderRadius : 10,
        flexDirection : 'row',
        width : '100%',
        justifyContent : "center"
    },

    buttonText : {
        color  : 'white'
    }
})

export default CustomButton;