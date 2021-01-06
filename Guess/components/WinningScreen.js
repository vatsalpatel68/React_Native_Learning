import React , {useState } from 'react';
import { View , Text , StyleSheet, Button , Dimensions } from 'react-native';

//Import the button;
import CustomButton from './CustomButton';

const WinningScreen = (props) => {
    const [orientation , setOrientation] = useState(Math.random());

    const changeOrientation = () => {
        setOrientation(Math.random());
   }

   Dimensions.addEventListener('change' , changeOrientation);
    return(
        <View style = {styles.winningContainer}>
            <Text style = {styles.winningFont}>Winner !</Text>
            <Text style = {styles.winningFont}>Your number is : {props.number}</Text>
            <CustomButton style = {{backgroundColor : "green" , margin : 10}} title="Restart" onPress = {props.resetGame.bind(this)}/>
        </View>
    )
}


const styles = StyleSheet.create({
    winningContainer : {
        width : '50%',
        borderWidth : 2,
        alignSelf : "center",
        justifyContent : "center",
        alignItems : "center",
        marginTop : Dimensions.get('window').height / 15,
        borderColor : "purple",
        borderRadius : 20,
    },
    winningFont : {
        fontSize : 20,
        color :  "#1a47dc",
        marginBottom : 10
    }
})

export default WinningScreen;