import React , { useState } from 'react';
import { View , TextInput , Button  , StyleSheet} from 'react-native';

const Input = (props) => {
    return(
        <View style = {{ width : '100%' , flexDirection : "row", alignItems : 'center' , justifyContent : 'center'}}>
          <TextInput style = {Styles.inputField} placeholder = "Input your task !" value = {props.instance} onChangeText = {props.changeText}/>
          <Button style = {{ paddingLeft : 10 , height : 10}}  title="Click Me !" onPress = {() => props.AddData(props.instance)} />  
     </View>
    )
}


//Define a styles.
const Styles = StyleSheet.create({
    inputField : {
      borderBottomColor : "black" ,
      borderBottomWidth : 1 ,
      width : "70%" ,
      height : 30 ,
      marginRight : 10
    }

  })
export default Input;