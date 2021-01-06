import React , { useState } from 'react';
import { View ,
    Text ,
    StyleSheet,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

//Import the components.
import StartGame from './StartGame';

//Import the component for custom Button.
import CustomButton from './CustomButton';


const InputScreen = (props) => {
    const [ inputValue , setInputValue ] = useState('');
    const [isSubmitted , doSubmission] = useState(false);
    const [SubmittedValue , setSubmittedValue] = useState();


    const setInput = (value) => {
        setInputValue(value.replace(/[^0-9]/g , ''));
    }

    const disableKeyboard = () => {
        Keyboard.dismiss();
    }

    const resetValue = () => {
        setInputValue('');
    }

    const submitValue = () => {
        if(parseInt(inputValue) == 0)
        {
            Alert.alert("Please enter a valid number", 
            "Please enter a number between 1 to 99",
            [
                {text : "okay",
                onPress : resetValue

                }
            ]);
            return
        }
        setInputValue('');
        doSubmission(true);
        setSubmittedValue(inputValue);
        Keyboard.dismiss();

    }

    const startGame = () => {
        props.setNumber(SubmittedValue);
    }

    var answer;
    if(isSubmitted)
    {
    answer = <StartGame number = {SubmittedValue} startGame = {startGame}/>;
    }
    return(
        <ScrollView>
            <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress = {disableKeyboard}>
        <View style = {styles.mainContainer}>    
            <View style = {styles.container}>
                <TextInput 
                keyboardType = 'number-pad'
                maxLength = {2}
                autoCapitalize = {"none"}
                style = {styles.inputField} placeholder = "Please enter a number" 
                onChangeText = {setInput}
                value = {inputValue} 
                />
                <View style = {styles.buttonContainer}>
                    <CustomButton style = {{backgroundColor : 'red' }} title = "Reset" onPress = {resetValue} color = "red"/>
                    <CustomButton style = {{backgroundColor : "skyblue"}} title = "Accept" onPress = {submitValue} />
                </View>
            </View>
         {answer}
         </View>
         </TouchableWithoutFeedback>
         </KeyboardAvoidingView>
         </ScrollView>
        
    )
}


const styles = StyleSheet.create({

   container : {
        position : 'relative',
        top : '6%',
        padding  : 10,
        width : '70%',
        alignSelf : 'center',
        elevation : 2,
        borderRadius : 5  
    },
    inputField : {
        marginBottom : 10,
        fontSize : 20,
        borderBottomWidth : 2,
        borderBottomColor : "grey",
        textAlign : "center"
    },
    buttonContainer : {
        marginTop : 10,
        flexDirection : 'row',
        justifyContent : 'space-around',
        
    }
})

export default InputScreen;