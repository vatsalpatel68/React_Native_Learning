//CustomButton is combination of View , Text and Touchable.

import React from 'react';
import { View , Text  , TouchableOpacity , StyleSheet } from 'react-native';


const CustomButton = (props) => {
    return(
        <TouchableOpacity onPress = {props.onPress}>
        <View style = {Styles.buttonContainer}>
            <Text style = {Styles.buttonText}>{props.children}</Text>
        </View>
        </TouchableOpacity>
    )
}


const Styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor : 'skyblue',
        paddingVertical : 5,
        paddingHorizontal : 10,
        borderRadius : 10
    },
    buttonText : {
        color : 'white',
    }
});


export default CustomButton;