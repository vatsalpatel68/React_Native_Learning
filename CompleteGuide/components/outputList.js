import React from 'react';
import {StyleSheet , View , Text, TouchableOpacity } from 'react-native';
const OutputList = (props) => {
    return(
        <TouchableOpacity onPress = {() => props.deleteItem(props.i.item.key)}>
        <View style = {Styles.listItem}>
            <Text>{props.i.item.name}</Text>
        </View>
        </TouchableOpacity>
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
    },
   
    listItem : {
      width : '96%',
      height : 30,
      margin : 5,
      paddingLeft : '3%',
      borderWidth : 0.7,
      backgroundColor : "#6eb4d4",
      alignItems : 'flex-start',
      justifyContent : "center"
    }
  })

export default OutputList;